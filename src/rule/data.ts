import { DataScope, JsonLangExtension, RuleExtension } from "../core";
import { dataDefinition } from "./definitions";

@JsonLangExtension('Data')
export class DataRules {

  @RuleExtension(dataDefinition)
  getDate(
    varName: string,
    type: DataScope,
    $localData: Map<string, any>,
    $globalData: any
  ) {
    let outputValue;
    
    if (type === DataScope.External) outputValue = ['', '*', null].includes(varName) ? $globalData : $globalData[varName];
    if (type === DataScope.Internal) outputValue = ['', '*', null].includes(varName) ?  Object.fromEntries($localData) : $localData?.get(varName);

    return outputValue || null;
  }
  
}



