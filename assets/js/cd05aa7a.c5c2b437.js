"use strict";
(self["webpackChunk_jsonlang_website"] = self["webpackChunk_jsonlang_website"] || []).push([[2729],{

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 5633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ JsonLangRunner)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(2784);
// EXTERNAL MODULE: ../../node_modules/@monaco-editor/react/lib/es/index.js + 25 modules
var es = __webpack_require__(7911);
// EXTERNAL MODULE: ./node_modules/@jsonlang/core/dist/index.js
var dist = __webpack_require__(9875);
// EXTERNAL MODULE: ./node_modules/@jsonlang/math/dist/index.js
var math_dist = __webpack_require__(9503);
// EXTERNAL MODULE: ./node_modules/@jsonlang/logic/dist/index.js
var logic_dist = __webpack_require__(2952);
// EXTERNAL MODULE: ./node_modules/@jsonlang/array/dist/index.js
var array_dist = __webpack_require__(6174);
// EXTERNAL MODULE: ./node_modules/@jsonlang/object/dist/index.js
var object_dist = __webpack_require__(6619);
;// CONCATENATED MODULE: ./src/components/JsonLangRunner/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"gridContainer":"gridContainer_TrrE","gridItem":"gridItem_Hw16","resultBase":"resultBase_zOl6","result":"result_TIKY","label":"label_zWtK"});
;// CONCATENATED MODULE: ./src/components/JsonLangRunner/examples.js
function getExample(exampleNum){const examples=[[`{
      "$R": "+",
      "$I": [{
        "$R": "+",
        "$I": [1, { "$R": "*", "$I": [2, 3] }, 5]
      }, {
        "$R": "+",
        "$I": [1, { "$R": "*", "$I": [3, 3, 7], "$O": "x" }, 6, 7]
      }, {
        "$R": "Data",
        "$I": ["x", "Internal"]
      }, {
        "$R": "Get",
        "$I": ["user.age", null, { "$R": "Data", "$I": ["*", "External"] }]
      }]
}`,`{ 
  "user": {
    "name": "test",
    "age": 100
  } 
}`],[`{ 
  "$R": "All", 
  "$I": [
    { "$R": "+", "$I": [1, 2], "$O": "y" },
    { "$R": "Data", "$I": ["y", "Internal"] }
  ] 
}
`,`
{}
`],[`{ 
  "$R": "Data",
  "$I": ["*", "External"] 
}
`,`{
  "name": { 
    "first": "Cristiano",
    "last": "Ronaldo"
  },
  "job": "Footballer" 
}
`],[`{ 
  "$R": "Sum",
  "$I": [3, 4, 6]
}
`,`{}
`],[`{ 
  "$R": "-",
  "$I": [3, 4, 6]
}
`,`{}
`],[`{ 
  "$R": "Multiply",
  "$I": [3, 4, 6]
}
`,`{}
`],[`{ 
  "$R": "/",
  "$I": [50, 5, 20]
}
`,`{}
`],[`{ 
  "$R": "And",
  "$I": [true, true, false]
}
`,`{}
`],[`{ 
  "$R": "||",
  "$I": [true, false, true, true]
}
`,`{}
`],[`{ 
  "$R": "Equal",
  "$I": ["x", "x"]
}
`,`{}
`],[`{ 
  "$R": "!=",
  "$I": ["x", "y"]
}
`,`{}
`],[`{ 
  "$R": "Not",
  "$I": [true]
}
`,`{}
`],[`{ 
  "$R": ">",
  "$I": [31, 4]
}
`,`{}
`],[`{ 
  "$R": "<",
  "$I": [41, 9]
}
`,`{}
`],[`{ 
  "$R": ">=",
  "$I": [9, 9]
}
`,`{}
`],[`{ 
  "$R": "<=",
  "$I": [8, 9]
}
`,`{}
`],[`{ 
  "$R": "Get",
  "$I": [
    "name.last",
    "Unknown Name",
    { "$R": "Data", "$I": ["*", "External"] }
  ]
}
`,`{
  "name": { 
    "first": "Cristiano",
    "last": "Ronaldo"
  },
  "job": "Footballer" 
}
`],[`{ 
  "$R": "All", 
  "$I": [
    { "$R": "+", "$I": [1, 3, 5] },
    { "$R": "-", "$I": [5, 3] }
  ] 
}
`,`{}`],[`{ 
  "$R": "Filter", 
  "$I": [
    [1, 3, 5],
    "i",
    { 
      "$R": ">",
      "$I": [{ "$R": "Data", "$I": ["i", "Internal"] }, 2] 
    }
  ]
}
`,`{}`],[`{ 
  "$R": "Map", 
  "$I": [
    [1, 3, 5],
    "i",
    { 
      "$R": "+",
      "$I": [{ "$R": "Data", "$I": ["i", "Internal"] }, 2]
    }
  ]
}
`,`{}`],[`{ 
  "$R": "Foreach", 
  "$I": [
    [1, 3, 5],
    "i",
    {
      "$R": "+",
      "$I": [{ "$R": "Data", "$I": ["i", "Internal"] }, 2]
    }
  ]
}
`,`{}`],[`{ 
  "$R": "Flatten", 
  "$I": [
    [[[1, 3, 1], [33, 6, 3]], [33, 6, 66, 654]],
    2
  ]
}
`,`{}`],[`{
  "$R": "<" ,
  "$I": [10, 20]
}`,`{}`],[`{ 
  "$R": "All", "$I": [
    { 
      "$R": "Filter",
      "$I": [
        [1, 3, 5],
        "i",
        { 
          "$R": ">",
          "$I": [{ "$R": "Data", "$I": ["i", "Internal"] }, 2]
        }
      ]
    },
    { 
      "$R": "Filter",
      "$I": [
        { 
          "$R": "Get",
          "$I": [
            "data.test",
            null,
            { "$R": "Data", "$I": ["*", "External"] }
          ]
        },
        "k",
        {
          "$R": "<",
          "$I": [{ "$R": "Data", "$I": ["k", "Internal"] }, 500]
        }
      ]
    }
  ] 
}
`,`
{ 
  "data": { 
    "id": "test",
    "test": [100, 300, 700]
  } 
}
`],[`{ 
  "$R": "Test",
  "$I": [
    { 
      "$R": "Get",
      "$I": ["user.age", null, { "$R": "Data", "$I": ["*", "External"] }]
    }
  ]
}
`,`{
  "user": { 
    "name": "test",
    "age": 100
  }
}`],[`{ 
  "$R": "If",
  "$I": [
    { 
      "$R": ">",
      "$I": [
        {
          "$R": "Data",
          "$I": ["age", "External"]
        },
        3
      ]
    },
    { 
      "$R": "If",
      "$I": [0, "Failed", "Success"]
    },
    false
  ]
}

`,`{ 
  "name": "test",
  "age": 100
}`],[`{ 
  "$R": "ArrayConcat",
  "$I": [[3, 5], [3, 7]]
}

`,`{}`],[`{ 
  "$R": "ArrayUnique",
  "$I": [3, 5, 3, 7, 1, 1]
}
`,`{}`]];return examples[exampleNum-1];}
// EXTERNAL MODULE: ../../node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(361);
;// CONCATENATED MODULE: ./src/components/JsonLangRunner/index.js
const jsonLang=new dist.JsonLang();jsonLang.import(math_dist.MathRules,logic_dist.LogicRules,array_dist.ArrayRules,object_dist.ObjectRules);const definition={identifier:{name:'Test',shortcut:'t'},inputs:{type:'any'},output:{type:'string'}};jsonLang.registerOne(definition,{sync:input=>{return`${input} Test`;}});function JsonLangRunner(_ref){let{example,height}=_ref;const{colorMode}=(0,contexts_colorMode/* useColorMode */.I)();const[result,setResult]=react.useState('');const[code,setCode]=react.useState(getExample(example)[0]);const[objData,setData]=react.useState(getExample(example)[1]);react.useEffect(()=>{run();});function run(){let jsonCode,jsonData;try{jsonCode=JSON.parse(code);jsonData=JSON.parse(objData);}catch{jsonCode=jsonData=null;}if(jsonCode&&jsonData){try{const res=jsonLang.execute(jsonCode,jsonData,{sync:true});setResult(typeof res=='object'?JSON.stringify(res):res);}catch(error){setResult(error.message);}}}function handleCodeChange(value){setCode(value);}function handleDataChange(value){setData(value);}function handleCodeValidation(markers){}return[/*#__PURE__*/react.createElement("div",{className:styles_module.gridContainer,key:"JsonLang"},/*#__PURE__*/react.createElement("div",{className:styles_module.gridItem},/*#__PURE__*/react.createElement("label",{key:"JsonLangLabel",className:styles_module.label},"Rules"),/*#__PURE__*/react.createElement(es/* default */.ZP,{theme:colorMode==='dark'?"light":"vs-dark",height:height,defaultLanguage:"json",defaultValue:code,onChange:handleCodeChange,onValidate:handleCodeValidation,key:"JsonLangCode"})),/*#__PURE__*/react.createElement("div",{className:styles_module.gridItem},/*#__PURE__*/react.createElement("label",{key:"DataLabel",className:styles_module.label},"Data"),/*#__PURE__*/react.createElement(es/* default */.ZP,{theme:colorMode==='dark'?"light":"vs-dark",height:height,defaultLanguage:"json",defaultValue:objData,onChange:handleDataChange,key:"JsonLangData"}))),/*#__PURE__*/react.createElement("div",{key:"Result"},/*#__PURE__*/react.createElement("label",{key:"ResultLabel",className:styles_module.label},"Result"),/*#__PURE__*/react.createElement("textarea",{key:"ResultValue",defaultValue:result,disabled:true,className:styles_module.resultBase+" "+styles_module.result}))];}

/***/ }),

/***/ 8006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jsonlang_jsonlang_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7896);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(876);
/* harmony import */ var _site_src_components_JsonLangRunner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5633);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:4};const contentTitle='Object';const metadata={"unversionedId":"rules/object","id":"rules/object","title":"Object","description":"All Object operations to Read/Mutate the Data","source":"@site/docs/rules/object.mdx","sourceDirName":"rules","slug":"/rules/object","permalink":"/docs/rules/object","draft":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rules/object.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Math","permalink":"/docs/rules/math"},"next":{"title":"Array","permalink":"/docs/rules/array"}};const assets={};const toc=[{value:'Get In Progress',id:'get-in-progress',level:2},{value:'Set In Progress',id:'set-in-progress',level:2},{value:'Update In Progress',id:'update-in-progress',level:2},{value:'Delete In Progress',id:'delete-in-progress',level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_jsonlang_jsonlang_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"object"},`Object`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`All Object operations to Read/Mutate the Data`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},`import { JsonLang } from '@jsonlang/core';
import { ObjectRules } from '@jsonlang/object';

const jsonLang = new JsonLang();

jsonLang.import(ObjectRules);
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"get-in-progress"},`Get `,`[In Progress]`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Input[]:`),` Array<mixed`,`>`,` (Size: 3) {path: string, defaultValue?: any | null, data:{}}.`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Path: the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`path`),` of the field you need to get. It must follow the dotted style `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`var1.var2`),` for nested fields and brackets with number for arrays `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`var1.var2[3].var3`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`defaultValue: default value used if the field wasn't exists in this path, it can be `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`null`),` if you don't need it. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Data: the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`)),` you want to access.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Output:`),` Any.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Description:`),` It used to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`get`),` some values in complex and nesed objects for Internal and Exiternal `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`)),` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_JsonLangRunner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{example:"17",height:"20vh",key:"example17",mdxType:"JsonLangRunner"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"set-in-progress"},`Set `,`[In Progress]`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Input[]:`),` Array<mixed`,`>`,` (Size: 3) {path: string, value: any, data:{}}.`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Path: the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`path`),` of the field you need to get. It must follow the dotted style `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`var1.var2`),` for nested fields and brackets with number for arrays `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`var1.var2[3].var3`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`value: the value to set. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Data: the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`)),` you want to access.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Output:`),` Any.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Description:`),` It used to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`set`),` some values in complex and nesed objects for Internal and Exiternal `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`)),`, it will create the field if it's not exist, or it will update its value if it's already exist `)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"update-in-progress"},`Update `,`[In Progress]`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Input[]:`),` Array<mixed`,`>`,` (Size: 3) {path: string, value: any, data:{}}.`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Path: the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`path`),` of the field you need to get. It must follow the dotted style `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`var1.var2`),` for nested fields and brackets with number for arrays `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`var1.var2[3].var3`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`value: the value to update. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Data: the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`)),` you want to access.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Output:`),` Any.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Description:`),` It used to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`update`),` some values in complex and nesed objects for Internal and Exiternal `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`)),`, it Won't do any thing if the  field isn't exist, but it will update its value if it's already exist `)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"delete-in-progress"},`Delete `,`[In Progress]`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Input[]:`),` Array<string`,`>`,` (Size: 2) {path: string, data:{}}.`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Path: the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`path`),` of the field you need to get. It must follow the dotted style `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`var1.var2`),` for nested fields and brackets with number for arrays `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`var1.var2[3].var3`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Data: the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`)),` you want to access. `))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Output:`),` Any.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Description:`),` It used to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`delete`),` some values in complex and nesed objects for Internal and Exiternal `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`)),`, it Won't do any thing if the  field isn't exist, but it will delete it if it's already exist`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);