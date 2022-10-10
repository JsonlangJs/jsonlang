import { RuleInput, Rules, RulesImplementation } from '../core';

export class LogicalRules implements RulesImplementation {

  private rules: Rules;

  constructor() {
    this.rules = new Map();
    this.register();
  }

  getRules(): Rules {
    return this.rules;
  }

  private register = () => {
    this.rules.set({ name: 'And', shortcut: '&&' }, this.and);
    this.rules.set({ name: 'Or', shortcut: '||' }, this.or);
    this.rules.set({ name: 'Equal', shortcut: '==' }, this.equal);
    this.rules.set({ name: 'NotEqual', shortcut: '!=' }, this.notEqual);
    this.rules.set({ name: 'Not', shortcut: '!' }, this.not);
    this.rules.set({ name: 'GreaterThan', shortcut: '>' }, this.greaterThan);
    this.rules.set({ name: 'LessThan', shortcut: '<' }, this.lessThan);
    this.rules.set({ name: 'GreaterThanOrEqual', shortcut: '>=' }, this.greaterThanOrEqual);
    this.rules.set({ name: 'LessThanOrEqual', shortcut: '<=' }, this.lessThanOrEqual);
  }

  private areSameType = (...inputs: RuleInput) => {
    return [...inputs].slice(1).every(i => typeof i === typeof inputs[0]);
  }

  private hasObjects = (...inputs: RuleInput[]) => {
    return [...inputs].some(i => typeof i === 'object');
  }

  private castToString = (...inputs: RuleInput[]) => {
    return [...inputs].map(i => typeof i === 'string' ? i : JSON.stringify(i));
  }

  private jsonParse = (...inputs: RuleInput[]) => {
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

  private and = (...inputs: RuleInput[]) => {
    return [...inputs].every(input => input);
  }

  private or = (...inputs: RuleInput[]) => {
    return [...inputs].some(input => input)
  }

  private equal = (lhs: RuleInput, rhs: RuleInput) => {

    if (!this.areSameType(lhs, rhs) || this.hasObjects(lhs, rhs)) {
      const [stringLHS, stringRHS] = this.castToString(lhs, rhs);

      return stringLHS === stringRHS;
    }
    else {
      return lhs === rhs;
    }
  }

  private notEqual = (lhs: RuleInput, rhs: RuleInput) => {

    if (!this.areSameType(lhs, rhs) || this.hasObjects(lhs, rhs)) {
      const [stringLHS, stringRHS] = this.castToString(lhs, rhs);

      return stringLHS !== stringRHS;
    }
    else {
      return lhs !== rhs;
    }
  }

  private not = (value: RuleInput) => {
    return !value;
  }

  private greaterThan = (lhs: RuleInput, rhs: RuleInput) => {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS > parsedRHS : false;
  }

  private lessThan = (lhs: RuleInput, rhs: RuleInput) => {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS < parsedRHS : false;
  }

  private greaterThanOrEqual = (lhs: RuleInput, rhs: RuleInput) => {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS >= parsedRHS : false;
  }

  private lessThanOrEqual = (lhs: RuleInput, rhs: RuleInput) => {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS <= parsedRHS : false;
  }
}