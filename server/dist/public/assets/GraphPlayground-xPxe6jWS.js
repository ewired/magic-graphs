import{P as H,R as W,x as R,d as v,o as a,c as r,b as _,w as C,e as k,y as d,z as u,F as V,f as L,A as f,a as c,t as E,B as j,C as y,D as T,E as S,G as A,H as F,I as Q,J as G,K as J,g as B,L as D,M as Y,N as q}from"./index-DAJZ_K5C.js";import{T as N,u as X,i as Z,_ as K}from"./Graph.vue_vue_type_script_setup_true_lang-yly3OVGE.js";import{u as ee,c as $,a as te}from"./string-DtqXzD9X.js";import{T as oe,_ as le}from"./TutorialHint.vue_vue_type_script_setup_true_lang-CroZVOt1.js";import{_ as x}from"./Button.vue_vue_type_script_setup_true_lang-CmEZyfCP.js";import{_ as se}from"./InputRange.vue_vue_type_script_setup_true_lang-BhIGKjhD.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-BcNxhsJR.js";const h={reset:"reset",draggable:"draggable",nodeAnchors:"node-anchors",edgeLabels:"edge-labels",edgeLabelsEditable:"edge-labels-editable",edgeWeight:"edge-weight",nodeSize:"node-size",storageKey:"storage-key",clearLocalStorage:"clear-local-storage",persistentGraphClone:"persistent-graph-clone",log:"log",bfsColorize:"toggle-bfs-colorize"},ae=e=>({greeting:{hint:"Welcome to the graph editor tutorial",dismiss:"onClick"},goodbye:{hint:"Have fun editing graphs!",dismiss:"onTimeout",after:3e3},createNode:{hint:"Double click anywhere to add a node",dismiss:"onNodeAdded"},moveNode:{hint:"Drag a node to move it",dismiss:"onNodeDrop"},createEdge:{hint:"Create an edge by dragging an anchor onto another node",dismiss:"onEdgeAdded"},createSelfDirectedEdge:{hint:'You can even create self directed edges! Make sure you are in "directed" mode and drag an anchor inwards',dismiss:{event:"onEdgeAdded",predicate:t=>t.to===t.from}},editEdgeWeight:{hint:"Edit the edge weight by clicking on it and typing a number",dismiss:"onEdgeLabelEdited"},removeElement:ne(e)}),ne=e=>{let t=!1;const o=()=>t=!0,{setTheme:s,removeAllThemes:l}=R(e,oe);return{hint:"Remove an edge or node by clicking on it and hitting backspace/delete",dismiss:{event:"onInterval",predicate:()=>t},onInit:()=>{t=!1,s("nodeAnchorColor",n=>n.label==="1"?H:W),e.subscribe("onEdgeRemoved",o),e.subscribe("onNodeRemoved",o)},onDismiss:()=>{l(),e.unsubscribe("onEdgeRemoved",o),e.unsubscribe("onNodeRemoved",o)}}},re=e=>{const{greeting:t,createNode:o,moveNode:s,createEdge:l,createUndirectedEdge:n,editEdgeWeight:i,removeElement:p,goodbye:m}=ae(e);return[t,o,s,l,n,i,p,m]},de=e=>({basics:re(e)}),ie=e=>ee(e,de(e).basics),ue=v({__name:"TutorialControls",props:{tutorial:{}},setup(e){return(t,o)=>(a(),r(V,null,[_(x,{onClick:t.tutorial.prevStep,color:d(u).BLUE_600},{default:C(()=>o[0]||(o[0]=[k(" Previous Step ")])),_:1},8,["onClick","color"]),_(x,{onClick:t.tutorial.nextStep,color:d(u).BLUE_600},{default:C(()=>o[1]||(o[1]=[k(" Next Step ")])),_:1},8,["onClick","color"]),_(x,{onClick:t.tutorial.stop,color:d(u).BLUE_600},{default:C(()=>o[2]||(o[2]=[k(" End Tutorial ")])),_:1},8,["onClick","color"]),_(x,{onClick:t.tutorial.start,color:d(u).BLUE_600},{default:C(()=>o[3]||(o[3]=[k(" Restart Tutorial ")])),_:1},8,["onClick","color"])],64))}}),ce=e=>{const t={label:()=>"Reset",action:()=>e.reset(),color:()=>u.RED_600,id:h.reset},o={label:()=>e.settings.value.draggable?"Draggable":"Not Draggable",action:()=>e.settings.value.draggable=!e.settings.value.draggable,color:()=>e.settings.value.draggable?u.GREEN_600:u.ORANGE_600,id:h.draggable},s={label:()=>e.settings.value.nodeAnchors?"Anchors":"No Anchors",action:()=>e.settings.value.nodeAnchors=!e.settings.value.nodeAnchors,color:()=>e.settings.value.nodeAnchors?u.GREEN_600:u.ORANGE_600,id:h.nodeAnchors},l={label:()=>e.settings.value.displayEdgeLabels?"Edge Labels":"No Edge Labels",action:()=>e.settings.value.displayEdgeLabels=!e.settings.value.displayEdgeLabels,color:()=>e.settings.value.displayEdgeLabels?u.GREEN_600:u.ORANGE_600,id:h.edgeLabels},n={label:()=>e.settings.value.edgeLabelsEditable?"Edge Labels Editable":"Edge Labels Not Editable",action:()=>e.settings.value.edgeLabelsEditable=!e.settings.value.edgeLabelsEditable,color:()=>e.settings.value.edgeLabelsEditable?u.GREEN_600:u.ORANGE_600,id:h.edgeLabelsEditable},i={label:()=>{const{persistentStorageKey:w}=e.settings.value;return`Change Storage Key (${w})`},action:()=>{const{persistentStorageKey:w}=e.settings.value,z=w==="graph"?"graph2":"graph";e.settings.value.persistentStorageKey=z},color:()=>u.PURPLE_600,id:h.storageKey},p={label:()=>"Clear Local Storage",action:()=>localStorage.clear(),color:()=>u.RED_600,id:h.clearLocalStorage},m={label:()=>"Clone Search Visualizer Graph",action:()=>{e.settings.value.persistentStorageKey="search-visualizer-graph"},color:()=>u.AMBER_600,id:h.persistentGraphClone},g={label:()=>"Log",action:()=>{},color:()=>u.BLUE_600,id:h.log},b={reset:t,clearLocalStorage:p,toggleEdgeLabelDisplay:l,toggleEdgeLabelsEditable:n,toggleDraggable:o,toggleNodeAnchors:s,changeStorageKey:i,persistentGraphClone:m,log:g},P=Object.values(b);return{...b,btnArr:P}},pe={class:"select-none"},ge=v({__name:"GraphBtns",props:{btns:{}},setup(e){const t=o=>o?o():!0;return(o,s)=>(a(!0),r(V,null,L(o.btns,l=>(a(),r("div",null,[t(l.cond)?(a(),f(x,{key:0,onClick:j(l.action,["stop"]),color:l.color(),"text-color":"white",id:l.id},{default:C(()=>[c("span",pe,E(l.label()),1)]),_:2},1032,["onClick","color","id"])):y("",!0)]))),256))}}),me=["value"],U="#000000",I=v({__name:"InputColor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=T(e,"modelValue"),o=S({get:()=>t.value,set:i=>t.value=i}),s=S(()=>{if(o.value){if(A(o.value))return o.value.slice(7)}else return"";return""}),l=S(()=>{if(o.value){if(A(o.value))return o.value.slice(0,7);if(F(o.value))return o.value}else return U;return U}),n=i=>{i.target instanceof HTMLInputElement&&(o.value=i.target.value+s.value)};return(i,p)=>(a(),r("input",{onInput:n,value:l.value,type:"color",class:Q("p-1 w-10 h-full rounded-md appearance-none")},null,40,me))}}),M=v({__name:"InputText",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=T(e,"modelValue");return(o,s)=>G((a(),r("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),type:"text",class:"p-1 border border-gray-300 rounded-md"},null,512)),[[J,t.value]])}}),_e={class:"px-4 my-2"},be={class:"my-2"},he={class:"flex flex-wrap gap-3"},ve=["onClick"],fe={class:"text-white mb-2"},Ee={class:"font-bold text-lg"},ye={class:"text-md"},Ce={key:3,class:"text-red-500 font-bold"},xe=v({__name:"ThemeControls",props:{graph:{}},setup(e){const t=e,{setTheme:o}=R(t.graph,"playground-theme-controls"),s=B(N[t.graph.themeName.value]),l=()=>{const i=Object.entries(s.value);for(const[p,m]of i)o(p,m)},n=i=>{const{themeName:p}=t.graph;p.value=i};return D(s,l,{deep:!0}),(i,p)=>(a(),r("div",_e,[p[1]||(p[1]=c("div",null,[c("h2",{class:"text-2xl font-bold text-white"},"Theme Controls")],-1)),c("div",be,[p[0]||(p[0]=c("div",{class:"mb-2"},[c("h1",{class:"text-xl font-bold text-white"},"Presets")],-1)),c("div",he,[(a(!0),r(V,null,L(d(N),(m,g)=>(a(),r("div",{key:g,onClick:b=>n(g)},[_(x,{style:{width:"120px","text-align":"center"}},{default:C(()=>[k(E(d($)(g)),1)]),_:2},1024)],8,ve))),128))])]),(a(!0),r(V,null,L(d(N)[i.graph.themeName.value],(m,g)=>(a(),r("div",{key:g,class:"my-2"},[c("div",fe,[c("h3",Ee,E(d($)(g)),1),c("h4",ye,E(m),1)]),typeof m=="string"&&g.toLowerCase().includes("color")?(a(),f(I,{key:0,modelValue:s.value[g],"onUpdate:modelValue":b=>s.value[g]=b,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof m=="string"?(a(),f(M,{key:1,modelValue:s.value[g],"onUpdate:modelValue":b=>s.value[g]=b},null,8,["modelValue","onUpdate:modelValue"])):typeof m=="number"?(a(),f(se,{key:2,modelValue:s.value[g],"onUpdate:modelValue":b=>s.value[g]=b,style:{width:"100%"},min:0,max:100},null,8,["modelValue","onUpdate:modelValue"])):(a(),r("h5",Ce," Not Supported "))]))),128))]))}}),O=v({__name:"InputCheckbox",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=T(e,"modelValue");return(o,s)=>G((a(),r("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),type:"checkbox"},null,512)),[[Y,t.value]])}}),Ve=["onClick"],ke={class:"text-white font-bold"},Le=v({__name:"GraphPlaygroundControls",props:{playgroundControls:{}},setup(e){return(t,o)=>(a(!0),r(V,null,L(t.playgroundControls,(s,l)=>(a(),r("div",{class:"flex gap-3 items-center pl-3 py-2 hover:bg-gray-800 cursor-pointer",onClick:n=>t.playgroundControls[l]=!t.playgroundControls[l]},[_(O,{modelValue:t.playgroundControls[l],"onUpdate:modelValue":n=>t.playgroundControls[l]=n,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"]),c("h2",ke,E(d(te)(l)),1)],8,Ve))),256))}}),we={class:"my-2 px-4"},Se={class:"text-white mb-2"},Ne={class:"font-bold text-lg"},$e={class:"text-md"},Te={key:3,class:"text-red-500 font-bold"},Ae=v({__name:"SettingsControls",props:{graph:{}},setup(e){return(t,o)=>(a(!0),r(V,null,L(t.graph.settings.value,(s,l)=>(a(),r("div",we,[c("div",Se,[c("h3",Ne,E(d($)(l)),1),c("h4",$e,E(s),1)]),typeof s=="string"&&l.toLowerCase().includes("color")?(a(),f(I,{key:0,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":n=>t.graph.settings.value[l]=n,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="string"?(a(),f(M,{key:1,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":n=>t.graph.settings.value[l]=n},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="boolean"?(a(),f(O,{key:2,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":n=>t.graph.settings.value[l]=n,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"])):(a(),r("h5",Te," Not Supported "))]))),256))}}),Ue={class:"relative w-full h-full"},Re={class:"w-full h-full absolute"},Ge={key:0,class:"absolute flex gap-2 m-2 flex-wrap w-[85%]"},Be={key:1,class:"bottom-0 absolute flex gap-2 m-2"},De={key:2,class:"absolute w-full dark:text-white bottom-[10%] grid place-items-center pointer-events-none"},Ie={class:"absolute h-3/4 top-[100px] right-0"},Me={key:0,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl mb-3"},Oe={key:1,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl"},Pe={class:"absolute w-[150px] top-1/4 overflow-auto bg-gray-800 bg-opacity-80 rounded-r-xl"},Ye=v({__name:"GraphPlayground",setup(e){const t=B(),o=X(t,{edgeInputToLabel:i=>{if(Z(i))return i;if(!isNaN(Number(i)))return i}}),s=ie(o),{btnArr:l}=ce(o),n=q("graph-playground-controls",{tutorial:!0,theme:!0,settings:!0,buttons:!0});return D(n,()=>{n.value.tutorial?s.start():s.stop()},{immediate:!0,deep:!0}),(i,p)=>(a(),r("div",Ue,[c("div",Re,[_(K,{onGraphRef:p[0]||(p[0]=m=>t.value=m),graph:d(o)},null,8,["graph"])]),d(n).buttons?(a(),r("div",Ge,[_(ge,{btns:d(l)},null,8,["btns"])])):y("",!0),d(n).tutorial?(a(),r("div",Be,[_(ue,{tutorial:d(s)},null,8,["tutorial"])])):y("",!0),d(n).tutorial?(a(),r("div",De,[_(le,{tutorial:d(s)},null,8,["tutorial"])])):y("",!0),c("div",Ie,[d(n).theme?(a(),r("div",Me,[_(xe,{graph:d(o)},null,8,["graph"])])):y("",!0),d(n).settings?(a(),r("div",Oe,[_(Ae,{graph:d(o)},null,8,["graph"])])):y("",!0)]),c("div",Pe,[_(Le,{playgroundControls:d(n)},null,8,["playgroundControls"])])]))}});export{Ye as default};
