import{A as d,_ as $,o,c,$ as g,e as y,r as A,b as r,w as s,C as i,Q as L,L as v,F as C,f as h,z as a,a as b,d as B}from"./index-hXsufyT4.js";const T=[d.RED_600,d.BLUE_600,d.GREEN_600,d.YELLOW_600],x=[1,3,5,7],P={color:T[0],brushWeight:x[0],eraserBrushWeight:50},R={},S={class:"flex items-center gap-2 bg-gray-800 py-1 px-1 rounded-lg"};function w(n,e){return o(),c("div",S,[g(n.$slots,"default")])}const O=$(R,[["render",w]]),W=["disabled"],_=y({__name:"ToolbarButton",props:{active:{type:Boolean},disabled:{type:Boolean}},setup(n){return(e,f)=>{const u=A("v-icon");return o(),c("button",{disabled:e.disabled,class:i(["text-white","p-2","rounded-md",e.disabled?"text-opacity-50":"",e.disabled?"":"hover:bg-gray-900",e.disabled?"cursor-not-allowed":"cursor-pointer",e.active?"bg-gray-900":"bg-gray-800"])},[r(u,null,{default:s(()=>[g(e.$slots,"default")]),_:3})],10,W)}}}),D={},F={class:"w-[1px] h-6 bg-white bg-opacity-20 mx-1"};function G(n,e){return o(),c("div",F)}const k=$(D,[["render",G]]),U={};function V(n,e){return o(),c("div",{class:i("flex items-center relative "+n.$attrs.class)},[g(n.$slots,"default")],2)}const m=$(U,[["render",V]]),z={class:i(["rounded-full","p-[3px]"])},Q=y({__name:"AnnotationControls",props:{controls:{}},setup(n){const e=n,{selectedColor:f,selectedBrushWeight:u,erasing:p}=L(e.controls),{clear:E}=e.controls;return(H,l)=>(o(),v(O,null,{default:s(()=>[r(m,null,{default:s(()=>[(o(!0),c(C,null,h(a(T),t=>(o(),v(_,{onClick:N=>f.value=t,active:a(f)===t,key:t,color:t},{default:s(()=>[b("div",z,[b("div",{class:i(["w-6","h-6","rounded-full",`bg-[${t}]`])},null,2)])]),_:2},1032,["onClick","active","color"]))),128))]),_:1}),r(k),r(m,null,{default:s(()=>[(o(!0),c(C,null,h(a(x),t=>(o(),v(_,{onClick:N=>u.value=t,active:a(u)===t,key:t,color:a(d).TRANSPARENT},{default:s(()=>[b("div",{class:i(["bg-gray-400","rounded-md","w-[15px]",`h-[${t*2}px]`])},null,2)]),_:2},1032,["onClick","active","color"]))),128))]),_:1}),r(k),r(m,{class:"gap-1"},{default:s(()=>[r(_,{onClick:l[0]||(l[0]=t=>p.value=!a(p)),active:a(p)},{default:s(()=>l[1]||(l[1]=[B(" mdi-eraser ")])),_:1},8,["active"]),r(_,{onClick:a(E)},{default:s(()=>l[2]||(l[2]=[B("mdi-delete-outline")])),_:1},8,["onClick"])]),_:1})]),_:1}))}});export{P as A,m as T,Q as _,_ as a,k as b,O as c};
