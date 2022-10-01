
export type IRulesCore = {
  registerOne(ruleIdentifier: RuleIdentifier, ruleHandler: RuleHandler): void;
  registerMany(rules: Rules): void;
  // validate(rules: IJsonRules): RulesValidation;
  execute(rules: IJsonRules, data?: {}): RuleResult;
  executeAsync(rules: IJsonRules, data?: {}): Promise<RuleResult>;
}

export type RuleIdentifier = {
  name: string;
  shortName?: string;
} 

export type RuleHandler = ((inputs: RuleInput[], data?: {}) => RuleResult) | ((inputs: RuleInput[], data?: {}) => Promise<RuleResult>);

export type RuleInput = string | number | boolean | bigint | string[] | number[] | boolean[] | bigint[] | IJsonRules;

export type RuleResult = string | number | boolean | bigint | string[] | number[] | boolean[] | bigint[] | IJsonRules;

export type RulesValidation = {
  isValid: boolean;
  errors: string[];
}

export enum RuleParams {
  Rule = 'Rule',
  Input = 'Input',
  Output = 'Output',
}

export enum ShortRuleParams {
  Rule = 'R',
  Input = 'I',
  Output = 'O',
}

export type IJsonRules = {
  [RuleParams.Rule]: string;
  [RuleParams.Input]: string[] | number [] | boolean [] | any [] | IJsonRules [];
  [RuleParams.Output]?: symbol;
} | 
{
  [ShortRuleParams.Rule]: string;
  [ShortRuleParams.Input]: string[] | number [] | boolean [] | any [] | IJsonRules [];
  [ShortRuleParams.Output]?: symbol;
};

export interface RulesImplementation {
  getRules(): Rules;
};

export type Rules = Map<RuleIdentifier, RuleHandler>;
