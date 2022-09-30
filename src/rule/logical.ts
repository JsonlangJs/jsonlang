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
    this.rules.set({ name: 'and', shortName: '&&' }, this.and);
    this.rules.set({ name: 'or', shortName: '||' }, this.or);
    this.rules.set({ name: 'equal', shortName: '==' }, this.equal);
    this.rules.set({ name: 'greaterThan', shortName: '>' }, this.greaterThan);
    this.rules.set({ name: 'lessThan', shortName: '<' }, this.lessThan);
    this.rules.set({ name: 'greaterThanOrEqual', shortName: '>=' }, this.greaterThanOrEqual);
    this.rules.set({ name: 'lessThanOrEqual', shortName: '<=' }, this.lessThanOrEqual);
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

  private equal = (inputs: any[]) => {
    return this.isSameType(inputs) ? inputs[0] === inputs[1] : inputs[0] == inputs[1];
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