import{_ as i}from"./Button.vue_vue_type_script_setup_true_lang-yMn4xwQ3.js";import{e as f,Q as m,o as e,c as r,b as c,w as n,a as l,M as o,N as d}from"./index-DByPgqtR.js";var x="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",C="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",w="M14,19H18V5H14M6,19H10V5H6V19Z",g="M8,5.14V19.14L19,12.14L8,5.14Z",k="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z";const B={class:"flex gap-[60px] fill-white dark:fill-black"},$=["viewBox"],b=["d"],y=["viewBox"],M=["d"],V=["viewBox"],S=["d"],Z=["viewBox"],H=["d"],t=24,E=f({__name:"SimulationPlaybackControls",props:{controls:{}},setup(_){const s=_,{isOver:h,paused:a}=m(s.controls),p=()=>{s.controls.prevStep(),a.value=!0},v=()=>{s.controls.nextStep(),a.value=!0},u=()=>{a.value=!a.value},L=()=>{s.controls.stop(),s.controls.start()};return(P,N)=>(e(),r("div",B,[c(i,{onClick:p,style:{"border-radius":"100px",transform:"scale(2)"}},{default:n(()=>[(e(),r("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`},[l("path",{d:o(x)},null,8,b)],8,$))]),_:1}),o(h)?(e(),d(i,{key:0,style:{"border-radius":"100px",transform:"scale(2)"},onClick:L},{default:n(()=>[(e(),r("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`},[l("path",{d:o(k)},null,8,M)],8,y))]),_:1})):(e(),d(i,{key:1,style:{"border-radius":"100px",transform:"scale(2)"},onClick:u},{default:n(()=>[(e(),r("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`},[l("path",{d:o(a)?o(g):o(w)},null,8,S)],8,V))]),_:1})),c(i,{style:{"border-radius":"100px",transform:"scale(2)"},onClick:v},{default:n(()=>[(e(),r("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`},[l("path",{d:o(C)},null,8,H)],8,Z))]),_:1})]))}});export{E as _};
