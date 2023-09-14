import { JsonLangExtension, RuleExtension } from '@jsonlang/core';
import { 
  getDefinition, updateDefinition, deleteDefinition, setDefinition,
  omitDefinition, pickDefinition, copyDefinition, mergeDefinition, invertDefinition, valuesDefinition, keysDefinition,
  flattenDefinition
} from './definitions';
import { IJsonData, IObjectDeepDiff, IIndex, ICollectionIds } from './interfaces';


@JsonLangExtension('Object')
export class ObjectRules {

  @RuleExtension(getDefinition)
  static get(path: string, data: IJsonData, defaultValue: any = null) {
    if (!ObjectRules.validateInputs(path, data)) return null;

    const pathArr = ObjectRules.parsePath(path);

    return ObjectRules.traverse(data, pathArr) ?? defaultValue;
  }

  @RuleExtension(setDefinition)
  static set(path: string, data: IJsonData, value: any) {
    if (!ObjectRules.validateInputs(path, data)) return false;

    const pathArr = ObjectRules.parsePath(path);

    return ObjectRules.createPath(data, pathArr, value);
  }


  @RuleExtension(updateDefinition)
  update(path: string, data: IJsonData, value: any) {
    if (!ObjectRules.validateInputs(path, data)) return false;

    const pathArr = ObjectRules.parsePath(path);
    const current = ObjectRules.traverse(data, pathArr);

    if (current === undefined) return false;

    return ObjectRules.createPath(data, pathArr, value);
  }

  @RuleExtension(deleteDefinition)
  delete(path: string, data: IJsonData) {
    if (!ObjectRules.validateInputs(path, data)) return false;

    const pathArr = ObjectRules.parsePath(path);

    return ObjectRules.deletePath(data, pathArr);
  }

  @RuleExtension(omitDefinition)
  static omit(paths: string[], data: IJsonData): boolean {
    const isValidPaths = paths.every((path) => ObjectRules.validateInputs(path, data));
    if (!isValidPaths) return false;

    let mutated = false;

    for (const path of paths) {
      const pathArr = ObjectRules.parsePath(path);
      mutated = ObjectRules.deletePath(data, pathArr) || mutated;
    }

    return mutated;
  }


  @RuleExtension(pickDefinition)
  static pick(paths: string[], data: IJsonData): boolean {
    const isValidPaths = paths.every((path) => ObjectRules.validateInputs(path, data));
    if (!isValidPaths) return false;

    let mutated = false;

    const flattenedData: IJsonData = {};

    ObjectRules.flattenObjectHelper(data, '', flattenedData);

    for (const [key, value] of Object.entries(flattenedData)) {
      if (!paths.includes(key)) {
        const pathArr = ObjectRules.parsePath(key);
        mutated = ObjectRules.deletePath(data, pathArr) || mutated;
      }
    }

    return mutated;
  }

  @RuleExtension(flattenDefinition)
  flatten(data: IJsonData): IJsonData {
    if (!ObjectRules.validateInputs('', data)) return data;

    const flattenedObj: IJsonData = {};

    ObjectRules.flattenObjectHelper(data, '', flattenedObj);

    return flattenedObj;
  }

  @RuleExtension(mergeDefinition)
  merge(data: IJsonData, ...sources: IJsonData[]): boolean {  
    if (!ObjectRules.validateInputs('', data)) return false;

    let mutated = false;

    for (const source of sources) {
      if (!ObjectRules.validateInputs('', source)) continue;

      for (const [key, value] of Object.entries(source)) {
        if (!Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = value;
          mutated = true;
        } else if (typeof value === 'object' && value !== null) {
          mutated = this.merge((<any>data)[key], <any> value) || mutated;
        }
      }
    }

    return mutated;
  }

  @RuleExtension(copyDefinition)
  copy(data: IJsonData): any {
    if (!ObjectRules.validateInputs('', data)) return data;

    return JSON.parse(JSON.stringify(data));
  }

  @RuleExtension(invertDefinition)
  invert(data: IJsonData): any {
    if (!ObjectRules.validateInputs('', data)) return data;

    const inverted: any = {};

    for (const [key, value] of Object.entries(data)) {
      inverted[<any> value] = key;
    }

    return inverted;
  }

  @RuleExtension(valuesDefinition)
  values(data: IJsonData): any[] {
    if (!ObjectRules.validateInputs('', data)) return [];

    return Object.values(data);
  }

  @RuleExtension(keysDefinition)
  keys(data: IJsonData): string[] {
    if (!ObjectRules.validateInputs('', data)) return [];

    return Object.keys(data);
  }

  @RuleExtension(objectDeepDiffDefinition)
  objectDeepDiff(data: IJsonData, other: IJsonData): IObjectDeepDiff[] {
    if (!ObjectRules.validateInputs('', data) || !ObjectRules.validateInputs('', other)) return [];

    const diffs: IObjectDeepDiff[] = [];

    ObjectRules.objectDeepDiffHelper(data, other, diffs);

    return diffs;
  }




  private static validateInputs(path: string, data: any): boolean {
    return typeof data === 'object' && data !== null && typeof path === 'string';
  }

  private static parsePath(key: string): IIndex[] {
    return key.split('.').map((segment) => {
      const [prop, index] = segment.split(/\[(\d+)\]/).reverse();
      return { prop, index: index ? parseInt(index, 10) : undefined };
    });
  }

  private static traverse(data: any, path: IIndex[]): any {
    for (const { prop, index } of path) {
      if (data === undefined || data === null) return undefined;

      if (index !== undefined) {
        if (!Array.isArray(data[prop])) return undefined;
        data = data[prop][index];
      } else {
        if (!Object.prototype.hasOwnProperty.call(data, prop)) return undefined;
        data = data[prop];
      }
    }

    return data;
  }

  private static createPath(data: any, path: IIndex[], value: any): boolean {
    const lastIndex = path.length - 1;

    for (let i = 0; i < lastIndex; i++) {
      const { prop, index } = path[i];
      if (index !== undefined) {
        if (!Array.isArray(data[prop])) return false;
        data = data[prop][index] ||= {};
      } else {
        data = data[prop] ||= {};
      }
    }

    const { prop, index } = path[lastIndex];
    if (index !== undefined) {
      if (!Array.isArray(data[prop])) return false;
      data[prop][index] = value;
    } else {
      data[prop] = value;
    }

    return true;
  }

  private static deletePath(data: any, path: IIndex[]): boolean {
    const lastIndex = path.length - 1;

    for (let i = 0; i < lastIndex; i++) {
      const { prop, index } = path[i];
      if (index !== undefined) {
        if (!Array.isArray(data[prop])) return false;
        data = data[prop][index];
      } else {
        if (!Object.prototype.hasOwnProperty.call(data, prop)) return false;
        data = data[prop];
      }
    }

    const { prop, index } = path[lastIndex];
    if (index !== undefined) {
      if (!Array.isArray(data[prop])) return false;
      data[prop].splice(index, 1);
    } else {
      if (!Object.prototype.hasOwnProperty.call(data, prop)) return false;
      delete data[prop];
    }

    return true;
  }

  private static flattenObjectHelper(
    obj: any,
    keyPrefix: string,
    flattenedObj: IJsonData
  ) {
    if (typeof obj !== 'object' || obj === null) {
      flattenedObj[keyPrefix] = obj;
      return;
    }

    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        this.flattenObjectHelper(item, `${keyPrefix}[${index}]`, flattenedObj);
      });
      return;
    }

    for (const [key, value] of Object.entries(obj)) {
      const newKey = keyPrefix ? `${keyPrefix}.${key}` : key;
      this.flattenObjectHelper(value, newKey, flattenedObj);
    }
  }

  // it should return an array of diffs
  // paths should be in dot notation (e.g. 'a.b.c') and for nested arrays use square brackets (e.g. 'a.b[0].c')
  /*
  Differences are reported as one or more change records. Change records have the following structure:

  kind - indicates the kind of change; will be one of the following:
    N - indicates a newly added property/element
    D - indicates a property/element was deleted
    E - indicates a property/element was edited
    A - indicates a change occurred within an array
  path - the property path (from the left-hand-side root)
  lhs - the value on the left-hand-side of the comparison (undefined if kind === 'N')
  rhs - the value on the right-hand-side of the comparison (undefined if kind === 'D')
  index - when kind === 'A', indicates the array index where the change occurred
  item - when kind === 'A', contains a nested change record indicating the change that occurred at the array index
  Change records are generated for all structural differences between origin and compared. The methods only consider an object's own properties and array elements; those inherited from an object's prototype chain are not considered.

  Changes to arrays are recorded simplistically. We care most about the shape of the structure; therefore we don't take the time to determine if an object moved from one slot in the array to another. Instead, we only record the structural differences. If the structural differences are applied from the comparand to the origin then the two objects will compare as "deep equal" using most isEqual implementations such as found in lodash or underscore
  */
  // result example: [{ path: 'a.b.c', kind: 'N', rhs: 1 }, { path: 'a.b[0].c', kind: 'D' }, { path: 'a.b[1].c', kind: 'E', rhs: 2, oldValue: 3 }]
  /* example 2 
  
    var lhs = {
      name: 'my object',
      description: 'it\'s an object!',
      details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'elements']
      }
    };
    
    var rhs = {
      name: 'updated object',
      description: 'it\'s an object!',
      details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'more', 'elements', { than: 'before' }]
      }
    };
  

    var differences = objectDiff(lhs, rhs);

    console.log(differences);

    // differences = [ { kind: 'E',
      path: 'name',
      lhs: 'my object',
      rhs: 'updated object' },
    { kind: 'E',
      path: 'details.with[2],
      lhs: 'elements',
      rhs: 'more' },
    { kind: 'A',
      path: 'details.with',
      index: 3,
      item: { kind: 'N', rhs: 'elements' } },
    { kind: 'A',
      path: 'details.with',
      index: 4,
      item: { kind: 'N', rhs: { than: 'before' } } } ]
  */
  // kind: N - indicates a newly added property/element, D - indicates a property/element was deleted, E - indicates a property/element was edited, A - indicates a change occurred within an array
  // path - the property path (from the left-hand-side root)
  // lhs - the value on the left-hand-side of the comparison (undefined if kind === 'N')
  // rhs - the value on the right-hand-side of the comparison (undefined if kind === 'D')
  // index - when kind === 'A', indicates the array index where the change occurred
  // item - when kind === 'A', contains a nested change record indicating the change that occurred at the array index
  // to detect if item in array of objects is updated or not, it looking for any property of "collectionIds"  and if it exists it will use it to compare. if user pass more than one property, it will use all of them to compare. if it can find any property of "collectionIds" exists in the array of objects it will use the whole object to compare
  private static objectDeepDiffHelper(
    lhs: IJsonData,
    rhs: IJsonData,
    diffs: IObjectDeepDiff[],
    collectionIds: ICollectionIds = ['id'],
    path: string = ''
  ) {
    const lType = typeof lhs;
    const rType = typeof rhs;
    if (lType !== rType) {
      diffs.push({
        kind: 'E',
        path,
        lhs,
        rhs
      });
    } else if (lType === 'object') {
      if (lhs === null) {
        if (rhs !== null) {
          diffs.push({
            kind: 'E',
            path,
            lhs,
            rhs
          });
        }
      } else if (Array.isArray(lhs)) {
        if (!Array.isArray(rhs)) {
          diffs.push({
            kind: 'E',
            path,
            lhs,
            rhs
          });
        } else {
          const lLen = lhs.length;
          const rLen = rhs.length;
          let len = lLen > rLen ? lLen : rLen;
          for (let i = 0; i < len; i++) {
            this.objectDeepDiffHelper(
              lhs[i],
              rhs[i],
              diffs,
              collectionIds,
              `${path}[${i}]`
            );
          }
        }
      } else {
        const lKeys = Object.keys(lhs);
        const rKeys = Object.keys(rhs);
        const lLen = lKeys.length;
        const rLen = rKeys.length;
        let len = lLen > rLen ? lLen : rLen;
        for (let i = 0; i < len; i++) {
          const key = lKeys[i];
          if (rKeys.includes(key)) {
            this.objectDeepDiffHelper(
              lhs[key],
              rhs[key],
              diffs,
              collectionIds,
              `${path}.${key}`
            );
          } else {
            diffs.push({
              kind: 'D',
              path: `${path}.${key}`,
              lhs: lhs[key]
            });
          }
        }

        for (let i = 0; i < rLen; i++) {
          const key = rKeys[i];
          if (!lKeys.includes(key)) {
            diffs.push({
              kind: 'N',
              path: `${path}.${key}`,
              rhs: rhs[key]
            });
          }
        }
      }
    } else if (lhs !== rhs) {
      diffs.push({
        kind: 'E',
        path,
        lhs,
        rhs
      });
    }
  }


}