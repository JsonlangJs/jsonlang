import { IJsonLangParams, RuleInput, Rules, RulesImplementation, Runner } from '../core';

export class ArrayRules implements RulesImplementation {

  private rules: Rules;

  constructor() {
    this.rules = new Map();
    this.register();
  }

  getRules(): Rules {
    return this.rules;
  }

  private register = () => {
    this.rules.set({ name: 'All' }, this.all);
    this.rules.set({ name: 'Map' }, this.map);
    this.rules.set({ name: 'Filter' }, this.filter);
    this.rules.set({ name: 'Flatten' }, this.flatten);
    this.rules.set({ name: 'Foreach' }, this.foreach);
  }

  private all = (...inputs: RuleInput[]) => {
    return [...inputs].map(input => input);
  }

  private filter = (elements: any[], $rule: IJsonLangParams, $runner: Runner) => {
    return Array.isArray(elements) ? elements.filter((ele) => $runner(ele)($rule)) : [];
  }

  private foreach = (elements: any[], $rule: IJsonLangParams, $runner: Runner) => {
    if (!Array.isArray(elements)) return false;

    elements.forEach((ele) => $runner(ele)($rule));

    return true;
  }

  private map = (elements: any[], $rule: IJsonLangParams, $runner: Runner) => {
    return Array.isArray(elements) ? elements.map((ele) => $runner(ele)($rule)) : [];
  }

  private flatten = (elements: any[], lvl?: number) => {
    return Array.isArray(elements) ? elements.flat(lvl) : [];
  }

}