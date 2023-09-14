
export type RuleIdentifier = {
 /**
   * the `Rule` name i.e. "And", "Or"
  */
  name: string;
  /**
   *  the shortcut. i.e `Sum` is the `name`, and `+` is the `shortcut`
   *  it is required and it must be unique
   */
  shortcut?: string;
  /**
   *  used to group set of rules in one group
  */
  group?: string;
  /**
   * used to describe the rule in details  
  */
  description?: string;
  /**
   * used to identify the rule in a human readable way
   * It will be used in the UI builder
   * if it's not defined, the `name` will be used
  */
  label?: string; 
} 

/**
 * Sync/Async Function `(inputs: RuleInput[], data?: {}) => RuleResult)`, `inputs`(required) is array of all inputs needs for the handler, and `data` is the schemaless data
*/
export type AsyncRuleHandler = ((...inputs: RuleInput[]) => Promise<RuleResult>);
export type SyncRuleHandler = ((...inputs: RuleInput[]) => RuleResult);

export type RuleInput = string | number | boolean | bigint | string[] | number[] | boolean[] | bigint[] | {[key: string]: any} | IJsonLangParams;

export type RuleResult = string | number | boolean | bigint | string[] | number[] | boolean[] | bigint[] | {[key: string]: any} | IJsonLangParams;

export type JsonLangOptions = {
  sync?: boolean;
}

export type SyncJsonLangOptions = JsonLangOptions & {
  sync?: true
}

export type AsyncJsonLangOptions = JsonLangOptions & {
  sync?: false
}

export type RulesValidation = {
  isValid: boolean;
  errors: string[];
}

export enum RuleParams {
  Rule = '$R',
  Input = '$I',
  Output = '$O',
}

export type IJsonLangParams = {
  /**
    * Rule: is rule name itself. i.e. "And", "Or", "==", ">"
  */
  [RuleParams.Rule]: string;
  /**
   * Input: is array of inputs which will passed to the "Rule" handler/function, their type depends on the "Rule" handler or it have be a nested rule
   */
  [RuleParams.Input]: RuleInput[];
  /**
   *  Output: it accept a name of variable which used to save the Rule result in a variable and can be called in any other rule by `{ "Rule": "Var": "Input": ["variableX"] }`.
   *  The output value should be unique as if you defined the same value more than one time, the last one will override the value of the pervious one.
   */
  [RuleParams.Output]?: string;
};


/**
 * A Set of Rules
 * RuleIdentifier: Object `{ name: string, shortcut?: string }`, `name`(required) is the `Rule` name, and `shortcut`(optional) is the shortcut. i.e `Sum` is the `name`, and `+` is the `shortcut`
 * RuleHandler: Sync/Async Function `(inputs: RuleInput[], data?: {}) => RuleResult)`, `inputs`(required) is array of all inputs needs for the handler, and `data` is the schemaless data
 */
export type Rules = Map<Omit<RuleDefinition, 'sync'>, RuleHandler>;

export type RuleHandler = { sync: SyncRuleHandler, async?: SyncRuleHandler } | { sync?: SyncRuleHandler, async: AsyncRuleHandler };


export enum CoreRules {
  Data = 'Data',
}

export enum DataScope {
  External = 'External',
  Internal = 'Internal',
}

export type LocalData = {
  key: string;
  value: any;
}

export interface JsonSchema {
  title?: string;
  description?: string;
  type?: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'rule' | 'runner' | 'globalData' | 'localData' | 'null' | 'any';
  nullable?: boolean;
  examples?: any[];
  deprecated?: boolean;
  items?: JsonSchema | JsonSchema[];
  properties?: {[propertyName: string]: (JsonSchema)};
  format?: string;
  default?: any;
  maximum?: number;
  minimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
}

export type RuleInputs = {
  [key in string]: JsonSchema;
} | JsonSchema;

export type RuleOutput = JsonSchema;

export type RuleDefinition = {
  identifier: RuleIdentifier;
  sync?: boolean;
  inputs?: RuleInputs;
  output?: RuleOutput;
}

export type Runner = (jsonLang: IJsonLangParams, localData?: LocalData) => any;

export interface InnerRules { 
  runner: number | null, 
  globalData: number | null, 
  localData: number | null, 
  rules: number[]
};
