import{h as ot,i as st,j as nt,k as rt,l as at,m as lt,n as it,p as ct,q as ut,s as dt,am as N,a4 as _t,X as b,an as U,ao as pt,a7 as gt,e as h,r as B,o as r,N as v,w as _,b as p,a0 as $,B as M,ap as mt,H,c as m,a as l,v as x,Y as L,M as g,S as vt,g as I,y as ft,d as C,t as P,E as Y,_ as O,F as E,f as j,aq as ht,ar as bt,a2 as X,a3 as K,K as $t,ac as yt}from"./index-mwhRdajb.js";import{_ as xt}from"./Graph.vue_vue_type_script_setup_true_lang-Citf1YcJ.js";import{_ as wt}from"./Button.vue_vue_type_script_setup_true_lang-D8hU-xje.js";import{_ as kt}from"./TutorialHint.vue_vue_type_script_setup_true_lang-BX5wfR3v.js";const St=Object.assign({"/src/menu/info.ts":ot,"/src/playground/graph/info.ts":st,"/src/playground/shape/info.ts":nt,"/src/products/dijkstras/info.ts":rt,"/src/products/graph-sandbox/info.ts":at,"/src/products/markov-chains/info.ts":lt,"/src/products/min-spanning-tree/info.ts":it,"/src/products/network-flow/info.ts":ct,"/src/products/search-visualizer/info.ts":ut,"/src/products/set-visualizer/info.ts":dt}),T=Object.values(St).flatMap(s=>s.default);T.map(s=>s.route);const Pe=T.reduce((s,t)=>(s[t.productId]=t,s),{}),J=T.reduce((s,t)=>(s[t.route.path]=t,s),{}),Ct=s=>T.map(e=>e.simulations).filter(Boolean).map(e=>e(s)).flat(),Pt=(s,t)=>{const o=N();if(!t){const a=J[o.path];if(!a)throw new Error(`product not found for ${o.path}`);t=a.simulations}return(t??Ct)(s)},Bt=()=>{const s=N(),t=_t(),o=a=>{const u=s.query.rid;return typeof u=="string"&&u.length>0?`${a}?rid=${u}`:a};return{navigate:a=>{var n,c;const u=(c=(n=a.route)==null?void 0:n.redirect)==null?void 0:c.toString(),i=u==null?void 0:u.startsWith("http");if(u&&i)return window.open(u,"_blank");t.push(o(a.route.path))},productLink:o}},Et=(s,t)=>{const o=N();if(!t){const n=J[o.path];if(!n)throw new Error(`no product found for route ${o.path}`);t=n}const{connectToRoom:e}=gt,a=o.query.rid,{productId:u,name:i}=t;document.title=`${i} - Magic Algorithms`,b.value=s,U(()=>{if(a){if(typeof a!="string")return console.error("room id must be a string");e({graph:s,roomId:a,productId:u})}}),pt(()=>{var n;(n=t.state)==null||n.reset()})},D=h({__name:"PlaybackButton",setup(s){return(t,o)=>{const e=B("v-icon");return r(),v(wt,{style:{"border-radius":"40px"}},{default:_(()=>[p(e,{size:"42",class:"py-6 px-10"},{default:_(()=>[$(t.$slots,"default")]),_:3})]),_:3})}}}),Mt={transitionTimeMs:250,transitionEasing:"ease-in-out",color:M.GRAY_200},Tt=h({__name:"ProgressBar",props:mt({range:{},progress:{},previewProgress:{},transitionTimeMs:{},transitionEasing:{},color:{},onProgressSet:{type:Function},onHover:{type:Function}},Mt),setup(s){const t=s,o=H(()=>{const[n,c]=t.range;return c-n}),e=n=>{const[c]=t.range;return Math.min(Math.max(n-c,0),o.value)/o.value*100},a=n=>{const c=n.currentTarget;if(!(c instanceof HTMLElement))throw new Error("Invalid target");const d=n.offsetX,y=c.offsetWidth,w=d/y,k=t.range[0]+w*o.value;return Math.round(k)},u=n=>{var d;const c=a(n);(d=t.onProgressSet)==null||d.call(t,c)},i=n=>{var d;const c=a(n);(d=t.onHover)==null||d.call(t,c)};return(n,c)=>(r(),m("div",{onMousemove:i,onClick:u,class:"relative overflow-hidden h-4 w-full z-1"},[l("div",{class:x("absolute top-0 left-0 h-full z-0"),style:L({backgroundColor:t.color,width:`${e(n.progress)}%`,transition:`width ${t.transitionTimeMs}ms ${t.transitionEasing}`})},null,4),l("div",{class:x("absolute top-0 left-0 h-full z-10"),style:L({backgroundColor:g(M).GRAY_400+"90",width:`${e(n.previewProgress??t.range[0])}%`,transition:`width ${t.transitionTimeMs}ms ${t.transitionEasing}`})},null,4)],32))}}),Rt={class:"flex flex-col gap-5 items-center justify-center"},At={class:"flex gap-4 fill-white dark:fill-black"},Dt=h({__name:"SimulationPlaybackControls",props:{controls:{}},setup(s){const t=s,{isOver:o,paused:e,step:a,trace:u,hasBegun:i}=vt(t.controls),{nextStep:n,prevStep:c,setStep:d,start:y,stop:w}=t.controls,k=()=>{c(),e.value=!0},f=()=>{n(),e.value=!0},R=A=>{d(A),e.value=!0},G=()=>{e.value=!e.value},Z=()=>{w(),y()},W=I(-1),tt=A=>{W.value=A},et=()=>{W.value=-1},V=()=>{e.value=!0};return b.value.subscribe("onStructureChange",V),ft(()=>{b.value.unsubscribe("onStructureChange",V)}),(A,S)=>(r(),m("div",Rt,[p(Tt,{onMouseleave:et,range:[0,g(u).length],progress:g(a),"on-progress-set":R,"preview-progress":W.value,"on-hover":tt,class:"w-full border-gray-200 border-2 rounded-lg"},null,8,["range","progress","preview-progress"]),l("div",At,[p(D,{onClick:k,disabled:!g(i)},{default:_(()=>S[0]||(S[0]=[C(" mdi-chevron-left ")])),_:1},8,["disabled"]),g(o)?(r(),v(D,{key:0,onClick:Z},{default:_(()=>S[1]||(S[1]=[C(" mdi-restart ")])),_:1})):(r(),v(D,{key:1,onClick:G},{default:_(()=>[C(P(g(e)?"mdi-play":"mdi-pause"),1)]),_:1})),p(D,{onClick:f,disabled:g(o)},{default:_(()=>S[2]||(S[2]=[C(" mdi-chevron-right ")])),_:1},8,["disabled"])])]))}}),zt={class:"text-white text-opacity-60 text-sm"},It=h({__name:"ToolbarHint",props:{tutorial:{}},setup(s){return(t,o)=>(r(),v(kt,{tutorial:t.tutorial},{default:_(({hint:e})=>[l("h5",zt,P(e),1)]),_:1},8,["tutorial"]))}}),jt={class:"flex flex-col gap-2"},Gt={class:"flex items-center gap-2 bg-gray-800 py-1 px-1 rounded-lg"},Wt=h({__name:"Toolbar",props:{hint:{}},setup(s){return(t,o)=>(r(),m("div",jt,[l("div",Gt,[$(t.$slots,"default")]),t.hint?(r(),v(It,{key:0,tutorial:t.hint},null,8,["tutorial"])):Y("",!0)]))}}),Ft=["disabled"],z=h({__name:"ToolbarButton",props:{active:{type:Boolean},disabled:{type:Boolean}},setup(s){return(t,o)=>{const e=B("v-icon");return r(),m("button",{disabled:t.disabled,class:x(["text-white","p-2","rounded-md",t.disabled?"text-opacity-50":"",t.disabled?"":"hover:bg-gray-900",t.disabled?"cursor-not-allowed":"cursor-pointer",t.active?"bg-gray-900":"bg-gray-800"])},[p(e,null,{default:_(()=>[$(t.$slots,"default")]),_:3})],10,Ft)}}}),Ht={},Nt={class:"w-[1px] h-6 bg-white bg-opacity-20 mx-1"};function Ot(s,t){return r(),m("div",Nt)}const q=O(Ht,[["render",Ot]]),Vt={};function Lt(s,t){return r(),m("div",{class:x("flex items-center relative "+s.$attrs.class)},[$(s.$slots,"default")],2)}const F=O(Vt,[["render",Lt]]),qt={class:x(["rounded-full","p-[3px]"])},Ut=h({__name:"AnnotationControls",setup(s){const{clearAnnotations:t}=b.value,o=n=>{b.value.annotationColor.value=n,b.value.annotationErasing.value=!1},e=n=>{b.value.annotationBrushWeight.value=n},a=n=>b.value.annotationErasing.value?!1:b.value.annotationColor.value===n,u=n=>b.value.annotationBrushWeight.value===n,i=()=>{b.value.annotationErasing.value=!b.value.annotationErasing.value};return(n,c)=>(r(),v(Wt,null,{default:_(()=>[p(F,null,{default:_(()=>[(r(!0),m(E,null,j(g(ht),d=>(r(),v(z,{onClick:y=>o(d),active:a(d),key:d,color:d},{default:_(()=>[l("div",qt,[l("div",{class:x(["w-6","h-6","rounded-full",`bg-[${d}]`])},null,2)])]),_:2},1032,["onClick","active","color"]))),128))]),_:1}),p(q),p(F,null,{default:_(()=>[(r(!0),m(E,null,j(g(bt),(d,y)=>(r(),v(z,{onClick:w=>e(d),active:u(d),key:d,color:g(M).TRANSPARENT},{default:_(()=>[l("div",{class:x(["bg-gray-400","rounded-md","w-[15px]",`h-[${y*5+1}px]`])},null,2)]),_:2},1032,["onClick","active","color"]))),128))]),_:1}),p(q),p(F,{class:"gap-1"},{default:_(()=>[p(z,{onClick:i,active:g(b).annotationErasing.value},{default:_(()=>c[0]||(c[0]=[C(" mdi-eraser ")])),_:1},8,["active"]),p(z,{onClick:g(t)},{default:_(()=>c[1]||(c[1]=[C(" mdi-delete-outline ")])),_:1},8,["onClick"])]),_:1})]),_:1}))}}),Yt={},Xt={class:"bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-xl font-bold rounded-lg"};function Kt(s,t){return r(),m("button",Xt,t[0]||(t[0]=[l("h1",{class:"bg-gradient-to-tr dark:from-purple-600 dark:to-orange-500 from-purple-500 to-orange-500 text-transparent bg-clip-text"}," Magic Algorithms ",-1)]))}const Jt=O(Yt,[["render",Kt]]),Qt=["src"],Zt={class:"flex flex-col gap-1"},te={class:"text-xl font-bold text-gray-200"},ee={class:"text-md text-gray-400"},oe=h({__name:"ProductDropdownItem",props:{product:{}},setup(s){const{navigate:t}=Bt();return(o,e)=>(r(),m("button",{onClick:e[0]||(e[0]=a=>g(t)(o.product)),class:"hover:bg-gray-900 p-2 rounded-md cursor-pointer rounded-lg text-left flex gap-4"},[l("img",{src:o.product.menu.thumbnail,class:"object-cover h-20 w-20 rounded-md"},null,8,Qt),l("div",Zt,[l("h1",te,P(o.product.menu.name),1),l("p",ee,P(o.product.menu.description),1)])]))}}),se={class:"bg-gray-800 flex flex-col text-white p-2 w-[400px] h-[700px] overflow-auto rounded-lg"},ne=h({__name:"ProductDropdownMenu",setup(s){const t=T.filter(o=>o==null?void 0:o.menu);return(o,e)=>(r(),m("div",se,[(r(!0),m(E,null,j(g(t),a=>(r(),v(oe,{key:a.productId,product:a},null,8,["product"]))),128))]))}}),re=h({__name:"ProductDropdown",setup(s){return(t,o)=>{const e=B("v-menu");return r(),v(e,{offset:[10,0]},{activator:_(({props:a})=>[p(Jt,X(K(a)),null,16)]),default:_(()=>[p(ne)]),_:1})}}}),Q=h({__name:"StartSimButton",setup(s){return(t,o)=>{const e=B("v-btn");return r(),v(e,{icon:"mdi-play",size:"large",color:g(M).GRAY_800},null,8,["color"])}}}),ae={class:"bg-gray-800 flex flex-col text-white p-2 w-[400px] rounded-lg"},le=["onClick"],ie=["src"],ce={class:"flex flex-col gap-1"},ue={class:"text-lg font-bold text-gray-200"},de={class:"text-sm text-gray-400"},_e=h({__name:"SelectSimulation",props:{simulations:{}},emits:["simulation-selected"],setup(s,{emit:t}){const o=t;return(e,a)=>{const u=B("v-menu");return r(),v(u,{offset:[10,0]},{activator:_(({props:i})=>[p(Q,X(K(i)),null,16)]),default:_(()=>[l("div",ae,[(r(!0),m(E,null,j(e.simulations,i=>(r(),m("button",{onClick:n=>o("simulation-selected",i),key:i.name,class:"hover:bg-gray-900 p-2 rounded-md cursor-pointer rounded-lg text-left flex gap-4"},[l("img",{src:i.thumbnail,class:"object-cover h-20 w-20 rounded-md"},null,8,ie),l("div",ce,[l("h1",ue,P(i.name),1),l("p",de,P(i.description),1)])],8,le))),128))])]),_:1})}}}),pe=h({__name:"StopSimButton",setup(s){return(t,o)=>{const e=B("v-btn");return r(),v(e,{color:g(M).RED_600,icon:"mdi-stop",size:"large"},null,8,["color"])}}}),ge={class:"absolute top-6 w-full flex flex-col justify-center items-center gap-2"},me={class:"absolute grid place-items-center left-4 top-0 h-full max-w-96"},ve={class:"relative max-h-3/4 w-full grid place-items-center overflow-auto"},fe={class:"absolute grid place-items-center right-4 top-0 h-full max-w-96"},he={class:"relative max-h-3/4 w-full grid place-items-center overflow-auto"},be={class:"absolute top-6 left-6"},$e={class:"absolute top-6 right-6"},ye={class:"absolute bottom-8 gap-4 w-full flex flex-col justify-center items-center"},xe={key:0},Be=h({__name:"GraphProduct",props:{graph:{}},emits:["graph-ref","simulation-started","simulation-stopped"],setup(s,{emit:t}){const o=s,e=t,a=Pt(o.graph),u=I(a[0]),i=I(!1),n=H(()=>u.value.runner),c=H(()=>n.value.simControls.isActive),d=async()=>{i.value=!0,e("simulation-started",u.value),await n.value.start()},y=async()=>{await n.value.stop(),i.value=!1,e("simulation-stopped")},w=f=>{u.value=f,d()},k=I();return Et(o.graph),U(()=>{e("graph-ref",k.value)}),(f,R)=>(r(),m(E,null,[p(xt,{onGraphRef:R[0]||(R[0]=G=>k.value=G),graph:f.graph},null,8,["graph"]),l("div",ge,[i.value?$(f.$slots,"top-center-sim",{key:0}):$(f.$slots,"top-center",{key:1})]),l("div",me,[l("div",ve,[i.value?$(f.$slots,"center-left-sim",{key:0}):$(f.$slots,"center-left",{key:1})])]),l("div",fe,[l("div",he,[i.value?$(f.$slots,"center-right-sim",{key:0}):$(f.$slots,"center-right",{key:1})])]),l("div",be,[p(re)]),l("div",$e,[i.value?$(f.$slots,"top-right-sim",{key:0},()=>[p(pe,{onClick:y})]):$(f.$slots,"top-right",{key:1},()=>[g(a).length>1?(r(),v(_e,{key:0,onSimulationSelected:w,simulations:g(a)},null,8,["simulations"])):(r(),v(Q,{key:1,onClick:d}))])]),l("div",ye,[c.value?(r(),m("div",xe,[p(Dt,{controls:n.value.simControls},null,8,["controls"])])):Y("",!0),$t(l("div",null,[p(Ut)],512),[[yt,f.graph.annotationActive.value]])])],64))}});export{F as T,Be as _,z as a,q as b,Wt as c,Pe as p,Bt as u};
