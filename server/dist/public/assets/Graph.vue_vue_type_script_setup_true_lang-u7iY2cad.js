import{T as Ce,O as xe,z as q,b3 as Q,b4 as le,b5 as we,b6 as Ie,b7 as Be,b8 as De,b9 as fe,ba as Me,bb as _e,v as h,bc as Re,H as F,g as I,y as ve,aa as J,bd as ke,an as Le,ao as Fe,be as Pe,bf as me,u as ge,A as j,d as Oe,C as Ue,o as Ge}from"./index-B7tKSjsQ.js";import{c as be,a as We,b as He,l as he,e as Ke,g as Ee,r as te,s as V,_ as qe}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-DUr84Hrg.js";const ze="system",Ye=e=>{const o=Ce(),t=xe("selectedTheme",ze);return q(o,()=>{t.value==="system"&&(e.themeName.value=o.value?"dark":"light")},{immediate:!0}),q(t,()=>{t.value==="system"?e.themeName.value=o.value?"dark":"light":e.themeName.value=t.value},{immediate:!0}),{preferredTheme:t}},Ve=e=>({getConnectedNodes:o=>Q(o,e),getConnectedEdges:o=>le(o,e),getInboundEdges:o=>we(o,e),getOutboundEdges:o=>Ie(o,e),isEdgeFlowingIntoNode:(o,t)=>Be(o,t,e),isEdgeFlowingOutOfNode:(o,t)=>De(o,t,e),getEdgesAlongPath:(o,t)=>fe(o,t,e),getEdgeWeight:o=>Me(o,e),getWeightBetweenNodes:(o,t)=>_e(o,t,e)}),Je=(e,o)=>{const t=o("nodeColor",e),d=o("nodeBorderColor",e),s=o("nodeSize",e),a=o("nodeBorderWidth",e),g=o("nodeText",e),v=o("nodeTextSize",e),l=o("nodeTextColor",e),m=o("nodeShape",e),y=be({at:{x:e.x,y:e.y},radius:s,color:t,stroke:{color:d,width:a},textArea:{text:{content:g,fontSize:v,fontWeight:"bold",color:l},color:h.TRANSPARENT}}),E=We({at:{x:e.x-s,y:e.y-s},size:s*2,color:t,stroke:{color:d,width:a},textArea:{text:{content:g,fontSize:v,fontWeight:"bold",color:l},color:h.TRANSPARENT}});return{shape:m==="circle"?y:E,id:e.id,graphType:"node"}},Ze=1.618,ne=2,Xe=(e,o)=>{const{displayEdgeLabels:t,isGraphDirected:d}=o.settings.value,[s,a]=Q(e.id,o),v=fe(s.id,a.id,o).length>1,l=a===s,m=o.getTheme("nodeBorderWidth",s),y=o.getTheme("nodeBorderWidth",a),E=o.getTheme("nodeSize",s),n=o.getTheme("nodeSize",a),r=Math.atan2(a.y-s.y,a.x-s.x),N=y/2+ne,w={x:(n+N)*Math.cos(r),y:(n+N)*Math.sin(r)},A={x:s.x,y:s.y},c={x:a.x-(d?w.x:0),y:a.y-(d?w.y:0)},i=o.getTheme("edgeWidth",e),b=i*1.2;v&&(A.x+=Math.cos(r+Math.PI/2)*b,A.y+=Math.sin(r+Math.PI/2)*b,c.x+=Math.cos(r+Math.PI/2)*b,c.y+=Math.sin(r+Math.PI/2)*b);const u=Re(A,o.edges.value.filter(k=>(k.from===s.id||k.to===a.id)&&k.from!==k.to).map(k=>{const[W,K]=Q(k.id,o);return s.id===W.id?{x:K.x,y:K.y}:{x:W.x,y:W.y}}).filter((k,W,K)=>W===K.findIndex(U=>U.x===k.x&&U.y===k.y))),f=o.getTheme("edgeColor",e),p=o.getTheme("edgeTextColor",e),x=o.getTheme("graphBgColor"),B=o.getTheme("edgeText",e),T=o.getTheme("edgeTextSize",e),C=o.getTheme("edgeTextFontWeight",e),_=t?{color:x,activeColor:x,text:{content:B,color:p,fontSize:T,fontWeight:C}}:void 0,R=(E+m)*Ze,P=R-(E+m/2)-ne;if(l)return{shape:He({spacing:i*1.2,at:{x:s.x,y:s.y},upDistance:R,downDistance:P,rotation:u,lineWidth:i,color:f,textArea:_}),id:e.id,graphType:"edge"};const G=E+m/2+n+y/2,O=(s.x-a.x)**2+(s.y-a.y)**2;return G**2>O?void 0:d?{shape:Ke({start:A,end:c,width:i,textOffsetFromCenter:(E+m/2)/2,color:f,textArea:_}),id:e.id,graphType:"edge"}:{shape:he({start:A,end:c,width:i,color:f,textArea:_}),id:e.id,graphType:"edge"}},ee={nodeShape:"circle",nodeSize:35,nodeBorderWidth:8,nodeTextSize:24,nodeAnchorRadius:Math.ceil(Math.sqrt(35)*2),edgeWidth:10,edgeTextSize:20,nodeText:({label:e})=>e,edgeText:({label:e})=>e,edgeTextFontWeight:"bold",linkPreviewWidth:10},Qe="rgb(100, 60, 70)",je={nodeBorderColor:h.BLACK,nodeColor:h.STONE_600,nodeTextColor:h.WHITE,nodeFocusBorderColor:h.RED_700,nodeFocusColor:Qe,nodeFocusTextColor:h.WHITE,edgeColor:h.STONE_900,edgeFocusColor:h.RED_700,edgeFocusTextColor:h.WHITE,edgeTextColor:h.WHITE,graphBgColor:h.GRAY_600,graphBgPatternColor:h.WHITE+"15",nodeAnchorColorWhenParentFocused:h.RED_800,nodeAnchorColor:h.GRAY_900,linkPreviewColor:h.BLACK,marqueeSelectionBoxColor:h.WHITE+"15",marqueeSelectionBoxBorderColor:h.WHITE,marqueeEncapsulatedNodeBoxBorderColor:h.RED_700,marqueeEncapsulatedNodeBoxColor:h.RED_700+"20",...ee},$e={nodeColor:h.GRAY_50,nodeBorderColor:h.GRAY_800,nodeFocusBorderColor:h.BLUE_600,nodeFocusColor:h.BLUE_100,nodeTextColor:h.GRAY_900,nodeFocusTextColor:h.GRAY_900,edgeColor:h.GRAY_800,edgeTextColor:h.GRAY_900,edgeFocusColor:h.BLUE_600,edgeFocusTextColor:h.BLACK,graphBgColor:h.GRAY_200,graphBgPatternColor:h.BLACK+"15",nodeAnchorColor:h.BLACK,nodeAnchorColorWhenParentFocused:h.BLUE_900,linkPreviewColor:h.BLACK,marqueeSelectionBoxColor:h.BLUE_300+"15",marqueeSelectionBoxBorderColor:h.BLUE_500,marqueeEncapsulatedNodeBoxBorderColor:h.BLUE_700,marqueeEncapsulatedNodeBoxColor:h.BLUE_700+"05",...ee},eo={nodeColor:h.PINK_100,nodeBorderColor:h.PINK_400,nodeFocusBorderColor:h.PURPLE_600,nodeFocusColor:h.PURPLE_200,nodeTextColor:h.PINK_600,nodeFocusTextColor:h.PURPLE_900,edgeColor:h.PINK_600,edgeTextColor:h.PINK_600,edgeFocusColor:h.PURPLE_600,edgeFocusTextColor:h.PURPLE_600,graphBgColor:h.PINK_200,graphBgPatternColor:h.PINK_900+"15",nodeAnchorColor:h.PINK_500,nodeAnchorColorWhenParentFocused:h.PURPLE_700,linkPreviewColor:h.PINK_900,marqueeSelectionBoxColor:h.PINK_300+"15",marqueeSelectionBoxBorderColor:h.PINK_500,marqueeEncapsulatedNodeBoxBorderColor:h.PINK_700,marqueeEncapsulatedNodeBoxColor:h.PINK_700+"05",...ee},Te={light:$e,dark:je,girl:eo},oo=()=>({nodeSize:[],nodeBorderWidth:[],nodeColor:[],nodeBorderColor:[],nodeFocusColor:[],nodeFocusBorderColor:[],nodeText:[],nodeFocusTextColor:[],nodeTextSize:[],nodeTextColor:[],nodeShape:[],edgeColor:[],edgeWidth:[],edgeText:[],edgeTextSize:[],edgeTextColor:[],edgeFocusTextColor:[],edgeTextFontWeight:[],edgeFocusColor:[],graphBgColor:[],graphBgPatternColor:[],nodeAnchorRadius:[],nodeAnchorColor:[],nodeAnchorColorWhenParentFocused:[],linkPreviewColor:[],linkPreviewWidth:[],marqueeSelectionBoxColor:[],marqueeSelectionBoxBorderColor:[],marqueeEncapsulatedNodeBoxColor:[],marqueeEncapsulatedNodeBoxBorderColor:[]}),to=e=>Object.prototype.toString.call(e)==="[object Object]",ye=(e,o)=>{const t={};if(!e)return o;if(!o)return null;const d=Object.keys(e),s=Object.keys(o);for(const a of s)d.includes(a)||(t[a]=o[a]);for(const a of d){if(to(e[a])){const g=ye(e[a],o[a]);g&&(t[a]=g);continue}if(Array.isArray(e[a])){JSON.stringify(e[a])!==JSON.stringify(o[a])&&(t[a]=o[a]);continue}else e[a]!==o[a]&&(t[a]=o[a])}return Object.keys(t).length?t:null},$=e=>{const o={...e};for(const t in o)typeof o[t]=="object"&&(o[t]=$(o[t]));return o},no=e=>({subscribe:(o,t)=>e[o].add(t),unsubscribe:(o,t)=>e[o].delete(t),emit:(o,...t)=>{for(const d of e[o])d(...t)}}),so=()=>({onStructureChange:new Set,onNodeAdded:new Set,onBulkNodeAdded:new Set,onNodeRemoved:new Set,onBulkNodeRemoved:new Set,onNodeMoved:new Set,onBulkNodeMoved:new Set,onEdgeAdded:new Set,onBulkEdgeAdded:new Set,onEdgeRemoved:new Set,onBulkEdgeRemoved:new Set,onEdgeLabelEdited:new Set,onRepaint:new Set,onNodeHoverChange:new Set,onGraphLoaded:new Set,onGraphReset:new Set,onClick:new Set,onMouseDown:new Set,onMouseUp:new Set,onMouseMove:new Set,onDblClick:new Set,onContextMenu:new Set,onKeyDown:new Set,onKeyUp:new Set,onThemeChange:new Set,onSettingsChange:new Set,onUndo:new Set,onRedo:new Set,onFocusChange:new Set,onNodeDragStart:new Set,onNodeDrop:new Set,onNodeAnchorDragStart:new Set,onNodeAnchorDrop:new Set,onGroupDragStart:new Set,onGroupDrop:new Set}),se=e=>e==null,ro=e=>{const o=e.trim().split("/").filter(Boolean);if(o.length!==2)return!1;const[t,d]=o.map(Number);return!(se(t)||se(d))},ao=e=>{if(!ro(e))return;const o=e.split("/"),[t,d]=o.map(Number);return t/d},uo={displayEdgeLabels:!0,edgeLabelsEditable:!0,edgeInputToLabel:e=>{var d;const o=e.trim();if(!o)return;const t=(d=ao(o))==null?void 0:d.toFixed(2);return t==="Infinity"?"∞":t==="-Infinity"?"-∞":t===void 0&&isNaN(Number(o))?void 0:t??o},newNodeLabelGetter:null,isGraphDirected:!0},io={focusable:!0,focusBlacklist:[]},co={draggable:!0},lo={nodeAnchors:!0},fo={marquee:!0,marqueeSelectableGraphTypes:["node","edge"]},vo={userEditable:!0,userAddedEdgeLabel:"1",userAddedEdgeRuleNoSelfLoops:!1,userAddedEdgeRuleOneEdgePerPath:!1},mo={persistent:!0,persistentStorageKey:"graph",persistentBlacklist:new Set},go={},bo={...uo,...io,...co,...lo,...fo,...vo,...mo,...go},re=(e,...o)=>typeof e=="function"?e(...o):e,ho=(e,o)=>(t,...d)=>{const s=o[t].findLast(g=>{const v=g.value;return re(v,...d)!==void 0}),a=(s==null?void 0:s.value)??Te[e.value][t];if(!a)throw new Error(`Theme property "${t}" not found`);return re(a,...d)},Eo=(e,o)=>{const t=F(()=>{const s=new Map;for(const a of e.value)s.set(a.id,a);return s}),d=F(()=>{const s=new Map;for(const a of o.value)s.set(a.id,a);return s});return{nodeIdToNodeMap:t,edgeIdToEdgeMap:d}},To=({canvas:e,emit:o})=>{const t=I([]),d=[],s=()=>{var n,r,N,w;if(!e.value)return;const v=e.value.getContext("2d");if(!v)return;v.clearRect(0,0,e.value.width,e.value.height);const l=d.reduce((A,c)=>c(A),[]);t.value=[...l.sort((A,c)=>A.priority-c.priority)];const m=t.value.findLastIndex(A=>A.graphType==="edge"),y=t.value.slice(0,m+1),E=t.value.slice(m+1);for(const A of y)A.shape.drawShape(v);for(const A of y)(r=(n=A.shape).drawTextAreaMatte)==null||r.call(n,v);for(const A of y)(w=(N=A.shape).drawText)==null||w.call(N,v);for(const A of E)A.shape.draw(v);o("onRepaint",v,"loop")},a=setInterval(s,1e3/60);return ve(()=>{clearInterval(a)}),setTimeout(s,1e3),{aggregator:t,updateAggregator:d,getSchemaItemsByCoordinates:v=>t.value.sort((l,m)=>l.priority-m.priority).filter(l=>{var m,y;return l.shape.shapeHitbox(v)||((y=(m=l.shape).textHitbox)==null?void 0:y.call(m,v))})}},yo={broadcast:!0,focus:!0,history:!0},po={broadcast:!0,focus:!1,history:!0},ae={broadcast:!0,history:!0},X={broadcast:!0,focus:!1,history:!0},de={broadcast:!0,history:!0},So={broadcast:!0},No={label:""},Ao="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");Array.from({length:999},(e,o)=>(o+1).toString());const Co=(e,o)=>()=>{let t=e.value.map(({label:v})=>v),d=0,s=0,a;const g=()=>d===0?"":o[(d-1)%o.length];for(;!a;){s>=o.length&&(t=t.slice(o.length),s=0,d++);const l=g()+o[s];t.includes(l)||(a=l),s++}return a},xo=e=>Co(e.nodes,Ao),wo=({nodes:e,edges:o,nodeMap:t,edgeMap:d,emit:s,settings:a})=>{const g=i=>t.value.get(i),v=i=>d.value.get(i),l=(i,b={})=>{if(i!=null&&i.id&&g(i.id)){console.warn("prevented adding a node with an existing id, this shouldn't happen");return}const u={...yo,...b},f=a.value.newNodeLabelGetter??xo({nodes:e}),p={id:i.id??J(),label:i.label??f(),x:i.x??0,y:i.y??0};return e.value.push(p),s("onNodeAdded",p,u),s("onStructureChange"),p},m=(i,b={})=>{if(i.length===0)return;const u={...po,...b},f=[];for(const p of i){const x=l(p,{focus:!1,broadcast:!1,history:!1});x&&f.push(x)}f.length!==0&&s("onBulkNodeAdded",f,u)},y=(i,b={})=>{const u={...X,...b},{isGraphDirected:f}=a.value,[p,x]=[g(i.from),g(i.to)];if(!p||!x)return;if(f){if(o.value.find(C=>C.from===i.from&&C.to===i.to))return}else if(o.value.find(C=>C.from===i.from&&C.to===i.to||C.from===i.to&&C.to===i.from))return;const B={...No,id:J(),...i};return o.value.push(B),s("onEdgeAdded",B,u),s("onStructureChange"),B},E=(i,b={})=>{if(i.length===0)return;const u={...X,...b},f=[];for(const p of i){const x=y(p,{broadcast:!1,history:!1});x&&f.push(x)}f.length!==0&&s("onBulkEdgeAdded",f,u)},n=(i,b,u={})=>{const f=g(i);if(!f)return;const p={...So,...u};f.x=b.x,f.y=b.y,s("onNodeMoved",f,p)},r=(i,b,u={})=>{const f={...X,...u},p=v(i);if(!p)return;const x=p.label;p.label=b,s("onEdgeLabelEdited",p,x,f),s("onStructureChange")},N=(i,b={})=>{const u=g(i);if(!u)return;const f={...ae,...b},x=le(u.id,{edges:o,getEdge:v,settings:a}).map(B=>A(B.id,{broadcast:!1,history:!1})).filter(Boolean);return e.value=e.value.filter(B=>B.id!==u.id),s("onNodeRemoved",u,x,f),s("onStructureChange"),[u,x]},w=(i,b={})=>{if(i.length===0)return;const u={...ae,...b},f=[],p=[];for(const x of i){const B=N(x,{broadcast:!1,history:!1});if(!B)continue;const[T,C]=B;f.push(T),p.push(...C)}f.length!==0&&s("onBulkNodeRemoved",f,p,u)},A=(i,b={})=>{const u=v(i);if(!u)return;const f={...de,...b};return o.value=o.value.filter(p=>p.id!==u.id),s("onEdgeRemoved",u,f),s("onStructureChange"),u};return{getNode:g,getEdge:v,addNode:l,addEdge:y,moveNode:n,editEdgeLabel:r,removeNode:N,removeEdge:A,bulkAddNode:m,bulkRemoveNode:w,bulkAddEdge:E,bulkRemoveEdge:(i,b={})=>{if(i.length===0)return;const u={...de,...b},f=[];for(const p of i){const x=A(p,{broadcast:!1,history:!1});x&&f.push(x)}if(f.length!==0)return s("onBulkEdgeRemoved",f,u),f}}},Io=({subscribe:e,canvas:o,graphAtMousePosition:t})=>{const d=I(!1),s=I(!1),a=I({node:"grab",edge:"pointer","node-anchor":"grab","encapsulated-node-box":"move"}),g=I(),v=F(()=>!!g.value),l=n=>{g.value=n},m=()=>{g.value=void 0},y=n=>{var N;if(!n)return"default";if(v.value)return((N=g.value)==null?void 0:N.call(g,n))??!1?"pointer":"default";const r=a.value[n.graphType]??"default";return r==="grab"&&d.value?"grabbing":r},E=({items:n})=>{if(!o.value||s.value)return;const r=n.at(-1);o.value.style.cursor=y(r)};return e("onMouseDown",n=>{d.value=!0,E(n)}),e("onMouseUp",n=>{d.value=!1,E(n)}),e("onMouseMove",E),q(a,()=>{E({items:t.value.items})},{deep:!0}),{graphToCursorMap:a,activateCursorSelectMode:l,deactivateCursorSelectMode:m,graphCursorDisabled:s}},Bo=(e,o={})=>{const t=I("light"),d=oo(),s=ho(t,d),a=I({...bo,...o}),g=so(),{subscribe:v,unsubscribe:l,emit:m}=no(g),y=I(!0);ke(e,()=>{y.value=!1}),v("onMouseDown",()=>{y.value=!0});const E=I([]),n=I([]),r=I({coords:{x:0,y:0},items:[]}),N=Io({canvas:e,subscribe:v,graphAtMousePosition:r}),w=S=>{const M=Ee(e),L=Pe(S,M);r.value={coords:L,items:f(L)}},A=S=>({...r.value,event:S}),c={click:S=>{S.preventDefault(),m("onClick",A(S))},mousemove:S=>{S.preventDefault(),m("onMouseMove",A(S))},mousedown:S=>{S.preventDefault(),m("onMouseDown",A(S))},mouseup:S=>{S.preventDefault(),m("onMouseUp",A(S))},dblclick:S=>{S.preventDefault(),m("onDblClick",A(S))},contextmenu:S=>{S.preventDefault(),m("onContextMenu",A(S))}},i={keydown:S=>m("onKeyDown",S),keyup:S=>m("onKeyUp",S)},{aggregator:b,updateAggregator:u,getSchemaItemsByCoordinates:f}=To({canvas:e,emit:m}),p=S=>{const M={edges:n,getNode:T,getEdge:C,getTheme:s,settings:a},L=n.value.map(H=>Xe(H,M)).filter(Boolean).map((H,Z)=>({...H,priority:Z*10})),Ae=E.value.map(H=>Je(H,s)).filter(Boolean).map((H,Z)=>({...H,priority:Z*10+1e3}));return S.push(...L),S.push(...Ae),S};u.push(p),Le(()=>{if(!e.value)throw new Error("canvas element not found");e.value.addEventListener("mousemove",w);for(const[S,M]of Object.entries(c))e.value.addEventListener(S,M);for(const[S,M]of Object.entries(i))document.addEventListener(S,M)}),Fe(()=>{if(!e.value)throw new Error("Canvas element not found");e.value.removeEventListener("mousemove",w);for(const[S,M]of Object.entries(c))e.value.removeEventListener(S,M);for(const[S,M]of Object.entries(i))document.removeEventListener(S,M)});const{nodeIdToNodeMap:x,edgeIdToEdgeMap:B}=Eo(E,n),{getNode:T,getEdge:C,addNode:D,addEdge:_,moveNode:R,editEdgeLabel:P,removeNode:G,removeEdge:O,bulkAddNode:z,bulkRemoveNode:Y,bulkAddEdge:k,bulkRemoveEdge:W}=wo({nodes:E,edges:n,nodeMap:x,edgeMap:B,emit:m,settings:a}),K=(S,M)=>{const L=f({x:S,y:M}).pop();if(L&&L.graphType==="node")return T(L.id)};let U;v("onMouseMove",({items:S})=>{const M=S.at(-1);if(!M||M.graphType!=="node")return;const L=T(M.id);L!==U&&(m("onNodeHoverChange",L,U),U=L)});const pe=S=>(U&&me(U.id,S),S);u.push(pe);const Se=S=>{E.value=S.nodes,n.value=S.edges,m("onGraphLoaded"),m("onStructureChange")},Ne=()=>{E.value=[],n.value=[],m("onGraphReset"),m("onStructureChange")};q(t,async(S,M)=>{m("onThemeChange",S,M)});const oe=I($(a.value));return q(a,S=>{const M=ye(oe.value,S);M&&(oe.value=$(a.value),m("onSettingsChange",M))},{deep:!0}),{nodes:E,edges:n,getNode:T,getEdge:C,addNode:D,addEdge:_,moveNode:R,editEdgeLabel:P,removeNode:G,removeEdge:O,bulkAddNode:z,bulkRemoveNode:Y,bulkAddEdge:k,bulkRemoveEdge:W,getSchemaItemsByCoordinates:f,getNodeByCoordinates:K,eventBus:g,subscribe:v,unsubscribe:l,emit:m,updateAggregator:u,aggregator:b,baseTheme:F(()=>Te[t.value]),themeName:t,getTheme:s,themeMap:d,settings:a,load:Se,reset:Ne,canvas:e,canvasFocused:y,graphAtMousePosition:r,updateGraphAtMousePosition:w,...N}},Do="use-marquee-graph",Mo={THEME_ID:Do},_o=e=>{const o=I(),t=I(),d=I(),{setTheme:s,removeTheme:a}=ge(e,Mo.THEME_ID),g=()=>s("nodeAnchorColor",h.TRANSPARENT),v=()=>a("nodeAnchorColor"),l=T=>{const{width:C,height:D}=T;return Math.abs(C*D)},m=({items:T,coords:C})=>{const D=T.at(-1);(D==null?void 0:D.graphType)!=="encapsulated-node-box"&&v(),D||N(C)},y=({items:T,coords:C})=>{if(!d.value)return;const D=T.at(-1);if((D==null?void 0:D.graphType)!=="encapsulated-node-box")return;const _=C.x-d.value.x,R=C.y-d.value.y;d.value=C;for(const P of e.focusedNodes.value)e.moveNode(P.id,{x:P.x+_,y:P.y+R});c()},E=({items:T,coords:C})=>{if(o.value)return;const D=T.at(-1);(D==null?void 0:D.graphType)==="encapsulated-node-box"&&(d.value=C,e.emit("onGroupDragStart",e.focusedNodes.value,C))},n=()=>{d.value&&(e.emit("onGroupDrop",e.focusedNodes.value,d.value),d.value=void 0)},r=()=>t.value={at:{x:1/0,y:1/0},width:0,height:0},N=T=>{g(),e.graphCursorDisabled.value=!0,o.value={at:T,width:0,height:0},r()},w=()=>{o.value&&(o.value=void 0,e.graphCursorDisabled.value=!1,v())},A=T=>{if(l(T)<100)return;const D=[];for(const{id:_,shape:R,graphType:P}of e.aggregator.value){const{marqueeSelectableGraphTypes:G}=e.settings.value;if(!G.includes(P))continue;R.efficientHitbox(T)&&D.push(_)}e.setFocus(D)},c=()=>{if(!t.value)return;if(e.focusedNodes.value.length<2)return r();let T=1/0,C=1/0,D=-1/0,_=-1/0;for(const R of e.focusedNodes.value){const P=e.getTheme("nodeSize",R),G=e.getTheme("nodeBorderWidth",R),O=P+G/2,{x:z,y:Y}=R;T=Math.min(T,z-O),C=Math.min(C,Y-O),D=Math.max(D,z+O),_=Math.max(_,Y+O)}T<1/0&&C<1/0&&D>-1/0&&_>-1/0?(t.value.at.x=T,t.value.at.y=C,t.value.width=D-T,t.value.height=_-C):(t.value.width=0,t.value.height=0)},i=({coords:T})=>{if(!o.value)return;const{x:C,y:D}=T;o.value.width=C-o.value.at.x,o.value.height=D-o.value.at.y,A(o.value)},b=T=>({id:"marquee-box",graphType:"marquee-box",shape:te({...T,color:e.getTheme("marqueeSelectionBoxColor"),stroke:{color:e.getTheme("marqueeSelectionBoxBorderColor"),width:2}}),priority:1/0}),u=T=>{if(!o.value)return T;const C=b(o.value);return T.push(C),T},f=T=>({id:"encapsulated-node-box",graphType:"encapsulated-node-box",shape:te({...T,color:e.getTheme("marqueeEncapsulatedNodeBoxColor"),stroke:{color:e.getTheme("marqueeEncapsulatedNodeBoxBorderColor"),width:2}}),priority:1/0}),p=T=>{if(!t.value)return T;const C=f(t.value);return T.push(C),T};e.updateAggregator.push(p),e.updateAggregator.push(u);const x=()=>{e.subscribe("onFocusChange",c),e.subscribe("onMouseDown",m),e.subscribe("onMouseUp",w),e.subscribe("onContextMenu",w),e.subscribe("onMouseMove",i),e.subscribe("onMouseDown",E),e.subscribe("onMouseUp",n),e.subscribe("onMouseMove",y),e.subscribe("onUndo",c),e.subscribe("onRedo",c)},B=()=>{e.unsubscribe("onFocusChange",c),e.unsubscribe("onMouseDown",m),e.unsubscribe("onMouseUp",w),e.unsubscribe("onContextMenu",w),e.unsubscribe("onMouseMove",i),e.unsubscribe("onMouseDown",E),e.unsubscribe("onMouseUp",n),e.unsubscribe("onMouseMove",y),e.unsubscribe("onUndo",c),e.unsubscribe("onRedo",c),o.value&&w()};return e.subscribe("onSettingsChange",T=>{T.marquee===!0?x():T.marquee===!1&&B()}),e.settings.value.marquee&&x(),{updateEncapsulatedNodeBox:c}},Ro=e=>{const o=I(),t=({items:v,coords:l})=>{const m=v.at(-1);if(!m||m.graphType!=="node")return;e.settings.value.nodeAnchors=!1;const y=e.getNode(m.id);y&&(o.value={node:y,coords:l},e.emit("onNodeDragStart",y))},d=()=>{o.value&&(e.emit("onNodeDrop",o.value.node),e.settings.value.nodeAnchors=!0,e.nodeAnchorSetParentNode(o.value.node.id),o.value=void 0)},s=({coords:v})=>{if(!o.value)return;const{node:l,coords:m}=o.value,y=v.x-m.x,E=v.y-m.y;e.moveNode(l.id,{x:l.x+y,y:l.y+E}),o.value.coords=v},a=()=>{e.subscribe("onMouseDown",t),e.subscribe("onMouseUp",d),e.subscribe("onMouseMove",s)},g=()=>{e.unsubscribe("onMouseDown",t),e.unsubscribe("onMouseUp",d),e.unsubscribe("onMouseMove",s),o.value&&d()};return e.subscribe("onSettingsChange",v=>{v.draggable===!1?g():v.draggable===!0&&a()}),e.settings.value.draggable&&a(),{activeDragNode:F(()=>{var v;return(v=o.value)==null?void 0:v.node})}},ko=e=>{const o=I(),t=I(),d=u=>{const f=e.getNode(u);if(!f)throw new Error("node not found");o.value=f,v(f)},s=()=>{o.value=void 0,t.value=void 0},a=u=>{const{getTheme:f}=e,p=f("nodeAnchorColor",u),x=f("nodeAnchorRadius",u),B=[];for(const T of g.value){const{x:C,y:D}=T,_={at:{x:C,y:D},radius:x,color:p};t.value&&t.value.direction===T.direction&&(_.at.x=t.value.x,_.at.y=t.value.y);const R=be(_);B.push({id:T.id,graphType:"node-anchor",shape:R,priority:1/0})}return B},g=I([]),v=u=>{if(!u)return g.value=[];const{getTheme:f}=e,p=f("nodeAnchorRadius",u),x=f("nodeSize",u),B=f("nodeBorderWidth",u),T=x-p/3+B/2;g.value=[{x:u.x,y:u.y-T,direction:"north"},{x:u.x+T,y:u.y,direction:"east"},{x:u.x,y:u.y+T,direction:"south"},{x:u.x-T,y:u.y,direction:"west"}].map(C=>({...C,id:J()}))},l=({items:u})=>{const f=u.at(-1);if(!f||f.graphType!=="node-anchor")return;const{id:p}=f;return g.value.find(x=>x.id===p)},m=()=>{if(!o.value||!t.value)return;const{x:u,y:f}=t.value,p={x:o.value.x,y:o.value.y},x={x:u,y:f},{getTheme:B}=e,T=B("linkPreviewColor",o.value,t.value),C=B("linkPreviewWidth",o.value,t.value);return{id:"link-preview",graphType:"link-preview",shape:he({start:p,end:x,color:T,width:C})}},y=({items:u})=>{if(t.value)return;const f=u.at(-1);if(!f)return s();if(f.graphType!=="node")return;const p=e.getNode(f.id);if(!p)throw new Error("node in aggregator but not in graph");const x=e.isFocused(p.id),B=e.focusedNodes.value.length>1;if(x&&B)return s();o.value=p,v(p)},E=u=>{if(!o.value)return;const f=l(u);f&&(t.value=f,e.emit("onNodeAnchorDragStart",o.value,f))},n=({coords:u})=>{if(!t.value)return;const{x:f,y:p}=u;t.value.x=f,t.value.y=p},r=()=>{if(t.value){if(!o.value)throw new Error("active anchor without parent node")}else return;e.emit("onNodeAnchorDrop",o.value,t.value),s()},N=u=>{if(!o.value)return u;const f=a(o.value);for(const p of f)u.push(p);return u},w=u=>{var T;if(!o.value||!t.value)return u;const{id:f}=o.value;me(f,u);const p=(T=u.find(C=>C.id===f))==null?void 0:T.priority;if(!p)return u;const x=m();if(!x)return u;const B={...x,priority:p-.1};return u.push(B),u};e.updateAggregator.push(N),e.updateAggregator.push(w);const A=u=>{var f;((f=o.value)==null?void 0:f.id)===u.id&&s()},c=()=>{if(!o.value)return;const u=e.isFocused(o.value.id),f=e.focusedNodes.value.length>1;u&&f&&s()},i=()=>{e.subscribe("onNodeRemoved",A),e.subscribe("onNodeMoved",s),e.subscribe("onNodeDrop",v),e.subscribe("onMouseMove",y),e.subscribe("onMouseMove",n),e.subscribe("onMouseDown",E),e.subscribe("onMouseUp",r),e.subscribe("onFocusChange",c)},b=()=>{e.unsubscribe("onNodeRemoved",A),e.unsubscribe("onNodeMoved",s),e.unsubscribe("onNodeDrop",v),e.unsubscribe("onMouseMove",y),e.unsubscribe("onMouseMove",n),e.unsubscribe("onMouseDown",E),e.unsubscribe("onMouseUp",r),e.unsubscribe("onFocusChange",c),s()};return e.subscribe("onSettingsChange",u=>{u.nodeAnchors===!0?i():u.nodeAnchors===!1&&b()}),e.settings.value.nodeAnchors&&i(),{nodeAnchorActiveAnchor:j(t),nodeAnchorParentNode:j(o),nodeAnchorSetParentNode:d}},Lo=(e=!1)=>{const o=v=>v.key===" "?"Space":v.key.length>1||e?v.key:v.key.toUpperCase(),t=I(""),d=F(()=>{let v;return t.value.split("+").filter(l=>{const m=l===v;return v=l,!m}).join("+")}),s=v=>{t.value.length>0&&(t.value+="+"),t.value+=o(v)},a=()=>{t.value=""},g=v=>d.value===v;return document.addEventListener("keydown",s),document.addEventListener("keyup",a),ve(()=>{document.removeEventListener("keydown",s),document.removeEventListener("keyup",a)}),{isPressed:g,currentKeyString:t}},Fo=e=>{const o=({coords:E,event:n})=>{e.addNode(E),setTimeout(()=>e.updateGraphAtMousePosition(n),10)},t=(E,n)=>{const N=e.getSchemaItemsByCoordinates(n).findLast(A=>A.graphType==="node");if(!N)return;const w=e.getNode(N.id);if(w&&!(e.settings.value.userAddedEdgeRuleNoSelfLoops&&E.id===w.id)){if(e.settings.value.userAddedEdgeRuleOneEdgePerPath){const A=e.edges.value.find(b=>b.from===E.id&&b.to===w.id),c=e.edges.value.find(b=>b.from===w.id&&b.to===E.id);if(A||c)return}e.addEdge({from:E.id,to:w.id,label:e.settings.value.userAddedEdgeLabel})}},d=()=>{e.bulkRemoveNode([...e.focusedItemIds.value]),e.bulkRemoveEdge([...e.focusedItemIds.value])},s={Mac:{"Meta+Z":()=>e.undo(),"Shift+Meta+Z":()=>e.redo(),"Meta+Shift+Z":()=>e.redo(),Backspace:d,"Meta+A":e.focusAll,Escape:e.resetFocus},Windows:{"Control+Z":()=>e.undo(),"Shift+Control+Z":()=>e.redo(),"Control+Shift+Z":()=>e.redo(),Backspace:d,"Control+A":e.focusAll,Escape:e.resetFocus}},a=window.navigator.userAgent.includes("Mac")?"Mac":"Windows",{isPressed:g}=Lo(),l={onDblClick:o,onKeyDown:E=>{if(e.settings.value.userEditable===!1||e.canvasFocused.value===!1)return;const n=s[a];for(const r in n)g(r)&&(n[r](),E.preventDefault())},onNodeAnchorDrop:t},m=()=>{for(const E in l)e.subscribe(E,l[E]);e.settings.value.nodeAnchors=!0,e.settings.value.edgeLabelsEditable=!0},y=()=>{for(const E in l)e.unsubscribe(E,l[E]);e.settings.value.nodeAnchors=!1,e.settings.value.edgeLabelsEditable=!1};e.settings.value.userEditable&&m(),e.subscribe("onSettingsChange",E=>{E.userEditable===!0?m():E.userEditable===!1&&y()})},Po=[h.RED_600,h.BLUE_600,h.GREEN_600,h.YELLOW_600],Oo=[3,6,9,12],ue=100,Uo=e=>{const o=I([]),t=I([]);return{clearHistory:()=>{o.value=[],t.value=[]},undo:()=>{const l=o.value.pop();if(!l)return;const{action:m,annotations:y}=l,E=y.map(({id:n})=>n);m==="add"?e.value=e.value.filter(({id:n})=>!E.includes(n)):m==="remove"&&e.value.push(...y),t.value.push(l)},redo:()=>{const l=t.value.pop();if(!l)return;const{action:m,annotations:y}=l,E=y.map(({id:n})=>n);m==="add"?e.value.push(...y):m==="remove"&&(e.value=e.value.filter(({id:n})=>!E.includes(n))),o.value.push(l)},addToUndoStack:l=>{o.value.push(l),o.value.length>ue&&o.value.shift()},addToRedoStack:l=>{t.value.push(l),t.value.length>ue&&t.value.shift()},canUndo:F(()=>o.value.length!==0),canRedo:F(()=>t.value.length!==0)}},Go=e=>{const o=I(Po[0]),t=I(Oo[1]),d=I(!1),s=I(new Set),a=I([]),g=I([]),v=I(!1),l=I(),m=I(!1),y=Uo(g),E=()=>{g.value.length!==0&&(y.addToUndoStack({action:"remove",annotations:g.value}),g.value=[])},n=({coords:i})=>{v.value=!0,l.value=i,a.value=[i]},r=({coords:i})=>{if(!(!v.value||!l.value)){if(d.value){const b=g.value.filter(u=>V.scribble(u).hitbox(i));for(const u of b)s.value.add(u.id);return}l.value=i,a.value.push(i)}},N=()=>{if(!v.value||(v.value=!1,l.value=void 0,a.value.length===0))return;if(d.value){const b=g.value.filter(u=>s.value.has(u.id));y.addToUndoStack({action:"remove",annotations:b}),g.value=g.value.filter(u=>!s.value.has(u.id)),s.value.clear();return}const i={id:J(),type:"draw",points:a.value,color:o.value,brushWeight:t.value};g.value.push(i),y.addToUndoStack({action:"add",annotations:[i]}),a.value=[]};q(d,()=>{e.canvas.value&&(e.canvas.value.style.cursor=d.value?"none":"crosshair")});const w=i=>{if(!m.value)return i;if(d.value){const b=V.circle({at:e.graphAtMousePosition.value.coords,radius:10,color:h.TRANSPARENT,stroke:{color:h.WHITE+"60",width:2}});i.push({graphType:"annotation",id:b.id,shape:b,priority:5050})}else if(a.value.length>0){const b=V.scribble({type:"draw",points:a.value,color:o.value,brushWeight:t.value});i.push({graphType:"annotation",id:b.id,shape:b,priority:5001})}for(const b of g.value){const u=s.value.has(b.id);i.push({graphType:"annotation",id:b.id,shape:V.scribble({...b,color:b.color+(u?"50":"")}),priority:5e3})}return i};return e.updateAggregator.push(w),{clearAnnotations:E,annotationActive:m,annotationErasing:d,annotationColor:o,annotationBrushWeight:t,activateAnnotation:()=>{e.canvas.value&&(m.value=!0,e.settings.value.userEditable=!1,e.settings.value.marquee=!1,e.settings.value.focusable=!1,e.graphCursorDisabled.value=!0,e.canvas.value.style.cursor="crosshair",e.subscribe("onMouseDown",n),e.subscribe("onMouseMove",r),e.subscribe("onMouseUp",N))},deactivateAnnotation:()=>{e.canvas.value&&(m.value=!1,d.value=!1,e.settings.value.userEditable=!0,e.settings.value.marquee=!0,e.settings.value.focusable=!0,e.graphCursorDisabled.value=!1,e.canvas.value.style.cursor="default",e.unsubscribe("onMouseDown",n),e.unsubscribe("onMouseMove",r),e.unsubscribe("onMouseUp",N))},undoAnnotation:y.undo,redoAnnotation:y.redo,canUndoAnnotation:y.canUndo,canRedoAnnotation:y.canRedo}},Wo=["node","edge"],Ho="use-focus-graph",Ko=e=>{const{setTheme:o}=ge(e,Ho),t=I(new Set),d=I(!1),s=c=>{const i=c.filter(p=>!e.settings.value.focusBlacklist.includes(p));if(i.length===t.value.size&&i.every(p=>t.value.has(p)))return;const f=new Set([...t.value]);t.value=new Set(i),e.emit("onFocusChange",t.value,f)},a=c=>{if(t.value.has(c)||e.settings.value.focusBlacklist.includes(c))return;const u=new Set([...t.value]);t.value.add(c),e.emit("onFocusChange",t.value,u)},g=c=>{var b,u;const i=Ee(e.canvas);(u=(b=c.shape).activateTextArea)==null||u.call(b,i,f=>{const p=e.getEdge(c.id);if(!p)throw new Error("textarea only implemented for edges");const x=e.settings.value.edgeInputToLabel(f);x===void 0||p.label===x||e.editEdgeLabel(p.id,x)})},v=()=>{const c=Array.from(t.value),i=c.filter(b=>e.getNode(b)||e.getEdge(b));i.length!==c.length&&s(i)},l=({items:c,coords:i})=>{var x,B;const b=c.at(-1);if(!b)return d.value?void 0:m();if(((B=(x=b.shape).textHitbox)==null?void 0:B.call(x,i))&&e.settings.value.edgeLabelsEditable&&b.graphType==="edge")return m(),g(b);Wo.some(T=>T===b.graphType)&&(d.value?a(b.id):s([b.id]))},m=()=>s([]),y=()=>{const c=e.nodes.value.map(b=>b.id),i=e.edges.value.map(b=>b.id);s([...c,...i])},E=({id:c},{focus:i})=>{i&&s([c])},n=c=>t.value.has(c);o("nodeColor",c=>{if(n(c.id))return e.getTheme("nodeFocusColor",c)}),o("nodeBorderColor",c=>{if(n(c.id))return e.getTheme("nodeFocusBorderColor",c)}),o("nodeTextColor",c=>{if(n(c.id))return e.getTheme("nodeFocusTextColor",c)}),o("edgeColor",c=>{if(n(c.id))return e.getTheme("edgeFocusColor",c)}),o("edgeTextColor",c=>{if(n(c.id))return e.getTheme("edgeFocusTextColor",c)}),o("nodeAnchorColor",c=>{if(n(c.id))return e.getTheme("nodeAnchorColorWhenParentFocused",c)});const r=c=>{c.key==="Shift"&&(d.value=!0)},N=c=>{c.key==="Shift"&&(d.value=!1)},w=()=>{e.subscribe("onNodeAdded",E),e.subscribe("onEdgeAdded",E),e.subscribe("onMouseDown",l),e.subscribe("onKeyDown",r),e.subscribe("onKeyUp",N),e.subscribe("onStructureChange",v)},A=()=>{e.unsubscribe("onNodeAdded",E),e.unsubscribe("onEdgeAdded",E),e.unsubscribe("onMouseDown",l),e.unsubscribe("onKeyDown",r),e.unsubscribe("onKeyUp",N),e.unsubscribe("onStructureChange",v),m()};return e.subscribe("onSettingsChange",c=>{c.focusable===!1?A():c.focusable===!0&&w()}),e.settings.value.focusable&&w(),{focusedItemIds:j(t),setFocus:s,resetFocus:m,addToFocus:a,isFocused:n,focusAll:y,focusedNodes:F(()=>e.nodes.value.filter(c=>n(c.id))),focusedEdges:F(()=>e.edges.value.filter(c=>n(c.id)))}},qo={focus:!0},zo={focus:!0},ie=100,ce=3,Yo=e=>{const o=I([]),t=I([]),d=n=>{o.value.push(n),o.value.length>ie&&o.value.shift()},s=n=>{t.value.push(n),t.value.length>ie&&t.value.shift()};e.subscribe("onNodeAdded",(n,{history:r})=>{r&&d({action:"add",affectedItems:[{graphType:"node",data:n}]})}),e.subscribe("onBulkNodeAdded",(n,{history:r})=>{r&&d({action:"add",affectedItems:n.map(N=>({graphType:"node",data:N}))})}),e.subscribe("onNodeRemoved",(n,r,{history:N})=>{if(!N)return;const w=r.map(A=>({graphType:"edge",data:A}));d({action:"remove",affectedItems:[{graphType:"node",data:n},...w]})}),e.subscribe("onBulkNodeRemoved",(n,r,{history:N})=>{if(!N)return;const w=n.map(c=>({graphType:"node",data:c})),A=r.map(c=>({graphType:"edge",data:c}));d({action:"remove",affectedItems:[...w,...A]})}),e.subscribe("onEdgeLabelEdited",(n,r,{history:N})=>{N&&d({action:"edit",affectedItems:[{graphType:"edge",data:{id:n.id,from:r,to:n.label}}]})}),e.subscribe("onEdgeAdded",(n,{history:r})=>{r&&d({action:"add",affectedItems:[{graphType:"edge",data:n}]})}),e.subscribe("onBulkEdgeAdded",(n,{history:r})=>{r&&d({action:"add",affectedItems:n.map(N=>({graphType:"edge",data:N}))})}),e.subscribe("onEdgeRemoved",(n,{history:r})=>{r&&d({action:"remove",affectedItems:[{graphType:"edge",data:n}]})}),e.subscribe("onBulkEdgeRemoved",(n,{history:r})=>{r&&d({action:"remove",affectedItems:n.map(N=>({graphType:"edge",data:N}))})});const a=I();e.subscribe("onGroupDragStart",(n,r)=>{a.value={startingCoordinates:r,nodes:n}}),e.subscribe("onGroupDrop",(n,r)=>{if(!a.value)throw new Error("dropped a group we didn't know was being dragged");if(a.value.nodes.length!==n.length)throw new Error("group size mismatch");const N=a.value.startingCoordinates.y-r.y,w=a.value.startingCoordinates.x-r.x;Math.sqrt(N**2+w**2)<ce||d({action:"move",affectedItems:a.value.nodes.map(c=>({graphType:"node",data:{id:c.id,from:{x:c.x+w,y:c.y+N},to:{x:c.x,y:c.y}}}))})});const g=I();e.subscribe("onNodeDragStart",n=>{g.value={id:n.id,from:{x:n.x,y:n.y},to:{x:n.x,y:n.y}}}),e.subscribe("onNodeDrop",n=>{if(!g.value)throw new Error("dropped a node we didn't know was being dragged");if(g.value.id!==n.id)throw new Error("node ID mismatch");g.value.to={x:n.x,y:n.y};const r=g.value.from.y-g.value.to.y,N=g.value.from.x-g.value.to.x;Math.sqrt(r**2+N**2)<ce||d({action:"move",affectedItems:[{graphType:"node",data:g.value}]})});const v=(n={})=>{const r=o.value.pop();if(r)return s(r),m(r),e.emit("onUndo",r,{...qo,...n}),r},l=(n={})=>{const r=t.value.pop();if(r)return d(r),y(r),e.emit("onRedo",r,{...zo,...n}),r},m=n=>{if(n.action==="add")for(const r of n.affectedItems)r.graphType==="node"?e.removeNode(r.data.id,{history:!1}):r.graphType==="edge"&&e.removeEdge(r.data.id,{history:!1});else if(n.action==="remove")for(const r of n.affectedItems)r.graphType==="node"?e.addNode(r.data,{history:!1,focus:!1}):r.graphType==="edge"&&e.addEdge(r.data,{history:!1,focus:!1});else if(n.action==="move"){for(const r of n.affectedItems)if(r.graphType==="node"){const{from:N,id:w}=r.data;e.moveNode(w,{x:N.x,y:N.y})}}else if(n.action==="edit")for(const r of n.affectedItems)e.editEdgeLabel(r.data.id,r.data.from,{history:!1})},y=n=>{if(n.action==="add")for(const r of n.affectedItems)r.graphType==="node"?e.addNode(r.data,{history:!1,focus:!1}):r.graphType==="edge"&&e.addEdge(r.data,{history:!1,focus:!1});else if(n.action==="remove")for(const r of n.affectedItems)r.graphType==="node"?e.removeNode(r.data.id,{history:!1}):r.graphType==="edge"&&e.removeEdge(r.data.id,{history:!1});else if(n.action==="move"){for(const r of n.affectedItems)if(r.graphType==="node"){const{to:N,id:w}=r.data;e.moveNode(w,{x:N.x,y:N.y})}}else if(n.action==="edit")for(const r of n.affectedItems)e.editEdgeLabel(r.data.id,r.data.to,{history:!1})},E=()=>{o.value=[],t.value=[]};return{undo:v,redo:l,canUndo:F(()=>o.value.length>0),canRedo:F(()=>t.value.length>0),undoStack:o,redoStack:t,addToUndoStack:d,addToRedoStack:s,clearHistory:E}},Vo=e=>{const o={get:()=>JSON.parse(localStorage.getItem(e.settings.value.persistentStorageKey+"-nodes")??"[]"),set:l=>{const m=l.filter(y=>!e.settings.value.persistentBlacklist.has(y.id));localStorage.setItem(e.settings.value.persistentStorageKey+"-nodes",JSON.stringify(m))}},t={get:()=>JSON.parse(localStorage.getItem(e.settings.value.persistentStorageKey+"-edges")??"[]"),set:l=>{const m=l.filter(y=>!e.settings.value.persistentBlacklist.has(y.id));localStorage.setItem(e.settings.value.persistentStorageKey+"-edges",JSON.stringify(m))}},d=async()=>{await new Promise(l=>setTimeout(l,10)),o.set(e.nodes.value),t.set(e.edges.value)},s=()=>e.load({nodes:o.get(),edges:t.get()}),a=["onStructureChange","onNodeDrop","onGroupDrop"],g=()=>{a.forEach(l=>e.subscribe(l,d))},v=()=>{a.forEach(l=>e.unsubscribe(l,d))};return e.subscribe("onSettingsChange",l=>{if(v(),"persistent"in l&&!l.persistent)return;if("persistent"in l&&l.persistent){s(),g();return}"persistentStorageKey"in l&&s(),g()}),e.settings.value.persistent&&(queueMicrotask(s),g()),{trackGraphState:d}},Xo=(e,o={})=>{const t=Bo(e,o),d=Ko(t),s=Yo(t),a=_o({...t,...d}),g=ko({...t,...d}),v=Ro({...t,...g}),l=Go(t),m=Vo(t),y=Ye(t);return Fo({...t,...s,...d}),{...t,...d,...s,...a,...v,...g,...l,...m,...y,helpers:Ve(t)}},Qo=Oe({__name:"Graph",props:{graph:{}},emits:["graphRef"],setup(e,{emit:o}){const t=e,d=o,s=l=>d("graphRef",l),a=I(t.graph.getTheme("graphBgPatternColor")),g=I(t.graph.getTheme("graphBgColor")),v=async()=>{a.value=t.graph.getTheme("graphBgPatternColor"),g.value=t.graph.getTheme("graphBgColor")};return t.graph.subscribe("onThemeChange",v),(l,m)=>(Ge(),Ue(qe,{onCanvasRef:s,color:g.value,"pattern-color":a.value},null,8,["color","pattern-color"]))}});export{Oo as B,Po as C,Ao as L,Te as T,Qo as _,Co as g,ro as i,Xo as u};
