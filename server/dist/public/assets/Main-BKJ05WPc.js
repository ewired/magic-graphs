import{u as N,_ as E}from"./Graph.vue_vue_type_script_setup_true_lang-DCgPQaXY.js";import{_ as b}from"./SimulationPlaybackControls.vue_vue_type_script_setup_true_lang-CzU3zbu0.js";import{e as _,H as h,o as r,c as p,N as i,w as u,d as c,U as k,M as t,E as g,B as a,a as m,t as F,ac as T,A as x,g as A,ad as $,ae as P,af as R,ag as L,ah as B,b as f}from"./index-BaTtJ-hS.js";import{_ as d}from"./Button.vue_vue_type_script_setup_true_lang-US7SwQ7n.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-DAn0qBJ_.js";const G={class:"flex gap-3"},H={key:2,class:"flex gap-3"},I=_({__name:"SourceSinkControls",props:{simControls:{},sourceSink:{}},setup(n){const l=n,e=h(()=>l.simControls.isActive.value);return(o,s)=>(r(),p("div",G,[e.value?(r(),i(d,{key:1,style:k({backgroundColor:t(a).RED_600,color:t(a).WHITE}),onClick:o.simControls.stop},{default:u(()=>s[1]||(s[1]=[c(" Stop Simulation ")])),_:1},8,["style","onClick"])):(r(),i(d,{key:0,onClick:o.simControls.start,style:k({backgroundColor:t(a).BLUE_500,color:t(a).WHITE})},{default:u(()=>s[0]||(s[0]=[c(" Run Flow Simulation ")])),_:1},8,["onClick","style"])),e.value?g("",!0):(r(),p("div",H,[o.sourceSink.cancelSetSourceNode.value?(r(),i(d,{key:1,onClick:o.sourceSink.cancelSetSourceNode.value,style:k({backgroundColor:t(a).RED_500,color:t(a).WHITE})},{default:u(()=>s[3]||(s[3]=[c(" Cancel ")])),_:1},8,["onClick","style"])):(r(),i(d,{key:0,onClick:o.sourceSink.setSourceNode},{default:u(()=>s[2]||(s[2]=[c(" Switch Source ")])),_:1},8,["onClick"])),o.sourceSink.cancelSetSinkNode.value?(r(),i(d,{key:3,onClick:o.sourceSink.cancelSetSinkNode.value,style:k({backgroundColor:t(a).RED_500,color:t(a).WHITE})},{default:u(()=>s[5]||(s[5]=[c(" Cancel ")])),_:1},8,["onClick","style"])):(r(),i(d,{key:2,onClick:o.sourceSink.setSinkNode},{default:u(()=>s[4]||(s[4]=[c(" Switch Sink ")])),_:1},8,["onClick"]))]))]))}}),V={persistent:!0,persistentStorageKey:"network-flow",userAddedEdgeLabel:"5",userAddedEdgeRuleNoSelfLoops:!0,userAddedEdgeRuleOneEdgePerPath:!0,edgeInputToLabel:n=>{const l=Number(n);return!isNaN(l)&&l>=0&&l<100?n:void 0}},W={class:"flex gap-3"},D={class:"font-bold text-xl"},z=_({__name:"FlowProperties",props:{flowProperties:{}},setup(n){return(l,e)=>(r(),p("div",W,[m("span",D," Max Flow: "+F(l.flowProperties.maxFlow??"N/A"),1)]))}}),M=(n,{source:l,sink:e})=>{const{maxFlow:o}=T(n,{source:l,sink:e});return{maxFlow:x(o)}},O={class:"w-full h-full relative"},U={class:"absolute w-full h-full"},j={class:"absolute top-0 p-3"},K={class:"absolute top-0 right-0 p-3 text-white flex gap-3"},q={key:0,class:"absolute bottom-8 w-full flex justify-center items-center p-3"},oe=_({__name:"Main",setup(n){const l=A(),e=N(l,{settings:V});e.settings.value.newNodeLabelGetter=$(e);const o=P(e),s=M(e,o),S=R(e,o),{activate:v}=L(e),{stylize:w}=B(e,o);return v(),w(),(J,C)=>(r(),p("div",O,[m("div",U,[f(E,{onGraphRef:C[0]||(C[0]=y=>l.value=y),graph:t(e)},null,8,["graph"])]),m("div",j,[f(I,{sourceSink:t(o),"sim-controls":t(S)},null,8,["sourceSink","sim-controls"])]),m("div",K,[f(z,{"flow-properties":t(s)},null,8,["flow-properties"])]),t(S).isActive.value?(r(),p("div",q,[f(b,{controls:t(S)},null,8,["controls"])])):g("",!0)]))}});export{oe as default};
