import{e as p,z as o,af as u,o as d,c as g,$ as i,C as f,ag as m}from"./index-CHTm4t2_.js";const h=p({__name:"Button",props:{color:{},textColor:{}},setup(a){const r=a,n=o(()=>{const t=[];if(r.color){t.push(`bg-[${r.color}]`),t.push(`dark:bg-[${r.color}]`);const e=m(r.color,30);t.push(`hover:!bg-[${e}]`),t.push(`dark:hover:!bg-[${e}]`)}return r.textColor&&(t.push(`text-[${r.textColor}]`),t.push(`dark:text-[${r.textColor}]`)),t}),{class:s}=u(),l=o(()=>s?typeof s!="string"?[]:s.split(" ").map(t=>"!"+t.trim()):[]),c=o(()=>["px-2","py-1","bg-gray-800","text-gray-200","dark:bg-gray-200","dark:text-gray-800","hover:bg-gray-700","dark:hover:bg-gray-300","rounded-md","cursor-pointer","font-bold","flex","items-center","justify-center",...l.value,...n.value]);return(t,e)=>(d(),g("button",{class:f(c.value)},[i(t.$slots,"default")],2))}});export{h as _};
