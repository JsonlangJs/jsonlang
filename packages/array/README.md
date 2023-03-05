# 👋 **JsonLang/Array**


<a href="https://jsonlang.dev"><img align="center" src="https://raw.githubusercontent.com/JsonlangJs/jsonlang/master/jsonlang.svg" height="50%" width="60%" alt="JsonLang Logo"/></a></br></br>

<ul>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev"><b>Website</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/docs/intro"><b>Tutorial</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/playground/"><b>Live Playground (Try it NOW)</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/docs/category/examples"><b>Examples</b></a></li>
</ul>
</br></br></br>

It is JsonLang Plugin/Extension for Array/Collection operations.
</br></br> 


[![npm version](https://img.shields.io/npm/v/jsonlang-js.svg)](https://www.npmjs.com/package/jsonlang-js)
[![install size](https://packagephobia.com/badge?p=jsonlang-js)](https://packagephobia.com/result?p=jsonlang-js)
[![npm downloads](https://img.shields.io/npm/dy/jsonlang-js.svg)](https://www.npmjs.com/package/jsonlang-js)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/jsonlang-js)](https://img.shields.io/snyk/vulnerabilities/npm/jsonlang-js)
[![codecov](https://codecov.io/gh/ahmed-medhat-tawfiq/jsonlang-js/branch/master/graph/badge.svg?token=35JEA7G369)](https://codecov.io/gh/ahmed-medhat-tawfiq/jsonlang-js)
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
npm install @jsonlang/core @jsonlang/array
```
</br> 

## 🎉 **Usage**

``` js 
import { JsonLang } from '@jsonlang/core';
import { ArrayRules } from '@jsonlang/array';

const jsonLang = new JsonLang();

jsonLang.import(ArrayRules);
```
</br></br>

## ⚒️ **Rules**
</br>

[**For more Info and examples**](https://jsonlang.dev/docs/rules/array)
</br></br>

</br>

* **All**
  * Input[]: Array<any> (Size: Unlimited).
  * Output: Array<any> (Size: Unlimited).
  * Description: It takes an array of inputs and returns them again. It is used to run a list of `nested Rules`.

* **Filter**
  * Input[]: Array<mixed> (Size: 2) {elements: any[], rule: IJsonLangParams}.
  * Output: Any[].
  * Description: It accepts array of elements with any type to filter them using nested/inner rules, the filter rule will pass each elements as a Data with scope `Internal`, to access it by the inner rules, you will need to use [Data](https://jsonlang.dev/docs/rules/core#data) Rule with scope local, check this [example](#examples).

* **Map**
  * Input[]: Array<mixed> (Size: 2) {elements: any[], rule: IJsonLangParams}.
  * Output: Any[].
  * Description: It accepts array of elements with any type to map them using nested/inner rules, the filter rule will pass each elements as a Data with scope `Internal`, to access it by the inner rules, you will need to use [Data](https://jsonlang.dev/docs/rules/core#data) Rule with scope local.

* **Foreach**
  * Input[]: Array<mixed> (Size: 2) {elements: any[], rule: IJsonLangParams}.
  * Output: true.
  * Description: It accepts array of elements with any type to iterate over them using nested/inner rules, the filter rule will pass each elements as a Data with scope `Internal`, to access it by the inner rules, you will need to use [Data](https://jsonlang.dev/docs/rules/core#data) Rule with scope local.

* **Flatten**
  * Input[]: Array<mixed> (Size: 2) {elements: any[], level?: number}.
  * Output: true.
  * Description: It accepts array of elements with any type to flatten this array with any level.

* [**More...**](https://jsonlang.dev/docs/rules/array)
</br></br></br>


## 💻**Examples**
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
    $I: [[1, 3, 5], { $R: '>', $I: [{ $R: 'Data', $I: ['Internal'] }, 2] }]
  },
  { 
    $R: 'Filter',
    $I: [
      { $R: 'Get', $I: ['data.test', null, { $R: 'Data', $I: ['External'] }] },
      { $R: '<', $I: [{ $R: 'Data', $I: ['Internal'] }, 500] }
    ]
  }
] }, { data: { id: 'test', test: [100, 300, 700] } }, { sync: true });

console.log(result);

// [ [ 3, 5 ], [ 100, 300 ] ]
```

</br></br>


## 🔌 **Compatibility**
</br>

This library uses `Array.map` and `Array.reduce`, so it's not *exactly* Internet Explorer 8 friendly.
</br></br></br>


## 📜 **License**
</br>

**JsonLang/Array** is [ **MIT licensed**](LICENSE)
