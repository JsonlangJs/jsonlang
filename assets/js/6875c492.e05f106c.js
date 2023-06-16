"use strict";
(self["webpackChunk_jsonlang_website"] = self["webpackChunk_jsonlang_website"] || []).push([[8610],{

/***/ 2156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BlogListPaginator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1077);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"pagination-nav","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'})},previousPage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{permalink:previousPage,title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),nextPage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{permalink:nextPage,title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:true}));}

/***/ }),

/***/ 1852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BlogPostItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1375);
/* harmony import */ var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4646);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItems(_ref){let{items,component:BlogPostItemComponent=_theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,items.map(_ref2=>{let{content:BlogPostContent}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .BlogPostProvider */ .n,{key:BlogPostContent.metadata.permalink,content:BlogPostContent},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogPostItemComponent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogPostContent,null)));}));}

/***/ }),

/***/ 242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogTagsPostsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6277);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1077);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7239);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(328);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(211);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9817);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3485);
/* harmony import */ var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2156);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4390);
/* harmony import */ var _theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1852);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useBlogPostsPlural(){const{selectMessage}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .usePluralForm */ .c)();return count=>selectMessage(count,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:'theme.blog.post.plurals',description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One post|{count} posts'},{count}));}function useBlogTagsPostsPageTitle(tag){const blogPostsPlural=useBlogPostsPlural();return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:'theme.blog.tagTitle',description:'The title of the page for a blog tag',message:'{nPosts} tagged with "{tagName}"'},{nPosts:blogPostsPlural(tag.count),tagName:tag.label});}function BlogTagsPostsPageMetadata(_ref){let{tag}=_ref;const title=useBlogTagsPostsPageTitle(tag);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .PageMetadata */ .d,{title:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{tag:"blog_tags_posts"}));}function BlogTagsPostsPageContent(_ref2){let{tag,items,sidebar,listMetadata}=_ref2;const title=useBlogTagsPostsPageTitle(tag);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{sidebar:sidebar},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"margin-bottom--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{href:tag.allTagsPath},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{items:items}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{metadata:listMetadata}));}function BlogTagsPostsPage(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .HtmlClassNameProvider */ .FG,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames.wrapper.blogPages */ .k.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames.page.blogTagPostListPage */ .k.page.blogTagPostListPage)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogTagsPostsPageMetadata,props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogTagsPostsPageContent,props));}

/***/ })

}]);