"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[516],{3516:(e,r,n)=>{n.r(r),n.d(r,{default:()=>H});var t,a=n(7624);!function(e){e.INCORRECT_USER_DATA="INCORRECT_USER_DATA",e.INCORRECT_USERNAME="INCORRECT_USERNAME",e.INCORRECT_AGE="INCORRECT_AGE",e.INCORRECT_COUNTRY="INCORRECT_COUNTRY",e.INCORRECT_CURRENCY="INCORRECT_CURRENCY",e.INCORRECT_CITY="INCORRECT_CITY",e.INCORRECT_AVATAR_LINK="INCORRECT_AVATAR_LINK",e.NO_DATA="NO_DATA",e.SERVER_ERROR="SERVER_ERROR"}(t||(t={}));var o=n(9664);const l=(0,o.aw)("profile/fetchProfileData",(async(e,r)=>{const{extra:n,rejectWithValue:t}=r;try{const r=await n.api.get(`/profile/${e}`);if(console.log("Here is response from server",r),!r.data)throw new Error;return r.data}catch(e){return console.log(e),t("error")}})),i=e=>e.profile?.form,c=(0,o.aw)("profile/updateProfileData",(async(e,r)=>{const{extra:n,rejectWithValue:a,getState:o}=r,l=i(o()),c=(e=>{if(!e)return[t.NO_DATA];const{firstName:r,lastName:n,age:a,country:o,currency:l,city:i,username:c,avatar:u}=e,s=[];return r&&n||s.push(t.INCORRECT_USER_DATA),a&&Number.isInteger(a)||s.push(t.INCORRECT_AGE),o||s.push(t.INCORRECT_COUNTRY),l||s.push(t.INCORRECT_CURRENCY),i||s.push(t.INCORRECT_CITY),c||s.push(t.INCORRECT_USERNAME),u||s.push(t.INCORRECT_AVATAR_LINK),s})(l);if(c.length)return a(c);try{const e=await n.api.put(`/profile/${l?.id}`,l);if(!e.data)throw new Error;return e.data}catch(e){return console.log(e),a([t.SERVER_ERROR])}})),u=(0,o.is)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{setReadonly:(e,r)=>{e.readonly=r.payload},cancelEdit:e=>{e.readonly=!0,e.validateErrors=void 0,e.form=e.data},updateProfile:(e,r)=>{e.form={...e.form,...r.payload}}},extraReducers:e=>{e.addCase(l.pending,(e=>{e.error=void 0,e.isLoading=!0})).addCase(l.fulfilled,((e,r)=>{e.isLoading=!1,e.data=r.payload,e.form=r.payload})).addCase(l.rejected,((e,r)=>{e.isLoading=!1,e.error=r.payload})).addCase(c.pending,(e=>{e.validateErrors=void 0,e.isLoading=!0})).addCase(c.fulfilled,((e,r)=>{e.isLoading=!1,e.data=r.payload,e.form=r.payload,e.readonly=!0,e.validateErrors=void 0})).addCase(c.rejected,((e,r)=>{e.isLoading=!1,e.validateErrors=r.payload}))}}),{actions:s}=u,{reducer:f}=u;var d;!function(e){e.Ukraine="Ukraine",e.Norway="Norway",e.Lithuania="Lithuania",e.Kyrgyzstan="Kyrgyzstan",e.USA="USA",e.Spain="Spain",e.France="France",e.Poland="Poland"}(d||(d={}));var y=n(5520),p=n(100),v=n(6368),m=n(1504);function C(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var g,h=Object.keys(d).map((function(e){return{value:d[e],content:d[e]}})),b=(0,m.memo)((function(e){var r,n,t=e.className,o=e.value,l=e.onChange,i=e.readonly,c=(r=(0,p.Gy)("profile"),n=1,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=o.call(n)).done)&&(i.push(t.value),i.length!==r);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(r,n)||function(e,r){if(e){if("string"==typeof e)return C(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,r):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],u=(0,m.useCallback)((function(e){null==l||l(e)}),[l]);return(0,a.jsx)(v.M,{className:(0,y.g)("",[t],{}),label:c("Choose country"),options:h,value:o,onChange:u,readonly:i})}));!function(e){e.RUB="RUB",e.EUR="EUR",e.USD="USD",e.NOK="NOK",e.TNG="TNG",e.SOM="SOM"}(g||(g={}));var R=Object.keys(g).map((function(e){return{value:g[e],content:g[e]}})),N=(0,m.memo)((function(e){var r=e.className,n=e.value,t=e.onChange,o=e.readonly,l=(0,p.Gy)(["profile"]).t,i=(0,m.useCallback)((function(e){null==t||t(e)}),[t]);return(0,a.jsx)(v.M,{className:(0,y.g)("",[r],{}),label:l("Choose currency"),options:R,value:n,onChange:i,readonly:o})})),E=n(2748),O=n(9976),j=n(9197),S=n(8760);const T={profileCard:"cH3_ZM3Y",input:"ZTyX8_n9",loading:"t07ZxFGs",error:"i5YK3SSb",avatarWrapper:"bEFNSahN",editing:"DjTe7269"};function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function I(e,r,n){var t;return t=function(e,r){if("object"!=A(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=A(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==A(t)?t:String(t))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function x(e){var r=e.className,n=e.data,t=e.isLoading,o=e.error,l=e.readonly,i=e.onChangeFirstname,c=e.onChangeLastname,u=e.onChangeAge,s=e.onChangeCity,f=e.onChangeAvatar,d=e.onChangeUsername,v=e.onChangeCountry,m=e.onChangeCurrency,C=(0,p.Gy)(["profile"]).t;if(t)return(0,a.jsx)("div",{className:(0,y.g)(T.profileCard,[r],I({},T.loading,!0)),children:(0,a.jsx)(j.c,{})});if(o)return(0,a.jsx)("div",{className:(0,y.g)(T.profileCard,[r,T.error],{}),children:(0,a.jsx)(S.a,{theme:S.IN.ERROR,title:C("Profile loading error"),text:C("Try to refresh your page"),align:S.Ml.CENTER})});var g=I({},T.editing,!l);return(0,a.jsx)("div",{className:(0,y.g)(T.profileCard,[r],g),children:(0,a.jsxs)("div",{className:T.data,children:[(null==n?void 0:n.avatar)&&(0,a.jsx)("div",{className:T.avatarWrapper,children:(0,a.jsx)(E.C,{src:null==n?void 0:n.avatar})}),(0,a.jsx)(O.E,{value:null==n?void 0:n.firstName,placeholder:C("Your name"),className:T.input,onChange:i,readonly:l}),(0,a.jsx)(O.E,{value:null==n?void 0:n.lastName,placeholder:C("Your lastname"),className:T.input,onChange:c,readonly:l}),(0,a.jsx)(O.E,{value:null==n?void 0:n.age,placeholder:C("Your age"),className:T.input,onChange:u,readonly:l}),(0,a.jsx)(O.E,{value:null==n?void 0:n.city,placeholder:C("City"),className:T.input,onChange:s,readonly:l}),(0,a.jsx)(O.E,{value:null==n?void 0:n.username,placeholder:C("Enter username"),className:T.input,onChange:d,readonly:l}),(0,a.jsx)(O.E,{value:null==n?void 0:n.avatar,placeholder:C("Enter link to your avatar"),className:T.input,onChange:f,readonly:l}),(0,a.jsx)(N,{className:T.input,value:null==n?void 0:n.currency,onChange:m,readonly:l}),(0,a.jsx)(b,{className:T.input,value:null==n?void 0:n.country,onChange:v,readonly:l})]})})}const w=e=>e.profile?.isLoading,_=e=>e.profile?.error,P=e=>e.profile?.readonly,U=e=>e.profile?.validateErrors;var k=n(624),L=n(3284),M=n(3720),D=n(1104),Y=n(7256),G=n(3152),K=n(5760);const F=(0,o.Yr)([e=>(0,K.Go)(e),e=>(e=>e.profile?.data)(e)],((e,r)=>!(!e||!r)&&e.id===r.id));var V=n(8084);const q={profilePageHeader:"FDWWAgRG",editBtn:"vP5lJqeW",btnsWrapper:"RSsPrFbn"};function W(e){var r=e.className,n=(0,p.Gy)("profile").t,t=(0,k.w1)(F),o=(0,k.w1)(P),l=(0,D.A)(),i=(0,m.useCallback)((function(){l(s.setReadonly(!1))}),[l]),u=(0,m.useCallback)((function(){l(s.cancelEdit())}),[l]),f=(0,m.useCallback)((function(){l(c())}),[l]);return(0,a.jsxs)("div",{className:(0,y.g)(q.profilePageHeader,[r],{}),children:[(0,a.jsx)(S.a,{title:n("Profile")}),t&&(0,a.jsx)("div",{className:q.btnsWrapper,children:o?(0,a.jsx)(V.q,{className:q.editBtn,theme:V.qm.OUTLINE,onClick:i,children:n("Edit")}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(V.q,{className:q.editBtn,theme:V.qm.OUTLINE_RED,onClick:u,children:n("Cancel")}),(0,a.jsx)(V.q,{className:q.saveBtn,theme:V.qm.OUTLINE,onClick:f,children:n("Save")})]})})]})}function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function z(e,r,n){var t;return t=function(e,r){if("object"!=B(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=B(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==B(t)?t:String(t))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var $={profile:f};const H=function(e){var r=e.className,n=(0,p.Gy)("profile").t,o=(0,D.A)(),c=(0,k.w1)(i),u=(0,k.w1)(w),f=(0,k.w1)(_),d=(0,k.w1)(P),v=(0,k.w1)(U),C=(0,L.W4)().id,g=z(z(z(z(z(z(z(z(z({},t.SERVER_ERROR,n("Server error on saving")),t.INCORRECT_AGE,n("Incorrect user age")),t.INCORRECT_AVATAR_LINK,n("Incorrect avatar link")),t.INCORRECT_CITY,n("Incorrect city")),t.INCORRECT_COUNTRY,n("Incorrect country")),t.INCORRECT_CURRENCY,n("Incorrect currency")),t.INCORRECT_USERNAME,n("Incorrect username")),t.INCORRECT_USER_DATA,n("Name and Lastname are required")),t.NO_DATA,n("Missing data"));(0,Y.w)((function(){C&&o(l(C))}));var h=(0,m.useCallback)((function(e){o(s.updateProfile({firstName:e||""}))}),[o]),b=(0,m.useCallback)((function(e){o(s.updateProfile({lastName:e||""}))}),[o]),R=(0,m.useCallback)((function(e){o(s.updateProfile({city:e||""}))}),[o]),N=(0,m.useCallback)((function(e){o(s.updateProfile({age:Number(e||0)}))}),[o]),E=(0,m.useCallback)((function(e){o(s.updateProfile({username:e||""}))}),[o]),O=(0,m.useCallback)((function(e){o(s.updateProfile({avatar:e||""}))}),[o]),j=(0,m.useCallback)((function(e){o(s.updateProfile({currency:e}))}),[o]),T=(0,m.useCallback)((function(e){o(s.updateProfile({country:e}))}),[o]);return(0,a.jsx)(M.S,{reducers:$,removeAfterUnmount:!0,children:(0,a.jsxs)(G.K,{className:(0,y.g)("",[r],{}),children:[(0,a.jsx)(W,{}),(null==v?void 0:v.length)&&v.map((function(e){return(0,a.jsx)(S.a,{theme:S.IN.ERROR,text:g[e]},e)})),(0,a.jsx)(x,{data:c,isLoading:u,error:f,readonly:d,onChangeFirstname:h,onChangeLastname:b,onChangeAge:N,onChangeCity:R,onChangeUsername:E,onChangeAvatar:O,onChangeCurrency:j,onChangeCountry:T})]})})}},3720:(e,r,n)=>{n.d(r,{S:()=>c});var t=n(7624),a=n(1504),o=n(624);function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=o.call(n)).done)&&(i.push(t.value),i.length!==r);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var c=function(e){var r=e.children,n=e.reducers,i=e.removeAfterUnmount,c=void 0===i?"true":i,u=(0,o.o3)(),s=(0,o.OY)();return(0,a.useEffect)((function(){var e=u.reducerManager.getReducerMap();return Object.entries(n).forEach((function(r){var n=l(r,2),t=n[0],a=n[1];e[t]!==a&&(u.reducerManager.add(t,a),s({type:"@INIT ".concat(t," reducer")}))})),function(){c&&Object.entries(n).forEach((function(e){var r=l(e,2),n=r[0];r[1],u.reducerManager.remove(n),s({type:"@DESTROY ".concat(n," reducer")})}))}}),[]),(0,t.jsx)(t.Fragment,{children:r})}},2748:(e,r,n)=>{n.d(r,{C:()=>i});var t=n(7624),a=n(5520),o=n(1504);const l={avatar:"GCM50viD"};function i(e){var r=e.className,n=e.src,i=e.size,c=e.alt,u=void 0===c?"avatar":c,s=(0,o.useMemo)((function(){return{width:i||100,height:i||100}}),[i]);return(0,t.jsx)("img",{src:n,alt:u,style:s,className:(0,a.g)(l.avatar,[r],{})})}},9976:(e,r,n)=>{n.d(r,{E:()=>d});var t=n(7624),a=n(5520),o=n(1504);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var i=["className","value","onChange","type","placeholder","autofocus","readonly"];function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){var t,a,o,i;t=e,a=r,o=n[r],i=function(e,r){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=l(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==l(i)?i:String(i))in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=o.call(n)).done)&&(i.push(t.value),i.length!==r);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return f(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var d=(0,o.memo)((function(e){var r=e.className,n=e.value,l=e.onChange,c=e.type,f=void 0===c?"text":c,d=e.placeholder,y=e.autofocus,p=e.readonly,v=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,i),m=(0,o.useRef)(null),C=s((0,o.useState)(!1),2),g=C[0],h=C[1],b=s((0,o.useState)(0),2),R=b[0],N=b[1],E=g&&!p;return(0,o.useEffect)((function(){var e;y&&(h(!0),null===(e=m.current)||void 0===e||e.focus())}),[y]),(0,t.jsxs)("div",{className:(0,a.g)("yiPASP1v",[r],{}),children:[d&&(0,t.jsx)("div",{className:"emAQQ85i",children:"".concat(d,">")}),(0,t.jsxs)("div",{className:"y1GiFC_L",children:[(0,t.jsx)("input",u({ref:m,type:f,value:n,onChange:function(e){null==l||l(e.target.value),N(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){h(!0)},onBlur:function(){h(!1)},onSelect:function(e){var r;N((null==e||null===(r=e.currentTarget)||void 0===r?void 0:r.selectionStart)||0)},readOnly:p},v)),E&&(0,t.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*R,"px")}})]})]})}))},6368:(e,r,n)=>{n.d(r,{M:()=>l});var t=n(7624),a=n(1504),o=n(5520);var l=function(e){var r=e.className,n=e.label,l=e.options,i=e.onChange,c=e.value,u=e.readonly,s=(0,a.useCallback)((function(e){i&&i(e.target.value)}),[i]),f=(0,a.useMemo)((function(){return null==l?void 0:l.map((function(e){return(0,t.jsx)("option",{className:"JkXz98qY",value:e.value,children:e.content},e.value)}))}),[l]);return(0,t.jsxs)("div",{className:(0,o.g)("rENkTUZK",[r],{}),children:[n&&(0,t.jsx)("span",{className:"G1uuf7Bp",children:"".concat(n,">")}),(0,t.jsx)("select",{disabled:u,className:"VOKOuKGo",value:c,onChange:s,children:f})]})}},3152:(e,r,n)=>{n.d(r,{K:()=>f});var t=n(7624),a=n(2780),o=n(1504),l=n(624),i=n(3284),c=n(5520),u=n(1104),s=n(7256);var f=function(e){var r=e.className,n=e.children,f=e.onScrollEnd,d=(0,o.useRef)(),y=(0,o.useRef)(),p=(0,u.A)(),v=(0,i.IT)().pathname,m=(0,l.w1)((function(e){return(0,a.ot)(e,v)}));!function({callback:e,wrapperRef:r,triggerRef:n}){const t=(0,o.useRef)(null);(0,o.useEffect)((()=>{const a=r.current,o=n.current;if(e){const r={root:a,rootMargin:"0px",threshold:1};t.current=new IntersectionObserver((([r])=>{r.isIntersecting&&e()}),r),t.current.observe(o)}return()=>{t.current&&o&&t.current.unobserve(o)}}),[e,n,r])}({triggerRef:y,wrapperRef:d,callback:f}),(0,s.w)((function(){d.current.scrollTop=m}));var C=function(e,r){const n=(0,o.useRef)(!1);return(0,o.useCallback)(((...r)=>{n.current||(e(...r),n.current=!0,setTimeout((()=>{n.current=!1}),500))}),[e,500])}((function(e){p(a.Yr.setScrollPosition({position:e.currentTarget.scrollTop,path:v}))}));return(0,t.jsxs)("section",{ref:d,className:(0,c.g)("a83jDcrK",[r],{}),onScroll:C,children:[n,f?(0,t.jsx)("div",{className:"VaPQ__zP",ref:y}):null]})}},7256:(e,r,n)=>{n.d(r,{w:()=>a});var t=n(1504);function a(e){(0,t.useEffect)((()=>{e()}),[])}}}]);