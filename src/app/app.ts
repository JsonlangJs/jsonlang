import { RuleCore } from '../core';
import { ArrayRules, LogicalRules, MathRules, ObjectRules } from '../rule';


export class JsonLang extends RuleCore {
  private mathRules: MathRules;
  private logicalRules: LogicalRules;
  private objectRules: ObjectRules;
  private arrayRules: ArrayRules;

  constructor() {
    super();
    this.mathRules = new MathRules();
    this.logicalRules = new LogicalRules();
    this.objectRules = new ObjectRules();
    this.arrayRules = new ArrayRules();

    this.registerBuiltinRules();
  }

  private registerBuiltinRules = () => {
    const mathRules = this.mathRules.getRules();
    const logicalRules = this.logicalRules.getRules();
    const objectRules = this.objectRules.getRules();
    const arrayRules = this.arrayRules.getRules();

    this.registerMany(new Map([...mathRules, ...logicalRules, ...objectRules, ...arrayRules]))
  }
}