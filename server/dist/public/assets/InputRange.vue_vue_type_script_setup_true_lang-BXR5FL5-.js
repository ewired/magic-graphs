import{d as l,n as u,o as s,c as n,I as d,p as c,q as p,y as m,z as i,A as g}from"./index-BogfO7iv.js";const _=l({__name:"Button",props:{color:{},textColor:{}},setup(t){const o=t,r=u(()=>{const e={};return o.color&&(e.backgroundColor=o.color),o.textColor&&(e.color=o.textColor),e});return(e,a)=>(s(),n("button",{class:c(["px-2","py-1","bg-gray-800","text-gray-200","dark:bg-gray-200","dark:text-gray-800","hover:bg-gray-700","dark:hover:bg-gray-300","rounded-md","cursor-pointer","font-bold"]),style:p(r.value)},[d(e.$slots,"default")],4))}}),f=l({__name:"InputRange",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(t){const o=m(t,"modelValue");return(r,e)=>i((s(),n("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),type:"range"},null,512)),[[g,o.value,void 0,{number:!0}]])}});export{_,f as a};
