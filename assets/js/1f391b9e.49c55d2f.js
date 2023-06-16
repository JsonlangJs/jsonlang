"use strict";
(self["webpackChunk_jsonlang_website"] = self["webpackChunk_jsonlang_website"] || []).push([[3085],{

/***/ 8398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXPage)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(2784);
// EXTERNAL MODULE: ../../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6277);
// EXTERNAL MODULE: ../../node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(328);
// EXTERNAL MODULE: ../../node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(211);
// EXTERNAL MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 65 modules
var Layout = __webpack_require__(4799);
// EXTERNAL MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 36 modules
var MDXContent = __webpack_require__(8632);
// EXTERNAL MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(8188);
;// CONCATENATED MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"mdxPageWrapper":"mdxPageWrapper_SLvB"});
;// CONCATENATED MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPage(props){const{content:MDXPageContent}=props;const{metadata:{title,description,frontMatter}}=MDXPageContent;const{wrapperClassName,hide_table_of_contents:hideTableOfContents}=frontMatter;return/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(wrapperClassName??ThemeClassNames/* ThemeClassNames.wrapper.mdxPages */.k.wrapper.mdxPages,ThemeClassNames/* ThemeClassNames.page.mdxPage */.k.page.mdxPage)},/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title,description:description}),/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement("main",{className:"container container--fluid margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('row',styles_module.mdxPageWrapper)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',!hideTableOfContents&&'col--8')},/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement(MDXContent/* default */.Z,null,/*#__PURE__*/react.createElement(MDXPageContent,null)))),!hideTableOfContents&&MDXPageContent.toc.length>0&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},/*#__PURE__*/react.createElement(TOC/* default */.Z,{toc:MDXPageContent.toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level}))))));}

/***/ }),

/***/ 8188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TOC)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7896);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(2784);
// EXTERNAL MODULE: ../../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6277);
// EXTERNAL MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(6986);
;// CONCATENATED MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tableOfContents":"tableOfContents_TN1Q","docItemContainer":"docItemContainer_JtJJ"});
;// CONCATENATED MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME='table-of-contents__link toc-highlight';const LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){let{className,...props}=_ref;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.tableOfContents,'thin-scrollbar',className)},/*#__PURE__*/react.createElement(TOCItems/* default */.Z,(0,esm_extends/* default */.Z)({},props,{linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})));}

/***/ }),

/***/ 6986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7896);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(2784);
// EXTERNAL MODULE: ../../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(7683);
;// CONCATENATED MODULE: ../../node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function treeifyTOC(flatTOC){const headings=flatTOC.map(heading=>({...heading,parentIndex:-1,children:[]}));// Keep track of which previous index would be the current heading's direct
// parent. Each entry <i> is the last index of the `headings` array at heading
// level <i>. We will modify these indices as we iterate through all headings.
// e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
// indices 0 and 1 will remain unused.
const prevIndexForLevel=Array(7).fill(-1);headings.forEach((curr,currIndex)=>{// Take the last seen index for each ancestor level. the highest index will
// be the direct ancestor of the current heading.
const ancestorLevelIndexes=prevIndexForLevel.slice(2,curr.level);curr.parentIndex=Math.max(...ancestorLevelIndexes);// Mark that curr.level was last seen at the current index.
prevIndexForLevel[curr.level]=currIndex;});const rootNodes=[];// For a given parentIndex, add each Node into that parent's `children` array
headings.forEach(heading=>{const{parentIndex,...rest}=heading;if(parentIndex>=0){headings[parentIndex].children.push(rest);}else{rootNodes.push(rest);}});return rootNodes;}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */function useTreeifiedTOC(toc){return useMemo(()=>treeifyTOC(toc),[toc]);}function filterTOC(_ref){let{toc,minHeadingLevel,maxHeadingLevel}=_ref;function isValid(item){return item.level>=minHeadingLevel&&item.level<=maxHeadingLevel;}return toc.flatMap(item=>{const filteredChildren=filterTOC({toc:item.children,minHeadingLevel,maxHeadingLevel});if(isValid(item)){return[{...item,children:filteredChildren}];}return filteredChildren;});}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */function useFilteredAndTreeifiedTOC(_ref2){let{toc,minHeadingLevel,maxHeadingLevel}=_ref2;return (0,react.useMemo)(()=>filterTOC({toc:treeifyTOC(toc),minHeadingLevel,maxHeadingLevel}),[toc,minHeadingLevel,maxHeadingLevel]);}
;// CONCATENATED MODULE: ../../node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */function getVisibleBoundingClientRect(element){const rect=element.getBoundingClientRect();const hasNoHeight=rect.top===rect.bottom;if(hasNoHeight){return getVisibleBoundingClientRect(element.parentNode);}return rect;}/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */function isInViewportTopHalf(boundingRect){return boundingRect.top>0&&boundingRect.bottom<window.innerHeight/2;}function getAnchors(_ref){let{minHeadingLevel,maxHeadingLevel}=_ref;const selectors=[];for(let i=minHeadingLevel;i<=maxHeadingLevel;i+=1){selectors.push(`h${i}.anchor`);}return Array.from(document.querySelectorAll(selectors.join()));}function getActiveAnchor(anchors,_ref2){let{anchorTopOffset}=_ref2;// Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
// under the viewport top boundary. It does not mean this anchor is visible
// yet, but if user continues scrolling down, it will be the first to become
// visible
const nextVisibleAnchor=anchors.find(anchor=>{const boundingRect=getVisibleBoundingClientRect(anchor);return boundingRect.top>=anchorTopOffset;});if(nextVisibleAnchor){const boundingRect=getVisibleBoundingClientRect(nextVisibleAnchor);// If anchor is in the top half of the viewport: it is the one we consider
// "active" (unless it's too close to the top and and soon to be scrolled
// outside viewport)
if(isInViewportTopHalf(boundingRect)){return nextVisibleAnchor;}// If anchor is in the bottom half of the viewport, or under the viewport,
// we consider the active anchor is the previous one. This is because the
// main text appearing in the user screen mostly belong to the previous
// anchor. Returns null for the first anchor, see
// https://github.com/facebook/docusaurus/issues/5318
return anchors[anchors.indexOf(nextVisibleAnchor)-1]??null;}// No anchor under viewport top (i.e. we are at the bottom of the page),
// highlight the last anchor found
return anchors[anchors.length-1]??null;}function getLinkAnchorValue(link){return decodeURIComponent(link.href.substring(link.href.indexOf('#')+1));}function getLinks(linkClassName){return Array.from(document.getElementsByClassName(linkClassName));}function getNavbarHeight(){// Not ideal to obtain actual height this way
// Using TS ! (not ?) because otherwise a bad selector would be un-noticed
return document.querySelector('.navbar').clientHeight;}function useAnchorTopOffsetRef(){const anchorTopOffsetRef=(0,react.useRef)(0);const{navbar:{hideOnScroll}}=(0,useThemeConfig/* useThemeConfig */.L)();(0,react.useEffect)(()=>{anchorTopOffsetRef.current=hideOnScroll?0:getNavbarHeight();},[hideOnScroll]);return anchorTopOffsetRef;}/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */function useTOCHighlight(config){const lastActiveLinkRef=(0,react.useRef)(undefined);const anchorTopOffsetRef=useAnchorTopOffsetRef();(0,react.useEffect)(()=>{if(!config){// No-op, highlighting is disabled
return()=>{};}const{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel}=config;function updateLinkActiveClass(link,active){if(active){if(lastActiveLinkRef.current&&lastActiveLinkRef.current!==link){lastActiveLinkRef.current.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);lastActiveLinkRef.current=link;// link.scrollIntoView({block: 'nearest'});
}else{link.classList.remove(linkActiveClassName);}}function updateActiveLink(){const links=getLinks(linkClassName);const anchors=getAnchors({minHeadingLevel,maxHeadingLevel});const activeAnchor=getActiveAnchor(anchors,{anchorTopOffset:anchorTopOffsetRef.current});const activeLink=links.find(link=>activeAnchor&&activeAnchor.id===getLinkAnchorValue(link));links.forEach(link=>{updateLinkActiveClass(link,link===activeLink);});}document.addEventListener('scroll',updateActiveLink);document.addEventListener('resize',updateActiveLink);updateActiveLink();return()=>{document.removeEventListener('scroll',updateActiveLink);document.removeEventListener('resize',updateActiveLink);};},[config,anchorTopOffsetRef]);}
;// CONCATENATED MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
function TOCItemTree(_ref){let{toc,className,linkClassName,isChild}=_ref;if(!toc.length){return null;}return/*#__PURE__*/react.createElement("ul",{className:isChild?undefined:className},toc.map(heading=>/*#__PURE__*/react.createElement("li",{key:heading.id},/*#__PURE__*/react.createElement("a",{href:`#${heading.id}`,className:linkClassName??undefined// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react.createElement(TOCItemTree,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName}))));}// Memo only the tree root is enough
/* harmony default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));
;// CONCATENATED MODULE: ../../node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCItems(_ref){let{toc,className='table-of-contents table-of-contents__left-border',linkClassName='table-of-contents__link',linkActiveClassName=undefined,minHeadingLevel:minHeadingLevelOption,maxHeadingLevel:maxHeadingLevelOption,...props}=_ref;const themeConfig=(0,useThemeConfig/* useThemeConfig */.L)();const minHeadingLevel=minHeadingLevelOption??themeConfig.tableOfContents.minHeadingLevel;const maxHeadingLevel=maxHeadingLevelOption??themeConfig.tableOfContents.maxHeadingLevel;const tocTree=useFilteredAndTreeifiedTOC({toc,minHeadingLevel,maxHeadingLevel});const tocHighlightConfig=(0,react.useMemo)(()=>{if(linkClassName&&linkActiveClassName){return{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);useTOCHighlight(tocHighlightConfig);return/*#__PURE__*/react.createElement(Tree,(0,esm_extends/* default */.Z)({toc:tocTree,className:className,linkClassName:linkClassName},props));}

/***/ })

}]);