"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[232],{3020:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var a=r(7624),n=r(7936),o=r(5520);var i=r(100),l=r(1504);const c=e=>e.articlesPage?.isLoading||!1,s=e=>e.articlesPage?.error,u=e=>e.articlesPage?.view||n.od.SMALL,d=e=>e.articlesPage?.page||1,f=e=>e.articlesPage?.order??"asc",y=e=>e.articlesPage?.sort??n.g5.CREATED,p=e=>e.articlesPage?.search??"",g=e=>e.articlesPage?.type??n.OY.ALL;var v=r(9664);const m=(0,v.aw)("articlesPage/fetchArticlesList",(async(e,t)=>{const{extra:r,rejectWithValue:a,getState:o}=t,i=(l=o(),l.articlesPage?.limit||9);var l;const c=y(o()),s=f(o()),u=p(o()),v=d(o()),m=g(o());try{h={sort:c,order:s,search:u,type:m},window.history.pushState(null,"",function(e){const t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((([e,r])=>{void 0!==r&&t.set(e,r)})),`?${t.toString()}`}(h));const e=await r.api.get("/articles",{params:{_expand:"user",_limit:i,_page:v,_sort:c,_order:s,q:u,type:m===n.OY.ALL?void 0:m}});if(!e.data)throw new Error;return e.data}catch(e){return a("error")}var h}));var h=r(9636);const b=(0,v.cr)({selectId:e=>e.id}),w=b.getSelectors((e=>e.articlesPage||b.getInitialState())),S=(0,v.is)({name:"articlesPageSlice",initialState:b.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:n.od.SMALL,page:1,hasMore:!0,_inited:!1,limit:10,sort:n.g5.CREATED,search:"",order:"asc",type:n.OY.ALL}),reducers:{setView:(e,t)=>{e.view=t.payload,localStorage.setItem(h.o,t.payload)},setPage:(e,t)=>{e.page=t.payload},setOrder:(e,t)=>{e.order=t.payload},setSort:(e,t)=>{e.sort=t.payload},setSearch:(e,t)=>{e.search=t.payload},setType:(e,t)=>{e.type=t.payload},initState:e=>{const t=localStorage.getItem(h.o);e.view=t,e.limit=t===n.od.BIG?4:10,e._inited=!0}},extraReducers:e=>{e.addCase(m.pending,((e,t)=>{e.error=void 0,e.isLoading=!0,t.meta.arg.replace&&b.removeAll(e)})).addCase(m.fulfilled,((e,t)=>{e.isLoading=!1,e.hasMore=t.payload.length>=e.limit,t.meta.arg.replace?b.setAll(e,t.payload):b.addMany(e,t.payload)})).addCase(m.rejected,((e,t)=>{e.isLoading=!1,e.error=t.payload}))}}),{reducer:j,actions:P}=S;var O=r(624),A=r(1104),x=r(5680),C=r(9976),L=r(8960);const k=(0,l.memo)((function(e){var t=e.className,r=(0,i.Gy)("article").t,c=(0,A.A)(),s=(0,O.w1)(u),d=(0,O.w1)(y),v=(0,O.w1)(f),h=(0,O.w1)(p),b=(0,O.w1)(g),w=(0,l.useCallback)((function(){c(m({replace:!0}))}),[c]),S=function(e,t){const r=(0,l.useRef)({id:void 0});return(0,l.useCallback)(((...t)=>{void 0!==r.current.id&&clearTimeout(r.current.id),r.current.id=setTimeout((()=>{e(...t)}),500)}),[e,500])}(w),j=(0,l.useCallback)((function(e){c(P.setView(e))}),[c]),k=(0,l.useCallback)((function(e){c(P.setSort(e)),c(P.setPage(1)),w()}),[c,w]),E=(0,l.useCallback)((function(e){c(P.setOrder(e)),c(P.setPage(1)),w()}),[c,w]),N=(0,l.useCallback)((function(e){c(P.setSearch(e)),c(P.setPage(1)),S()}),[c,S]),I=(0,l.useCallback)((function(e){c(P.setType(e)),c(P.setPage(1)),w()}),[c,w]);return(0,a.jsxs)("div",{className:(0,o.g)("ohHwDM7G",[t],{}),children:[(0,a.jsxs)("div",{className:"gPdD6Skt",children:[(0,a.jsx)(n.Q9,{order:v,sort:d,onChangeOrder:E,onChangeSort:k}),(0,a.jsx)(n.uk,{view:s,onViewClick:j})]}),(0,a.jsx)(x.M,{className:"pMi0xyts",children:(0,a.jsx)(C.E,{onChange:N,value:h,placeholder:r("Search")})}),(0,a.jsx)(L.w,{value:b,onChangeType:I,className:"RCWJprO4"})]})}));var E=r(4768),N=r(3720),I=r(7256),M=r(3152);const T=(0,v.aw)("articlesPage/fetchNextArticlesPage",(async(e,t)=>{const{getState:r,dispatch:a}=t,n=(o=r(),o.articlesPage?.hasMore);var o;const i=d(r()),l=c(r());n&&!l&&(a(P.setPage(i)),a(m({})))})),_=(0,v.aw)("articlesPage/initArticlesPage",(async(e,t)=>{const{getState:r,dispatch:a}=t;var n;if(n=r(),!n.articlesPage?._inited){const t=e.get("order"),r=e.get("sort"),n=e.get("search"),o=e.get("type");t&&a(P.setOrder(t)),r&&a(P.setSort(r)),n&&a(P.setSearch(n)),o&&a(P.setType(o)),a(P.initState()),a(m({}))}})),D={articlesPage:"P0AGARUu"};function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var G={articlesPage:j},U=function(e){var t,r,i=e.className,d=(0,A.A)(),f=(0,O.w1)(w.selectAll),y=(0,O.w1)(c),p=(0,O.w1)(u),g=(0,O.w1)(s),v=(t=(0,E.k5)(),r=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o,i,l=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=o.call(r)).done)&&(l.push(a.value),l.length!==t);c=!0);}catch(e){s=!0,n=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw n}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],m=(0,l.useCallback)((function(){d(T())}),[d]);return(0,I.w)((function(){d(_(v))})),g&&!y?(0,a.jsx)("p",{children:g}):(0,a.jsx)(N.S,{reducers:G,removeAfterUnmount:!1,children:(0,a.jsxs)(M.K,{onScrollEnd:m,className:(0,o.g)(D.articlesPage,[i],{}),children:[(0,a.jsx)(k,{}),(0,a.jsx)(n.uw,{isLoading:y,view:p,articles:f,className:D.list})]})})};const V=(0,l.memo)(U)},9976:(e,t,r)=>{r.d(t,{E:()=>f});var a=r(7624),n=r(5520),o=r(1504);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var l=["className","value","onChange","type","placeholder","autofocus","readonly"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){var a,n,o,l;a=e,n=t,o=r[t],l=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!=i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n),(n="symbol"==i(l)?l:String(l))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o,i,l=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=o.call(r)).done)&&(l.push(a.value),l.length!==t);c=!0);}catch(e){s=!0,n=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var f=(0,o.memo)((function(e){var t=e.className,r=e.value,i=e.onChange,c=e.type,d=void 0===c?"text":c,f=e.placeholder,y=e.autofocus,p=e.readonly,g=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,l),v=(0,o.useRef)(null),m=u((0,o.useState)(!1),2),h=m[0],b=m[1],w=u((0,o.useState)(0),2),S=w[0],j=w[1],P=h&&!p;return(0,o.useEffect)((function(){var e;y&&(b(!0),null===(e=v.current)||void 0===e||e.focus())}),[y]),(0,a.jsxs)("div",{className:(0,n.g)("yiPASP1v",[t],{}),children:[f&&(0,a.jsx)("div",{className:"emAQQ85i",children:"".concat(f,">")}),(0,a.jsxs)("div",{className:"y1GiFC_L",children:[(0,a.jsx)("input",s({ref:v,type:d,value:r,onChange:function(e){null==i||i(e.target.value),j(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){b(!0)},onBlur:function(){b(!1)},onSelect:function(e){var t;j((null==e||null===(t=e.currentTarget)||void 0===t?void 0:t.selectionStart)||0)},readOnly:p},g)),P&&(0,a.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*S,"px")}})]})]})}))}}]);