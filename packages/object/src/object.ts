import { JsonLangExtension, RuleExtension } from '@jsonlang/core';
import { 
  getDefinition, updateDefinition, deleteDefinition, setDefinition,
  omitDefinition, pickDefinition, copyDefinition, mergeDefinition, invertDefinition, valuesDefinition, keysDefinition
} from './definitions';
import set from 'lodash.set';
import unset from 'lodash.unset';
import get from 'lodash.get';
import pick from 'lodash.pick';
import invert from 'lodash.invert';
import merge from 'lodash.merge';

@JsonLangExtension('Object')
export class ObjectRules {

  private cloneDeep(objectToClone: any) {
    return JSON.parse(JSON.stringify(objectToClone));
  }

  @RuleExtension(setDefinition)
  set(path: string, data: {}, value: any) {
    if (typeof path !== 'string' || typeof data !== 'object' || value === undefined) return false;
    set(data, path, value);
    return true;
  }

  @RuleExtension(getDefinition)
  get(path: string, data: {}, defaultValue: any = null) {
    get(data, path, defaultValue);
    return data;
  }

  @RuleExtension(updateDefinition)
  update(path: string, data: {}, value: any) {
    if (typeof path !== 'string' || typeof data !== 'object' || value === undefined) return false;

    const isExits = get(data, path, undefined);

    if (isExits === undefined) return false;
    
    set(data, path, value);
    return true;
  }

  @RuleExtension(deleteDefinition)
  delete(path: string, data: {}) {
    if (typeof path !== 'string' || typeof data !== 'object') return false;

    return unset(data, path);
  }

  @RuleExtension(omitDefinition)
  omit(paths: string[], data: {}) {
    if (!Array.isArray(paths) || typeof data !== 'object') return false;

    for (const path of paths) {
      const res = unset(data, path);

      if (!res) return false;
    }

    return true;
  }

  @RuleExtension(pickDefinition)
  pick(paths: string[], data: {}) {
    if (!Array.isArray(paths) || typeof data !== 'object') return false;

    pick(data, paths);

    return true;
  }

  @RuleExtension(copyDefinition)
  copy(data: {}) {
    return this.cloneDeep(data)
  }

  @RuleExtension(keysDefinition)
  keys(data: {}) {
    if (typeof data !== 'object' || Array.isArray(data)) return [];

    return Object.keys(data);
  }

  @RuleExtension(valuesDefinition)
  values(data: {}) {
    if (typeof data !== 'object' || Array.isArray(data)) return [];

    return Object.values(data);
  }

  @RuleExtension(invertDefinition)
  invert(data: {}) {
    return invert(data);
  }

  @RuleExtension(mergeDefinition)
  merge(...data: {}[]) {
    return merge(data);
  }
}