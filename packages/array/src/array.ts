import { 
  IJsonLangParams, RuleInput,
  Runner, RuleExtension, JsonLangExtension
} from '@jsonlang/core';

import { 
  allDefinition,
  arrayContactDefinition,
  arrayUniqueDefinition,
  filterDefinition,
  flattenDefinition,
  foreachDefinition,
  mapDefinition,
  seqDefinition
} from './definitions';

@JsonLangExtension('Array/Collections')
export class ArrayRules {

  @RuleExtension(allDefinition)
  async all(...inputs: RuleInput[]) {
    return [...inputs].map(input => input);
  }

  @RuleExtension(seqDefinition)
  async seq($rules: IJsonLangParams[], $runner: Runner) {
    if(!Array.isArray($rules)) return false;

    await Promise.all($rules.map((rule) => $runner(rule)));

    return true;
  }

  @RuleExtension(filterDefinition)
  async filter(array: any[], iterator: string, $rule: IJsonLangParams, $runner: Runner) {
    if(!Array.isArray(array)) return [];

    const results = [];

    for (const ele of array) {
      const condition = await $runner($rule, iterator? { key: iterator, value: ele } : undefined);
      if (condition) results.push(ele);
    }

    return results;
  }

  @RuleExtension(foreachDefinition)
  async foreach(array: any[], iterator: string, $rule: IJsonLangParams, $runner: Runner) {
    if (!Array.isArray(array)) return false;

    for (const ele of array) {
      await $runner($rule, iterator? { key: iterator, value: ele } : undefined);
    }

    return true;
  }

  @RuleExtension(mapDefinition)
  async map(array: any[], iterator: string, $rule: IJsonLangParams, $runner: Runner) {
    if(!Array.isArray(array)) return [];

    const results = [];

    for (const ele of array) {
      const mapping = await $runner($rule, iterator? { key: iterator, value: ele } : undefined);
      results.push(mapping);
    }

    return results;
  }

  @RuleExtension({ ...seqDefinition, sync: true })
  syncSeq($rules: IJsonLangParams[], $runner: Runner) {
    if(!Array.isArray($rules)) return false;

    $rules.map((rule) => $runner(rule));

    return true;
  }

  @RuleExtension({ ...filterDefinition, sync: true })
  syncFilter(array: any[], iterator: string, $rule: IJsonLangParams, $runner: Runner) {
    if(!Array.isArray(array)) return [];

    const results = [];

    for (const ele of array) {
      const condition = $runner($rule, iterator? { key: iterator, value: ele } : undefined);
      if (condition) results.push(ele);
    }

    return results;
  }

  @RuleExtension({ ...foreachDefinition, sync: true })
  syncForeach(array: any[], iterator: string, $rule: IJsonLangParams, $runner: Runner) {
    if (!Array.isArray(array)) return false;

    for (const ele of array) {
      $runner($rule, iterator? { key: iterator, value: ele } : undefined);
    }

    return true;
  }

  @RuleExtension({ ...mapDefinition, sync: true })
  syncMap(array: any[], iterator: string, $rule: IJsonLangParams, $runner: Runner) {
    if(!Array.isArray(array)) return [];

    const results = [];

    for (const ele of array) {
      const mapping = $runner($rule, iterator? { key: iterator, value: ele } : undefined);
      results.push(mapping);
    }

    return results;
  }

  @RuleExtension(flattenDefinition)
  flatten(nestedArray: any[], level?: number) {
    return Array.isArray(nestedArray) ? nestedArray.flat(level) : [];
  }

  @RuleExtension(arrayContactDefinition)
  arrayConcat(firstArray: any[], secondArray: any[]) {
    return Array.isArray(firstArray) && Array.isArray(secondArray) ? firstArray.concat(secondArray) : [];
  }

  @RuleExtension(arrayUniqueDefinition)
  unique(array: any[]) {
    return Array.isArray(array) ? [...new Set(array.map(r => JSON.stringify(r)))].map(r => JSON.parse(r)) : [];
  }

}