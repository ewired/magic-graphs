import{B as e,g,H,z as L,e as W,S as N,o as k,c as B,b as R,w as T,d as S,t as b,M as u,N as I,E as z,a as C,T as O,F as D,U as G,V as Y,W as $}from"./index-_A0fE95w.js";import{g as P,d as F,c as q,_ as X,s as U}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-BiDsemoy.js";import{_ as A}from"./Button.vue_vue_type_script_setup_true_lang-BJ0GeZfz.js";import{_ as V}from"./InputRange.vue_vue_type_script_setup_true_lang-BJmE2YSG.js";const j=e.GREEN_500,J=e.RED_500,K=e.YELLOW_500,Q=(w,c)=>{const d=g(!1),p=g(4),t=g(99),i=g(0),l=H(()=>t.value<1?"00":t.value<10?`0${t.value}`:t.value>99?"":t.value.toString()),o=document.createElement("canvas"),y=()=>{if(!w.value)throw new Error("target canvas not found");const{width:n,height:v}=w.value.getBoundingClientRect();o.width=n,o.height=v,o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.pointerEvents="none";const x=document.getElementById("responsive-canvas-container");if(!x)throw new Error("Canvas container not found");x.appendChild(o)},s=g("precise"),f=()=>{s.value=s.value==="efficient"?"precise":"efficient",r()},_=n=>{const v=s.value==="precise"?c.value.findLast(h=>h.shapeHitbox(n)):c.value.findLast(h=>h.efficientHitbox({at:n,width:1,height:1})),x=c.value.findLast(h=>{var M;return(M=h.textHitbox)==null?void 0:M.call(h,n)}),m={at:n,radius:2,color:j+l.value};x?m.color=K+l.value:v&&(m.color=J+l.value);const E=P(o);q(m).draw(E)},r=async()=>{if(P(o).clearRect(0,0,o.width,o.height),i.value=0,!o||!d.value)return;const{width:v,height:x}=o.getBoundingClientRect();for(let m=0;m<x;m+=p.value)for(let E=0;E<v;E+=p.value)i.value%2e4===0&&await new Promise(h=>setTimeout(h,10)),_({x:E,y:m}),i.value++};L(d,r);const a=F(r,500);return L(p,a),L(t,a),L(c,a),setTimeout(y,500),{heatmapActive:d,heatmapOpacity:t,heatmapResolution:p,runHeatmap:r,runHeatmapDebounced:a,pointsSampled:i,toggleHeatmapMode:f,heatmapMode:s}},Z={key:1,class:"flex items-center gap-3 text-white h-6 mt-1 text-sm font-bold"},ee=W({__name:"Toolbar",props:{canvas:{},items:{},draw:{type:Function}},setup(w){const c=w,{items:d,canvas:p}=N(c),{heatmapActive:t,heatmapOpacity:i,heatmapResolution:l,toggleHeatmapMode:o,heatmapMode:y}=Q(p,d),s=H(()=>t.value?"Hide Heatmap":"Show Heatmap"),f=H(()=>y.value==="efficient"?"Precise Heatmap":"Efficient Heatmap"),_=()=>{var a,n;const r=P(p);(n=(a=d.value[2]).activateTextArea)==null||n.call(a,r,v=>{console.log("value",v)})};return(r,a)=>(k(),B(D,null,[R(A,{onClick:r.draw},{default:T(()=>a[3]||(a[3]=[S("Redraw")])),_:1},8,["onClick"]),R(A,{onClick:a[0]||(a[0]=n=>t.value=!u(t))},{default:T(()=>[S(b(s.value),1)]),_:1}),u(t)?(k(),I(A,{key:0,onClick:u(o)},{default:T(()=>[S(b(f.value),1)]),_:1},8,["onClick"])):z("",!0),R(A,{onClick:_},{default:T(()=>a[4]||(a[4]=[S(" Micro Control ")])),_:1}),u(t)?(k(),B("div",Z,[C("div",null,[C("p",null,"Opacity "+b(u(i)),1),R(V,{modelValue:u(i),"onUpdate:modelValue":a[1]||(a[1]=n=>O(i)?i.value=n:null),modelModifiers:{number:!0},min:"0",max:"100"},null,8,["modelValue"])]),C("div",null,[C("p",null,"Resolution "+b(u(l)),1),R(V,{modelValue:u(l),"onUpdate:modelValue":a[2]||(a[2]=n=>O(l)?l.value=n:null),modelModifiers:{number:!0},min:"1",max:"10"},null,8,["modelValue"])])])):z("",!0)],64))}}),te={class:"h-full w-full"},ae={class:"absolute m-3 flex gap-3 z-50"},ie=W({__name:"ShapePlayground",setup(w){const c=g(),d=G(),p=H(()=>d.value?e.GRAY_800:e.GRAY_200),t=g([]),i=H(()=>(d.value?e.GRAY_200:e.GRAY_700)+"15"),l=()=>{const s=P(c);s.clearRect(0,0,s.canvas.width,s.canvas.height);const{circle:f,uturn:_,cross:r,rect:a,square:n,triangle:v,scribble:x}=U;t.value.push(f({at:{x:200,y:200},radius:50,color:e.BLUE_500,stroke:{color:e.BLUE_700,width:10,dash:[10,5]},textArea:{text:{content:"dsadsadsadsadsadsadsa",color:e.WHITE,fontSize:10},color:e.TRANSPARENT}})),t.value.push(v({point1:{x:800,y:100},point2:{x:900,y:200},point3:{x:700,y:200},color:e.BLUE_500,textArea:{text:{content:"hihidsadsadsadsadsa",fontSize:20}}})),t.value.push(_({at:{x:600,y:100},downDistance:50,upDistance:50,lineWidth:10,color:e.BLUE_500,rotation:Math.PI*.2,spacing:20,textArea:{color:e.PURPLE_500,activeColor:e.PURPLE_600,text:{content:"5",color:e.WHITE,fontSize:20}}}));const m=U.line({start:{x:100,y:100},end:{x:600,y:900},color:e.GRAY_900,width:10,textArea:{color:e.PURPLE_500,activeColor:e.PURPLE_600,text:{content:"5",color:e.WHITE,fontSize:20}}});t.value.push(m),t.value.push(r({at:{x:500,y:300},color:e.SLATE_600,size:150,rotation:Math.PI/.6,borderRadius:10,lineWidth:80})),t.value.push(n({at:{x:600,y:400},size:120,rotation:Math.PI/.7,color:e.GREEN_600,borderRadius:25,stroke:{color:e.YELLOW_200,width:10,dash:[10,5]},textArea:{text:{content:"13",color:e.WHITE,fontSize:20},color:$}})),t.value.push(x({type:"draw",brushWeight:10,points:[{x:534,y:612},{x:535,y:612}]})),t.value.forEach(E=>E.draw(s))};document.addEventListener("resize",l),document.addEventListener("keyup",s=>{s.code==="Space"&&l()}),setTimeout(l,100);const{width:o,height:y}=Y();return(s,f)=>(k(),B("div",te,[C("div",ae,[R(ee,{canvas:c.value,items:t.value,draw:l},null,8,["canvas","items"])]),R(X,{onCanvasRef:f[0]||(f[0]=_=>c.value=_),color:p.value,"pattern-color":i.value,"canvas-width":u(o),"canvas-height":u(y)},null,8,["color","pattern-color","canvas-width","canvas-height"])]))}});export{ie as default};
