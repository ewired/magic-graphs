import{u as z,_ as I}from"./Graph.vue_vue_type_script_setup_true_lang-CBQr7P4M.js";import{e as f,g as C,H as D,z as F,o as t,c as _,a as S,U as N,M as r,b as d,F as w,B as u,a5 as W,a6 as O,N as b,w as T,d as k,f as U,t as V,a7 as $,a8 as K,E as j}from"./index-DByPgqtR.js";import{_ as X}from"./SimulationPlaybackControls.vue_vue_type_script_setup_true_lang-C_H1Ncc3.js";import{_ as v}from"./Button.vue_vue_type_script_setup_true_lang-yMn4xwQ3.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-CgL6xKKY.js";const h={backgroundColor:"white",progressColor:"green",easeTime:250,progressEasing:"ease-in-out",borderRadius:0},Y=f({__name:"Progressbar",props:{theme:{},startProgress:{},currentProgress:{},endProgress:{},setProgress:{type:Function}},setup(a){var x,y,E,R,M;const s=a,o=((x=s.theme)==null?void 0:x.backgroundColor)||h.backgroundColor,e=((y=s.theme)==null?void 0:y.progressColor)||h.progressColor,n=((E=s.theme)==null?void 0:E.easeTime)||h.easeTime,l=((R=s.theme)==null?void 0:R.progressEasing)||h.progressEasing,p=((M=s.theme)==null?void 0:M.borderRadius)||h.borderRadius,c=C(0),g=D(()=>{const i=s.endProgress-s.startProgress;return Math.min(Math.max(s.currentProgress-s.startProgress,0),i)/i*100}),m=i=>{const P=i.currentTarget,H=i.offsetX,A=P.offsetWidth,B=H/A,G=s.endProgress-s.startProgress,L=s.startProgress+B*G;s.setProgress(Math.round(L))};return F(()=>g.value,i=>{c.value=i},{immediate:!0}),(i,P)=>(t(),_("div",{onClick:m,class:"relative overflow-hidden h-[25px] w-full",style:N({backgroundColor:r(o),borderRadius:`${r(p)}px`})},[S("div",{class:"absolute top-0 left-0 h-[25px] w-full",style:N({width:`${c.value}%`,backgroundColor:r(e),transition:`width ${r(n)}ms ${r(l)}`})},null,4)],4))}}),q=f({__name:"SimulationControls",props:{controls:{}},setup(a){return(s,o)=>(t(),_(w,null,[d(Y,{class:"w-[300px] border-gray-200 border-2 mb-8",theme:{progressColor:r(u).GRAY_200,backgroundColor:r(u).SLATE_500,borderRadius:20},"start-progress":0,"current-progress":s.controls.step.value,"end-progress":s.controls.trace.value.length,"set-progress":s.controls.setStep},null,8,["theme","current-progress","end-progress","set-progress"]),d(X,{controls:s.controls},null,8,["controls"])],64))}}),J={persistentStorageKey:"min-spanning-tree",isGraphDirected:!1,edgeInputToLabel:a=>{const s=Number(a),o=s<0,e=isNaN(s);if(!(o||e))return s.toString()}},Q="s",Z=f({__name:"TopRightToolbar",props:{graph:{}},setup(a){const s=a,o=W(s.graph),{colorize:e,decolorize:n}=O(s.graph,o),l=C(!1),p=()=>{l.value=!0,e()},c=()=>{l.value=!1,n()};return s.graph.subscribe("onKeyDown",g=>{g.key.toLowerCase()===Q&&(l.value?c():p())}),(g,m)=>l.value?(t(),b(v,{key:1,onClick:c,color:r(u).RED_600,"text-color":r(u).WHITE,style:{"min-width":"135px"}},{default:T(()=>m[1]||(m[1]=[k(" Hide MST (S) ")])),_:1},8,["color","text-color"])):(t(),b(v,{key:0,onClick:p,color:r(u).BLUE_500,"text-color":r(u).WHITE,style:{"min-width":"135px"}},{default:T(()=>m[0]||(m[0]=[k(" Show MST (S) ")])),_:1},8,["color","text-color"]))}}),ss={key:0,class:"gap-3 flex"},rs=f({__name:"TopLeftToolbar",props:{graph:{},simControls:{},startSimulation:{type:Function}},setup(a){return(s,o)=>s.simControls.isActive.value?(t(),b(v,{key:1,onClick:s.simControls.stop,color:r(u).RED_600,"text-color":r(u).WHITE,class:"capitalize"},{default:T(()=>o[0]||(o[0]=[k(" Stop Simulation ")])),_:1},8,["onClick","color","text-color"])):(t(),_("div",ss,[(t(!0),_(w,null,U(r($),e=>(t(),b(v,{onClick:()=>s.startSimulation(e),class:"capitalize"},{default:T(()=>[k(" Run "+V(e)+"s ",1)]),_:2},1032,["onClick"]))),256))]))}}),os={class:"w-full h-full relative"},es={class:"absolute top-0 p-3 flex gap-3"},ts={class:"absolute top-0 right-0 p-3 flex gap-3"},as={key:0,class:"absolute bottom-8 w-full flex flex-col justify-center items-center p-3"},ps=f({__name:"Main",setup(a){const s=C(),o=z(s,{settings:J}),e=C($[0]),n=K(o,e),l=p=>{e.value=p,n.start()};return(p,c)=>(t(),_(w,null,[S("div",os,[d(I,{onGraphRef:c[0]||(c[0]=g=>s.value=g),graph:r(o)},null,8,["graph"])]),S("div",es,[d(rs,{graph:r(o),simControls:r(n),startSimulation:l},null,8,["graph","simControls"])]),S("div",ts,[d(Z,{graph:r(o)},null,8,["graph"])]),r(n).isActive.value?(t(),_("div",as,[d(q,{controls:r(n)},null,8,["controls"])])):j("",!0)],64))}});export{ps as default};
