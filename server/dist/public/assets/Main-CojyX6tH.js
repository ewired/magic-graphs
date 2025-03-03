var Q=Object.defineProperty;var Z=(r,e,t)=>e in r?Q(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var C=(r,e,t)=>Z(r,typeof e!="symbol"?e+"":e,t);import{g as U,u as ee}from"./Graph.vue_vue_type_script_setup_true_lang-BKo7_fmL.js";import{a as x,b as M,_ as te}from"./GraphProduct.vue_vue_type_script_setup_true_lang-02D5OmeD.js";import{d as E,o as v,A as p,w as h,b as m,e as b,y as g,W as k,x as I,z as A,X as re,g as T,E as R,Y as F,a as H,c as V,f as oe,F as se,t as Y,C as ie}from"./index-B-EnZkPm.js";import{_ as O}from"./GHoverInfoTop.vue_vue_type_script_setup_true_lang-DCnLLQwK.js";import{g as ne}from"./getTreeBinaryPos-D76rSn4X.js";import"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang--0ApqKKG.js";import"./Button.vue_vue_type_script_setup_true_lang-Bd6mVNOQ.js";import"./Icon.vue_vue_type_script_setup_true_lang-N2e_pDm1.js";import"./TutorialHint.vue_vue_type_script_setup_true_lang-DFPCO5rt.js";import"./GHoverInfo.vue_vue_type_script_setup_true_lang-pxDSSTZ4.js";const le={persistentStorageKey:"binary-trees",interactive:!1,displayEdgeLabels:!1},ae=E({__name:"CRUDControls",props:{tree:{}},setup(r){const e=r;return(t,s)=>(v(),p(M,{secondary:"",class:"rounded-lg flex gap-2 p-2"},{default:h(()=>[m(x,{onClick:t.tree.balanceTree,disabled:e.tree.isBalanced.value,tertiary:""},{default:h(()=>s[0]||(s[0]=[b(" Balance Tree ")])),_:1},8,["onClick","disabled"]),m(x,{onClick:t.tree.resetTree,disabled:g(k).nodes.value.length===0,tertiary:""},{default:h(()=>s[1]||(s[1]=[b(" Reset Tree ")])),_:1},8,["onClick","disabled"])]),_:1}))}}),ce="node-labeller",X=(r,e,t=ce)=>{const s=n=>typeof e=="function"?e(n):"value"in e?e.value.get(n):e.get(n),{setTheme:i,removeTheme:l}=I(r,t),o=n=>{if(r.focus.isFocused(n.id))return;const u=s(n.id);if(u!==void 0)return u.toString()};return{label:()=>{i("nodeText",o)},unlabel:()=>{l("nodeText")},get:s}},ue="node-colorer",J=(r,e,t=ue)=>{const s=n=>typeof e=="function"?e(n):"value"in e?e.value.get(n):e.get(n),{setTheme:i,removeTheme:l}=I(r,t),o=n=>{if(!r.focus.isFocused(n.id))return s(n.id)};return{color:()=>{i("nodeBorderColor",o),i("nodeAnchorColor",o)},uncolor:()=>{l("nodeBorderColor"),l("nodeAnchorColor")},get:s}},fe=(r,e)=>{const{nodeIdToBalanceFactor:t}=e,s={[-1]:A.YELLOW_500,0:A.GREEN_600,1:A.YELLOW_500},i=A.RED_600,l=_=>s[t.value.get(_)??0]??i,{label:o,unlabel:a}=X(r,t),{color:c,uncolor:n}=J(r,l);return{activate:()=>{o(),c()},deactivate:()=>{a(),n()}}},{interpolate:he}=U.utils,de=r=>{const[e,t]=r.range,s=Array.isArray(r.color)?r.color[0]:r.color,i=Array.isArray(r.color)?r.color[1]:re(r.color).darken(50).toString(),l=he(s,i);return o=>{const a=(o-e)/(t-e);return a<0?s:a>1?i:l(a)}},ge=(r,e)=>{const{nodeIdToHeight:t}=e,s=de({range:[1,6],color:[A.GREEN_400,A.GREEN_700]}),i=f=>s(t.value.get(f)??0),{label:l,unlabel:o}=X(r,t),{color:a,uncolor:c}=J(r,i);return{activate:()=>{l(),a()},deactivate:()=>{o(),c()}}},ve=E({__name:"TreeInfoLabels",props:{tree:{}},setup(r){const e=r,{activate:t,deactivate:s}=fe(k.value,e.tree),{activate:i,deactivate:l}=ge(k.value,e.tree),o={balanceFactor:"The balance factor of a node is the height of its right subtree minus the height of its left subtree.",height:"The height of a node is the number of edges on the longest path from the node to a leaf."};return(a,c)=>(v(),p(M,{secondary:"",class:"p-2 rounded-lg flex flex-wrap gap-2"},{default:h(()=>[m(O,{onMouseenter:g(t),onMouseleave:g(s),tooltip:o.balanceFactor},{default:h(()=>c[0]||(c[0]=[b(" Balance Factor ")])),_:1},8,["onMouseenter","onMouseleave","tooltip"]),m(O,{onMouseenter:g(i),onMouseleave:g(l),tooltip:o.height},{default:h(()=>c[1]||(c[1]=[b(" Height ")])),_:1},8,["onMouseenter","onMouseleave","tooltip"])]),_:1}))}}),me=({root:r,treeDepth:e})=>{const t=[];if(!r)return t;let s=[r];for(let i=0;i<=e;i++){const l=[];for(const o of s)t.push(o),l.push(o==null?void 0:o.left),l.push(o==null?void 0:o.right);s=[...l]}return t};class ${constructor(e){C(this,"key");C(this,"left");C(this,"right");C(this,"height");this.key=e,this.left=void 0,this.right=void 0,this.height=1}}const y=r=>r?r.height:0,S=r=>{const e=y(r==null?void 0:r.left),t=y(r==null?void 0:r.right);return e-t};class pe{constructor(){C(this,"root");this.root=void 0}reset(){this.root=void 0}getNode(e){let t=this.root;for(;t;){if(e===t.key)return t;e<t.key?t=t.left:t=t.right}}updateHeight(e){e.height=Math.max(y(e.left),y(e.right))+1}removeMin(e){return e.left?(e.left=this.removeMin(e.left),this.updateHeight(e),e):e.right}findMin(e){let t=e;for(;t.left;)t=t.left;return t}remove(e){if(!this.root)return[];const t=[];let s=!1;const i=(l,o,a,c)=>{if(o){if(s||t.push({action:"compare",target:a,treeNodeKey:o.key,treeState:this.toArray()}),a<o.key&&!s)o.left=i(o,o.left,a,!0);else if(a>o.key&&!s)o.right=i(o,o.right,a,!1);else{s=!0;let n;if(!o.left&&!o.right)n=void 0;else if(!o.left)n=o.right;else if(!o.right)n=o.left;else{const u=this.findMin(o.right);n=new $(u.key),n.left=o.left,n.right=this.removeMin(o.right),n.height=o.height}return l?c?l.left=n:l.right=n:this.root=n,t.push({action:"remove",target:a,treeState:this.toArray()}),l?c?l.left=o:l.right=o:this.root=o,n}return o&&(this.updateHeight(o),this.rebalance(l,o,c,t))}};return this.root=i(void 0,this.root,e,!1),t}rebalance(e,t,s,i){const l=S(t);if(l>1&&S(t.left)>=0){const o=this.rotateRight(t);return e?s?e.left=o:e.right=o:this.root=o,i.push({action:"balance",method:"left-left",treeState:this.toArray()}),e?s?e.left=t:e.right=t:this.root=t,o}if(l<-1&&S(t.right)<=0){const o=this.rotateLeft(t);return e?s?e.left=o:e.right=o:this.root=o,i.push({action:"balance",method:"right-right",treeState:this.toArray()}),e?s?e.left=t:e.right=t:this.root=t,o}if(l>1&&S(t.left)<0){t.left=this.rotateLeft(t.left);const o=this.rotateRight(t);return e?s?e.left=o:e.right=o:this.root=o,i.push({action:"balance",method:"left-right",treeState:this.toArray()}),e?s?e.left=t:e.right=t:this.root=t,o}if(l<-1&&S(t.right)>0){t.right=this.rotateRight(t.right);const o=this.rotateLeft(t);return e?s?e.left=o:e.right=o:this.root=o,i.push({action:"balance",method:"right-left",treeState:this.toArray()}),e?s?e.left=t:e.right=t:this.root=t,o}return t}balance(){const e=[],t=(s,i,l)=>{if(i)return i.left=t(i,i.left,!0),i.right=t(i,i.right,!1),this.updateHeight(i),this.rebalance(s,i,l,e)};return this.root=t(void 0,this.root,!1),e}toArray(){return me({root:this.root,treeDepth:y(this.root)}).map(e=>e==null?void 0:e.key)}rotateRight(e){const t=e.left,s=t.right;return t.right=e,e.left=s,this.updateHeight(e),this.updateHeight(t),t}rotateLeft(e){const t=e.right,s=t.left;return t.left=e,e.right=s,this.updateHeight(e),this.updateHeight(t),t}insert(e,t=!0){if(!this.root)return this.root=new $(e),[{action:"insert",target:e,treeState:this.toArray()}];const s=[];let i=!1;const l=(o,a,c,n)=>{if(!a){const u=new $(c);return i=!0,u}if(s.push({action:"compare",treeNodeKey:a.key,target:c,treeState:this.toArray()}),c<a.key)a.left=l(a,a.left,c,!0),i&&(s.push({action:"insert",target:c,treeState:this.toArray()}),i=!1);else if(c>a.key)a.right=l(a,a.right,c,!1),i&&(s.push({action:"insert",target:c,treeState:this.toArray()}),i=!1);else return a;return this.updateHeight(a),t?this.rebalance(o,a,n,s):a};return this.root=l(void 0,this.root,e,!1),s}}const be=A.AMBER_600,Te=r=>{const{setTheme:e,removeAllThemes:t}=I(r,"tree"),s=T(),i=a=>{if(s.value&&!r.focus.isFocused(a.id)&&a.id===s.value)return be};return{activate:a=>{a&&(s.value=a),e("nodeBorderColor",i),e("nodeAnchorColor",i)},deactivate:()=>{s.value=void 0,t()},targetNodeId:s}},W=(r,e)=>({from:r.toString(),to:e.toString(),id:`${r}-${e}`,label:""}),_e=r=>{const e=[];for(let t=0;t<r.length;t++){const s=r[t];if(s===void 0)continue;const i=r[2*t+1],l=r[2*t+2];i!==void 0&&e.push(W(s,i)),l!==void 0&&e.push(W(s,l))}return e},Ne=async(r,e,t,s)=>{const i=_e(e),l=r.edges.value.filter(n=>!i.some(u=>u.id===n.id)),o=r.nodes.value.filter(n=>!e.includes(parseInt(n.id)));if(await Promise.all(o.map(n=>r.removeNode(n.id,{animate:!0}))),!t)return;const c=ne({rootCoordinate:s,xOffset:{2:175,3:135,4:100}[t.height]??80,yOffset:200,treeDepth:t.height});await Promise.all(e.map((n,u)=>{if(!(n===void 0||r.getNode(n.toString())))return r.addNode({id:n.toString(),label:n.toString(),...c[u]},{animate:!0,focus:!1})})),await Promise.all(l.map(n=>r.removeEdge(n.id,{animate:!0}))),await new Promise(n=>setTimeout(n,500)),await Promise.all(e.map((n,u)=>{if(n===void 0)return;const f=r.getNode(n.toString());f&&(f.x===c[u].x&&f.y===c[u].y||r.animate.node({nodeId:f.id,endCoords:c[u],durationMs:750}))}));for(const n of i)await r.addEdge(n,{animate:!0})},Se={x:2300,y:1500},{activeSim:G}=F,Ae=r=>({graph:e,tree:t,trace:s})=>{const{targetNodeId:i,activate:l}=Te(e);l();const o=T(0),a=async()=>{const f=s[o.value];if(f!==void 0){if(i.value=void 0,f.action==="compare"){const{treeNodeKey:_}=f;i.value=_.toString()}if(f.action==="insert"||f.action==="remove"){const{target:_}=f;i.value=_.toString()}await Ne(e,f.treeState,t.root,Se),r()}};a();const c=async()=>{++o.value,await a()},n=async()=>{--o.value,await a()},u=async()=>{o.value!==s.length-1&&(o.value=s.length-1,a()),G.value=void 0,i.value=void 0};G.value={step:R(()=>o.value),next:c,prev:n,exit:u,trace:R(()=>s)}},ye=(r,e)=>{const t=T([]),s=T([]);return{undo:()=>{if(console.log(t.value),t.value.length===0)return;const o=t.value.pop();o&&(s.value.push(o),console.log(o),r.load(o))},redo:()=>{if(s.value.length===0)return;const o=s.value.pop();o&&(t.value.push(o),r.load(o))},undoStack:t,redoStack:s}},Ce=(r,e)=>{if(e.reset(),r.nodes.value.length===0)return;const{getInboundEdges:t,getChildrenOfNode:s}=r.helpers,i=r.nodes.value.find(o=>t(o.id).length===0);if(!i)return console.warn("could not parse tree from graph"),r.reset();const l=[i];for(;l.length>0;){const o=l.shift();o&&(e.insert(Number(o.label),!1),l.push(...s(o.id)))}},xe=r=>{const e=new pe,{undoStack:t,undo:s,redo:i}=ye(r),l=d=>r.nodes.value.reduce((L,D)=>{const P=e.getNode(Number(D.id));return P&&L.set(D.id,d(P)),L},new Map),o=T(l(S)),a=T(l(y)),c=()=>{o.value=l(S),a.value=l(y)},n=Ae(c),u=()=>{const d=JSON.parse(JSON.stringify({nodes:r.nodes.value,edges:r.edges.value}));t.value.push(d)},f=async d=>{u();const N=e.insert(d);n({graph:r,tree:e,trace:N})},_=async()=>{u();const d=e.balance();n({graph:r,tree:e,trace:d}),t.value.push({nodes:r.nodes.value,edges:r.edges.value})},j=async d=>{u();const N=e.remove(d);n({graph:r,tree:e,trace:N}),t.value.push({nodes:r.nodes.value,edges:r.edges.value})},q=()=>{u(),e.reset(),r.reset(),c()},z=()=>{const{root:d}=e;if(d)return r.getNode(d.toString())},K=R(()=>Array.from(o.value.values()).every(N=>N>=-1&&N<=1));return r.subscribe("onGraphLoaded",()=>{Ce(r,e),c()}),{tree:e,insertNode:f,removeNode:j,balanceTree:_,resetTree:q,nodeIdToBalanceFactor:o,isBalanced:K,nodeIdToHeight:a,getRoot:z,undo:s,redo:i}},Ee={class:"flex gap-2 flex-col"},we=E({__name:"AddNodePanel",props:{tree:{}},setup(r){const e=r,t=()=>{const i=e.tree.tree.toArray().filter(n=>n!==void 0);if(i.length===0)return[1,2,3,4,5];const l=Math.min(...i),o=Math.max(...i),a=[];for(let n=l-10;n<o+10;n++)a.push(n);const c=a.filter(n=>i.every(u=>n!==u));return U.utils.shuffle(c).slice(0,5)},s=T([]);return setTimeout(()=>s.value=t(),5),(i,l)=>(v(),p(M,{class:"p-2 rounded-xl"},{default:h(()=>[H("div",Ee,[(v(!0),V(se,null,oe(s.value,o=>(v(),p(x,{key:o,onClick:a=>e.tree.insertNode(o),secondary:"",class:"rounded-full w-10 h-10"},{default:h(()=>[b(Y(o),1)]),_:2},1032,["onClick"]))),128))])]),_:1}))}}),{activeSim:B}=F,w={balance:r=>{const e="Tree Unbalanced! ";if(r.method==="left-left")return e+"Preforming A Left-Left Balance";if(r.method==="left-right")return e+"Preforming A Left-Right Balance";if(r.method==="right-left")return e+"Preforming A Right-Left Balance";if(r.method==="right-right")return e+"Preforming A Right-Right Balance";throw"invalid balance method"},compare:r=>{var s,i;const{target:e,treeNodeKey:t}=r;return e>t?`${e} Is Greater Than ${t}, So We Go Right`:e<t?`${e} Is Less Than ${t}, So We Go Left`:((s=B.value)==null?void 0:s.step)===((i=B.value)==null?void 0:i.trace.value.length)?"We Have A Duplicate, So We End Here":`Found ${e}`},insert:r=>`At A Leaf Position, So We Insert ${r.target}`,remove:r=>`Removing ${r.target}`},He=r=>{if(r.action==="balance")return w.balance(r);if(r.action==="compare")return w.compare(r);if(r.action==="insert")return w.insert(r);if(r.action==="remove")return w.remove(r)},Re=()=>R(()=>{if(!B.value)return;const{trace:r,step:e}=B.value,t=r.value[e.value];if(t)return He(t)}),Be={class:""},Me={class:"mb-2 font-bold text-2xl"},Le=E({__name:"TreeSimMenu",props:{controls:{}},setup(r){const e=r,t=Re();return(s,i)=>(v(),V("div",Be,[H("div",null,[H("h1",Me,Y(g(t)??"N/A"),1)]),H("div",null,[m(M,{secondary:"",class:"rounded-lg flex gap-2 p-2"},{default:h(()=>[m(x,{onClick:e.controls.prev,tertiary:"",disabled:e.controls.step.value===0},{default:h(()=>i[0]||(i[0]=[b(" <- prev ")])),_:1},8,["onClick","disabled"]),m(x,{onClick:e.controls.next,tertiary:"",disabled:e.controls.trace.value.length-1===e.controls.step.value},{default:h(()=>i[1]||(i[1]=[b(" next -> ")])),_:1},8,["onClick","disabled"]),m(x,{onClick:e.controls.exit,tertiary:""},{default:h(()=>i[2]||(i[2]=[b(" Done ")])),_:1},8,["onClick"])]),_:1})])]))}}),Ye=E({__name:"Main",setup(r){const{activeSim:e}=F,t=T(),s=ee(t,le),i=xe(s);return s.settings.value.shortcutDelete=()=>{const{focusedNodes:l}=s.focus;l.value.length===1&&i.removeNode(Number(l.value[0].label)),l.value.length===s.nodes.value.length&&i.resetTree(),s.focus.reset()},s.settings.value.shortcutUndo=()=>{i.undo()},s.settings.value.shortcutRedo=()=>i.redo(),(l,o)=>(v(),p(te,{onGraphRef:o[0]||(o[0]=a=>t.value=a),graph:g(s)},{"top-center":h(()=>[m(ve,{tree:g(i)},null,8,["tree"])]),"center-left":h(()=>[g(e)?ie("",!0):(v(),p(we,{key:0,tree:g(i)},null,8,["tree"]))]),"bottom-center":h(()=>[g(e)?(v(),p(Le,{key:1,controls:g(e)},null,8,["controls"])):(v(),p(ae,{key:0,tree:g(i)},null,8,["tree"]))]),_:1},8,["graph"]))}});export{Ye as default};
