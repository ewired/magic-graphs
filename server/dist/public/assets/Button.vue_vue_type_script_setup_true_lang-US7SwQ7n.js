import{e as p,H as s,ai as u,o as d,c as i,X as g,v as b,U as m,aj as y}from"./index-BaTtJ-hS.js";const x=p({__name:"Button",props:{color:{},textColor:{},disabled:{type:Boolean}},setup(a){const t=a,l=s(()=>{const e=[];if(t.color){e.push(`!bg-[${t.color}]`),e.push(`dark:!bg-[${t.color}]`);const r=y(t.color,30);e.push(`hover:!bg-[${r}]`),e.push(`dark:hover:!bg-[${r}]`)}return t.textColor&&(e.push(`!text-[${t.textColor}]`),e.push(`dark:!text-[${t.textColor}]`)),e}),{class:o}=u(),n=s(()=>o?typeof o!="string"?[]:o.split(" ").map(e=>"!"+e.trim()):[]),c=s(()=>["px-2","py-1","bg-gray-800","text-gray-200","dark:bg-gray-200","dark:text-gray-800","hover:bg-gray-700","dark:hover:bg-gray-300","rounded-md","cursor-pointer","font-bold","flex","items-center","justify-center",...n.value,...l.value]);return(e,r)=>(d(),i("button",{class:b(c.value),style:m({pointerEvents:t.disabled?"none":"auto",opacity:t.disabled?.5:1,cursor:t.disabled?"not-allowed":"pointer"})},[g(e.$slots,"default")],6))}});export{x as _};
