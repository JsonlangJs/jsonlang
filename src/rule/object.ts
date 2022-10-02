import { RuleInput, Rules, RulesImplementation } from '../core';

export class ObjectRules implements RulesImplementation {

  private rules: Rules;
  private arrayEleNumRegex: RegExp;

  constructor() {
    this.arrayEleNumRegex = /^\[([0-9]+)\]/;
    this.rules = new Map();
    this.register();
  }

  getRules(): Rules {
    return this.rules;
  }

  private register = () => {
    this.rules.set({ name: 'Get' }, this.get);
  }

  private isArrayOfPaths = (path: any) => {
    if (!Array.isArray(path)) return false;

    return path.every(p => typeof p === 'string');
  }

  private getPath(path: any) {
    let pathProps = <string[]> path;

    if (typeof path === 'string') pathProps = path.split('.');

    return this.isArrayOfPaths(pathProps) && pathProps.length > 0 ? pathProps : undefined;
  }

  private baseGet = (pathProps: string[], data: any): any | undefined => {
    const property = pathProps.shift();

    if (!property || data[property] === undefined) return undefined;

    return pathProps.length === 0 ? (property === '*'? data : data[property]) : this.baseGet(pathProps, data[property]);
  }

  private baseSet = (pathProps: string[], data: any, value: any, upsert: boolean = false): boolean => {
    const property = pathProps.shift();

    if (!property || data[property] === undefined) return false;

    if (pathProps.length === 0) {
      data[property] = value;
      return true;
    }
    else {
      return this.baseSet(pathProps, data[property], value);
    }
  }

  private set = (inputs: RuleInput[], data?: {}) => {
    const [path, value] = [inputs[0], inputs.length > 1? inputs[1] : null];
    const pathProps = this.getPath(path);

    return data && pathProps && value ? this.baseSet(pathProps, data, value, true) : false;
  }

  private get = (inputs: RuleInput[], data?: {}) => {
    const [path, defaultValue] = [inputs[0], inputs.length > 1? inputs[1] : null];

    const pathProps = this.getPath(path);

    const result = data && pathProps ? this.baseGet(pathProps, data) : undefined;
    return result === undefined ? defaultValue : result
  }

  private update = (inputs: RuleInput[], data?: {}) => {
    const [path, value] = [inputs[0], inputs.length > 1? inputs[1] : null];
    const pathProps = this.getPath(path);

    return data && pathProps && value ? this.baseSet(pathProps, data, value) : false;
  }

  private delete = (inputs: RuleInput[], data?: {}) => {
  }
}