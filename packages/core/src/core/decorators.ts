import { RuleDefinition } from "./core.types";
import { RuleDefinitionParser } from "./rule-parser";


export function JsonLangExtension(group?: string) {
  return function (target: any) {
    Reflect.defineMetadata('jsonlang:group', { name: group }, target);
  };
}

export function RuleExtension(definition?: Partial<RuleDefinition>) {
  const { identifier, output } = definition || {};
  
  return function (target: any, propertyKey: string) {
    const argsTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey)?.map((arg: any) => arg.name) || [];
    const returnType = Reflect.getMetadata('design:returntype', target, propertyKey)?.name;

    const completedDefinition = RuleDefinitionParser.parse(
      target[propertyKey],
      argsTypes,
      {
        ...definition,
        identifier: { ...identifier, name: identifier?.name || propertyKey },
        output: output || { type: returnType }
      }
    );

    Reflect.defineMetadata('jsonlang:rule', completedDefinition, target.constructor, propertyKey);
  };
}
