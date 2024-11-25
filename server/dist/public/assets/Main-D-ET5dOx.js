import{u as O,_ as T}from"./Graph.vue_vue_type_script_setup_true_lang-DCgPQaXY.js";import{_ as C}from"./Button.vue_vue_type_script_setup_true_lang-US7SwQ7n.js";import{_ as w}from"./SimulationPlaybackControls.vue_vue_type_script_setup_true_lang-CzU3zbu0.js";import{e as k,o as l,c as d,f as L,F as y,a as p,t as h,U as v,B as o,V as c,g as B,W as G,b as E,M as r,N as R,w as S,d as N,E as b}from"./index-BaTtJ-hS.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-DAn0qBJ_.js";const D=["onClick"],I={class:"text-2xl w-6 text-center font-bold"},A=k({__name:"CostDisplay",props:{graph:{}},setup(x){const s=x,a=e=>s.graph.getTheme("nodeText",e),_=e=>{if(e==="Inf")return o.RED_800;const n=Number(e);return n===1/0||isNaN(n)?o.GRAY_500:n===0?o.GREEN_700:n<3?o.GREEN_500:n<5?o.YELLOW_500:n<7?o.ORANGE_500:n<9?o.RED_400:o.RED_600},g=e=>s.graph.getTheme("nodeBorderColor",e)===c.EXPLORED,f=e=>s.graph.getTheme("nodeBorderColor",e)===c.EXPLORING,i=e=>s.graph.getTheme("nodeBorderColor",e)===c.SOURCE,m=e=>g(e)?c.EXPLORED:f(e)?c.EXPLORING:i(e)?c.SOURCE:s.graph.isFocused(e.id)?s.graph.getTheme("nodeBorderColor",e):o.GRAY_600,t=e=>g(e)?"Explored":f(e)?"Exploring":i(e)?"Source":s.graph.isFocused(e.id)?"Highlighted":"Unexplored";return(e,n)=>(l(!0),d(y,null,L(e.graph.nodes.value,u=>(l(),d("div",{onClick:U=>e.graph.setFocus([u.id]),class:"text-white flex items-center gap-3 p-2 hover:bg-gray-900 cursor-pointer rounded-lg"},[p("span",I,h(u.label),1),n[0]||(n[0]=p("span",{class:"font-bold"},"→",-1)),p("div",{class:"text-lg rounded-lg h-8 w-16 grid place-items-center",style:v({backgroundColor:_(a(u))})},h(a(u)),5),p("div",{class:"text-lg rounded-lg h-8 w-32 grid place-items-center font-bold",style:v({backgroundColor:m(u)})},h(t(u)),5)],8,D))),256))}}),$={class:"w-full h-full relative"},P={class:"absolute top-0 p-3 flex gap-3"},F={key:0,class:"absolute p-3 my-3 top-0 right-0 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl max-h-[calc(100%-1.5rem)] overflow-auto"},V={key:1,class:"absolute bottom-8 w-full flex justify-center items-center p-3"},H=k({__name:"Main",setup(x){const s=B(),a=O(s,{settings:{persistentStorageKey:"dijkstras",userAddedEdgeRuleNoSelfLoops:!0,userAddedEdgeRuleOneEdgePerPath:!0,edgeInputToLabel:m=>{const t=parseInt(m);if(!(isNaN(t)||t<0))return t.toString()}}}),{start:_,stop:g,running:f,simControls:i}=G(a);return(m,t)=>(l(),d(y,null,[p("div",$,[E(T,{onGraphRef:t[0]||(t[0]=e=>s.value=e),graph:r(a)},null,8,["graph"])]),p("div",P,[r(f)?(l(),R(C,{key:1,onClick:r(g),color:r(o).RED_600,"text-color":r(o).WHITE},{default:S(()=>t[2]||(t[2]=[N(" Stop Simulation ")])),_:1},8,["onClick","color","text-color"])):(l(),R(C,{key:0,onClick:r(_)},{default:S(()=>t[1]||(t[1]=[N(" Start Simulation ")])),_:1},8,["onClick"]))]),r(i).isActive.value&&r(a).nodes.value.length>0?(l(),d("div",F,[E(A,{graph:r(a)},null,8,["graph"])])):b("",!0),r(i).isActive.value?(l(),d("div",V,[E(w,{controls:r(i)},null,8,["controls"])])):b("",!0)],64))}});export{H as default};
