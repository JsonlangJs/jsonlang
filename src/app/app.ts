import { RuleCore } from '../core';
import { LogicalRules, MathRules } from '../rule';


export class JsonRules extends RuleCore {
  private mathRules: MathRules;
  private logicalRules: LogicalRules;

  constructor() {
    super();
    this.mathRules = new MathRules();
    this.logicalRules = new LogicalRules();

    this.registerBuiltinRules();
  }

  private registerBuiltinRules = () => {
    const mathRules = this.mathRules.getRules();
    const logicalRules = this.logicalRules.getRules();
    
    this.registerMany(new Map([...mathRules, ...logicalRules]))
  }
}
