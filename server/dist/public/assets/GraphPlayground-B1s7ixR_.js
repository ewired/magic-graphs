import{u as F,g as P,C as X,a as K,b as ee,_ as te,i as oe}from"./Graph.vue_vue_type_script_setup_true_lang-Dz8B3b2-.js";import{f as L,p as le,q as x,s as V,d as S,o as r,c as u,a as c,u as N,F as $,t as A,v as se,x as W,y as ne,b as I,z as ae,A as T,B as b,C as R,D as re,E as ie,G as de,e as _}from"./index-16eyvthD.js";import{P as ue,R as ce,c as C,g as H,u as ge}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-BLuBHGR-.js";import{u as be}from"./useAdjacencyList-vGtrpb5S.js";import{_ as j,a as q,b as ve}from"./CollabControls.vue_vue_type_script_setup_true_lang-BoM7dlrK.js";import{_ as me}from"./InputRange.vue_vue_type_script_setup_true_lang-C0pbjOKc.js";import"./Button.vue_vue_type_script_setup_true_lang-Ds2bSPZw.js";const pe="element-highlight",he=1e3,fe=1e3,Ee="tutorial",_e=(e,t)=>{const o=L(0),s=le(t);let l,n;const i=a=>{const{event:v,predicate:d}=typeof a.dismiss=="string"?{event:a.dismiss,predicate:()=>!0}:a.dismiss;if(v==="onInterval"){const y="interval"in a?a.interval:he;let k=0;const U=setInterval(()=>{d(++k)&&o.value++},y);return()=>clearInterval(U)}const g=(...y)=>{(d==null?void 0:d(...y))&&o.value++};return e.subscribe(v,g),()=>e.unsubscribe(v,g)},p=()=>{var v,d;const a=s.value[o.value];if(a){if((v=a.onInit)==null||v.call(a),(d=a.precondition)!=null&&d.call(a,e)){o.value++;return}a!=null&&a.highlightElement&&(l=ye(a)),n=i(a.dismiss!=="onTimeout"?a:{hint:a.hint,dismiss:"onInterval",interval:a.after})}},h=(a,v)=>{var g;if(a<0)return o.value=0;if(a>s.value.length)return o.value=s.value.length;const d=s.value[v];(g=d==null?void 0:d.onDismiss)==null||g.call(d),n==null||n(),l==null||l(),p()};return x(o,h),x(s,()=>h(o.value,o.value)),p(),{currentStepIndex:o,currentStep:V(()=>s.value[o.value]),sequence:s,nextStep:()=>o.value++,previousStep:()=>o.value--,endTutorial:()=>o.value=s.value.length,restartTutorial:()=>o.value=0,isTutorialOver:V(()=>o.value>=s.value.length)}},ye=e=>{const{highlightElement:t}=e;if(!t)return()=>{};const{id:o,className:s}={id:typeof t=="string"?t:t.id,className:typeof t=="string"||!(t!=null&&t.className)?pe:t.className};if(!o)return()=>{};const l=document.getElementById(o);if(!l)throw new Error(`element with id ${o} not found`);return l.classList.add(s),()=>l.classList.remove(s)},m={reset:"reset",draggable:"draggable",nodeAnchors:"node-anchors",edgeLabels:"edge-labels",edgeLabelsEditable:"edge-labels-editable",userEditable:"user-editable",edgeType:"edge-type",edgeWeight:"edge-weight",nodeSize:"node-size",storageKey:"storage-key",clearLocalStorage:"clear-local-storage",persistentGraphClone:"persistent-graph-clone",testRoom:"test-room",log:"log",bfsColorize:"toggle-bfs-colorize"},Ce=e=>({greeting:{hint:"Welcome to the graph editor tutorial",dismiss:"onClick"},goodbye:{hint:"Have fun editing graphs!",dismiss:"onTimeout",after:3e3},createNode:{hint:"Double click anywhere to add a node",dismiss:"onNodeAdded"},moveNode:{hint:"Drag a node to move it",dismiss:"onNodeDrop"},createEdge:{hint:"Create an edge by dragging an anchor onto another node",dismiss:"onEdgeAdded"},createUndirectedEdge:{hint:"Now create an undirected edge by toggling the edge type",highlightElement:m.edgeType,dismiss:{event:"onEdgeAdded",predicate:t=>t.type==="undirected"}},createSelfDirectedEdge:{hint:'You can even create self directed edges! Make sure you are in "directed" mode and drag an anchor inwards',highlightElement:m.edgeType,dismiss:{event:"onEdgeAdded",predicate:t=>t.to===t.from}},editEdgeWeight:{hint:"Edit the edge weight by clicking on it and typing a number",dismiss:"onEdgeLabelChange"},removeElement:Se(e)}),Se=e=>{let t=!1;const o=()=>t=!0,{setTheme:s,removeAllThemes:l}=F(e,Ee);return{hint:"Remove an edge or node by clicking on it and hitting backspace/delete",dismiss:{event:"onInterval",predicate:()=>t},onInit:()=>{t=!1,s("nodeAnchorColor",n=>n.label==="1"?ue:ce),e.subscribe("onEdgeRemoved",o),e.subscribe("onNodeRemoved",o)},onDismiss:()=>{l(),e.unsubscribe("onEdgeRemoved",o),e.unsubscribe("onNodeRemoved",o)}}},Te=e=>{const{greeting:t,createNode:o,moveNode:s,createEdge:l,createUndirectedEdge:n,editEdgeWeight:i,removeElement:p,goodbye:h}=Ce(e);return[t,o,s,l,n,i,p,h]},Le=e=>({basics:Te(e)}),Ae=e=>_e(e,Le(e).basics),Ne=S({__name:"TutorialControls",props:{tutorial:{}},setup(e){return V(()=>`${e.tutorial.currentStepIndex.value+1} / ${e.tutorial.sequence.value.length}`),(t,o)=>(r(),u($,null,[c("button",{onClick:o[0]||(o[0]=(...s)=>t.tutorial.previousStep&&t.tutorial.previousStep(...s)),class:N("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},o[4]||(o[4]=[c("span",{class:"select-none"},"Previous Step",-1)])),c("button",{onClick:o[1]||(o[1]=(...s)=>t.tutorial.nextStep&&t.tutorial.nextStep(...s)),class:N("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},o[5]||(o[5]=[c("span",{class:"select-none"},"Next Step",-1)])),c("button",{onClick:o[2]||(o[2]=(...s)=>t.tutorial.endTutorial&&t.tutorial.endTutorial(...s)),class:N("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},o[6]||(o[6]=[c("span",{class:"select-none"},"End Tutorial",-1)])),c("button",{onClick:o[3]||(o[3]=(...s)=>t.tutorial.restartTutorial&&t.tutorial.restartTutorial(...s)),class:N("bg-blue-600 text-white px-3 py-1 rounded-lg font-bold")},o[7]||(o[7]=[c("span",{class:"select-none"},"Restart Tutorial",-1)]))],64))}}),Re={class:"text-3xl font-bold"},M=300,we=S({__name:"TutorialHint",props:{tutorial:{}},setup(e){const t=L(0),o=V(()=>{var n;return((n=e.tutorial.currentStep.value)==null?void 0:n.hint)??""}),s=L("");let l;return x(o,()=>{t.value=0,clearTimeout(l),l=setTimeout(()=>{s.value=o.value,t.value=1},M+fe)},{immediate:!0}),(n,i)=>(r(),u("div",{class:N(["transition-opacity",`duration-[${M}ms]`,"select-none","text-center"]),style:se({opacity:t.value})},[c("h1",Re,A(s.value),1)],6))}}),xe="product/search-visualizer",$e=(e,t)=>{const o=L({}),s=L(t),{adjacencyList:l}=be(e),n=()=>{if(o.value={},!s.value||!l.value[s.value])return;let i=[s.value];const p=new Set(i);let h=0;for(;i.length>0;){const a=[];for(const v of i){o.value[v]=h;for(const d of l.value[v])p.has(d)||(p.add(d),a.push(d))}i=[],i.push(...a),h++}};return e.subscribe("onStructureChange",n),W(()=>e.unsubscribe("onStructureChange",n)),x(s,n),{bfsLevelRecord:ne(o),startNode:s}},ke=[C.RED_600,C.ORANGE_600,C.YELLOW_600,C.GREEN_600,C.TEAL_600,C.BLUE_600,C.INDIGO_600,C.PURPLE_600],Ve=e=>{var v;const t=L(!1),{setTheme:o,removeTheme:s}=F(e,xe),{bfsLevelRecord:l,startNode:n}=$e(e,(v=e.nodes.value[0])==null?void 0:v.id),i=()=>{if(n.value===void 0){const[g]=e.nodes.value;g&&(n.value=g.id)}if(!e.nodes.value.find(g=>g.id===n.value)){const[g]=e.nodes.value;n.value=g?g.id:void 0}},p=d=>{if(e.isHighlighted(d.id))return;const g=l.value[d.id];if(g===void 0)return;const y=ke;return y[g%y.length]},h=()=>{o("nodeBorderColor",p),o("nodeAnchorColor",p),t.value=!0},a=()=>{s("nodeBorderColor"),s("nodeAnchorColor"),t.value=!1};return x(t,()=>{t.value?h():a()}),e.subscribe("onNodeRemoved",i),e.subscribe("onNodeAdded",i),W(()=>{e.unsubscribe("onNodeRemoved",i),e.unsubscribe("onNodeAdded",i)}),{isColorized:t,colorize:h,decolorize:a,toggleColorize:()=>t.value=!t.value,bfsLevelRecord:l,startNode:n}},D=e=>e.charAt(0).toUpperCase()+e.slice(1),J=e=>{const t=e.replace(/([A-Z])/g," $1");return D(t)},Ie=e=>{const t={label:()=>"Reset",action:()=>e.reset(),color:()=>"red",id:m.reset},o={label:()=>e.settings.value.draggable?"Draggable":"Not Draggable",action:()=>e.settings.value.draggable=!e.settings.value.draggable,color:()=>e.settings.value.draggable?"green":"orange",id:m.draggable},s={label:()=>e.settings.value.nodeAnchors?"Anchors":"No Anchors",action:()=>e.settings.value.nodeAnchors=!e.settings.value.nodeAnchors,color:()=>e.settings.value.nodeAnchors?"green":"orange",id:m.nodeAnchors},l={label:()=>e.settings.value.displayEdgeLabels?"Edge Labels":"No Edge Labels",action:()=>e.settings.value.displayEdgeLabels=!e.settings.value.displayEdgeLabels,color:()=>e.settings.value.displayEdgeLabels?"green":"orange",id:m.edgeLabels},n={label:()=>e.settings.value.edgeLabelsEditable?"Edge Labels Editable":"Edge Labels Not Editable",action:()=>e.settings.value.edgeLabelsEditable=!e.settings.value.edgeLabelsEditable,color:()=>e.settings.value.edgeLabelsEditable?"green":"orange",id:m.edgeLabelsEditable},i={label:()=>e.settings.value.userEditable?"Editable":"Not Editable",action:()=>e.settings.value.userEditable=!e.settings.value.userEditable,color:()=>e.settings.value.userEditable?"green":"orange",id:m.userEditable},p={cond:()=>!!e.settings.value.userEditable,label:()=>D(e.settings.value.userEditableAddedEdgeType),action:()=>{e.settings.value.userEditableAddedEdgeType==="directed"?e.settings.value.userEditableAddedEdgeType="undirected":e.settings.value.userEditableAddedEdgeType="directed"},color:()=>{const{userEditableAddedEdgeType:f}=e.settings.value;return f==="directed"?"blue":"purple"},id:m.edgeType},h={cond:()=>!!e.settings.value.userEditable,label:()=>{const{userEditableAddedEdgeLabel:f}=e.settings.value;return`Change Added Edge Weight (${f})`},action:()=>{e.settings.value.userEditableAddedEdgeLabel=H(1,10).toString()},color:()=>"green",id:m.edgeWeight},a={label:()=>`Change Node Size (${e.theme.value.nodeSize})`,action:()=>e.theme.value.nodeSize=H(20,50),color:()=>"pink",id:m.nodeSize},v={label:()=>{const{persistentStorageKey:f}=e.settings.value;return`Change Storage Key (${f})`},action:()=>{const{persistentStorageKey:f}=e.settings.value,E=f==="graph"?"graph2":"graph";e.settings.value.persistentStorageKey=E},color:()=>"blue",id:m.storageKey},d={label:()=>"Clear Local Storage",action:()=>localStorage.clear(),color:()=>"red",id:m.clearLocalStorage},g={label:()=>"Clone Search Visualizer Graph",action:()=>{e.settings.value.persistentStorageKey="search-visualizer-graph"},color:()=>"amber",id:m.persistentGraphClone},y={label:()=>{const{collaborativeRoomId:f,collaboratorCount:E,inCollaborativeRoom:w}=e,z=`Leave ${f.value} Room (${E.value+1} In Room)`;return w.value?z:"Join Test Room"},action:()=>{const f=P(X),E=P(K);e.meAsACollaborator.value.name=f,e.meAsACollaborator.value.color=E;const{joinCollaborativeRoom:w,leaveCollaborativeRoom:z,inCollaborativeRoom:O}=e;O.value?z():w("Test")},color:()=>e.inCollaborativeRoom.value?"red":"green",id:m.testRoom},k={label:()=>"Log",action:()=>{console.log(JSON.stringify(e.collaborators.value,null,2)),console.log(JSON.stringify(e.collaboratorCount.value,null,2)),console.log(JSON.stringify(e.meAsACollaborator.value,null,2))},color:()=>"blue",id:m.log},{toggleColorize:U,isColorized:B,startNode:Y}=Ve(e),G={reset:t,clearLocalStorage:d,changeNodeSize:a,toggleEdgeLabelDisplay:l,toggleEdgeLabelsEditable:n,toggleDraggable:o,toggleNodeAnchors:s,toggleUserEditable:i,toggleEdgeType:p,changeEdgeWeight:h,changeStorageKey:v,persistentGraphClone:g,toggleTestRoom:y,bfsColorize:{label:()=>{const f="Colorize",E=e.getNode(Y.value),w=`Stop Colorizing (${E==null?void 0:E.label})`;return B.value?w:f},color:()=>B.value?"red":"pink",action:U,id:"toggle-bfs-colorize"},log:k},Z=Object.values(G);return{...G,btnArr:Z}},Ue=["onClick","id"],ze={class:"select-none"},De=S({__name:"GraphBtns",props:{btns:{}},setup(e){const t=o=>o?o():!0;return(o,s)=>(r(!0),u($,null,I(o.btns,l=>(r(),u("div",null,[t(l.cond)?(r(),u("button",{key:0,onClick:ae(l.action,["stop"]),class:N(`bg-${l.color()}-600 text-white px-3 py-1 rounded-lg font-bold`),id:l.id},[c("span",ze,A(l.label()),1)],10,Ue)):T("",!0)]))),256))}}),Be={class:"my-2 px-4"},Ge={class:"text-white mb-2"},Oe={class:"font-bold text-lg"},Pe={class:"text-md"},He={key:3,class:"text-red-500 font-bold"},Me=S({__name:"ThemeControls",props:{graph:{}},setup(e){return(t,o)=>(r(!0),u($,null,I(t.graph.theme.value,(s,l)=>(r(),u("div",Be,[c("div",Ge,[c("h3",Oe,A(b(J)(l)),1),c("h4",Pe,A(s),1)]),typeof s=="string"&&l.toLowerCase().includes("color")?(r(),R(j,{key:0,modelValue:t.graph.theme.value[l],"onUpdate:modelValue":n=>t.graph.theme.value[l]=n,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="string"?(r(),R(q,{key:1,modelValue:t.graph.theme.value[l],"onUpdate:modelValue":n=>t.graph.theme.value[l]=n},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="number"?(r(),R(me,{key:2,modelValue:t.graph.theme.value[l],"onUpdate:modelValue":n=>t.graph.theme.value[l]=n,style:{width:"100%"},min:0,max:100},null,8,["modelValue","onUpdate:modelValue"])):(r(),u("h5",He," Not Supported "))]))),256))}}),Q=S({__name:"InputCheckbox",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=re(e,"modelValue");return(o,s)=>ie((r(),u("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),type:"checkbox"},null,512)),[[de,t.value]])}}),Fe=["onClick"],We={class:"text-white font-bold"},je=S({__name:"GraphPlaygroundControls",props:{playgroundControls:{}},setup(e){return(t,o)=>(r(!0),u($,null,I(t.playgroundControls,(s,l)=>(r(),u("div",{class:"flex gap-3 items-center pl-3 py-2 hover:bg-gray-800 cursor-pointer",onClick:n=>t.playgroundControls[l]=!t.playgroundControls[l]},[_(Q,{modelValue:t.playgroundControls[l],"onUpdate:modelValue":n=>t.playgroundControls[l]=n,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"]),c("h2",We,A(b(D)(l)),1)],8,Fe))),256))}}),qe={class:"my-2 px-4"},Je={class:"text-white mb-2"},Qe={class:"font-bold text-lg"},Ye={class:"text-md"},Ze={key:3,class:"text-red-500 font-bold"},Xe=S({__name:"SettingsControls",props:{graph:{}},setup(e){return(t,o)=>(r(!0),u($,null,I(t.graph.settings.value,(s,l)=>(r(),u("div",qe,[c("div",Je,[c("h3",Qe,A(b(J)(l)),1),c("h4",Ye,A(s),1)]),typeof s=="string"&&l.toLowerCase().includes("color")?(r(),R(j,{key:0,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":n=>t.graph.settings.value[l]=n,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="string"?(r(),R(q,{key:1,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":n=>t.graph.settings.value[l]=n},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="boolean"?(r(),R(Q,{key:2,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":n=>t.graph.settings.value[l]=n,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"])):(r(),u("h5",Ze," Not Supported "))]))),256))}}),Ke={class:"relative w-full h-full"},et={class:"w-full h-full absolute"},tt={key:0,class:"absolute flex gap-2 m-2 flex flex-wrap w-[85%]"},ot={key:1,class:"absolute bottom-0 right-0 flex gap-2 h-8 m-2"},lt={key:2,class:"bottom-0 absolute flex gap-2 m-2"},st={key:3,class:"absolute w-full dark:text-white bottom-[10%] grid place-items-center pointer-events-none"},nt={class:"absolute h-3/4 top-[100px] right-0"},at={key:0,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl mb-3"},rt={key:1,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl"},it={class:"absolute w-[150px] top-1/4 overflow-auto bg-gray-800 bg-opacity-80 rounded-r-xl"},ht=S({__name:"GraphPlayground",setup(e){const t=L(),o=ee(t,{settings:{edgeInputToLabel:i=>{if(oe(i))return i;if(!isNaN(Number(i)))return i}}}),s=Ae(o),{btnArr:l}=Ie(o),n=ge("graph-playground-controls",{tutorial:!0,theme:!0,settings:!0,collab:!0,buttons:!0});return(i,p)=>(r(),u("div",Ke,[c("div",et,[_(te,{onGraphRef:p[0]||(p[0]=h=>t.value=h),graph:b(o)},null,8,["graph"])]),b(n).buttons?(r(),u("div",tt,[_(De,{btns:b(l)},null,8,["btns"])])):T("",!0),b(n).collab?(r(),u("div",ot,[_(ve,{graph:b(o)},null,8,["graph"])])):T("",!0),b(n).tutorial?(r(),u("div",lt,[_(Ne,{tutorial:b(s)},null,8,["tutorial"])])):T("",!0),b(n).tutorial?(r(),u("div",st,[_(we,{tutorial:b(s)},null,8,["tutorial"])])):T("",!0),c("div",nt,[b(n).theme?(r(),u("div",at,[_(Me,{graph:b(o)},null,8,["graph"])])):T("",!0),b(n).settings?(r(),u("div",rt,[_(Xe,{graph:b(o)},null,8,["graph"])])):T("",!0)]),c("div",it,[_(je,{playgroundControls:b(n)},null,8,["playgroundControls"])])]))}});export{ht as default};
