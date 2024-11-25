import{ai as nt,at as St,M as ce,a3 as le,A as Mt,au as ue,g as M,av as Et,z as I,aw as de,ax as he,H as W,ay as fe,ag as xe,ap as z,y as Ct,ae as we,e as ye,o as bt,c as Tt,U as ge,E as me,a as At,v as lt}from"./index-B3kCtg6Q.js";function xt(t){return de()?(he(t),!0):!1}function q(t){return typeof t=="function"?t():ce(t)}const ve=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const be=Object.prototype.toString,Te=t=>be.call(t)==="[object Object]",Lt=()=>{};function Ae(t,e){function n(...o){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,o),{fn:e,thisArg:this,args:o})).then(r).catch(s)})}return n}const Ht=t=>t();function pe(t=Ht){const e=M(!0);function n(){e.value=!1}function o(){e.value=!0}const r=(...s)=>{e.value&&t(...s)};return{isActive:Mt(e),pause:n,resume:o,eventFilter:r}}function Se(t){return Et()}function Me(...t){if(t.length!==1)return le(...t);const e=t[0];return typeof e=="function"?Mt(ue(()=>({get:e,set:Lt}))):M(e)}function Ee(t,e,n={}){const{eventFilter:o=Ht,...r}=n;return I(t,Ae(o,e),r)}function Ce(t,e,n={}){const{eventFilter:o,...r}=n,{eventFilter:s,pause:i,resume:a,isActive:u}=pe(o);return{stop:Ee(t,e,{...r,eventFilter:s}),pause:i,resume:a,isActive:u}}function ot(t,e=!0,n){Se()?nt(t,n):e?t():St(t)}const k=ve?window:void 0;function _(t){var e;const n=q(t);return(e=n==null?void 0:n.$el)!=null?e:n}function dt(...t){let e,n,o,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,o,r]=t,e=k):[e,n,o,r]=t,!e)return Lt;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],i=()=>{s.forEach(h=>h()),s.length=0},a=(h,l,c,x)=>(h.addEventListener(l,c,x),()=>h.removeEventListener(l,c,x)),u=I(()=>[_(e),q(r)],([h,l])=>{if(i(),!h)return;const c=Te(l)?{...l}:l;s.push(...n.flatMap(x=>o.map(f=>a(h,x,f,c))))},{immediate:!0,flush:"post"}),d=()=>{u(),i()};return xt(d),d}function Le(){const t=M(!1),e=Et();return e&&nt(()=>{t.value=!0},e),t}function Rt(t){const e=Le();return W(()=>(e.value,!!t()))}function Wt(t,e={}){const{window:n=k}=e,o=Rt(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const s=M(!1),i=d=>{s.value=d.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},u=fe(()=>{o.value&&(a(),r=n.matchMedia(q(t)),"addEventListener"in r?r.addEventListener("change",i):r.addListener(i),s.value=r.matches)});return xt(()=>{u(),a(),r=void 0}),s}const Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__",He=Re();function Re(){return Q in Z||(Z[Q]=Z[Q]||{}),Z[Q]}function It(t,e){return He[t]||e}function Ot(t){return Wt("(prefers-color-scheme: dark)",t)}function We(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Ie={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},pt="vueuse-storage";function Bt(t,e,n,o={}){var r;const{flush:s="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:u=!0,mergeDefaults:d=!1,shallow:h,window:l=k,eventFilter:c,onError:x=w=>{console.error(w)},initOnMounted:f}=o,y=(h?xe:M)(typeof e=="function"?e():e);if(!n)try{n=It("getDefaultStorage",()=>{var w;return(w=k)==null?void 0:w.localStorage})()}catch(w){x(w)}if(!n)return y;const T=q(e),H=We(T),p=(r=o.serializer)!=null?r:Ie[H],{pause:C,resume:b}=Ce(y,()=>E(y.value),{flush:s,deep:i,eventFilter:c});l&&a&&ot(()=>{n instanceof Storage?dt(l,"storage",R):dt(l,pt,m),f&&R()}),f||R();function A(w,g){if(l){const S={key:t,oldValue:w,newValue:g,storageArea:n};l.dispatchEvent(n instanceof Storage?new StorageEvent("storage",S):new CustomEvent(pt,{detail:S}))}}function E(w){try{const g=n.getItem(t);if(w==null)A(g,null),n.removeItem(t);else{const S=p.write(w);g!==S&&(n.setItem(t,S),A(g,S))}}catch(g){x(g)}}function O(w){const g=w?w.newValue:n.getItem(t);if(g==null)return u&&T!=null&&n.setItem(t,p.write(T)),T;if(!w&&d){const S=p.read(g);return typeof d=="function"?d(S,T):H==="object"&&!Array.isArray(S)?{...T,...S}:S}else return typeof g!="string"?g:p.read(g)}function R(w){if(!(w&&w.storageArea!==n)){if(w&&w.key==null){y.value=T;return}if(!(w&&w.key!==t)){C();try{(w==null?void 0:w.newValue)!==p.write(y.value)&&(y.value=O(w))}catch(g){x(g)}finally{w?St(b):b()}}}}function m(w){R(w.detail)}return y}const Oe="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Be(t={}){const{selector:e="html",attribute:n="class",initialValue:o="auto",window:r=k,storage:s,storageKey:i="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:u,emitAuto:d,disableTransition:h=!0}=t,l={auto:"",light:"light",dark:"dark",...t.modes||{}},c=Ot({window:r}),x=W(()=>c.value?"dark":"light"),f=u||(i==null?Me(o):Bt(i,o,s,{window:r,listenToStorageChanges:a})),y=W(()=>f.value==="auto"?x.value:f.value),T=It("updateHTMLAttrs",(b,A,E)=>{const O=typeof b=="string"?r==null?void 0:r.document.querySelector(b):_(b);if(!O)return;const R=new Set,m=new Set;let w=null;if(A==="class"){const S=E.split(/\s/g);Object.values(l).flatMap(F=>(F||"").split(/\s/g)).filter(Boolean).forEach(F=>{S.includes(F)?R.add(F):m.add(F)})}else w={key:A,value:E};if(R.size===0&&m.size===0&&w===null)return;let g;h&&(g=r.document.createElement("style"),g.appendChild(document.createTextNode(Oe)),r.document.head.appendChild(g));for(const S of R)O.classList.add(S);for(const S of m)O.classList.remove(S);w&&O.setAttribute(w.key,w.value),h&&(r.getComputedStyle(g).opacity,document.head.removeChild(g))});function H(b){var A;T(e,n,(A=l[b])!=null?A:b)}function p(b){t.onChanged?t.onChanged(b,H):H(b)}I(y,p,{flush:"post",immediate:!0}),ot(()=>p(y.value));const C=W({get(){return d?f.value:y.value},set(b){f.value=b}});try{return Object.assign(C,{store:f,system:x,state:y})}catch{return C}}function Vn(t={}){const{valueDark:e="dark",valueLight:n="",window:o=k}=t,r=Be({...t,onChanged:(a,u)=>{var d;t.onChanged?(d=t.onChanged)==null||d.call(t,a==="dark",u,a):u(a)},modes:{dark:e,light:n}}),s=W(()=>r.system?r.system.value:Ot({window:o}).value?"dark":"light");return W({get(){return r.value==="dark"},set(a){const u=a?"dark":"light";s.value===u?r.value="auto":r.value=u}})}function ke(t,e,n={}){const{window:o=k,...r}=n;let s;const i=Rt(()=>o&&"ResizeObserver"in o),a=()=>{s&&(s.disconnect(),s=void 0)},u=W(()=>{const l=q(t);return Array.isArray(l)?l.map(c=>_(c)):[_(l)]}),d=I(u,l=>{if(a(),i.value&&o){s=new ResizeObserver(e);for(const c of l)c&&s.observe(c,r)}},{immediate:!0,flush:"post"}),h=()=>{a(),d()};return xt(h),{isSupported:i,stop:h}}function De(t,e={width:0,height:0},n={}){const{window:o=k,box:r="content-box"}=n,s=W(()=>{var l,c;return(c=(l=_(t))==null?void 0:l.namespaceURI)==null?void 0:c.includes("svg")}),i=M(e.width),a=M(e.height),{stop:u}=ke(t,([l])=>{const c=r==="border-box"?l.borderBoxSize:r==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(o&&s.value){const x=_(t);if(x){const f=x.getBoundingClientRect();i.value=f.width,a.value=f.height}}else if(c){const x=Array.isArray(c)?c:[c];i.value=x.reduce((f,{inlineSize:y})=>f+y,0),a.value=x.reduce((f,{blockSize:y})=>f+y,0)}else i.value=l.contentRect.width,a.value=l.contentRect.height},n);ot(()=>{const l=_(t);l&&(i.value="offsetWidth"in l?l.offsetWidth:e.width,a.value="offsetHeight"in l?l.offsetHeight:e.height)});const d=I(()=>_(t),l=>{i.value=l?e.width:0,a.value=l?e.height:0});function h(){u(),d()}return{width:i,height:a,stop:h}}function Jn(t,e,n={}){const{window:o=k}=n;return Bt(t,e,o==null?void 0:o.localStorage,n)}function Gn(t={}){const{window:e=k,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:s=!0,type:i="inner"}=t,a=M(n),u=M(o),d=()=>{e&&(i==="outer"?(a.value=e.outerWidth,u.value=e.outerHeight):s?(a.value=e.innerWidth,u.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,u.value=e.document.documentElement.clientHeight))};if(d(),ot(d),dt("resize",d,{passive:!0}),r){const h=Wt("(orientation: portrait)");I(h,()=>d())}return{width:a,height:u}}const tt=t=>e=>{const{start:n,end:o,width:r,color:s}={...U,...t};e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(o.x,o.y),e.lineWidth=r,e.strokeStyle=s,e.stroke(),e.closePath()},et=t=>e=>{const{at:n,width:o,height:r,color:s,borderRadius:i,rotation:a,stroke:u}={...wt,...t};e.save();const d=n.x+o/2,h=n.y+r/2;if(e.translate(d,h),e.rotate(a),i===0)e.beginPath(),e.rect(-o/2,-r/2,o,r),e.fillStyle=s,e.fill();else{const l=Math.min(i,o/2,r/2);e.beginPath(),e.moveTo(-o/2+l,-r/2),e.lineTo(o/2-l,-r/2),e.arcTo(o/2,-r/2,o/2,-r/2+l,l),e.lineTo(o/2,r/2-l),e.arcTo(o/2,r/2,o/2-l,r/2,l),e.lineTo(-o/2+l,r/2),e.arcTo(-o/2,r/2,-o/2,r/2-l,l),e.lineTo(-o/2,-r/2+l),e.arcTo(-o/2,-r/2,-o/2+l,-r/2,l),e.closePath(),e.fillStyle=s,e.fill()}if(u){const{color:l,width:c,dash:x}=u;e.strokeStyle=l,e.lineWidth=c,e.setLineDash(x||[]),e.stroke(),e.setLineDash([])}e.restore()},Pe={color:"white",activeColor:"white"},X={fontSize:12,fontWeight:"normal",color:"black"},kt={color:"black",width:0},D=t=>({width:Math.max(t.text.fontSize*.6*t.text.content.length,t.text.fontSize*2),height:t.text.fontSize*2}),Y=t=>{const{at:e,color:n}=t,{width:o,height:r}=D(t),s=zt({at:e,width:o,height:r,color:n});return i=>s.drawShape(i)},N=t=>e=>{const{at:n}=t,{content:o,fontSize:r,fontWeight:s,color:i}=t.text;e.font=`${s} ${r}px Arial`,e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";const a=r>=50?.3:.1,{width:u}=D({...t,at:n});e.fillText(o,n.x+u/2,n.y+r+r**a)},v=(t,e)=>{const n={...Pe,...t},o={...X,...n.text},{width:r}=D({...n,at:e});return{...n,text:o,at:{x:e.x-r/2+o.fontSize,y:e.y}}},rt=t=>{const{at:e,width:n,height:o,textArea:r}={...wt,...t};if(!r)throw new Error("no text area provided");const{text:s}=r,{fontSize:i}={...X,...s},a=e.x+n/2,u=e.y+o/2;return{x:a-i,y:u-i}},ze=t=>{if(!t.textArea)return;const e=rt(t),n=v(t.textArea,e),{width:o,height:r}=D(n),s=L({at:n.at,width:o,height:r});return i=>s(i)},Dt=t=>{if(!t.textArea)return;const e=rt(t),n=v(t.textArea,e),o=Y(n);return r=>o(r)},Pt=t=>{if(!t.textArea)return;const e=rt(t),n=v(t.textArea,e),o=N(n);return r=>o(r)},_e=t=>{const e=Dt(t),n=Pt(t);if(!(!e||!n))return o=>{e(o),n(o)}},j=(t,e)=>{const{at:n,text:o,activeColor:r}=t,{x:s,y:i}=n,{color:a,content:u,fontSize:d,fontWeight:h}=o,l=d*2,c=document.createElement("textarea");c.style.position="absolute",c.style.left=`${s}px`,c.style.top=`${i}px`,c.style.width=`${l}px`,c.style.height=`${l}px`,c.style.zIndex="1000",c.style.resize="none",c.style.overflow="hidden",c.style.border="none",c.style.padding="0",c.style.paddingTop="4px",c.style.margin="0",c.style.fontSize=`${d}px`,c.style.color=a,c.style.backgroundColor=r,c.style.fontFamily="Arial",c.style.textAlign="center",c.style.fontWeight=h,c.style.outline="none",c.style.whiteSpace="nowrap",c.value=u;const x=()=>{c.onblur=null,e(c.value),c.remove()};c.onblur=x,c.onkeydown=y=>{y.key==="Enter"&&x()};const f=document.getElementById("responsive-canvas-container");if(!f)throw new Error("responsive canvas container not found");f.appendChild(c),setTimeout(()=>{c.focus(),c.setSelectionRange(0,c.value.length)},10)},wt={color:"black",borderRadius:0,rotation:0},zt=t=>{if(t.borderRadius&&t.borderRadius<0)throw new Error("borderRadius must be positive");const e=et(t),n=L(t),o=ze(t),r=P(t),s=c=>(o==null?void 0:o(c))||n(c),i=yt(t),a=_e(t),u=Dt(t),d=Pt(t),h=c=>{e(c),a==null||a(c)},l=c=>{if(!t.textArea)return;const x=rt(t),f=v(t.textArea,x);j(f,c)};return{id:z(),name:"rect",draw:h,drawShape:e,drawTextArea:a,drawTextAreaMatte:u,drawText:d,hitbox:s,shapeHitbox:n,textHitbox:o,efficientHitbox:r,getBoundingBox:i,activateTextArea:l}},G=t=>e=>{const n=e.x-t.at.x,o=e.y-t.at.y,r={...kt,...t.stroke},s=t.radius+r.width/2;return n**2+o**2<=s**2},_t=t=>()=>{const{at:e,radius:n}=t,{width:o}={...kt,...t.stroke};return{topLeft:{x:e.x-(n+o/2),y:e.y-(n+o/2)},bottomRight:{x:e.x+(n+o/2),y:e.y+(n+o/2)}}},Fe=t=>{const{topLeft:e,bottomRight:n}=_t(t)(),o=P({at:{x:e.x,y:e.y},width:n.x-e.x,height:n.y-e.y});return r=>o(r)},B=(t,e,n)=>{const o=Math.cos(n),r=Math.sin(n),s=t.x-e.x,i=t.y-e.y;return{x:e.x+(s*o-i*r),y:e.y+(s*r+i*o)}},ht=(t,e)=>{const{x:n,y:o}=t,{x:r,y:s}=e;return Math.atan2(s-o,r-n)},qn=(t,e)=>{if(e.length===0)return 0;const[n]=e;if(e.length===1)return ht(t,n)+Math.PI;const o=e.map(i=>ht(t,i)).sort((i,a)=>i-a);let r=0,s=0;for(let i=0;i<o.length;i++){const a=(i+1)%o.length,u=(o[a]-o[i]+2*Math.PI)%(2*Math.PI);u>r&&(r=u,s=i)}return(o[s]+r/2)%(2*Math.PI)},L=t=>e=>{const{at:n,width:o,height:r,borderRadius:s,rotation:i,stroke:a}={...wt,...t},u=n.x+o/2,d=n.y+r/2,h=(a==null?void 0:a.width)||0,l=B(e,{x:u,y:d},-i),{x:c,y:x}={x:u-o/2,y:d-r/2};if(s===0)return l.x>=c-h/2&&l.x<=c+o+h/2&&l.y>=x-h/2&&l.y<=x+r+h/2;const f=Math.min(s,o/2,r/2),y=L({...t,at:{x:c+f,y:x},width:o-2*f,borderRadius:0,rotation:0,stroke:a}),T=L({...t,at:{x:c,y:x+f},height:r-2*f,borderRadius:0,rotation:0,stroke:a});if(y(l)||T(l))return!0;const H=G({at:{x:c+f,y:x+f},radius:f,stroke:a}),p=G({at:{x:c+o-f,y:x+f},radius:f,stroke:a}),C=G({at:{x:c+f,y:x+r-f},radius:f,stroke:a}),b=G({at:{x:c+o-f,y:x+r-f},radius:f,stroke:a});return H(l)||p(l)||C(l)||b(l)},yt=t=>()=>{const{at:e,width:n,height:o}=t,r=Math.min(e.x,e.x+n),s=Math.max(e.x,e.x+n),i=Math.min(e.y,e.y+o),a=Math.max(e.y,e.y+o);return{topLeft:{x:r,y:i},bottomRight:{x:s,y:a}}},P=t=>e=>{const{at:n,width:o,height:r}=e,{topLeft:s,bottomRight:i}=yt(t)(),a=Math.min(n.x,n.x+o),u=Math.max(n.x,n.x+o),d=Math.min(n.y,n.y+r),h=Math.max(n.y,n.y+r);return!(i.x<=a||u<=s.x||i.y<=d||h<=s.y)},$=t=>e=>{const{start:n,end:o,width:r}={...U,...t},{x:s,y:i}=n,{x:a,y:u}=o,{x:d,y:h}=e,l=(a-s)**2+(u-i)**2;if(l===0)return(d-s)**2+(h-i)**2<=(r/2)**2;const c=((d-s)*(a-s)+(h-i)*(u-i))/l,x=Math.max(0,Math.min(1,c)),f=s+x*(a-s),y=i+x*(u-i);return(d-f)**2+(h-y)**2<=(r/2)**2},Ft=t=>()=>{const{start:e,end:n,width:o}={...U,...t},r=Math.min(e.x,n.x)-o/2,s=Math.min(e.y,n.y)-o/2,i=Math.max(e.x,n.x)+o/2,a=Math.max(e.y,n.y)+o/2;return{topLeft:{x:r,y:s},bottomRight:{x:i,y:a}}},Xt=t=>{const{start:e,end:n,width:o}={...U,...t},r=Math.hypot(n.x-e.x,n.y-e.y),s=Math.atan2(n.y-e.y,n.x-e.x),i=Math.abs(Math.cos(s))+Math.abs(Math.sin(s)),a=Math.min(50,r*i),u=Math.ceil(r/a),d=(n.x-e.x)/r,h=(n.y-e.y)/r,l=Math.min(e.x,n.x)-o/2,c=Math.min(e.y,n.y)-o/2,x=Math.abs(n.x-e.x)+o,f=Math.abs(n.y-e.y)+o,y=P({at:{x:l,y:c},width:x,height:f});return T=>y(T)?Array.from({length:u},(p,C)=>{const b=e.x+d*a*C,A=e.y+h*a*C,E=b+d*a,O=A+h*a,R=Math.min(b,E)-o/2,m=Math.min(A,O)-o/2,w=Math.abs(E-b)+o,g=Math.abs(O-A)+o;return P({at:{x:R,y:m},width:w,height:g})}).some(p=>p(T)):!1},K=t=>{const{textOffsetFromCenter:e,start:n,end:o,textArea:r}={...U,...t};if(!r)throw new Error("no text area provided");const{text:s}=r,{fontSize:i}={...X,...s},a=ht(n,o),u=e*Math.cos(a),d=e*Math.sin(a),h=(n.x+o.x)/2+u,l=(n.y+o.y)/2+d;return{x:h-i,y:l-i}},Xe=t=>{if(!t.textArea)return;const e=K(t),n=v(t.textArea,e),{width:o,height:r}=D(n),s=L({at:n.at,width:o,height:r});return i=>s(i)},Yt=t=>{if(!t.textArea)return;const e=K(t),n=v(t.textArea,e),o=Y(n);return r=>o(r)},Nt=t=>{if(!t.textArea)return;const e=K(t),n=v(t.textArea,e),o=N(n);return r=>o(r)},Ye=t=>{const e=Yt(t),n=Nt(t);if(!(!e||!n))return o=>{e(o),n(o)}},U={width:10,textOffsetFromCenter:0,color:"black"},Ne=t=>{if(t.width&&t.width<0)throw new Error("lineWidth must be positive");const e=tt(t),n=$(t),o=Xe(t),r=Xt(t),s=c=>(o==null?void 0:o(c))||n(c),i=Ft(t),a=Ye(t),u=Yt(t),d=Nt(t),h=c=>{e(c),a==null||a(c)},l=c=>{if(!t.textArea)return;const x=K(t),f=v(t.textArea,x);j(f,c)};return{id:z(),name:"line",draw:h,drawShape:e,drawTextArea:a,drawTextAreaMatte:u,drawText:d,hitbox:s,shapeHitbox:n,textHitbox:o,efficientHitbox:r,getBoundingBox:i,activateTextArea:l}},gt=t=>{const{point1:e,point2:n,point3:o,textArea:r}={...Vt,...t};if(!r)throw new Error("no text area provided");const{text:s}=r,{fontSize:i}={...X,...s},a=(e.x+n.x+o.x)/3,u=(e.y+n.y+o.y)/3;return{x:a-i,y:u-i}},Ue=t=>{if(!t.textArea)return;const e=gt(t),n=v(t.textArea,e),{width:o,height:r}=D(n),s=L({at:n.at,width:o,height:r});return i=>s(i)},Ut=t=>{if(!t.textArea)return;const e=gt(t),n=v(t.textArea,e),o=Y(n);return r=>o(r)},$t=t=>{if(!t.textArea)return;const e=gt(t),n=v(t.textArea,e),o=N(n);return r=>o(r)},$e=t=>{const e=Ut(t),n=$t(t);if(!(!e||!n))return o=>{e(o),n(o)}},je=t=>e=>{const{point1:n,point2:o,point3:r,stroke:s}=t;if(s){const c={start:n,end:o,width:s.width},x={start:o,end:r,width:s.width},f={start:r,end:n,width:s.width};return $(c)(e)||$(x)(e)||$(f)(e)}const{x:i,y:a}=e,u=.5*(-o.y*r.x+n.y*(-o.x+r.x)+n.x*(o.y-r.y)+o.x*r.y),d=1/(2*u)*(n.y*r.x-n.x*r.y+(r.y-n.y)*i+(n.x-r.x)*a),h=1/(2*u)*(n.x*o.y-n.y*o.x+(n.y-o.y)*i+(o.x-n.x)*a);return d>0&&h>0&&1-d-h>0},jt=t=>()=>{const{point1:e,point2:n,point3:o}=t,r=Math.min(e.x,n.x,o.x),s=Math.min(e.y,n.y,o.y),i=Math.max(e.x,n.x,o.x),a=Math.max(e.y,n.y,o.y);return{topLeft:{x:r,y:s},bottomRight:{x:i,y:a}}},Ve=t=>{const{topLeft:e,bottomRight:n}=jt(t)(),o=P({at:e,width:n.x-e.x,height:n.y-e.y});return r=>o(r)},Vt={color:"black"},Je=t=>{const e=mt(t),n=je(t),o=Ue(t),r=Ve(t),s=l=>n(l),i=jt(t),a=$e(t),u=Ut(t),d=$t(t),h=l=>{e(l),a==null||a(l)};return{id:z(),name:"triangle",draw:h,drawShape:e,drawTextArea:a,drawTextAreaMatte:u,drawText:d,hitbox:s,shapeHitbox:n,textHitbox:o,efficientHitbox:r,getBoundingBox:i}},mt=t=>e=>{const{point1:n,point2:o,point3:r,color:s,stroke:i}={...Vt,...t};e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(o.x,o.y),e.lineTo(r.x,r.y),e.fillStyle=s,e.fill(),e.closePath(),i&&(e.lineWidth=i.width,e.strokeStyle=i.color,i.dash?e.setLineDash(i.dash):e.setLineDash([]),e.stroke(),e.setLineDash([]))},Ge=t=>{const{start:e,end:n,width:o,color:r}={...qt,...t},s=Math.atan2(n.y-e.y,n.x-e.x),i=o*2.5,a={x:n.x-i*Math.cos(s),y:n.y-i*Math.sin(s)},u=i/1.75,d=n,h={x:a.x+u*Math.cos(s+Math.PI/2),y:a.y+u*Math.sin(s+Math.PI/2)},l={x:a.x-u*Math.cos(s+Math.PI/2),y:a.y-u*Math.sin(s+Math.PI/2)},c={start:e,end:{x:a.x+Math.cos(s),y:a.y+Math.sin(s)},width:o,color:r},x=tt(c),f=mt({point1:d,point2:h,point3:l,color:r});return y=>{x(y),f(y)}},qe=t=>{const e=$(t);return n=>e(n)},Ke=t=>Ft(t),Ze=t=>{const e=Xt(t);return n=>e(n)},st=t=>{const{textOffsetFromCenter:e,start:n,end:o,textArea:r,width:s,color:i}={...qt,...t};if(!r)throw new Error("no text area provided");const a=Math.atan2(o.y-n.y,o.x-n.x),u=s*2.5,d={x:o.x-u*Math.cos(a),y:o.y-u*Math.sin(a)};return K({start:n,end:d,width:s,color:i,textOffsetFromCenter:e,textArea:r})},Qe=t=>{if(!t.textArea)return;const e=st(t),n=v(t.textArea,e),{width:o,height:r}=D(n),s=L({at:n.at,width:o,height:r});return i=>s(i)},Jt=t=>{if(!t.textArea)return;const e=st(t),n=v(t.textArea,e),o=Y(n);return r=>o(r)},Gt=t=>{if(!t.textArea)return;const e=st(t),n=v(t.textArea,e),o=N(n);return r=>o(r)},tn=t=>{const e=Jt(t),n=Gt(t);if(!(!e||!n))return o=>{e(o),n(o)}},qt=U,en=t=>{if(t.width&&t.width<0)throw new Error("width must be positive");const e=Ge(t),n=qe(t),o=Qe(t),r=Ze(t),s=c=>(o==null?void 0:o(c))||n(c),i=Ke(t),a=tn(t),u=Jt(t),d=Gt(t),h=c=>{e(c),a==null||a(c)},l=c=>{if(!t.textArea)return;const x=st(t),f=v(t.textArea,x);j(f,c)};return{id:z(),name:"arrow",draw:h,drawShape:e,drawTextArea:a,drawTextAreaMatte:u,drawText:d,hitbox:s,shapeHitbox:n,textHitbox:o,efficientHitbox:r,getBoundingBox:i,activateTextArea:l}},nn=t=>e=>{const{at:n,radius:o,color:r,stroke:s}={...Qt,...t};if(e.beginPath(),e.arc(n.x,n.y,o,0,2*Math.PI),e.fillStyle=r,e.fill(),s){const{color:i,width:a,dash:u}=s;e.strokeStyle=i,e.lineWidth=a,e.setLineDash(u||[]),e.stroke(),e.setLineDash([])}e.closePath()},at=t=>{const{at:e,textArea:n}={...Qt,...t};if(!n)throw new Error("no text area provided");const{text:o}=n,{fontSize:r}={...X,...o};return{x:e.x-r,y:e.y-r}},on=t=>{if(!t.textArea)return;const e=at(t),n=v(t.textArea,e),{width:o,height:r}=D(n),s=L({at:n.at,width:o,height:r});return i=>s(i)},Kt=t=>{if(!t.textArea)return;const e=at(t),n=v(t.textArea,e),o=Y(n);return r=>o(r)},Zt=t=>{if(!t.textArea)return;const e=at(t),n=v(t.textArea,e),o=N(n);return r=>o(r)},rn=t=>{const e=Kt(t),n=Zt(t);if(!(!e||!n))return o=>{e(o),n(o)}},Qt={color:"black"},sn=t=>{if(t.radius<0)throw new Error("radius must be positive");const e=nn(t),n=G(t),o=on(t),r=Fe(t),s=c=>(o==null?void 0:o(c))||n(c),i=_t(t),a=rn(t),u=Kt(t),d=Zt(t),h=c=>{e(c),a==null||a(c)},l=c=>{if(!t.textArea)return;const x=at(t),f=v(t.textArea,x);j(f,c)};return{id:z(),name:"circle",draw:h,drawShape:e,drawTextArea:a,drawTextAreaMatte:u,drawText:d,hitbox:s,shapeHitbox:n,textHitbox:o,efficientHitbox:r,getBoundingBox:i,activateTextArea:l}},an=t=>{const e=et({width:t.size,height:t.size,...t});return n=>e(n)},it=t=>{const{at:e,size:n,textArea:o}=t;if(!o)throw new Error("no text area provided");const{text:r}=o,{fontSize:s}={...X,...r},i=e.x+n/2,a=e.y+n/2;return{x:i-s,y:a-s}},cn=t=>{if(!t.textArea)return;const e=it(t),n=v(t.textArea,e),{width:o,height:r}=D(n),s=L({at:n.at,width:o,height:r});return i=>s(i)},te=t=>{if(!t.textArea)return;const e=it(t),n=v(t.textArea,e),o=Y(n);return r=>o(r)},ee=t=>{if(!t.textArea)return;const e=it(t),n=v(t.textArea,e),o=N(n);return r=>o(r)},ln=t=>{const e=te(t),n=ee(t);if(!(!e||!n))return o=>{e(o),n(o)}},un=t=>{const e=L({at:t.at,width:t.size,height:t.size,borderRadius:t.borderRadius,rotation:t.rotation,stroke:t.stroke});return n=>e(n)},dn=t=>yt({at:t.at,width:t.size,height:t.size}),hn=t=>{const e=P({at:t.at,width:t.size,height:t.size});return n=>e(n)},fn=t=>{const e=an(t),n=un(t),o=cn(t),r=hn(t),s=c=>(o==null?void 0:o(c))||n(c),i=dn(t),a=ln(t),u=te(t),d=ee(t),h=c=>{e(c),a==null||a(c)},l=c=>{if(!t.textArea)return;const x=it(t),f=v(t.textArea,x);j(f,c)};return{id:z(),name:"square",draw:h,drawShape:e,drawTextArea:a,drawTextAreaMatte:u,drawText:d,hitbox:s,shapeHitbox:n,textHitbox:o,efficientHitbox:r,getBoundingBox:i,activateTextArea:l}},xn=t=>{const{spacing:e,at:n,upDistance:o,downDistance:r,rotation:s,lineWidth:i,color:a}={...se,...t},u=i*1.4,d=u,h=B({x:n.x,y:n.y-e},n,s),l=B({x:n.x+o,y:n.y-e},n,s),c=B({x:n.x+o,y:n.y+e},n,s),x=B({x:n.x+o-r+u,y:n.y+e},n,s),f=B({x:n.x+o,y:n.y},n,s),y={x:x.x+d*Math.cos(s),y:x.y+d*Math.sin(s)},T=B({x:n.x+o-r,y:n.y+e},n,s),H={x:y.x+d*Math.cos(s+Math.PI/2),y:y.y+d*Math.sin(s+Math.PI/2)},p={x:y.x-d*Math.cos(s+Math.PI/2),y:y.y-d*Math.sin(s+Math.PI/2)},C=mt({point1:T,point2:H,point3:p,color:a}),b=tt({start:h,end:l,width:i,color:a}),A=tt({start:c,end:x,width:i,color:a});return E=>{b(E),C(E),A(E),E.beginPath(),E.arc(f.x,f.y,e,Math.PI/2+s+.05,-Math.PI/2+s-.05,!0),E.strokeStyle=a,E.stroke(),E.closePath()}},wn=t=>{const{spacing:e,at:n,upDistance:o,lineWidth:r,rotation:s}=t,i=B({x:n.x+o,y:n.y},n,s),a=$({start:n,end:i,width:2*e+r});return u=>a(u)},ne=t=>()=>{const{spacing:e,at:n,upDistance:o,rotation:r,lineWidth:s}=t,i=B({x:n.x+o,y:n.y},n,r),a=Math.min(n.x,i.x)-s/2-e,u=Math.min(n.y,i.y)-s/2-e,d=Math.max(n.x,i.x)+s/2+e,h=Math.max(n.y,i.y)+s/2+e;return{topLeft:{x:a,y:u},bottomRight:{x:d,y:h}}},yn=t=>{const{topLeft:e,bottomRight:n}=ne(t)(),o=n.x-e.x,r=n.y-e.y,s=P({at:{x:e.x,y:e.y},width:o,height:r});return i=>s(i)},ct=t=>{const{at:e,upDistance:n,rotation:o,textArea:r,spacing:s}={...se,...t};if(!r)throw new Error("no text area provided");const{text:i}=r,{fontSize:a}={...X,...i},u=B({x:e.x+n+s,y:e.y},e,o);return{x:u.x-a+Math.cos(o)*15,y:u.y-a+Math.sin(o)*15}},gn=t=>{if(!t.textArea)return;const e=ct(t),n=v(t.textArea,e),{width:o,height:r}=D(n),s=L({at:n.at,width:o,height:r});return i=>s(i)},oe=t=>{if(!t.textArea)return;const e=ct(t),n=v(t.textArea,e),o=Y(n);return r=>o(r)},re=t=>{if(!t.textArea)return;const e=ct(t),n=v(t.textArea,e),o=N(n);return r=>o(r)},mn=t=>{const e=oe(t),n=re(t);if(!(!e||!n))return o=>{e(o),n(o)}},se={color:"black"},vn=t=>{if(t.downDistance<0)throw new Error("downDistance must be positive");if(t.upDistance<0)throw new Error("upDistance must be positive");const e=xn(t),n=wn(t),o=gn(t),r=yn(t),s=c=>(o==null?void 0:o(c))||n(c),i=ne(t),a=mn(t),u=oe(t),d=re(t),h=c=>{e(c),a==null||a(c)},l=c=>{if(!t.textArea)return;const x=ct(t),f=v(t.textArea,x);j(f,c)};return{id:z(),name:"uturn",draw:h,drawShape:e,drawTextArea:a,drawTextAreaMatte:u,drawText:d,hitbox:s,shapeHitbox:n,textHitbox:o,efficientHitbox:r,getBoundingBox:i,activateTextArea:l}},bn=t=>{const{at:e,size:n,rotation:o,lineWidth:r,borderRadius:s}={...ae,...t},i=r/2,a=L({at:{x:e.x-n/2,y:e.y-i},width:n,height:r,rotation:o,borderRadius:s}),u=L({at:{x:e.x-i,y:e.y-n/2},width:r,height:n,rotation:o,borderRadius:s});return d=>a(d)||u(d)},Tn=t=>()=>{const{at:e,size:n}=t;return{topLeft:{x:e.x-n/2,y:e.y-n/2},bottomRight:{x:e.x+n/2,y:e.y+n/2}}},An=t=>{const{at:e,size:n}=t,o=P({at:{x:e.x-n/2,y:e.y-n/2},width:n,height:n});return r=>o(r)},pn=t=>{const{at:e,size:n,rotation:o,color:r,lineWidth:s,borderRadius:i}={...ae,...t},a=s/2;return u=>{et({at:{x:e.x-a,y:e.y-n/2},width:s,height:n,color:r,borderRadius:i,rotation:o})(u),et({at:{x:e.x-n/2,y:e.y-a},width:n,height:s,color:r,borderRadius:i,rotation:o})(u)}},ae={rotation:0,color:"black",lineWidth:U.width,borderRadius:0},Sn=t=>{if(t.lineWidth&&t.lineWidth<0)throw new Error("lineWidth must be positive");const e=pn(t),n=bn(t),o=An(t),r=a=>n(a),s=Tn(t),i=a=>{e(a)};return{id:z(),name:"cross",draw:i,drawShape:e,shapeHitbox:n,hitbox:r,efficientHitbox:o,getBoundingBox:s}},Mn=t=>e=>{const{type:n,color:o,brushWeight:r,points:s}={...Ln,...t};n==="draw"?(()=>{e.strokeStyle=o,e.lineCap="round",e.lineJoin="round",e.lineWidth=r,e.beginPath();const[u,...d]=s;e.moveTo(u.x,u.y),d.forEach(({x:h,y:l})=>e.lineTo(h,l)),e.stroke()})():(()=>{e.globalCompositeOperation="destination-out",e.lineWidth=ut;for(let u=0;u<s.length-1;u++){const d=s[u],h=s[u+1],l=Math.pow(h.x-d.x,2)+Math.pow(h.y-d.y,2),c=Math.sqrt(l),x=Math.ceil(c/ut);for(let f=0;f<=x;f++){const y=d.x+f/x*(h.x-d.x),T=d.y+f/x*(h.y-d.y);e.beginPath(),e.arc(y,T,ut,0,Math.PI*2),e.fill()}}e.globalCompositeOperation="source-over"})(),e.lineCap="butt",e.lineJoin="miter"},En=t=>e=>{if(t.type==="erase")return!1;const{topLeft:n,bottomRight:o}=vt(t)(),r=o.x-n.x,s=o.y-n.y;return L({at:{x:n.x,y:n.y},width:r,height:s})(e)},vt=t=>()=>{const{points:e}=t;let n=e[0].x,o=e[0].y,r=e[0].x,s=e[0].y;for(const i of e)i.x<n&&(n=i.x),i.y<o&&(o=i.y),i.x>r&&(r=i.x),i.y>s&&(s=i.y);return{topLeft:{x:n,y:o},bottomRight:{x:r,y:s}}},Cn=t=>{if(t.type==="erase")return i=>!1;const{topLeft:e,bottomRight:n}=vt(t)(),o=n.x-e.x,r=n.y-e.y,s=P({at:{x:e.x,y:e.y},width:o,height:r});return i=>s(i)},Ln={color:"red",brushWeight:3},ut=50,Hn=t=>{if(t.points.length<1)throw new Error("not enough points to draw scribble");if(t.brushWeight&&t.brushWeight<1)throw new Error('brushWeight must be at least "1"');const e=En(t),n=Cn(t),o=a=>e(a),r=vt(t),s=Mn(t),i=a=>{s(a)};return{id:z(),name:"scribble",drawShape:s,draw:i,hitbox:o,shapeHitbox:e,efficientHitbox:n,getBoundingBox:r}},Rn=Ne,Wn=en,In=sn,On=zt,Bn=fn,kn=Je,Dn=vn,ie=Sn,Pn=Hn,Kn={arrow:Wn,circle:In,line:Rn,rect:On,square:Bn,triangle:kn,uturn:Dn,cross:ie,scribble:Pn},ft=t=>{if(!t)throw new Error("canvas not found");const e="value"in t?t.value:t;if(!e)throw new Error("canvas not found");const n=e.getContext("2d");if(!n)throw new Error("2d context not found");return n},Zn=(t,e)=>{const o=e.getTransform().inverse(),{offsetX:r,offsetY:s}=t;return{x:o.a*r+o.c*s+o.e,y:o.b*r+o.d*s+o.f}},zn=({canvasWidth:t,canvasHeight:e,getParentEl:n})=>{const o=M({x:0,y:0}),r=M({x:0,y:0}),s=a=>{o.value={x:a.clientX,y:a.clientY},i()},i=async()=>{const a=await n(),{x:u,y:d}=o.value,{scrollLeft:h,scrollTop:l}=a;r.value.x=h+u,r.value.y=l+d};return nt(async()=>{const a=await n();a.addEventListener("mousemove",s),a.addEventListener("scroll",i)}),Ct(async()=>{const a=await n();a.removeEventListener("mousemove",s),a.removeEventListener("scroll",i)}),{canvasCoords:r,humanCoords:W(()=>({x:r.value.x-t.value/2,y:(r.value.y-e.value/2)*-1}))}},_n=(t,e)=>{let n;return()=>{clearTimeout(n),n=setTimeout(t,e)}},Fn=()=>{const{class:t}=we();return W(()=>{if(!t)return[];if(typeof t!="string")throw new Error("class attribute must be a string");return t.split(" ").map(e=>"!"+e.trim())})},Xn=.5,Yn=5;function Nn(t){const e=M(1),n=M({x:0,y:0}),o=s=>{if(!s.ctrlKey)return;s.preventDefault();const i=t.value;if(!i)return;const a=i.getBoundingClientRect(),u=s.clientX-a.left,d=s.clientY-a.top,h=s.deltaY<0?1.03:.97,l=Math.min(Yn,Math.max(Xn,e.value*h));n.value.x=u-(u-n.value.x)*(l/e.value),n.value.y=d-(d-n.value.y)*(l/e.value),e.value=l,r()},r=()=>{const s=ft(t);s.resetTransform(),s.translate(n.value.x,n.value.y),s.scale(e.value,e.value)};return nt(()=>{const s=t.value;if(!s)throw new Error("Canvas ref is not defined");s.addEventListener("wheel",o,{passive:!1})}),Ct(()=>{const s=t.value;s&&s.removeEventListener("wheel",o)}),{scale:e,origin:n}}const Un=["width","height"],$n=["width","height"],Qn=ye({__name:"ResponsiveCanvas",props:{color:{},patternColor:{},canvasWidth:{},canvasHeight:{}},emits:["canvasRef","widthChange","heightChange"],setup(t,{emit:e}){const n=M(0),o=M(0),r=M(!0),s=M(),i=M(),a=t,u=W(()=>(a==null?void 0:a.canvasWidth)??5e3),d=W(()=>(a==null?void 0:a.canvasHeight)??3e3),h=e,l=["w-full","h-full","relative","overflow-auto"],c=Fn(),x=W(()=>[...l,...c.value]),f=m=>{s.value=m,h("canvasRef",m)},y=M(),{height:T,width:H}=De(y),p=()=>{n.value=u.value,o.value=d.value},C=async()=>y.value??new Promise(m=>{const w=setInterval(()=>{y.value&&(clearInterval(w),m(y.value))},100)}),b=async()=>new Promise(m=>{const w=setInterval(()=>{i.value&&(m(ft(i.value)),clearInterval(w))},100)}),A=async()=>{const m=await b();m.clearRect(0,0,n.value,o.value);const w=75,g=(V,J)=>{ie({at:{x:V,y:J},size:2,color:a.patternColor}).draw(m)},S=n.value,F=o.value;for(let V=w/2;V<S;V+=w)for(let J=w/2;J<F;J+=w)g(V,J)},E=_n(A,250);(async()=>{A();const m=await C(),w=o.value/2-m.clientHeight/2;m.scrollTop=w;const g=n.value/2-m.clientWidth/2;m.scrollLeft=g,r.value=!1})(),I(T,()=>{p(),A(),h("widthChange",n.value)}),I(H,()=>{p(),A(),h("heightChange",o.value)}),I([u,d],()=>{p(),A(),h("widthChange",n.value),h("heightChange",o.value)}),I(()=>a.patternColor,A),zn({canvasWidth:n,canvasHeight:o,getParentEl:C});const R=Nn(s);return I(R.scale,()=>{const{scale:m,origin:w}=R,g=ft(i.value);g.clearRect(0,0,n.value,o.value),g.resetTransform(),g.translate(w.value.x,w.value.y),g.scale(m.value,m.value),E()}),(m,w)=>(bt(),Tt("div",{ref_key:"parentEl",ref:y,class:lt(x.value),id:"responsive-canvas-container"},[r.value?(bt(),Tt("div",{key:0,style:ge({backgroundColor:m.color}),class:"absolute top-0 left-0 w-full h-full"},null,4)):me("",!0),At("canvas",{ref:f,width:n.value,height:o.value,class:lt([`w-[${n.value}px]`,`h-[${o.value}px]`]),id:"responsive-canvas"},null,10,Un),At("canvas",{ref_key:"bgCanvas",ref:i,width:n.value,height:o.value,class:lt([`bg-[${m.color}]`,`w-[${n.value}px]`,`h-[${o.value}px]`,"absolute","top-0","-z-10","pointer-events-none"])},null,10,$n)],2))}});export{Qn as _,Vn as a,Gn as b,In as c,_n as d,Bn as e,qn as f,ft as g,Dn as h,Wn as i,Zn as j,Rn as l,On as r,Kn as s,Jn as u};
