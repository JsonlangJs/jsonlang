import { RuleDefinition } from "@jsonlang/core";

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

