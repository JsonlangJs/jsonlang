import { RuleDefinition } from "../core";


/*=============================== Data ================================== */

export const dataDefinition: RuleDefinition  = {
  identifier: { name: 'getData', shortcut: 'Data' },
  inputs:{ varName: { type: 'string', description: 'use * to get all data' }, type: {type: 'string', enum: ['External', 'Internal', 'Scoped']} },
  output: { type: 'any' }
};