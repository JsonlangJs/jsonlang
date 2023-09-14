import { RuleDefinition } from "@jsonlang/core";

export const getDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectGet' },
  inputs: { path: { type: 'string' }, data: { type: 'object' }, defaultValue: { type: 'any' } },
  output: { type: 'any' }
};

export const setDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectSet' },
  inputs: { path: { type: 'string' }, data: { type: 'object' }, value: { type: 'any' } },
  output: { type: 'boolean' }
};

export const updateDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectUpdate' },
  inputs: { path: { type: 'string' }, data: { type: 'object' }, value: { type: 'any' } },
  output: { type: 'boolean' }
};

export const deleteDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectDelete' },
  inputs: { path: { type: 'string' },  data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const omitDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectOmit' },
  inputs: { paths: { type: 'array' }, data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const pickDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectPick' },
  inputs: { paths: { type: 'array' }, data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const copyDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectCopy' },
  inputs: { data: { type: 'object' } },
  output: { type: 'object' }
};

export const keysDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectKeys' },
  inputs: { data: { type: 'object' } },
  output: { type: 'array' }
};

export const valuesDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectValues' },
  inputs: { data: { type: 'object' } },
  output: { type: 'array' }
};

export const invertDefinition: RuleDefinition  = { 
  identifier: { name: 'ObjectInvert' },
  inputs: { data: { type: 'object' } },
  output: { type: 'object' }
};

export const mergeDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectMerge' },
  inputs: { data: { type: 'array', items: { type: 'object' } } },
  output: { type: 'object' }
};

export const flattenDefinition: RuleDefinition  = {
  identifier: { name: 'ObjectFlatten' },
  inputs: { data: { type: 'object' } },
  output: { type: 'object' }
};
