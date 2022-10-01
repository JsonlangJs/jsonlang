import { Rules, RulesImplementation } from '../core';

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
    this.rules.set({ name: 'And', shortName: '&&' }, this.and);
    this.rules.set({ name: 'Or', shortName: '||' }, this.or);
    this.rules.set({ name: 'All' }, this.all);
    this.rules.set({ name: 'Equal', shortName: '==' }, this.equal);
    this.rules.set({ name: 'NotEqual', shortName: '!=' }, this.notEqual);
    this.rules.set({ name: 'Not', shortName: '!' }, this.not);
    this.rules.set({ name: 'GreaterThan', shortName: '>' }, this.greaterThan);
    this.rules.set({ name: 'LessThan', shortName: '<' }, this.lessThan);
    this.rules.set({ name: 'GreaterThanOrEqual', shortName: '>=' }, this.greaterThanOrEqual);
    this.rules.set({ name: 'LessThanOrEqual', shortName: '<=' }, this.lessThanOrEqual);
  }

  private isSameType = (inputs: any[]) => {
    return inputs.slice(1).every(i => typeof i === typeof inputs[0]);
  }

  private and = (inputs: any[]) => {
    return inputs.every(input => input)
  }

  private or = (inputs: any[]) => {
    return inputs.some(input => input)
  }

  private all = (inputs: any[]) => {
    return inputs.map(input => input)
  }

  private equal = (inputs: any[]) => {
    return this.isSameType(inputs) ? inputs[0] === inputs[1] : inputs[0] == inputs[1];
  }

  private notEqual = (inputs: any[]) => {
    return this.isSameType(inputs) ? inputs[0] !== inputs[1] : inputs[0] != inputs[1];
  }

  private not = (inputs: any[]) => {
    return !inputs[0];
  }

  private greaterThan = (inputs: any[]) => {
    return this.isSameType(inputs) ? inputs[0] > inputs[1] : false;
  }

  private lessThan = (inputs: any[]) => {
    return this.isSameType(inputs) ? inputs[0] < inputs[1] : false;
  }

  private greaterThanOrEqual = (inputs: any[]) => {
    return this.isSameType(inputs) ? inputs[0] >= inputs[1] : false;
  }

  private lessThanOrEqual = (inputs: any[]) => {
    return this.isSameType(inputs) ? inputs[0] <= inputs[1] : false;
  }
}