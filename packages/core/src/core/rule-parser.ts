import { RuleDefinition, AsyncRuleHandler, RuleIdentifier } from "./core.types";

export class RuleDefinitionParser {

  static parse = (handler: AsyncRuleHandler, argsTypes: string[] = [], definition: RuleDefinition): RuleDefinition => {
    const { identifier, inputs, output, sync } = definition || {};
    
    let ruleInputs: any = {};
    const argsNames: any[] = handler.toString()?.match(/\((.*?)\)/)?.[1]?.split(',')?.map((i: any) => i.trim()) || [];

    if (argsNames.length === 1 && argsNames[0].length === 0 && argsTypes[0] === 'Object') {
      ruleInputs = { type: 'array' };
    }
    else {
      argsNames.forEach((argName: string, index: number) => {
        const type = RuleDefinitionParser.getType(argName, argsTypes[index]);
        ruleInputs[argName] = { type, index, ...(inputs? (<any>inputs)[argName] : {}) }
      });
    }

    const ruleIdentifier: RuleIdentifier = { 
      name: identifier.name,
      group: identifier?.group,
      ...(identifier?.shortcut? {shortcut: identifier?.shortcut} : {}),
    };

    return { 
      identifier: ruleIdentifier,
      inputs: ruleInputs,
      output,
      sync
    };
  }
  
  static getType = (arg: string, type?: string) => {
    if (arg === '$runner') {
      return 'runner';
    }
    else if (arg.startsWith('$rule')) {
      return 'rule';
    }
    else if (arg.startsWith('$globalData')) {
      return 'globalData';
    }
    else if (arg.startsWith('$localData')) {
      return 'localData';
    }
    else if (arg.startsWith('$scopedData')) {
      return 'scopedData';
    }
    else if (!type) {
      return 'any';
    }
    
    return { type };
  }
}

