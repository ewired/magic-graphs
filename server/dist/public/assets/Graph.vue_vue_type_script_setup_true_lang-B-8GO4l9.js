import{B as d,z as Y,am as ne,an as Te,$ as se,H as W,g as w,y as he,ao as ye,ap as j,aq as Ee,ai as Se,aj as Ce,ar as z,as as fe,u as ve,A as X,e as Ne,o as xe,N as Ae}from"./index-B3kCtg6Q.js";import{a as Ie,c as pe,e as we,f as Be,h as De,l as me,i as Me,g as _e,j as Re,r as re,s as V,_ as ke}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-BKE-lbzv.js";const ee={nodeShape:"circle",nodeSize:35,nodeBorderWidth:8,nodeTextSize:24,nodeAnchorRadius:Math.ceil(Math.sqrt(35)*2),edgeWidth:10,edgeTextSize:20,nodeText:({label:r})=>r,edgeText:({label:r})=>r,edgeTextFontWeight:"bold",linkPreviewWidth:10},Le="rgb(100, 60, 70)",Fe={primaryColor:d.RED_700,secondaryColor:d.GRAY_900,tertiaryColor:d.RED_900,primaryTextColor:d.WHITE,secondaryTextColor:d.WHITE,tertiaryTextColor:d.WHITE,nodeBorderColor:d.BLACK,nodeColor:d.STONE_600,nodeTextColor:d.WHITE,nodeFocusBorderColor:d.RED_700,nodeFocusColor:Le,nodeFocusTextColor:d.WHITE,edgeColor:d.STONE_900,edgeFocusColor:d.RED_700,edgeFocusTextColor:d.WHITE,edgeTextColor:d.WHITE,graphBgColor:d.GRAY_600,graphBgPatternColor:d.WHITE+"15",nodeAnchorColorWhenParentFocused:d.RED_800,nodeAnchorColor:d.GRAY_900,linkPreviewColor:d.BLACK,marqueeSelectionBoxColor:d.WHITE+"15",marqueeSelectionBoxBorderColor:d.WHITE,marqueeEncapsulatedNodeBoxBorderColor:d.RED_700,marqueeEncapsulatedNodeBoxColor:d.RED_700+"20",...ee},Pe={primaryColor:d.BLUE_500,secondaryColor:d.BLUE_700,tertiaryColor:d.BLUE_900,primaryTextColor:d.WHITE,secondaryTextColor:d.WHITE,tertiaryTextColor:d.WHITE,nodeColor:d.GRAY_50,nodeBorderColor:d.GRAY_800,nodeFocusBorderColor:d.BLUE_600,nodeFocusColor:d.BLUE_100,nodeTextColor:d.GRAY_900,nodeFocusTextColor:d.GRAY_900,edgeColor:d.GRAY_800,edgeTextColor:d.GRAY_900,edgeFocusColor:d.BLUE_600,edgeFocusTextColor:d.BLACK,graphBgColor:d.GRAY_200,graphBgPatternColor:d.BLACK+"15",nodeAnchorColor:d.BLACK,nodeAnchorColorWhenParentFocused:d.BLUE_900,linkPreviewColor:d.BLACK,marqueeSelectionBoxColor:d.BLUE_300+"15",marqueeSelectionBoxBorderColor:d.BLUE_500,marqueeEncapsulatedNodeBoxBorderColor:d.BLUE_700,marqueeEncapsulatedNodeBoxColor:d.BLUE_700+"05",...ee},Oe={primaryColor:d.PINK_500,secondaryColor:d.PINK_700,tertiaryColor:d.PINK_900,primaryTextColor:d.WHITE,secondaryTextColor:d.WHITE,tertiaryTextColor:d.WHITE,nodeColor:d.PINK_100,nodeBorderColor:d.PINK_400,nodeFocusBorderColor:d.PURPLE_600,nodeFocusColor:d.PURPLE_200,nodeTextColor:d.PINK_600,nodeFocusTextColor:d.PURPLE_900,edgeColor:d.PINK_600,edgeTextColor:d.PINK_600,edgeFocusColor:d.PURPLE_600,edgeFocusTextColor:d.PURPLE_600,graphBgColor:d.PINK_200,graphBgPatternColor:d.PINK_900+"15",nodeAnchorColor:d.PINK_500,nodeAnchorColorWhenParentFocused:d.PURPLE_700,linkPreviewColor:d.PINK_900,marqueeSelectionBoxColor:d.PINK_300+"15",marqueeSelectionBoxBorderColor:d.PINK_500,marqueeEncapsulatedNodeBoxBorderColor:d.PINK_700,marqueeEncapsulatedNodeBoxColor:d.PINK_700+"05",...ee},$={light:Pe,dark:Fe,girl:Oe},Ue=(r,i)=>{const e=Ie();Y(e,()=>{const s=r.theme.value;e.value?Object.assign(s,{...$.dark,...i}):Object.assign(s,{...$.light,...i})},{immediate:!0})},Ge=(r,i)=>{const e=i("nodeColor",r),s=i("nodeBorderColor",r),o=i("nodeSize",r),t=i("nodeBorderWidth",r),y=i("nodeText",r),g=i("nodeTextSize",r),m=i("nodeTextColor",r),v=i("nodeShape",r),S=pe({at:{x:r.x,y:r.y},radius:o,color:e,stroke:{color:s,width:t},textArea:{text:{content:y,fontSize:g,fontWeight:"bold",color:m},color:d.TRANSPARENT}}),E=we({at:{x:r.x-o,y:r.y-o},size:o*2,color:e,stroke:{color:s,width:t},textArea:{text:{content:y,fontSize:g,fontWeight:"bold",color:m},color:d.TRANSPARENT}});return{shape:v==="circle"?S:E,id:r.id,graphType:"node"}},Ke=1.618,ae=2,We=(r,i)=>{const{displayEdgeLabels:e,isGraphDirected:s}=i.settings.value,[o,t]=ne(r.id,i),g=Te(o.id,t.id,i).length>1,m=t===o,v=i.getTheme("nodeBorderWidth",o),S=i.getTheme("nodeBorderWidth",t),E=i.getTheme("nodeSize",o),C=i.getTheme("nodeSize",t),b=Math.atan2(t.y-o.y,t.x-o.x),u=S/2+ae,c={x:(C+u)*Math.cos(b),y:(C+u)*Math.sin(b)},T={x:o.x,y:o.y},l={x:t.x-(s?c.x:0),y:t.y-(s?c.y:0)},f=i.getTheme("edgeWidth",r),n=f*1.2;g&&(T.x+=Math.cos(b+Math.PI/2)*n,T.y+=Math.sin(b+Math.PI/2)*n,l.x+=Math.cos(b+Math.PI/2)*n,l.y+=Math.sin(b+Math.PI/2)*n);const h=Be(T,i.edges.value.filter(k=>(k.from===o.id||k.to===t.id)&&k.from!==k.to).map(k=>{const[F,K]=ne(k.id,i);return o.id===F.id?{x:K.x,y:K.y}:{x:F.x,y:F.y}}).filter((k,F,K)=>F===K.findIndex(J=>J.x===k.x&&J.y===k.y))),a=i.getTheme("edgeColor",r),p=i.getTheme("edgeTextColor",r),x=i.getTheme("graphBgColor"),B=i.getTheme("edgeTextSize",r),M=i.getTheme("edgeTextFontWeight",r),_={color:x,activeColor:x,text:{content:r.label,color:p,fontSize:B,fontWeight:M}},L=e?_:void 0,N=(E+v)*Ke,I=N-(E+v/2)-ae;if(m)return{shape:De({spacing:f*1.2,at:{x:o.x,y:o.y},upDistance:N,downDistance:I,rotation:h,lineWidth:f,color:a,textArea:L}),id:r.id,graphType:"edge"};const D=E+v/2+C+S/2,P=(o.x-t.x)**2+(o.y-t.y)**2;if(D**2>P)return;if(!s)return{shape:me({start:T,end:l,width:f,color:a,textArea:L}),id:r.id,graphType:"edge"};const U=E>=50?.9:E>=25?1:1.3;return{shape:Me({start:T,end:l,width:f,textOffsetFromCenter:E**U,color:a,textArea:L}),id:r.id,graphType:"edge"}},He=()=>({primaryColor:[],secondaryColor:[],tertiaryColor:[],primaryTextColor:[],secondaryTextColor:[],tertiaryTextColor:[],nodeSize:[],nodeBorderWidth:[],nodeColor:[],nodeBorderColor:[],nodeFocusColor:[],nodeFocusBorderColor:[],nodeText:[],nodeFocusTextColor:[],nodeTextSize:[],nodeTextColor:[],nodeShape:[],edgeColor:[],edgeWidth:[],edgeText:[],edgeTextSize:[],edgeTextColor:[],edgeFocusTextColor:[],edgeTextFontWeight:[],edgeFocusColor:[],graphBgColor:[],graphBgPatternColor:[],nodeAnchorRadius:[],nodeAnchorColor:[],nodeAnchorColorWhenParentFocused:[],linkPreviewColor:[],linkPreviewWidth:[],marqueeSelectionBoxColor:[],marqueeSelectionBoxBorderColor:[],marqueeEncapsulatedNodeBoxColor:[],marqueeEncapsulatedNodeBoxBorderColor:[]}),qe=r=>Object.prototype.toString.call(r)==="[object Object]",Q=(r,i)=>{const e={};if(!r)return i;if(!i)return null;const s=Object.keys(r),o=Object.keys(i);for(const t of o)s.includes(t)||(e[t]=i[t]);for(const t of s){if(qe(r[t])){const y=Q(r[t],i[t]);y&&(e[t]=y);continue}if(Array.isArray(r[t])){JSON.stringify(r[t])!==JSON.stringify(i[t])&&(e[t]=i[t]);continue}else r[t]!==i[t]&&(e[t]=i[t])}return Object.keys(e).length?e:null},ze=r=>({subscribe:(i,e)=>r[i].add(e),unsubscribe:(i,e)=>r[i].delete(e),emit:(i,...e)=>{for(const s of r[i])s(...e)}}),Ye=()=>({onStructureChange:new Set,onNodeAdded:new Set,onBulkNodeAdded:new Set,onNodeRemoved:new Set,onBulkNodeRemoved:new Set,onNodeMoved:new Set,onBulkNodeMoved:new Set,onEdgeAdded:new Set,onBulkEdgeAdded:new Set,onEdgeRemoved:new Set,onBulkEdgeRemoved:new Set,onEdgeLabelChange:new Set,onRepaint:new Set,onNodeHoverChange:new Set,onGraphReset:new Set,onClick:new Set,onMouseDown:new Set,onMouseUp:new Set,onMouseMove:new Set,onDblClick:new Set,onContextMenu:new Set,onKeyDown:new Set,onKeyUp:new Set,onThemeChange:new Set,onSettingsChange:new Set,onUndo:new Set,onRedo:new Set,onFocusChange:new Set,onNodeDragStart:new Set,onNodeDrop:new Set,onNodeAnchorDragStart:new Set,onNodeAnchorDrop:new Set,onGroupDragStart:new Set,onGroupDrop:new Set}),ie=r=>r==null,Je=r=>{const i=r.trim().split("/").filter(Boolean);if(i.length!==2)return!1;const[e,s]=i.map(Number);return!(ie(e)||ie(s))},Ve=r=>{if(!Je(r))return;const i=r.split("/"),[e,s]=i.map(Number);return e/s},je={displayEdgeLabels:!0,edgeLabelsEditable:!0,edgeInputToLabel:r=>{var s;const i=r.trim();if(!i)return;const e=(s=Ve(i))==null?void 0:s.toFixed(2);return e==="Infinity"?"∞":e==="-Infinity"?"-∞":e===void 0&&isNaN(Number(i))?void 0:e??i},newNodeLabelGetter:null,isGraphDirected:!0},Ze={focusable:!0,focusBlacklist:[]},Xe={draggable:!0},$e={nodeAnchors:!0},Qe={marquee:!0,marqueeSelectableGraphTypes:["node","edge"]},eo={userEditable:!0,userAddedEdgeLabel:"1",userAddedEdgeRuleNoSelfLoops:!1,userAddedEdgeRuleOneEdgePerPath:!1},oo={persistent:!0,persistentStorageKey:"graph",persistentTrackTheme:!1,persistentTrackSettings:!1},to={},no={...je,...Ze,...Xe,...$e,...Qe,...eo,...oo,...to},so=(r,i)=>(e,...s)=>{const o=i[e].findLast(y=>{const g=y.value;return se(g,...s)??!1}),t=(o==null?void 0:o.value)??r.value[e];if(!t)throw new Error(`Theme property "${e}" not found`);return se(t,...s)},ro=(r,i)=>{const e=W(()=>{const o=new Map;for(const t of r.value)o.set(t.id,t);return o}),s=W(()=>{const o=new Map;for(const t of i.value)o.set(t.id,t);return o});return{nodeIdToNodeMap:e,edgeIdToEdgeMap:s}},ao=({canvas:r,emit:i})=>{const e=w([]),s=[],o=()=>{var C,b,u,c;if(!r.value)return;const g=r.value.getContext("2d");if(!g)return;g.clearRect(0,0,r.value.width,r.value.height);const m=s.reduce((T,l)=>l(T),[]);e.value=[...m.sort((T,l)=>T.priority-l.priority)];const v=e.value.findLastIndex(T=>T.graphType==="edge"),S=e.value.slice(0,v+1),E=e.value.slice(v+1);for(const T of S)T.shape.drawShape(g);for(const T of S)(b=(C=T.shape).drawTextAreaMatte)==null||b.call(C,g);for(const T of S)(c=(u=T.shape).drawText)==null||c.call(u,g);for(const T of E)T.shape.draw(g);i("onRepaint",g,"loop")},t=setInterval(o,1e3/60);return he(()=>{clearInterval(t)}),setTimeout(o,1e3),{aggregator:e,updateAggregator:s,getSchemaItemsByCoordinates:g=>e.value.sort((m,v)=>m.priority-v.priority).filter(m=>{var v,S;return m.shape.shapeHitbox(g)||((S=(v=m.shape).textHitbox)==null?void 0:S.call(v,g))})}},io={broadcast:!0,focus:!0,history:!0},uo={broadcast:!0,focus:!1,history:!0},ue={broadcast:!0,history:!0},ce={broadcast:!0,focus:!1,history:!0},de={broadcast:!0,history:!0},co={broadcast:!0},lo={label:""},go=({nodes:r,edges:i,nodeMap:e,edgeMap:s,emit:o,settings:t})=>{const y=l=>e.value.get(l),g=l=>s.value.get(l),m=(l,f={})=>{if(l!=null&&l.id&&y(l.id)){console.warn("prevented adding a node with an existing id, this shouldn't happen");return}const n={...io,...f},h=t.value.newNodeLabelGetter??ye({nodes:r}),a={id:l.id??j(),label:l.label??h(),x:l.x??0,y:l.y??0};return r.value.push(a),o("onNodeAdded",a,n),o("onStructureChange",r.value,i.value),a},v=(l,f={})=>{if(l.length===0)return;const n={...uo,...f},h=[];for(const a of l){const p=m(a,{focus:!1,broadcast:!1,history:!1});p&&h.push(p)}h.length!==0&&o("onBulkNodeAdded",h,n)},S=(l,f={})=>{const n={...ce,...f},{isGraphDirected:h}=t.value,[a,p]=[y(l.from),y(l.to)];if(!a||!p)return;if(h){if(i.value.find(M=>M.from===l.from&&M.to===l.to))return}else if(i.value.find(M=>M.from===l.from&&M.to===l.to||M.from===l.to&&M.to===l.from))return;const x={...lo,id:j(),...l};return i.value.push(x),o("onEdgeAdded",x,n),o("onStructureChange",r.value,i.value),x},E=(l,f={})=>{if(l.length===0)return;const n={...ce,...f},h=[];for(const a of l){const p=S(a,{broadcast:!1,history:!1});p&&h.push(p)}h.length!==0&&o("onBulkEdgeAdded",h,n)},C=(l,f,n={})=>{const h=y(l);if(!h)return;const a={...co,...n};h.x=f.x,h.y=f.y,o("onNodeMoved",h,a)},b=(l,f={})=>{const n=y(l);if(!n)return;const h={...ue,...f},p=Ee(n.id,{edges:i,settings:t}).map(x=>c(x.id,{broadcast:!1,history:!1})).filter(Boolean);return r.value=r.value.filter(x=>x.id!==n.id),o("onNodeRemoved",n,p,h),o("onStructureChange",r.value,i.value),[n,p]},u=(l,f={})=>{if(l.length===0)return;const n={...ue,...f},h=[],a=[];for(const p of l){const x=b(p,{broadcast:!1,history:!1});if(!x)continue;const[B,M]=x;h.push(B),a.push(...M)}h.length!==0&&o("onBulkNodeRemoved",h,a,n)},c=(l,f={})=>{const n=g(l);if(!n)return;const h={...de,...f};return i.value=i.value.filter(a=>a.id!==n.id),o("onEdgeRemoved",n,h),o("onStructureChange",r.value,i.value),n};return{getNode:y,getEdge:g,addNode:m,addEdge:S,moveNode:C,removeNode:b,removeEdge:c,bulkAddNode:v,bulkRemoveNode:u,bulkAddEdge:E,bulkRemoveEdge:(l,f={})=>{if(l.length===0)return;const n={...de,...f},h=[];for(const a of l){const p=c(a,{broadcast:!1,history:!1});p&&h.push(p)}if(h.length!==0)return o("onBulkEdgeRemoved",h,n),h}}},ho=({subscribe:r,canvas:i,graphAtMousePosition:e})=>{const s=w(!1),o=w(!1),t=w({node:"grab",edge:"pointer","node-anchor":"grab","encapsulated-node-box":"move"}),y=w(),g=W(()=>!!y.value),m=C=>{y.value=C},v=()=>{y.value=void 0},S=C=>{var u;if(!C)return"default";if(g.value)return((u=y.value)==null?void 0:u.call(y,C))??!1?"pointer":"default";const b=t.value[C.graphType]??"default";return b==="grab"&&s.value?"grabbing":b},E=({items:C})=>{if(!i.value||o.value)return;const b=C.at(-1);i.value.style.cursor=S(b)};return r("onMouseDown",C=>{s.value=!0,E(C)}),r("onMouseUp",C=>{s.value=!1,E(C)}),r("onMouseMove",E),Y(t,()=>{E({items:e.value.items})},{deep:!0}),{graphToCursorMap:t,activateCursorSelectMode:m,deactivateCursorSelectMode:v,graphCursorDisabled:o}},fo=(r,i={})=>{const e=w({...$.light,...i.theme}),s=He(),o=so(e,s),t=w({...no,...i.settings}),y=Ye(),{subscribe:g,unsubscribe:m,emit:v}=ze(y),S=w([]),E=w([]),C=w({coords:{x:0,y:0},items:[]}),b=ho({canvas:r,subscribe:g,graphAtMousePosition:C}),u=A=>{const R=_e(r),O=Re(A,R);C.value={coords:O,items:h(O)}},c=A=>({...C.value,event:A}),T={click:A=>v("onClick",c(A)),mousemove:A=>v("onMouseMove",c(A)),mousedown:A=>v("onMouseDown",c(A)),mouseup:A=>v("onMouseUp",c(A)),dblclick:A=>v("onDblClick",c(A)),contextmenu:A=>v("onContextMenu",c(A))},l={keydown:A=>v("onKeyDown",A),keyup:A=>v("onKeyUp",A)},{aggregator:f,updateAggregator:n,getSchemaItemsByCoordinates:h}=ao({canvas:r,emit:v}),a=A=>{const R={edges:E,getNode:B,getEdge:M,getTheme:o,settings:t},O=E.value.map(H=>We(H,R)).filter(Boolean).map((H,Z)=>({...H,priority:Z*10})),be=S.value.map(H=>Ge(H,o)).filter(Boolean).map((H,Z)=>({...H,priority:Z*10+1e3}));return A.push(...O),A.push(...be),A};n.push(a),Se(()=>{if(!r.value)throw new Error("canvas element not found");r.value.addEventListener("mousemove",u);for(const[A,R]of Object.entries(T))r.value.addEventListener(A,R);for(const[A,R]of Object.entries(l))document.addEventListener(A,R)}),Ce(()=>{if(!r.value)throw new Error("Canvas element not found");r.value.removeEventListener("mousemove",u);for(const[A,R]of Object.entries(T))r.value.removeEventListener(A,R);for(const[A,R]of Object.entries(l))document.removeEventListener(A,R)});const{nodeIdToNodeMap:p,edgeIdToEdgeMap:x}=ro(S,E),{getNode:B,getEdge:M,addNode:_,addEdge:L,moveNode:N,removeNode:I,removeEdge:D,bulkAddNode:P,bulkRemoveNode:G,bulkAddEdge:U,bulkRemoveEdge:q}=go({nodes:S,edges:E,nodeMap:p,edgeMap:x,emit:v,settings:t}),k=(A,R)=>{const O=h({x:A,y:R}).pop();if(O&&O.graphType==="node")return B(O.id)};let F;g("onMouseMove",({items:A})=>{const R=A.at(-1);if(!R||R.graphType!=="node")return;const O=B(R.id);O!==F&&(v("onNodeHoverChange",O,F),F=O)});const K=A=>(F&&fe(F.id,A),A);n.push(K);const J=()=>{S.value=[],E.value=[],v("onGraphReset")};g("onGraphReset",()=>v("onStructureChange",S.value,E.value));const oe=w(z(e.value));Y(e,A=>{const R=Q(oe.value,e.value);R&&(oe.value=z(A),v("onThemeChange",R))},{deep:!0});const te=w(z(t.value));return Y(t,A=>{const R=Q(te.value,A);R&&(te.value=z(t.value),v("onSettingsChange",R))},{deep:!0}),{nodes:S,edges:E,getNode:B,getEdge:M,addNode:_,addEdge:L,moveNode:N,removeNode:I,removeEdge:D,bulkAddNode:P,bulkRemoveNode:G,bulkAddEdge:U,bulkRemoveEdge:q,getSchemaItemsByCoordinates:h,getNodeByCoordinates:k,eventBus:y,subscribe:g,unsubscribe:m,emit:v,updateAggregator:n,aggregator:f,theme:e,getTheme:o,themeMap:s,settings:t,reset:J,canvas:r,graphAtMousePosition:C,updateGraphAtMousePosition:u,...b}},vo={focus:!0},po={focus:!0},le=100,ge=3,mo=(r,i={})=>{const e=fo(r,i),s=w([]),o=w([]),t=u=>{s.value.push(u),s.value.length>le&&s.value.shift()},y=u=>{o.value.push(u),o.value.length>le&&o.value.shift()};e.subscribe("onNodeAdded",(u,{history:c})=>{c&&t({action:"add",affectedItems:[{graphType:"node",data:u}]})}),e.subscribe("onBulkNodeAdded",(u,{history:c})=>{c&&t({action:"add",affectedItems:u.map(T=>({graphType:"node",data:T}))})}),e.subscribe("onNodeRemoved",(u,c,{history:T})=>{if(!T)return;const l=c.map(f=>({graphType:"edge",data:f}));t({action:"remove",affectedItems:[{graphType:"node",data:u},...l]})}),e.subscribe("onBulkNodeRemoved",(u,c,{history:T})=>{if(!T)return;const l=u.map(n=>({graphType:"node",data:n})),f=c.map(n=>({graphType:"edge",data:n}));t({action:"remove",affectedItems:[...l,...f]})}),e.subscribe("onEdgeAdded",(u,{history:c})=>{c&&t({action:"add",affectedItems:[{graphType:"edge",data:u}]})}),e.subscribe("onBulkEdgeAdded",(u,{history:c})=>{c&&t({action:"add",affectedItems:u.map(T=>({graphType:"edge",data:T}))})}),e.subscribe("onEdgeRemoved",(u,{history:c})=>{c&&t({action:"remove",affectedItems:[{graphType:"edge",data:u}]})}),e.subscribe("onBulkEdgeRemoved",(u,{history:c})=>{c&&t({action:"remove",affectedItems:u.map(T=>({graphType:"edge",data:T}))})});const g=w();e.subscribe("onGroupDragStart",(u,c)=>{g.value={startingCoordinates:c,nodes:u}}),e.subscribe("onGroupDrop",(u,c)=>{if(!g.value)throw new Error("dropped a group we didn't know was being dragged");if(g.value.nodes.length!==u.length)throw new Error("group size mismatch");const T=g.value.startingCoordinates.y-c.y,l=g.value.startingCoordinates.x-c.x;Math.sqrt(T**2+l**2)<ge||t({action:"move",affectedItems:g.value.nodes.map(n=>({graphType:"node",data:{id:n.id,from:{x:n.x+l,y:n.y+T},to:{x:n.x,y:n.y}}}))})});const m=w();e.subscribe("onNodeDragStart",u=>{m.value={id:u.id,from:{x:u.x,y:u.y},to:{x:u.x,y:u.y}}}),e.subscribe("onNodeDrop",u=>{if(!m.value)throw new Error("dropped a node we didn't know was being dragged");if(m.value.id!==u.id)throw new Error("node ID mismatch");m.value.to={x:u.x,y:u.y};const c=m.value.from.y-m.value.to.y,T=m.value.from.x-m.value.to.x;Math.sqrt(c**2+T**2)<ge||t({action:"move",affectedItems:[{graphType:"node",data:m.value}]})});const v=(u={})=>{const c=s.value.pop();if(c)return y(c),E(c),e.emit("onUndo",c,{...vo,...u}),c},S=(u={})=>{const c=o.value.pop();if(c)return t(c),C(c),e.emit("onRedo",c,{...po,...u}),c},E=u=>{if(u.action==="add")for(const c of u.affectedItems)c.graphType==="node"?e.removeNode(c.data.id,{history:!1}):c.graphType==="edge"&&e.removeEdge(c.data.id,{history:!1});else if(u.action==="remove")for(const c of u.affectedItems)c.graphType==="node"?e.addNode(c.data,{history:!1,focus:!1}):c.graphType==="edge"&&e.addEdge(c.data,{history:!1,focus:!1});else if(u.action==="move"){for(const c of u.affectedItems)if(c.graphType==="node"){const{from:T,id:l}=c.data;e.moveNode(l,{x:T.x,y:T.y})}}},C=u=>{if(u.action==="add")for(const c of u.affectedItems)c.graphType==="node"?e.addNode(c.data,{history:!1,focus:!1}):c.graphType==="edge"&&e.addEdge(c.data,{history:!1,focus:!1});else if(u.action==="remove")for(const c of u.affectedItems)c.graphType==="node"?e.removeNode(c.data.id,{history:!1}):c.graphType==="edge"&&e.removeEdge(c.data.id,{history:!1});else if(u.action==="move"){for(const c of u.affectedItems)if(c.graphType==="node"){const{to:T,id:l}=c.data;e.moveNode(l,{x:T.x,y:T.y})}}},b=()=>{s.value=[],o.value=[]};return{...e,undo:v,redo:S,canUndo:W(()=>s.value.length>0),canRedo:W(()=>o.value.length>0),undoStack:s,redoStack:o,addToUndoStack:t,addToRedoStack:y,clearHistory:b}},bo=["node","edge"],To="use-focus-graph",yo=(r,i={})=>{const e=mo(r,i),{setTheme:s}=ve(e,To),o=w(new Set),t=w(!1),y=n=>{const h=n.filter(B=>!e.settings.value.focusBlacklist.includes(B));if(h.length===o.value.size&&h.every(B=>o.value.has(B)))return;const x=new Set([...o.value]);o.value=new Set(h),e.emit("onFocusChange",o.value,x)},g=n=>{if(o.value.has(n)||e.settings.value.focusBlacklist.includes(n))return;const p=new Set([...o.value]);o.value.add(n),e.emit("onFocusChange",o.value,p)},m=n=>{var h,a;(a=(h=n.shape).activateTextArea)==null||a.call(h,p=>{const x=e.getEdge(n.id);if(!x)throw new Error("textarea only implemented for edges");const B=e.settings.value.edgeInputToLabel(p);B===void 0||x.label===B||(x.label=B,e.emit("onEdgeLabelChange",x))})},v=()=>{const n=Array.from(o.value),h=n.filter(a=>e.getNode(a)||e.getEdge(a));h.length!==n.length&&y(h)},S=({items:n,coords:h})=>{var M,_;const a=n.at(-1);if(!a)return t.value?void 0:E();if(((_=(M=a.shape).textHitbox)==null?void 0:_.call(M,h))&&e.settings.value.edgeLabelsEditable&&a.graphType==="edge")return m(a);bo.some(L=>L===a.graphType)&&(t.value?g(a.id):y([a.id]))},E=()=>y([]),C=()=>{const n=e.nodes.value.map(a=>a.id),h=e.edges.value.map(a=>a.id);y([...n,...h])},b=({id:n},{focus:h})=>{h&&y([n])},u=n=>o.value.has(n);s("nodeColor",n=>{if(u(n.id))return e.getTheme("nodeFocusColor",n)}),s("nodeBorderColor",n=>{if(u(n.id))return e.getTheme("nodeFocusBorderColor",n)}),s("nodeTextColor",n=>{if(u(n.id))return e.getTheme("nodeFocusTextColor",n)}),s("edgeColor",n=>{if(u(n.id))return e.getTheme("edgeFocusColor",n)}),s("edgeTextColor",n=>{if(u(n.id))return e.getTheme("edgeFocusTextColor",n)}),s("nodeAnchorColor",n=>{if(u(n.id))return e.getTheme("nodeAnchorColorWhenParentFocused",n)});const c=n=>{n.key==="Shift"&&(t.value=!0)},T=n=>{n.key==="Shift"&&(t.value=!1)},l=()=>{e.subscribe("onNodeAdded",b),e.subscribe("onEdgeAdded",b),e.subscribe("onMouseDown",S),e.subscribe("onGraphReset",E),e.subscribe("onKeyDown",c),e.subscribe("onKeyUp",T),e.subscribe("onStructureChange",v)},f=()=>{e.unsubscribe("onNodeAdded",b),e.unsubscribe("onEdgeAdded",b),e.unsubscribe("onMouseDown",S),e.unsubscribe("onGraphReset",E),e.unsubscribe("onKeyDown",c),e.unsubscribe("onKeyUp",T),e.unsubscribe("onStructureChange",v),E()};return e.subscribe("onSettingsChange",n=>{n.focusable===!1?f():n.focusable===!0&&l()}),e.settings.value.focusable&&l(),{...e,focusedItemIds:X(o),setFocus:y,resetFocus:E,addToFocus:g,isFocused:u,focusAll:C,focusedNodes:W(()=>e.nodes.value.filter(n=>u(n.id))),focusedEdges:W(()=>e.edges.value.filter(n=>u(n.id)))}},Eo=(r,i={})=>{const e=yo(r,i),s=w(),o=({items:v,coords:S})=>{const E=v.at(-1);if(!E||E.graphType!=="node")return;const C=e.getNode(E.id);C&&(s.value={node:C,coords:S},e.emit("onNodeDragStart",C))},t=()=>{s.value&&(e.emit("onNodeDrop",s.value.node),s.value=void 0)},y=({coords:v})=>{if(!s.value)return;const{node:S,coords:E}=s.value,C=v.x-E.x,b=v.y-E.y;e.moveNode(S.id,{x:S.x+C,y:S.y+b}),s.value.coords=v},g=()=>{e.subscribe("onMouseDown",o),e.subscribe("onMouseUp",t),e.subscribe("onMouseMove",y)},m=()=>{e.unsubscribe("onMouseDown",o),e.unsubscribe("onMouseUp",t),e.unsubscribe("onMouseMove",y),s.value&&t()};return e.subscribe("onSettingsChange",v=>{v.draggable===!1?m():v.draggable===!0&&g()}),e.settings.value.draggable&&g(),{...e,activeDragNode:W(()=>{var v;return(v=s.value)==null?void 0:v.node})}},So=(r,i={})=>{const e=Eo(r,i),s=w(),o=w(),t=()=>{s.value=void 0,o.value=void 0},y=a=>{if(e.activeDragNode.value)return[];const{getTheme:p}=e,x=p("nodeAnchorColor",a),B=p("nodeAnchorRadius",a),M=[];for(const _ of g.value){const{x:L,y:N}=_,I={at:{x:L,y:N},radius:B,color:x};o.value&&o.value.direction===_.direction&&(I.at.x=o.value.x,I.at.y=o.value.y);const D=pe(I);M.push({id:_.id,graphType:"node-anchor",shape:D,priority:1/0})}return M},g=w([]),m=a=>{if(!a)return g.value=[];const{getTheme:p}=e,x=p("nodeAnchorRadius",a),B=p("nodeSize",a),M=p("nodeBorderWidth",a),_=B-x/3+M/2;g.value=[{x:a.x,y:a.y-_,direction:"north"},{x:a.x+_,y:a.y,direction:"east"},{x:a.x,y:a.y+_,direction:"south"},{x:a.x-_,y:a.y,direction:"west"}].map(L=>({...L,id:j()}))},v=({items:a})=>{const p=a.at(-1);if(!p||p.graphType!=="node-anchor")return;const{id:x}=p;return g.value.find(B=>B.id===x)},S=()=>{if(!s.value||!o.value)return;const{x:a,y:p}=o.value,x={x:s.value.x,y:s.value.y},B={x:a,y:p},{getTheme:M}=e,_=M("linkPreviewColor",s.value,o.value),L=M("linkPreviewWidth",s.value,o.value);return{id:"link-preview",graphType:"link-preview",shape:me({start:x,end:B,color:_,width:L})}},E=({items:a})=>{if(o.value)return;const p=a.at(-1);if(!p)return t();if(p.graphType!=="node")return;const x=e.getNode(p.id);if(!x)throw new Error("node in aggregator but not in graph");const B=e.isFocused(x.id),M=e.focusedNodes.value.length>1;if(B&&M)return t();s.value=x,m(x)},C=a=>{if(!s.value)return;const p=v(a);p&&(o.value=p,e.emit("onNodeAnchorDragStart",s.value,p))},b=({coords:a})=>{if(!o.value)return;const{x:p,y:x}=a;o.value.x=p,o.value.y=x},u=()=>{if(o.value){if(!s.value)throw new Error("active anchor without parent node")}else return;e.emit("onNodeAnchorDrop",s.value,o.value),t()},c=a=>{if(!s.value)return a;const p=y(s.value);for(const x of p)a.push(x);return a},T=a=>{var _;if(!s.value||!o.value)return a;const{id:p}=s.value;fe(p,a);const x=(_=a.find(L=>L.id===p))==null?void 0:_.priority;if(!x)return a;const B=S();if(!B)return a;const M={...B,priority:x-.1};return a.push(M),a};e.updateAggregator.push(c),e.updateAggregator.push(T);const l=a=>{var p;((p=s.value)==null?void 0:p.id)===a.id&&t()},f=()=>{if(!s.value)return;const a=e.isFocused(s.value.id),p=e.focusedNodes.value.length>1;a&&p&&t()},n=()=>{e.subscribe("onNodeRemoved",l),e.subscribe("onNodeMoved",t),e.subscribe("onNodeDrop",m),e.subscribe("onMouseMove",E),e.subscribe("onMouseMove",b),e.subscribe("onMouseDown",C),e.subscribe("onMouseUp",u),e.subscribe("onFocusChange",f)},h=()=>{e.unsubscribe("onNodeRemoved",l),e.unsubscribe("onNodeMoved",t),e.unsubscribe("onNodeDrop",m),e.unsubscribe("onMouseMove",E),e.unsubscribe("onMouseMove",b),e.unsubscribe("onMouseDown",C),e.unsubscribe("onMouseUp",u),e.unsubscribe("onFocusChange",f)};return e.subscribe("onSettingsChange",a=>{a.nodeAnchors===!0?n():a.nodeAnchors===!1&&h()}),e.settings.value.nodeAnchors&&n(),{...e,nodeAnchorActiveAnchor:X(o),nodeAnchorParentNode:X(s)}},Co="use-marquee-graph",No={THEME_ID:Co},xo=(r,i={})=>{const e=So(r,i),s=w(),o=w(),t=w(),{setTheme:y,removeTheme:g}=ve(e,No.THEME_ID),m=()=>y("nodeAnchorColor",d.TRANSPARENT),v=()=>g("nodeAnchorColor"),S=N=>{const{width:I,height:D}=N;return Math.abs(I*D)},E=()=>{const N=e.eventBus.onDblClick;let I;for(const D of N)if(D.name==="handleNodeCreation"){I=D;break}if(!I){console.error("Could not find node creation function");return}e.unsubscribe("onDblClick",I),setTimeout(()=>e.subscribe("onDblClick",I),10)},C=({items:N,coords:I})=>{const D=N.at(-1);(D==null?void 0:D.graphType)!=="encapsulated-node-box"&&v(),D||l(I)},b=({items:N,coords:I})=>{if(!t.value)return;const D=N.at(-1);if((D==null?void 0:D.graphType)!=="encapsulated-node-box")return;const P=I.x-t.value.x,G=I.y-t.value.y;t.value=I;for(const U of e.focusedNodes.value)e.moveNode(U.id,{x:U.x+P,y:U.y+G});h()},u=({items:N,coords:I})=>{if(s.value)return;const D=N.at(-1);(D==null?void 0:D.graphType)==="encapsulated-node-box"&&(t.value=I,e.emit("onGroupDragStart",e.focusedNodes.value,I))},c=()=>{t.value&&(e.emit("onGroupDrop",e.focusedNodes.value,t.value),t.value=void 0)},T=()=>o.value={at:{x:1/0,y:1/0},width:0,height:0},l=N=>{m(),e.graphCursorDisabled.value=!0,s.value={at:N,width:0,height:0},T()},f=()=>{if(!s.value)return;S(s.value)>200&&E(),s.value=void 0,e.graphCursorDisabled.value=!1,v()},n=N=>{if(S(N)<100)return;const D=[];for(const{id:P,shape:G,graphType:U}of e.aggregator.value){const{marqueeSelectableGraphTypes:q}=e.settings.value;if(!q.includes(U))continue;G.efficientHitbox(N)&&D.push(P)}e.setFocus(D)},h=()=>{if(!o.value)return;if(e.focusedNodes.value.length<2)return T();let N=1/0,I=1/0,D=-1/0,P=-1/0;for(const G of e.focusedNodes.value){const U=e.getTheme("nodeSize",G),q=e.getTheme("nodeBorderWidth",G),k=U+q/2,{x:F,y:K}=G;N=Math.min(N,F-k),I=Math.min(I,K-k),D=Math.max(D,F+k),P=Math.max(P,K+k)}N<1/0&&I<1/0&&D>-1/0&&P>-1/0?(o.value.at.x=N,o.value.at.y=I,o.value.width=D-N,o.value.height=P-I):(o.value.width=0,o.value.height=0)},a=({coords:N})=>{if(!s.value)return;const{x:I,y:D}=N;s.value.width=I-s.value.at.x,s.value.height=D-s.value.at.y,n(s.value)},p=N=>({id:"marquee-box",graphType:"marquee-box",shape:re({...N,color:e.getTheme("marqueeSelectionBoxColor"),stroke:{color:e.getTheme("marqueeSelectionBoxBorderColor"),width:2}}),priority:1/0}),x=N=>{if(!s.value)return N;const I=p(s.value);return N.push(I),N},B=N=>({id:"encapsulated-node-box",graphType:"encapsulated-node-box",shape:re({...N,color:e.getTheme("marqueeEncapsulatedNodeBoxColor"),stroke:{color:e.getTheme("marqueeEncapsulatedNodeBoxBorderColor"),width:2}}),priority:1/0}),M=N=>{if(!o.value)return N;const I=B(o.value);return N.push(I),N};e.updateAggregator.push(M),e.updateAggregator.push(x);const _=()=>{e.subscribe("onFocusChange",h),e.subscribe("onMouseDown",C),e.subscribe("onMouseUp",f),e.subscribe("onContextMenu",f),e.subscribe("onMouseMove",a),e.subscribe("onMouseDown",u),e.subscribe("onMouseUp",c),e.subscribe("onMouseMove",b),e.subscribe("onUndo",h),e.subscribe("onRedo",h)},L=()=>{e.unsubscribe("onFocusChange",h),e.unsubscribe("onMouseDown",C),e.unsubscribe("onMouseUp",f),e.unsubscribe("onContextMenu",f),e.unsubscribe("onMouseMove",a),e.unsubscribe("onMouseDown",u),e.unsubscribe("onMouseUp",c),e.unsubscribe("onMouseMove",b),e.unsubscribe("onUndo",h),e.unsubscribe("onRedo",h),s.value&&f()};return e.subscribe("onSettingsChange",N=>{N.marquee===!0?_():N.marquee===!1&&L()}),e.settings.value.marquee&&_(),{...e,updateEncapsulatedNodeBox:h}},Ao=[d.RED_600,d.BLUE_600,d.GREEN_600,d.YELLOW_600],Io=[3,6,9,12],wo=(r,i={})=>{const e=xo(r,i),s=w(Ao[0]),o=w(Io[1]),t=w(!1),y=w(new Set),g=w([]),m=w([]),v=w(!1),S=w(),E=w(!1),C=()=>{m.value=[]},b=({coords:n})=>{v.value=!0,S.value=n,g.value=[n]},u=({coords:n})=>{if(!(!v.value||!S.value)){if(t.value){const h=m.value.find(a=>V.scribble(a).hitbox(n));h&&y.value.add(h.id);return}S.value=n,g.value.push(n)}},c=()=>{if(v.value&&(v.value=!1,S.value=void 0,g.value.length!==0)){if(t.value){m.value=m.value.filter(n=>!y.value.has(n.id)),y.value.clear();return}m.value.push({id:j(),type:"draw",points:g.value,color:s.value,brushWeight:o.value}),g.value=[]}};Y(t,()=>{e.canvas.value&&(e.canvas.value.style.cursor=t.value?"none":"crosshair")});const T=n=>{if(!E.value)return n;if(t.value){const h=V.circle({at:e.graphAtMousePosition.value.coords,radius:10,color:d.TRANSPARENT,stroke:{color:d.WHITE+"60",width:2}});n.push({graphType:"annotation",id:h.id,shape:h,priority:5050})}else if(g.value.length>0){const h=V.scribble({type:"draw",points:g.value,color:s.value,brushWeight:o.value});n.push({graphType:"annotation",id:h.id,shape:h,priority:5e3})}for(const h of m.value){const a=y.value.has(h.id);n.push({graphType:"annotation",id:h.id,shape:V.scribble({...h,color:h.color+(a?"50":"")}),priority:5e3})}return n};return e.updateAggregator.push(T),{...e,clearAnnotations:C,annotationActive:E,annotationErasing:t,annotationColor:s,annotationBrushWeight:o,activateAnnotation:()=>{e.canvas.value&&(E.value=!0,e.settings.value.userEditable=!1,e.settings.value.marquee=!1,e.settings.value.focusable=!1,e.graphCursorDisabled.value=!0,e.canvas.value.style.cursor="crosshair",e.subscribe("onMouseDown",b),e.subscribe("onMouseMove",u),e.subscribe("onMouseUp",c))},deactivateAnnotation:()=>{e.canvas.value&&(E.value=!1,t.value=!1,e.settings.value.userEditable=!0,e.settings.value.marquee=!0,e.settings.value.focusable=!0,e.graphCursorDisabled.value=!1,e.canvas.value.style.cursor="default",e.unsubscribe("onMouseDown",b),e.unsubscribe("onMouseMove",u),e.unsubscribe("onMouseUp",c))}}},Bo=(r=!1)=>{const i=g=>g.key===" "?"Space":g.key.length>1||r?g.key:g.key.toUpperCase(),e=w(""),s=W(()=>{let g;return e.value.split("+").filter(m=>{const v=m===g;return g=m,!v}).join("+")}),o=g=>{e.value.length>0&&(e.value+="+"),e.value+=i(g)},t=()=>{e.value=""},y=g=>s.value===g;return document.addEventListener("keydown",o),document.addEventListener("keyup",t),he(()=>{document.removeEventListener("keydown",o),document.removeEventListener("keyup",t)}),{isPressed:y,currentKeyString:e}},Do=(r,i={})=>{const e=wo(r,i),s=({coords:b,event:u})=>{e.addNode(b),setTimeout(()=>e.updateGraphAtMousePosition(u),10)},o=(b,u)=>{const T=e.getSchemaItemsByCoordinates(u).findLast(f=>f.graphType==="node");if(!T)return;const l=e.getNode(T.id);if(l&&!(e.settings.value.userAddedEdgeRuleNoSelfLoops&&b.id===l.id)){if(e.settings.value.userAddedEdgeRuleOneEdgePerPath){const f=e.edges.value.find(a=>a.from===b.id&&a.to===l.id),n=e.edges.value.find(a=>a.from===l.id&&a.to===b.id);if(f||n)return}e.addEdge({from:b.id,to:l.id,label:e.settings.value.userAddedEdgeLabel})}},t=()=>{e.bulkRemoveNode([...e.focusedItemIds.value]),e.bulkRemoveEdge([...e.focusedItemIds.value])},y={Mac:{"Meta+Z":()=>e.undo(),"Shift+Meta+Z":()=>e.redo(),Backspace:t,"Meta+A":e.focusAll,Escape:e.resetFocus},Windows:{"Control+Z":()=>e.undo(),"Shift+Control+Z":()=>e.redo(),Backspace:t,"Control+A":e.focusAll,Escape:e.resetFocus}},g=window.navigator.userAgent.includes("Mac")?"Mac":"Windows",{isPressed:m}=Bo(),S={onDblClick:s,onKeyDown:()=>{const b=y[g];for(const u in b)m(u)&&b[u]()},onNodeAnchorDrop:o},E=()=>{for(const b in S)e.subscribe(b,S[b]);e.settings.value.nodeAnchors=!0,e.settings.value.draggable=!0,e.settings.value.edgeLabelsEditable=!0},C=()=>{for(const b in S)e.unsubscribe(b,S[b]);e.settings.value.nodeAnchors=!1,e.settings.value.draggable=!1,e.settings.value.edgeLabelsEditable=!1};return e.settings.value.userEditable&&E(),e.subscribe("onSettingsChange",b=>{b.userEditable===!0?E():b.userEditable===!1&&C()}),e},Mo=(r,i={})=>{const e=Do(r,i),s={get:()=>JSON.parse(localStorage.getItem(e.settings.value.persistentStorageKey+"-nodes")??"[]"),set:f=>{localStorage.setItem(e.settings.value.persistentStorageKey+"-nodes",JSON.stringify(f))}},o={get:()=>JSON.parse(localStorage.getItem(e.settings.value.persistentStorageKey+"-edges")??"[]"),set:f=>{localStorage.setItem(e.settings.value.persistentStorageKey+"-edges",JSON.stringify(f))}},t={get:()=>JSON.parse(localStorage.getItem(e.settings.value.persistentStorageKey+"-theme")??"{}"),set:f=>{localStorage.setItem(e.settings.value.persistentStorageKey+"-theme",JSON.stringify(f))}},y={get:()=>JSON.parse(localStorage.getItem(e.settings.value.persistentStorageKey+"-settings")??"{}"),set:f=>{localStorage.setItem(e.settings.value.persistentStorageKey+"-settings",JSON.stringify(f))}},g=async()=>{await new Promise(f=>setTimeout(f,10)),s.set(e.nodes.value),o.set(e.edges.value)};let m=e.settings.value.persistentStorageKey;const v=async()=>{const f=e.settings.value.persistentStorageKey;if(m!==f){m=f;return}await new Promise(n=>setTimeout(n,10)),e.settings.value.persistentTrackTheme&&t.set(e.theme.value),e.settings.value.persistentTrackSettings&&y.set(e.settings.value),m=f},S=()=>{e.nodes.value=s.get(),e.edges.value=o.get(),e.settings.value.persistentTrackTheme&&(e.theme.value=Object.assign(e.theme.value,t.get())),e.settings.value.persistentTrackSettings&&(e.settings.value=Object.assign(e.settings.value,y.get())),queueMicrotask(()=>e.emit("onStructureChange",e.nodes.value,e.edges.value))},E=["onStructureChange","onNodeDrop","onGroupDrop","onGraphReset","onEdgeLabelChange"],C=["onThemeChange","onSettingsChange"],b=()=>{C.forEach(f=>e.subscribe(f,v))},u=()=>{C.forEach(f=>e.unsubscribe(f,v))},c=()=>{E.forEach(f=>e.subscribe(f,g))},T=()=>{E.forEach(f=>e.unsubscribe(f,g))},l=()=>{u(),T()};return e.subscribe("onSettingsChange",f=>{if(l(),"persistent"in f&&!f.persistent)return;if("persistent"in f&&f.persistent){S(),c(),(e.settings.value.persistentTrackSettings||e.settings.value.persistentTrackTheme)&&b();return}"persistentStorageKey"in f&&S(),c(),(e.settings.value.persistentTrackSettings||e.settings.value.persistentTrackTheme)&&b()}),e.settings.value.persistent&&(S(),c(),(e.settings.value.persistentTrackSettings||e.settings.value.persistentTrackTheme)&&b()),{...e,trackGraphState:g,trackOptions:v}},ko=(r,i={})=>{const e=z((i==null?void 0:i.theme)??{}),s=Mo(r,i);return Ue(s,e),s},Lo=Ne({__name:"Graph",props:{graph:{}},emits:["graphRef"],setup(r,{emit:i}){const e=r,s=i,o=g=>s("graphRef",g),t=w(e.graph.getTheme("graphBgPatternColor")),y=w(e.graph.getTheme("graphBgColor"));return e.graph.subscribe("onThemeChange",g=>{const{graphBgPatternColor:m,graphBgColor:v}=g;m&&(t.value=m),v&&(y.value=v)}),(g,m)=>(xe(),Ae(ke,{onCanvasRef:o,color:y.value,"pattern-color":t.value},null,8,["color","pattern-color"]))}});export{Io as B,Ao as C,$ as T,Lo as _,Je as i,ko as u};
