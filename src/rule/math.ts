import { Rules, RulesImplementation } from "../core";

export class MathRules implements RulesImplementation {

  private rules: Rules;

  constructor() {
    this.rules = new Map();
    this.register();
  }

  getRules(): Rules {
    return this.rules;
  }

  private register = () => {
    this.rules.set({ name: 'IsNumber', shortName: 'IsNum' }, this.isNumber);
    this.rules.set({ name: 'Sum', shortName: '+' }, this.sum);
    this.rules.set({ name: 'Subtract', shortName: '-' }, this.subtract);
    this.rules.set({ name: 'Multiply', shortName: '*' }, this.multiply);
    this.rules.set({ name: 'Divide', shortName: '/' }, this.divide);
  }

  private isNumber = (inputs: any[]) => {
    return inputs.every(i => typeof i === 'number');
  }

  private hasNoZero = (inputs: any[]) => {
    return inputs.every(i => i !== 0);
  }

  private sum = (inputs: any[]) => {
    return this.isNumber(inputs)? inputs.reduce((a, b) => a + b) : 0;
  }

  private subtract = (inputs: any[]) => {
    return this.isNumber(inputs)? inputs.reduce((a, b) => a - b) : 0;
  }

  private multiply = (inputs: any[]) => {
    return this.isNumber(inputs)? inputs.reduce((a, b) => a * b) : 0;
  }

  private divide = (inputs: any[]) => {
    return this.isNumber(inputs) && this.hasNoZero(inputs.slice(1))? inputs.reduce((a, b) => a / b) : 0;
  }
}