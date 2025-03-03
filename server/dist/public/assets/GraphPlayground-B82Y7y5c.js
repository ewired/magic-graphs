import{P as H,R as j,x as R,d as h,o as n,c as r,b as m,w as y,e as x,y as i,z as c,F as V,f as k,A as v,a as p,t as f,B as W,C as E,D as $,E as w,G as A,H as F,I as Q,J as G,K as J,g as B,L as D,M as Y,N as q}from"./index-eN2tjum9.js";import{T as S,u as X,i as Z,_ as K}from"./Graph.vue_vue_type_script_setup_true_lang-DqWQo0cf.js";import{u as ee,c as N,a as te}from"./string-DUGnO1NF.js";import{T as oe,_ as le}from"./TutorialHint.vue_vue_type_script_setup_true_lang-DPcSMWrm.js";import{_ as C}from"./Button.vue_vue_type_script_setup_true_lang-1BThBt5h.js";import{_ as se}from"./InputRange.vue_vue_type_script_setup_true_lang-C5q9PKoZ.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-UUvp_of4.js";const _={reset:"reset",draggable:"draggable",nodeAnchors:"node-anchors",edgeLabels:"edge-labels",edgeLabelsEditable:"edge-labels-editable",edgeWeight:"edge-weight",nodeSize:"node-size",storageKey:"storage-key",clearLocalStorage:"clear-local-storage",persistentGraphClone:"persistent-graph-clone",log:"log",bfsColorize:"toggle-bfs-colorize"},ae=e=>({greeting:{hint:"Welcome to the graph editor tutorial",dismiss:"onClick"},goodbye:{hint:"Have fun editing graphs!",dismiss:"onTimeout",after:3e3},createNode:{hint:"Double click anywhere to add a node",dismiss:"onNodeAdded"},moveNode:{hint:"Drag a node to move it",dismiss:"onNodeDrop"},createEdge:{hint:"Create an edge by dragging an anchor onto another node",dismiss:"onEdgeAdded"},createSelfDirectedEdge:{hint:'You can even create self directed edges! Make sure you are in "directed" mode and drag an anchor inwards',dismiss:{event:"onEdgeAdded",predicate:t=>t.to===t.from}},editEdgeWeight:{hint:"Edit the edge weight by clicking on it and typing a number",dismiss:"onEdgeLabelEdited"},removeElement:ne(e)}),ne=e=>{let t=!1;const o=()=>t=!0,{setTheme:s,removeAllThemes:l}=R(e,oe);return{hint:"Remove an edge or node by clicking on it and hitting backspace/delete",dismiss:{event:"onInterval",predicate:()=>t},onInit:()=>{t=!1,s("nodeAnchorColor",a=>a.label==="1"?H:j),e.subscribe("onEdgeRemoved",o),e.subscribe("onNodeRemoved",o)},onDismiss:()=>{l(),e.unsubscribe("onEdgeRemoved",o),e.unsubscribe("onNodeRemoved",o)}}},re=e=>{const{greeting:t,createNode:o,moveNode:s,createEdge:l,createUndirectedEdge:a,editEdgeWeight:d,removeElement:g,goodbye:u}=ae(e);return[t,o,s,l,a,d,g,u]},de=e=>({basics:re(e)}),ie=e=>ee(e,de(e).basics),ue=h({__name:"TutorialControls",props:{tutorial:{}},setup(e){return(t,o)=>(n(),r(V,null,[m(C,{onClick:t.tutorial.prevStep,color:i(c).BLUE_600},{default:y(()=>o[0]||(o[0]=[x(" Previous Step ")])),_:1},8,["onClick","color"]),m(C,{onClick:t.tutorial.nextStep,color:i(c).BLUE_600},{default:y(()=>o[1]||(o[1]=[x(" Next Step ")])),_:1},8,["onClick","color"]),m(C,{onClick:t.tutorial.stop,color:i(c).BLUE_600},{default:y(()=>o[2]||(o[2]=[x(" End Tutorial ")])),_:1},8,["onClick","color"]),m(C,{onClick:t.tutorial.start,color:i(c).BLUE_600},{default:y(()=>o[3]||(o[3]=[x(" Restart Tutorial ")])),_:1},8,["onClick","color"])],64))}}),ce=e=>{const t={label:()=>"Reset",action:()=>e.reset(),color:()=>c.RED_600,id:_.reset},o={label:()=>e.settings.value.draggable?"Draggable":"Not Draggable",action:()=>e.settings.value.draggable=!e.settings.value.draggable,color:()=>e.settings.value.draggable?c.GREEN_600:c.ORANGE_600,id:_.draggable},s={label:()=>e.settings.value.nodeAnchors?"Anchors":"No Anchors",action:()=>e.settings.value.nodeAnchors=!e.settings.value.nodeAnchors,color:()=>e.settings.value.nodeAnchors?c.GREEN_600:c.ORANGE_600,id:_.nodeAnchors},l={label:()=>e.settings.value.displayEdgeLabels?"Edge Labels":"No Edge Labels",action:()=>e.settings.value.displayEdgeLabels=!e.settings.value.displayEdgeLabels,color:()=>e.settings.value.displayEdgeLabels?c.GREEN_600:c.ORANGE_600,id:_.edgeLabels},a={label:()=>e.settings.value.edgeLabelsEditable?"Edge Labels Editable":"Edge Labels Not Editable",action:()=>e.settings.value.edgeLabelsEditable=!e.settings.value.edgeLabelsEditable,color:()=>e.settings.value.edgeLabelsEditable?c.GREEN_600:c.ORANGE_600,id:_.edgeLabelsEditable},d={label:()=>{const{persistentStorageKey:L}=e.settings.value;return`Change Storage Key (${L})`},action:()=>{const{persistentStorageKey:L}=e.settings.value,z=L==="graph"?"graph2":"graph";e.settings.value.persistentStorageKey=z},color:()=>c.PURPLE_600,id:_.storageKey},g={label:()=>"Clear Local Storage",action:()=>localStorage.clear(),color:()=>c.RED_600,id:_.clearLocalStorage},u={label:()=>"Clone Search Visualizer Graph",action:()=>{e.settings.value.persistentStorageKey="search-visualizer-graph"},color:()=>c.AMBER_600,id:_.persistentGraphClone},b={label:()=>"Log",action:()=>{},color:()=>c.BLUE_600,id:_.log},T={reset:t,clearLocalStorage:g,toggleEdgeLabelDisplay:l,toggleEdgeLabelsEditable:a,toggleDraggable:o,toggleNodeAnchors:s,changeStorageKey:d,persistentGraphClone:u,log:b},P=Object.values(T);return{...T,btnArr:P}},pe={class:"select-none"},ge=h({__name:"GraphBtns",props:{btns:{}},setup(e){const t=o=>o?o():!0;return(o,s)=>(n(!0),r(V,null,k(o.btns,l=>(n(),r("div",null,[t(l.cond)?(n(),v(C,{key:0,onClick:W(l.action,["stop"]),color:l.color(),"text-color":"white",id:l.id},{default:y(()=>[p("span",pe,f(l.label()),1)]),_:2},1032,["onClick","color","id"])):E("",!0)]))),256))}}),me=["value"],U="#000000",I=h({__name:"InputColor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=$(e,"modelValue"),o=w({get:()=>t.value,set:d=>t.value=d}),s=w(()=>{if(o.value){if(A(o.value))return o.value.slice(7)}else return"";return""}),l=w(()=>{if(o.value){if(A(o.value))return o.value.slice(0,7);if(F(o.value))return o.value}else return U;return U}),a=d=>{d.target instanceof HTMLInputElement&&(o.value=d.target.value+s.value)};return(d,g)=>(n(),r("input",{onInput:a,value:l.value,type:"color",class:Q("p-1 w-10 h-full rounded-md appearance-none")},null,40,me))}}),M=h({__name:"InputText",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=$(e,"modelValue");return(o,s)=>G((n(),r("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),type:"text",class:"p-1 border border-gray-300 rounded-md"},null,512)),[[J,t.value]])}}),_e={class:"px-4 my-2"},he={class:"my-2"},be={class:"flex flex-wrap gap-3"},ve=["onClick"],fe={class:"my-2"},Ee={class:"text-white mb-2"},ye={class:"font-bold text-lg"},Ce={class:"text-md"},Ve={key:3,class:"text-red-500 font-bold"},xe=h({__name:"ThemeControls",props:{graph:{}},setup(e){const t=e,{setTheme:o}=R(t.graph,"playground-theme-controls"),s=B(S[t.graph.themeName.value]);return D(s,()=>{const a=Object.entries(s.value);for(const[d,g]of a)o(d,g)},{deep:!0}),(a,d)=>(n(),r("div",_e,[d[1]||(d[1]=p("div",null,[p("h2",{class:"text-2xl font-bold text-white"},"Theme Controls")],-1)),p("div",he,[d[0]||(d[0]=p("div",{class:"mb-2"},[p("h1",{class:"text-xl font-bold text-white"},"Presets")],-1)),p("div",be,[(n(!0),r(V,null,k(i(S),(g,u)=>(n(),r("div",{onClick:b=>a.graph.themeName.value=u},[m(C,{style:{width:"120px","text-align":"center"}},{default:y(()=>[x(f(i(N)(u)),1)]),_:2},1024)],8,ve))),256))])]),(n(!0),r(V,null,k(i(S)[a.graph.themeName.value],(g,u)=>(n(),r("div",fe,[p("div",Ee,[p("h3",ye,f(i(N)(u)),1),p("h4",Ce,f(g),1)]),typeof g=="string"&&u.toLowerCase().includes("color")?(n(),v(I,{key:0,modelValue:s.value[u],"onUpdate:modelValue":b=>s.value[u]=b,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof g=="string"?(n(),v(M,{key:1,modelValue:s.value[u],"onUpdate:modelValue":b=>s.value[u]=b},null,8,["modelValue","onUpdate:modelValue"])):typeof g=="number"?(n(),v(se,{key:2,modelValue:s.value[u],"onUpdate:modelValue":b=>s.value[u]=b,style:{width:"100%"},min:0,max:100},null,8,["modelValue","onUpdate:modelValue"])):(n(),r("h5",Ve," Not Supported "))]))),256))]))}}),O=h({__name:"InputCheckbox",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=$(e,"modelValue");return(o,s)=>G((n(),r("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),type:"checkbox"},null,512)),[[Y,t.value]])}}),ke=["onClick"],Le={class:"text-white font-bold"},we=h({__name:"GraphPlaygroundControls",props:{playgroundControls:{}},setup(e){return(t,o)=>(n(!0),r(V,null,k(t.playgroundControls,(s,l)=>(n(),r("div",{class:"flex gap-3 items-center pl-3 py-2 hover:bg-gray-800 cursor-pointer",onClick:a=>t.playgroundControls[l]=!t.playgroundControls[l]},[m(O,{modelValue:t.playgroundControls[l],"onUpdate:modelValue":a=>t.playgroundControls[l]=a,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"]),p("h2",Le,f(i(te)(l)),1)],8,ke))),256))}}),Se={class:"my-2 px-4"},Ne={class:"text-white mb-2"},$e={class:"font-bold text-lg"},Te={class:"text-md"},Ae={key:3,class:"text-red-500 font-bold"},Ue=h({__name:"SettingsControls",props:{graph:{}},setup(e){return(t,o)=>(n(!0),r(V,null,k(t.graph.settings.value,(s,l)=>(n(),r("div",Se,[p("div",Ne,[p("h3",$e,f(i(N)(l)),1),p("h4",Te,f(s),1)]),typeof s=="string"&&l.toLowerCase().includes("color")?(n(),v(I,{key:0,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":a=>t.graph.settings.value[l]=a,style:{width:"100px",height:"30px"}},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="string"?(n(),v(M,{key:1,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":a=>t.graph.settings.value[l]=a},null,8,["modelValue","onUpdate:modelValue"])):typeof s=="boolean"?(n(),v(O,{key:2,modelValue:t.graph.settings.value[l],"onUpdate:modelValue":a=>t.graph.settings.value[l]=a,class:"h-6 w-6 rounded-xl cursor-pointer"},null,8,["modelValue","onUpdate:modelValue"])):(n(),r("h5",Ae," Not Supported "))]))),256))}}),Re={class:"relative w-full h-full"},Ge={class:"w-full h-full absolute"},Be={key:0,class:"absolute flex gap-2 m-2 flex-wrap w-[85%]"},De={key:1,class:"bottom-0 absolute flex gap-2 m-2"},Ie={key:2,class:"absolute w-full dark:text-white bottom-[10%] grid place-items-center pointer-events-none"},Me={class:"absolute h-3/4 top-[100px] right-0"},Oe={key:0,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl mb-3"},Pe={key:1,class:"w-[325px] h-1/2 overflow-auto bg-gray-800 bg-opacity-80 rounded-l-xl"},ze={class:"absolute w-[150px] top-1/4 overflow-auto bg-gray-800 bg-opacity-80 rounded-r-xl"},qe=h({__name:"GraphPlayground",setup(e){const t=B(),o=X(t,{edgeInputToLabel:d=>{if(Z(d))return d;if(!isNaN(Number(d)))return d}}),s=ie(o),{btnArr:l}=ce(o),a=q("graph-playground-controls",{tutorial:!0,theme:!0,settings:!0,buttons:!0});return D(a,()=>{a.value.tutorial?s.start():s.stop()},{immediate:!0,deep:!0}),(d,g)=>(n(),r("div",Re,[p("div",Ge,[m(K,{onGraphRef:g[0]||(g[0]=u=>t.value=u),graph:i(o)},null,8,["graph"])]),i(a).buttons?(n(),r("div",Be,[m(ge,{btns:i(l)},null,8,["btns"])])):E("",!0),i(a).tutorial?(n(),r("div",De,[m(ue,{tutorial:i(s)},null,8,["tutorial"])])):E("",!0),i(a).tutorial?(n(),r("div",Ie,[m(le,{tutorial:i(s)},null,8,["tutorial"])])):E("",!0),p("div",Me,[i(a).theme?(n(),r("div",Oe,[m(xe,{graph:i(o)},null,8,["graph"])])):E("",!0),i(a).settings?(n(),r("div",Pe,[m(Ue,{graph:i(o)},null,8,["graph"])])):E("",!0)]),p("div",ze,[m(we,{playgroundControls:i(a)},null,8,["playgroundControls"])])]))}});export{qe as default};
