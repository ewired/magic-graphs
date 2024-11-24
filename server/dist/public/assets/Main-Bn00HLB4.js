import{u as T,_ as O}from"./Graph.vue_vue_type_script_setup_true_lang-Cz8wlVQ7.js";import{_ as C}from"./Button.vue_vue_type_script_setup_true_lang-Bx30aiXu.js";import{_ as w}from"./SimulationPlaybackControls.vue_vue_type_script_setup_true_lang-HjyGXZI3.js";import{e as k,o as i,c as p,f as G,F as y,a as g,t as E,S as R,B as o,T as c,g as L,U as B,b as _,G as t,H as S,w as b,d as N,E as x}from"./index-Be03pTQ2.js";import{b as A}from"./CollabControls.vue_vue_type_script_setup_true_lang-B8gJW1U0.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-BD9aYwBu.js";const D=["onClick"],I={class:"text-2xl w-6 text-center font-bold"},$=k({__name:"CostDisplay",props:{graph:{}},setup(v){const s=v,a=e=>s.graph.getTheme("nodeText",e),h=e=>{if(e==="Inf")return o.RED_800;const n=Number(e);return n===1/0||isNaN(n)?o.GRAY_500:n===0?o.GREEN_700:n<3?o.GREEN_500:n<5?o.YELLOW_500:n<7?o.ORANGE_500:n<9?o.RED_400:o.RED_600},d=e=>s.graph.getTheme("nodeBorderColor",e)===c.EXPLORED,f=e=>s.graph.getTheme("nodeBorderColor",e)===c.EXPLORING,l=e=>s.graph.getTheme("nodeBorderColor",e)===c.SOURCE,m=e=>d(e)?c.EXPLORED:f(e)?c.EXPLORING:l(e)?c.SOURCE:s.graph.isFocused(e.id)?s.graph.getTheme("nodeBorderColor",e):o.GRAY_600,r=e=>d(e)?"Explored":f(e)?"Exploring":l(e)?"Source":s.graph.isFocused(e.id)?"Highlighted":"Unexplored";return(e,n)=>(i(!0),p(y,null,G(e.graph.nodes.value,u=>(i(),p("div",{onClick:H=>e.graph.setFocus([u.id]),class:"text-white flex items-center gap-3 p-2 hover:bg-gray-900 cursor-pointer rounded-lg"},[g("span",I,E(u.label),1),n[0]||(n[0]=g("span",{class:"font-bold"},"→",-1)),g("div",{class:"text-lg rounded-lg h-8 w-16 grid place-items-center",style:R({backgroundColor:h(a(u))})},E(a(u)),5),g("div",{class:"text-lg rounded-lg h-8 w-32 grid place-items-center font-bold",style:R({backgroundColor:m(u)})},E(r(u)),5)],8,D))),256))}}),P={class:"w-full h-full relative"},F={class:"absolute top-0 p-3 flex gap-3"},U={key:0,class:"absolute p-3 my-3 top-0 right-0 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl max-h-[calc(100%-1.5rem)] overflow-auto"},V={key:1,class:"absolute bottom-8 w-full flex justify-center items-center p-3"},X={key:2,class:"absolute right-0 p-3 h-14 flex gap-3 bottom-0"},q=k({__name:"Main",setup(v){const s=L(),a=T(s,{settings:{persistentStorageKey:"dijkstras",userAddedEdgeRuleNoSelfLoops:!0,userAddedEdgeRuleOneEdgePerPath:!0,edgeInputToLabel:m=>{const r=parseInt(m);if(!(isNaN(r)||r<0))return r.toString()}}}),{start:h,stop:d,running:f,simControls:l}=B(a);return(m,r)=>(i(),p(y,null,[g("div",P,[_(O,{onGraphRef:r[0]||(r[0]=e=>s.value=e),graph:t(a)},null,8,["graph"])]),g("div",F,[t(f)?(i(),S(C,{key:1,onClick:t(d),color:t(o).RED_600,"text-color":t(o).WHITE},{default:b(()=>r[2]||(r[2]=[N(" Stop Simulation ")])),_:1},8,["onClick","color","text-color"])):(i(),S(C,{key:0,onClick:t(h)},{default:b(()=>r[1]||(r[1]=[N(" Start Simulation ")])),_:1},8,["onClick"]))]),t(l).isActive.value&&t(a).nodes.value.length>0?(i(),p("div",U,[_($,{graph:t(a)},null,8,["graph"])])):x("",!0),t(l).isActive.value?(i(),p("div",V,[_(w,{controls:t(l)},null,8,["controls"])])):x("",!0),t(l).isActive.value?x("",!0):(i(),p("div",X,[_(A,{graph:t(a)},null,8,["graph"])]))],64))}});export{q as default};
