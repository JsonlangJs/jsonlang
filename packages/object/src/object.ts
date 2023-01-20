import { JsonLangExtension, RuleExtension } from '@jsonlang/core';
import { getDefinition, updateDefinition, deleteDefinition, setDefinition } from './definitions';

@JsonLangExtension('Object')
export class ObjectRules {
  private arrayEleNumRegex: RegExp;

  constructor() {
    this.arrayEleNumRegex = /^\[([0-9]+)\]/;
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
    const lastKeyIndex = pathProps.length-1;
    for (var i = 0; i < lastKeyIndex; ++ i) {
      let property = pathProps[i];
      if (!(property in data)){
        data[property] = {}
      }
      data = data[property];
    }
    data[pathProps[lastKeyIndex]] = value;
    return true;
  }

  private baseUpdate = (pathProps: string[], data: any, value: any): boolean => {
    const property = pathProps.shift();

    if (!property || data[property] === undefined) return false;

    if (pathProps.length === 0) {
      data[property] = value;
      
      return true;
    }
    else {
      return this.baseUpdate(pathProps, data[property], value);
    }
  }

  private baseDelete = (pathProps: string[], data: any): boolean => {
    const property = pathProps.shift();

    if (!property || data[property] === undefined) return false;

    if (pathProps.length === 0) {
      delete data[property];
      
      return true;
    }
    else {
      return this.baseDelete(pathProps, data[property]);
    }
  }

  @RuleExtension(setDefinition)
  set(path: string, value: any, data?: {}) {
    const pathProps = this.getPath(path);    

    return data && pathProps && value ? this.baseSet(pathProps, data, value, true) : false;
  }

  @RuleExtension(getDefinition)
  get(path: string, defaultValue?: any, data?: {}) {
    const pathProps = this.getPath(path);

    // defaultValue = defaultValue || 'invalidPath';

    const result = data && pathProps ? this.baseGet(pathProps, data) : undefined;
    return result === undefined ? defaultValue : result
  }

  @RuleExtension(updateDefinition)
  update(path: string, value: any, data?: {}) {
    const pathProps = this.getPath(path);

    return data && pathProps && value ? this.baseUpdate(pathProps, data, value) : false;
  }

  @RuleExtension(deleteDefinition)
  delete(path: string, data?: {}) {
    const pathProps = this.getPath(path);

    return data && pathProps ? this.baseDelete(pathProps, data) : false;
  }
}