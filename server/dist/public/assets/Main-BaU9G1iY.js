import{u as ye,_ as Me}from"./Graph.vue_vue_type_script_setup_true_lang-NZ8MFYEC.js";import{_ as we}from"./SimulationPlaybackControls.vue_vue_type_script_setup_true_lang-PRYVOlzH.js";import{T as A,a as E,b as W,c as Ce,A as ke,_ as xe}from"./AnnotationControls.vue_vue_type_script_setup_true_lang-dtQJhXJ9.js";import{_ as Se,u as $e}from"./TutorialHint.vue_vue_type_script_setup_true_lang-Cu0Yxm4D.js";import{e as w,o as v,L as C,w as p,a as f,t as T,Q as ze,c as y,b as c,d as x,z as b,F as D,B as Z,A as S,Y as Ee,Z as K,_ as Ie,$ as Q,C as q,M as F,f as R,g as M,K as L,r as N,a0 as J,a1 as Ae,h as ee,i as te,j as oe,k as se,l as ne,m as ae,n as re,p as le,q as ie,s as ue,u as ce}from"./index-C-dw3W6P.js";import{b as de,g as U}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-Cm8bFvMG.js";import"./Button.vue_vue_type_script_setup_true_lang-DH0ZuJ33.js";const Te={persistentStorageKey:"graph-sandbox"},De={class:"text-white text-opacity-60 text-sm"},Be=w({__name:"ToolbarHint",props:{tutorial:{}},setup(n){return(e,l)=>(v(),C(Se,{tutorial:e.tutorial},{default:p(({hint:r})=>[f("h5",De,T(r),1)]),_:1},8,["tutorial"]))}}),Ne=w({__name:"IslandToolbar",props:{graph:{},annotationControls:{}},setup(n){const e=n,{isActive:l}=ze(e.annotationControls),r=$e(e.graph,[{dismiss:"onNodeAdded",hint:"Double click on the canvas to add a node."},{dismiss:"onEdgeAdded",hint:"Hover node to show anchors, drag between them to add an edge."}]);r.start();const i=()=>{e.graph.bulkRemoveNode([...e.graph.focusedItemIds.value]),e.graph.bulkRemoveEdge([...e.graph.focusedItemIds.value])},o=()=>{const{activate:s,deactivate:t}=e.annotationControls;l.value?t():s()};return(s,t)=>(v(),y(D,null,[c(Ce,null,{default:p(()=>[c(A,null,{default:p(()=>[c(E,{onClick:t[0]||(t[0]=d=>s.graph.settings.value.displayEdgeLabels=!0),active:s.graph.settings.value.displayEdgeLabels},{default:p(()=>t[6]||(t[6]=[x(" mdi-label-outline ")])),_:1},8,["active"]),c(W),c(E,{onClick:t[1]||(t[1]=d=>s.graph.settings.value.displayEdgeLabels=!1),active:!s.graph.settings.value.displayEdgeLabels},{default:p(()=>t[7]||(t[7]=[x(" mdi-label-off-outline ")])),_:1},8,["active"])]),_:1}),c(A,null,{default:p(()=>[c(E,{onClick:t[2]||(t[2]=d=>s.graph.settings.value.isGraphDirected=!0),active:s.graph.settings.value.isGraphDirected},{default:p(()=>t[8]||(t[8]=[x(" mdi-arrow-right-thin ")])),_:1},8,["active"]),c(W),c(E,{onClick:t[3]||(t[3]=d=>s.graph.settings.value.isGraphDirected=!1),active:!s.graph.settings.value.isGraphDirected},{default:p(()=>t[9]||(t[9]=[x(" mdi-minus ")])),_:1},8,["active"])]),_:1}),c(A,null,{default:p(()=>[c(E,{onClick:t[4]||(t[4]=d=>s.graph.undo()),disabled:!s.graph.canUndo.value},{default:p(()=>t[10]||(t[10]=[x(" mdi-undo ")])),_:1},8,["disabled"]),c(W),c(E,{onClick:t[5]||(t[5]=d=>s.graph.redo()),disabled:!s.graph.canRedo.value},{default:p(()=>t[11]||(t[11]=[x(" mdi-redo ")])),_:1},8,["disabled"])]),_:1}),c(A,null,{default:p(()=>[c(E,{onClick:i,disabled:s.graph.focusedItemIds.value.size===0},{default:p(()=>t[12]||(t[12]=[x(" mdi-eraser ")])),_:1},8,["disabled"])]),_:1}),c(A,null,{default:p(()=>[c(E,null,{default:p(()=>t[13]||(t[13]=[x("mdi-account-group")])),_:1})]),_:1}),c(A,null,{default:p(()=>[c(E,{onClick:o,active:b(l)},{default:p(()=>t[14]||(t[14]=[x(" mdi-pencil ")])),_:1},8,["active"])]),_:1})]),_:1}),c(Be,{tutorial:b(r)},null,8,["tutorial"])],64))}}),pe="markup",Le=["XS","SM","MD","LG","XL"],Re={XS:25,SM:30,MD:35,LG:40,XL:45},Ve={XS:6,SM:8,MD:10,LG:12,XL:14},Ge=n=>{const{setTheme:e,removeAllThemes:l}=Z(n,pe),r=de("markup-color-map",new Map),i=u=>{if(r.value.get(u.id))return Ee(n.theme.value.nodeColor,u)},o=u=>{const _=r.value.get(u.id);if(_)return n.isFocused(u.id)?K(_,30):_},s=u=>{const _=r.value.get(u.id);if(_)return n.isFocused(u.id)?K(_,30):_};return{colorize:()=>{e("nodeColor",i),e("nodeBorderColor",o),e("nodeFocusBorderColor",o),e("nodeAnchorColor",o),e("nodeAnchorColorWhenParentFocused",o),e("edgeColor",s),e("marqueeSelectionBoxColor",S.TRANSPARENT),e("marqueeEncapsulatedNodeBoxBorderColor",S.WHITE+"80"),e("marqueeEncapsulatedNodeBoxColor",S.TRANSPARENT)},decolorize:()=>{l()},colorMap:r}},Oe=n=>{const{setTheme:e,removeAllThemes:l}=Z(n,pe),r=de("markup-size-map",new Map),i=d=>{const u=r.value.get(d.id);if(u)return Re[u]},o=d=>{const u=r.value.get(d.id);if(u)return Ve[u]};return{size:()=>{e("nodeSize",i),e("edgeWidth",o)},desize:()=>{l()},sizeMap:r}},je={},Pe={class:"flex flex-col gap-1"};function We(n,e){return v(),y("div",Pe,[Q(n.$slots,"default")])}const ve=Ie(je,[["render",We]]),_e=w({__name:"Button",props:{active:{type:Boolean}},setup(n){return(e,l)=>(v(),y("button",{class:q(["cursor-pointer","rounded-xl","p-1","border-2",e.active?"border-white":"border-transparent",e.active?"hover:border-white":"hover:border-gray-400"])},[f("div",{class:q(["relative","w-8","h-8","rounded-md","flex","items-center","justify-center","text-white","text-sm",e.active?"bg-gray-800":"bg-gray-700"])},[Q(e.$slots,"default")],2)],2))}}),Ue=w({__name:"InputColor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(n){const e=[S.BLACK,S.BLUE_600,S.RED_600,S.GREEN_600,S.YELLOW_600],l=F(n,"modelValue");return(r,i)=>(v(),C(ve,null,{default:p(()=>[(v(),y(D,null,R(e,o=>c(_e,{onClick:s=>l.value=o,key:o,active:l.value===o},{default:p(()=>[f("div",{class:q([`bg-[${o}]`,"w-full","h-full","rounded-md"])},null,2)]),_:2},1032,["onClick","active"])),64))]),_:1}))}}),qe=w({__name:"NodeEdgeColorInput",props:{graph:{},colorMap:{}},setup(n){const e=n,l=()=>{const o=Array.from(e.graph.focusedItemIds.value),s=new Set(o.map(t=>e.colorMap.get(t)));if(!s.has(void 0)&&!(s.size>1))return s.values().next().value},r=M(l()),i=o=>{for(const s of e.graph.focusedItemIds.value)e.colorMap.set(s,o);r.value=o};return e.graph.subscribe("onFocusChange",()=>{r.value=l()}),(o,s)=>(v(),C(Ue,{"model-value":r.value,"onUpdate:modelValue":i},null,8,["model-value"]))}}),Fe=w({__name:"InputSize",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(n){const e=Le,l=F(n,"modelValue");return(r,i)=>(v(),C(ve,null,{default:p(()=>[(v(!0),y(D,null,R(b(e),o=>(v(),C(_e,{onClick:s=>l.value=o,key:o,active:l.value===o},{default:p(()=>[x(T(o),1)]),_:2},1032,["onClick","active"]))),128))]),_:1}))}}),Xe=w({__name:"NodeEdgeSizeInput",props:{graph:{},sizeMap:{}},setup(n){const e=n,l=()=>{const o=Array.from(e.graph.focusedItemIds.value),s=new Set(o.map(t=>e.sizeMap.get(t)));if(!s.has(void 0)&&!(s.size>1))return s.values().next().value},r=M(l()),i=o=>{for(const s of e.graph.focusedItemIds.value)e.sizeMap.set(s,o);r.value=o,e.graph.updateEncapsulatedNodeBox()};return e.graph.subscribe("onFocusChange",()=>{r.value=l()}),(o,s)=>(v(),C(Fe,{"model-value":r.value,"onUpdate:modelValue":i},null,8,["model-value"]))}}),He={key:0,class:"flex flex-col gap-3"},Ye={class:"p-2 bg-gray-800 rounded-xl"},Ke={class:"p-2 bg-gray-800 rounded-xl"},Ze=w({__name:"IslandMarkup",props:{graph:{}},setup(n){const e=n,{colorize:l,colorMap:r}=Ge(e.graph);l();const{size:i,sizeMap:o}=Oe(e.graph);return i(),(s,t)=>e.graph.focusedItemIds.value.size>0?(v(),y("div",He,[f("div",Ye,[c(qe,{graph:e.graph,colorMap:b(r)},null,8,["graph","colorMap"])]),f("div",Ke,[c(Xe,{graph:e.graph,sizeMap:b(o)},null,8,["graph","sizeMap"])])])):L("",!0)}}),Qe={class:"bg-gray-800 flex flex-col text-white p-2 w-[400px] rounded-lg"},Je=["onClick"],et=["src"],tt={class:"flex flex-col gap-1"},ot={class:"text-lg font-bold text-gray-200"},st={class:"text-sm text-gray-400"},nt=w({__name:"StartSimulation",props:{simulations:{},startSimulation:{type:Function}},setup(n){return(e,l)=>{const r=N("v-btn"),i=N("v-menu");return v(),C(i,{offset:[10,0]},{activator:p(({props:o})=>[c(r,J(o,{icon:"mdi-play",size:"large",color:b(S).GRAY_800}),null,16,["color"])]),default:p(()=>[f("div",Qe,[(v(!0),y(D,null,R(e.simulations,o=>(v(),y("button",{key:o.name,onClick:s=>e.startSimulation(o),class:"hover:bg-gray-900 p-2 rounded-md cursor-pointer rounded-lg text-left flex gap-4"},[f("img",{src:o.thumbnail,class:"object-cover h-20 w-20 rounded-md"},null,8,et),f("div",tt,[f("h1",ot,T(o.name),1),f("p",st,T(o.description),1)])],8,Je))),128))])]),_:1})}}}),at=w({__name:"SimulationDropdown",props:Ae({graph:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=n,l=F(n,"modelValue"),s=Object.values(Object.assign({"/src/menu/info.ts":ee,"/src/playground/annotation/info.ts":te,"/src/playground/graph/info.ts":oe,"/src/playground/shape/info.ts":se,"/src/products/dijkstras/info.ts":ne,"/src/products/graph-sandbox/info.ts":ae,"/src/products/markov-chains/info.ts":re,"/src/products/min-spanning-tree/info.ts":le,"/src/products/network-flow/info.ts":ie,"/src/products/search-visualizer/info.ts":ue,"/src/products/set-visualizer/info.ts":ce})).map(u=>u.default).map(u=>u.simulations).filter(Boolean).map(u=>u(e.graph)).flat(),t=async u=>{const{controls:_,onInit:$}=u;l.value=u,await($==null?void 0:$()),_.start()},d=async()=>{if(!l.value)return;const{controls:u,onDismiss:_}=l.value;u.stop(),await(_==null?void 0:_()),l.value=void 0};return(u,_)=>{const $=N("v-btn");return v(),y("div",null,[l.value?(v(),C($,{key:1,onClick:d,color:b(S).RED_600,icon:"mdi-stop",size:"large"},null,8,["color"])):(v(),C(nt,{key:0,simulations:b(s),"start-simulation":t},null,8,["simulations"]))])}}}),rt={class:"bg-gray-800 flex flex-col text-white p-2 w-[400px] h-[700px] overflow-auto rounded-lg"},lt=["src"],it={class:"flex flex-col gap-1"},ut={class:"text-xl font-bold text-gray-200"},ct={class:"text-md text-gray-400"},dt=w({__name:"ExperienceDropdown",setup(n){const r=Object.values(Object.assign({"/src/menu/info.ts":ee,"/src/playground/annotation/info.ts":te,"/src/playground/graph/info.ts":oe,"/src/playground/shape/info.ts":se,"/src/products/dijkstras/info.ts":ne,"/src/products/graph-sandbox/info.ts":ae,"/src/products/markov-chains/info.ts":re,"/src/products/min-spanning-tree/info.ts":le,"/src/products/network-flow/info.ts":ie,"/src/products/search-visualizer/info.ts":ue,"/src/products/set-visualizer/info.ts":ce})).map(i=>i.default).filter(i=>i==null?void 0:i.menu);return(i,o)=>{const s=N("router-link"),t=N("v-menu");return v(),C(t,{offset:[10,0]},{activator:p(({props:d})=>[f("button",J(d,{class:"bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-xl font-bold rounded-lg"}),o[0]||(o[0]=[f("h1",{class:"bg-gradient-to-tr dark:from-purple-600 dark:to-orange-500 from-purple-500 to-orange-500 text-transparent bg-clip-text"}," Magic Algorithms ",-1)]),16)]),default:p(()=>[f("div",rt,[(v(!0),y(D,null,R(b(r),d=>(v(),C(s,{to:d.route.path,class:"hover:bg-gray-900 p-2 rounded-md cursor-pointer rounded-lg text-left flex gap-4"},{default:p(()=>[f("img",{src:d.menu.thumbnail,class:"object-cover h-20 w-20 rounded-md"},null,8,lt),f("div",it,[f("h1",ut,T(d.menu.name),1),f("p",ct,T(d.menu.description),1)])]),_:2},1032,["to"]))),256))])]),_:1})}}}),pt=(n,e={})=>{const{color:l,brushWeight:r,eraserBrushWeight:i}={...ke,...e},o=M(l),s=M(r),t=M(!1),d=M(!1),u=M(),_=M([]),$=M([]),V=M(!1),me=()=>{const a=U(n.canvas);a.clearRect(0,0,a.canvas.width,a.canvas.height),$.value=[]},fe=a=>m=>{a.strokeStyle=m.color,a.lineWidth=m.brushWeight,a.beginPath();const[g,...h]=m.points;a.moveTo(g.x,g.y),h.forEach(({x:k,y:B})=>a.lineTo(k,B)),a.stroke()},ge=a=>m=>{a.globalCompositeOperation="destination-out",a.lineWidth=i;for(let g=0;g<m.points.length-1;g++){const h=m.points[g],k=m.points[g+1],B=Math.pow(k.x-h.x,2)+Math.pow(k.y-h.y,2),O=Math.sqrt(B),I=Math.ceil(O/i);for(let z=0;z<=I;z++){const j=h.x+z/I*(k.x-h.x),P=h.y+z/I*(k.y-h.y);a.beginPath(),a.arc(j,P,i,0,Math.PI*2),a.fill()}}a.globalCompositeOperation="source-over"},G=a=>{const m=fe(a),g=ge(a);for(const h of $.value)h.type==="draw"?m(h):g(h)},X=({coords:a})=>{const m=U(n.canvas);d.value=!0,m.beginPath(),m.moveTo(a.x,a.y),u.value=a,_.value=[{...a}]},he=({ctx:a,at:{x:m,y:g}})=>{if(!u.value)return;const{x:h,y:k}=u.value;a.globalCompositeOperation="destination-out";const B=Math.pow(m-h,2)+Math.pow(g-k,2),O=Math.sqrt(B),I=Math.ceil(O/i);for(let z=0;z<=I;z++){const j=h+z/I*(m-h),P=k+z/I*(g-k);a.beginPath(),a.arc(j,P,i,0,Math.PI*2),a.fill()}a.globalCompositeOperation="source-over"},be=({ctx:a,at:{x:m,y:g}})=>{a.lineTo(m,g),a.strokeStyle=o.value,a.lineWidth=s.value,a.stroke()},H=({coords:a})=>{if(!d.value||!u.value)return;const g={ctx:U(n.canvas),at:a};t.value?he(g):be(g),u.value=a,_.value.push({...a})},Y=()=>{if(!d.value||(d.value=!1,u.value=void 0,_.value.length===0))return;const a={type:"draw",color:o.value,brushWeight:s.value,points:_.value},m={type:"erase",brushWeight:i,points:_.value},g=t.value?m:a;$.value.push(g),_.value=[]};return{selectedColor:o,selectedBrushWeight:s,erasing:t,clear:me,isDrawing:d,draw:G,isActive:V,activate:()=>{V.value=!0,n.settings.value.userEditable=!1,n.settings.value.marquee=!1,n.subscribe("onMouseDown",X),n.subscribe("onMouseMove",H),n.subscribe("onMouseUp",Y),n.subscribe("onRepaint",G)},deactivate:()=>{V.value=!1,n.settings.value.userEditable=!0,n.settings.value.marquee=!0,n.unsubscribe("onMouseDown",X),n.unsubscribe("onMouseMove",H),n.unsubscribe("onMouseUp",Y),n.unsubscribe("onRepaint",G)}}},vt={key:0,class:"absolute top-6 w-full flex flex-col justify-center items-center gap-2"},_t={key:1,class:"absolute top-0 w-0 h-full flex items-center"},mt={class:"ml-4"},ft={class:"absolute top-6 left-6"},gt={class:"absolute top-6 right-6"},ht={key:2,class:"absolute bottom-8 w-full flex justify-center items-center p-3"},bt={key:3,class:"absolute bottom-8 w-full flex justify-center items-center p-3"},Et=w({__name:"Main",setup(n){const e=M(),l=ye(e,{settings:Te}),r=M(),i=pt(l);return(o,s)=>{var t;return v(),y(D,null,[c(Me,{onGraphRef:s[0]||(s[0]=d=>e.value=d),graph:b(l)},null,8,["graph"]),r.value?L("",!0):(v(),y("div",vt,[c(Ne,{graph:b(l),"annotation-controls":b(i)},null,8,["graph","annotation-controls"])])),r.value?L("",!0):(v(),y("div",_t,[f("div",mt,[c(Ze,{graph:b(l)},null,8,["graph"])])])),f("div",ft,[c(dt)]),f("div",gt,[c(at,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=d=>r.value=d),graph:b(l)},null,8,["modelValue","graph"])]),(t=r.value)!=null&&t.controls.isActive?(v(),y("div",ht,[c(we,{controls:r.value.controls},null,8,["controls"])])):b(i).isActive.value?(v(),y("div",bt,[c(xe,{controls:b(i)},null,8,["controls"])])):L("",!0)],64)}}});export{Et as default};
