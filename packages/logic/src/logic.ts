import { IJsonLangParams, JsonLangExtension, RuleExtension, RuleInput, Runner } from '@jsonlang/core';

import { 
  isNumberDefinition, isStringDefinition, isBooleanDefinition, isNullDefinition,
  isEmptyDefinition, isArrayDefinition, isObjectDefinition, andDefinition, orDefinition,
  notDefinition, equalDefinition, notEqualDefinition, greaterThanDefinition, 
  greaterThanOrEqualDefinition, lessThanDefinition, lessThanOrEqualDefinition, IfDefinition
} from './definitions'

@JsonLangExtension('Logic')
export class LogicRules {

  @RuleExtension(isEmptyDefinition)
  isEmpty(input: RuleInput) {
    return input === null || input === undefined || input === '' || ['[]', '{}'].includes(JSON.stringify(input));
  }

  @RuleExtension(isNullDefinition)
  isNull(input: RuleInput) {
    return input === null;
  }

  @RuleExtension(isNumberDefinition)
  isNumber(input: RuleInput) {
    return input === 'number';
  }

  @RuleExtension(isStringDefinition)
  isString(input: RuleInput) {
    return input === 'string';
  }

  @RuleExtension(isBooleanDefinition)
  isBoolean(input: RuleInput) {
    return input === 'boolean';
  }

  @RuleExtension(isArrayDefinition)
  isArray(input: RuleInput) {
    return Array.isArray(input);
  }

  @RuleExtension(isObjectDefinition)
  isObject(input: RuleInput) {
    return typeof input === 'object' && !Array.isArray(input);
  }

  @RuleExtension(andDefinition)
  and(...inputs: RuleInput[]) {
    return [...inputs].every(input => input);
  }

  @RuleExtension(orDefinition)
  or(...inputs: RuleInput[]) {
    return [...inputs].some(input => input)
  }

  @RuleExtension(equalDefinition)
  equal(lhs: RuleInput, rhs: RuleInput) {

    if (!this.areSameType(lhs, rhs) || this.hasObjects(lhs, rhs)) {
      const [stringLHS, stringRHS] = this.castToString(lhs, rhs);

      return stringLHS === stringRHS;
    }
    else {
      return lhs === rhs;
    }
  }

  @RuleExtension(notEqualDefinition)
  notEqual(lhs: RuleInput, rhs: RuleInput) {

    if (!this.areSameType(lhs, rhs) || this.hasObjects(lhs, rhs)) {
      const [stringLHS, stringRHS] = this.castToString(lhs, rhs);

      return stringLHS !== stringRHS;
    }
    else {
      return lhs !== rhs;
    }
  }

  @RuleExtension(notDefinition)
  not(value: RuleInput) {
    return !value;
  }

  @RuleExtension(greaterThanDefinition)
  greaterThan(lhs: number, rhs: number) {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS > parsedRHS : false;
  }

  @RuleExtension(lessThanDefinition)
  lessThan(lhs: number, rhs: number) {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS < parsedRHS : false;
  }

  @RuleExtension(greaterThanOrEqualDefinition)
  greaterThanOrEqual(lhs: number, rhs: number) {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS >= parsedRHS : false;
  }

  @RuleExtension(lessThanOrEqualDefinition)
  lessThanOrEqual(lhs: number, rhs: number) {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS <= parsedRHS : false;
  }

  @RuleExtension(IfDefinition)
  async if(
    $rule_condition: IJsonLangParams,
    $rule_then: IJsonLangParams,
    $rule_else: IJsonLangParams,
    $runner: Runner
  ) {
    if (!$runner) return false;

    const condition = await $runner($rule_condition);

    if (condition) {
      return await $runner($rule_then);
    }
    else {
      return await $runner($rule_else);
    }
  }

  @RuleExtension({ ...IfDefinition, sync: true })
  syncIf(
    $rule_condition: IJsonLangParams,
    $rule_then: IJsonLangParams,
    $rule_else: IJsonLangParams,
    $runner: Runner
  ) {
    if (!$runner) return false;

    const condition = $runner($rule_condition);

    if (condition) {
      return $runner($rule_then);
    }
    else {
      return $runner($rule_else);
    }
  }
  
  private areSameType(...inputs: any) {
    return [...inputs].slice(1).every(i => typeof i === typeof inputs[0]);
  }

  private hasObjects(...inputs: RuleInput[]) {
    return [...inputs].some(i => typeof i === 'object');
  }

  private castToString(...inputs: RuleInput[]) {
    return [...inputs].map(i => typeof i === 'string' ? i : JSON.stringify(i));
  }

  private jsonParse(...inputs: RuleInput[]) {
    return [...inputs].map(i => {
      if(typeof i === 'string') {
        try {
          const result = JSON.parse(i);

          return result;
        } catch {
          return undefined;
        }
      }
      else {
        return i;
      }
    });
  }
}