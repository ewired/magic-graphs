import{g as m,ac as N,z as h,H as v,e as A,o as D,c as H,$ as S,v as x,X as b,a as B,t as w}from"./index-DYB8OflK.js";const C="element-highlight",U=1e3,$=1e3,R="tutorial",k=(o,a)=>{const t=m(-1),n=N(a),i=m(!1),r=m(!1);let u,d;const g=e=>{const{event:l,predicate:s}=typeof e.dismiss=="string"?{event:e.dismiss,predicate:()=>!0}:e.dismiss;if(l==="onInterval"){const f="interval"in e?e.interval:U;let E=0;const L=setInterval(()=>{s(++E)&&t.value++},f);return()=>clearInterval(L)}const c=(...f)=>{(s==null?void 0:s(...f))&&t.value++};return o.subscribe(l,c),()=>o.unsubscribe(l,c)},p=()=>{var l,s;const e=n.value[t.value];if(e){if((l=e.onInit)==null||l.call(e),(s=e.precondition)!=null&&s.call(e,o)){t.value++;return}e!=null&&e.highlightElement&&(u=z(e)),d=g(e.dismiss!=="onTimeout"?e:{hint:e.hint,dismiss:"onInterval",interval:e.after})}},T=(e,l)=>{var c;if(e<0)return t.value=0;if(e>n.value.length)return t.value=n.value.length;const s=n.value[l];(c=s==null?void 0:s.onDismiss)==null||c.call(s),d==null||d(),u==null||u(),p()};h(t,(e,l)=>{r.value||T(e,l)}),h(n,()=>T(t.value,t.value));const y=()=>{t.value=0,i.value=!0},I=()=>{t.value=n.value.length,i.value=!1};return{sequence:n,step:v(()=>t.value),setStep:e=>t.value=e,paused:r,nextStep:()=>t.value++,prevStep:()=>t.value--,stop:I,start:y,isActive:v(()=>i.value),hasBegun:v(()=>t.value>-1),isOver:v(()=>t.value>=n.value.length)}},z=o=>{const{highlightElement:a}=o;if(!a)return()=>{};const{id:t,className:n}={id:typeof a=="string"?a:a.id,className:typeof a=="string"||!(a!=null&&a.className)?C:a.className};if(!t)return()=>{};const i=document.getElementById(t);if(!i)throw new Error(`element with id ${t} not found`);return i.classList.add(n),()=>i.classList.remove(n)},F={class:"text-3xl font-bold"},_=300,q=A({__name:"TutorialHint",props:{tutorial:{}},setup(o){const a=m(0),t=v(()=>{var r;return((r=o.tutorial.sequence.value[o.tutorial.step.value])==null?void 0:r.hint)??""}),n=m("");let i;return h(t,()=>{a.value=0,clearTimeout(i),i=setTimeout(()=>{n.value=t.value,a.value=1},_+$)},{immediate:!0}),(r,u)=>(D(),H("div",{class:x(["transition-opacity",`duration-[${_}ms]`,"select-none","text-center"]),style:b({opacity:a.value})},[S(r.$slots,"default",{hint:n.value},()=>[B("h1",F,w(n.value),1)])],6))}});export{R as T,q as _,k as u};
