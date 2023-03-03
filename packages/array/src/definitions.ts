import { RuleDefinition } from "@jsonlang/core";


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
  inputs:{ inputs: {type: 'array'} },
  output:{ type: 'array' }
};
