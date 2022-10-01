import { RuleCore } from '../core';
import { LogicalRules, MathRules, ObjectRules } from '../rule';


export class JsonRules extends RuleCore {
  private mathRules: MathRules;
  private logicalRules: LogicalRules;
  private objectRules: ObjectRules;

  constructor() {
    super();
    this.mathRules = new MathRules();
    this.logicalRules = new LogicalRules();
    this.objectRules = new ObjectRules();

    this.registerBuiltinRules();
  }

  private registerBuiltinRules = () => {
    const mathRules = this.mathRules.getRules();
    const logicalRules = this.logicalRules.getRules();
    const objectRules = this.objectRules.getRules();

    this.registerMany(new Map([...mathRules, ...logicalRules, ...objectRules]))
  }
}
