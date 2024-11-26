import{u as I,_ as L}from"./Graph.vue_vue_type_script_setup_true_lang-ByjxfhA-.js";import{e as w,g as v,H as D,z as F,o as r,c as d,a as k,X as N,M as o,b as _,F as P,B as p,ad as W,ae as O,N as S,w as C,d as b,f as V,t as U,af as $,ag as K,E as X}from"./index-DYB8OflK.js";import{_ as j,u as Y}from"./productBoot-D8_gDlL_.js";import{_ as T}from"./Button.vue_vue_type_script_setup_true_lang-QM2HECh5.js";import{_ as q}from"./ProductDropdown.vue_vue_type_script_setup_true_lang-TMS_c62X.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-DRGxupBk.js";const h={backgroundColor:"white",progressColor:"green",easeTime:250,progressEasing:"ease-in-out",borderRadius:0},J=w({__name:"Progressbar",props:{theme:{},startProgress:{},currentProgress:{},endProgress:{},setProgress:{type:Function}},setup(g){var f,x,E,R,M;const s=g,e=((f=s.theme)==null?void 0:f.backgroundColor)||h.backgroundColor,a=((x=s.theme)==null?void 0:x.progressColor)||h.progressColor,n=((E=s.theme)==null?void 0:E.easeTime)||h.easeTime,l=((R=s.theme)==null?void 0:R.progressEasing)||h.progressEasing,m=((M=s.theme)==null?void 0:M.borderRadius)||h.borderRadius,i=v(0),t=D(()=>{const u=s.endProgress-s.startProgress;return Math.min(Math.max(s.currentProgress-s.startProgress,0),u)/u*100}),c=u=>{const y=u.currentTarget,B=u.offsetX,G=y.offsetWidth,H=B/G,A=s.endProgress-s.startProgress,z=s.startProgress+H*A;s.setProgress(Math.round(z))};return F(()=>t.value,u=>{i.value=u},{immediate:!0}),(u,y)=>(r(),d("div",{onClick:c,class:"relative overflow-hidden h-[25px] w-full",style:N({backgroundColor:o(e),borderRadius:`${o(m)}px`})},[k("div",{class:"absolute top-0 left-0 h-[25px] w-full",style:N({width:`${i.value}%`,backgroundColor:o(a),transition:`width ${o(n)}ms ${o(l)}`})},null,4)],4))}}),Q=w({__name:"SimulationControls",props:{controls:{}},setup(g){return(s,e)=>(r(),d(P,null,[_(J,{class:"w-[300px] border-gray-200 border-2 mb-8",theme:{progressColor:o(p).GRAY_200,backgroundColor:o(p).SLATE_500,borderRadius:20},"start-progress":0,"current-progress":s.controls.step.value,"end-progress":s.controls.trace.value.length,"set-progress":s.controls.setStep},null,8,["theme","current-progress","end-progress","set-progress"]),_(j,{controls:s.controls},null,8,["controls"])],64))}}),Z={persistentStorageKey:"min-spanning-tree",isGraphDirected:!1,edgeInputToLabel:g=>{const s=Number(g),e=s<0,a=isNaN(s);if(!(e||a))return s.toString()}},ss={key:2,class:"gap-3 flex"},os="s",es=w({__name:"TopRightToolbar",props:{graph:{},simControls:{},startSimulation:{type:Function}},setup(g){const s=g,e=W(s.graph),{colorize:a,decolorize:n}=O(s.graph,e),l=v(!1),m=()=>{l.value=!0,a()},i=()=>{l.value=!1,n()};return s.graph.subscribe("onKeyDown",t=>{t.key.toLowerCase()===os&&(l.value?i():m())}),(t,c)=>(r(),d(P,null,[l.value?(r(),S(T,{key:1,onClick:i,color:o(p).RED_600,"text-color":o(p).WHITE,style:{"min-width":"135px"}},{default:C(()=>c[1]||(c[1]=[b(" Hide MST (S) ")])),_:1},8,["color","text-color"])):(r(),S(T,{key:0,onClick:m,color:o(p).BLUE_500,"text-color":o(p).WHITE,style:{"min-width":"135px"}},{default:C(()=>c[0]||(c[0]=[b(" Show MST (S) ")])),_:1},8,["color","text-color"])),t.simControls.isActive.value?(r(),S(T,{key:3,onClick:t.simControls.stop,color:o(p).RED_600,"text-color":o(p).WHITE,class:"capitalize"},{default:C(()=>c[2]||(c[2]=[b(" Stop Simulation ")])),_:1},8,["onClick","color","text-color"])):(r(),d("div",ss,[(r(!0),d(P,null,V(o($),f=>(r(),S(T,{onClick:()=>t.startSimulation(f),class:"capitalize"},{default:C(()=>[b(" Run "+U(f)+"s ",1)]),_:2},1032,["onClick"]))),256))]))],64))}}),rs={class:"w-full h-full relative"},ts={class:"absolute top-6 left-6"},as={class:"absolute top-0 right-0 p-3 flex gap-3"},ns={key:0,class:"absolute bottom-8 w-full flex flex-col justify-center items-center p-3"},ms=w({__name:"Main",setup(g){const s=v(),e=I(s,{settings:Z}),a=v($[0]),n=K(e,a),l=m=>{a.value=m,n.start()};return Y(e),(m,i)=>(r(),d(P,null,[k("div",rs,[_(L,{onGraphRef:i[0]||(i[0]=t=>s.value=t),graph:o(e)},null,8,["graph"])]),k("div",ts,[_(q)]),k("div",as,[_(es,{graph:o(e),simControls:o(n),startSimulation:l},null,8,["graph","simControls"])]),o(n).isActive.value?(r(),d("div",ns,[_(Q,{controls:o(n)},null,8,["controls"])])):X("",!0)],64))}});export{ms as default};
