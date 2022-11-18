import { RuleCore } from '../core';
import { ArrayRules, DataRules, LogicalRules, MathRules, ObjectRules } from '../rule';


export class JsonLang extends RuleCore {
  constructor() {
    super();
    this.import([DataRules, ArrayRules, LogicalRules, MathRules, ObjectRules]);
  }
}


