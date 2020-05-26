(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return d})),r.d(t,"PlatformSupport",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),a=(r(0),r(156)),c={id:"executor",title:"Dedicator Thread Executor",sidebar_label:"Dedicated Executor"},i={id:"advanced/executor",title:"Dedicator Thread Executor",description:"**Supported platforms:**",source:"@site/docs/advanced/DedicatedExecutor.md",permalink:"/async-storage/docs/advanced/executor",editUrl:"https://github.com/react-native-community/async-storage/edit/master/website/docs/advanced/DedicatedExecutor.md",sidebar_label:"Dedicated Executor",sidebar:"docs",previous:{title:"Brownfield integration",permalink:"/async-storage/docs/advanced/brownfield"},next:{title:"Increasing Storage size",permalink:"/async-storage/docs/advanced/db_size"}},d=[{value:"Motivation",id:"motivation",children:[]},{value:"How to use",id:"how-to-use",children:[]}],p=function(e){var t=e.platformIcon,r=e.title;return Object(a.b)("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},Object(a.b)("img",{style:{width:34,height:34},src:t}),Object(a.b)("p",{style:{margin:"0 0 0 10px",padding:0}},r))},u={rightToc:d,PlatformSupport:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Supported platforms:")),Object(a.b)(p,{title:"Android",platformIcon:"/img/logo_android.svg",mdxType:"PlatformSupport"}),Object(a.b)("hr",null),Object(a.b)("p",null,"This feature would be mostly used in brownfield apps and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/async-storage/issues/159"}),"in edge cases with some android devices.")),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"Dedicated thread pool executor makes ",Object(a.b)("inlineCode",{parentName:"p"},"AsyncStorage")," use separate thread pool for its tasks execution."),Object(a.b)("p",null,"Use this feature if ",Object(a.b)("inlineCode",{parentName:"p"},"THREAD_POOL_EXECUTOR")," from ",Object(a.b)("inlineCode",{parentName:"p"},"AsyncTasks"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Is used in your app, so that background tasks are queued most of the time"),Object(a.b)("li",{parentName:"ul"},"Acts weird on your device (for example, waits for some time before execution)")),Object(a.b)("h2",{id:"how-to-use"},"How to use"),Object(a.b)("p",null,"Add a ",Object(a.b)("inlineCode",{parentName:"p"},"AsyncStorage_dedicatedExecutor")," property to your ",Object(a.b)("inlineCode",{parentName:"p"},"android/gradle.properties"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"AsyncStorage_dedicatedExecutor=true\n")))}l.isMDXComponent=!0},156:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,m=l["".concat(c,".").concat(b)]||l[b]||s[b]||a;return r?o.a.createElement(m,i({ref:t},p,{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);