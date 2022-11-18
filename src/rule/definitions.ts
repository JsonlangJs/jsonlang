import { RuleDefinition } from "../core";


/*=============================== Data ================================== */

export const dataDefinition: RuleDefinition  = {
  identifier: { name: 'getData', shortcut: 'Data' },
  inputs:{ varName: { type: 'string', description: 'use * to get all data' }, type: {type: 'string', enum: ['External', 'Internal', 'Scoped']} },
  output: { type: 'any' }
};


/*======================================================================= */

/*=============================== Array =============================== */

export const allDefinition: RuleDefinition  = {
  identifier: { name: 'All' },
  inputs: { type: 'array' },
  output: { type: 'array' }
};

export const seqDefinition: RuleDefinition  = {
  identifier: { name: 'Sequence', shortcut: 'Seq' },
  inputs: { type: 'rule' },
  output: { type: 'array' }
};

export const filterDefinition: RuleDefinition  = {
  identifier:{ name: 'Filter' },
  inputs:{ array: {type: 'array'} },
  output:{ type: 'array' }
};

export const foreachDefinition: RuleDefinition  = {
  identifier:{ name: 'Foreach' },
  inputs:{ array: {type: 'array'} },
  output:{ type: 'array' }
};

export const mapDefinition: RuleDefinition  = {
  identifier:{ name: 'Map' },
  inputs:{ array: {type: 'array'} },
  output:{ type: 'array' }
};

export const flattenDefinition: RuleDefinition  = {
  identifier:{ name: 'Flatten' },
  inputs:{ nestedArray: {type: 'array'}, level: {type: 'number'} },
  output:{ type: 'array' }
};

export const arrayContactDefinition: RuleDefinition = {
  identifier:{ name: 'ArrayConcat' }, 
  inputs:{ firstArray: {type: 'array'}, secondArray: {type: 'array'} },
  output:{ type: 'array' }
};

export const arrayUniqueDefinition: RuleDefinition = {
  identifier:{ name: 'ArrayUnique' }, 
  inputs:{ array: {type: 'array'} },
  output:{ type: 'array' }
};

/*======================================================================= */

/*=============================== Logical =============================== */

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


/*==================================================================== */

/*=============================== Math =============================== */


export const sumDefinition: RuleDefinition  = {
  identifier: { name: 'Sum', shortcut: '+' },
  inputs: { type: 'array', items: { type: 'number' } },
  output: { type: 'boolean' }
};

export const subtractDefinition: RuleDefinition  = {
  identifier: { name: 'Subtract', shortcut: '-' },
  inputs: { type: 'array', items: { type: 'number' } },
  output: { type: 'boolean' }
};

export const multiplyDefinition: RuleDefinition  = {
  identifier: { name: 'Multiply', shortcut: '*' },
  inputs: { type: 'array', items: { type: 'number' } },
  output: { type: 'boolean' }
};

export const divideDefinition: RuleDefinition  = {
  identifier: { name: 'Divide', shortcut: '/' },
  inputs: { type: 'array', items: { type: 'number' } },
  output: { type: 'boolean' }
};

export const minimumDefinition: RuleDefinition  = {
  identifier: { name: 'Minimum', shortcut: 'Min' },
  inputs: { type: 'array', items: { type: 'number' } },
  output: { type: 'boolean' }
};

export const maximumDefinition: RuleDefinition  = {
  identifier: { name: 'Maximum', shortcut: 'Max' },
  inputs: { type: 'array', items: { type: 'number' } },
  output: { type: 'boolean' }
};

/*====================================================================== */

/*=============================== Object =============================== */

export const getDefinition: RuleDefinition  = {
  identifier: { name: 'Get' },
  inputs: { path: { type: 'array' }, defaultValue: { type: 'any' }, data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const setDefinition: RuleDefinition  = {
  identifier: { name: 'Set' },
  inputs: { path: { type: 'array' }, value: { type: 'any' }, data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const updateDefinition: RuleDefinition  = {
  identifier: { name: 'Update' },
  inputs: { path: { type: 'array' }, value: { type: 'any' }, data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const deleteDefinition: RuleDefinition  = {
  identifier: { name: 'Delete' },
  inputs: { path: { type: 'array' },  data: { type: 'object' } },
  output: { type: 'boolean' }
};

/*====================================================================== */
