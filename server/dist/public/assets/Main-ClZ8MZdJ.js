import{c as I,u as te,b as se,_ as re}from"./Graph.vue_vue_type_script_setup_true_lang-Dk9sggci.js";import{_ as A}from"./Button.vue_vue_type_script_setup_true_lang-BmpGiEtc.js";import{i as H,c as F}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-D4__BMRa.js";import{f as N,s as E,d as J,q as oe,o as C,c as x,a as $,v as O,B as s,C as W,w as R,F as ae,b as ne,e as P,A as D,J as L,t as q}from"./index-4nMk7tyF.js";import{b as le}from"./CollabControls.vue_vue_type_script_setup_true_lang-DSsmpG0Z.js";import{m as ue,a as ie,b as ce,c as de}from"./mdi-BxJysLth.js";const pe=t=>{t.subscribe("onEdgeAdded",r=>{r.to===r.from&&t.removeEdge(r.id)})},me=t=>{const r=Number(t);return isNaN(r)||r<0||t===""?void 0:t},ve=t=>{const r=e=>{},a=t.nodes.value.length-1,n=N(a);t.subscribe("onStructureChange",()=>n.value=a);const c=(e,o)=>(e.get(o)!==o&&e.set(o,c(e,e.get(o))),e.get(o)),f=(e,o,u,m)=>{const d=c(e,u),l=c(e,m);if(d!==l){const b=o.get(d),y=o.get(l);b<y?e.set(d,l):b>y?e.set(l,d):(e.set(l,d),o.set(d,b+1))}},p=()=>{const e=Object.values(I(t.edges.value)).sort((d,l)=>Number(d.label)-Number(l.label)),o=new Map,u=new Map;t.nodes.value.forEach(d=>{o.set(d.id,d.id),u.set(d.id,0)});const m=[];for(const d of e){if(m.length>=n.value)break;const l=c(o,d.from),b=c(o,d.to);if(l!==b&&(r(d.label),m.push(d),f(o,u,l,b),m.length===a))break}return m},v=E(()=>n.value>1),_=E(()=>n.value<a);return{kruskal:p,backwardStep:()=>{v.value&&n.value--},forwardStep:()=>{_.value&&n.value++},setStep:e=>{if(e>a||e<1)throw new Error("step out of range");n.value=e},canBackwardStep:v,canForwardStep:_,currentStep:n,maxSteps:a}},fe=t=>{const r=i=>{},a=t.nodes.value.length-1,n=N(a);t.subscribe("onStructureChange",()=>n.value=a);const c=(i,e)=>{let o=null;for(const u of i)(e.has(u.from)&&!e.has(u.to)||e.has(u.to)&&!e.has(u.from))&&(!o||Number(u.label)<Number(o.label))&&(o=u);return o&&r(o.label),o},f=()=>{if(t.nodes.value.length===0)return[];const i=[],e=new Set,o=t.nodes.value[0].id;e.add(o);const u=Object.values(I(t.edges.value));for(;i.length<a&&i.length<n.value;){const m=c(u,e);if(!m)break;i.push(m),e.add(m.from),e.add(m.to)}return i},p=E(()=>n.value>1),v=E(()=>n.value<a);return{prims:f,backwardStep:()=>{p.value&&n.value--},forwardStep:()=>{v.value&&n.value++},setStep:i=>{if(i>a||i<1)throw new Error("step out of range");n.value=i},canBackwardStep:p,canForwardStep:v,currentStep:n,maxSteps:a}},K=(t,r)=>{const{setTheme:a,removeAllThemes:n}=te(t,"mst");if(r.length===0)return n();a("edgeColor",c=>{if(t.isHighlighted(c.id))return;const f=r.some(v=>v.id===c.id),p=H(t.theme.value.edgeColor,c);return f?p:p+"20"}),a("edgeTextColor",c=>{if(t.isHighlighted(c.id))return;const f=r.some(v=>v.id===c.id),p=H(t.theme.value.edgeTextColor,c);return f?p:p+"20"})},ge=t=>{const{kruskal:r,forwardStep:a,backwardStep:n,setStep:c,canBackwardStep:f,canForwardStep:p,currentStep:v,maxSteps:_}=ve(t),{prims:B,forwardStep:S,backwardStep:i,setStep:e,canBackwardStep:o,canForwardStep:u,currentStep:m,maxSteps:d}=fe(t),l=N(void 0),b=[{label:"Kruskal",value:"kruskal"},{label:"Prim",value:"prim"},{label:"None",value:void 0}],y=()=>{switch(l.value){case"kruskal":return K(t,r());case"prim":return K(t,B());default:return K(t,[])}},V=k=>{l.value=k,y()},g=()=>{l.value==="kruskal"?n():i(),y()},h=()=>{l.value==="kruskal"?a():S(),y()},z=k=>{l.value==="kruskal"?c(k):e(k)},G=E(()=>l.value==="kruskal"?p.value:u.value),j=E(()=>l.value==="kruskal"?f.value:o.value),U=E(()=>l.value==="kruskal"?_:d),Y=E(()=>l.value==="kruskal"?v.value:m.value),Q=k=>{k.key==="["&&j.value?(g(),T.value=!1):k.key==="]"&&G.value&&(h(),T.value=!1)},X=N(!1),T=N(!1),Z=()=>{if(T.value)return T.value=!1;T.value=!0,t.settings.value.userEditable=!1;const k=()=>{G.value&&T.value?(h(),setTimeout(k,1e3)):(T.value=!1,t.settings.value.userEditable=!0)};k()},ee=E(()=>b[b.findIndex(k=>l.value===k.value)].label);return{colorizeGraph:y,handleStepKeys:Q,updateAlgorithm:V,runSimulation:Z,setStep:z,stepBackwards:g,stepForwards:h,showSimulation:X,runningSimulation:T,currentAlgorithm:l,computedCanBackwardStep:j,computedCanForwardStep:G,algorithms:b,computedCurrentAlgorithmName:ee,computedMaxSteps:U,computedCurrentStep:Y}},M={backgroundColor:"white",progressColor:"green",easeTime:250,progressEasing:"ease-in-out",borderRadius:0},he=J({__name:"Progressbar",props:{theme:{},startProgress:{},currentProgress:{},endProgress:{}},setup(t){var B,S,i,e,o;const r=t,a=((B=r.theme)==null?void 0:B.backgroundColor)||M.backgroundColor,n=((S=r.theme)==null?void 0:S.progressColor)||M.progressColor,c=((i=r.theme)==null?void 0:i.easeTime)||M.easeTime,f=((e=r.theme)==null?void 0:e.progressEasing)||M.progressEasing,p=((o=r.theme)==null?void 0:o.borderRadius)||M.borderRadius,v=N(0),_=E(()=>{const u=r.endProgress-r.startProgress;return Math.min(Math.max(r.currentProgress-r.startProgress,0),u)/u*100});return oe(()=>_.value,u=>{v.value=u},{immediate:!0}),(u,m)=>(C(),x("div",{class:"relative overflow-hidden h-[25px] w-full",style:O({backgroundColor:s(a),borderRadius:`${s(p)}px`})},[$("div",{class:"absolute top-0 left-0 h-[25px] w-full",style:O({width:`${v.value}%`,backgroundColor:s(n),transition:`width ${s(c)}ms ${s(f)}`})},null,4)],4))}}),Se={class:"w-full h-full relative"},be={key:1,class:"absolute m-3 flex gap-3 z-50"},ke={key:2,class:"absolute m-3 flex z-50 bottom-2 w-full justify-center items-end"},we={class:"flex flex-col items-center"},Ce={class:"w-96 mb-5"},_e={class:"flex gap-16 m-6"},xe=["height","viewBox"],Ee=["d"],ye=["height","viewBox"],Be=["d"],Te=["width","height","viewBox"],Pe=["d"],$e={key:3,class:"absolute m-3 flex z-50 bottom-16 flex justify-center w-full"},Ne={key:4,class:"absolute right-0 p-3 h-14 flex gap-3 bottom-0"},w=24,Le=J({__name:"Main",setup(t){const r=N(),a=se(r,{settings:{persistentStorageKey:"min-spanning-tree",userEditableAddedEdgeType:"undirected",edgeInputToLabel:me}});pe(a);const{colorizeGraph:n,handleStepKeys:c,updateAlgorithm:f,runSimulation:p,setStep:v,stepBackwards:_,stepForwards:B,showSimulation:S,runningSimulation:i,currentAlgorithm:e,computedCanBackwardStep:o,computedCanForwardStep:u,algorithms:m,computedCurrentAlgorithmName:d,computedCurrentStep:l,computedMaxSteps:b}=ge(a);a.subscribe("onStructureChange",n),a.subscribe("onEdgeLabelChange",n),a.subscribe("onKeydown",c);const y=()=>{v(1),S.value=!0,p(),_()};return(V,g)=>(C(),x("div",Se,[s(S)?(C(),W(A,{key:0,onClick:g[0]||(g[0]=h=>(S.value=!1,i.value=!1)),class:"absolute m-3 z-50"},{default:R(()=>[L(" Exit "+q(s(d))+" Simulation ",1)]),_:1})):(C(),x("div",be,[(C(!0),x(ae,null,ne(s(m),(h,z)=>(C(),W(A,{key:z,onClick:G=>s(f)(h.value),color:s(e)===h.value?s(F).GREEN_600:void 0,"text-color":s(e)===h.value?s(F).WHITE:void 0},{default:R(()=>[L(q(h.label),1)]),_:2},1032,["onClick","color","text-color"]))),128))])),s(e)&&s(S)?(C(),x("div",ke,[$("div",we,[$("div",Ce,[P(he,{"start-progress":0,"current-progress":s(l),"end-progress":s(b),theme:{progressColor:s(F).GRAY_200,backgroundColor:s(F).SLATE_500,borderRadius:20},class:"border-gray-200 border-2"},null,8,["current-progress","end-progress","theme"])]),$("div",_e,[P(A,{onClick:g[1]||(g[1]=h=>(s(_)(),i.value=!1)),style:{"border-radius":"100px",transform:"scale(2)"}},{default:R(()=>[(C(),x("svg",{width:w,height:w+8,viewBox:`0 0 ${w} ${w}`},[$("path",{d:s(ue)},null,8,Ee)],8,xe))]),_:1}),P(A,{style:{"border-radius":"100px",transform:"scale(2)"},onClick:s(p)},{default:R(()=>[(C(),x("svg",{width:w,height:w+8,viewBox:`0 0 ${w} ${w}`},[$("path",{d:s(i)?s(ie):s(ce)},null,8,Be)],8,ye))]),_:1},8,["onClick"]),P(A,{style:{"border-radius":"100px",transform:"scale(2)","padding-left":"10px"},onClick:g[2]||(g[2]=h=>(s(B)(),i.value=!1)),color:s(u)?void 0:s(F).SLATE_400},{default:R(()=>[(C(),x("svg",{width:w-2,height:w+8,viewBox:`0 0 ${w-1} ${w-1}`},[$("path",{d:s(de)},null,8,Pe)],8,Te))]),_:1},8,["color"])])])])):s(e)?(C(),x("div",$e,[P(A,{onClick:y,class:"text-3xl mb-4 shadow-2xl",style:{padding:"15px 100px 15px 100px","border-radius":"50px"}},{default:R(()=>g[4]||(g[4]=[L(" Run Simulation ")])),_:1})])):D("",!0),P(re,{onGraphRef:g[3]||(g[3]=h=>r.value=h),graph:s(a)},null,8,["graph"]),s(S)?D("",!0):(C(),x("div",Ne,[P(le,{graph:s(a)},null,8,["graph"])]))]))}});export{Le as default};
