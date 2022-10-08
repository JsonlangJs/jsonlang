import { 
  CoreRules,
  IJsonLangParams, IRulesCore, RuleHandler,
  RuleIdentifier, RuleParams, RuleResult, Rules, ShortRuleParams
} from './core.types';

export class RuleCore implements IRulesCore {
  private rules: Map<string, RuleHandler>;

  constructor() {
    this.rules = new Map();
    this.registerOne({ name: 'Var' }, this.getOutputValue);
    this.registerOne({ name: 'Data' }, this.getDate);
  }

  /**
   * @param {IJsonLangParams} jsonLang
   * @param {Object} data.
   * @returns {RuleResult}
   * @description is the `Sync` version of jsonLang, use it to run all builtin rules and any extended `Sync` Rules
  */
  execute(rules: IJsonLangParams, data?: {}): RuleResult {
    const outputs = new Map();

    const result = this.run(rules, outputs, data);

    return result;
  }

  /**
   * @param {IJsonLangParams} jsonLang
   * @param {Object} data.
   * @returns {Promise<RuleResult>}
   * @description is the `Async` version of jsonLang, use it to run all builtin rules and any extended `Sync/Async` Rules
  */
  executeAsync(rules: IJsonLangParams, data?: {}): Promise<RuleResult> {
    const outputs = new Map();

    return this.runAsync(rules, outputs, data);
  }

  /**
   * @param {Rules} rules - Map of Rules.
   * @returns {void}
   * @description to extend JsonLang by a Map() of rules the "Map key" is RuleIdentifier and the "Map value" is the Sync/Async RuleHandler
  */
  registerMany = (rules: Rules) => {
    rules.forEach((value: RuleHandler, key: RuleIdentifier) => this.registerOne(key, value));
  }

  /**
   * @param {RuleIdentifier} ruleIdentifier
   * @param {RuleHandler} RuleHandler.
   * @returns {void}
   * @description to extend JsonLang by adding one Sync/Async Rule`
  */
  registerOne = (ruleIdentifier: RuleIdentifier, ruleHandler: RuleHandler) => {
    this.rules.set(ruleIdentifier.name, ruleHandler);

    if (ruleIdentifier.shortcut) this.rules.set(ruleIdentifier.shortcut, ruleHandler);
  }


  private run = (jsonLang: IJsonLangParams, outputs: Map<string, any>, data?: {}) => {
    const { rule, inputs = [], output } = this.getRuleParams(jsonLang);

    const ruleHandler = this.rules.get(rule);

    if (!ruleHandler) throw Error(`The "${rule}" is not exist`);

    let resolvedInputs = inputs.map(input => this.getInputValue(input, outputs, data));
    resolvedInputs = this.getAllInputs(rule, resolvedInputs, outputs, data);

    const result = <RuleResult> ruleHandler(...resolvedInputs);

    if (output) this.setOutputValue(output, result, outputs);

    return result;
  }

  private runAsync = async (jsonLang: IJsonLangParams, outputs: Map<string, any>, data?: {}) => {
    const { rule, inputs = [], output } = this.getRuleParams(jsonLang);

    const ruleHandler = this.rules.get(rule);

    if (!ruleHandler) throw Error(`The "${rule}" is not exist`);

    try {
      let resolvedInputs: any[] = [];

      for (const input of inputs) {
        const result = await this.getInputValueAsync(input, outputs, data);

        resolvedInputs.push(result);
      }

      resolvedInputs = this.getAllInputs(rule, resolvedInputs, outputs, data);

      const result = await ruleHandler(...resolvedInputs);

      if (output) this.setOutputValue(output, result, outputs);
  
      return result;
    }
    catch (error) {
      throw Error(`Failed to Run "${rule}" cause of ${error}`);
    }
  }

  private getAllInputs(rule: string, inputs: any[], outputs: Map<string, any>, data?: {}) {
    let params = inputs;

    if (rule === CoreRules.Var) {
      params = [inputs[0], outputs];
    }
    else if (rule === CoreRules.Data) {
      params = [data];
    }

    return params;
  }

  private getRuleParams(jsonLang: IJsonLangParams) {
    const rule: string = (<any> jsonLang)[RuleParams.Rule] || (<any> jsonLang)[ShortRuleParams.Rule];
    const inputs: any[] = (<any> jsonLang)[RuleParams.Input] || (<any> jsonLang)[ShortRuleParams.Input];
    const output: string = (<any> jsonLang)[RuleParams.Output] || (<any> jsonLang)[ShortRuleParams.Output];

    return { rule, inputs, output };
  }
  
  private isRule = (data: any) => {
    if (!data || typeof data !== 'object') return false;

    const rule = data[RuleParams.Rule] || data[ShortRuleParams.Rule];

    return rule && this.rules.get(rule);
  }

  private getInputValue = (input: any,outputs: Map<string, any>,  data?: {}) => {
    return this.isRule(input) ? this.run(input, outputs, data) : input;
  }

  private getInputValueAsync = async (input: any, outputs: Map<string, any>, data?: {}) => {
    return this.isRule(input) ? this.runAsync(input, outputs, data) : input;
  }

  private setOutputValue = (out: string, value: any, outputs: Map<string, any>) => {
    outputs.set(out, value);
  }

  private getOutputValue = (varName: string, outputs: Map<string, any>) => {
    const outputValue = outputs.get(varName);

    if (!outputValue) throw Error(`The "${varName}" output value is not exist`);

    return outputValue;
  }

  private getDate = (data: {}) => {
    if (!data) throw Error('There is no data passed');

    return data;
  }
}