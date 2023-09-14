
export interface IJsonData {
  [key: string]: string | number | boolean | null | IJsonData | IJsonData[];
}

export interface IObjectDeepDiff {
  path: string; // dot notation path
  kind: 'N' | 'E' | 'D' | 'A';
  lhs?: any;
  rhs?: any;
  index?: number;
  item?: IObjectDeepDiff;
}

export type ICollectionIds = string[];


export interface IIndex { prop: string, index?: number }
