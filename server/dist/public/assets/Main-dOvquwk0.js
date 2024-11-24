import{b as Q,B as ee,u as te,_ as oe}from"./Graph.vue_vue_type_script_setup_true_lang-CUyRv0uI.js";import{_ as se}from"./SimulationPlaybackControls.vue_vue_type_script_setup_true_lang-4mEOa_wU.js";import{_ as T,o as u,c as m,V as w,e as h,r as S,b as a,w as i,v as k,M as ne,H as v,F as C,f as z,G as _,a as p,B as x,d as $,t as M,u as G,W as ae,X as R,I as N,g as B,E as A,Y as V,Z as re,h as D,i as L,j,k as O,l as H,m as U,n as F,p as P,q as W,s as X}from"./index-Bdg9Ig9r.js";import{_ as le,u as ie}from"./TutorialHint.vue_vue_type_script_setup_true_lang-4bJG0z_t.js";import{u as Z}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-C425ouiW.js";import"./Button.vue_vue_type_script_setup_true_lang-B3saCR9P.js";const ue={},de={class:"flex items-center gap-2 bg-gray-800 py-1 px-1 rounded-lg"};function ce(l,e){return u(),m("div",de,[w(l.$slots,"default")])}const q=T(ue,[["render",ce]]),pe=["disabled"],b=h({__name:"ToolbarButton",props:{active:{type:Boolean},disabled:{type:Boolean}},setup(l){return(e,s)=>{const n=S("v-icon");return u(),m("button",{disabled:e.disabled,class:k(["text-white","p-2","rounded-md",e.disabled?"text-opacity-50":"",e.disabled?"":"hover:bg-gray-900",e.disabled?"cursor-not-allowed":"cursor-pointer",e.active?"bg-gray-900":"bg-gray-800"])},[a(n,null,{default:i(()=>[w(e.$slots,"default")]),_:3})],10,pe)}}}),_e={},me={class:"w-[1px] h-6 bg-white bg-opacity-20 mx-1"};function ge(l,e){return u(),m("div",me)}const I=T(_e,[["render",ge]]),fe={};function ve(l,e){return u(),m("div",{class:k("flex items-center relative "+l.$attrs.class)},[w(l.$slots,"default")],2)}const y=T(fe,[["render",ve]]),he={class:k(["rounded-full","p-[3px]"])},be=h({__name:"AnnotationControls",props:{graph:{}},setup(l){const e=l,{annotationColor:s,annotationBrushWeight:n,annotationErasing:d}=ne(e.graph),{clearAnnotations:t}=e.graph,o=c=>{s.value=c,d.value=!1};return(c,g)=>(u(),v(q,null,{default:i(()=>[a(y,null,{default:i(()=>[(u(!0),m(C,null,z(_(Q),r=>(u(),v(b,{onClick:f=>o(r),active:_(s)===r,key:r,color:r},{default:i(()=>[p("div",he,[p("div",{class:k(["w-6","h-6","rounded-full",`bg-[${r}]`])},null,2)])]),_:2},1032,["onClick","active","color"]))),128))]),_:1}),a(I),a(y,null,{default:i(()=>[(u(!0),m(C,null,z(_(ee),r=>(u(),v(b,{onClick:f=>n.value=r,active:_(n)===r,key:r,color:_(x).TRANSPARENT},{default:i(()=>[p("div",{class:k(["bg-gray-400","rounded-md","w-[15px]",`h-[${r*2}px]`])},null,2)]),_:2},1032,["onClick","active","color"]))),128))]),_:1}),a(I),a(y,{class:"gap-1"},{default:i(()=>[a(b,{onClick:g[0]||(g[0]=r=>d.value=!_(d)),active:_(d)},{default:i(()=>g[1]||(g[1]=[$("mdi-eraser")])),_:1},8,["active"]),a(b,{onClick:_(t)},{default:i(()=>g[2]||(g[2]=[$(" mdi-delete-outline ")])),_:1},8,["onClick"])]),_:1})]),_:1}))}}),$e={persistentStorageKey:"graph-sandbox"},xe={class:"text-white text-opacity-60 text-sm"},ye=h({__name:"ToolbarHint",props:{tutorial:{}},setup(l){return(e,s)=>(u(),v(le,{tutorial:e.tutorial},{default:i(({hint:n})=>[p("h5",xe,M(n),1)]),_:1},8,["tutorial"]))}}),ke=h({__name:"IslandToolbar",props:{graph:{}},setup(l){const e=l,s=ie(e.graph,[{dismiss:"onNodeAdded",hint:"Double click on the canvas to add a node."},{dismiss:"onEdgeAdded",hint:"Hover node to show anchors, drag between them to add an edge."}]);s.start();const n=()=>{e.graph.bulkRemoveNode([...e.graph.focusedItemIds.value]),e.graph.bulkRemoveEdge([...e.graph.focusedItemIds.value])},d=()=>{const{activateAnnotation:t,deactivateAnnotation:o,annotationActive:c}=e.graph;c.value?o():t()};return(t,o)=>(u(),m(C,null,[a(q,null,{default:i(()=>[a(y,null,{default:i(()=>[a(b,{onClick:o[0]||(o[0]=c=>t.graph.settings.value.displayEdgeLabels=!0),active:t.graph.settings.value.displayEdgeLabels},{default:i(()=>o[6]||(o[6]=[$(" mdi-label-outline ")])),_:1},8,["active"]),a(I),a(b,{onClick:o[1]||(o[1]=c=>t.graph.settings.value.displayEdgeLabels=!1),active:!t.graph.settings.value.displayEdgeLabels},{default:i(()=>o[7]||(o[7]=[$(" mdi-label-off-outline ")])),_:1},8,["active"])]),_:1}),a(y,null,{default:i(()=>[a(b,{onClick:o[2]||(o[2]=c=>t.graph.settings.value.isGraphDirected=!0),active:t.graph.settings.value.isGraphDirected},{default:i(()=>o[8]||(o[8]=[$(" mdi-arrow-right-thin ")])),_:1},8,["active"]),a(I),a(b,{onClick:o[3]||(o[3]=c=>t.graph.settings.value.isGraphDirected=!1),active:!t.graph.settings.value.isGraphDirected},{default:i(()=>o[9]||(o[9]=[$(" mdi-minus ")])),_:1},8,["active"])]),_:1}),a(y,null,{default:i(()=>[a(b,{onClick:o[4]||(o[4]=c=>t.graph.undo()),disabled:!t.graph.canUndo.value},{default:i(()=>o[10]||(o[10]=[$(" mdi-undo ")])),_:1},8,["disabled"]),a(I),a(b,{onClick:o[5]||(o[5]=c=>t.graph.redo()),disabled:!t.graph.canRedo.value},{default:i(()=>o[11]||(o[11]=[$(" mdi-redo ")])),_:1},8,["disabled"])]),_:1}),a(y,null,{default:i(()=>[a(b,{onClick:n,disabled:t.graph.focusedItemIds.value.size===0||t.graph.annotationActive.value},{default:i(()=>o[12]||(o[12]=[$(" mdi-eraser ")])),_:1},8,["disabled"])]),_:1}),a(y,null,{default:i(()=>[a(b,null,{default:i(()=>o[13]||(o[13]=[$("mdi-account-group")])),_:1})]),_:1}),a(y,null,{default:i(()=>[a(b,{onClick:d,active:t.graph.annotationActive.value},{default:i(()=>o[14]||(o[14]=[$(" mdi-pencil ")])),_:1},8,["active"])]),_:1})]),_:1}),a(ye,{tutorial:_(s)},null,8,["tutorial"])],64))}}),K="markup",Ce=["XS","SM","MD","LG","XL"],Se={XS:25,SM:30,MD:35,LG:40,XL:45},ze={XS:6,SM:8,MD:10,LG:12,XL:14},Me=l=>{const{setTheme:e,removeAllThemes:s}=G(l,K),n=Z("markup-color-map",new Map),d=r=>{if(n.value.get(r.id))return ae(l.theme.value.nodeColor,r)},t=r=>{const f=n.value.get(r.id);if(f)return l.isFocused(r.id)?R(f,30):f},o=r=>{const f=n.value.get(r.id);if(f)return l.isFocused(r.id)?R(f,30):f};return{colorize:()=>{e("nodeColor",d),e("nodeBorderColor",t),e("nodeFocusBorderColor",t),e("nodeAnchorColor",t),e("nodeAnchorColorWhenParentFocused",t),e("edgeColor",o),e("marqueeSelectionBoxColor",x.TRANSPARENT),e("marqueeEncapsulatedNodeBoxBorderColor",x.WHITE+"80"),e("marqueeEncapsulatedNodeBoxColor",x.TRANSPARENT)},decolorize:()=>{s()},colorMap:n}},Ee=l=>{const{setTheme:e,removeAllThemes:s}=G(l,K),n=Z("markup-size-map",new Map),d=g=>{const r=n.value.get(g.id);if(r)return Se[r]},t=g=>{const r=n.value.get(g.id);if(r)return ze[r]};return{size:()=>{e("nodeSize",d),e("edgeWidth",t)},desize:()=>{s()},sizeMap:n}},Ie={},we={class:"flex flex-col gap-1"};function Ae(l,e){return u(),m("div",we,[w(l.$slots,"default")])}const Y=T(Ie,[["render",Ae]]),J=h({__name:"Button",props:{active:{type:Boolean}},setup(l){return(e,s)=>(u(),m("button",{class:k(["cursor-pointer","rounded-xl","p-1","border-2",e.active?"border-white":"border-transparent",e.active?"hover:border-white":"hover:border-gray-400"])},[p("div",{class:k(["relative","w-8","h-8","rounded-md","flex","items-center","justify-center","text-white","text-sm",e.active?"bg-gray-800":"bg-gray-700"])},[w(e.$slots,"default")],2)],2))}}),Be=h({__name:"InputColor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(l){const e=[x.BLACK,x.BLUE_600,x.RED_600,x.GREEN_600,x.YELLOW_600],s=N(l,"modelValue");return(n,d)=>(u(),v(Y,null,{default:i(()=>[(u(),m(C,null,z(e,t=>a(J,{onClick:o=>s.value=t,key:t,active:s.value===t},{default:i(()=>[p("div",{class:k([`bg-[${t}]`,"w-full","h-full","rounded-md"])},null,2)]),_:2},1032,["onClick","active"])),64))]),_:1}))}}),Te=h({__name:"NodeEdgeColorInput",props:{graph:{},colorMap:{}},setup(l){const e=l,s=()=>{const t=Array.from(e.graph.focusedItemIds.value),o=new Set(t.map(c=>e.colorMap.get(c)));if(!o.has(void 0)&&!(o.size>1))return o.values().next().value},n=B(s()),d=t=>{for(const o of e.graph.focusedItemIds.value)e.colorMap.set(o,t);n.value=t};return e.graph.subscribe("onFocusChange",()=>{n.value=s()}),(t,o)=>(u(),v(Be,{"model-value":n.value,"onUpdate:modelValue":d},null,8,["model-value"]))}}),Ne=h({__name:"InputSize",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(l){const e=Ce,s=N(l,"modelValue");return(n,d)=>(u(),v(Y,null,{default:i(()=>[(u(!0),m(C,null,z(_(e),t=>(u(),v(J,{onClick:o=>s.value=t,key:t,active:s.value===t},{default:i(()=>[$(M(t),1)]),_:2},1032,["onClick","active"]))),128))]),_:1}))}}),Re=h({__name:"NodeEdgeSizeInput",props:{graph:{},sizeMap:{}},setup(l){const e=l,s=()=>{const t=Array.from(e.graph.focusedItemIds.value),o=new Set(t.map(c=>e.sizeMap.get(c)));if(!o.has(void 0)&&!(o.size>1))return o.values().next().value},n=B(s()),d=t=>{for(const o of e.graph.focusedItemIds.value)e.sizeMap.set(o,t);n.value=t,e.graph.updateEncapsulatedNodeBox()};return e.graph.subscribe("onFocusChange",()=>{n.value=s()}),(t,o)=>(u(),v(Ne,{"model-value":n.value,"onUpdate:modelValue":d},null,8,["model-value"]))}}),Ge={key:0,class:"flex flex-col gap-3"},Ve={class:"p-2 bg-gray-800 rounded-xl"},De={class:"p-2 bg-gray-800 rounded-xl"},Le=h({__name:"IslandMarkup",props:{graph:{}},setup(l){const e=l,{colorize:s,colorMap:n}=Me(e.graph);s();const{size:d,sizeMap:t}=Ee(e.graph);return d(),(o,c)=>e.graph.focusedItemIds.value.size>0?(u(),m("div",Ge,[p("div",Ve,[a(Te,{graph:e.graph,colorMap:_(n)},null,8,["graph","colorMap"])]),p("div",De,[a(Re,{graph:e.graph,sizeMap:_(t)},null,8,["graph","sizeMap"])])])):A("",!0)}}),je={class:"bg-gray-800 flex flex-col text-white p-2 w-[400px] rounded-lg"},Oe=["onClick"],He=["src"],Ue={class:"flex flex-col gap-1"},Fe={class:"text-lg font-bold text-gray-200"},Pe={class:"text-sm text-gray-400"},We=h({__name:"StartSimulation",props:{simulations:{},startSimulation:{type:Function}},setup(l){return(e,s)=>{const n=S("v-btn"),d=S("v-menu");return u(),v(d,{offset:[10,0]},{activator:i(({props:t})=>[a(n,V(t,{icon:"mdi-play",size:"large",color:_(x).GRAY_800}),null,16,["color"])]),default:i(()=>[p("div",je,[(u(!0),m(C,null,z(e.simulations,t=>(u(),m("button",{key:t.name,onClick:o=>e.startSimulation(t),class:"hover:bg-gray-900 p-2 rounded-md cursor-pointer rounded-lg text-left flex gap-4"},[p("img",{src:t.thumbnail,class:"object-cover h-20 w-20 rounded-md"},null,8,He),p("div",Ue,[p("h1",Fe,M(t.name),1),p("p",Pe,M(t.description),1)])],8,Oe))),128))])]),_:1})}}}),Xe=h({__name:"SimulationDropdown",props:re({graph:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=l,s=N(l,"modelValue"),o=Object.values(Object.assign({"/src/menu/info.ts":D,"/src/playground/graph/info.ts":L,"/src/playground/shape/info.ts":j,"/src/products/dijkstras/info.ts":O,"/src/products/graph-sandbox/info.ts":H,"/src/products/markov-chains/info.ts":U,"/src/products/min-spanning-tree/info.ts":F,"/src/products/network-flow/info.ts":P,"/src/products/search-visualizer/info.ts":W,"/src/products/set-visualizer/info.ts":X})).map(r=>r.default).map(r=>r.simulations).filter(Boolean).map(r=>r(e.graph)).flat(),c=async r=>{const{controls:f,onInit:E}=r;s.value=r,await(E==null?void 0:E()),f.start()},g=async()=>{if(!s.value)return;const{controls:r,onDismiss:f}=s.value;r.stop(),await(f==null?void 0:f()),s.value=void 0};return(r,f)=>{const E=S("v-btn");return u(),m("div",null,[s.value?(u(),v(E,{key:1,onClick:g,color:_(x).RED_600,icon:"mdi-stop",size:"large"},null,8,["color"])):(u(),v(We,{key:0,simulations:_(o),"start-simulation":c},null,8,["simulations"]))])}}}),Ze={class:"bg-gray-800 flex flex-col text-white p-2 w-[400px] h-[700px] overflow-auto rounded-lg"},qe=["src"],Ke={class:"flex flex-col gap-1"},Ye={class:"text-xl font-bold text-gray-200"},Je={class:"text-md text-gray-400"},Qe=h({__name:"ExperienceDropdown",setup(l){const n=Object.values(Object.assign({"/src/menu/info.ts":D,"/src/playground/graph/info.ts":L,"/src/playground/shape/info.ts":j,"/src/products/dijkstras/info.ts":O,"/src/products/graph-sandbox/info.ts":H,"/src/products/markov-chains/info.ts":U,"/src/products/min-spanning-tree/info.ts":F,"/src/products/network-flow/info.ts":P,"/src/products/search-visualizer/info.ts":W,"/src/products/set-visualizer/info.ts":X})).map(d=>d.default).filter(d=>d==null?void 0:d.menu);return(d,t)=>{const o=S("router-link"),c=S("v-menu");return u(),v(c,{offset:[10,0]},{activator:i(({props:g})=>[p("button",V(g,{class:"bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-xl font-bold rounded-lg"}),t[0]||(t[0]=[p("h1",{class:"bg-gradient-to-tr dark:from-purple-600 dark:to-orange-500 from-purple-500 to-orange-500 text-transparent bg-clip-text"}," Magic Algorithms ",-1)]),16)]),default:i(()=>[p("div",Ze,[(u(!0),m(C,null,z(_(n),g=>(u(),v(o,{to:g.route.path,class:"hover:bg-gray-900 p-2 rounded-md cursor-pointer rounded-lg text-left flex gap-4"},{default:i(()=>[p("img",{src:g.menu.thumbnail,class:"object-cover h-20 w-20 rounded-md"},null,8,qe),p("div",Ke,[p("h1",Ye,M(g.menu.name),1),p("p",Je,M(g.menu.description),1)])]),_:2},1032,["to"]))),256))])]),_:1})}}}),et={key:0,class:"absolute top-6 w-full flex flex-col justify-center items-center gap-2"},tt={key:1,class:"absolute top-0 w-0 h-full flex items-center"},ot={class:"ml-4"},st={class:"absolute top-6 left-6"},nt={class:"absolute top-6 right-6"},at={key:2,class:"absolute bottom-8 w-full flex justify-center items-center p-3"},rt={key:3,class:"absolute bottom-8 w-full flex justify-center items-center p-3"},_t=h({__name:"Main",setup(l){const e=B(),s=te(e,{settings:$e}),n=B();return(d,t)=>{var o;return u(),m(C,null,[a(oe,{onGraphRef:t[0]||(t[0]=c=>e.value=c),graph:_(s)},null,8,["graph"]),n.value?A("",!0):(u(),m("div",et,[a(ke,{graph:_(s)},null,8,["graph"])])),n.value?A("",!0):(u(),m("div",tt,[p("div",ot,[a(Le,{graph:_(s)},null,8,["graph"])])])),p("div",st,[a(Qe)]),p("div",nt,[a(Xe,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=c=>n.value=c),graph:_(s)},null,8,["modelValue","graph"])]),(o=n.value)!=null&&o.controls.isActive?(u(),m("div",at,[a(se,{controls:n.value.controls},null,8,["controls"])])):_(s).annotationActive.value?(u(),m("div",rt,[a(be,{graph:_(s)},null,8,["graph"])])):A("",!0)],64)}}});export{_t as default};
