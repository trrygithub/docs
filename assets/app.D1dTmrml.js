import{R as e}from"./chunks/theme.DZXW5_w7.js";import{ae as a,aZ as t,a_ as n,a$ as s,b0 as r,b1 as o,b2 as p,b3 as u,b4 as c,b5 as i,b6 as l,e as m,$ as d,o as h,V as b,b7 as f,b8 as g,b9 as A,z as v}from"./chunks/framework.CU_KtCqm.js";const j=function e(a){if(a.extends){const t=e(a.extends);return{...t,...a,async enhanceApp(e){t.enhanceApp&&await t.enhanceApp(e),a.enhanceApp&&await a.enhanceApp(e)}}}return a}(e),$=m({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=d();return h((()=>{b((()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value}))})),e.value.router.prefetchLinks&&f(),g(),A(),j.setup&&j.setup(),()=>v(j.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=function(){let e,t=a;return i((n=>{let s=l(n),r=null;return s&&(t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),r=import(s)),a&&(t=!1),r}),j.NotFound)}(),t=c($);t.provide(n,e);const m=s(e.route);return t.provide(r,m),t.component("Content",o),t.component("ClientOnly",p),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>m.frontmatter.value},$params:{get:()=>m.page.value.params}}),j.enhanceApp&&await j.enhanceApp({app:t,router:e,siteData:u}),{app:t,router:e,data:m}}a&&_().then((({app:e,router:a,data:n})=>{a.go().then((()=>{t(a.route,n.site),e.mount("#app")}))}));export{_ as createApp};