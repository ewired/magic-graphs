import{g as b,d as G,c as I,u as N,a as D,_ as Y,s as O}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-CxSmD8X9.js";import{A as e,g,y as H,G as L,e as W,Q as $,o as P,c as B,b as E,w as T,d as S,t as A,z as u,L as F,K as z,a as C,S as U,F as q,T as K}from"./index-Bnp4Kkft.js";import{_ as k}from"./Button.vue_vue_type_script_setup_true_lang-C5-mvDcp.js";import{_ as V}from"./InputRange.vue_vue_type_script_setup_true_lang-B9Rx8ByR.js";const Q=e.GREEN_500,X=e.RED_500,j=e.YELLOW_500,J=(R,r)=>{const d=g(!1),m=g(4),t=g(99),i=g(0),l=H(()=>t.value<1?"00":t.value<10?`0${t.value}`:t.value>99?"":t.value.toString()),o=document.createElement("canvas"),w=()=>{if(!R.value)throw new Error("target canvas not found");const{width:n,height:x}=R.value.getBoundingClientRect();o.width=n,o.height=x,o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.pointerEvents="none";const h=document.getElementById("responsive-canvas-container");if(!h)throw new Error("Canvas container not found");h.appendChild(o)},s=g("precise"),f=()=>{s.value=s.value==="efficient"?"precise":"efficient",c()},_=n=>{const x=s.value==="precise"?r.value.findLast(v=>v.shapeHitbox(n)):r.value.findLast(v=>v.efficientHitbox({at:n,width:1,height:1})),h=r.value.findLast(v=>{var M;return(M=v.textHitbox)==null?void 0:M.call(v,n)}),p={at:n,radius:2,color:Q+l.value};h?p.color=j+l.value:x&&(p.color=X+l.value);const y=b(o);I(p).draw(y)},c=async()=>{if(b(o).clearRect(0,0,o.width,o.height),i.value=0,!o||!d.value)return;const{width:x,height:h}=o.getBoundingClientRect();for(let p=0;p<h;p+=m.value)for(let y=0;y<x;y+=m.value)i.value%2e4===0&&await new Promise(v=>setTimeout(v,10)),_({x:y,y:p}),i.value++};L(d,c);const a=G(c,500);return L(m,a),L(t,a),L(r,a),setTimeout(w,500),{heatmapActive:d,heatmapOpacity:t,heatmapResolution:m,runHeatmap:c,runHeatmapDebounced:a,pointsSampled:i,toggleHeatmapMode:f,heatmapMode:s}},Z={key:1,class:"flex items-center gap-3 text-white h-6 mt-1 text-sm font-bold"},ee=W({__name:"Toolbar",props:{canvas:{},items:{},draw:{type:Function}},setup(R){const r=R,{items:d,canvas:m}=$(r),{heatmapActive:t,heatmapOpacity:i,heatmapResolution:l,toggleHeatmapMode:o,heatmapMode:w}=J(m,d),s=H(()=>t.value?"Hide Heatmap":"Show Heatmap"),f=H(()=>w.value==="efficient"?"Precise Heatmap":"Efficient Heatmap"),_=()=>{var c,a;(a=(c=d.value[2]).activateTextArea)==null||a.call(c,n=>{console.log("value",n)})};return(c,a)=>(P(),B(q,null,[E(k,{onClick:c.draw},{default:T(()=>a[3]||(a[3]=[S("Redraw")])),_:1},8,["onClick"]),E(k,{onClick:a[0]||(a[0]=n=>t.value=!u(t))},{default:T(()=>[S(A(s.value),1)]),_:1}),u(t)?(P(),F(k,{key:0,onClick:u(o)},{default:T(()=>[S(A(f.value),1)]),_:1},8,["onClick"])):z("",!0),E(k,{onClick:_},{default:T(()=>a[4]||(a[4]=[S(" Micro Control ")])),_:1}),u(t)?(P(),B("div",Z,[C("div",null,[C("p",null,"Opacity "+A(u(i)),1),E(V,{modelValue:u(i),"onUpdate:modelValue":a[1]||(a[1]=n=>U(i)?i.value=n:null),modelModifiers:{number:!0},min:"0",max:"100"},null,8,["modelValue"])]),C("div",null,[C("p",null,"Resolution "+A(u(l)),1),E(V,{modelValue:u(l),"onUpdate:modelValue":a[2]||(a[2]=n=>U(l)?l.value=n:null),modelModifiers:{number:!0},min:"1",max:"10"},null,8,["modelValue"])])])):z("",!0)],64))}}),te={class:"h-full w-full"},ae={class:"absolute m-3 flex gap-3 z-50"},ie=W({__name:"ShapePlayground",setup(R){const r=g(),d=N(),m=H(()=>d.value?e.GRAY_800:e.GRAY_200),t=g([]),i=H(()=>(d.value?e.GRAY_200:e.GRAY_700)+"15"),l=()=>{const s=b(r);s.clearRect(0,0,s.canvas.width,s.canvas.height);const{circle:f,uturn:_,cross:c,rect:a,square:n,triangle:x}=O;t.value.push(f({at:{x:200,y:200},radius:50,color:e.BLUE_500,stroke:{color:e.BLUE_700,width:10,dash:[10,5]},textArea:{text:{content:"51",color:e.WHITE,fontSize:20},color:e.TRANSPARENT}})),t.value.push(x({point1:{x:800,y:100},point2:{x:900,y:200},point3:{x:700,y:200},color:e.BLUE_500})),t.value.push(_({at:{x:600,y:100},downDistance:50,upDistance:50,lineWidth:10,color:e.BLUE_500,rotation:Math.PI*.2,spacing:20,textArea:{color:e.PURPLE_500,activeColor:e.PURPLE_600,text:{content:"5",color:e.WHITE,fontSize:20}}}));const h=O.line({start:{x:100,y:100},end:{x:600,y:900},color:e.GRAY_900,width:10,textArea:{color:e.PURPLE_500,activeColor:e.PURPLE_600,text:{content:"5",color:e.WHITE,fontSize:20}}});t.value.push(h),t.value.push(c({at:{x:500,y:300},color:e.SLATE_600,size:150,rotation:Math.PI/.6,borderRadius:10,lineWidth:80})),t.value.push(n({at:{x:600,y:400},size:120,rotation:Math.PI/.7,color:e.GREEN_600,borderRadius:25,stroke:{color:e.YELLOW_200,width:10,dash:[10,5]},textArea:{text:{content:"13",color:e.WHITE,fontSize:20},color:K}})),t.value.forEach(p=>p.draw(s))};document.addEventListener("resize",l),document.addEventListener("keyup",s=>{s.code==="Space"&&l()}),setTimeout(l,100);const{width:o,height:w}=D();return(s,f)=>(P(),B("div",te,[C("div",ae,[E(ee,{canvas:r.value,items:t.value,draw:l},null,8,["canvas","items"])]),E(Y,{onCanvasRef:f[0]||(f[0]=_=>r.value=_),color:m.value,"pattern-color":i.value,"canvas-width":u(o),"canvas-height":u(w)},null,8,["color","pattern-color","canvas-width","canvas-height"])]))}});export{ie as default};
