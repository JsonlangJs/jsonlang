# JsonRules

## What is JsonRules

Is a Typescript package to provide a simple Json Programming Language, that allow you to execute a safe logic in Frontend or Backend (NodeJS). It can be stored in database and rendered to the Frontend-Side to execute/run some business logic. 

JsonRules designed to be extendable, you can define new rules with sync/async handlers. 

## Installation

```bash
npm install json-rules-js
```

## Features

1. Typescript. It's a strong typed npm package
1. the JSONRules structure is Simple and Optimized, Its [structure](#structure) and [rules](#builtin-rules) has a shortcut to make your json in a small size.
1. Its structure is always Consistent. i.e. `{"Rule": "R1", Input: ["value1", "value2", {"Rule": "R2", Input: [...] }, ...] }`.
1. Safe & Secure. Each Rule has it a secure function.
1. Extendable. Easy to add new rules.
1. Sync/Async. All rules in JSONRules are sync rules, but you can extend it and add async rules.
1. DRY. You can pass any rule result in a variable to be used in another rules which make JSONRules JSON more optimized



## Methods

### Execute

``` js
   execute = (jsonRules: IJsonRules, data?: {}): RuleResult
```
execute is used to run the json rules and it takes two params

  1. **JsonRules**: check the [Structure](#structure)
  1. **Data**: schemaless data object to read/write to it using [Object Rules](#object)

execute is the `Sync` version of jsonRules, use it to run all [builtin rules](#builtin-rules) and any [extended](#extend) `Sync` Rules


``` js 
  executeAsync = async (jsonRules: IJsonRules, data?: {}): Promise<RuleResult>
```

execute is the `Async` version of jsonRules, use it to run all [builtin rules](#builtin-rules) and any [extended](#extend) `Sync` or `Async` Rules


### Extend

``` js 
registerOne = (ruleIdentifier: RuleIdentifier, ruleHandler: RuleHandler): void
```

Extend JsonRules by adding 2 params

1. **ruleIdentifier**: Object `{ name: string, shortName?: string }`, `name`(required) is the `Rule` name, and `shortName`(optional) is the shortcut. i.e `Sum` is the `name`, and `+` is the `shortName`.
1. **ruleHandler**: Sync/Async Function `(inputs: RuleInput[], data?: {}) => RuleResult)`, `inputs`(required) is array of all inputs needs for the handler [check Input in Structure](#structure), and `data` is the schemaless data [check Data in the Execute Section](#execute)

``` js 
registerMany(rules: Rules): void
```
registerMany allow to register a `Map()` of rules the `Map key` is `RuleIdentifier` and the `Map value` is the `RuleHandler`



## Structure

JsonRules have 3 main parameters:

  1. **Rule** or **R** (shortcut): (`String`), is rule name itself. i.e. `and`, `or`, `==`, `>`.
  1. **Input** or **I** (shortcut): (`any[]`), is array of inputs which will passed to the `Rule` handler/function, their type depends on the `Rule` handler or it have be a nested rule
  1. **Output** or **O** (shortcut)?: (`Symbol [Optional]`), is an optional field, it accept a name of variable which used to save the Rule result in a [variable](#core) and can be called in any other rule by `{ "Rule": "Var": "Input": ["variableX"] }`. The output value should be unique as if you defined the same value more than one time, the last one will override the value of the pervious one.


## Builtin Rules

### Core

* **Variable** or **Var**
  * Input[]: Array<string> (Size: 1).
  * Output: Any (depends on the output value).
  * Description: It used to get the value of any `Output` from any rules, [Check the Output part](#structure). 

### Logical

* **And** or **&&** 
  * Input[]: Array<any> (Size: Unlimited).
  * Output: Boolean (true or false).
  * Description: Do the `Anding` operation, if the any value in `Input[]` has a value of (null, 0, false), it will return `false`, else it will return `true`. 
* **Or** or **||**
  * Input[]: Array<any> (Size: Unlimited).
  * Output: Boolean (true or false).
  * Description: Do the `Oring` operation, if the all values in `Input[]` has a value of (null, 0, false), it will return `false`, else it will return `true` .
* **All**
  * Input[]: Array<any> (Size: Unlimited).
  * Output: Array<any> (Size: Unlimited).
  * Description: It takes array of inputs and return them again, it used to run a list of `nested Rules`.
* **Equal** or **==**
  * Input[]: Array<any> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes array of 2 inputs to compare if element one `Equal` element two or not.
* **NotEqual** or **=**
  * Input[]: Array<any> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes array of 2 inputs to compare if element one `Not Equal` element two or not.
* **Not** or **!**
  * Input[]: Array<Boolean> (Size: 1).
  * Output: Boolean (true or false).
  * Description: It takes array of 1 input invert its value if it `true` it will return `false` and vise versa.
* **GreaterThan** or **>**
  * Input[]: Array<number> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes array of 2 inputs to compare if element one `Greater Than` element two or not.
* **LessThan** or **<**
  * Input[]: Array<number> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes array of 2 inputs to compare if element one `Less Than` element two or not.
* **GreaterThanOrEqual** or **>=**
  * Input[]: Array<number> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes array of 2 inputs to compare if element one `Greater Than or Equal` element two or not.
* **LessThanOrEqual** or **<=**
  * Input[]: Array<number> (Size: 2).
  * Output: Boolean (true or false).
  * Description: It takes array of 2 inputs to compare if element one `Less Than or Equal` element two or not.

### Math

* **IsNumber** or **IsNum**
  * Input[]: Array<number> (Size: 1).
  * Output: Boolean (true or false).
  * Description: Check if the value dataType is number or not. 
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

### Object

* **Get** [In Progress]
  * Input[]: Array<mixed> (Size: 2) {path: string, defaultValue?: any}.
  * Output: Any.
  * Description: It accept 2 inputs, the 1st one (required) is a path to get the [Data](#execute), and the 2nd one (optional) is a default value of the path is not found. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`
* **Set** [In Progress]
  * Input[]: Array<mixed> (Size: 2) {path: string, value: any}.
  * Output: Any.
  * Description: It accept 2 inputs, the 1st one (required) is a path to update/mutate the [Data](#execute), and the 2nd one is the value to set. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` is not exist, the `Set` rule will create it.
* **Update** [In Progress]
  * Input[]: Array<mixed> (Size: 2) {path: string, value: any}.
  * Output: Any.
  * Description: It accept 2 inputs, the 1st one (required) is a path to update/mutate the [Data](#execute), and the 2nd one is the value to update. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` is not exist, the `Update` rule won't do any thing.
* **Delete** [In Progress]
  * Input[]: Array<string> (Size: 1) {path: string}.
  * Output: Any.
  * Description: It accept 1 input, path to mutate the [Data](#execute) by deleting a field in the request path. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` is not exist, the `Delete` rule won't do any thing.
* **Push** [In Progress]
  * Input[]: Array<mixed> (Size: 2) {path: string, defaultValue?: any}.
  * Output: Any.
  * Description: It accept 2 inputs, the 1st one (required) is a path in the [Data](#execute) of any array element to push a value in it, and the 2nd one (optional) is a default value of the path is not found. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` is not exist or if the `path` is not a path of a non array property, the `Push` rule won't do any thing.

## Examples

### One Level Example
```js
import { JsonRules } from 'json-rules-js';

const jsonRules = new JsonRules();

jsonRules.execute( { "Rule": "LessThan" , "Input": [10, 20] } ); // true

// or for short
jsonRules.execute( { "R": "<" , "I": [10, 20] } ); // true

// or use the async function
jsonRules.executeAsync( { "R": "<" , "I": [10, 20] } )
  .then(result => {
    console.log(result); // true
  }); 

```

This is a simple test, equivalent to `1 == 1`.  A few things about the format:

  1. The operator is always in the "key" position. There is only one key per JsonLogic rule.
  1. The values are typically an array.
  1. Each value can be a string, number, boolean, array (non-associative), or null

### Nested Levels Example

```js
import { JsonRules } from 'json-rules-js';

const jsonRules = new JsonRules();

const result = jsonRules.execute({ 
  Rule: '+',
  Input: [
    {
      R: '+',
      I: [
        1,
        { R: '*', I: [2, 3] },
        5
      ]
    },
    {
      R: '+',
      I: [
        1,
        { R: '*', I: [3, 3], O: 'x' },
        5
      ]
    },
    { R: 'Var', I: ['x'] },
    { R: 'Get', I: ['user.age'] }
  ]
}, { user: { name: 'test', age: 100 } });

console.log(result);
// 136
```

### Extend Rules Example

```js
import { JsonRules } from 'json-rules-js';

const jsonRules = new JsonRules();

jsonRules.registerOne({ name: 'Test', shortName: 't' }, (inputs: any[]) => {
  return `${inputs[0]} Test`
})

const result = jsonRules.execute({ 
  Rule: 'Test',
  Input: [
    { R: 'Get', I: ['user.age'] }
  ]
}, { user: { name: 'test', age: 100 } });

console.log(result);
// 100 Test
```


## Customization

You can extend JsonRules and add any logic you want from well known sync/async packages like lodash, moment, ajv, axios, mysql, mongoose, ...etc. 

Just use the [register functions](#extend) and follow its structure to add what ever you want.



## Warnings

JsonRules can be extended with any function and you can override the existing rules, but make sure that any method you will add won't:

1. Have any security issue
1. If it's and Async method, it should have a small timeout
1. Block the event loop in backend nodejs https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
1. abuse the cpu or the memory


## Compatibility

This library makes use of `Array.map` and `Array.reduce`, so it's not *exactly* Internet Explorer 8 friendly.

## What Next?

* Adding more math, logic, object, date, casting methods
* Automation Testing for the all methods and cover all cases
* Allow importing packages to extend JsonRules in an easy way
* Provide plugins to wrap some of the well-know packages like MathJs, Jsonata, Axios, Lodash, MomentJs, ...etc




