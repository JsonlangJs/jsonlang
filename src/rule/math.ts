import { RuleInput, Rules, RulesImplementation } from "../core";

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
    this.rules.set({ name: 'IsNumber' }, this.isNumber);
    this.rules.set({ name: 'Sum', shortcut: '+' }, this.sum);
    this.rules.set({ name: 'Subtract', shortcut: '-' }, this.subtract);
    this.rules.set({ name: 'Multiply', shortcut: '*' }, this.multiply);
    this.rules.set({ name: 'Divide', shortcut: '/' }, this.divide);
  }

  private isNumber = (inputs: RuleInput[]) => {
    return inputs.every(i =>typeof i === 'number');
  }

  private hasNoZero = (...inputs: RuleInput[]) => {
    return inputs.every(i => i !== 0);
  }

  private sum = (...inputs: RuleInput) => {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a + b) : 0;
  }

  private subtract = (...inputs: RuleInput) => {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a - b) : 0;
  }

  private multiply = (...inputs: RuleInput) => {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a * b) : 0;
  }

  private divide = (...inputs: RuleInput) => {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs) && this.hasNoZero(arrayOfInputs.slice(1))? arrayOfInputs.reduce((a, b) => a / b) : 0;
  }
}