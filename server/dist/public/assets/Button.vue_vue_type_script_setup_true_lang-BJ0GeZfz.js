import{e as p,H as s,at as u,o as d,c as i,a0 as g,v as b,Y as m,a6 as y}from"./index-_A0fE95w.js";const x=p({__name:"Button",props:{color:{},textColor:{},disabled:{type:Boolean}},setup(a){const e=a,l=s(()=>{const t=[];if(e.color){t.push(`!bg-[${e.color}]`),t.push(`dark:!bg-[${e.color}]`);const r=y(e.color,30);t.push(`hover:!bg-[${r}]`),t.push(`dark:hover:!bg-[${r}]`)}return e.textColor&&(t.push(`!text-[${e.textColor}]`),t.push(`dark:!text-[${e.textColor}]`)),t}),{class:o}=u(),n=s(()=>o?typeof o!="string"?[]:o.split(" ").map(t=>"!"+t.trim()):[]),c=s(()=>["px-2","py-1","bg-gray-800","text-gray-200","dark:bg-gray-200","dark:text-gray-800","hover:bg-gray-700","dark:hover:bg-gray-300","rounded-md","cursor-pointer","font-bold","flex","items-center","justify-center",...n.value,...l.value]);return(t,r)=>(d(),i("button",{class:b(c.value),style:m({pointerEvents:e.disabled?"none":"auto",opacity:e.disabled?.5:1,cursor:e.disabled?"not-allowed":"pointer"})},[g(t.$slots,"default")],6))}});export{x as _};
