import { JsonLangExtension, RuleExtension, RuleInput } from "@jsonlang/core";
import {
  sumDefinition, subtractDefinition, multiplyDefinition,
  divideDefinition, minimumDefinition, maximumDefinition
} from './definitions';

@JsonLangExtension('Math')
export class MathRules {

  @RuleExtension(sumDefinition)
  sum(...inputs: number[]) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a + b) : 0;
  }

  @RuleExtension(subtractDefinition)
  subtract(...inputs: number[]) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a - b) : 0;
  }

  @RuleExtension(multiplyDefinition)
  multiply(...inputs: number[]) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? arrayOfInputs.reduce((a, b) => a * b) : 0;
  }

  @RuleExtension(divideDefinition)
  divide(...inputs: number[]) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs) && this.hasNoZero(arrayOfInputs.slice(1))? arrayOfInputs.reduce((a, b) => a / b) : 0;
  }

  @RuleExtension(minimumDefinition)
  min(...inputs: number[]) {
    const arrayOfInputs = [...inputs];
    return this.isNumber(arrayOfInputs)? Math.min(...inputs) : null;
  }

  @RuleExtension(maximumDefinition)
  max(...inputs: number[]) {
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