import{u as O,c as M,b as j,_ as D}from"./Graph.vue_vue_type_script_setup_true_lang-DocsTEe0.js";import{_ as x}from"./Button.vue_vue_type_script_setup_true_lang-BKCRMp7S.js";import{i as $,c as _}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-CGpb3CCb.js";import{b as F}from"./CollabControls.vue_vue_type_script_setup_true_lang-B37zpHTn.js";import{d as L,f as g,s as b,q as H,o as p,c as E,a as w,v as G,B as a,e as h,w as R,A as P,D as B,F as K,C as S}from"./index-vVuVFhwx.js";import{_ as z}from"./SimulationPlaybackControls.vue_vue_type_script_setup_true_lang-bTUd3SQL.js";const I=s=>{const l=Number(s);return isNaN(l)||l<0||s===""?void 0:s},f=(s,l)=>{const{setTheme:c}=O(s,"mst");c("edgeColor",u=>{if(s.isHighlighted(u.id))return;const r=l.some(t=>t.id===u.id),o=$(s.theme.value.edgeColor,u);return r?o:o+"20"}),c("edgeTextColor",u=>{if(s.isHighlighted(u.id))return;const r=l.some(t=>t.id===u.id),o=$(s.theme.value.edgeTextColor,u);return r?o:o+"20"})},T={backgroundColor:"white",progressColor:"green",easeTime:250,progressEasing:"ease-in-out",borderRadius:0},q=L({__name:"Progressbar",props:{theme:{},startProgress:{},currentProgress:{},endProgress:{}},setup(s){var d,i,v,m,k;const l=s,c=((d=l.theme)==null?void 0:d.backgroundColor)||T.backgroundColor,u=((i=l.theme)==null?void 0:i.progressColor)||T.progressColor,r=((v=l.theme)==null?void 0:v.easeTime)||T.easeTime,o=((m=l.theme)==null?void 0:m.progressEasing)||T.progressEasing,t=((k=l.theme)==null?void 0:k.borderRadius)||T.borderRadius,e=g(0),n=b(()=>{const C=l.endProgress-l.startProgress;return Math.min(Math.max(l.currentProgress-l.startProgress,0),C)/C*100});return H(()=>n.value,C=>{e.value=C},{immediate:!0}),(C,N)=>(p(),E("div",{class:"relative overflow-hidden h-[25px] w-full",style:G({backgroundColor:a(c),borderRadius:`${a(t)}px`})},[w("div",{class:"absolute top-0 left-0 h-[25px] w-full",style:G({width:`${e.value}%`,backgroundColor:a(u),transition:`width ${a(r)}ms ${a(o)}`})},null,4)],4))}}),U=s=>{const l=g([]),c=(t,e)=>(t.get(e)!==e&&t.set(e,c(t,t.get(e))),t.get(e)),u=(t,e,n,d)=>{const i=c(t,n),v=c(t,d);if(i!==v){const m=e.get(i),k=e.get(v);m<k?t.set(i,v):m>k?t.set(v,i):(t.set(v,i),e.set(i,m+1))}},r=()=>{const t=Object.values(M(s.edges.value)).sort((i,v)=>Number(i.label)-Number(v.label)),e=new Map,n=new Map;s.nodes.value.forEach(i=>{e.set(i.id,i.id),n.set(i.id,0)});const d=[];for(const i of t){const v=c(e,i.from),m=c(e,i.to);if(v!==m&&(d.push(i),u(e,n,v,m),d.length===s.nodes.value.length-1))break}return d},o=()=>{l.value=r(),f(s,l.value)};return s.subscribe("onStructureChange",o),s.subscribe("onEdgeLabelChange",o),s.subscribe("onGraphReset",o),{trace:l}},W=s=>{const l=g([]),c=(o,t)=>{let e=null;for(const n of o)(t.has(n.from)&&!t.has(n.to)||t.has(n.to)&&!t.has(n.from))&&(!e||Number(n.label)<Number(e.label))&&(e=n);return e},u=()=>{if(s.nodes.value.length===0)return[];const o=[],t=new Set,e=s.nodes.value[0].id;t.add(e);const n=Object.values(M(s.edges.value));for(;o.length<s.nodes.value.length-1;){const d=c(n,t);if(!d)break;o.push(d),t.add(d.from),t.add(d.to)}return o},r=()=>{l.value=u(),f(s,l.value)};return s.subscribe("onStructureChange",r),s.subscribe("onEdgeLabelChange",r),s.subscribe("onGraphReset",r),{trace:l}},Y=(s,l)=>{const{trace:c}=U(s),{trace:u}=W(s),r=b(()=>l.value==="none"?s.edges.value:l.value==="prim"?u.value:c.value),o=g(0),t=g(!0),e=g(1500),n=g(!1),d=g(),i=b(()=>o.value===r.value.length+1),v=b(()=>o.value>0),m=b(()=>r.value.slice(0,o.value)),k=()=>{t.value=!1,n.value=!0,o.value=0,d.value=setInterval(()=>{i.value||t.value||N()},e.value),f(s,m.value)},C=()=>{d.value&&clearInterval(d.value),n.value=!1,A(r.value.length),f(s,m.value)},N=()=>{r.value&&o.value!==r.value.length+1&&(o.value++,f(s,m.value))},V=()=>{o.value!==0&&(o.value--,f(s,m.value))},A=y=>{y<-1||y>r.value.length||(o.value=y,f(s,m.value))};return{nextStep:N,prevStep:V,setStep:A,trace:b(()=>r.value),step:b(()=>o.value),start:k,stop:C,paused:t,playbackSpeed:e,isOver:i,hasBegun:v,isActive:b(()=>n.value)}},J={class:"w-full h-full relative"},Q={class:"absolute top-0 p-3 flex gap-3"},X={key:0,class:"gap-3 flex"},Z={key:1},ee={key:0,class:"absolute bottom-8 w-full flex flex-col justify-center items-center p-3"},se={key:1,class:"absolute right-0 p-3 h-14 flex gap-3 bottom-0"},ue=L({__name:"Main",setup(s){const l=g(),c=j(l,{settings:{persistentStorageKey:"min-spanning-tree",userEditableAddedEdgeType:"undirected",edgeInputToLabel:I}}),u=g("none"),r=Y(c,u),o=t=>{u.value=t,t==="none"?f(c,c.edges.value):f(c,r.trace.value)};return setTimeout(()=>o("none"),1),(t,e)=>(p(),E(K,null,[w("div",J,[h(D,{onGraphRef:e[0]||(e[0]=n=>l.value=n),graph:a(c)},null,8,["graph"])]),w("div",Q,[a(r).isActive.value?P("",!0):(p(),E("div",X,[h(x,{onClick:e[1]||(e[1]=n=>o("kruskal")),color:u.value==="kruskal"?a(_).GREEN_400:void 0},{default:R(()=>e[4]||(e[4]=[S("Kruskal")])),_:1},8,["color"]),h(x,{onClick:e[2]||(e[2]=n=>o("prim")),color:u.value==="prim"?a(_).GREEN_400:void 0},{default:R(()=>e[5]||(e[5]=[S("Prim")])),_:1},8,["color"]),h(x,{onClick:e[3]||(e[3]=n=>o("none")),color:u.value==="none"?a(_).GREEN_400:void 0},{default:R(()=>e[6]||(e[6]=[S("None")])),_:1},8,["color"])])),u.value!=="none"?(p(),E("div",Z,[a(r).isActive.value?(p(),B(x,{key:1,onClick:a(r).stop,color:a(_).RED_600,"text-color":a(_).WHITE},{default:R(()=>e[8]||(e[8]=[S(" Stop Simulation ")])),_:1},8,["onClick","color","text-color"])):(p(),B(x,{key:0,onClick:a(r).start},{default:R(()=>e[7]||(e[7]=[S(" Start Simulation ")])),_:1},8,["onClick"]))])):P("",!0)]),a(r).isActive.value?(p(),E("div",ee,[h(q,{class:"w-[300px] border-gray-200 border-2 mb-8",theme:{progressColor:a(_).GRAY_200,backgroundColor:a(_).SLATE_500,borderRadius:20},"start-progress":0,"current-progress":a(r).step.value,"end-progress":a(r).trace.value.length},null,8,["theme","current-progress","end-progress"]),h(z,{controls:a(r)},null,8,["controls"])])):P("",!0),a(r).isActive.value?P("",!0):(p(),E("div",se,[h(F,{graph:a(c)},null,8,["graph"])]))],64))}});export{ue as default};
