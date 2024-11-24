import{u as Y}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-C425ouiW.js";import{g as D,C as Z,a as q,T as X,u as K,_ as ee,i as oe}from"./Graph.vue_vue_type_script_setup_true_lang-CUyRv0uI.js";import{T as te,u as se,_ as le}from"./TutorialHint.vue_vue_type_script_setup_true_lang-4bJG0z_t.js";import{u as O,P as ne,R as ae,e as L,o as a,c as i,a as r,v as w,F as R,g as $,x as re,y as P,z,A as ie,B as _,C as G,f as A,D as de,t as S,E as y,G as u,b as v,w as ue,d as ce,H as x,I as ge,J as be,K as me}from"./index-Bdg9Ig9r.js";import{_ as M,a as W,b as pe}from"./CollabControls.vue_vue_type_script_setup_true_lang-DMg3MToN.js";import{_ as ve}from"./InputRange.vue_vue_type_script_setup_true_lang-nH6W6DCt.js";import{_ as he}from"./Button.vue_vue_type_script_setup_true_lang-B3saCR9P.js";const c={reset:"reset",draggable:"draggable",nodeAnchors:"node-anchors",edgeLabels:"edge-labels",edgeLabelsEditable:"edge-labels-editable",userEditable:"user-editable",edgeWeight:"edge-weight",nodeSize:"node-size",storageKey:"storage-key",clearLocalStorage:"clear-local-storage",persistentGraphClone:"persistent-graph-clone",testRoom:"test-room",log:"log",bfsColorize:"toggle-bfs-colorize"},fe=e=>({greeting:{hint:"Welcome to the graph editor tutorial",dismiss:"onClick"},goodbye:{hint:"Have fun editing graphs!",dismiss:"onTimeout",after:3e3},createNode:{hint:"Double click anywhere to add a node",dismiss:"onNodeAdded"},moveNode:{hint:"Drag a node to move it",dismiss:"onNodeDrop"},createEdge:{hint:"Create an edge by dragging an anchor onto another node",dismiss:"onEdgeAdded"},createSelfDirectedEdge:{hint:'You can even create self directed edges! Make sure you are in "directed" mode and drag an anchor inwards',dismiss:{event:"onEdgeAdded",predicate:o=>o.to===o.from}},editEdgeWeight:{hint:"Edit the edge weight by clicking on it and typing a number",dismiss:"onEdgeLabelChange"},removeElement:_e(e)}),_e=e=>{let o=!1;const t=()=>o=!0,{setTheme:l,removeAllThemes:s}=O(e,te);return{hint:"Remove an edge or node by clicking on it and hitting backspace/delete",dismiss:{event:"onInterval",predicate:()=>o},onInit:()=>{o=!1,l("nodeAnchorColor",n=>n.label==="1"?ne:ae),e.subscribe("onEdgeRemoved",t),e.subscribe("onNodeRemoved",t)},onDismiss:()=>{s(),e.unsubscribe("onEdgeRemoved",t),e.unsubscribe("onNodeRemoved",t)}}},Ce=e=>{const{greeting:o,createNode:t,moveNode:l,createEdge:s,createUndirectedEdge:n,editEdgeWeight:d,removeElement:g,goodbye:m}=fe(e);return[o,t,l,s,n,d,g,m]},Ee=e=>({basics:Ce(e)}),ye=e=>se(e,Ee(e).basics),Se=L({__name:"TutorialControls",props:{tutorial:{}},setup(e){return(o,t)=>(a(),i(R,null,[r("button",{onClick:t[0]||(t[0]=(...l)=>o.tutorial.prevStep&&o.tutorial.prevStep(...l)),class:w("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},t[4]||(t[4]=[r("span",{class:"select-none"},"Previous Step",-1)])),r("button",{onClick:t[1]||(t[1]=(...l)=>o.tutorial.nextStep&&o.tutorial.nextStep(...l)),class:w("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},t[5]||(t[5]=[r("span",{class:"select-none"},"Next Step",-1)])),r("button",{onClick:t[2]||(t[2]=(...l)=>o.tutorial.stop&&o.tutorial.stop(...l)),class:w("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},t[6]||(t[6]=[r("span",{class:"select-none"},"End Tutorial",-1)])),r("button",{onClick:t[3]||(t[3]=(...l)=>o.tutorial.start&&o.tutorial.start(...l)),class:w("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},t[7]||(t[7]=[r("span",{class:"select-none"},"Restart Tutorial",-1)]))],64))}}),Le="product/search-visualizer",xe=(e,o)=>{const t=$({}),l=$(o),{adjacencyList:s}=re(e),n=()=>{if(t.value={},!l.value||!s.value[l.value])return;let d=[l.value];const g=new Set(d);let m=0;for(;d.length>0;){const C=[];for(const E of d){t.value[E]=m;for(const h of s.value[E])g.has(h)||(g.add(h),C.push(h))}d=[],d.push(...C),m++}};return e.subscribe("onStructureChange",n),P(()=>e.unsubscribe("onStructureChange",n)),z(l,n),{bfsLevelRecord:ie(t),startNode:l}},Re=[_.RED_600,_.ORANGE_600,_.YELLOW_600,_.GREEN_600,_.TEAL_600,_.BLUE_600,_.INDIGO_600,_.PURPLE_600],Ne=e=>{var E;const o=$(!1),{setTheme:t,removeTheme:l}=O(e,Le),{bfsLevelRecord:s,startNode:n}=xe(e,(E=e.nodes.value[0])==null?void 0:E.id),d=()=>{if(n.value===void 0){const[b]=e.nodes.value;b&&(n.value=b.id)}if(!e.nodes.value.find(b=>b.id===n.value)){const[b]=e.nodes.value;n.value=b?b.id:void 0}},g=h=>{if(e.isFocused(h.id))return;const b=s.value[h.id];if(b===void 0)return;const k=Re;return k[b%k.length]},m=()=>{t("nodeBorderColor",g),t("nodeAnchorColor",g),o.value=!0},C=()=>{l("nodeBorderColor"),l("nodeAnchorColor"),o.value=!1};return z(o,()=>{o.value?m():C()}),e.subscribe("onNodeRemoved",d),e.subscribe("onNodeAdded",d),P(()=>{e.unsubscribe("onNodeRemoved",d),e.unsubscribe("onNodeAdded",d)}),{isColorized:o,colorize:m,decolorize:C,toggleColorize:()=>o.value=!o.value,bfsLevelRecord:s,startNode:n}},we=e=>{const o={label:()=>"Reset",action:()=>e.reset(),color:()=>"red",id:c.reset},t={label:()=>e.settings.value.draggable?"Draggable":"Not Draggable",action:()=>e.settings.value.draggable=!e.settings.value.draggable,color:()=>e.settings.value.draggable?"green":"orange",id:c.draggable},l={label:()=>e.settings.value.nodeAnchors?"Anchors":"No Anchors",action:()=>e.settings.value.nodeAnchors=!e.settings.value.nodeAnchors,color:()=>e.settings.value.nodeAnchors?"green":"orange",id:c.nodeAnchors},s={label:()=>e.settings.value.displayEdgeLabels?"Edge Labels":"No Edge Labels",action:()=>e.settings.value.displayEdgeLabels=!e.settings.value.displayEdgeLabels,color:()=>e.settings.value.displayEdgeLabels?"green":"orange",id:c.edgeLabels},n={label:()=>e.settings.value.edgeLabelsEditable?"Edge Labels Editable":"Edge Labels Not Editable",action:()=>e.settings.value.edgeLabelsEditable=!e.settings.value.edgeLabelsEditable,color:()=>e.settings.value.edgeLabelsEditable?"green":"orange",id:c.edgeLabelsEditable},d={label:()=>e.settings.value.userEditable?"Editable":"Not Editable",action:()=>e.settings.value.userEditable=!e.settings.value.userEditable,color:()=>e.settings.value.userEditable?"green":"orange",id:c.userEditable},g={cond:()=>!!e.settings.value.userEditable,label:()=>{const{userAddedEdgeLabel:p}=e.settings.value;return`Change Added Edge Weight (${p})`},action:()=>{e.settings.value.userAddedEdgeLabel=G(1,10).toString()},color:()=>"green",id:c.edgeWeight},m={label:()=>`Change Node Size (${e.theme.value.nodeSize})`,action:()=>e.theme.value.nodeSize=G(20,50),color:()=>"pink",id:c.nodeSize},C={label:()=>{const{persistentStorageKey:p}=e.settings.value;return`Change Storage Key (${p})`},action:()=>{const{persistentStorageKey:p}=e.settings.value,f=p==="graph"?"graph2":"graph";e.settings.value.persistentStorageKey=f},color:()=>"blue",id:c.storageKey},E={label:()=>"Clear Local Storage",action:()=>localStorage.clear(),color:()=>"red",id:c.clearLocalStorage},h={label:()=>"Clone Search Visualizer Graph",action:()=>{e.settings.value.persistentStorageKey="search-visualizer-graph"},color:()=>"amber",id:c.persistentGraphClone},b={label:()=>{const{collaborativeRoomId:p,collaboratorCount:f,inCollaborativeRoom:N}=e,V=`Leave ${p.value} Room (${f.value+1} In Room)`;return N.value?V:"Join Test Room"},action:()=>{const p=D(Z),f=D(q);e.meAsACollaborator.value.name=p,e.meAsACollaborator.value.color=f;const{joinCollaborativeRoom:N,leaveCollaborativeRoom:V,inCollaborativeRoom:B}=e;B.value?V():N("Test")},color:()=>e.inCollaborativeRoom.value?"red":"green",id:c.testRoom},k={label:()=>"Log",action:()=>{console.log(JSON.stringify(e.collaborators.value,null,2)),console.log(JSON.stringify(e.collaboratorCount.value,null,2)),console.log(JSON.stringify(e.meAsACollaborator.value,null,2))},color:()=>"blue",id:c.log},{toggleColorize:F,isColorized:U,startNode:J}=Ne(e),I={reset:o,clearLocalStorage:E,changeNodeSize:m,toggleEdgeLabelDisplay:s,toggleEdgeLabelsEditable:n,toggleDraggable:t,toggleNodeAnchors:l,toggleUserEditable:d,changeEdgeWeight:g,changeStorageKey:C,persistentGraphClone:h,toggleTestRoom:b,bfsColorize:{label:()=>{const p="Colorize",f=e.getNode(J.value),N=`Stop Colorizing (${f==null?void 0:f.label})`;return U.value?N:p},color:()=>U.value?"red":"pink",action:F,id:"toggle-bfs-colorize"},log:k},Q=Object.values(I);return{...I,btnArr:Q}},Ae=["onClick","id"],ke={class:"select-none"},$e=L({__name:"GraphBtns",props:{btns:{}},setup(e){const o=t=>t?t():!0;return(t,l)=>(a(!0),i(R,null,A(t.btns,s=>(a(),i("div",null,[o(s.cond)?(a(),i("button",{key:0,onClick:de(s.action,["stop"]),class:w(`bg-${s.color()}-600 text-white px-3 py-1 rounded-lg font-bold`),id:s.id},[r("span",ke,S(s.label()),1)],10,Ae)):y("",!0)]))),256))}}),H=e=>e.charAt(0).toUpperCase()+e.slice(1),T=e=>{const o=e.replace(/([A-Z])/g," $1");return H(o)},Ve={class:"px-4 my-2"},Te={class:"my-2"},ze={class:"flex flex-wrap gap-3"},Ue=["onClick"],Ie={class:"my-2"},Be={class:"text-white mb-2"},De={class:"font-bold text-lg"},Ge={class:"text-md"},Oe={key:3,class:"text-red-500 font-bold"},Pe=L({__name:"ThemeControls",props:{graph:{}},setup(e){return(o,t)=>(a(),i("div",Ve,[t[1]||(t[1]=r("div",null,[r("h2",{class:"text-2xl font-bold text-white"},"Theme Controls")],-1)),r("div",Te,[t[0]||(t[0]=r("div",{class:"mb-2"},[r("h1",{class:"text-xl font-bold text-white"},"Presets")],-1)),r("div",ze,[(a(!0),i(R,null,A(u(X),(l,s)=>(a(),i("div",{onClick:n=>o.graph.theme.value=l},[v(he,{color:l.secondaryColor,"text-color":l.secondaryTextColor,style:{width:"120px","text-align":"center"}},{default:ue(()=>[ce(S(u(T)(s)),1)]),_:2},1032,["color","text-color"])],8,Ue))),256))])]),(a(!0),i(R,null,A(o.graph.theme.value,(l,s)=>(a(),i("div",Ie,[r("div",Be,[r("h3",De,S(u(T)(s)),1),r("h4",Ge,S(l),1)]),typeof l=="string"&&s.toLowerCase().includes("color")?(a(),x(M,{key:0,modelValue:o.graph.theme.value[s],"onUpdate:modelValue":n=>o.graph.theme.value[s]=n,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof l=="string"?(a(),x(W,{key:1,modelValue:o.graph.theme.value[s],"onUpdate:modelValue":n=>o.graph.theme.value[s]=n},null,8,["modelValue","onUpdate:modelValue"])):typeof l=="number"?(a(),x(ve,{key:2,modelValue:o.graph.theme.value[s],"onUpdate:modelValue":n=>o.graph.theme.value[s]=n,style:{width:"100%"},min:0,max:100},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("h5",Oe," Not Supported "))]))),256))]))}}),j=L({__name:"InputCheckbox",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e){const o=ge(e,"modelValue");return(t,l)=>be((a(),i("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>o.value=s),type:"checkbox"},null,512)),[[me,o.value]])}}),Me=["onClick"],We={class:"text-white font-bold"},He=L({__name:"GraphPlaygroundControls",props:{playgroundControls:{}},setup(e){return(o,t)=>(a(!0),i(R,null,A(o.playgroundControls,(l,s)=>(a(),i("div",{class:"flex gap-3 items-center pl-3 py-2 hover:bg-gray-800 cursor-pointer",onClick:n=>o.playgroundControls[s]=!o.playgroundControls[s]},[v(j,{modelValue:o.playgroundControls[s],"onUpdate:modelValue":n=>o.playgroundControls[s]=n,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"]),r("h2",We,S(u(H)(s)),1)],8,Me))),256))}}),je={class:"my-2 px-4"},Fe={class:"text-white mb-2"},Je={class:"font-bold text-lg"},Qe={class:"text-md"},Ye={key:3,class:"text-red-500 font-bold"},Ze=L({__name:"SettingsControls",props:{graph:{}},setup(e){return(o,t)=>(a(!0),i(R,null,A(o.graph.settings.value,(l,s)=>(a(),i("div",je,[r("div",Fe,[r("h3",Je,S(u(T)(s)),1),r("h4",Qe,S(l),1)]),typeof l=="string"&&s.toLowerCase().includes("color")?(a(),x(M,{key:0,modelValue:o.graph.settings.value[s],"onUpdate:modelValue":n=>o.graph.settings.value[s]=n,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof l=="string"?(a(),x(W,{key:1,modelValue:o.graph.settings.value[s],"onUpdate:modelValue":n=>o.graph.settings.value[s]=n},null,8,["modelValue","onUpdate:modelValue"])):typeof l=="boolean"?(a(),x(j,{key:2,modelValue:o.graph.settings.value[s],"onUpdate:modelValue":n=>o.graph.settings.value[s]=n,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"])):(a(),i("h5",Ye," Not Supported "))]))),256))}}),qe={class:"relative w-full h-full"},Xe={class:"w-full h-full absolute"},Ke={key:0,class:"absolute flex gap-2 m-2 flex flex-wrap w-[85%]"},eo={key:1,class:"absolute bottom-0 right-0 flex gap-2 h-8 m-2"},oo={key:2,class:"bottom-0 absolute flex gap-2 m-2"},to={key:3,class:"absolute w-full dark:text-white bottom-[10%] grid place-items-center pointer-events-none"},so={class:"absolute h-3/4 top-[100px] right-0"},lo={key:0,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl mb-3"},no={key:1,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl"},ao={class:"absolute w-[150px] top-1/4 overflow-auto bg-gray-800 bg-opacity-80 rounded-r-xl"},vo=L({__name:"GraphPlayground",setup(e){const o=$(),t=K(o,{settings:{edgeInputToLabel:d=>{if(oe(d))return d;if(!isNaN(Number(d)))return d}}}),l=ye(t),{btnArr:s}=we(t),n=Y("graph-playground-controls",{tutorial:!0,theme:!0,settings:!0,collab:!0,buttons:!0});return z(n,()=>{n.value.tutorial?l.start():l.stop()},{immediate:!0,deep:!0}),(d,g)=>(a(),i("div",qe,[r("div",Xe,[v(ee,{onGraphRef:g[0]||(g[0]=m=>o.value=m),graph:u(t)},null,8,["graph"])]),u(n).buttons?(a(),i("div",Ke,[v($e,{btns:u(s)},null,8,["btns"])])):y("",!0),u(n).collab?(a(),i("div",eo,[v(pe,{graph:u(t)},null,8,["graph"])])):y("",!0),u(n).tutorial?(a(),i("div",oo,[v(Se,{tutorial:u(l)},null,8,["tutorial"])])):y("",!0),u(n).tutorial?(a(),i("div",to,[v(le,{tutorial:u(l)},null,8,["tutorial"])])):y("",!0),r("div",so,[u(n).theme?(a(),i("div",lo,[v(Pe,{graph:u(t)},null,8,["graph"])])):y("",!0),u(n).settings?(a(),i("div",no,[v(Ze,{graph:u(t)},null,8,["graph"])])):y("",!0)]),r("div",ao,[v(He,{playgroundControls:u(n)},null,8,["playgroundControls"])])]))}});export{vo as default};
