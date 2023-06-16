"use strict";
(self["webpackChunk_jsonlang_website"] = self["webpackChunk_jsonlang_website"] || []).push([[5485],{

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

/***/ 1695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4799);
/* harmony import */ var _site_src_components_JsonLangRunner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5633);
function Playground(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{title:"Playground",description:"Playground",key:"playground"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_site_src_components_JsonLangRunner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{example:"1",height:"70vh",key:"playgroundRunner"}))];}

/***/ })

}]);