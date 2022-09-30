
export type IRulesCore = {
  registerOne(ruleIdentifier: RuleIdentifier, ruleHandler: RuleHandler): void;
  registerMany(rules: Rules): void;
  // validate(rules: IJsonRules): RulesValidation;
  execute(rules: IJsonRules): Promise<any>;
}

export type RuleIdentifier = {
  name: string;
  shortName?: string;
} 

export type RuleHandler = ((inputs: any[]) => any) | ((inputs: any[]) => Promise<any>);

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
  [RuleParams.Output]?: string;
} | 
{
  [ShortRuleParams.Rule]: string;
  [ShortRuleParams.Input]: string[] | number [] | boolean [] | any [] | IJsonRules [];
  [ShortRuleParams.Output]?: string;
};

export interface RulesImplementation {
  getRules(): Rules;
};

export type Rules = Map<RuleIdentifier, RuleHandler>;
