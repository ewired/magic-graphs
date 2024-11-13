import{j as p,k as R,c as i}from"./ResponsiveCanvas.vue_vue_type_script_setup_true_lang-DIsRyuzw.js";import{d,E as A,G as k,K as I,o as t,c as m,s as n,u as y,f as T,e as s,D as v,w as f,B as C,F as D,C as b}from"./index-C6A5_RZq.js";import{_ as g}from"./Button.vue_vue_type_script_setup_true_lang-CzT9gPLP.js";const V=d({__name:"InputText",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(u){const a=A(u,"modelValue");return(e,l)=>k((t(),m("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>a.value=o),type:"text",class:"p-1 border border-gray-300 rounded-md"},null,512)),[[I,a.value]])}}),E=["value"],c="#000000",M=d({__name:"InputColor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(u){const a=A(u,"modelValue"),e=n({get:()=>a.value,set:r=>a.value=r}),l=n(()=>{if(e.value){if(p(e.value))return e.value.slice(7)}else return"";return""}),o=n(()=>{if(e.value){if(p(e.value))return e.value.slice(0,7);if(R(e.value))return e.value}else return c;return c}),h=r=>{r.target instanceof HTMLInputElement&&(console.log("e.target.value",r.target.value,"colorAlpha.value",l.value),e.value=r.target.value+l.value)};return(r,N)=>(t(),m("input",{onInput:h,value:o.value,type:"color",class:y("p-1 w-10 h-full rounded-md appearance-none")},null,40,E))}}),w=d({__name:"CollabControls",props:{graph:{}},setup(u){const a=T("graph-playground");return(e,l)=>(t(),m(D,null,[s(V,{modelValue:e.graph.meAsACollaborator.value.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.graph.meAsACollaborator.value.name=o),disabled:e.graph.inCollaborativeRoom.value,placeholder:"Your Name"},null,8,["modelValue","disabled"]),s(M,{modelValue:e.graph.meAsACollaborator.value.color,"onUpdate:modelValue":l[1]||(l[1]=o=>e.graph.meAsACollaborator.value.color=o),disabled:e.graph.inCollaborativeRoom.value},null,8,["modelValue","disabled"]),s(V,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=o=>a.value=o),disabled:e.graph.inCollaborativeRoom.value,placeholder:"Collaborative Room ID"},null,8,["modelValue","disabled"]),e.graph.inCollaborativeRoom.value?(t(),v(g,{key:1,onClick:l[4]||(l[4]=o=>e.graph.leaveCollaborativeRoom()),color:C(i).RED_500,textColor:C(i).WHITE},{default:f(()=>l[6]||(l[6]=[b(" Leave Room ")])),_:1},8,["color","textColor"])):(t(),v(g,{key:0,onClick:l[3]||(l[3]=o=>e.graph.joinCollaborativeRoom(a.value))},{default:f(()=>l[5]||(l[5]=[b(" Join Room ")])),_:1}))],64))}});export{M as _,V as a,w as b};
