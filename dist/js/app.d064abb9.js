(function(){"use strict";var e={8469:function(e,t,n){var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"_app"}},[n("router-view")],1)},a=[],i={name:"App",components:{}},u=i,l=n(3736),c=(0,l.Z)(u,o,a,!1,null,"4cca7d85",null),s=c.exports,d=n(2809),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("leyout-head"),n("sidebar"),n("page-view",[n("router-view")],1)],1)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"leyout-head"},[n("div",{staticClass:"left",on:{click:function(t){return e.$router.push("/")}}},[e._v("A small FE ~~")]),n("div",{staticClass:"right"},[n("ul",{staticClass:"nav-list"},e._l(e.list,(function(t,r){return n("router-link",{key:r,staticClass:"nav-item",class:e.routeName===t.to?"on":"",attrs:{tag:"li",to:{name:t.to}}},[e._v(e._s(t.name))])})),1)])])},h=[],v={name:"leyoutHead",data(){return{list:[{id:1,name:"笔记",to:"note"},{id:2,name:"记录",to:"record"},{id:3,name:"学习",to:"learn"},{id:4,name:"关于",to:"about"}]}},computed:{routeName({$route:e}){let{matched:t}=e;return t&&t.length?t[0].name:""}}},b=v,g=(0,l.Z)(b,m,h,!1,null,"405390fd",null),y=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("ul",{staticClass:"list custom-scrollbar"},[n("li",{staticClass:"item"},e._l(20,(function(t,r){return n("router-link",{key:r,staticClass:"wrap overflow-1-row",attrs:{to:"/"}},[e._v("标题 - "+e._s(t))])})),1)])])},w=[],C={name:"leyoutHead",data(){return{list:[{id:1,name:"笔记",to:"note"},{id:2,name:"记录",to:"record"},{id:3,name:"学习",to:"learn"},{id:4,name:"关于",to:"about"}]}},computed:{routeName({$route:e}){let{name:t}=e;return t}}},k=C,E=(0,l.Z)(k,_,w,!1,null,"16b602aa",null),O=E.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-view"},[e._t("default")],2)},j=[],x={},A=x,N=(0,l.Z)(A,$,j,!1,null,"529b3725",null),T=N.exports,P={name:"baseLayout",components:{leyoutHead:y,sidebar:O,pageView:T},data(){return{}}},S=P,Z=(0,l.Z)(S,f,p,!1,null,"5d38abc9",null),L=Z.exports,F=[{path:"/note",name:"note",redirect:{name:"note-detail"},component:L,children:[{path:"detail",name:"note-detail",component:()=>n.e(327).then(n.bind(n,5327))}]}],B=[{path:"/record",name:"record",redirect:{name:"record-list"},component:L,children:[{path:"list",name:"record-list",component:()=>n.e(671).then(n.bind(n,1671))}]}],H=[{path:"/learn",name:"learn",redirect:{name:"learn-list"},component:L,children:[{path:"list",name:"learn-list",component:()=>n.e(928).then(n.bind(n,5928))}]}],M=[{path:"/about",name:"about",component:L,children:[{path:"list",name:"about-list"}]}];r["default"].use(d.Z);const q=d.Z.prototype.push;d.Z.prototype.push=function(e){return q.call(this,e).catch((e=>e))};const D=[{path:"/",name:"home",component:()=>Promise.all([n.e(387),n.e(417)]).then(n.bind(n,7417))},...F,...B,...H,...M,{path:"*",name:"404",component:()=>Promise.all([n.e(387),n.e(757)]).then(n.bind(n,4757))}];var I=new d.Z({mode:"hash",base:"/",scrollBehavior:()=>({y:0}),routes:D}),U=n(7349),z=n.n(U),K=n(2747),R=n.n(K),V=n(1192),G=n.n(V),J=n(5071),Q=n.n(J),W=n(8307),X=n.n(W),Y=n(957),ee=n.n(Y),te=n(8114),ne=n.n(te);r["default"].prototype.$ELEMENT={size:"small"},r["default"].use(G()).use(Q()).use(X()).use(ee()).use(ne()),r["default"].prototype.$loading=X().service,r["default"].prototype.$msgbox=R(),r["default"].prototype.$alert=R().alert,r["default"].prototype.$confirm=R().confirm,r["default"].prototype.$prompt=R().prompt,r["default"].prototype.$message=z(),r["default"].config.productionTip=!1,I.beforeEach(((e,t,n)=>{console.log("to",e),n()})),new r["default"]({router:I,render:e=>e(s)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{327:"ec2c14a8",387:"172adbac",417:"e252ab4e",671:"bd56e3a9",757:"2d9cb63a",928:"a83a0b84"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{417:"8efc8d3d",671:"4f034e44",757:"9e10bcfb",928:"4f034e44"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="log:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="https://coolooks.github.io/coo/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={417:1,671:1,757:1,928:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){n.b=document.baseURI||self.location.href;var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunklog"]=self["webpackChunklog"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8469)}));r=n.O(r)})();