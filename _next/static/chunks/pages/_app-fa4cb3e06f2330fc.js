(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return __webpack_require__(3847)}])},1650:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o6:function(){return DownloadButton},Wi:function(){return GoogleAnalytics},lJ:function(){return components_MadeWithLoveInUkraine},Zn:function(){return components_MainLayout},oX:function(){return StandWithUkraine}});var jsx_runtime=__webpack_require__(5893);function StandWithUkraine(){return(0,jsx_runtime.jsx)("div",{className:"row",children:(0,jsx_runtime.jsx)("div",{className:"col text-center pt-4 pb-3",children:(0,jsx_runtime.jsx)("a",{href:"https://u24.gov.ua/",target:"_blank",rel:"noreferrer",title:"Support freedom and stand against the brutal war started by russia! Check the initiative of the President of Ukraine \uD83C\uDDFA\uD83C\uDDE6",children:(0,jsx_runtime.jsx)("img",{src:__webpack_require__(8962),width:"192",alt:"Stand with Ukraine!"})})})})}__webpack_require__(7294);var script=__webpack_require__(4298),script_default=__webpack_require__.n(script);function GoogleAnalytics(param){let{id}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(script_default(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(id),strategy:"afterInteractive"}),(0,jsx_runtime.jsx)(script_default(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '".concat(id,"');\n        ")})]})}let MadeWithLoveInUkraine=()=>(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsx)("div",{className:"row",children:(0,jsx_runtime.jsxs)("div",{className:"col text-center pt-4 pb-4",children:["Made with ❤️ in \uD83C\uDDFA\uD83C\uDDE6",(0,jsx_runtime.jsx)("br",{}),"\xa9 ",(0,jsx_runtime.jsx)("a",{href:"mailto:internetmonit@gmail.com",children:"Dmytro Shcherbyna"})," ","2014-2022"]})})});var components_MadeWithLoveInUkraine=MadeWithLoveInUkraine;function DownloadButton(){return(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsx)("div",{className:"row",children:(0,jsx_runtime.jsx)("div",{className:"col text-center mt-4 mb-5",children:(0,jsx_runtime.jsxs)("a",{className:"btn btn-primary",href:"https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo",target:"_blank",rel:"noreferrer",children:[(0,jsx_runtime.jsx)("img",{src:__webpack_require__(683),height:"24",alt:""}),"\xa0\xa0Install ICM for Google Chrome"]})})})})}var next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link);let MainLayout=param=>{let{children}=param;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("nav",{className:"navbar navbar-expand-lg bg-light sticky-top",children:(0,jsx_runtime.jsxs)("div",{className:"container",children:[(0,jsx_runtime.jsxs)(link_default(),{className:"navbar-brand d-flex",href:"/",children:[(0,jsx_runtime.jsx)("img",{src:__webpack_require__(4693),height:"31",alt:""}),"\xa0",(0,jsx_runtime.jsx)("span",{children:"ICM"})]}),(0,jsx_runtime.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,jsx_runtime.jsx)("span",{className:"navbar-toggler-icon"})}),(0,jsx_runtime.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,jsx_runtime.jsx)("div",{className:"d-flex ms-auto",children:(0,jsx_runtime.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0",children:[(0,jsx_runtime.jsx)("li",{className:"nav-item pe-2",children:(0,jsx_runtime.jsx)(link_default(),{className:"nav-link",href:"/internet-connection-improvements.html",children:"How to improve Internet connection"})}),(0,jsx_runtime.jsx)("li",{className:"nav-item",children:(0,jsx_runtime.jsx)("form",{children:(0,jsx_runtime.jsx)(link_default(),{className:"btn btn-primary",href:"https://chrome.google.com/webstore/detail/internet-connection-monit/hgccfdagfbilbdbkgmfdmmdfmjjoakfo",children:"Install"})})})]})})})]})}),(0,jsx_runtime.jsx)("div",{children:children})]})};var components_MainLayout=MainLayout},227:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDomainLocale=function(path,locale,locales,domainLocales){return!1},("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},1551:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _interop_require_default=__webpack_require__(2648).Z,_object_without_properties_loose=__webpack_require__(7273).Z,_react=_interop_require_default(__webpack_require__(7294)),_router=__webpack_require__(1003),_formatUrl=__webpack_require__(7795),_addLocale=__webpack_require__(4465),_routerContext=__webpack_require__(2692),_appRouterContext=__webpack_require__(8245),_useIntersection=__webpack_require__(9246),_getDomainLocale=__webpack_require__(227),_addBasePath=__webpack_require__(3468);let prefetched=new Set;function prefetch(router,href,as,options){if(_router.isLocalURL(href)){if(!options.bypassPrefetchedCheck){let locale=void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0,prefetchedKey=href+"%"+as+"%"+locale;if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}Promise.resolve(router.prefetch(href,as,options)).catch(err=>{})}}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:_formatUrl.formatUrl(urlObjOrString)}let Link=_react.default.forwardRef(function(props,forwardedRef){let children,child;let{href:hrefProp,as:asProp,children:childrenProp,prefetch:prefetchProp,passHref,replace,shallow,scroll,locale,onClick,onMouseEnter:onMouseEnterProp,onTouchStart:onTouchStartProp,legacyBehavior=!0!==Boolean(!0)}=props,restProps=_object_without_properties_loose(props,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);children=childrenProp,legacyBehavior&&("string"==typeof children||"number"==typeof children)&&(children=_react.default.createElement("a",null,children));let prefetchEnabled=!1!==prefetchProp,pagesRouter=_react.default.useContext(_routerContext.RouterContext),appRouter=_react.default.useContext(_appRouterContext.AppRouterContext),router=null!=pagesRouter?pagesRouter:appRouter,isAppRouter=!pagesRouter,{href,as}=_react.default.useMemo(()=>{if(!pagesRouter){let resolvedHref=formatStringOrUrl(hrefProp);return{href:resolvedHref,as:asProp?formatStringOrUrl(asProp):resolvedHref}}let[resolvedHref1,resolvedAs]=_router.resolveHref(pagesRouter,hrefProp,!0);return{href:resolvedHref1,as:asProp?_router.resolveHref(pagesRouter,asProp):resolvedAs||resolvedHref1}},[pagesRouter,hrefProp,asProp]),previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);legacyBehavior&&(child=_react.default.Children.only(children));let childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,[setIntersectionRef,isVisible,resetVisible]=_useIntersection.useIntersection({rootMargin:"200px"}),setRef=_react.default.useCallback(el=>{(previousAs.current!==as||previousHref.current!==href)&&(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el),childRef&&("function"==typeof childRef?childRef(el):"object"==typeof childRef&&(childRef.current=el))},[as,childRef,href,resetVisible,setIntersectionRef]);_react.default.useEffect(()=>{router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale})},[as,href,isVisible,locale,prefetchEnabled,null==pagesRouter?void 0:pagesRouter.locale,router]);let childProps={ref:setRef,onClick(e){legacyBehavior||"function"!=typeof onClick||onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&!e.defaultPrevented&&function(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled){let{nodeName}=e.currentTarget,isAnchorNodeName="A"===nodeName.toUpperCase();if(isAnchorNodeName&&(function(event){let{target}=event.currentTarget;return target&&"_self"!==target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&2===event.nativeEvent.which}(e)||!_router.isLocalURL(href)))return;e.preventDefault();let navigate=()=>{"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow,locale,scroll}):router[replace?"replace":"push"](as||href,{forceOptimisticNavigation:!prefetchEnabled})};isAppRouter?_react.default.startTransition(navigate):navigate()}(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled)},onMouseEnter(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&(prefetchEnabled||!isAppRouter)&&prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&(prefetchEnabled||!isAppRouter)&&prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0})}};if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){let curLocale=void 0!==locale?locale:null==pagesRouter?void 0:pagesRouter.locale,localeDomain=(null==pagesRouter?void 0:pagesRouter.isLocaleDomain)&&_getDomainLocale.getDomainLocale(as,curLocale,null==pagesRouter?void 0:pagesRouter.locales,null==pagesRouter?void 0:pagesRouter.domainLocales);childProps.href=localeDomain||_addBasePath.addBasePath(_addLocale.addLocale(as,curLocale,null==pagesRouter?void 0:pagesRouter.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):_react.default.createElement("a",Object.assign({},restProps,childProps),children)});exports.default=Link,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},9246:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useIntersection=function(param){let{rootRef,rootMargin,disabled}=param,isDisabled=disabled||!hasIntersectionObserver,[visible,setVisible]=_react.useState(!1),[element,setElement]=_react.useState(null);_react.useEffect(()=>{if(hasIntersectionObserver){if(!isDisabled&&!visible&&element&&element.tagName){let unobserve=function(element,callback,options){let{id,observer,elements}=function(options){let instance;let id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find(obj=>obj.root===id.root&&obj.margin===id.margin);if(existing&&(instance=observers.get(existing)))return instance;let elements=new Map,observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{let callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)})},options);return instance={id,observer,elements},idList.push(id),observers.set(id,instance),instance}(options);return elements.set(element,callback),observer.observe(element),function(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);let index=idList.findIndex(obj=>obj.root===id.root&&obj.margin===id.margin);index>-1&&idList.splice(index,1)}}}(element,isVisible=>isVisible&&setVisible(isVisible),{root:null==rootRef?void 0:rootRef.current,rootMargin});return unobserve}}else if(!visible){let idleCallback=_requestIdleCallback.requestIdleCallback(()=>setVisible(!0));return()=>_requestIdleCallback.cancelIdleCallback(idleCallback)}},[element,isDisabled,rootMargin,rootRef,visible]);let resetVisible=_react.useCallback(()=>{setVisible(!1)},[]);return[setElement,visible,resetVisible]};var _react=__webpack_require__(7294),_requestIdleCallback=__webpack_require__(4686);let hasIntersectionObserver="function"==typeof IntersectionObserver,observers=new Map,idList=[];("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},3847:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return App}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(894);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7294),next_head__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9008),next_head__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__),components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1650);function App(param){let{Component,pageProps}=param;return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{"https:"!==location.protocol&&location.replace("https:".concat(location.href.substring(location.protocol.length)))},[]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{__webpack_require__.e(332).then(__webpack_require__.t.bind(__webpack_require__,5577,23))},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_3___default(),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{charSet:"utf-8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{name:"description",content:"Internet Connection Monitor – Google Chrome extension for monitoring and testing Internet connectivity. Access log and send to your ISP"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{name:"keywords",content:"internet,chrome extension,connection,connectivity,test,icm,internet connection monitor,log,logging,monitoring,interruptions,internet down,latency,ping,wi-fi,wi fi"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{name:"author",content:"Dmytro Shcherbyna"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:"Internet Connection Monitor – official web page"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:title",content:"Internet Connection Monitor – official web page"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:description",content:"Internet Connection Monitor – Google Chrome extension for monitoring and testing Internet connectivity. Access log and send to your ISP"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:type",content:"website"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:site_name",content:"Internet Connection Monitor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:url",content:"https://internetmon.org"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:image",content:"https://internetmon.org"+__webpack_require__(9148)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{...pageProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components__WEBPACK_IMPORTED_MODULE_4__.Wi,{id:"G-865Y8ZL7M0"})]})}},894:function(){},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3121)},1664:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(1551)},4298:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3573)},4693:function(module){module.exports="/_next/static/images/ICM-logo-256-8414d7e480ddc342525fed22dc5f1347.png"},9148:function(module){module.exports="/_next/static/images/ICM-promo-large-6f53bde6ee3c8d7c69a4cd48d133b8c1.png"},683:function(module){module.exports="/_next/static/images/chrome-logo-51849c1734791d256a34b0a10634cd50.png"},8962:function(module){module.exports="/_next/static/images/ukraine-64e615d3ed78ee795fa8fd18e553f697.png"}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(880)}),_N_E=__webpack_require__.O()}]);