# 👋 **JsonLang/Logic**


<a href="https://jsonlang.dev"><img align="center" src="https://raw.githubusercontent.com/JsonlangJs/jsonlang/master/jsonlang.svg" height="50%" width="60%" alt="JsonLang Logo"/></a></br></br>

<ul>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev"><b>Website</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/docs/intro"><b>Tutorial</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/playground/"><b>Live Playground (Try it NOW)</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/docs/category/examples"><b>Examples</b></a></li>
</ul>
</br></br></br>

It is JsonLang Plugin/Extension for Logical operations.
</br></br> 


[![npm version](https://img.shields.io/npm/v/jsonlang-js.svg)](https://www.npmjs.com/package/jsonlang-js)
[![install size](https://packagephobia.com/badge?p=jsonlang-js)](https://packagephobia.com/result?p=jsonlang-js)
[![npm downloads](https://img.shields.io/npm/dy/jsonlang-js.svg)](https://www.npmjs.com/package/jsonlang-js)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/jsonlang-js)](https://img.shields.io/snyk/vulnerabilities/npm/jsonlang-js)
[![codecov](https://codecov.io/gh/ahmed-medhat-tawfiq/jsonlang-js/branch/master/graph/badge.svg?token=35JEA7G369)](https://codecov.io/gh/ahmed-medhat-tawfiq/jsonlang-js)
[![Maintenance](https://img.shields.io/maintenance/yes/2023.svg)](https://github.com/JsonlangJs/jsonlang-js/graphs/commit-activity)
[![Build](https://img.shields.io/github/actions/workflow/status/jsonlangjs/jsonlang/deploy-package.yml?branch=master)](https://github.com/JsonlangJs/jsonlang/actions)
[![Programming Language](https://img.shields.io/badge/typescript-100%25-blue.svg)](https://img.shields.io/badge/typescript-100%25-blue.svg)
[![License](https://img.shields.io/github/license/jsonlangjs/jsonlang.svg)](https://github.com/JsonlangJs/jsonlang/blob/master/LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fahmed-medhat-tawfiq%2Fjsonlang-js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fahmed-medhat-tawfiq%2Fjsonlang-js?ref=badge_shield)
[![Github Sponsor](https://camo.githubusercontent.com/7d9333b097b2f54a8957d126ab82937811489c9b75c3850f609985cf94cd29fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2532302d53706f6e736f722532306d652532306f6e2532304769744875622d6f72616e6765)](https://github.com/sponsors/ahmed-medhat-tawfiq)

</br>


</br></br></br>

## ⏬ **Installation**

```bash
npm install @jsonlang/core @jsonlang/logic
```
</br> 

## 🎉 **Usage**

``` js 
import { JsonLang } from '@jsonlang/core';
import { LogicRules } from '@jsonlang/logic';

const jsonLang = new JsonLang();

jsonLang.import(LogicRules);
```
</br></br>

## ⚒️ **Rules**
</br>

[**For more Info and examples**](https://jsonlang.dev/docs/rules/logical)
</br></br>

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

* [**More...**](https://jsonlang.dev/docs/rules/logical)
</br></br></br>


## 💻**Examples**
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

</br></br>


## 🔌 **Compatibility**
</br>

This library uses `Array.map` and `Array.reduce`, so it's not *exactly* Internet Explorer 8 friendly.
</br></br></br>


## 📜 **License**
</br>

**JsonLang/Logic** is [ **MIT licensed**](LICENSE)
