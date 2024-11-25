import{g as P,d as N,c as I,a as D,b as G,_ as Y,s as z}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-dupILRRz.js";import{B as e,g as E,H,z as L,e as W,Q as $,o as k,c as B,b as g,w as T,d as b,t as S,M as u,N as F,E as O,a as C,S as U,F as q,T as Q}from"./index-Bn4yAARZ.js";import{_ as A}from"./Button.vue_vue_type_script_setup_true_lang-C_SzdnmN.js";import{_ as V}from"./InputRange.vue_vue_type_script_setup_true_lang-B7iR_Hih.js";const X=e.GREEN_500,j=e.RED_500,J=e.YELLOW_500,K=(R,r)=>{const d=E(!1),m=E(4),t=E(99),i=E(0),l=H(()=>t.value<1?"00":t.value<10?`0${t.value}`:t.value>99?"":t.value.toString()),o=document.createElement("canvas"),w=()=>{if(!R.value)throw new Error("target canvas not found");const{width:n,height:_}=R.value.getBoundingClientRect();o.width=n,o.height=_,o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.pointerEvents="none";const f=document.getElementById("responsive-canvas-container");if(!f)throw new Error("Canvas container not found");f.appendChild(o)},s=E("precise"),h=()=>{s.value=s.value==="efficient"?"precise":"efficient",c()},x=n=>{const _=s.value==="precise"?r.value.findLast(v=>v.shapeHitbox(n)):r.value.findLast(v=>v.efficientHitbox({at:n,width:1,height:1})),f=r.value.findLast(v=>{var M;return(M=v.textHitbox)==null?void 0:M.call(v,n)}),p={at:n,radius:2,color:X+l.value};f?p.color=J+l.value:_&&(p.color=j+l.value);const y=P(o);I(p).draw(y)},c=async()=>{if(P(o).clearRect(0,0,o.width,o.height),i.value=0,!o||!d.value)return;const{width:_,height:f}=o.getBoundingClientRect();for(let p=0;p<f;p+=m.value)for(let y=0;y<_;y+=m.value)i.value%2e4===0&&await new Promise(v=>setTimeout(v,10)),x({x:y,y:p}),i.value++};L(d,c);const a=N(c,500);return L(m,a),L(t,a),L(r,a),setTimeout(w,500),{heatmapActive:d,heatmapOpacity:t,heatmapResolution:m,runHeatmap:c,runHeatmapDebounced:a,pointsSampled:i,toggleHeatmapMode:h,heatmapMode:s}},Z={key:1,class:"flex items-center gap-3 text-white h-6 mt-1 text-sm font-bold"},ee=W({__name:"Toolbar",props:{canvas:{},items:{},draw:{type:Function}},setup(R){const r=R,{items:d,canvas:m}=$(r),{heatmapActive:t,heatmapOpacity:i,heatmapResolution:l,toggleHeatmapMode:o,heatmapMode:w}=K(m,d),s=H(()=>t.value?"Hide Heatmap":"Show Heatmap"),h=H(()=>w.value==="efficient"?"Precise Heatmap":"Efficient Heatmap"),x=()=>{var c,a;(a=(c=d.value[2]).activateTextArea)==null||a.call(c,n=>{console.log("value",n)})};return(c,a)=>(k(),B(q,null,[g(A,{onClick:c.draw},{default:T(()=>a[3]||(a[3]=[b("Redraw")])),_:1},8,["onClick"]),g(A,{onClick:a[0]||(a[0]=n=>t.value=!u(t))},{default:T(()=>[b(S(s.value),1)]),_:1}),u(t)?(k(),F(A,{key:0,onClick:u(o)},{default:T(()=>[b(S(h.value),1)]),_:1},8,["onClick"])):O("",!0),g(A,{onClick:x},{default:T(()=>a[4]||(a[4]=[b(" Micro Control ")])),_:1}),u(t)?(k(),B("div",Z,[C("div",null,[C("p",null,"Opacity "+S(u(i)),1),g(V,{modelValue:u(i),"onUpdate:modelValue":a[1]||(a[1]=n=>U(i)?i.value=n:null),modelModifiers:{number:!0},min:"0",max:"100"},null,8,["modelValue"])]),C("div",null,[C("p",null,"Resolution "+S(u(l)),1),g(V,{modelValue:u(l),"onUpdate:modelValue":a[2]||(a[2]=n=>U(l)?l.value=n:null),modelModifiers:{number:!0},min:"1",max:"10"},null,8,["modelValue"])])])):O("",!0)],64))}}),te={class:"h-full w-full"},ae={class:"absolute m-3 flex gap-3 z-50"},ie=W({__name:"ShapePlayground",setup(R){const r=E(),d=D(),m=H(()=>d.value?e.GRAY_800:e.GRAY_200),t=E([]),i=H(()=>(d.value?e.GRAY_200:e.GRAY_700)+"15"),l=()=>{const s=P(r);s.clearRect(0,0,s.canvas.width,s.canvas.height);const{circle:h,uturn:x,cross:c,rect:a,square:n,triangle:_,scribble:f}=z;t.value.push(h({at:{x:200,y:200},radius:50,color:e.BLUE_500,stroke:{color:e.BLUE_700,width:10,dash:[10,5]},textArea:{text:{content:"dsadsadsadsadsadsadsa",color:e.WHITE,fontSize:10},color:e.TRANSPARENT}})),t.value.push(_({point1:{x:800,y:100},point2:{x:900,y:200},point3:{x:700,y:200},color:e.BLUE_500,textArea:{text:{content:"hihidsadsadsadsadsa",fontSize:20}}})),t.value.push(x({at:{x:600,y:100},downDistance:50,upDistance:50,lineWidth:10,color:e.BLUE_500,rotation:Math.PI*.2,spacing:20,textArea:{color:e.PURPLE_500,activeColor:e.PURPLE_600,text:{content:"5",color:e.WHITE,fontSize:20}}}));const p=z.line({start:{x:100,y:100},end:{x:600,y:900},color:e.GRAY_900,width:10,textArea:{color:e.PURPLE_500,activeColor:e.PURPLE_600,text:{content:"5",color:e.WHITE,fontSize:20}}});t.value.push(p),t.value.push(c({at:{x:500,y:300},color:e.SLATE_600,size:150,rotation:Math.PI/.6,borderRadius:10,lineWidth:80})),t.value.push(n({at:{x:600,y:400},size:120,rotation:Math.PI/.7,color:e.GREEN_600,borderRadius:25,stroke:{color:e.YELLOW_200,width:10,dash:[10,5]},textArea:{text:{content:"13",color:e.WHITE,fontSize:20},color:Q}})),t.value.push(f({type:"draw",brushWeight:10,points:[{x:534,y:612},{x:682,y:537},{x:799,y:654},{x:935,y:580},{x:620,y:695},{x:1110,y:612},{x:850,y:530},{x:715,y:598},{x:1200,y:700},{x:500,y:500}]})),t.value.forEach(y=>y.draw(s))};document.addEventListener("resize",l),document.addEventListener("keyup",s=>{s.code==="Space"&&l()}),setTimeout(l,100);const{width:o,height:w}=G();return(s,h)=>(k(),B("div",te,[C("div",ae,[g(ee,{canvas:r.value,items:t.value,draw:l},null,8,["canvas","items"])]),g(Y,{onCanvasRef:h[0]||(h[0]=x=>r.value=x),color:m.value,"pattern-color":i.value,"canvas-width":u(o),"canvas-height":u(w)},null,8,["color","pattern-color","canvas-width","canvas-height"])]))}});export{ie as default};
