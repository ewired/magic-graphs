import{bh as p,bi as y,bj as z,bk as M,bl as X,bm as N,bn as _,bo as Wt,a7 as B,bp as q,bq as tt,br as It,bs as S,bt as Pt,bu as Rt,bv as Ot,H as F,g as H,al as lt,y as ht,O as K,d as kt,bw as Dt,z as k,bx as zt,c as rt,X as st,E as Xt,a as it,K as V,o as ct}from"./index-D9-peFBB.js";const $=t=>n=>{const{start:e,end:o,width:r,color:a}={...W,...t};r!==0&&(n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(o.x,o.y),n.lineWidth=r,n.strokeStyle=a,n.stroke(),n.closePath())},I=t=>n=>{const{start:e,end:o,width:r}={...W,...t},{x:a,y:s}=e,{x:i,y:c}=o,{x:l,y:x}=n,d=(i-a)**2+(c-s)**2;if(d===0)return(l-a)**2+(x-s)**2<=(r/2)**2;const h=((l-a)*(i-a)+(x-s)*(c-s))/d,f=Math.max(0,Math.min(1,h)),w=a+f*(i-a),u=s+f*(c-s);return(l-w)**2+(x-u)**2<=(r/2)**2},xt=t=>()=>{const{start:n,end:e,width:o}={...W,...t},r=Math.min(n.x,e.x)-o/2,a=Math.min(n.y,e.y)-o/2,s=Math.max(n.x,e.x)+o/2,i=Math.max(n.y,e.y)+o/2;return{topLeft:{x:r,y:a},bottomRight:{x:s,y:i}}},et=t=>{const{start:n,end:e,width:o}={...W,...t},r=Math.hypot(e.x-n.x,e.y-n.y),a=Math.atan2(e.y-n.y,e.x-n.x),s=Math.abs(Math.cos(a))+Math.abs(Math.sin(a)),i=Math.min(50,r*s),c=Math.ceil(r/i),l=(e.x-n.x)/r,x=(e.y-n.y)/r,d=Math.min(n.x,e.x)-o/2,h=Math.min(n.y,e.y)-o/2,f=Math.abs(e.x-n.x)+o,w=Math.abs(e.y-n.y)+o,u=p({at:{x:d,y:h},width:f,height:w});return A=>u(A)?Array.from({length:c},(E,L)=>{const C=n.x+l*i*L,v=n.y+x*i*L,m=C+l*i,J=v+x*i,U=Math.min(C,m)-o/2,g=Math.min(v,J)-o/2,b=Math.abs(m-C)+o,T=Math.abs(J-v)+o;return p({at:{x:U,y:g},width:b,height:T})}).some(E=>E(A)):!1},Y=t=>{const{textOffsetFromCenter:n,start:e,end:o,textArea:r}={...W,...t};if(!r)throw new Error("no text area provided");const{text:a}=r,{fontSize:s}={...N,...a},i=Wt(e,o),c=n*Math.cos(i),l=n*Math.sin(i),x=(e.x+o.x)/2+c,d=(e.y+o.y)/2+l;return{x:x-s,y:d-s}},_t=t=>{if(!t.textArea)return;const n=Y(t),e=y(t.textArea,n),{width:o,height:r}=z(e),a=M({at:e.at,width:o,height:r});return s=>a(s)},dt=t=>{if(!t.textArea)return;const n=Y(t),e=y(t.textArea,n),o=X(e);return r=>o(r)},ut=t=>{if(!t.textArea)return;const n=Y(t),e=y(t.textArea,n),o=_(e);return r=>o(r)},Yt=t=>{const n=dt(t),e=ut(t);if(!(!n||!e))return o=>{n(o),e(o)}},W={width:10,textOffsetFromCenter:0,color:"black"},Ut=t=>{if(t.width&&t.width<0)throw new Error("lineWidth must be positive");const n=$(t),e=I(t),o=_t(t),r=et(t),a=h=>(o==null?void 0:o(h))||e(h),s=xt(t),i=Yt(t),c=dt(t),l=ut(t),x=h=>{n(h),i==null||i(h)},d=(h,f)=>{if(!t.textArea)return;const w=Y(t),u=y(t.textArea,w);q(h,u,f)};return{id:t.id??B(),name:"line",draw:x,drawShape:n,drawTextArea:i,drawTextAreaMatte:c,drawText:l,hitbox:a,shapeHitbox:e,textHitbox:o,efficientHitbox:r,getBoundingBox:s,activateTextArea:d}},nt=t=>{const{point1:n,point2:e,point3:o,textArea:r}={...yt,...t};if(!r)throw new Error("no text area provided");const{text:a}=r,{fontSize:s}={...N,...a},i=(n.x+e.x+o.x)/3,c=(n.y+e.y+o.y)/3;return{x:i-s,y:c-s}},Ft=t=>{if(!t.textArea)return;const n=nt(t),e=y(t.textArea,n),{width:o,height:r}=z(e),a=M({at:e.at,width:o,height:r});return s=>a(s)},ft=t=>{if(!t.textArea)return;const n=nt(t),e=y(t.textArea,n),o=X(e);return r=>o(r)},wt=t=>{if(!t.textArea)return;const n=nt(t),e=y(t.textArea,n),o=_(e);return r=>o(r)},$t=t=>{const n=ft(t),e=wt(t);if(!(!n||!e))return o=>{n(o),e(o)}},Nt=t=>n=>{const{point1:e,point2:o,point3:r,stroke:a}=t;if(a){const h={start:e,end:o,width:a.width},f={start:o,end:r,width:a.width},w={start:r,end:e,width:a.width};return I(h)(n)||I(f)(n)||I(w)(n)}const{x:s,y:i}=n,c=.5*(-o.y*r.x+e.y*(-o.x+r.x)+e.x*(o.y-r.y)+o.x*r.y),l=1/(2*c)*(e.y*r.x-e.x*r.y+(r.y-e.y)*s+(e.x-r.x)*i),x=1/(2*c)*(e.x*o.y-e.y*o.x+(e.y-o.y)*s+(o.x-e.x)*i);return l>0&&x>0&&1-l-x>0},gt=t=>()=>{const{point1:n,point2:e,point3:o}=t,r=Math.min(n.x,e.x,o.x),a=Math.min(n.y,e.y,o.y),s=Math.max(n.x,e.x,o.x),i=Math.max(n.y,e.y,o.y);return{topLeft:{x:r,y:a},bottomRight:{x:s,y:i}}},qt=t=>{const{topLeft:n,bottomRight:e}=gt(t)(),o=p({at:n,width:e.x-n.x,height:e.y-n.y});return r=>o(r)},yt={color:"black"},Zt=t=>{const n=ot(t),e=Nt(t),o=Ft(t),r=qt(t),a=d=>e(d),s=gt(t),i=$t(t),c=ft(t),l=wt(t),x=d=>{n(d),i==null||i(d)};return{id:t.id??B(),name:"triangle",draw:x,drawShape:n,drawTextArea:i,drawTextAreaMatte:c,drawText:l,hitbox:a,shapeHitbox:e,textHitbox:o,efficientHitbox:r,getBoundingBox:s}},ot=t=>n=>{const{point1:e,point2:o,point3:r,color:a,stroke:s}={...yt,...t};n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(o.x,o.y),n.lineTo(r.x,r.y),n.fillStyle=a,n.fill(),n.closePath(),s&&(n.lineWidth=s.width,n.strokeStyle=s.color,s.dash?n.setLineDash(s.dash):n.setLineDash([]),n.stroke(),n.setLineDash([]))},jt=t=>{const{start:n,end:e,width:o,color:r}={...vt,...t},a=Math.atan2(e.y-n.y,e.x-n.x),s=o*2.5,i=s/1.75,c={x:e.x-s*Math.cos(a),y:e.y-s*Math.sin(a)},l=e,x={x:c.x+i*Math.cos(a+Math.PI/2),y:c.y+i*Math.sin(a+Math.PI/2)},d={x:c.x-i*Math.cos(a+Math.PI/2),y:c.y-i*Math.sin(a+Math.PI/2)},h={start:n,end:{x:c.x+Math.cos(a),y:c.y+Math.sin(a)},width:o,color:r},f=$(h),w=ot({point1:l,point2:x,point3:d,color:r});return u=>{f(u),w(u)}},Gt=t=>{const n=I(t);return e=>n(e)},Jt=t=>xt(t),Kt=t=>{const n=et(t);return e=>n(e)},Z=t=>{const{textOffsetFromCenter:n,start:e,end:o,textArea:r,width:a,color:s}={...vt,...t};if(!r)throw new Error("no text area provided");const i=Math.atan2(o.y-e.y,o.x-e.x),c=a*2.5,x=((e.x-o.x)**2+(e.y-o.y)**2)**.5<c?c:0,d={x:o.x-c*Math.cos(i),y:o.y-c*Math.sin(i)},h={start:e,end:d,width:a,color:s,textOffsetFromCenter:n-x,textArea:r};return Y(h)},Vt=t=>{if(!t.textArea)return;const n=Z(t),e=y(t.textArea,n),{width:o,height:r}=z(e),a=M({at:e.at,width:o,height:r});return s=>a(s)},bt=t=>{if(!t.textArea)return;const n=Z(t),e=y(t.textArea,n),o=X(e);return r=>o(r)},mt=t=>{if(!t.textArea)return;const n=Z(t),e=y(t.textArea,n),o=_(e);return r=>o(r)},Qt=t=>{const n=bt(t),e=mt(t);if(!(!n||!e))return o=>{n(o),e(o)}},vt=W,te=t=>{if(t.width&&t.width<0)throw new Error("width must be positive");const n=jt(t),e=Gt(t),o=Vt(t),r=Kt(t),a=h=>(o==null?void 0:o(h))||e(h),s=Jt(t),i=Qt(t),c=bt(t),l=mt(t),x=h=>{n(h),i==null||i(h)},d=(h,f)=>{if(!t.textArea)return;const w=Z(t),u=y(t.textArea,w);q(h,u,f)};return{id:t.id??B(),name:"arrow",draw:x,drawShape:n,drawTextArea:i,drawTextAreaMatte:c,drawText:l,hitbox:a,shapeHitbox:e,textHitbox:o,efficientHitbox:r,getBoundingBox:s,activateTextArea:d}},ee=t=>{const n=tt({width:t.size,height:t.size,...t});return e=>n(e)},j=t=>{const{at:n,size:e,textArea:o}=t;if(!o)throw new Error("no text area provided");const{text:r}=o,{fontSize:a}={...N,...r},s=n.x+e/2,i=n.y+e/2;return{x:s-a,y:i-a}},ne=t=>{if(!t.textArea)return;const n=j(t),e=y(t.textArea,n),{width:o,height:r}=z(e),a=M({at:e.at,width:o,height:r});return s=>a(s)},Tt=t=>{if(!t.textArea)return;const n=j(t),e=y(t.textArea,n),o=X(e);return r=>o(r)},At=t=>{if(!t.textArea)return;const n=j(t),e=y(t.textArea,n),o=_(e);return r=>o(r)},oe=t=>{const n=Tt(t),e=At(t);if(!(!n||!e))return o=>{n(o),e(o)}},ae=t=>{const n=M({at:t.at,width:t.size,height:t.size,borderRadius:t.borderRadius,rotation:t.rotation,stroke:t.stroke});return e=>n(e)},re=t=>It({at:t.at,width:t.size,height:t.size}),se=t=>{const n=p({at:t.at,width:t.size,height:t.size});return e=>n(e)},ie=t=>{const n=ee(t),e=ae(t),o=ne(t),r=se(t),a=h=>(o==null?void 0:o(h))||e(h),s=re(t),i=oe(t),c=Tt(t),l=At(t),x=h=>{n(h),i==null||i(h)},d=(h,f)=>{if(!t.textArea)return;const w=j(t),u=y(t.textArea,w);q(h,u,f)};return{id:t.id??B(),name:"square",draw:x,drawShape:n,drawTextArea:i,drawTextAreaMatte:c,drawText:l,hitbox:a,shapeHitbox:e,textHitbox:o,efficientHitbox:r,getBoundingBox:s,activateTextArea:d}},ce=t=>{const{spacing:n,at:e,upDistance:o,downDistance:r,rotation:a,lineWidth:s,color:i}={...St,...t},c=s*2.5,l=c/1.75,x=S({x:e.x,y:e.y-n},e,a),d=S({x:e.x+o,y:e.y-n},e,a),h=S({x:e.x+o,y:e.y+n},e,a),f=S({x:e.x+o-r+c,y:e.y+n},e,a),w=S({x:e.x+o,y:e.y},e,a),u=f,A={x:u.x-c*Math.cos(a),y:u.y-c*Math.sin(a)},P={x:u.x-l*Math.cos(a+Math.PI/2+.01),y:u.y-l*Math.sin(a+Math.PI/2+.01)},E={x:u.x+l*Math.cos(a+Math.PI/2-.01),y:u.y+l*Math.sin(a+Math.PI/2-.01)},L=ot({point1:A,point2:P,point3:E,color:i}),C=$({start:x,end:d,width:s,color:i}),v=$({start:h,end:f,width:s,color:i});return m=>{C(m),L(m),v(m),m.beginPath(),m.arc(w.x,w.y,n,Math.PI/2+a+.01,-Math.PI/2+a-.01,!0),m.strokeStyle=i,m.stroke(),m.closePath()}},le=t=>{const{spacing:n,at:e,upDistance:o,lineWidth:r,rotation:a}=t,s=S({x:e.x+o,y:e.y},e,a),i=I({start:e,end:s,width:2*n+r});return c=>i(c)},Mt=t=>()=>{const{spacing:n,at:e,upDistance:o,rotation:r,lineWidth:a}=t,s=S({x:e.x+o,y:e.y},e,r),i=Math.min(e.x,s.x)-a/2-n,c=Math.min(e.y,s.y)-a/2-n,l=Math.max(e.x,s.x)+a/2+n,x=Math.max(e.y,s.y)+a/2+n;return{topLeft:{x:i,y:c},bottomRight:{x:l,y:x}}},he=t=>{const{topLeft:n,bottomRight:e}=Mt(t)(),o=e.x-n.x,r=e.y-n.y,a=p({at:{x:n.x,y:n.y},width:o,height:r});return s=>a(s)},G=t=>{const{at:n,upDistance:e,rotation:o,textArea:r,spacing:a,lineWidth:s}={...St,...t};if(!r)throw new Error("no text area provided");const{text:i}=r,{fontSize:c}={...N,...i},l=S({x:n.x+e+a+s/2,y:n.y},n,o);return{x:l.x-c+Math.cos(o)*15,y:l.y-c+Math.sin(o)*15}},xe=t=>{if(!t.textArea)return;const n=G(t),e=y(t.textArea,n),{width:o,height:r}=z(e),a=M({at:e.at,width:o,height:r});return s=>a(s)},Et=t=>{if(!t.textArea)return;const n=G(t),e=y(t.textArea,n),o=X(e);return r=>o(r)},Ht=t=>{if(!t.textArea)return;const n=G(t),e=y(t.textArea,n),o=_(e);return r=>o(r)},de=t=>{const n=Et(t),e=Ht(t);if(!(!n||!e))return o=>{n(o),e(o)}},St={color:"black"},ue=t=>{if(t.downDistance<0)throw new Error("downDistance must be positive");if(t.upDistance<0)throw new Error("upDistance must be positive");const n=ce(t),e=le(t),o=xe(t),r=he(t),a=h=>(o==null?void 0:o(h))||e(h),s=Mt(t),i=de(t),c=Et(t),l=Ht(t),x=h=>{n(h),i==null||i(h)},d=(h,f)=>{if(!t.textArea)return;const w=G(t),u=y(t.textArea,w);q(h,u,f)};return{id:t.id??B(),name:"uturn",draw:x,drawShape:n,drawTextArea:i,drawTextAreaMatte:c,drawText:l,hitbox:a,shapeHitbox:e,textHitbox:o,efficientHitbox:r,getBoundingBox:s,activateTextArea:d}},fe=t=>{const{at:n,size:e,rotation:o,lineWidth:r,borderRadius:a}={...Lt,...t},s=r/2,i=M({at:{x:n.x-e/2,y:n.y-s},width:e,height:r,rotation:o,borderRadius:a}),c=M({at:{x:n.x-s,y:n.y-e/2},width:r,height:e,rotation:o,borderRadius:a});return l=>i(l)||c(l)},we=t=>()=>{const{at:n,size:e}=t;return{topLeft:{x:n.x-e/2,y:n.y-e/2},bottomRight:{x:n.x+e/2,y:n.y+e/2}}},ge=t=>{const{at:n,size:e}=t,o=p({at:{x:n.x-e/2,y:n.y-e/2},width:e,height:e});return r=>o(r)},ye=t=>{const{at:n,size:e,rotation:o,color:r,lineWidth:a,borderRadius:s}={...Lt,...t},i=a/2;return c=>{tt({at:{x:n.x-i,y:n.y-e/2},width:a,height:e,color:r,borderRadius:s,rotation:o})(c),tt({at:{x:n.x-e/2,y:n.y-i},width:e,height:a,color:r,borderRadius:s,rotation:o})(c)}},Lt={rotation:0,color:"black",lineWidth:W.width,borderRadius:0},be=t=>{if(t.lineWidth&&t.lineWidth<0)throw new Error("lineWidth must be positive");const n=ye(t),e=fe(t),o=ge(t),r=i=>e(i),a=we(t),s=i=>{n(i)};return{id:t.id??B(),name:"cross",draw:s,drawShape:n,shapeHitbox:e,hitbox:r,efficientHitbox:o,getBoundingBox:a}},me=t=>n=>{const{type:e,color:o,brushWeight:r,points:a}={...Ae,...t};e==="draw"?(()=>{n.strokeStyle=o,n.lineCap="round",n.lineJoin="round",n.lineWidth=r,n.beginPath();const[c,...l]=a;n.moveTo(c.x,c.y),l.forEach(({x,y:d})=>n.lineTo(x,d)),n.stroke()})():(()=>{n.globalCompositeOperation="destination-out",n.lineWidth=Q;for(let c=0;c<a.length-1;c++){const l=a[c],x=a[c+1],d=Math.pow(x.x-l.x,2)+Math.pow(x.y-l.y,2),h=Math.sqrt(d),f=Math.ceil(h/Q);for(let w=0;w<=f;w++){const u=l.x+w/f*(x.x-l.x),A=l.y+w/f*(x.y-l.y);n.beginPath(),n.arc(u,A,Q,0,Math.PI*2),n.fill()}}n.globalCompositeOperation="source-over"})(),n.lineCap="butt",n.lineJoin="miter"},ve=t=>n=>{const{type:e,points:o}=t;if(e==="erase")return!1;const{topLeft:r,bottomRight:a}=at(t)(),s=a.x-r.x,i=a.y-r.y;if(!M({at:{x:r.x,y:r.y},width:Math.max(s,10),height:Math.max(i,10)})(n))return!1;for(let l=0;l<o.length-1;l++){const x={start:o[l],end:o[l+1]};if(et(x)({at:n,width:1,height:1}))return!0}return!1},at=t=>()=>{const{points:n}=t;let e=n[0].x,o=n[0].y,r=n[0].x,a=n[0].y;for(const s of n)s.x<e&&(e=s.x),s.y<o&&(o=s.y),s.x>r&&(r=s.x),s.y>a&&(a=s.y);return{topLeft:{x:e,y:o},bottomRight:{x:r,y:a}}},Te=t=>{if(t.type==="erase")return s=>!1;const{topLeft:n,bottomRight:e}=at(t)(),o=e.x-n.x,r=e.y-n.y,a=p({at:{x:n.x,y:n.y},width:Math.max(o,10),height:Math.max(r,10)});return s=>a(s)},Ae={color:"red",brushWeight:3},Q=50,Me=t=>{if(t.points.length<1)throw new Error("not enough points to draw scribble");if(t.brushWeight&&t.brushWeight<1)throw new Error('brushWeight must be at least "1"');const n=ve(t),e=Te(t),o=i=>n(i),r=at(t),a=me(t),s=i=>{a(i)};return{id:t.id??B(),name:"scribble",drawShape:a,draw:s,hitbox:o,shapeHitbox:n,efficientHitbox:e,getBoundingBox:r}},Ee=Ut,He=te,Se=Pt,Le=Rt,Ce=ie,pe=Zt,Be=ue,Ct=be,We=Me,Ye={arrow:He,circle:Se,line:Ee,rect:Le,square:Ce,triangle:pe,uturn:Be,cross:Ct,scribble:We},D=t=>{if(!t)throw new Error("canvas not found");const n="value"in t?t.value:t;if(!n)throw new Error("canvas not found");const e=n.getContext("2d");if(!e)throw new Error("2d context not found");return e},Ie=()=>{const{class:t}=Ot();return F(()=>{if(!t)return[];if(typeof t!="string")throw new Error("class attribute must be a string");return t.split(" ")})},Pe=(t,n)=>{let e;return()=>{clearTimeout(e),e=setTimeout(t,n)}},Re=.5,Oe=5;function ke(t){const n=H(1),e=H({x:0,y:0}),o=a=>{if(!a.ctrlKey)return;a.preventDefault();const s=t.value;if(!s)return;const i=s.getBoundingClientRect(),c=a.clientX-i.left,l=a.clientY-i.top,x=a.deltaY<0?1.03:.97,d=Math.min(Oe,Math.max(Re,n.value*x));e.value.x=c-(c-e.value.x)*(d/n.value),e.value.y=l-(l-e.value.y)*(d/n.value),n.value=d,r()},r=()=>{const a=D(t);a.resetTransform(),a.translate(e.value.x,e.value.y),a.scale(n.value,n.value)};return lt(()=>{const a=t.value;if(!a)throw new Error("Canvas ref is not defined");a.addEventListener("wheel",o,{passive:!1})}),ht(()=>{const a=t.value;a&&a.removeEventListener("wheel",o)}),{scale:n,origin:e}}const De=t=>{const n=K("panZoomScale",0),e=K("panZoomPanX",0),o=K("panZoomPanY",0),r=()=>{const s=D(t),{a:i,e:c,f:l}=s.getTransform();n.value=i,e.value=c,o.value=l},a=()=>{D(t),console.log("applying",n.value,e.value,o.value)};return lt(()=>{t.value&&(t.value.addEventListener("wheel",r),t.value.addEventListener("mousedown",r),t.value.addEventListener("mouseup",r),setTimeout(()=>a(),0))}),ht(()=>{t.value&&(t.value.removeEventListener("wheel",r),t.value.removeEventListener("mousedown",r),t.value.removeEventListener("mouseup",r))}),{track:r,apply:a,scale:n,panX:e,panY:o}},ze=["width","height"],Xe=["width","height"],Ue=kt({__name:"ResponsiveCanvas",props:{color:{},patternColor:{},canvasWidth:{},canvasHeight:{}},emits:["canvasRef","widthChange","heightChange"],setup(t,{emit:n}){const e=H(0),o=H(0),r=H(!0),a=H(),s=H(),i=t,c=F(()=>(i==null?void 0:i.canvasWidth)??5e3),l=F(()=>(i==null?void 0:i.canvasHeight)??3e3),x=n,d=["w-full","h-full","relative","overflow-auto"],h=Ie(),f=F(()=>[...d,...h.value]),w=g=>{a.value=g,x("canvasRef",g)},u=H(),{height:A,width:P}=Dt(u),E=()=>{e.value=c.value,o.value=l.value},L=async()=>u.value??new Promise(g=>{const b=setInterval(()=>{u.value&&(clearInterval(b),g(u.value))},100)}),C=async()=>new Promise(g=>{const b=setInterval(()=>{s.value&&(g(D(s.value)),clearInterval(b))},100)}),v=async()=>{const g=await C();g.clearRect(0,0,e.value,o.value);const b=75,T=(R,O)=>{Ct({at:{x:R,y:O},size:2,color:i.patternColor}).draw(g)},pt=e.value,Bt=o.value;for(let R=b/2;R<pt;R+=b)for(let O=b/2;O<Bt;O+=b)T(R,O)},m=Pe(v,250);(async()=>{v();const g=await L(),b=o.value/2-g.clientHeight/2;g.scrollTop=b;const T=e.value/2-g.clientWidth/2;g.scrollLeft=T,r.value=!1})(),k(A,()=>{E(),v(),x("widthChange",e.value)}),k(P,()=>{E(),v(),x("heightChange",o.value)}),k([c,l],()=>{E(),v(),x("widthChange",e.value),x("heightChange",o.value)}),k(()=>i.patternColor,v),zt({canvasWidth:e,canvasHeight:o,getParentEl:L});const U=ke(a);return De(a),k(U.scale,()=>{const{scale:g,origin:b}=U,T=D(s.value);T.clearRect(0,0,e.value,o.value),T.resetTransform(),T.translate(b.value.x,b.value.y),T.scale(g.value,g.value),m()}),(g,b)=>(ct(),rt("div",{ref_key:"parentEl",ref:u,class:V(f.value),id:"responsive-canvas-container"},[r.value?(ct(),rt("div",{key:0,style:st({backgroundColor:g.color}),class:"absolute top-0 left-0 w-full h-full"},null,4)):Xt("",!0),it("canvas",{ref:w,width:e.value,height:o.value,class:V([`w-[${e.value}px]`,`h-[${o.value}px]`]),id:"responsive-canvas"},null,10,ze),it("canvas",{ref_key:"bgCanvas",ref:s,width:e.value,height:o.value,style:st({backgroundColor:g.color}),class:V([`w-[${e.value}px]`,`h-[${o.value}px]`,"absolute","top-0","-z-10","pointer-events-none"])},null,14,Xe)],2))}});export{Ue as _,Ce as a,Be as b,Se as c,Pe as d,He as e,D as g,Ee as l,Le as r,Ye as s,Ie as u};
