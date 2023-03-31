import { RuleDefinition } from "@jsonlang/core";

export const getDefinition: RuleDefinition  = {
  identifier: { name: 'Get' },
  inputs: { path: { type: 'string' }, data: { type: 'object' }, defaultValue: { type: 'any' } },
  output: { type: 'any' }
};

export const setDefinition: RuleDefinition  = {
  identifier: { name: 'Set' },
  inputs: { path: { type: 'string' }, data: { type: 'object' }, value: { type: 'any' } },
  output: { type: 'boolean' }
};

export const updateDefinition: RuleDefinition  = {
  identifier: { name: 'Update' },
  inputs: { path: { type: 'string' }, data: { type: 'object' }, value: { type: 'any' } },
  output: { type: 'boolean' }
};

export const deleteDefinition: RuleDefinition  = {
  identifier: { name: 'Delete' },
  inputs: { path: { type: 'string' },  data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const omitDefinition: RuleDefinition  = {
  identifier: { name: 'Omit' },
  inputs: { paths: { type: 'array' }, data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const pickDefinition: RuleDefinition  = {
  identifier: { name: 'Pick' },
  inputs: { paths: { type: 'array' }, data: { type: 'object' } },
  output: { type: 'boolean' }
};

export const copyDefinition: RuleDefinition  = {
  identifier: { name: 'Copy' },
  inputs: { data: { type: 'object' } },
  output: { type: 'object' }
};

export const keysDefinition: RuleDefinition  = {
  identifier: { name: 'Copy' },
  inputs: { data: { type: 'object' } },
  output: { type: 'array' }
};

export const valuesDefinition: RuleDefinition  = {
  identifier: { name: 'Copy' },
  inputs: { data: { type: 'object' } },
  output: { type: 'array' }
};

export const invertDefinition: RuleDefinition  = { 
  identifier: { name: 'Invert' },
  inputs: { data: { type: 'object' } },
  output: { type: 'object' }
};

export const mergeDefinition: RuleDefinition  = {
  identifier: { name: 'Merge' },
  inputs: { data: { type: 'array', items: { type: 'object' } } },
  output: { type: 'object' }
};
