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
    this.rules.set({ name: 'IsNumber', group: 'Math' }, this.isNumber);
    this.rules.set({ name: 'Sum', shortcut: '+', group: 'Math' }, this.sum);
    this.rules.set({ name: 'Subtract', shortcut: '-', group: 'Math' }, this.subtract);
    this.rules.set({ name: 'Multiply', shortcut: '*', group: 'Math' }, this.multiply);
    this.rules.set({ name: 'Divide', shortcut: '/', group: 'Math' }, this.divide);
    this.rules.set({ name: 'Min', group: 'Math' }, this.min);
    this.rules.set({ name: 'Max', group: 'Math' }, this.max);
  }

  private isNumber = (inputs: RuleInput[]) => {
    return inputs.every(i =>typeof i === 'number');
  }

  private hasNoZero = (inputs: RuleInput[]) => {
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

  private min = (...inputs: RuleInput) => {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? Math.min(...inputs) : null;
  }

  private max = (...inputs: RuleInput) => {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? Math.max(...inputs) : null;
  }
}