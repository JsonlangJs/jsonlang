# 👋 **JsonLang/Object**


<a href="https://jsonlang.dev"><img align="center" src="https://raw.githubusercontent.com/JsonlangJs/jsonlang/master/jsonlang.svg" height="50%" width="60%" alt="JsonLang Logo"/></a></br></br>

<ul>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev"><b>Website</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/docs/intro"><b>Tutorial</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/playground/"><b>Live Playground (Try it NOW)</b></a></li>
  <li style="display:inline; margin:17px; font-size:17px"><a href="https://jsonlang.dev/docs/category/examples"><b>Examples</b></a></li>
</ul>
</br></br></br>

It is JsonLang Plugin/Extension for Object operations.
</br></br> 


[![npm version](https://img.shields.io/npm/v/@jsonlang/object.svg)](https://www.npmjs.com/package/@jsonlang/object)
[![install size](https://packagephobia.com/badge?p=@jsonlang/object)](https://packagephobia.com/result?p=@jsonlang/object)
[![npm downloads](https://img.shields.io/npm/dy/@jsonlang/object.svg)](https://www.npmjs.com/package/@jsonlang/object)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@jsonlang/object)](https://img.shields.io/snyk/vulnerabilities/npm/@jsonlang/object)
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
npm install @jsonlang/core @jsonlang/object
```
</br> 

## 🎉 **Usage**

``` js 
import { JsonLang } from '@jsonlang/core';
import { ObjectRules } from '@jsonlang/object';

const jsonLang = new JsonLang();

jsonLang.import(ObjectRules);
```
</br></br>

## ⚒️ **Rules**
</br>

[**For more Info and examples**](https://jsonlang.dev/docs/rules/object)
</br></br>

</br>

* **Get** [In Progress]
  * Input[]: Array<mixed> (Size: 3) {path: string, defaultValue?: any, data:{}}.
  * Output: Any.
  * Description: It accepts two inputs, the 1st one (required) is a path to get the [Data](https://jsonlang.dev/docs/intro#execute), and the 2nd one (optional) is a default value of the path is not found. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`

* **Set** [In Progress]
  * Input[]: Array<mixed> (Size: 3) {path: string, value: any, data:{}}.
  * Output: Any.
  * Description: It accepts two inputs. The 1st one (required) is a path to update/mutate the [Data](https://jsonlang.dev/docs/intro#execute), and the 2nd one is the value to set. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` does not exist, the `Set` Rule will create it.

* **Update** [In Progress]
  * Input[]: Array<mixed> (Size: 3) {path: string, value: any, data:{}}.
  * Output: Any.
  * Description: It accepts two inputs. The 1st one (required) is a path to update/mutate the [Data](https://jsonlang.dev/docs/intro#execute), and the 2nd one is the value to update. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` does not exist, the `Update` rule won't do anything.

* **Delete** [In Progress]
  * Input[]: Array<string> (Size: 2) {path: string, data:{}}.
  * Output: Any.
  * Description: It accepts two inputs, a path to mutate the [Data](https://jsonlang.dev/docs/intro#execute) by deleting a field in the request path. the `path` must follow the dotted style `var1.var2` for nested fields and brackets with number for arrays `var1.var2[3].var3`. If the `path` does not exist, the `Delete` rule won't do anything.

* [**More...**](https://jsonlang.dev/docs/rules/object)
</br></br></br>


## 💻**Examples**
</br>

```js
import { JsonLang } from '@jsonlang/core';
import { ObjectRules } from '@jsonlang/object';

const jsonLang = new JsonLang();

jsonLang.import(ObjectRules);

jsonLang.execute(
  { $R: 'Get', $I: ['data.test', null, { $R: 'Data', $I: ['External'] }] },
  { data: { id: '1', test: 100 } },
  { sync: true }
); // 100

```

</br></br>


## 🔌 **Compatibility**
</br>

This library uses `Array.map` and `Array.reduce`, so it's not *exactly* Internet Explorer 8 friendly.
</br></br></br>


## 📜 **License**
</br>

**JsonLang/Object** is [ **MIT licensed**](LICENSE)
