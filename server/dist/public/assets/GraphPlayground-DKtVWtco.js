import{u as M,P as q,R as J,e as h,o as n,c as i,a as d,v as x,F as w,g as A,x as X,y as P,z as U,A as K,B as f,C as B,f as N,D as ee,t as C,E as S,G as R,H as $,I as D,J as te,K as O,L as oe,M as u,b as m,w as se,d as le,N as L,O as ae,Q as ne}from"./index-Bwi0-sFl.js";import{T as re,u as de,_ as ie,i as ue}from"./Graph.vue_vue_type_script_setup_true_lang-DKLdJxb9.js";import{T as ce,u as ge,_ as pe}from"./TutorialHint.vue_vue_type_script_setup_true_lang-zsDaywSS.js";import{_ as be}from"./InputRange.vue_vue_type_script_setup_true_lang-BI-5wxjC.js";import{_ as ve}from"./Button.vue_vue_type_script_setup_true_lang-CB-Q2sbK.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-Dt0nGpG1.js";const p={reset:"reset",draggable:"draggable",nodeAnchors:"node-anchors",edgeLabels:"edge-labels",edgeLabelsEditable:"edge-labels-editable",userEditable:"user-editable",edgeWeight:"edge-weight",nodeSize:"node-size",storageKey:"storage-key",clearLocalStorage:"clear-local-storage",persistentGraphClone:"persistent-graph-clone",log:"log",bfsColorize:"toggle-bfs-colorize"},me=e=>({greeting:{hint:"Welcome to the graph editor tutorial",dismiss:"onClick"},goodbye:{hint:"Have fun editing graphs!",dismiss:"onTimeout",after:3e3},createNode:{hint:"Double click anywhere to add a node",dismiss:"onNodeAdded"},moveNode:{hint:"Drag a node to move it",dismiss:"onNodeDrop"},createEdge:{hint:"Create an edge by dragging an anchor onto another node",dismiss:"onEdgeAdded"},createSelfDirectedEdge:{hint:'You can even create self directed edges! Make sure you are in "directed" mode and drag an anchor inwards',dismiss:{event:"onEdgeAdded",predicate:t=>t.to===t.from}},editEdgeWeight:{hint:"Edit the edge weight by clicking on it and typing a number",dismiss:"onEdgeLabelChange"},removeElement:he(e)}),he=e=>{let t=!1;const o=()=>t=!0,{setTheme:s,removeAllThemes:l}=M(e,ce);return{hint:"Remove an edge or node by clicking on it and hitting backspace/delete",dismiss:{event:"onInterval",predicate:()=>t},onInit:()=>{t=!1,s("nodeAnchorColor",a=>a.label==="1"?q:J),e.subscribe("onEdgeRemoved",o),e.subscribe("onNodeRemoved",o)},onDismiss:()=>{l(),e.unsubscribe("onEdgeRemoved",o),e.unsubscribe("onNodeRemoved",o)}}},fe=e=>{const{greeting:t,createNode:o,moveNode:s,createEdge:l,createUndirectedEdge:a,editEdgeWeight:r,removeElement:c,goodbye:b}=me(e);return[t,o,s,l,a,r,c,b]},_e=e=>({basics:fe(e)}),Ee=e=>ge(e,_e(e).basics),ye=h({__name:"TutorialControls",props:{tutorial:{}},setup(e){return(t,o)=>(n(),i(w,null,[d("button",{onClick:o[0]||(o[0]=(...s)=>t.tutorial.prevStep&&t.tutorial.prevStep(...s)),class:x("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},o[4]||(o[4]=[d("span",{class:"select-none"},"Previous Step",-1)])),d("button",{onClick:o[1]||(o[1]=(...s)=>t.tutorial.nextStep&&t.tutorial.nextStep(...s)),class:x("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},o[5]||(o[5]=[d("span",{class:"select-none"},"Next Step",-1)])),d("button",{onClick:o[2]||(o[2]=(...s)=>t.tutorial.stop&&t.tutorial.stop(...s)),class:x("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},o[6]||(o[6]=[d("span",{class:"select-none"},"End Tutorial",-1)])),d("button",{onClick:o[3]||(o[3]=(...s)=>t.tutorial.start&&t.tutorial.start(...s)),class:x("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},o[7]||(o[7]=[d("span",{class:"select-none"},"Restart Tutorial",-1)]))],64))}}),Ce="product/search-visualizer",Se=(e,t)=>{const o=A({}),s=A(t),{adjacencyList:l}=X(e),a=()=>{if(o.value={},!s.value||!l.value[s.value])return;let r=[s.value];const c=new Set(r);let b=0;for(;r.length>0;){const _=[];for(const E of r){o.value[E]=b;for(const v of l.value[E])c.has(v)||(c.add(v),_.push(v))}r=[],r.push(..._),b++}};return e.subscribe("onStructureChange",a),P(()=>e.unsubscribe("onStructureChange",a)),U(s,a),{bfsLevelRecord:K(o),startNode:s}},xe=[f.RED_600,f.ORANGE_600,f.YELLOW_600,f.GREEN_600,f.TEAL_600,f.BLUE_600,f.INDIGO_600,f.PURPLE_600],Le=e=>{var E;const t=A(!1),{setTheme:o,removeTheme:s}=M(e,Ce),{bfsLevelRecord:l,startNode:a}=Se(e,(E=e.nodes.value[0])==null?void 0:E.id),r=()=>{if(a.value===void 0){const[g]=e.nodes.value;g&&(a.value=g.id)}if(!e.nodes.value.find(g=>g.id===a.value)){const[g]=e.nodes.value;a.value=g?g.id:void 0}},c=v=>{if(e.isFocused(v.id))return;const g=l.value[v.id];if(g===void 0)return;const k=xe;return k[g%k.length]},b=()=>{o("nodeBorderColor",c),o("nodeAnchorColor",c),t.value=!0},_=()=>{s("nodeBorderColor"),s("nodeAnchorColor"),t.value=!1};return U(t,()=>{t.value?b():_()}),e.subscribe("onNodeRemoved",r),e.subscribe("onNodeAdded",r),P(()=>{e.unsubscribe("onNodeRemoved",r),e.unsubscribe("onNodeAdded",r)}),{isColorized:t,colorize:b,decolorize:_,toggleColorize:()=>t.value=!t.value,bfsLevelRecord:l,startNode:a}},we=e=>{const t={label:()=>"Reset",action:()=>e.reset(),color:()=>"red",id:p.reset},o={label:()=>e.settings.value.draggable?"Draggable":"Not Draggable",action:()=>e.settings.value.draggable=!e.settings.value.draggable,color:()=>e.settings.value.draggable?"green":"orange",id:p.draggable},s={label:()=>e.settings.value.nodeAnchors?"Anchors":"No Anchors",action:()=>e.settings.value.nodeAnchors=!e.settings.value.nodeAnchors,color:()=>e.settings.value.nodeAnchors?"green":"orange",id:p.nodeAnchors},l={label:()=>e.settings.value.displayEdgeLabels?"Edge Labels":"No Edge Labels",action:()=>e.settings.value.displayEdgeLabels=!e.settings.value.displayEdgeLabels,color:()=>e.settings.value.displayEdgeLabels?"green":"orange",id:p.edgeLabels},a={label:()=>e.settings.value.edgeLabelsEditable?"Edge Labels Editable":"Edge Labels Not Editable",action:()=>e.settings.value.edgeLabelsEditable=!e.settings.value.edgeLabelsEditable,color:()=>e.settings.value.edgeLabelsEditable?"green":"orange",id:p.edgeLabelsEditable},r={label:()=>e.settings.value.userEditable?"Editable":"Not Editable",action:()=>e.settings.value.userEditable=!e.settings.value.userEditable,color:()=>e.settings.value.userEditable?"green":"orange",id:p.userEditable},c={cond:()=>!!e.settings.value.userEditable,label:()=>{const{userAddedEdgeLabel:y}=e.settings.value;return`Change Added Edge Weight (${y})`},action:()=>{e.settings.value.userAddedEdgeLabel=B(1,10).toString()},color:()=>"green",id:p.edgeWeight},b={label:()=>`Change Node Size (${e.theme.value.nodeSize})`,action:()=>e.theme.value.nodeSize=B(20,50),color:()=>"pink",id:p.nodeSize},_={label:()=>{const{persistentStorageKey:y}=e.settings.value;return`Change Storage Key (${y})`},action:()=>{const{persistentStorageKey:y}=e.settings.value,V=y==="graph"?"graph2":"graph";e.settings.value.persistentStorageKey=V},color:()=>"blue",id:p.storageKey},E={label:()=>"Clear Local Storage",action:()=>localStorage.clear(),color:()=>"red",id:p.clearLocalStorage},v={label:()=>"Clone Search Visualizer Graph",action:()=>{e.settings.value.persistentStorageKey="search-visualizer-graph"},color:()=>"amber",id:p.persistentGraphClone},g={label:()=>"Log",action:()=>{},color:()=>"blue",id:p.log},{toggleColorize:k,isColorized:z,startNode:Q}=Le(e),I={reset:t,clearLocalStorage:E,changeNodeSize:b,toggleEdgeLabelDisplay:l,toggleEdgeLabelsEditable:a,toggleDraggable:o,toggleNodeAnchors:s,toggleUserEditable:r,changeEdgeWeight:c,changeStorageKey:_,persistentGraphClone:v,bfsColorize:{label:()=>{const y="Colorize",V=e.getNode(Q.value),Z=`Stop Colorizing (${V==null?void 0:V.label})`;return z.value?Z:y},color:()=>z.value?"red":"pink",action:k,id:"toggle-bfs-colorize"},log:g},Y=Object.values(I);return{...I,btnArr:Y}},Ve=["onClick","id"],Ne={class:"select-none"},ke=h({__name:"GraphBtns",props:{btns:{}},setup(e){const t=o=>o?o():!0;return(o,s)=>(n(!0),i(w,null,N(o.btns,l=>(n(),i("div",null,[t(l.cond)?(n(),i("button",{key:0,onClick:ee(l.action,["stop"]),class:x(`bg-${l.color()}-600 text-white px-3 py-1 rounded-lg font-bold`),id:l.id},[d("span",Ne,C(l.label()),1)],10,Ve)):S("",!0)]))),256))}}),Ae=["value"],G="#000000",H=h({__name:"InputColor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=R(e,"modelValue"),o=$({get:()=>t.value,set:r=>t.value=r}),s=$(()=>{if(o.value){if(D(o.value))return o.value.slice(7)}else return"";return""}),l=$(()=>{if(o.value){if(D(o.value))return o.value.slice(0,7);if(te(o.value))return o.value}else return G;return G}),a=r=>{r.target instanceof HTMLInputElement&&(console.log("e.target.value",r.target.value,"colorAlpha.value",s.value),o.value=r.target.value+s.value)};return(r,c)=>(n(),i("input",{onInput:a,value:l.value,type:"color",class:x("p-1 w-10 h-full rounded-md appearance-none")},null,40,Ae))}}),W=h({__name:"InputText",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=R(e,"modelValue");return(o,s)=>O((n(),i("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),type:"text",class:"p-1 border border-gray-300 rounded-md"},null,512)),[[oe,t.value]])}}),F=e=>e.charAt(0).toUpperCase()+e.slice(1),T=e=>{const t=e.replace(/([A-Z])/g," $1");return F(t)},$e={class:"px-4 my-2"},Te={class:"my-2"},Ue={class:"flex flex-wrap gap-3"},Re=["onClick"],ze={class:"my-2"},Ie={class:"text-white mb-2"},Be={class:"font-bold text-lg"},De={class:"text-md"},Ge={key:3,class:"text-red-500 font-bold"},Me=h({__name:"ThemeControls",props:{graph:{}},setup(e){return(t,o)=>(n(),i("div",$e,[o[1]||(o[1]=d("div",null,[d("h2",{class:"text-2xl font-bold text-white"},"Theme Controls")],-1)),d("div",Te,[o[0]||(o[0]=d("div",{class:"mb-2"},[d("h1",{class:"text-xl font-bold text-white"},"Presets")],-1)),d("div",Ue,[(n(!0),i(w,null,N(u(re),(s,l)=>(n(),i("div",{onClick:a=>t.graph.theme.value=s},[m(ve,{color:s.secondaryColor,"text-color":s.secondaryTextColor,style:{width:"120px","text-align":"center"}},{default:se(()=>[le(C(u(T)(l)),1)]),_:2},1032,["color","text-color"])],8,Re))),256))])]),(n(!0),i(w,null,N(t.graph.theme.value,(s,l)=>(n(),i("div",ze,[d("div",Ie,[d("h3",Be,C(u(T)(l)),1),d("h4",De,C(s),1)]),typeof s=="string"&&l.toLowerCase().includes("color")?(n(),L(H,{key:0,modelValue:t.graph.theme.value[l],"onUpdate:modelValue":a=>t.graph.theme.value[l]=a,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="string"?(n(),L(W,{key:1,modelValue:t.graph.theme.value[l],"onUpdate:modelValue":a=>t.graph.theme.value[l]=a},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="number"?(n(),L(be,{key:2,modelValue:t.graph.theme.value[l],"onUpdate:modelValue":a=>t.graph.theme.value[l]=a,style:{width:"100%"},min:0,max:100},null,8,["modelValue","onUpdate:modelValue"])):(n(),i("h5",Ge," Not Supported "))]))),256))]))}}),j=h({__name:"InputCheckbox",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=R(e,"modelValue");return(o,s)=>O((n(),i("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),type:"checkbox"},null,512)),[[ae,t.value]])}}),Pe=["onClick"],Oe={class:"text-white font-bold"},He=h({__name:"GraphPlaygroundControls",props:{playgroundControls:{}},setup(e){return(t,o)=>(n(!0),i(w,null,N(t.playgroundControls,(s,l)=>(n(),i("div",{class:"flex gap-3 items-center pl-3 py-2 hover:bg-gray-800 cursor-pointer",onClick:a=>t.playgroundControls[l]=!t.playgroundControls[l]},[m(j,{modelValue:t.playgroundControls[l],"onUpdate:modelValue":a=>t.playgroundControls[l]=a,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"]),d("h2",Oe,C(u(F)(l)),1)],8,Pe))),256))}}),We={class:"my-2 px-4"},Fe={class:"text-white mb-2"},je={class:"font-bold text-lg"},Qe={class:"text-md"},Ye={key:3,class:"text-red-500 font-bold"},Ze=h({__name:"SettingsControls",props:{graph:{}},setup(e){return(t,o)=>(n(!0),i(w,null,N(t.graph.settings.value,(s,l)=>(n(),i("div",We,[d("div",Fe,[d("h3",je,C(u(T)(l)),1),d("h4",Qe,C(s),1)]),typeof s=="string"&&l.toLowerCase().includes("color")?(n(),L(H,{key:0,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":a=>t.graph.settings.value[l]=a,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="string"?(n(),L(W,{key:1,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":a=>t.graph.settings.value[l]=a},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="boolean"?(n(),L(j,{key:2,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":a=>t.graph.settings.value[l]=a,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"])):(n(),i("h5",Ye," Not Supported "))]))),256))}}),qe={class:"relative w-full h-full"},Je={class:"w-full h-full absolute"},Xe={key:0,class:"absolute flex gap-2 m-2 flex flex-wrap w-[85%]"},Ke={key:1,class:"bottom-0 absolute flex gap-2 m-2"},et={key:2,class:"absolute w-full dark:text-white bottom-[10%] grid place-items-center pointer-events-none"},tt={class:"absolute h-3/4 top-[100px] right-0"},ot={key:0,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl mb-3"},st={key:1,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl"},lt={class:"absolute w-[150px] top-1/4 overflow-auto bg-gray-800 bg-opacity-80 rounded-r-xl"},gt=h({__name:"GraphPlayground",setup(e){const t=A(),o=de(t,{settings:{edgeInputToLabel:r=>{if(ue(r))return r;if(!isNaN(Number(r)))return r}}}),s=Ee(o),{btnArr:l}=we(o),a=ne("graph-playground-controls",{tutorial:!0,theme:!0,settings:!0,buttons:!0});return U(a,()=>{a.value.tutorial?s.start():s.stop()},{immediate:!0,deep:!0}),(r,c)=>(n(),i("div",qe,[d("div",Je,[m(ie,{onGraphRef:c[0]||(c[0]=b=>t.value=b),graph:u(o)},null,8,["graph"])]),u(a).buttons?(n(),i("div",Xe,[m(ke,{btns:u(l)},null,8,["btns"])])):S("",!0),u(a).tutorial?(n(),i("div",Ke,[m(ye,{tutorial:u(s)},null,8,["tutorial"])])):S("",!0),u(a).tutorial?(n(),i("div",et,[m(pe,{tutorial:u(s)},null,8,["tutorial"])])):S("",!0),d("div",tt,[u(a).theme?(n(),i("div",ot,[m(Me,{graph:u(o)},null,8,["graph"])])):S("",!0),u(a).settings?(n(),i("div",st,[m(Ze,{graph:u(o)},null,8,["graph"])])):S("",!0)]),d("div",lt,[m(He,{playgroundControls:u(a)},null,8,["playgroundControls"])])]))}});export{gt as default};
