import{e as d,M as A,N as R,U as I,o as t,c as m,y as n,C as k,ad as p,ae as y,g as M,b as s,L as i,w as v,d as C,z as b,F as N,A as g}from"./index-Bnp4Kkft.js";import{_ as f}from"./Button.vue_vue_type_script_setup_true_lang-C5-mvDcp.js";const V=d({__name:"InputText",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(u){const a=A(u,"modelValue");return(e,l)=>R((t(),m("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>a.value=o),type:"text",class:"p-1 border border-gray-300 rounded-md"},null,512)),[[I,a.value]])}}),T=["value"],c="#000000",U=d({__name:"InputColor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(u){const a=A(u,"modelValue"),e=n({get:()=>a.value,set:r=>a.value=r}),l=n(()=>{if(e.value){if(p(e.value))return e.value.slice(7)}else return"";return""}),o=n(()=>{if(e.value){if(p(e.value))return e.value.slice(0,7);if(y(e.value))return e.value}else return c;return c}),h=r=>{r.target instanceof HTMLInputElement&&(console.log("e.target.value",r.target.value,"colorAlpha.value",l.value),e.value=r.target.value+l.value)};return(r,_)=>(t(),m("input",{onInput:h,value:o.value,type:"color",class:k("p-1 w-10 h-full rounded-md appearance-none")},null,40,T))}}),D=d({__name:"CollabControls",props:{graph:{}},setup(u){const a=M("graph-playground");return(e,l)=>(t(),m(N,null,[s(V,{modelValue:e.graph.meAsACollaborator.value.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.graph.meAsACollaborator.value.name=o),disabled:e.graph.inCollaborativeRoom.value,placeholder:"Your Name"},null,8,["modelValue","disabled"]),s(U,{modelValue:e.graph.meAsACollaborator.value.color,"onUpdate:modelValue":l[1]||(l[1]=o=>e.graph.meAsACollaborator.value.color=o),disabled:e.graph.inCollaborativeRoom.value},null,8,["modelValue","disabled"]),s(V,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=o=>a.value=o),disabled:e.graph.inCollaborativeRoom.value,placeholder:"Collaborative Room ID"},null,8,["modelValue","disabled"]),e.graph.inCollaborativeRoom.value?(t(),i(f,{key:1,onClick:l[4]||(l[4]=o=>e.graph.leaveCollaborativeRoom()),color:b(g).RED_500,textColor:b(g).WHITE},{default:v(()=>l[6]||(l[6]=[C(" Leave Room ")])),_:1},8,["color","textColor"])):(t(),i(f,{key:0,onClick:l[3]||(l[3]=o=>e.graph.joinCollaborativeRoom(a.value))},{default:v(()=>l[5]||(l[5]=[C(" Join Room ")])),_:1}))],64))}});export{U as _,V as a,D as b};
