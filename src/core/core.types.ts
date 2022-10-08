
export type IRulesCore = {
  registerOne(ruleIdentifier: RuleIdentifier, ruleHandler: RuleHandler): void;
  registerMany(rules: Rules): void;
  // validate(rules: IJsonLangParams): RulesValidation;
  execute(rules: IJsonLangParams, data?: {}): RuleResult;
  executeAsync(rules: IJsonLangParams, data?: {}): Promise<RuleResult>;
}

export type RuleIdentifier = {
 /**
   * the `Rule` name i.e. "And", "Or"
  */
  name: string;
  /**
   *  the shortcut. i.e `Sum` is the `name`, and `+` is the `shortcut`
   */
  shortcut?: string;
} 

/**
 * Sync/Async Function `(inputs: RuleInput[], data?: {}) => RuleResult)`, `inputs`(required) is array of all inputs needs for the handler, and `data` is the schemaless data
*/
export type RuleHandler = ((...inputs: RuleInput[]) => RuleResult) | ((...inputs: RuleInput[]) => Promise<RuleResult>);

export type RuleInput = string | number | boolean | bigint | string[] | number[] | boolean[] | bigint[] | any | IJsonLangParams;

export type RuleResult = string | number | boolean | bigint | string[] | number[] | boolean[] | bigint[] | any | IJsonLangParams;

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

export type IJsonLangParams = {
  /**
    * Rule: is rule name itself. i.e. "And", "Or", "==", ">"
  */
  [RuleParams.Rule]: string;
  /**
   * Input: is array of inputs which will passed to the "Rule" handler/function, their type depends on the "Rule" handler or it have be a nested rule
   */
  [RuleParams.Input]?: string[] | number [] | boolean [] | any [] | IJsonLangParams [];
  /**
   *  Output: it accept a name of variable which used to save the Rule result in a variable and can be called in any other rule by `{ "Rule": "Var": "Input": ["variableX"] }`.
   *  The output value should be unique as if you defined the same value more than one time, the last one will override the value of the pervious one.
   */
  [RuleParams.Output]?: symbol;
} | 
{
  /**
    * R: is rule name itself. i.e. "And", "Or", "==", ">"
  */
  [ShortRuleParams.Rule]: string;
  /**
   * I: is array of inputs which will passed to the "Rule" handler/function, their type depends on the "Rule" handler or it have be a nested rule
  */
  [ShortRuleParams.Input]?: string[] | number [] | boolean [] | any [] | IJsonLangParams [];
  /**
   * O: is array of inputs which will passed to the "Rule" handler/function, their type depends on the "Rule" handler or it have be a nested rule
  */
  [ShortRuleParams.Output]?: symbol;
};

export interface RulesImplementation {
  getRules(): Rules;
};

/**
 * A Set of Rules
 * RuleIdentifier: Object `{ name: string, shortcut?: string }`, `name`(required) is the `Rule` name, and `shortcut`(optional) is the shortcut. i.e `Sum` is the `name`, and `+` is the `shortcut`
 * RuleHandler: Sync/Async Function `(inputs: RuleInput[], data?: {}) => RuleResult)`, `inputs`(required) is array of all inputs needs for the handler, and `data` is the schemaless data
 */
export type Rules = Map<RuleIdentifier, RuleHandler>;


export enum CoreRules {
  Var = 'Var',
  Data = 'Data'
}