import{d as i,o as r,c as a,a as t,t as u,r as p,F as d,f,b as l,w as g,g as v,_ as m,h as b,i as h,j as x,k as y,l as k,m as w,n as j,p as C,q as M,s as $,u as z,v as B}from"./index-Wvoc3Gvc.js";const A={class:"group relative flex items-center justify-center max-w-44"},E={class:"relative w-60 h-60 group-hover:scale-105 transition-all duration-500 ease-out flex items-center justify-center"},F=["src","alt"],I={class:"absolute top-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-500 bg-gray-900 bg-opacity-90 rounded-2xl p-4"},N={class:"text-white font-bold"},O={class:"text-center font-bold text-2xl mt-4 transition duration-500 h-8"},P=i({__name:"ProductItem",props:{product:{}},setup(c){return(s,o)=>(r(),a("div",A,[t("div",null,[t("div",E,[t("img",{src:s.product.menu.thumbnail,alt:s.product.menu.name,class:"w-full h-full object-cover rounded-2xl"},null,8,F),t("div",I,[t("p",N,u(s.product.menu.description),1)])]),t("h2",O,u(s.product.menu.name),1)]),o[0]||(o[0]=t("div",{class:"absolute -z-10 w-[150%] h-[150%] pointer-events-none"},[t("div",{class:"absolute inset-0 group-hover:bg-purple-500 blur-2xl opacity-30 rounded-full transition duration-500"}),t("div",{class:"relative text-yellow-500 text-6xl font-bold group-hover:w-full group-hover:h-full transition duration-500"})],-1))]))}}),S={class:"flex items-center justify-center gap-[100px] w-3/4 flex-wrap overflow-auto p-12"},V=i({__name:"ProductCatalog",props:{products:{}},setup(c){return(s,o)=>{const n=p("router-link");return r(),a("div",S,[(r(!0),a(d,null,f(s.products,e=>(r(),a("div",null,[l(n,{to:e.route.path},{default:g(()=>[l(P,{product:e},null,8,["product"])]),_:2},1032,["to"])]))),256))])}}}),q={class:"w-full h-full relative flex items-center justify-center flex-col bg-gradient-to-tl to-purple-100 from-gray-50 dark:to-gray-900 dark:via-gray-900 dark:from-purple-900 text-gray-800 dark:text-gray-50"},L=i({__name:"Main",setup(c){const o=Object.values(Object.assign({"/src/menu/info.ts":m,"/src/playground/graph/info.ts":b,"/src/playground/shape/info.ts":h,"/src/products/basic-search/info.ts":x,"/src/products/binary-trees/info.ts":y,"/src/products/dijkstras/info.ts":k,"/src/products/graph-sandbox/info.ts":w,"/src/products/markov-chains-legacy/info.ts":j,"/src/products/markov-chains/info.ts":C,"/src/products/min-spanning-tree/info.ts":M,"/src/products/network-flow/info.ts":$,"/src/products/search-visualizer/info.ts":z,"/src/products/set-visualizer/info.ts":B})).map(e=>e.default),n=v(o.filter(e=>e==null?void 0:e.menu));return(e,_)=>(r(),a("div",q,[_[0]||(_[0]=t("div",{class:"mb-10 text-center"},[t("h1",{class:"font-black text-7xl bg-gradient-to-tr dark:from-purple-700 dark:to-orange-600 from-purple-500 to-orange-500 text-transparent bg-clip-text p-4"}," Magic Algorithms "),t("h3",{class:"font-bold text-2xl"}," Select An Experience ")],-1)),l(V,{products:n.value},null,8,["products"])]))}});export{L as default};
