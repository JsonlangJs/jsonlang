import { RuleCore } from '../core';
import { DataRules } from '../rule';


export class JsonLang extends RuleCore {
  constructor() {
    super();
    this.import(DataRules);
  }
}


