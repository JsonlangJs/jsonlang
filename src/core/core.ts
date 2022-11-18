import { 
  IJsonLangParams, InnerRules, RuleHandler,
  RuleParams, RuleResult, Rules, RuleDefinition, LocalData
} from './core.types';
import { RuleDefinitionParser } from "./rule-parser";


export class RuleCore {
  private rules: Map<string, RuleHandler>;
  private rulesDefinitions: Map<string, RuleDefinition>;

  constructor() {
    this.rules = new Map();
    this.rulesDefinitions = new Map();
  }

  /**
   * @param {IJsonLangParams} jsonLang
   * @param {Object} data.
   * @returns {Promise<RuleResult>}
   * @description is the `Async` version of jsonLang, use it to run all builtin rules and any extended `Sync/Async` Rules
  */
  execute(rules: IJsonLangParams, data?: {}): Promise<RuleResult> {
    const localData = new Map();
    const run = this.createRunContext(localData, data);

    return run(rules);
  }

  /**
   * @param {Class[]} RuleClasses - Array of Classes which contain methods/rules.
   * @returns {void}
   * @description to extend JsonLang by importing a class with @JsonLangExtension decorator, and register its methods by @RuleExtension decorator
  */
  import = (RuleClasses: any) => {
    RuleClasses.forEach((RuleClass: any) => {
      if (!RuleClass.prototype) return;

      const ruleClass = new RuleClass();
      const propertyNames = Object.getOwnPropertyNames(RuleClass.prototype);
      
      propertyNames.forEach((propertyName) => {
        const group = Reflect.getMetadata('jsonlang:group', RuleClass)?.name || 'Others';
        const ruleDefinition = Reflect.getMetadata('jsonlang:rule', RuleClass, propertyName);
  
        if (ruleDefinition) {
          const ruleHandler: RuleHandler = ruleClass[propertyName].bind(ruleClass);
          ruleDefinition.identifier.group = ruleDefinition.identifier.group || group;

          this.setRuleWithDefinition(ruleDefinition, ruleHandler)
        }
      });
    });
  }

  /**
   * @param {Rules} rules - Map of Rules.
   * @returns {void}
   * @description to extend JsonLang by a Map() of rules the "Map key" is RuleIdentifier and the "Map value" is the Sync/Async RuleHandler
  */
  registerMany = (rules: Rules) => {
    rules.forEach((value: RuleHandler, key: RuleDefinition) => this.registerOne(key, value));
  }

  /**
   * @param {RuleIdentifier} ruleIdentifier
   * @param {RuleHandler} RuleHandler.
   * @returns {void}
   * @description to extend JsonLang by adding one Sync/Async Rule
  */
  registerOne = (definition: RuleDefinition, ruleHandler: RuleHandler) => {
    const ruleDefinition = RuleDefinitionParser.parse(ruleHandler, [], definition);
    this.setRuleWithDefinition(ruleDefinition, ruleHandler)
  }

  /**
   * @param {string[]} rules - Optional Array of Rules' names or shortcuts to get their definitions.
   * @returns {RuleDefinition[]}
   * @description Get rules definitions, if no rules names passed, it will return all rules definitions 
  */
  getRulesDefinitions = (rules?: string[]): RuleDefinition[] => {
    const definitions = new Map();

    this.rulesDefinitions.forEach((definition, rule) => {
      const id = definition.identifier.name + definition.identifier.shortcut || '';

      if (rules) {
        if (rules.includes(rule)) definitions.set(id, definition);
      }
      else {
        definitions.set(id, definition);
      }
    });

    return [...definitions.values()]
  };


  private setRuleWithDefinition(definition: RuleDefinition, ruleHandler: RuleHandler) {
    this.rules.set(definition.identifier.name, ruleHandler);
    this.rulesDefinitions.set(definition.identifier.name, definition);

    if (definition.identifier.shortcut) {
      this.rulesDefinitions.set(definition.identifier.shortcut, definition);
      this.rules.set(definition.identifier.shortcut, ruleHandler);
    }
  }

  private createRunContext = (localDataStore: Map<string, any>, data?: {}) => {

    const runner = async (jsonLang: IJsonLangParams, localData?: LocalData) => {
      if (localData?.key) localDataStore.set(localData.key, localData?.value);

      if (!this.isRule(jsonLang)) return jsonLang;

      const { ruleHandler, rule, inputs = [], output } = this.getRuleParams(jsonLang);
      try {
        const resolvedInputs = await this.resolveRuleInputs(rule, inputs, runner, data, localDataStore);
  
        const result = await ruleHandler(...resolvedInputs);
  
        if (output) localDataStore.set(output, result);
    
        return result;
      }
      catch (error) {
        throw Error(`Failed to Run "${rule}" cause of ${error}`);
      }
    }
    
    return runner;
  }


  private resolveRuleInputs = async (
    rule: string,
    inputs: any[], 
    runner: Function,
    globalData: {} = {},
    localDataStore: Map<string, any>,
  ) => {
    const resolvedInputs = [];
    const innerRules = this.getHandlerInnerRules(rule);

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const result = this.isRule(input) && !innerRules.rules.includes(i) ? await runner(input) : input;
      resolvedInputs.push(result);
    }

    if (innerRules.runner) resolvedInputs.splice(innerRules.runner, 0, <any> runner);
    if (innerRules.localData) resolvedInputs.splice(innerRules.localData, 0, <any> localDataStore);
    if (innerRules.globalData) resolvedInputs.splice(innerRules.globalData, 0, <any> globalData);

    return resolvedInputs;
  }


  private getRuleParams(jsonLang: IJsonLangParams) {
    const rule: string = jsonLang[RuleParams.Rule];
    const inputs = jsonLang[RuleParams.Input]
    const output = jsonLang[RuleParams.Output];

    if (!Array.isArray(inputs)) throw new Error('Invalid Rule, $I must be an array');

    const ruleHandler = this.rules.get(rule);
    
    if (!ruleHandler) throw Error(`The "${rule}" Rule is not exist`);

    return { ruleHandler, rule, inputs, output };
  }

  private getHandlerInnerRules = (rule: string) => {
    const innerRules: InnerRules = { runner: null, globalData: null, localData: null, rules: [] };
    const [definition] = this.getRulesDefinitions([rule]);

    if (!definition?.inputs) return innerRules;

    if (definition?.inputs?.type && Object.keys(definition?.inputs).length === 1) {
      if (definition.inputs.type === 'runner') innerRules.runner = 0;
      if (definition.inputs.type === 'globalData') innerRules.globalData = 0;
      if (definition.inputs.type === 'localData') innerRules.localData = 0;
      if (definition.inputs.type === 'rule') innerRules.rules = [0];
    }
    else {
      for (const key in definition?.inputs) {
        if ((<any> definition.inputs)[key].type === 'runner') innerRules.runner = (<any> definition.inputs)[key].index;
        if ((<any> definition.inputs)[key].type === 'globalData') innerRules.globalData = (<any> definition.inputs)[key].index;
        if ((<any> definition.inputs)[key].type === 'localData') innerRules.localData = (<any> definition.inputs)[key].index;
        if ((<any> definition.inputs)[key].type === 'rule') innerRules.rules.push((<any> definition.inputs)[key].index);
      }
    }

    return innerRules;
  }

  private isRule = (data: any) => (data && typeof data === 'object' && data[RuleParams.Rule])
}
