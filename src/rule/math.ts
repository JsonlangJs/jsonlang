import { JsonLangExtension, RuleExtension, RuleInput } from "../core";
import {
  sumDefinition, subtractDefinition, multiplyDefinition,
  divideDefinition, minimumDefinition, maximumDefinition
} from './definitions';

@JsonLangExtension('Math')
export class MathRules {

  @RuleExtension(sumDefinition)
  sum(...inputs: RuleInput) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a + b) : 0;
  }

  @RuleExtension(subtractDefinition)
  subtract(...inputs: RuleInput) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a - b) : 0;
  }

  @RuleExtension(multiplyDefinition)
  multiply(...inputs: RuleInput) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a * b) : 0;
  }

  @RuleExtension(divideDefinition)
  divide(...inputs: RuleInput) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs) && this.hasNoZero(arrayOfInputs.slice(1))? arrayOfInputs.reduce((a, b) => a / b) : 0;
  }

  @RuleExtension(minimumDefinition)
  min(...inputs: RuleInput) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? Math.min(...inputs) : null;
  }

  @RuleExtension(maximumDefinition)
  max(...inputs: RuleInput) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? Math.max(...inputs) : null;
  }

  private isNumber(inputs: RuleInput[]) {
    return inputs.every(i =>typeof i === 'number');
  }

  private hasNoZero(inputs: RuleInput[]) {
    return inputs.every(i => i !== 0);
  }
}