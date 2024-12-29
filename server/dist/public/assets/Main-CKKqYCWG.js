import{d as A,$ as Fe,V as y,E as S,o as f,c as b,F as L,f as V,y as a,a as x,b as d,w as c,t as k,e as C,C as R,a0 as Le,a1 as ke,z as N,g as I,x as q,a2 as Be,a3 as O,A as w,a4 as W,a5 as ee,a6 as te,a7 as Oe,a8 as Ue,a9 as Ve,aa as ce,B as Ge,ab as je,ac as He,ad as se,J as ie,X as Y,ae as Ye,af as X,ag as We,ah as Xe,L as Ke,ai as we,aj as re,ak as me,N as pe,al as qe,O as Je,am as Ze,I as he,D as Te,an as _e,ao as Qe}from"./index-Wvoc3Gvc.js";import{u as Me,a as ge,b as et,L as tt}from"./Graph.vue_vue_type_script_setup_true_lang-C7aWDySR.js";import{b as P,c as ue,a as D,d as J,u as ot,p as ae,e as nt,f as F,g as le,h as Q,i as st,j as xe,_ as at}from"./GraphProduct.vue_vue_type_script_setup_true_lang-D1wvnyRJ.js";import{g as lt,u as it}from"./string-CmCmtXob.js";import{_ as K,u as rt}from"./useSCCColorizer-BQ6teeRs.js";import{_ as H}from"./Icon.vue_vue_type_script_setup_true_lang-BBvBH1WR.js";import{_ as U}from"./GHoverInfo.vue_vue_type_script_setup_true_lang-wR7Lbjsj.js";import{d as Ae,g as ut}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-jduWpegf.js";import{_ as de}from"./Button.vue_vue_type_script_setup_true_lang-Dt14VFd8.js";import{a as dt}from"./getTreeBinaryPos-BjgHcT-j.js";import{_ as ye}from"./InputRange.vue_vue_type_script_setup_true_lang-Bk31y6k8.js";import"./TutorialHint.vue_vue_type_script_setup_true_lang-C3Zn5Vyd.js";const ct={persistentStorageKey:"graph-sandbox"},pt={class:"flex flex-col gap-4"},ft={class:"overflow-auto"},vt={class:"flex items-center gap-4"},mt={class:"leading-[15px]"},ht={key:0,class:"leading-[15px] text-[8px]"},_t={key:0},gt={key:0,class:"opacity-60"},xt=A({__name:"AdjacencyListDisplay",setup(n){const{weightedAdjacencyList:t}=Fe(y.value),e=s=>{const l=y.value.getNode(s);if(l===void 0)throw new Error("node not found");return l},o=S(()=>y.value.settings.value.displayEdgeLabels);return(s,l)=>(f(),b("div",pt,[(f(!0),b(L,null,V(a(t),(v,m)=>(f(),b("div",{key:m,class:"flex items-center"},[x("div",null,[d(ue,null,{content:c(()=>[d(P,{class:"px-3 py-2 rounded-md"},{default:c(()=>[x("b",null,k(e(m).label),1),l[0]||(l[0]=C(" links to ")),x("b",null,k(a(lt)(v.map(p=>p.label))||"nothing"),1)]),_:2},1024)]),default:c(()=>[d(K,{node:e(m)},null,8,["node"])]),_:2},1024)]),d(H,{icon:"arrow_right",class:"text-4xl"}),x("div",ft,[x("div",vt,[(f(!0),b(L,null,V(v,p=>(f(),b("div",{key:p.id},[d(ue,null,{content:c(()=>[d(P,{class:"p-2 rounded-md"},{default:c(()=>[x("b",null,k(p.label),1),l[2]||(l[2]=C(" links to ")),x("b",null,k(e(m).label),1),o.value?(f(),b("span",_t,[l[1]||(l[1]=C(" with a cost of ")),x("b",null,k(p.weight),1)])):R("",!0)]),_:2},1024)]),default:c(()=>[d(K,{node:p,class:"relative flex flex-col"},{default:c(()=>[x("span",mt,k(p.label),1),o.value?(f(),b("span",ht," Cost "+k(p.weight),1)):R("",!0)]),_:2},1032,["node"])]),_:2},1024)]))),128)),v.length===0?(f(),b("h2",gt," None ")):R("",!0)])])]))),128))]))}}),yt=A({__name:"AdjacencyList",setup(n){return(t,e)=>(f(),b(L,null,[e[0]||(e[0]=x("h2",{class:"text-xl font-bold mb-2"},"Adjacency List",-1)),d(P,{secondary:"",class:"p-4 rounded-lg max-h-[200px] overflow-auto"},{default:c(()=>[d(xt)]),_:1})],64))}}),bt={class:"text-xl font-bold text-center flex items-center justify-center overflow-hidden p-[3px]"},$t=A({__name:"TransitionMatrixLabel",props:{toNode:{},fromNode:{},weight:{}},setup(n){const t=n,e=S(()=>typeof t.weight=="number"?t.weight:t.weight.toFraction());return(o,s)=>(f(),b("div",bt,[d(ue,null,{content:c(()=>[d(P,{class:"flex items-center py-2 px-3 rounded-md"},{default:c(()=>[d(K,{node:o.toNode,size:30},null,8,["node"]),d(H,{class:"text-2xl",icon:"arrow_right"}),d(K,{node:o.fromNode,size:30},null,8,["node"])]),_:1})]),default:c(()=>[d(D,{secondary:"",class:"h-10 w-10 cursor-default grid place-items-center rounded-md"},{default:c(()=>[C(k(e.value),1)]),_:1})]),_:1})]))}}),Ct={key:0,class:"flex py-6 items-center"},kt=A({__name:"TransitionMatrixDisplay",setup(n){const{transitionMatrix:t}=Le(y.value),e=ke(),o={background:`
      linear-gradient(
        ${e.value.secondary},
        ${e.value.secondary}
      )
      50%
      50%/calc(100% - 10px)
      calc(100% - 10px) no-repeat,
      linear-gradient(
        90deg,
        ${e.value.text}
        10%,
        ${N.TRANSPARENT}
        10%,
        ${N.TRANSPARENT}
        90%,
        ${e.value.text}
        90%
      )
      188%
      0`},s=S(()=>y.value.nodes.value);return(l,v)=>a(t).length!==0?(f(),b("div",Ct,[v[0]||(v[0]=x("div",{class:"text-xl font-bold px-5 text-nowrap"},"T =",-1)),x("div",{style:o,class:"p-4 rounded"},[(f(!0),b(L,null,V(a(t),(m,p)=>(f(),b("div",{key:"row-"+p,class:"flex"},[(f(!0),b(L,null,V(m,(r,u)=>(f(),b("div",{key:"col-"+u},[d($t,{"to-node":s.value[p],"from-node":s.value[u],weight:r},null,8,["to-node","from-node","weight"])]))),128))]))),128))])])):R("",!0)}}),wt={key:0},Tt={key:1},Mt=A({__name:"TransitionMatrix",setup(n){const t=I(y.value.nodes.value.length>10);return(e,o)=>(f(),b(L,null,[o[2]||(o[2]=x("div",{class:"flex items-end justify-between"},[x("h2",{class:"text-xl font-bold mb-2 mt-5"},"Transition Matrix")],-1)),d(P,{secondary:"",class:"p-3 rounded-lg max-h-[300px] overflow-auto"},{default:c(()=>[t.value?(f(),b("div",wt,[d(D,{onClick:o[0]||(o[0]=s=>t.value=!1)},{default:c(()=>o[1]||(o[1]=[C(" Load Transition Matrix ")])),_:1})])):(f(),b("div",Tt,[d(kt)]))]),_:1})],64))}}),At="bipartite-colorizer",Nt=n=>{const{setTheme:t,removeAllThemes:e}=q(n,At),o=v=>{if(!n.characteristics.isBipartite.value)return;const r=n.characteristics.nodeIdToBipartitePartition.value.get(v.id);if(r!==void 0)return r===0?N.RED_500:N.BLUE_500};return{colorize:()=>{t("nodeBorderColor",o),t("nodeAnchorColor",o)},decolorize:()=>{e()}}},St={class:"mb-2 text-sm"},Et={key:0,class:"flex flex-wrap gap-2"},It={key:1,class:"flex flex-wrap gap-2"},zt=A({__name:"ConnectedInfo",setup(n){const t=S(()=>y.value.characteristics.isConnected.value),e=S(()=>y.value.characteristics.isWeaklyConnected.value),o=S(()=>y.value.settings.value.isGraphDirected),s=S(()=>y.value.characteristics.stronglyConnectedComponents.value.map(T=>T.map(M=>M.label))),l=S(()=>y.value.characteristics.isBipartite.value),v=S(()=>y.value.characteristics.isAcyclic.value),m=S(()=>y.value.characteristics.isComplete.value),{colorize:p,decolorize:r}=rt(y.value),{colorize:u,decolorize:i}=Nt(y.value),{colorize:h,decolorize:g}=Be(y.value);return(_,T)=>(f(),b("div",St,[o.value?(f(),b("div",Et,[d(U,{tooltip:a(O).stronglyConnected},{default:c(()=>[C(" Strongly Connected? "+k(t.value?"Yes":"No"),1)]),_:1},8,["tooltip"]),d(U,{tooltip:a(O).weaklyConnected},{default:c(()=>[C(" Weakly Connected? "+k(e.value?"Yes":"No"),1)]),_:1},8,["tooltip"]),d(U,{onMouseenter:a(p),onMouseleave:a(r),tooltip:a(O).stronglyConnectedComponents},{default:c(()=>[C(" Strongly Connected Components: "+k(s.value.length),1)]),_:1},8,["onMouseenter","onMouseleave","tooltip"]),d(U,{onMouseenter:a(u),onMouseleave:a(i),tooltip:a(O).bipartite},{default:c(()=>[C(" Bipartite? "+k(l.value?"Yes":"No"),1)]),_:1},8,["onMouseenter","onMouseleave","tooltip"]),d(U,{onMouseenter:a(h),onMouseleave:a(g),tooltip:a(O).acyclic},{default:c(()=>[C(" Acyclic? "+k(v.value?"Yes":"No"),1)]),_:1},8,["onMouseenter","onMouseleave","tooltip"]),d(U,{tooltip:a(O).complete},{default:c(()=>[C(" Complete? "+k(m.value?"Yes":"No"),1)]),_:1},8,["tooltip"])])):(f(),b("div",It,[d(U,{tooltip:a(O).connected},{default:c(()=>[C(" Connected? "+k(t.value?"Yes":"No"),1)]),_:1},8,["tooltip"]),d(U,{onMouseenter:a(u),onMouseleave:a(i),tooltip:a(O).bipartite},{default:c(()=>[C(" Bipartite? "+k(l.value?"Yes":"No"),1)]),_:1},8,["onMouseenter","onMouseleave","tooltip"]),d(U,{onMouseenter:a(h),onMouseleave:a(g),tooltip:a(O).acyclic},{default:c(()=>[C(" Acyclic? "+k(v.value?"Yes":"No"),1)]),_:1},8,["onMouseenter","onMouseleave","tooltip"]),d(U,{tooltip:a(O).complete},{default:c(()=>[C(" Complete? "+k(m.value?"Yes":"No"),1)]),_:1},8,["tooltip"])]))]))}}),Pt={key:0},Dt={key:1},Rt=A({__name:"GraphInfoMenu",setup(n){const t=S(()=>y.value.nodes.value.length>0);return(e,o)=>(f(),w(J,null,{activator:c(s=>[W(e.$slots,"default",ee(te(s)))]),default:c(()=>[d(P,{class:"flex flex-col text-xl font-bold p-3 w-[400px] max-h-[600px] overflow-auto rounded-lg gap-2"},{default:c(()=>[o[1]||(o[1]=x("h1",{class:"text-2xl"},"Graph Info",-1)),t.value?(f(),b("div",Pt,[d(zt),d(yt),d(Mt)])):(f(),b("div",Dt,o[0]||(o[0]=[x("h2",{class:"font-normal text-base"}," After adding nodes and edges, come back here to learn about your graph! Is it connected? bipartite? planar? what the heck is planar? ",-1)])))]),_:1})]),_:3}))}});var Ft={name:"BaseEditableHolder",extends:Oe,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(t){this.d_value=t},defaultValue:function(t){this.d_value=t},$formName:{immediate:!0,handler:function(t){var e,o;this.formField=((e=this.$pcForm)===null||e===void 0||(o=e.register)===null||o===void 0?void 0:o.call(e,t,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(t){var e,o;this.formField=((e=this.$pcForm)===null||e===void 0||(o=e.register)===null||o===void 0?void 0:o.call(e,this.$formName,t))||{}}},$formDefaultValue:{immediate:!0,handler:function(t){this.d_value!==t&&(this.d_value=t)}}},formField:{},methods:{writeValue:function(t,e){var o,s;this.controlled&&(this.d_value=t,this.$emit("update:modelValue",t)),this.$emit("value-change",t),(o=(s=this.formField).onChange)===null||o===void 0||o.call(s,{originalEvent:e,value:t})}},computed:{$filled:function(){return Ue(this.d_value)},$invalid:function(){var t,e,o,s;return(t=(e=this.invalid)!==null&&e!==void 0?e:(o=this.$pcFormField)===null||o===void 0||(o=o.$field)===null||o===void 0?void 0:o.invalid)!==null&&t!==void 0?t:(s=this.$pcForm)===null||s===void 0||(s=s.states)===null||s===void 0||(s=s[this.$formName])===null||s===void 0?void 0:s.invalid},$formName:function(){var t;return this.name||((t=this.$formControl)===null||t===void 0?void 0:t.name)},$formControl:function(){var t;return this.formControl||((t=this.$pcFormField)===null||t===void 0?void 0:t.formControl)},$formDefaultValue:function(){var t,e,o,s;return(t=(e=this.d_value)!==null&&e!==void 0?e:(o=this.$pcFormField)===null||o===void 0?void 0:o.initialValue)!==null&&t!==void 0?t:(s=this.$pcForm)===null||s===void 0||(s=s.initialValues)===null||s===void 0?void 0:s[this.$formName]},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},Lt={name:"BaseInput",extends:Ft,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var t;return(t=this.variant)!==null&&t!==void 0?t:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var t;return(t=this.fluid)!==null&&t!==void 0?t:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},Bt=function(t){var e=t.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("inputtext.color"),`;
    background: `).concat(e("inputtext.background"),`;
    padding-block: `).concat(e("inputtext.padding.y"),`;
    padding-inline: `).concat(e("inputtext.padding.x"),`;
    border: 1px solid `).concat(e("inputtext.border.color"),`;
    transition: background `).concat(e("inputtext.transition.duration"),", color ").concat(e("inputtext.transition.duration"),", border-color ").concat(e("inputtext.transition.duration"),", outline-color ").concat(e("inputtext.transition.duration"),", box-shadow ").concat(e("inputtext.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("inputtext.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("inputtext.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(e("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(e("inputtext.focus.border.color"),`;
    box-shadow: `).concat(e("inputtext.focus.ring.shadow"),`;
    outline: `).concat(e("inputtext.focus.ring.width")," ").concat(e("inputtext.focus.ring.style")," ").concat(e("inputtext.focus.ring.color"),`;
    outline-offset: `).concat(e("inputtext.focus.ring.offset"),`;
}

.p-inputtext.p-invalid {
    border-color: `).concat(e("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(e("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: `).concat(e("inputtext.filled.hover.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(e("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(e("inputtext.disabled.background"),`;
    color: `).concat(e("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(e("inputtext.placeholder.color"),`;
}

.p-inputtext.p-invalid::placeholder {
    color: `).concat(e("inputtext.invalid.placeholder.color"),`;
}

.p-inputtext-sm {
    font-size: `).concat(e("inputtext.sm.font.size"),`;
    padding-block: `).concat(e("inputtext.sm.padding.y"),`;
    padding-inline: `).concat(e("inputtext.sm.padding.x"),`;
}

.p-inputtext-lg {
    font-size: `).concat(e("inputtext.lg.font.size"),`;
    padding-block: `).concat(e("inputtext.lg.padding.y"),`;
    padding-inline: `).concat(e("inputtext.lg.padding.x"),`;
}

.p-inputtext-fluid {
    width: 100%;
}
`)},Ot={root:function(t){var e=t.instance,o=t.props;return["p-inputtext p-component",{"p-filled":e.$filled,"p-inputtext-sm p-inputfield-sm":o.size==="small","p-inputtext-lg p-inputfield-lg":o.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-inputtext-fluid":e.$fluid}]}},Ut=Ve.extend({name:"inputtext",theme:Bt,classes:Ot}),Vt={name:"BaseInputText",extends:Lt,style:Ut,provide:function(){return{$pcInputText:this,$parentInstance:this}}},Ne={name:"InputText",extends:Vt,inheritAttrs:!1,methods:{onInput:function(t){this.writeValue(t.target.value,t)}},computed:{attrs:function(){return ce(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},Gt=["value","disabled","aria-invalid"];function jt(n,t,e,o,s,l){return f(),b("input",ce({type:"text",class:n.cx("root"),value:n.d_value,disabled:n.disabled,"aria-invalid":n.$invalid||void 0,onInput:t[0]||(t[0]=function(){return l.onInput&&l.onInput.apply(l,arguments)})},l.attrs),null,16,Gt)}Ne.render=jt;const Ht=A({__name:"InputText",setup(n){return(t,e)=>(f(),w(a(Ne),{onKeydown:e[0]||(e[0]=Ge(()=>{},["stop"]))}))}}),Yt=A({__name:"GInputText",setup(n){return(t,e)=>(f(),w(Ht))}}),Wt={class:"rounded-lg mb-2"},Xt={class:"w-full mt-2"},Kt={key:2},qt={key:0,class:"mt-4 w-full"},Jt={key:1},Zt={class:"text-xl font-bold mt-4 mb-2"},Qt={class:"flex flex-wrap items-center gap-2"},eo=["onClick"],to=A({__name:"CollaborativeSessionMenu",setup(n){const t=je(),{navigate:e}=ot(),{connectToRoom:o,isConnected:s,connectedRoomId:l,disconnectFromRoom:v,collaborators:m,collaboratorCount:p,meAsACollaborator:r}=Ye,u=S(()=>`${window.location.origin}?rid=${l.value}`),i=I(!1),h=Ae(()=>{i.value=!1},2e3),g=I(!1),_=()=>{try{navigator.clipboard.writeText(u.value),i.value=!0,h()}catch(E){console.error("Failed to copy link to clipboard",E)}},T=async()=>{g.value=!0,await o({roomId:X(),productId:We.productId,graph:y.value}),t.push({query:{rid:l.value}}),g.value=!1},M=()=>{v(),t.push({query:{rid:void 0}})};return(E,$)=>{const B=He("tooltip");return f(),w(J,null,{activator:c(z=>[W(E.$slots,"default",ee(te(z)))]),default:c(()=>[d(P,{class:"flex flex-col p-3 w-[400px] rounded-lg"},{default:c(()=>[$[4]||($[4]=x("h1",{class:"text-2xl font-bold mb-3"},"Collaborate",-1)),$[5]||($[5]=x("h2",{class:"text-xl font-bold mb-2"},"My Name",-1)),x("div",Wt,[d(Yt,{modelValue:a(se).name,"onUpdate:modelValue":$[0]||($[0]=z=>a(se).name=z),id:"collab-name",disabled:a(s)||g.value,class:"w-full",placeholder:"Pick a name for others to see"},null,8,["modelValue","disabled"])]),x("div",Xt,[!a(s)&&!g.value?(f(),w(D,{key:0,onClick:T,contrast:"",disabled:!a(se).name,class:"w-full"},{default:c(()=>[$[1]||($[1]=C(" Generate Link ")),d(H,{icon:"link",class:"ml-2"})]),_:1},8,["disabled"])):g.value?(f(),w(de,{key:1,disabled:"",class:"w-full"},{default:c(()=>$[2]||($[2]=[C(" Preparing Room... ")])),_:1})):(f(),b("div",Kt,[d(P,{onClick:_,tertiary:"",class:"group p-2 rounded-md cursor-pointer flex justify-between items-center"},{default:c(()=>[x("span",null,k(u.value),1),i.value?R("",!0):(f(),w(H,{key:0,icon:"content_copy",class:"group-hover:opacity-100 opacity-0"})),i.value?(f(),w(H,{key:1,icon:"check",class:"text-green-400"})):R("",!0)]),_:1})]))]),a(s)?(f(),b("div",qt,[d(de,{onClick:M,color:a(N).RED_600,class:"w-full"},{default:c(()=>$[3]||($[3]=[C(" Disconnect ")])),_:1},8,["color"])])):R("",!0),a(s)&&a(r)?(f(),b("div",Jt,[x("h2",Zt," Collaborators ("+k(a(p))+") ",1),x("div",Qt,[ie((f(),b("div",{style:Y({backgroundColor:a(r).color}),class:"text-gray-300 font-bold rounded-md px-3 py-1"},[C(k(a(r).name)+" (You) ",1)],4)),[[B,{value:`You are in ${a(ae)[a(r).productId].name}`,pt:{text:"bg-magic"}},void 0,{bottom:!0}]]),(f(!0),b(L,null,V(a(m),z=>ie((f(),b("button",{key:z.id,onClick:Z=>a(e)(a(ae)[z.productId]),style:Y({backgroundColor:z.color}),class:"text-gray-300 font-bold rounded-md px-3 py-1"},[C(k(z.name),1)],12,eo)),[[B,`${z.name} is in ${a(ae)[z.productId].name}`]])),128))])])):R("",!0)]),_:1})]),_:3})}}}),oo=(n,t)=>{const e=new Map;if(!t[n.id])throw new Error(`node with id ${n.id} not found in adj list`);let o=[n.id];const s=new Set(o);let l=0;for(;o.length>0;){const v=[];for(const m of o){e.set(m,l);for(const p of t[m])s.has(p)||(s.add(p),v.push(p))}o=[],o.push(...v),l++}return{nodeIdToDepth:e,depthToNodeIds:Array.from(e).reduce((v,[m,p])=>(v[p]||(v[p]=[]),v[p].push(m),v),[]),depth:l-1}},no=(n,t,e,o)=>{const{xOffset:s,yOffset:l}=o,{depthToNodeIds:v}=e,m=new Map,p=Xe(10);for(let r=1;r<v.length;r++){const u=v[r],i=[];if(u.length%2===1){const g=Math.floor(u.length/2);i[g]=0;for(let _=1;_<=g;_++)i[g+_]=_*s,i[g-_]=-_*s}else for(let g=0;g<u.length;g++)i[g]=(g-u.length/2+.5)*s;for(let g=0;g<u.length;g++){const _=n.getNode(u[g]);if(!_)throw new Error(`node with id ${u[g]} not found`);const T=t.x+i[g],M=t.y+l*r;m.set(_.id,{x:p(T),y:p(M)})}}return m},j={durationMs:250,xOffset:250,yOffset:200,shape:"standard"},so=(n,t={})=>{const e={...j,...t},o=I(e),s=I(!1),l=m=>{const{adjacencyList:p}=n.adjacencyList,r=oo(m,p.value);return(o.value.shape==="standard"?no:dt)(n,m,r,o.value)};return{shapeGraph:async m=>{if(s.value)return;const p=l(m);if(!p)return;s.value=!0;const r=[];for(const[u,i]of p){const h=n.getNode(u);if(!h)throw new Error(`Node with id ${u} not found`);const g={x:h.x,y:h.y};g.x===i.x&&g.y===i.y||(r.push({graphType:"node",data:{id:h.id,from:g,to:i}}),n.animate.node({nodeId:h.id,durationMs:e.durationMs,endCoords:i,history:!1,persist:!1}))}await new Promise(u=>setTimeout(u,e.durationMs+50)),r.length>0&&(n.persistent.trackGraphState(),n.history.addToUndoStack({action:"move",affectedItems:r})),s.value=!1},reshapingActive:s,options:o}},ao={debounceMs:500},lo=(n,t={})=>{const{debounceMs:e,...o}={...ao,...t},s=I(),l=I(!1),v=so(n,o),m=()=>{if(!s.value)return;const i=n.getNode(s.value);i&&v.shapeGraph(i)},p=Ae(m,e),r=()=>{n.subscribe("onStructureChange",p),n.subscribe("onNodeDrop",p),n.subscribe("onGroupDrop",p),l.value=!0},u=()=>{n.unsubscribe("onStructureChange",p),n.unsubscribe("onNodeDrop",p),n.unsubscribe("onGroupDrop",p),l.value=!1};return Ke(s,()=>{l.value&&m()}),we(u),{rootNodeId:s,activate:r,deactivate:u,isActive:l,updateShape:m,debouncedUpdateShape:p,...v}},io={class:"font-bold text-sm"},ro={class:"font-bold text-sm"},uo={class:"flex flex-col gap-2"},co=A({__name:"TreeShapeMenuSettings",props:{controls:{}},setup(n){const t=n,{options:e,debouncedUpdateShape:o,updateShape:s}=t.controls,l=S(()=>e.value.xOffset!==j.xOffset),v=S(()=>e.value.yOffset!==j.yOffset),m=()=>{e.value.xOffset=j.xOffset,o()},p=()=>{e.value.yOffset=j.yOffset,o()},r=u=>{e.value.shape=u,s()};return(u,i)=>(f(),w(J,{offset:5},{activator:c(({toggle:h})=>[d(D,{onClick:h},{default:c(()=>[d(H,{icon:"settings"})]),_:2},1032,["onClick"])]),default:c(()=>[d(P,{class:"p-3 flex flex-col gap-4 w-52 rounded-md shadow-lg"},{default:c(()=>[x("div",null,[x("h2",io,"Tree Offset X ("+k(a(e).xOffset)+")",1),d(ye,{modelValue:a(e).xOffset,"onUpdate:modelValue":[i[0]||(i[0]=h=>a(e).xOffset=h),u.controls.debouncedUpdateShape],min:0,max:a(j).xOffset*2,class:"w-full"},null,8,["modelValue","onUpdate:modelValue","max"]),l.value?(f(),w(D,{key:0,onClick:m,contrast:"",class:"text-xs"},{default:c(()=>i[4]||(i[4]=[C(" Set To Default ")])),_:1})):R("",!0)]),x("div",null,[x("h2",ro,"Tree Offset Y ("+k(a(e).yOffset)+")",1),d(ye,{modelValue:a(e).yOffset,"onUpdate:modelValue":[i[1]||(i[1]=h=>a(e).yOffset=h),u.controls.debouncedUpdateShape],min:0,max:a(j).yOffset*2,class:"w-full"},null,8,["modelValue","onUpdate:modelValue","max"]),v.value?(f(),w(D,{key:0,onClick:p,contrast:"",class:"text-xs"},{default:c(()=>i[5]||(i[5]=[C(" Set To Default ")])),_:1})):R("",!0)]),x("div",uo,[i[8]||(i[8]=x("h2",{class:"font-bold text-lg"},"Shape",-1)),d(D,{secondary:a(e).shape==="standard",tertiary:a(e).shape!=="standard",disabled:a(e).shape==="standard",onClick:i[2]||(i[2]=h=>r("standard"))},{default:c(()=>i[6]||(i[6]=[C(" Standard ")])),_:1},8,["secondary","tertiary","disabled"]),d(D,{secondary:a(e).shape==="binary",tertiary:a(e).shape!=="binary",disabled:a(e).shape==="binary",onClick:i[3]||(i[3]=h=>r("binary"))},{default:c(()=>i[7]||(i[7]=[C(" Binary ")])),_:1},8,["secondary","tertiary","disabled"])])]),_:1})]),_:1}))}}),po={key:0,class:"flex flex-col gap-2"},fo={class:"flex justify-between"},vo={class:"flex justify-between"},mo={key:1,class:"flex flex-col gap-2"},ho=A({__name:"TreeShapeMenu",props:{controls:{}},setup(n){const e=re(n,"controls"),{isActive:o,activate:s,deactivate:l,updateShape:v,rootNodeId:m}=e.value,p=i=>{m.value=i.id,o.value||v()},r=S(()=>{if(m.value)return y.value.getNode(m.value)}),u=()=>{s(),!r.value&&y.value.nodes.value.length>0&&(m.value=y.value.nodes.value[0].id)};return(i,h)=>(f(),w(J,null,{activator:c(g=>[W(i.$slots,"default",ee(te(g)))]),default:c(()=>[d(P,{class:"p-3 flex flex-col gap-2 w-72 rounded-lg"},{default:c(()=>[a(y).nodes.value.length>0?(f(),b("div",po,[x("div",fo,[h[0]||(h[0]=x("h1",{class:"font-bold text-xl"},"Pick A Root Node",-1)),d(co,{controls:e.value},null,8,["controls"])]),d(P,{secondary:"",class:"py-3 flex flex-wrap justify-center gap-2 max-h-48 rounded-md overflow-auto"},{default:c(()=>[(f(!0),b(L,null,V(a(y).nodes.value,g=>(f(),w(K,{onClick:_=>p(g),key:g.id,node:g,size:55},null,8,["onClick","node"]))),128))]),_:1}),x("div",vo,[x("div",null,[a(o)?(f(),w(de,{key:0,onClick:a(l),color:a(N).RED_600,class:"text-xs"},{default:c(()=>h[1]||(h[1]=[C(" Turn Off AutoTree™ ")])),_:1},8,["onClick","color"])):(f(),w(D,{key:1,onClick:u,tertiary:"",class:"text-xs"},{default:c(()=>h[2]||(h[2]=[C(" Try AutoTree™ ")])),_:1}))]),x("div",null,[a(o)&&r.value?(f(),w(P,{key:0,secondary:"",class:"rounded-md px-2 py-1 font-bold text-xs animate-pulse"},{default:c(()=>[x("h2",null,"Tracking Node "+k(r.value.label),1)]),_:1})):R("",!0)])])])):(f(),b("div",mo,h[3]||(h[3]=[x("h1",{class:"font-bold text-xl"},"Where Are The Nodes?!",-1),x("p",{class:"text-base"},[C(" Add some nodes to the graph, then come back to check out how we can "),x("span",{class:"text-magic"},"magically"),C(" shape them into a tree! ")],-1)])))]),_:1})]),_:3}))}}),fe=n=>{const t=n.map(o=>o.x),e=n.map(o=>o.y);return{x:me(t),y:me(e)}},Se=(n,t)=>{const e=fe(n),o=t.x-e.x,s=t.y-e.y;for(const l of n)l.x+=o,l.y+=s;return n},be=(n,t)=>{const{at:e,width:o,height:s}=t,l=document.createElement("canvas");l.width=o,l.height=s,ut(l).drawImage(n,e.x,e.y,o,s,0,0,o,s);const m=l.toDataURL();return l.remove(),m},_o=n=>{const t=pe("graph-templates",[]),e=I(document.createElement("canvas")),o=Me(e),s=I(nt.flatMap(i=>i.templates??[])),l=S(()=>[...t.value,...s.value]),v=async()=>{e.value.width=5e3,e.value.height=5e3,await new Promise(i=>setTimeout(i,50));for(const i of l.value){o.load(i.graphState),await new Promise(g=>setTimeout(g,50)),o.themeName.value=n.themeName.value;const h=ge(o.nodes.value,o);i.thumbnail=be(e.value,h)}e.value.width=0,e.value.height=0},m=async i=>{e.value.width=5e3,e.value.height=5e3;const{nodes:h,edges:g,canvas:_}=n;if(!_.value)throw new Error("no snapshot canvas found");const T={nodes:JSON.parse(JSON.stringify(h.value)),edges:JSON.parse(JSON.stringify(g.value))};o.load(T),await new Promise($=>setTimeout($,50)),o.themeName.value=n.themeName.value;const M=ge(o.nodes.value,o),E=be(e.value,M);t.value.unshift({id:X(),isUserAdded:!0,thumbnail:E,...i,graphState:T}),e.value.width=0,e.value.height=0},p=i=>{const h=l.value.find(M=>M.id===i);if(!h)throw new Error(`template could not be loaded: ${i} not found`);const{nodes:g,edges:_}=h.graphState,T=fe(n.nodes.value);n.load({nodes:Se(g,T),edges:_})},r=()=>t.value=[],u=i=>{t.value=t.value.filter(h=>h.id!==i)};return qe(()=>{v(),n.subscribe("onThemeChange",v)}),we(()=>{n.unsubscribe("onThemeChange",v),e.value.remove()}),{add:m,load:p,clearUserTemplates:r,removeUserTemplate:u,updateProductThumbnails:v,templates:l,userTemplates:t,productTemplates:s,tempGraph:o,tempCanvas:e}},go={class:"text-xl"},xo={class:"text-sm font-normal"},yo=["src"],bo={class:"flex gap-2"},$o=A({__name:"TemplateItem",props:{template:{},load:{type:Function},remove:{type:Function}},setup(n){const t=n,{template:e}=Je(t),o=I(!1);return(s,l)=>(f(),b("div",{onMouseenter:l[2]||(l[2]=v=>o.value=!0),onMouseleave:l[3]||(l[3]=v=>o.value=!1),class:"relative flex flex-col"},[x("div",{class:"transition duration-200 p-2",style:Y({opacity:o.value?.5:1})},[x("h3",go,k(a(e).title),1),x("p",xo,k(a(e).description),1),x("img",{src:a(e).thumbnail,class:"aspect-video h-52 object-contain p-2"},null,8,yo)],4),x("div",{class:"absolute w-full h-full z-10 flex items-center justify-center transition duration-200",style:Y({opacity:o.value?1:0})},[x("div",bo,[d(D,{onClick:l[0]||(l[0]=v=>s.load(a(e).id))},{default:c(()=>l[4]||(l[4]=[C("Load")])),_:1}),a(e).isUserAdded?(f(),w(D,{key:0,onClick:l[1]||(l[1]=v=>s.remove(a(e).id)),color:a(N).RED_500},{default:c(()=>l[5]||(l[5]=[C("Delete")])),_:1},8,["color"])):R("",!0)])],4)],32))}}),Ee={clusterCount:1,maxNodesPerCluster:12,minDistance:200,clusterSpread:350},Ie={maxEdgesPerNode:10,connectionProbability:.8,maxNeighbors:4,minAngleBetweenEdges:Math.PI/6,edgeLabel:"1"},Co={...Ie,...Ee},ko=(n={})=>{const{clusterCount:t,maxNodesPerCluster:e,minDistance:o,clusterSpread:s}={...Ee,...n},l=I([]),v=5,m=20;return Array.from({length:t},()=>({x:Math.random()*(s*2)+s,y:Math.random()*(s*2)+s})).forEach(r=>{const u=2*Math.PI/e,i=et(l,tt);for(let h=0;h<e;h++){const g=u*h*(Math.random()/10+1);let _=o,T,M,E=0;do _+=Math.random()*(m-v)+v,T=r.x+Math.cos(g)*_,M=r.y+Math.sin(g)*_,E++;while(l.value.some($=>Math.hypot($.x-T,$.y-M)<o)&&E<100);l.value.push({id:X(),label:i(),x:T,y:M})}}),l.value},wo=(n,t={})=>{const{maxEdgesPerNode:e,connectionProbability:o,maxNeighbors:s,minAngleBetweenEdges:l,edgeLabel:v}={...Ie,...t},m=[],p=new Map,r=(_,T)=>{var M;p.has(_)||p.set(_,new Set),(M=p.get(_))==null||M.add(T)},u=(_,T)=>Math.sqrt((_.x-T.x)**2+(_.y-T.y)**2),i=new Set,h=new Set(n.map(_=>_.id)),g=n[0];for(i.add(g.id),h.delete(g.id);h.size>0;){let _=null;for(const M of i){const E=n.find($=>$.id===M);if(E)for(const $ of h){const B=n.find(Z=>Z.id===$);if(!B)continue;const z=u(E,B);(!_||z<_.dist)&&(_={from:E.id,to:B.id,dist:z})}}const T=typeof v=="function"?v(_.from,_.to):v;if(_){const{from:M,to:E}=_;m.push({id:X(),from:M,to:E,label:T}),r(M,E),i.add(E),h.delete(E)}}return n.forEach(_=>{var E;const T=n.filter($=>_.id!==$.id).map($=>({toNode:$,dist:u(_,$)})).sort(($,B)=>$.dist-B.dist).slice(0,s);let M=0;for(const{toNode:$,dist:B}of T){if(M>=e)break;const z=o*Math.exp(-B/500);if(Math.random()<=z&&!((E=p.get(_.id))!=null&&E.has($.id))){const Z=Math.atan2($.y-_.y,$.x-_.x);if(m.filter(G=>G.from===_.id||G.to===_.id).every(G=>{const ne=n.find(ve=>G.from===_.id?ve.id===G.to:ve.id===G.from);if(!ne)return!1;const Re=Math.atan2(ne.y-_.y,ne.x-_.x);return Ze(Z,Re)>l})){const G=typeof v=="function"?v(_.id,$.id):v;m.push({id:X(),from:_.id,to:$.id,label:G}),r(_.id,$.id),M++}}}}),m},To=n=>{const t=I({...Co}),e=I([]),o=I([]);return{generate:()=>{const l=ko(t.value),v=fe(n.nodes.value),m=Se(l,v);o.value=wo(m,t.value),e.value=m,n.load({nodes:e.value,edges:o.value})},options:t,nodes:e,edges:o}},Mo=A({__name:"AutoGenerate",setup(n){const{generate:t}=To(y.value);return(e,o)=>(f(),w(D,{onClick:a(t)},{default:c(()=>[d(H,{icon:"add"}),o[0]||(o[0]=C(" Generate New "))]),_:1},8,["onClick"]))}}),Ao={key:0,class:"font-normal text-base text-center"},No={key:1,class:"max-h-[600px] overflow-auto"},So={class:"flex gap-2 justify-center"},Eo=A({__name:"TemplateMenu",setup(n){const{templates:t,userTemplates:e,add:o,load:s,clearUserTemplates:l,removeUserTemplate:v}=_o(y.value),m=S(()=>y.value.baseTheme.value.graphBgColor);return(p,r)=>(f(),w(J,null,{activator:c(u=>[W(p.$slots,"default",ee(te(u)))]),default:c(()=>[d(P,{class:"flex flex-col text-xl font-bold p-3 w-[400px] rounded-lg gap-2"},{default:c(()=>[r[2]||(r[2]=x("h1",{class:"text-2xl"},"Templates",-1)),a(t).length===0?(f(),b("p",Ao," Add a template! ")):(f(),b("div",No,[(f(!0),b(L,null,V(a(t),u=>(f(),b("div",{key:u.id,class:"flex flex-col gap-2 mb-2"},[d($o,{template:u,load:a(s),remove:a(v),class:"w-full rounded",style:Y({backgroundColor:m.value})},null,8,["template","load","remove","style"])]))),128))])),x("div",So,[d(D,{onClick:a(o),disabled:a(y).nodes.value.length===0},{default:c(()=>r[0]||(r[0]=[C("Save Current")])),_:1},8,["onClick","disabled"]),d(D,{onClick:a(l),disabled:a(e).length===0},{default:c(()=>r[1]||(r[1]=[C("Clear All")])),_:1},8,["onClick","disabled"])]),r[3]||(r[3]=x("hr",{class:"my-2"},null,-1)),d(Mo)]),_:1})]),_:3}))}}),Io=A({__name:"IslandToolbar",setup(n){const t=it(y.value,[{dismiss:"onNodeAdded",hint:"Double click on the canvas to add a node."},{dismiss:"onEdgeAdded",hint:"Hover node to show anchors, drag between them to add an edge."}]);t.start();const e=()=>{const{activate:p,deactivate:r,isActive:u}=y.value.annotation;u.value?r():p(),y.value.canvasFocused.value=!0},{undo:o,redo:s}=y.value.shortcut.trigger,l=S(()=>{const{isActive:p,canUndo:r}=y.value.annotation,{canUndo:u}=y.value.history,{settings:i}=y.value;return p.value?r.value:i.value.interactive?u.value:!1}),v=S(()=>{const{isActive:p,canRedo:r}=y.value.annotation,{canRedo:u}=y.value.history,{settings:i}=y.value;return p.value?r.value:i.value.interactive?u.value:!1}),m=lo(y.value);return(p,r)=>(f(),w(st,{hint:a(t)},{default:c(()=>[d(Q,{class:"gap-0"},{default:c(()=>[d(F,{onClick:r[0]||(r[0]=u=>a(y).settings.value.displayEdgeLabels=!0),active:a(y).settings.value.displayEdgeLabels,icon:"label_outline"},null,8,["active"]),d(le),d(F,{onClick:r[1]||(r[1]=u=>a(y).settings.value.displayEdgeLabels=!1),active:!a(y).settings.value.displayEdgeLabels,icon:"label_off_outline"},null,8,["active"])]),_:1}),d(Q,{class:"gap-0"},{default:c(()=>[d(F,{onClick:r[2]||(r[2]=u=>a(y).settings.value.isGraphDirected=!0),active:a(y).settings.value.isGraphDirected,icon:"arrow_right_alt"},null,8,["active"]),d(le),d(F,{onClick:r[3]||(r[3]=u=>a(y).settings.value.isGraphDirected=!1),active:!a(y).settings.value.isGraphDirected,icon:"remove"},null,8,["active"])]),_:1}),d(Q,{class:"gap-0"},{default:c(()=>[d(F,{onClick:a(o),disabled:!l.value,icon:"undo"},null,8,["onClick","disabled"]),d(le),d(F,{onClick:a(s),disabled:!v.value,icon:"redo"},null,8,["onClick","disabled"])]),_:1}),d(Q,null,{default:c(()=>[d(F,{onClick:e,active:a(y).annotation.isActive.value,icon:"edit"},null,8,["active"]),d(Rt,null,{default:c(({toggle:u,isOpen:i})=>[d(F,{onClick:u,active:i,icon:"info_outline"},null,8,["onClick","active"])]),_:1}),d(to,null,{default:c(({toggle:u,isOpen:i})=>[d(F,{onClick:u,active:i,icon:"group"},null,8,["onClick","active"])]),_:1}),d(ho,{controls:a(m)},{default:c(({toggle:u,isOpen:i})=>[d(F,{onClick:u,active:i||a(m).isActive.value,icon:i||a(m).isActive.value?"forest":"forest_outline"},null,8,["onClick","active","icon"])]),_:1},8,["controls"]),d(Eo,null,{default:c(({toggle:u,isOpen:i})=>[d(F,{onClick:u,active:i,icon:i?"add_box":"add_box_outline"},null,8,["onClick","active","icon"])]),_:1})]),_:1})]),_:1},8,["hint"]))}}),oe="markup",zo=["XS","SM","MD","LG","XL"],$e="MD",Po=[N.BLACK,N.BLUE_600,N.RED_600,N.GREEN_600,N.YELLOW_600],Ce=N.BLACK,Do={XS:25,SM:30,MD:35,LG:40,XL:45},ze={XS:6,SM:8,MD:10,LG:12,XL:14},Ro=(n,t)=>{const e=n.__vccOpts||n;for(const[o,s]of t)e[o]=s;return e},Fo={},Lo={class:"flex flex-col gap-1"};function Bo(n,t){return f(),b("div",Lo,[W(n.$slots,"default")])}const Pe=Ro(Fo,[["render",Bo]]),Oo=A({__name:"RadioButton",props:{outlineColor:{default:N.WHITE},color:{default:N.GRAY_700},active:{type:Boolean,default:!1}},setup(n){const t=n,e=re(t,"outlineColor"),o=xe(e),s=S(()=>(o.value.isDark()?o.value.lighten(30):o.value.darken(30)).toHexString()),l=re(t,"color"),v=xe(l),m=S(()=>v.value.isDark()?N.WHITE:N.BLACK),p=S(()=>t.active?t.outlineColor:u.value?s.value:N.TRANSPARENT),r=["cursor-pointer","rounded-xl","p-1","border-2"],u=I(!1);return(i,h)=>(f(),b("button",{onMouseenter:h[0]||(h[0]=g=>u.value=!0),onMouseleave:h[1]||(h[1]=g=>u.value=!1),class:he(r),style:Y({borderColor:p.value,color:m.value})},[x("div",{class:he(["relative","w-8","h-8","rounded-md","flex","items-center","justify-center","text-sm"]),style:Y({backgroundColor:t.color})},[W(i.$slots,"default")],4)],36))}}),De=A({__name:"GRadioButton",setup(n){const t=ke();return(e,o)=>(f(),w(Oo,ce(e.$attrs,{color:a(t).secondary,"outline-color":a(t).text}),{default:c(()=>[W(e.$slots,"default")]),_:3},16,["color","outline-color"]))}}),Uo=A({__name:"InputColor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(n){const t=Te(n,"modelValue");return(e,o)=>(f(),w(Pe,null,{default:c(()=>[(f(!0),b(L,null,V(a(Po),s=>(f(),w(De,{onClick:l=>t.value=s,key:s,active:t.value===s,color:s},null,8,["onClick","active","color"]))),128))]),_:1}))}}),Vo=A({__name:"NodeEdgeColorInput",props:{graph:{},colorMap:{}},setup(n){const t=n,e=()=>{const r=Array.from(t.graph.focus.focusedItemIds.value),u=new Set(r.map(h=>t.colorMap.get(h)));if(u.has(void 0)||u.size!==1)return;const i=u.values().next().value;return i||Ce},o=I(e()),s=r=>{for(const u of t.graph.focus.focusedItemIds.value)t.colorMap.set(u,r);o.value=r},l=({id:r})=>{o.value&&t.colorMap.set(r,o.value)},v=async()=>{t.graph.focus.focusedItemIds.value.size!==0&&(await new Promise(r=>setTimeout(r,0)),o.value=e())};t.graph.subscribe("onNodeAdded",l),t.graph.subscribe("onEdgeAdded",l),t.graph.subscribe("onFocusChange",v);const{setTheme:m}=q(t.graph,oe+"-preview");return m("linkPreviewColor",()=>o.value??Ce),(r,u)=>(f(),w(Uo,{"onUpdate:modelValue":s,"model-value":o.value},null,8,["model-value"]))}}),Go=A({__name:"InputSize",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(n){const t=Te(n,"modelValue");return(e,o)=>(f(),w(Pe,null,{default:c(()=>[(f(!0),b(L,null,V(a(zo),s=>(f(),w(De,{onClick:l=>t.value=s,key:s,active:t.value===s},{default:c(()=>[C(k(s),1)]),_:2},1032,["onClick","active"]))),128))]),_:1}))}}),jo=A({__name:"NodeEdgeSizeInput",props:{graph:{},sizeMap:{}},setup(n){const t=n,e=()=>{const r=Array.from(t.graph.focus.focusedItemIds.value),u=new Set(r.map(h=>t.sizeMap.get(h)));if(u.has(void 0)||u.size!==1)return;const i=u.values().next().value;return i||$e},o=I(e()),s=r=>{for(const u of t.graph.focus.focusedItemIds.value)t.sizeMap.set(u,r);o.value=r,t.graph.marquee.updateEncapsulatedNodeBox()},l=({id:r})=>{o.value&&t.sizeMap.set(r,o.value)},v=async()=>{t.graph.focus.focusedItemIds.value.size!==0&&(await new Promise(r=>setTimeout(r,0)),o.value=e())};t.graph.subscribe("onNodeAdded",l),t.graph.subscribe("onEdgeAdded",l),t.graph.subscribe("onFocusChange",v);const{setTheme:m}=q(t.graph,oe+"-preview");return m("linkPreviewWidth",()=>ze[o.value??$e]),(r,u)=>(f(),w(Go,{"onUpdate:modelValue":s,"model-value":o.value},null,8,["model-value"]))}}),Ho={class:"flex flex-col gap-3"},Yo=A({__name:"IslandMarkup",props:{graph:{},sizeMap:{},colorMap:{}},setup(n){const t=n;return(e,o)=>(f(),b("div",Ho,[d(P,{class:"p-2 rounded-xl"},{default:c(()=>[d(Vo,{graph:t.graph,colorMap:e.colorMap},null,8,["graph","colorMap"])]),_:1}),d(P,{class:"p-2 rounded-xl"},{default:c(()=>[d(jo,{graph:t.graph,sizeMap:e.sizeMap},null,8,["graph","sizeMap"])]),_:1})]))}}),Wo=n=>{const{setTheme:t,removeAllThemes:e}=q(n,oe),o=pe("markup-color-map",new Map),s=u=>{if(o.value.get(u.id))return n.baseTheme.value.nodeColor},l=u=>{const i=o.value.get(u.id);if(i)return n.focus.isFocused(u.id)?_e(i,30):i},v=u=>{const i=o.value.get(u.id);if(i)return n.focus.isFocused(u.id)?_e(i,30):i},m=()=>({dark:N.WHITE,light:N.BLACK,girl:N.PURPLE_800})[n.themeName.value]+"80";return{colorize:()=>{t("nodeColor",s),t("nodeBorderColor",l),t("nodeFocusBorderColor",l),t("nodeAnchorColor",l),t("nodeAnchorColorWhenParentFocused",l),t("edgeColor",v),t("marqueeSelectionBoxColor",N.TRANSPARENT),t("marqueeEncapsulatedNodeBoxBorderColor",m),t("marqueeEncapsulatedNodeBoxColor",N.TRANSPARENT)},decolorize:()=>{e()},colorMap:o}},Xo=n=>{const{setTheme:t,removeAllThemes:e}=q(n,oe),o=pe("markup-size-map",new Map),s=p=>{const r=o.value.get(p.id);if(r)return Do[r]},l=p=>{const r=o.value.get(p.id);if(r)return ze[r]};return{size:()=>{t("nodeSize",s),t("edgeWidth",l)},desize:()=>{e()},sizeMap:o}},dn=A({__name:"Main",setup(n){const t=I(),e=Me(t,ct),{colorize:o,colorMap:s}=Wo(e);o();const{size:l,sizeMap:v}=Xo(e);return l(),(m,p)=>(f(),w(at,{onGraphRef:p[0]||(p[0]=r=>t.value=r),graph:a(e)},{"top-center":c(()=>[d(Io)]),"center-left":c(()=>[ie(d(Yo,{graph:a(e),sizeMap:a(v),colorMap:a(s)},null,8,["graph","sizeMap","colorMap"]),[[Qe,!a(e).annotation.isActive.value]])]),_:1},8,["graph"]))}});export{dn as default};
