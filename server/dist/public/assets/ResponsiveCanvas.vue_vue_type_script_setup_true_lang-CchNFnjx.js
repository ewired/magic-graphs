import{bh as y,bi as $,bj as R,bk as Y,bl as st,bm as G,bn as O,bo as W,a9 as L,bp as rt,bq as ot,br as _t,bs as Vt,bt as jt,bu as Mt,bv as qt,bw as ct,bx as at,by as Zt,bz as k,bA as Jt,bB as Kt,bC as Qt,bD as te,C as N,g as E,an as Tt,X as St,L as tt,d as ee,bE as ne,J as z,bF as re,c as dt,U as gt,A as ae,a as xt,G as et,o as bt}from"./index-8e-9kjYV.js";const ht=t=>{const{pointA:n,pointB:e,pointC:r,textArea:i}={...Lt,...t};if(!i)throw new Error("no text area provided");const{text:a}=i,{fontSize:s}={...st,...a},o=(n.x+e.x+r.x)/3,c=(n.y+e.y+r.y)/3;return{x:o-s,y:c-s}},ie=t=>{if(!t.textArea)return;const n=ht(t),e=y(t.textArea,n),{width:r,height:i}=$(e),a=R({at:e.at,width:r,height:i});return s=>a(s)},Ht=t=>{if(!t.textArea)return;const n=ht(t),e=y(t.textArea,n),r=Y(e);return i=>r(i)},Ct=t=>{if(!t.textArea)return;const n=ht(t),e=y(t.textArea,n),r=G(e);return i=>r(i)},se=t=>{const n=Ht(t),e=Ct(t);if(!(!n||!e))return r=>{n(r),e(r)}},Et=t=>n=>{const{pointA:e,pointB:r,pointC:i,stroke:a}=t;if(a){const d={start:e,end:r,width:a.width},m={start:r,end:i,width:a.width},v={start:i,end:e,width:a.width};return W(d)(n)||W(m)(n)||W(v)(n)}const{x:s,y:o}=n,c=.5*(-r.y*i.x+e.y*(-r.x+i.x)+e.x*(r.y-i.y)+r.x*i.y),h=1/(2*c)*(e.y*i.x-e.x*i.y+(i.y-e.y)*s+(e.x-i.x)*o),l=1/(2*c)*(e.x*r.y-e.y*r.x+(e.y-r.y)*s+(r.x-e.x)*o);return h>0&&l>0&&1-h-l>0},kt=t=>()=>{const{pointA:n,pointB:e,pointC:r}=t,i=Math.min(n.x,e.x,r.x),a=Math.min(n.y,e.y,r.y),s=Math.max(n.x,e.x,r.x),o=Math.max(n.y,e.y,r.y);return{topLeft:{x:i,y:a},bottomRight:{x:s,y:o}}},Rt=t=>{const{topLeft:n,bottomRight:e}=kt(t)(),r=O({at:n,width:e.x-n.x,height:e.y-n.y});return i=>r(i)},Lt={color:"black"},oe=t=>{const n=ut(t),e=Et(t),r=ie(t),i=Rt(t),a=f=>e(f),s=kt(t),o=se(t),c=Ht(t),h=Ct(t),l=f=>{n(f),o==null||o(f)};return{id:t.id??L(),name:"triangle",draw:l,drawShape:n,drawTextArea:o,drawTextAreaMatte:c,drawText:h,hitbox:a,shapeHitbox:e,textHitbox:r,efficientHitbox:i,getBoundingBox:s}},ut=t=>n=>{const{pointA:e,pointB:r,pointC:i,color:a,stroke:s}={...Lt,...t};n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(r.x,r.y),n.lineTo(i.x,i.y),n.fillStyle=a,n.fill(),n.closePath(),s&&(n.lineWidth=s.width,n.strokeStyle=s.color,s.dash?n.setLineDash(s.dash):n.setLineDash([]),n.stroke(),n.setLineDash([]))},ce=t=>{const{start:n,end:e,width:r,color:i,arrowHeadSize:a}={...j,...t},s=Math.atan2(e.y-n.y,e.x-n.x),{arrowHeadHeight:o,perpLineLength:c}=a(r),h={x:e.x-o*Math.cos(s),y:e.y-o*Math.sin(s)},l=e,f={x:h.x+c*Math.cos(s+Math.PI/2),y:h.y+c*Math.sin(s+Math.PI/2)},d={x:h.x-c*Math.cos(s+Math.PI/2),y:h.y-c*Math.sin(s+Math.PI/2)},m={start:n,end:{x:h.x+Math.cos(s),y:h.y+Math.sin(s)},width:r,color:i},v=rt(m),x=ut({pointA:l,pointB:f,pointC:d,color:i});return S=>{v(S),x(S)}},he=t=>{const{start:n,end:e,width:r,arrowHeadSize:i}={...j,...t},a=W(t),s=ot({start:n,end:e,width:r,arrowHeadSize:i}),o=Et(s);return c=>a(c)||o(c)},ue=t=>()=>{const{topLeft:n,bottomRight:e}=Vt(t)(),{start:r,end:i,width:a,arrowHeadSize:s}={...j,...t},o=ot({start:r,end:i,width:a,arrowHeadSize:s}),c=Math.min(n.x,o.pointA.x,o.pointB.x,o.pointC.x),h=Math.max(n.x,o.pointA.x,o.pointB.x,o.pointC.x),l=Math.min(e.y,o.pointA.y,o.pointB.y,o.pointC.y),f=Math.max(e.y,o.pointA.y,o.pointB.y,o.pointC.y);return{topLeft:{x:c,y:l},bottomRight:{x:h,y:f}}},le=t=>{const n=_t(t),{start:e,end:r,width:i,arrowHeadSize:a}={...j,...t},s=ot({start:e,end:r,width:i,arrowHeadSize:a}),o=Rt(s);return c=>n(c)||o(c)},V=t=>{const{textArea:n}=t;if(!n)throw new Error("no text area provided");return jt(t)},fe=t=>{if(!t.textArea)return;const n=V(t),e=y(t.textArea,n),{width:r,height:i}=$(e),a=R({at:e.at,width:r,height:i});return s=>a(s)},Bt=t=>{if(!t.textArea)return;const n=V(t),e=y(t.textArea,n),r=Y(e);return i=>r(i)},It=t=>{if(!t.textArea)return;const n=V(t),e=y(t.textArea,n),r=G(e);return i=>r(i)},de=t=>{const n=Bt(t),e=It(t);if(!(!n||!e))return r=>{n(r),e(r)}},j={...Mt,arrowHeadSize:qt},ge=t=>{if(t.width&&t.width<0)throw new Error("width must be positive");const n=ce(t),e=he(t),r=fe(t),i=le(t),a=d=>(r==null?void 0:r(d))||e(d),s=ue(t),o=de(t),c=Bt(t),h=It(t),l=d=>{n(d),o==null||o(d)},f=(d,m)=>{if(!t.textArea)return;const v=V(t),x=y(t.textArea,v);ct(d,x,m)};return{id:t.id??L(),name:"arrow",draw:l,drawShape:n,drawTextArea:o,drawTextAreaMatte:c,drawText:h,hitbox:a,shapeHitbox:e,textHitbox:r,efficientHitbox:i,getBoundingBox:s,activateTextArea:f}},xe=t=>{const n=at({width:t.size,height:t.size,...t});return e=>n(e)},q=t=>{const{at:n,size:e,textArea:r}=t;if(!r)throw new Error("no text area provided");const{text:i}=r,{fontSize:a}={...st,...i},s=n.x+e/2,o=n.y+e/2;return{x:s-a,y:o-a}},be=t=>{if(!t.textArea)return;const n=q(t),e=y(t.textArea,n),{width:r,height:i}=$(e),a=R({at:e.at,width:r,height:i});return s=>a(s)},Pt=t=>{if(!t.textArea)return;const n=q(t),e=y(t.textArea,n),r=Y(e);return i=>r(i)},zt=t=>{if(!t.textArea)return;const n=q(t),e=y(t.textArea,n),r=G(e);return i=>r(i)},ve=t=>{const n=Pt(t),e=zt(t);if(!(!n||!e))return r=>{n(r),e(r)}},me=t=>{const n=R({at:t.at,width:t.size,height:t.size,borderRadius:t.borderRadius,rotation:t.rotation,stroke:t.stroke});return e=>n(e)},ye=t=>Zt({at:t.at,width:t.size,height:t.size}),we=t=>{const n=O({at:t.at,width:t.size,height:t.size});return e=>n(e)},pe=t=>{const n=xe(t),e=me(t),r=be(t),i=we(t),a=d=>(r==null?void 0:r(d))||e(d),s=ye(t),o=ve(t),c=Pt(t),h=zt(t),l=d=>{n(d),o==null||o(d)},f=(d,m)=>{if(!t.textArea)return;const v=q(t),x=y(t.textArea,v);ct(d,x,m)};return{id:t.id??L(),name:"square",draw:l,drawShape:n,drawTextArea:o,drawTextAreaMatte:c,drawText:h,hitbox:a,shapeHitbox:e,textHitbox:r,efficientHitbox:i,getBoundingBox:s,activateTextArea:f}},Ae=t=>{const{spacing:n,at:e,upDistance:r,downDistance:i,rotation:a,lineWidth:s,color:o}={...Ot,...t},c=s*2.5,h=c/1.75,l=k({x:e.x,y:e.y-n},e,a),f=k({x:e.x+r,y:e.y-n},e,a),d=k({x:e.x+r,y:e.y+n},e,a),m=k({x:e.x+r-i+c,y:e.y+n},e,a),v=k({x:e.x+r,y:e.y},e,a),x=m,S={x:x.x-c*Math.cos(a),y:x.y-c*Math.sin(a)},K={x:x.x-h*Math.cos(a+Math.PI/2+.01),y:x.y-h*Math.sin(a+Math.PI/2+.01)},B={x:x.x+h*Math.cos(a+Math.PI/2-.01),y:x.y+h*Math.sin(a+Math.PI/2-.01)},U=ut({pointA:S,pointB:K,pointC:B,color:o}),Q=rt({start:l,end:f,width:s,color:o}),H=rt({start:d,end:m,width:s,color:o});return M=>{Q(M),U(M),H(M),M.beginPath(),M.arc(v.x,v.y,n,Math.PI/2+a+.01,-Math.PI/2+a-.01,!0),M.strokeStyle=o,M.stroke(),M.closePath()}},_e=t=>{const{spacing:n,at:e,upDistance:r,lineWidth:i,rotation:a}=t,s=k({x:e.x+r,y:e.y},e,a),o=W({start:e,end:s,width:2*n+i});return c=>o(c)},Ft=t=>()=>{const{spacing:n,at:e,upDistance:r,rotation:i,lineWidth:a}=t,s=k({x:e.x+r,y:e.y},e,i),o=Math.min(e.x,s.x)-a/2-n,c=Math.min(e.y,s.y)-a/2-n,h=Math.max(e.x,s.x)+a/2+n,l=Math.max(e.y,s.y)+a/2+n;return{topLeft:{x:o,y:c},bottomRight:{x:h,y:l}}},Me=t=>{const{topLeft:n,bottomRight:e}=Ft(t)(),r=e.x-n.x,i=e.y-n.y,a=O({at:{x:n.x,y:n.y},width:r,height:i});return s=>a(s)},Z=t=>{const{at:n,upDistance:e,rotation:r,textArea:i,spacing:a,lineWidth:s}={...Ot,...t};if(!i)throw new Error("no text area provided");const{text:o}=i,{fontSize:c}={...st,...o},h=k({x:n.x+e+a+s/2,y:n.y},n,r);return{x:h.x-c+Math.cos(r)*15,y:h.y-c+Math.sin(r)*15}},Te=t=>{if(!t.textArea)return;const n=Z(t),e=y(t.textArea,n),{width:r,height:i}=$(e),a=R({at:e.at,width:r,height:i});return s=>a(s)},Wt=t=>{if(!t.textArea)return;const n=Z(t),e=y(t.textArea,n),r=Y(e);return i=>r(i)},Dt=t=>{if(!t.textArea)return;const n=Z(t),e=y(t.textArea,n),r=G(e);return i=>r(i)},Se=t=>{const n=Wt(t),e=Dt(t);if(!(!n||!e))return r=>{n(r),e(r)}},Ot={color:"black"},He=t=>{if(t.downDistance<0)throw new Error("downDistance must be positive");if(t.upDistance<0)throw new Error("upDistance must be positive");const n=Ae(t),e=_e(t),r=Te(t),i=Me(t),a=d=>(r==null?void 0:r(d))||e(d),s=Ft(t),o=Se(t),c=Wt(t),h=Dt(t),l=d=>{n(d),o==null||o(d)},f=(d,m)=>{if(!t.textArea)return;const v=Z(t),x=y(t.textArea,v);ct(d,x,m)};return{id:t.id??L(),name:"uturn",draw:l,drawShape:n,drawTextArea:o,drawTextAreaMatte:c,drawText:h,hitbox:a,shapeHitbox:e,textHitbox:r,efficientHitbox:i,getBoundingBox:s,activateTextArea:f}},Ce=t=>{const{at:n,size:e,rotation:r,lineWidth:i,borderRadius:a}={...Ut,...t},s=i/2,o=R({at:{x:n.x-e/2,y:n.y-s},width:e,height:i,rotation:r,borderRadius:a}),c=R({at:{x:n.x-s,y:n.y-e/2},width:i,height:e,rotation:r,borderRadius:a});return h=>o(h)||c(h)},Ee=t=>()=>{const{at:n,size:e}=t;return{topLeft:{x:n.x-e/2,y:n.y-e/2},bottomRight:{x:n.x+e/2,y:n.y+e/2}}},ke=t=>{const{at:n,size:e}=t,r=O({at:{x:n.x-e/2,y:n.y-e/2},width:e,height:e});return i=>r(i)},Re=t=>{const{at:n,size:e,rotation:r,color:i,lineWidth:a,borderRadius:s}={...Ut,...t},o=a/2;return c=>{at({at:{x:n.x-o,y:n.y-e/2},width:a,height:e,color:i,borderRadius:s,rotation:r})(c),at({at:{x:n.x-e/2,y:n.y-o},width:e,height:a,color:i,borderRadius:s,rotation:r})(c)}},Ut={rotation:0,color:"black",lineWidth:Mt.width,borderRadius:0},Le=t=>{if(t.lineWidth&&t.lineWidth<0)throw new Error("lineWidth must be positive");const n=Re(t),e=Ce(t),r=ke(t),i=o=>e(o),a=Ee(t),s=o=>{n(o)};return{id:t.id??L(),name:"cross",draw:s,drawShape:n,shapeHitbox:e,hitbox:i,efficientHitbox:r,getBoundingBox:a}},Be=t=>n=>{const{type:e,color:r,brushWeight:i,points:a}={...ze,...t};e==="draw"?(()=>{n.strokeStyle=r,n.lineCap="round",n.lineJoin="round",n.lineWidth=i,n.beginPath();const[c,...h]=a;n.moveTo(c.x,c.y),h.forEach(({x:l,y:f})=>n.lineTo(l,f)),n.stroke()})():(()=>{n.globalCompositeOperation="destination-out",n.lineWidth=nt;for(let c=0;c<a.length-1;c++){const h=a[c],l=a[c+1],f=Math.pow(l.x-h.x,2)+Math.pow(l.y-h.y,2),d=Math.sqrt(f),m=Math.ceil(d/nt);for(let v=0;v<=m;v++){const x=h.x+v/m*(l.x-h.x),S=h.y+v/m*(l.y-h.y);n.beginPath(),n.arc(x,S,nt,0,Math.PI*2),n.fill()}}n.globalCompositeOperation="source-over"})(),n.lineCap="butt",n.lineJoin="miter"},Ie=t=>n=>{const{type:e,points:r}=t;if(e==="erase")return!1;const{topLeft:i,bottomRight:a}=lt(t)(),s=a.x-i.x,o=a.y-i.y;if(!R({at:{x:i.x,y:i.y},width:Math.max(s,10),height:Math.max(o,10)})(n))return!1;for(let h=0;h<r.length-1;h++){const l={start:r[h],end:r[h+1]};if(_t(l)({at:n,width:1,height:1}))return!0}return!1},lt=t=>()=>{const{points:n}=t;let e=n[0].x,r=n[0].y,i=n[0].x,a=n[0].y;for(const s of n)s.x<e&&(e=s.x),s.y<r&&(r=s.y),s.x>i&&(i=s.x),s.y>a&&(a=s.y);return{topLeft:{x:e,y:r},bottomRight:{x:i,y:a}}},Pe=t=>{if(t.type==="erase")return s=>!1;const{topLeft:n,bottomRight:e}=lt(t)(),r=e.x-n.x,i=e.y-n.y,a=O({at:{x:n.x,y:n.y},width:Math.max(r,10),height:Math.max(i,10)});return s=>a(s)},ze={color:"red",brushWeight:3},nt=50,Fe=t=>{if(t.points.length<1)throw new Error("not enough points to draw scribble");if(t.brushWeight&&t.brushWeight<1)throw new Error('brushWeight must be at least "1"');const n=Ie(t),e=Pe(t),r=o=>n(o),i=lt(t),a=Be(t),s=o=>{a(o)};return{id:t.id??L(),name:"scribble",drawShape:a,draw:s,hitbox:r,shapeHitbox:n,efficientHitbox:e,getBoundingBox:i}},We=Jt,De=ge,Oe=Kt,Ue=Qt,Ne=pe,Xe=oe,$e=He,Nt=Le,Ye=Fe,Hn={arrow:De,circle:Oe,line:We,rect:Ue,square:Ne,triangle:Xe,uturn:$e,cross:Nt,scribble:Ye},D=t=>{if(!t)throw new Error("canvas not found");const n="value"in t?t.value:t;if(!n)throw new Error("canvas not found");const e=n.getContext("2d");if(!e)throw new Error("2d context not found");return e};function X(t){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},X(t)}var Ge=/^\s+/,Ve=/\s+$/;function u(t,n){if(t=t||"",n=n||{},t instanceof u)return t;if(!(this instanceof u))return new u(t,n);var e=je(t);this._originalInput=t,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||e.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=e.ok}u.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(n.r*299+n.g*587+n.b*114)/1e3},getLuminance:function(){var n=this.toRgb(),e,r,i,a,s,o;return e=n.r/255,r=n.g/255,i=n.b/255,e<=.03928?a=e/12.92:a=Math.pow((e+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),.2126*a+.7152*s+.0722*o},setAlpha:function(n){return this._a=Xt(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=mt(this._r,this._g,this._b);return{h:n.h*360,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=mt(this._r,this._g,this._b),e=Math.round(n.h*360),r=Math.round(n.s*100),i=Math.round(n.v*100);return this._a==1?"hsv("+e+", "+r+"%, "+i+"%)":"hsva("+e+", "+r+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var n=vt(this._r,this._g,this._b);return{h:n.h*360,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=vt(this._r,this._g,this._b),e=Math.round(n.h*360),r=Math.round(n.s*100),i=Math.round(n.l*100);return this._a==1?"hsl("+e+", "+r+"%, "+i+"%)":"hsla("+e+", "+r+"%, "+i+"%, "+this._roundA+")"},toHex:function(n){return yt(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return Ke(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(g(this._r,255)*100)+"%",g:Math.round(g(this._g,255)*100)+"%",b:Math.round(g(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(g(this._r,255)*100)+"%, "+Math.round(g(this._g,255)*100)+"%, "+Math.round(g(this._b,255)*100)+"%)":"rgba("+Math.round(g(this._r,255)*100)+"%, "+Math.round(g(this._g,255)*100)+"%, "+Math.round(g(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:ln[yt(this._r,this._g,this._b,!0)]||!1},toFilter:function(n){var e="#"+wt(this._r,this._g,this._b,this._a),r=e,i=this._gradientType?"GradientType = 1, ":"";if(n){var a=u(n);r="#"+wt(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+e+",endColorstr="+r+")"},toString:function(n){var e=!!n;n=n||this._format;var r=!1,i=this._a<1&&this._a>=0,a=!e&&i&&(n==="hex"||n==="hex6"||n==="hex3"||n==="hex4"||n==="hex8"||n==="name");return a?n==="name"&&this._a===0?this.toName():this.toRgbString():(n==="rgb"&&(r=this.toRgbString()),n==="prgb"&&(r=this.toPercentageRgbString()),(n==="hex"||n==="hex6")&&(r=this.toHexString()),n==="hex3"&&(r=this.toHexString(!0)),n==="hex4"&&(r=this.toHex8String(!0)),n==="hex8"&&(r=this.toHex8String()),n==="name"&&(r=this.toName()),n==="hsl"&&(r=this.toHslString()),n==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return u(this.toString())},_applyModification:function(n,e){var r=n.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(nn,arguments)},brighten:function(){return this._applyModification(rn,arguments)},darken:function(){return this._applyModification(an,arguments)},desaturate:function(){return this._applyModification(Qe,arguments)},saturate:function(){return this._applyModification(tn,arguments)},greyscale:function(){return this._applyModification(en,arguments)},spin:function(){return this._applyModification(sn,arguments)},_applyCombination:function(n,e){return n.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(hn,arguments)},complement:function(){return this._applyCombination(on,arguments)},monochromatic:function(){return this._applyCombination(un,arguments)},splitcomplement:function(){return this._applyCombination(cn,arguments)},triad:function(){return this._applyCombination(pt,[3])},tetrad:function(){return this._applyCombination(pt,[4])}};u.fromRatio=function(t,n){if(X(t)=="object"){var e={};for(var r in t)t.hasOwnProperty(r)&&(r==="a"?e[r]=t[r]:e[r]=F(t[r]));t=e}return u(t,n)};function je(t){var n={r:0,g:0,b:0},e=1,r=null,i=null,a=null,s=!1,o=!1;return typeof t=="string"&&(t=xn(t)),X(t)=="object"&&(T(t.r)&&T(t.g)&&T(t.b)?(n=qe(t.r,t.g,t.b),s=!0,o=String(t.r).substr(-1)==="%"?"prgb":"rgb"):T(t.h)&&T(t.s)&&T(t.v)?(r=F(t.s),i=F(t.v),n=Je(t.h,r,i),s=!0,o="hsv"):T(t.h)&&T(t.s)&&T(t.l)&&(r=F(t.s),a=F(t.l),n=Ze(t.h,r,a),s=!0,o="hsl"),t.hasOwnProperty("a")&&(e=t.a)),e=Xt(e),{ok:s,format:t.format||o,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:e}}function qe(t,n,e){return{r:g(t,255)*255,g:g(n,255)*255,b:g(e,255)*255}}function vt(t,n,e){t=g(t,255),n=g(n,255),e=g(e,255);var r=Math.max(t,n,e),i=Math.min(t,n,e),a,s,o=(r+i)/2;if(r==i)a=s=0;else{var c=r-i;switch(s=o>.5?c/(2-r-i):c/(r+i),r){case t:a=(n-e)/c+(n<e?6:0);break;case n:a=(e-t)/c+2;break;case e:a=(t-n)/c+4;break}a/=6}return{h:a,s,l:o}}function Ze(t,n,e){var r,i,a;t=g(t,360),n=g(n,100),e=g(e,100);function s(h,l,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?h+(l-h)*6*f:f<1/2?l:f<2/3?h+(l-h)*(2/3-f)*6:h}if(n===0)r=i=a=e;else{var o=e<.5?e*(1+n):e+n-e*n,c=2*e-o;r=s(c,o,t+1/3),i=s(c,o,t),a=s(c,o,t-1/3)}return{r:r*255,g:i*255,b:a*255}}function mt(t,n,e){t=g(t,255),n=g(n,255),e=g(e,255);var r=Math.max(t,n,e),i=Math.min(t,n,e),a,s,o=r,c=r-i;if(s=r===0?0:c/r,r==i)a=0;else{switch(r){case t:a=(n-e)/c+(n<e?6:0);break;case n:a=(e-t)/c+2;break;case e:a=(t-n)/c+4;break}a/=6}return{h:a,s,v:o}}function Je(t,n,e){t=g(t,360)*6,n=g(n,100),e=g(e,100);var r=Math.floor(t),i=t-r,a=e*(1-n),s=e*(1-i*n),o=e*(1-(1-i)*n),c=r%6,h=[e,s,a,a,o,e][c],l=[o,e,e,s,a,a][c],f=[a,a,o,e,e,s][c];return{r:h*255,g:l*255,b:f*255}}function yt(t,n,e,r){var i=[_(Math.round(t).toString(16)),_(Math.round(n).toString(16)),_(Math.round(e).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Ke(t,n,e,r,i){var a=[_(Math.round(t).toString(16)),_(Math.round(n).toString(16)),_(Math.round(e).toString(16)),_($t(r))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function wt(t,n,e,r){var i=[_($t(r)),_(Math.round(t).toString(16)),_(Math.round(n).toString(16)),_(Math.round(e).toString(16))];return i.join("")}u.equals=function(t,n){return!t||!n?!1:u(t).toRgbString()==u(n).toRgbString()};u.random=function(){return u.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Qe(t,n){n=n===0?0:n||10;var e=u(t).toHsl();return e.s-=n/100,e.s=J(e.s),u(e)}function tn(t,n){n=n===0?0:n||10;var e=u(t).toHsl();return e.s+=n/100,e.s=J(e.s),u(e)}function en(t){return u(t).desaturate(100)}function nn(t,n){n=n===0?0:n||10;var e=u(t).toHsl();return e.l+=n/100,e.l=J(e.l),u(e)}function rn(t,n){n=n===0?0:n||10;var e=u(t).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(n/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(n/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(n/100)))),u(e)}function an(t,n){n=n===0?0:n||10;var e=u(t).toHsl();return e.l-=n/100,e.l=J(e.l),u(e)}function sn(t,n){var e=u(t).toHsl(),r=(e.h+n)%360;return e.h=r<0?360+r:r,u(e)}function on(t){var n=u(t).toHsl();return n.h=(n.h+180)%360,u(n)}function pt(t,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var e=u(t).toHsl(),r=[u(t)],i=360/n,a=1;a<n;a++)r.push(u({h:(e.h+a*i)%360,s:e.s,l:e.l}));return r}function cn(t){var n=u(t).toHsl(),e=n.h;return[u(t),u({h:(e+72)%360,s:n.s,l:n.l}),u({h:(e+216)%360,s:n.s,l:n.l})]}function hn(t,n,e){n=n||6,e=e||30;var r=u(t).toHsl(),i=360/e,a=[u(t)];for(r.h=(r.h-(i*n>>1)+720)%360;--n;)r.h=(r.h+i)%360,a.push(u(r));return a}function un(t,n){n=n||6;for(var e=u(t).toHsv(),r=e.h,i=e.s,a=e.v,s=[],o=1/n;n--;)s.push(u({h:r,s:i,v:a})),a=(a+o)%1;return s}u.mix=function(t,n,e){e=e===0?0:e||50;var r=u(t).toRgb(),i=u(n).toRgb(),a=e/100,s={r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a};return u(s)};u.readability=function(t,n){var e=u(t),r=u(n);return(Math.max(e.getLuminance(),r.getLuminance())+.05)/(Math.min(e.getLuminance(),r.getLuminance())+.05)};u.isReadable=function(t,n,e){var r=u.readability(t,n),i,a;switch(a=!1,i=bn(e),i.level+i.size){case"AAsmall":case"AAAlarge":a=r>=4.5;break;case"AAlarge":a=r>=3;break;case"AAAsmall":a=r>=7;break}return a};u.mostReadable=function(t,n,e){var r=null,i=0,a,s,o,c;e=e||{},s=e.includeFallbackColors,o=e.level,c=e.size;for(var h=0;h<n.length;h++)a=u.readability(t,n[h]),a>i&&(i=a,r=u(n[h]));return u.isReadable(t,r,{level:o,size:c})||!s?r:(e.includeFallbackColors=!1,u.mostReadable(t,["#fff","#000"],e))};var it=u.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ln=u.hexNames=fn(it);function fn(t){var n={};for(var e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function Xt(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function g(t,n){dn(t)&&(t="100%");var e=gn(t);return t=Math.min(n,Math.max(0,parseFloat(t))),e&&(t=parseInt(t*n,10)/100),Math.abs(t-n)<1e-6?1:t%n/parseFloat(n)}function J(t){return Math.min(1,Math.max(0,t))}function p(t){return parseInt(t,16)}function dn(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function gn(t){return typeof t=="string"&&t.indexOf("%")!=-1}function _(t){return t.length==1?"0"+t:""+t}function F(t){return t<=1&&(t=t*100+"%"),t}function $t(t){return Math.round(parseFloat(t)*255).toString(16)}function At(t){return p(t)/255}var A=function(){var t="[-\\+]?\\d+%?",n="[-\\+]?\\d*\\.\\d+%?",e="(?:"+n+")|(?:"+t+")",r="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",i="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function T(t){return!!A.CSS_UNIT.exec(t)}function xn(t){t=t.replace(Ge,"").replace(Ve,"").toLowerCase();var n=!1;if(it[t])t=it[t],n=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e;return(e=A.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=A.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=A.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=A.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=A.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=A.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=A.hex8.exec(t))?{r:p(e[1]),g:p(e[2]),b:p(e[3]),a:At(e[4]),format:n?"name":"hex8"}:(e=A.hex6.exec(t))?{r:p(e[1]),g:p(e[2]),b:p(e[3]),format:n?"name":"hex"}:(e=A.hex4.exec(t))?{r:p(e[1]+""+e[1]),g:p(e[2]+""+e[2]),b:p(e[3]+""+e[3]),a:At(e[4]+""+e[4]),format:n?"name":"hex8"}:(e=A.hex3.exec(t))?{r:p(e[1]+""+e[1]),g:p(e[2]+""+e[2]),b:p(e[3]+""+e[3]),format:n?"name":"hex"}:!1}function bn(t){var n,e;return t=t||{level:"AA",size:"small"},n=(t.level||"AA").toUpperCase(),e=(t.size||"small").toLowerCase(),n!=="AA"&&n!=="AAA"&&(n="AA"),e!=="small"&&e!=="large"&&(e="small"),{level:n,size:e}}const vn=()=>{const{class:t}=te();return N(()=>{if(!t)return[];if(typeof t!="string")throw new Error("class attribute must be a string");return t.split(" ")})},mn=(t,n)=>{let e;return()=>{clearTimeout(e),e=setTimeout(t,n)}},yn=.5,wn=5;function pn(t){const n=E(1),e=E({x:0,y:0}),r=a=>{if(!a.ctrlKey)return;a.preventDefault();const s=t.value;if(!s)return;const o=s.getBoundingClientRect(),c=a.clientX-o.left,h=a.clientY-o.top,l=a.deltaY<0?1.03:.97,f=Math.min(wn,Math.max(yn,n.value*l));e.value.x=c-(c-e.value.x)*(f/n.value),e.value.y=h-(h-e.value.y)*(f/n.value),n.value=f,i()},i=()=>{const a=D(t);a.resetTransform(),a.translate(e.value.x,e.value.y),a.scale(n.value,n.value)};return Tt(()=>{const a=t.value;if(!a)throw new Error("Canvas ref is not defined");a.addEventListener("wheel",r,{passive:!1})}),St(()=>{const a=t.value;a&&a.removeEventListener("wheel",r)}),{scale:n,origin:e}}const An=t=>{const n=tt("pan-zoom-scale",0),e=tt("pan-zoom-pan-x",0),r=tt("pan-zoom-pan-y",0),i=()=>{const s=D(t),{a:o,e:c,f:h}=s.getTransform();n.value=o,e.value=c,r.value=h},a=()=>{D(t)};return Tt(()=>{t.value&&(t.value.addEventListener("wheel",i),t.value.addEventListener("mousedown",i),t.value.addEventListener("mouseup",i),setTimeout(()=>a(),0))}),St(()=>{t.value&&(t.value.removeEventListener("wheel",i),t.value.removeEventListener("mousedown",i),t.value.removeEventListener("mouseup",i))}),{track:i,apply:a,scale:n,panX:e,panY:r}},_n=["width","height"],Mn=["width","height"],Cn=ee({__name:"ResponsiveCanvas",props:{color:{},patternColor:{},canvasWidth:{},canvasHeight:{}},emits:["canvasRef","widthChange","heightChange"],setup(t,{emit:n}){const e=E(0),r=E(0),i=E(!0),a=E(),s=E(),o=t,c=N(()=>(o==null?void 0:o.canvasWidth)??5e3),h=N(()=>(o==null?void 0:o.canvasHeight)??3e3),l=n,f=["w-full","h-full","relative","overflow-auto"],d=vn(),m=N(()=>[...f,...d.value]),v=b=>{a.value=b,l("canvasRef",b)},x=E(),{height:S,width:K}=ne(x),B=()=>{e.value=c.value,r.value=h.value},U=async()=>x.value??new Promise(b=>{const w=setInterval(()=>{x.value&&(clearInterval(w),b(x.value))},100)}),Q=async()=>new Promise(b=>{const w=setInterval(()=>{s.value&&(b(D(s.value)),clearInterval(w))},100)}),H=async()=>{const b=await Q();b.clearRect(0,0,e.value,r.value);const w=75,C=(I,P)=>{Nt({at:{x:I,y:P},size:2,color:o.patternColor}).draw(b)},Yt=e.value,Gt=r.value;for(let I=w/2;I<Yt;I+=w)for(let P=w/2;P<Gt;P+=w)C(I,P)},M=mn(H,250);(async()=>{H();const b=await U(),w=r.value/2-b.clientHeight/2;b.scrollTop=w;const C=e.value/2-b.clientWidth/2;b.scrollLeft=C,i.value=!1})(),z(S,()=>{B(),H(),l("widthChange",e.value)}),z(K,()=>{B(),H(),l("heightChange",r.value)}),z([c,h],()=>{B(),H(),l("widthChange",e.value),l("heightChange",r.value)}),z(()=>o.patternColor,H),re({canvasWidth:e,canvasHeight:r,getParentEl:U});const ft=pn(a);return An(a),z(ft.scale,()=>{const{scale:b,origin:w}=ft,C=D(s.value);C.clearRect(0,0,e.value,r.value),C.resetTransform(),C.translate(w.value.x,w.value.y),C.scale(b.value,b.value),M()}),(b,w)=>(bt(),dt("div",{ref_key:"parentEl",ref:x,class:et(m.value),id:"responsive-canvas-container"},[i.value?(bt(),dt("div",{key:0,style:gt({backgroundColor:b.color}),class:"absolute top-0 left-0 w-full h-full"},null,4)):ae("",!0),xt("canvas",{ref:v,width:e.value,height:r.value,class:et([`w-[${e.value}px]`,`h-[${r.value}px]`]),id:"responsive-canvas"},null,10,_n),xt("canvas",{ref_key:"bgCanvas",ref:s,width:e.value,height:r.value,style:gt({backgroundColor:b.color}),class:et([`w-[${e.value}px]`,`h-[${r.value}px]`,"absolute","top-0","-z-10","pointer-events-none"])},null,14,Mn)],2))}});export{Cn as _,Ne as a,$e as b,Oe as c,mn as d,De as e,D as g,We as l,Ue as r,Hn as s,u as t,vn as u};
