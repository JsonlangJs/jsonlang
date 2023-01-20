import { RuleDefinition } from "@jsonlang/core";


export const isNullDefinition: RuleDefinition  = {
  identifier: { name: 'IsNull' },
  inputs: { type: 'any' },
  output: { type: 'boolean' }
};

export const isEmptyDefinition: RuleDefinition  = {
  identifier: { name: 'IsEmpty' },
  inputs: { type: 'any' },
  output: { type: 'boolean' }
};

export const isNumberDefinition: RuleDefinition  = {
  identifier: { name: 'IsNumber', shortcut: 'IsNum' },
  inputs: { type: 'any' },
  output: { type: 'boolean' }
};

export const isStringDefinition: RuleDefinition  = {
  identifier: { name: 'IsString', shortcut: 'IsStr' },
  inputs: { type: 'any' },
  output: { type: 'boolean' }
};

export const isBooleanDefinition: RuleDefinition  = {
  identifier: { name: 'IsBoolean', shortcut: 'IsBool' },
  inputs: { type: 'any' },
  output: { type: 'boolean' }
};

export const isArrayDefinition: RuleDefinition  = {
  identifier: { name: 'IsArray', shortcut: 'IsArr' },
  inputs: { type: 'any' },
  output: { type: 'boolean' }
};

export const isObjectDefinition: RuleDefinition  = {
  identifier: { name: 'IsObject', shortcut: 'IsObj' },
  inputs: { type: 'any' },
  output: { type: 'boolean' }
};

export const andDefinition: RuleDefinition  = {
  identifier: { name: 'And', shortcut: '&&' },
  inputs: { type: 'array' },
  output: { type: 'boolean' }
};

export const orDefinition: RuleDefinition  = {
  identifier: { name: 'Or', shortcut: '||' },
  inputs: { type: 'array' },
  output: { type: 'boolean' }
};

export const equalDefinition: RuleDefinition  = {
  identifier: { name: 'Equal', shortcut: '==' },
  inputs: { lhs: { type: 'any' }, rhs: { type: 'any' } },
  output: { type: 'boolean' }
};

export const notEqualDefinition: RuleDefinition  = {
  identifier: { name: 'NotEqual', shortcut: '!=' },
  inputs: { lhs: { type: 'any' }, rhs: { type: 'any' } },
  output: { type: 'boolean' }
};

export const notDefinition: RuleDefinition  = {
  identifier: { name: 'Not', shortcut: '!' },
  inputs: { type: 'any' },
  output: { type: 'boolean' }
};

export const greaterThanDefinition: RuleDefinition  = {
  identifier: { name: 'GreaterThan', shortcut: '>' },
  inputs: { lhs: { type: 'number' }, rhs: { type: 'number' } },
  output: { type: 'boolean' }
};

export const lessThanDefinition: RuleDefinition  = {
  identifier: { name: 'LessThan', shortcut: '<' },
  inputs: { lhs: { type: 'number' }, rhs: { type: 'number' } },
  output: { type: 'boolean' }
};

export const greaterThanOrEqualDefinition: RuleDefinition  = {
  identifier: { name: 'GreaterThanOrEqual', shortcut: '>=' },
  inputs: { lhs: { type: 'number' }, rhs: { type: 'number' } },
  output: { type: 'boolean' }
};

export const lessThanOrEqualDefinition: RuleDefinition  = {
  identifier: { name: 'LessThanOrEqual', shortcut: '<=' },
  inputs: { lhs: { type: 'number' }, rhs: { type: 'number' } },
  output: { type: 'boolean' }
};

export const IfDefinition: RuleDefinition  = {
  identifier: { name: 'If' },
  inputs: { $rule_condition: { type: 'rule' }, $rule_then: { type: 'rule' }, $rule_else: { type: 'rule' } },
  output: { type: 'boolean' }
};
