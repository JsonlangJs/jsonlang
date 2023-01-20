import { 
  IJsonLangParams, InnerRules, RuleHandler,
  RuleParams, RuleResult, Rules, RuleDefinition, LocalData, JsonLangOptions, SyncJsonLangOptions, AsyncJsonLangOptions, AsyncRuleHandler
} from './core.types';
import { RuleDefinitionParser } from "./rule-parser";


export class RuleCore {
  private rules: Map<string, RuleHandler>;
  private rulesDefinitions: Map<string, RuleDefinition>;
  private sync: boolean;

  constructor(options?: JsonLangOptions) {
    this.sync = options?.sync || false;
    this.rules = new Map();
    this.rulesDefinitions = new Map();
  }

  /**
   * @param {IJsonLangParams} jsonLang
   * @param {Object} data.
   * @returns {Promise<RuleResult> | RuleResult}
   * @description use it to run all rules and any extended `Sync/Async` Rules
  */
   async execute(rules: IJsonLangParams, data?: {}, options?: AsyncJsonLangOptions): Promise<RuleResult>;
  execute(rules: IJsonLangParams, data?: {}, options?: SyncJsonLangOptions): RuleResult;
  execute(rules: IJsonLangParams, data?: {}, options?: JsonLangOptions): Promise<RuleResult> | RuleResult {
    const localData = new Map();
    const sync = options?.sync || this.sync;

    return sync ? this.createSyncRunContext(localData, data)(rules) : this.createRunContext(localData, data)(rules);
  }


  /**
   * @param {Class[]} RuleClasses - Array of Classes which contain methods/rules.
   * @returns {void}
   * @description to extend JsonLang by importing a class with @JsonLangExtension decorator, and register its methods by @RuleExtension decorator
  */
  import = (...ruleClasses: any[]) => {
    [...ruleClasses].forEach((RuleClass: any) => {
      console.log('RuleClass', RuleClass);

      if (!RuleClass.prototype) return;

      const ruleClass = new RuleClass();

      console.log('ruleClass', ruleClass);

      const propertyNames = Object.getOwnPropertyNames(RuleClass.prototype);
      
      propertyNames.forEach((propertyName) => {
        console.log('propertyName', propertyName);

        const group = Reflect.getMetadata('jsonlang:group', RuleClass)?.name || 'Others';
        const ruleDefinition: RuleDefinition = Reflect.getMetadata('jsonlang:rule', RuleClass, propertyName);
        console.log('ruleDefinition', ruleDefinition);

        if (ruleDefinition) {
          const handler = ruleClass[propertyName].bind(ruleClass);
          console.log('handler', handler);

          ruleDefinition.identifier.group = ruleDefinition.identifier.group || group;
          const ruleHandler: any = ruleDefinition.sync ? { sync: handler } : { async: handler };

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
  registerOne = (definition: Omit<RuleDefinition, 'sync'>, ruleHandler: RuleHandler) => {
    const handler: any = ruleHandler.sync || ruleHandler.async;
    const ruleDefinition = RuleDefinitionParser.parse(handler, [], definition);
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
    let finalDefinition = definition;
    let finalRuleHandler = ruleHandler;
    const existingRule = this.rules.get(definition.identifier.name);

    if (existingRule) {
      finalRuleHandler = Object.assign(existingRule, ruleHandler);
      finalDefinition = this.rulesDefinitions.get(definition.identifier.name) || definition;
    }

    finalRuleHandler.async = finalRuleHandler.async || finalRuleHandler.sync;
    finalRuleHandler.sync = finalRuleHandler.sync || finalRuleHandler.async;

    this.rules.set(definition.identifier.name, finalRuleHandler);
    this.rulesDefinitions.set(definition.identifier.name, finalDefinition);

    if (definition.identifier.shortcut) {
      this.rulesDefinitions.set(definition.identifier.shortcut, finalDefinition);
      this.rules.set(definition.identifier.shortcut, finalRuleHandler);
    }
  }

  private createRunContext = (localDataStore: Map<string, any>, data?: {}) => {

    const runner = async (jsonLang: IJsonLangParams, localData?: LocalData) => {
      if (localData?.key) localDataStore.set(localData.key, localData?.value);

      if (!this.isRule(jsonLang)) return jsonLang;

      const { ruleHandler, rule, inputs = [], output } = this.getRuleParams(jsonLang);
      try {
        const resolvedInputs = await this.resolveRuleInputs(rule, inputs, runner, data, localDataStore);
        const handler: any = ruleHandler.async || ruleHandler.sync;
        const result = await handler(...resolvedInputs);
  
        if (output) localDataStore.set(output, result);
    
        return result;
      }
      catch (error) {
        throw Error(`Failed to Run "${rule}" cause of ${error}`);
      }
    }
    
    return runner;
  }

  private createSyncRunContext = (localDataStore: Map<string, any>, data?: {}) => {

    const runner = (jsonLang: IJsonLangParams, localData?: LocalData) => {
      if (localData?.key) localDataStore.set(localData.key, localData?.value);

      if (!this.isRule(jsonLang)) return jsonLang;

      const { ruleHandler, rule, inputs = [], output } = this.getRuleParams(jsonLang);
      try {
        const resolvedInputs = this.resolveSyncRuleInputs(rule, inputs, runner, data, localDataStore);
        const handler: any = ruleHandler.sync;
        const result = handler(...resolvedInputs);
  
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

    return this.getInputsWithActions(runner, globalData, localDataStore, innerRules, resolvedInputs);
  }

  private resolveSyncRuleInputs = (
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
      const result = this.isRule(input) && !innerRules.rules.includes(i) ? runner(input) : input;
      resolvedInputs.push(result);
    }

    return this.getInputsWithActions(runner, globalData, localDataStore, innerRules, resolvedInputs);
  }

  private getInputsWithActions = (
    runner: Function,
    globalData: {} = {},
    localDataStore: Map<string, any>,
    innerRules: InnerRules,
    resolvedInputs: any[],
  ) => {
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
