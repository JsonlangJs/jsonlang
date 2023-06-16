"use strict";
(self["webpackChunk_jsonlang_website"] = self["webpackChunk_jsonlang_website"] || []).push([[3206],{

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

/***/ 1922:
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
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:1};const contentTitle='JsonLang';const metadata={"unversionedId":"intro","id":"intro","title":"JsonLang","description":"It is a Typescript package that provides a simple JSON Programming Language, allowing you to execute a safe logic in Frontend or Backend (NodeJS). Furthermore, it can be stored in the database and rendered to the Frontend-Side to execute/run some business logic.","source":"@site/docs/intro.mdx","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Rules","permalink":"/docs/category/rules"}};const assets={};const toc=[{value:'Getting Started',id:'getting-started',level:2},{value:'Features',id:'features',level:2},{value:'Structure',id:'structure',level:2},{value:'Methods',id:'methods',level:2},{value:'Execute',id:'execute',level:3},{value:'<strong>Try It</strong>',id:'try-it',level:2},{value:'Example',id:'example',level:3},{value:'Explain',id:'explain',level:3}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_jsonlang_jsonlang_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"jsonlang"},`JsonLang`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`It is a Typescript package that provides a simple JSON Programming Language, allowing you to execute a safe logic in Frontend or Backend (NodeJS). Furthermore, it can be stored in the database and rendered to the Frontend-Side to execute/run some business logic.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`JsonLang is designed to be extendable. You can define new rules with sync/async handlers.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"getting-started"},`Getting Started`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},`npm install @jsonlang/core
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"features"},`Features`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Typescript. It's a strongly typed npm package`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`the JsonLang structure is Simple and Optimized. Its `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"#structure"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`structure`)),` and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"/docs/rules/core"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`rules`)),` have a shortcut to make your JSON in a small size.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Its structure is always Consistent. i.e. `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`{"$R": "R1", "$I": ["value1", "value2", {"$R": "R2", "$I": [...] }, ...] }`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Safe & Secure. Each Rule has a secure handler.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Extendable. Easy to add new rules.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Sync/Async. All rules in JsonLang are sync rules, but you can extend it and add async rules.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`DRY. You can pass any rule result in a variable to be used in another rule which makes JsonLang JSON more optimized`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"structure"},`Structure`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`JsonLang have three main parameters:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`$R`),`: (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`String`),`) is the rule name itself. i.e. `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`and`),`, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`or`),`, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`==`),`, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`>`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`$I`),`: (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`any[]`),`) is an array of inputs which will be passed to the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`Rule`),` handler/function, their type depends on the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`Rule`),` handler, or it can be a nested rule`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`$O`),`?: (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`Symbol [Optional]`),`), is an optional field, it accept a name of variable which used to save the Rule result in a `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"/docs/rules/core"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`variable`)),` and can be called in any other rule by `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`{ "$R": "Var": "$I": ["variableX"] }`),`. The output value should be unique. If you define the same value more than once, the last one will override the value of the previous one.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"methods"},`Methods`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"execute"},`Execute`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},`  async execute(jsonLang: IJsonLangParams, data?: {}, options?: { sync: false }): Promise<RuleResult>
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Execute is used to run the JsonLang and takes two parameters.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`JsonLang`),`: check the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"#structure"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Structure`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Data`),`: schemaless data object to read/write to it. To get data use the Rule `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./rules/core#data"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`Data`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`options`),`: execution options. it has one property called `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`sync`),` if it false the execute will be async for async rules, else it will be sync`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Execute is the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Async`),` version of JsonLang, use it to run all `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/docs/rules/core"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`builtin rules`)),` and any `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/docs/extend/customization"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`extended`)),` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Sync`),` Rules or `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Async`),` Rules`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},`  execute(jsonLang: IJsonLangParams, data: {} | undefined, options: { sync: true }): RuleResult
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Execute is the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Sync`),` version of JsonLang with , use it to run all `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/docs/rules/core"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`builtin rules`)),` and any `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/docs/extend/customization"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},`extended`)),` only `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Sync`),` Rules.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"try-it"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},`Try It`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"example"},`Example`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_JsonLangRunner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{example:"1",height:"40vh",key:"example1",mdxType:"JsonLangRunner"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"explain"},`Explain`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Sum all 4 inputs`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`input 1: 1 + ( 2 * 3 )  + 5`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`input 2: 1 + ( 3 `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},` 3 `),` 7 )  + 6 + 7, pass the value of ( 3 `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},` 3 `),` 7 = 63 ) to a variable called `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`x`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`input 3: get the value of `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`x`),` = 63`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`input 4: get the value of `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`user.age`),` = 100`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);