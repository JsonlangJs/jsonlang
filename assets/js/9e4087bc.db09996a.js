"use strict";
(self["webpackChunk_jsonlang_website"] = self["webpackChunk_jsonlang_website"] || []).push([[3608],{

/***/ 3008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogArchive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9817);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1077);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(328);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4799);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Year(_ref){let{year,posts}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,year),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,posts.map(post=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:post.metadata.date},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{to:post.metadata.permalink},post.metadata.formattedDate," - ",post.metadata.title)))));}function YearsSection(_ref2){let{years}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"margin-vert--lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},years.map((_props,idx)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:idx,className:"col col--4 margin-vert--lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Year,_props))))));}function listPostsByYears(blogPosts){const postsByYear=blogPosts.reduceRight((posts,post)=>{const year=post.metadata.date.split('-')[0];const yearPosts=posts.get(year)??[];return posts.set(year,[post,...yearPosts]);},new Map());return Array.from(postsByYear,_ref3=>{let[year,posts]=_ref3;return{year,posts};});}function BlogArchive(_ref4){let{archive}=_ref4;const title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .I)({id:'theme.blog.archive.title',message:'Archive',description:'The page & hero title of the blog archive page'});const description=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .I)({id:'theme.blog.archive.description',message:'Archive',description:'The page & hero description of the blog archive page'});const years=listPostsByYears(archive.blogPosts);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .PageMetadata */ .d,{title:title,description:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"hero hero--primary"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"hero__title"},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"hero__subtitle"},description))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,years.length>0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(YearsSection,{years:years}))));}

/***/ })

}]);