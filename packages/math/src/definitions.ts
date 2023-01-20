import { RuleDefinition } from "@jsonlang/core";


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
