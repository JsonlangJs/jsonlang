import { 
  IJsonRules, IRulesCore, RuleHandler,
  RuleIdentifier, RuleParams, Rules, ShortRuleParams
} from './core.types';

export class RuleCore implements IRulesCore {
  private rules: Map<string, RuleHandler>;
  private outputs: Map<string, any>;

  constructor() {
    this.rules = new Map();
    this.outputs = new Map();
    this.registerOne({ name: 'variable', shortName: 'var' }, this.getOutputValue);
  }

  registerMany(rules: Rules): void {
    rules.forEach((value: RuleHandler, key: RuleIdentifier) => this.registerOne(key, value));
  }

  registerOne = (ruleIdentifier: RuleIdentifier, ruleHandler: RuleHandler) => {
    this.rules.set(ruleIdentifier.name, ruleHandler);

    if (ruleIdentifier.shortName) this.rules.set(ruleIdentifier.shortName, ruleHandler);
  }

  execute = (jsonRules: IJsonRules) => {
    const { rule, inputs, output } = this.getRuleParams(jsonRules);

    const ruleHandler = this.rules.get(rule);

    if (!ruleHandler) throw Error(`The ${RuleParams.Rule} is not exist`);

    const result: any = ruleHandler(inputs.map(input => this.getInputValue(input)));

    if (output) this.setOutputValue(output, result);

    return result;
  }

  executeAsync = async (jsonRules: IJsonRules) => {
    const { rule, inputs, output } = this.getRuleParams(jsonRules);

    const ruleHandler = this.rules.get(rule);

    if (!ruleHandler) throw Error(`The ${RuleParams.Rule} is not exist`);

    try {
      const result = await ruleHandler(inputs.map(input => this.getInputValue(input)));

      if (output) this.setOutputValue(output, result);
  
      return result;
    }
    catch (error) {
      throw Error(`Failed to Run ${RuleParams.Rule} cause of ${error}`);
    }
  }

  private getRuleParams(jsonRules: IJsonRules) {
    const rule: string = (<any> jsonRules)[RuleParams.Rule] || (<any> jsonRules)[ShortRuleParams.Rule];
    const inputs: any[] = (<any> jsonRules)[RuleParams.Input] || (<any> jsonRules)[ShortRuleParams.Input];
    const output: string = (<any> jsonRules)[RuleParams.Output] || (<any> jsonRules)[ShortRuleParams.Output];

    return { rule, inputs, output };
  }
  
  private isRule = (data: any) => {
    return (
      typeof data === 'object' &&
      ( data[RuleParams.Rule] || data[ShortRuleParams.Rule] ) &&
      ( data[RuleParams.Input] || data[ShortRuleParams.Input] )
    );
  }

  private getInputValue = (input: any) => {
    return this.isRule(input) ? this.execute(input) : input;
  }

  private setOutputValue = (out: string, value: any) => {
    this.outputs.set(out, value);
  }

  private getOutputValue = (inputs: any[]) => {
    const outputValue = this.outputs.get(inputs[0]);

    if (!outputValue) throw Error(`The ${inputs[0]} output value is not exist`);

    return outputValue;
  }
}