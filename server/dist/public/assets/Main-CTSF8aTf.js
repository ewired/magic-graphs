import{d as i,o as r,c as n,a as t,t as _,r as p,F as d,b as f,e as l,w as g,f as m,_ as v,g as h,h as b,i as x,j as y,k as w,l as k,m as j,n as B}from"./index-C6A5_RZq.js";const C={class:"group relative flex items-center justify-center max-w-44"},M={class:"relative w-60 h-60 group-hover:scale-105 transition-all duration-500 ease-out flex items-center justify-center"},$=["src","alt"],z={class:"absolute top-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-500 bg-gray-900 bg-opacity-90 rounded-2xl p-4"},A={class:"text-white font-bold"},E={class:"text-center font-bold text-2xl mt-4 transition duration-500 h-8"},F=i({__name:"ProductItem",props:{product:{}},setup(u){return(o,s)=>(r(),n("div",C,[t("div",null,[t("div",M,[t("img",{src:o.product.menu.thumbnail,alt:o.product.menu.name,class:"w-full h-full object-cover rounded-2xl"},null,8,$),t("div",z,[t("p",A,_(o.product.menu.description),1)])]),t("h2",E,_(o.product.menu.name),1)]),s[0]||(s[0]=t("div",{class:"absolute -z-10 w-[150%] h-[150%] pointer-events-none"},[t("div",{class:"absolute inset-0 group-hover:bg-purple-500 blur-2xl opacity-30 rounded-full transition duration-500"}),t("div",{class:"relative text-yellow-500 text-6xl font-bold group-hover:w-full group-hover:h-full transition duration-500"})],-1))]))}}),I={class:"flex items-center justify-center gap-[100px] w-3/4 flex-wrap overflow-auto p-12"},N=i({__name:"ProductCatalog",props:{products:{}},setup(u){return(o,s)=>{const a=p("router-link");return r(),n("div",I,[(r(!0),n(d,null,f(o.products,e=>(r(),n("div",null,[l(a,{to:e.route.path},{default:g(()=>[l(F,{product:e},null,8,["product"])]),_:2},1032,["to"])]))),256))])}}}),O={class:"w-full h-full relative flex items-center justify-center flex-col bg-gradient-to-tl to-purple-100 from-gray-50 dark:to-gray-900 dark:via-gray-900 dark:from-purple-900 text-gray-800 dark:text-gray-50"},S=i({__name:"Main",setup(u){const s=Object.values(Object.assign({"/src/menu/info.ts":v,"/src/playground/graph/info.ts":h,"/src/playground/shape/info.ts":b,"/src/products/dijkstras/info.ts":x,"/src/products/markov-chains/info.ts":y,"/src/products/min-spanning-tree/info.ts":w,"/src/products/network-flow/info.ts":k,"/src/products/search-visualizer/info.ts":j,"/src/products/set-visualizer/info.ts":B})).map(e=>e.default),a=m(s.filter(e=>e==null?void 0:e.menu));return(e,c)=>(r(),n("div",O,[c[0]||(c[0]=t("div",{class:"mb-10 text-center"},[t("h1",{class:"font-black text-7xl bg-gradient-to-tr dark:from-purple-700 dark:to-orange-600 from-purple-500 to-orange-500 text-transparent bg-clip-text p-4"}," Magic Algorithms "),t("h3",{class:"font-bold text-2xl"}," Select An Experience To Begin ")],-1)),l(N,{products:a.value},null,8,["products"])]))}});export{S as default};
