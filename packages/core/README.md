# 👋 **JsonLang**


<a href="https://jsonlang.dev"><img align="center" src="https://raw.githubusercontent.com/JsonlangJs/jsonlang/master/jsonlang.svg" height="50%" width="60%" alt="JsonLang Logo"/></a></br></br>

<ul>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev"><b>Website</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/docs/intro"><b>Tutorial</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/playground/"><b>Live Playground (Try it NOW)</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/docs/category/examples"><b>Examples</b></a></li>
</ul>
</br></br></br>

It is a Typescript package that provides a simple JSON Programming Language, allowing you to execute a safe logic in Frontend or Backend (NodeJS). Furthermore, it can be stored in the database and rendered to the Frontend-Side to execute/run some business logic. 

JsonLang is designed to be extendable. You can define new rules with sync/async handlers.</br></br> 


[![npm version](https://img.shields.io/npm/v/@jsonlang/core.svg)](https://www.npmjs.com/package/@jsonlang/core)
[![install size](https://packagephobia.com/badge?p=@jsonlang/core)](https://packagephobia.com/result?p=@jsonlang/core)
[![npm downloads](https://img.shields.io/npm/dy/@jsonlang/core.svg)](https://www.npmjs.com/package/@jsonlang/core)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@jsonlang/core)](https://img.shields.io/snyk/vulnerabilities/npm/@jsonlang/core)
[![Maintenance](https://img.shields.io/maintenance/yes/2090.svg)](https://github.com/JsonlangJs/jsonlang/graphs/commit-activity)
[![Build](https://img.shields.io/github/actions/workflow/status/JsonlangJs/jsonlang/deploy-package.yml?branch=master)](https://github.com/JsonlangJs/jsonlang/actions)
[![Programming Language](https://img.shields.io/badge/typescript-100%25-blue.svg)](https://img.shields.io/badge/typescript-100%25-blue.svg)
[![License](https://img.shields.io/github/license/JsonlangJs/jsonlang.svg)](https://github.com/JsonlangJs/jsonlang/blob/master/LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FJsonlangJs%2Fjsonlang.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FJsonlangJs%2Fjsonlang?ref=badge_shield)
[![Github Sponsor](https://camo.githubusercontent.com/7d9333b097b2f54a8957d126ab82937811489c9b75c3850f609985cf94cd29fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2532302d53706f6e736f722532306d652532306f6e2532304769744875622d6f72616e6765)](https://github.com/sponsors/ahmed-medhat-tawfiq)

</br>


</br></br></br>

## ⏬ **Installation**

```bash
npm install @jsonlang/core
```
</br> 

## 🎉 **Features**

1. Typescript. It's a strongly typed npm package
1. the JsonLang structure is Simple and Optimized. Its [structure](#%EF%B8%8F-structure) and [rules](#%EF%B8%8F-builtin-rules) have a shortcut to make your JSON in a small size.
1. Its structure is always Consistent. i.e. `{"$R": "R1", "$I": ["value1", "value2", {"$R": "R2", "$I": [...] }, ...] }`.
1. Safe & Secure. Each Rule has a secure handler.
1. Extendable. Easy to add new rules.
1. Sync/Async. All rules in JsonLang are sync rules, but you can extend it and add async rules.
1. DRY. You can pass any rule result in a variable to be used in another rule which makes JsonLang JSON more optimized
</br></br></br>

## 🏗️ **Structure**
</br>

JsonLang have three main parameters:

  1. **$R**: (`String`) is the rule name itself. i.e. `and`, `or`, `==`, `>`.
  1. **$I**: (`any[]`) is an array of inputs which will be passed to the `Rule` handler/function, their type depends on the `Rule` handler, or it can be a nested rule
  1. **$O**?: (`Symbol [Optional]`), is an optional field, it accept a name of variable which used to save the Rule result in a [variable](#core) and can be called in any other rule by `{ "$R": "Var": "$I": ["variableX"] }`. The output value should be unique. If you define the same value more than once, the last one will override the value of the previous one.
</br></br></br>


## 🛠️ **Methods**
</br>

### **Execute**
</br>

``` js
  async execute(jsonLang: IJsonLangParams, data?: {}, options?: { sync: false }): Promise<RuleResult>

```
Execute is used to run the JsonLang and takes two parameters.

  1. **JsonLang**: check the [Structure](#%EF%B8%8F-structure)
  1. **Data**: schemaless data object to read/write to it. To get data use the Rule [Data](#core)
  1. **options**: execution options. it has one property called `sync` if it false the execute will be async for async rules, else it will be sync


Execute is the `Async` version of JsonLang, use it to run all [builtin rules](#%EF%B8%8F-builtin-rules) and any [extended](#extend) `Sync` or `Async` Rules
</br>

``` js 
  execute(jsonLang: IJsonLangParams, data: {} | undefined, options: { sync: true }): RuleResult
```

Execute is the `Sync` version of JsonLang, use it to run all [builtin rules](#%EF%B8%8F-builtin-rules) and any [extended](#extend) `Sync` Rules
</br></br></br>

### **Extend**
</br>

#### **The First Way**:
</br>

``` js 
  registerOne(ruleDefinition: RuleDefinition, ruleHandler: RuleHandler): void
```

Extend JsonLang by adding 2 params

* **ruleDefinition**: Object of 
  * identifier: `{ name: string, shortcut?: string, group?: string }`, `name`(required) is the `Rule` name, `shortcut`(optional) is the shortcut. i.e `Sum` is the `name`, and `+` is the `shortcut`, and `group` a name of group to categorize/group set of rule under group.
  * inputs: JsonSchema to define the rule inputs
  * output: JsonSchema to define the rule output
* **ruleHandler**: Object of two props sync & async, you need to pass the implementation Function `(...inputs: RuleInput[]) => RuleResult)`, `inputs`(required) is array of all inputs needs for the handler [check Input in Structure](#%EF%B8%8F-structure), and `data` is the schemaless data [check Data in the Execute Section](#execute)

</br>

``` js 
  registerMany(rules: Rules): void
```
registerMany allows registering a `Map()` of rules. The `Map key` is `RuleDefinition`, and the `Map value` is the `RuleHandler`

</br>

#### **The Second Way**:
</br>

This way is the best practice way to extend JSONLang using decorators and import

``` js 
import { JsonLang } from '@jsonlang/core';
import { MathRules } from '@jsonlang/math';
import { LogicRules } from '@jsonlang/logic';
import { ArrayRules } from '@jsonlang/array';
import { ObjectRules } from '@jsonlang/object';

const jsonLang = new JsonLang();

jsonLang.import(MathRules, LogicRules, ArrayRules, ObjectRules);
```
</br>

**Example**

``` js 
import { JsonLang } from '@jsonlang/core';

const jsonLang = new JsonLang();

@JsonLangExtension('Test') // here pass the groupName
export class TestRules {

  @RuleExtension({
    /* rule name and shortcut */
    identifier: { name: 'RuleOne', shortcut: 'R' },

    /* key-value pair <variableName, jsonschema> for rule's inputs */
    inputs: { inputOne: {type: 'string', enum: ['TP', 'RF']}, inputTwo: {type: 'number'} },

    /* jsonschema object for rule's output */
    output: { type: 'boolean', default: false } 
  })
  RuleOne(
    inputOne: string,
    inputTwo: number
  ): boolean {
    // do the implementation here
  }

  @RuleExtension({
    identifier: { name: 'RuleTwo' },
    inputs: { type: 'array', items: { type: 'string' } },
    output: { type: 'number' } 
  })
  RuleTwo(...inputs: string[]): number {
    // do the implementation here
  }
}

jsonLang.import(TestRules);

```

</br></br></br>
   



## ⚒️ **Builtin Rules**
</br>

### **Core**

</br>

[**For more Info and examples**](https://jsonlang.dev/docs/rules/core)
</br></br>

``` js 
import { JsonLang } from '@jsonlang/core';
```

* **Data**
  * Input[]: Array<string> (Size: 2) var name you need to access, Enum of "External" or "Internal"
  * Output: any.
  * Description: if the Input is `["External"]` it will return the schemaless data object which you pass it to the [execute](#execute) method, else if the input is `["Internal"]`, it will return the value of any `Output` from any rules, [Check the Output part](#%EF%B8%8F-structure) or the value passed from the parent rule like [filter in array rules](#array).

* [**More...**](https://jsonlang.dev/docs/category/rules)
</br></br>

### **Logical**
</br>

[**For more Info and examples**](https://jsonlang.dev/docs/rules/logical)
</br></br>

``` js 
import { JsonLang } from '@jsonlang/core';
import { LogicRules } from '@jsonlang/logic';

const jsonLang = new JsonLang();

jsonLang.import(LogicRules);
```

</br>

* **And** or **&&** 
  * Input[]: Array<any> (Size: Unlimited).
  * Output: Boolean (true or false).
  * Description: Do the `Anding` operation, if any value in `Input[]` has a value of (null, 0, false), it will return `false`, else it will return `true`. 

* **Or** or **||**
  * Input[]: Array<any> (Size: Unlimited).
  * Output: Boolean (true or false).
  * Description: Do the `Oring` operation, if all values in `Input[]` has a value of (null, 0, false), it will return `false`, else it will return `true` .
  
* **Equal** or **==**
  * Input[]: Array<any> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes an array of 2 inputs to compare if element one `Equal` element two or not.

* **NotEqual** or **=**
  * Input[]: Array<any> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes an array of 2 inputs to compare if element one `Not Equal` to element two or not.

* **Not** or **!**
  * Input[]: Array<Boolean> (Size: 1).
  * Output: Boolean (true or false).
  * Description: It takes an array of 1 input inverts its value. If it `true` it will return `false` and vice versa.

* **GreaterThan** or **>**
  * Input[]: Array<number> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes an array of 2 inputs to compare if element one `Greater Than` element two or not.

* **LessThan** or **<**
  * Input[]: Array<number> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes an array of 2 inputs to compare if element one `Less Than` element two or not.

* **GreaterThanOrEqual** or **>=**
  * Input[]: Array<number> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes an array of 2 inputs to compare if element one `Greater Than or Equal` element two or not.

* **LessThanOrEqual** or **<=**
  * Input[]: Array<number> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes an array of 2 inputs to compare if element one `Less Than or Equal` element two or not.

* [**More...**](https://jsonlang.dev/docs/category/rules)
</br></br>

### **Math**
</br>

[**For more Info and examples**](https://jsonlang.dev/docs/rules/math)
</br></br>

``` js 
import { JsonLang } from '@jsonlang/core';
import { MathRules } from '@jsonlang/math';

const jsonLang = new JsonLang();

jsonLang.import(MathRules);
```

</br>

* **IsNumber**
  * Input[]: Array<number> (Size: 1).
  * Output: Boolean (true or false).
  * Description: Check if the value dataType is a number or not. 

* **Sum** or **+**
  * Input[]: Array<number> (Size: unlimited).
  * Output: number.
  * Description: Used to Sum all values. i.e. `Input1 + Input2 + .... + InputN`.

* **Subtract** or **-**
  * Input[]: Array<number> (Size: unlimited).
  * Output: number.
  * Description: Used to Subtract all values. i.e. `Input1 - Input2 - .... - InputN`.

* **Multiply** or **\***
  * Input[]: Array<number> (Size: unlimited).
  * Output: number.
  * Description: Used to Multiply all values. i.e. `Input1 * Input2 * .... * InputN`.

* **Divide** or **/**
  * Input[]: Array<number> (Size: unlimited).
  * Output: number.
  * Description: Used to Divide all values. i.e. `Input1 / Input2 / .... / InputN`.

* [**More...**](https://jsonlang.dev/docs/category/rules)
</br></br>

### **Array**
</br>

[**For more Info and examples**](https://jsonlang.dev/docs/rules/array)
</br></br>

``` js 
import { JsonLang } from '@jsonlang/core';
import { ArrayRules } from '@jsonlang/array';

const jsonLang = new JsonLang();

jsonLang.import(ArrayRules);
```

</br>

* **All**
  * Input[]: Array<any> (Size: Unlimited).
  * Output: Array<any> (Size: Unlimited).
  * Description: It takes an array of inputs and returns them again. It is used to run a list of `nested Rules`.

* **Filter**
  * Input[]: Array<mixed> (Size: 2) {elements: any[], rule: IJsonLangParams}.
  * Output: Any[].
  * Description: It accepts array of elements with any type to filter them using nested/inner rules, the filter rule will pass each elements as a Data with scope `Internal`, to access it by the inner rules, you will need to use [Data](#core) Rule with scope local, check this [example](#Access-Inner-Data).

* **Map**
  * Input[]: Array<mixed> (Size: 2) {elements: any[], rule: IJsonLangParams}.
  * Output: Any[].
  * Description: It accepts array of elements with any type to map them using nested/inner rules, the filter rule will pass each elements as a Data with scope `Internal`, to access it by the inner rules, you will need to use [Data](#core) Rule with scope local.

* **Foreach**
  * Input[]: Array<mixed> (Size: 2) {elements: any[], rule: IJsonLangParams}.
  * Output: true.
  * Description: It accepts array of elements with any type to iterate over them using nested/inner rules, the filter rule will pass each elements as a Data with scope `Internal`, to access it by the inner rules, you will need to use [Data](#core) Rule with scope local.

* **Flatten**
  * Input[]: Array<mixed> (Size: 2) {elements: any[], level?: number}.
  * Output: true.
  * Description: It accepts array of elements with any type to flatten this array with any level.

* [**More...**](https://jsonlang.dev/docs/category/rules)
</br></br>

### **Object**
</br>

[**For more Info and examples**](https://jsonlang.dev/docs/rules/object)
</br></br>

``` js 
import { JsonLang } from '@jsonlang/core';
import { ObjectRules } from '@jsonlang/object';

const jsonLang = new JsonLang();

jsonLang.import(ObjectRules);
```

</br>

* **Get** [In Progress]
  * Input[]: Array<mixed> (Size: 3) {path: string, defaultValue?: any, data:{}}.
  * Output: Any.
  * Description: It accepts two inputs, the 1st one (required) is a path to get the [Data](#execute), and the 2nd one (optional) is a default value of the path is not found. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`

* **Set** [In Progress]
  * Input[]: Array<mixed> (Size: 3) {path: string, value: any, data:{}}.
  * Output: Any.
  * Description: It accepts two inputs. The 1st one (required) is a path to update/mutate the [Data](#execute), and the 2nd one is the value to set. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` does not exist, the `Set` Rule will create it.

* **Update** [In Progress]
  * Input[]: Array<mixed> (Size: 3) {path: string, value: any, data:{}}.
  * Output: Any.
  * Description: It accepts two inputs. The 1st one (required) is a path to update/mutate the [Data](#execute), and the 2nd one is the value to update. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` does not exist, the `Update` rule won't do anything.

* **Delete** [In Progress]
  * Input[]: Array<string> (Size: 2) {path: string, data:{}}.
  * Output: Any.
  * Description: It accepts two inputs, a path to mutate the [Data](#execute) by deleting a field in the request path. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` does not exist, the `Delete` rule won't do anything.

* [**More...**](https://jsonlang.dev/docs/category/rules)

</br></br></br>


## 💻**Examples**
</br>

[**For more examples**](https://jsonlang.dev/docs/category/examples)
</br></br>

### **One Level Example**
</br>

```js
import { JsonLang } from '@jsonlang/core';
import { LogicRules } from '@jsonlang/logic';

const jsonLang = new JsonLang();

jsonLang.import(LogicRules);

jsonLang.execute( { "$R": "LessThan" , "$I": [10, 20] }, undefined, { sync: true }  ); // true

// or for short
jsonLang.execute( { "$R": "<" , "$I": [10, 20] }, undefined, { sync: true } ); // true

// or use the async function
jsonLang.execute( { "$R": "<" , "$I": [10, 20] } )
  .then(result => {
    console.log(result); // true
  }); 

```
</br>

### **Nested Levels Example**
</br>

```js
import { JsonLang } from '@jsonlang/core';
import { MathRules } from '@jsonlang/math';
import { ObjectRules } from '@jsonlang/object';

const jsonLang = new JsonLang();

jsonLang.import(MathRules, ObjectRules);

const result = jsonLang.execute({ 
  $R: '+',
  $I: [
    {
      $R: '+',
      $I: [
        1,
        { $R: '*', $I: [2, 3] },
        5
      ]
    },
    {
      $R: '+',
      $I: [
        1,
        { $R: '*', $I: [3, 3], $O: 'x' },
        5
      ]
    },
    { $R: 'Var', $I: ['x'] },
    { $R: 'Get', $I: ['user.age', null, { $R: 'Data', $I: ['External'] }] }
  ]
}, { user: { name: 'test', age: 100 } }, { sync: true });

console.log(result);
// 136
```
</br>

### **Access Inner Data**
</br>

```js
import { JsonLang } from '@jsonlang/core';
import { LogicRules } from '@jsonlang/logic';
import { ArrayRules } from '@jsonlang/array';
import { ObjectRules } from '@jsonlang/object';

const jsonLang = new JsonLang();

jsonLang.import(LogicRules, ArrayRules, ObjectRules);

const result = jsonLang.execute({ $R: 'All', $I: [
  { 
    $R: 'Filter',
    $I: [[1, 3, 5], 'i', { $R: '>', $I: [{ $R: 'Data', $I: ['Internal'] }, 2] }],
  },
  { 
    $R: 'Filter',
    $I: [
      { $R: 'Get', $I: ['data.test', null, { $R: 'Data', $I: ['External'] }] }, 
      'j',
      { $R: '<', $I: [{ $R: 'Data', $I: ['Internal'] }, 500] }
    ]
  }
] }, { data: { id: 'test', test: [100, 300, 700] } }, { sync: true });

console.log(result);

// [ [ 3, 5 ], [ 100, 300 ] ]
```
</br>

### **Extend Rules Example**
</br>

```js
import { JsonLang } from '@jsonlang/core';
import { ObjectRules } from '@jsonlang/object';

const jsonLang = new JsonLang();

jsonLang.import(ObjectRules);

jsonLang.registerOne({ name: 'Test', shortcut: 't' }, { 
  sync: (input: any) => { return `${input} Test` },
  async: async (input: any) => { return `${input} Test` } 
});

const result = await jsonLang.execute({ 
  $R: 'Test',
  $I: [
    { $R: 'Get', $I: ['user.age', null, { $R: 'Data' }] }
  ]
}, { user: { name: 'test', age: 100 } }, { sync: true });

console.log(result);
// 100 Test
```
</br></br></br>

## 🧱 **Customization**
</br>

You can extend JsonLang and add any logic you want from well-known sync/async packages like lodash, moment, ajv, axios, mysql, mongoose, ...etc. 

Just use the [register functions](#extend) and follow its structure to add whatever you want.
</br></br></br>


## ⚠️ **Warnings**
</br>

JsonLang can be extended with any function, and you can override the existing rules, but make sure that any method you will add won't:

1. Have any security issue
1. Async method without timeout or with unhandled errors
1. Block the event loop in backend nodejs https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
1. Abuse the CPU or the memory
</br></br>

## 🔌 **Compatibility**
</br>

This library uses `Array.map` and `Array.reduce`, so it's not *exactly* Internet Explorer 8 friendly.
</br></br></br>

## 📗 **What's Next?**
</br>

* Adding more math, logic, object, array, date, and casting methods.
* Provide plugins to wrap well-known packages like MathJs, Jsonata, Axios, Lodash, MomentJs, ...etc.
* Adding Jsonschema validation for rules inputs
* Allow saving, loading, calling other block of rules.
* Allow logging with different level for rules while execution.
* Make a UI diagram react npm package to generate, show, build, run and show instances logs.
* Add more use-cases for many ideas for using JsonLang.
</br></br></br>

## 📜 **License**
</br>

**JsonLang** is [ **MIT licensed**](LICENSE)
