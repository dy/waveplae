function I(){throw new Error("Cycle detected")}function D(){if(T>1)T--;else{for(var t,e=!1;B!==void 0;){var r=B;for(B=void 0,H++;r!==void 0;){var i=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&tt(r))try{r.c()}catch(s){e||(t=s,e=!0)}r=i}}if(H=0,T--,e)throw t}}function J(t){if(T>0)return t();T++;try{return t()}finally{D()}}var p=void 0,B=void 0,T=0,H=0,$=0;function Q(t){if(p!==void 0){var e=t.n;if(e===void 0||e.t!==p)return e={i:0,S:t,p:p.s,n:void 0,t:p,e:void 0,x:void 0,r:e},p.s!==void 0&&(p.s.n=e),p.s=e,t.n=e,32&p.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=p.s,e.n=void 0,p.s.n=e,p.s=e),e}}function b(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}b.prototype.h=function(){return!0};b.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};b.prototype.U=function(t){if(this.t!==void 0){var e=t.e,r=t.x;e!==void 0&&(e.x=r,t.e=void 0),r!==void 0&&(r.e=e,t.x=void 0),t===this.t&&(this.t=r)}};b.prototype.subscribe=function(t){var e=this;return V(function(){var r=e.value,i=32&this.f;this.f&=-33;try{t(r)}finally{this.f|=i}})};b.prototype.valueOf=function(){return this.value};b.prototype.toString=function(){return this.value+""};b.prototype.peek=function(){return this.v};Object.defineProperty(b.prototype,"value",{get:function(){var t=Q(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){H>100&&I(),this.v=t,this.i++,$++,T++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{D()}}}});function Y(t){return new b(t)}function tt(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function et(t){for(var e=t.s;e!==void 0;e=e.n){var r=e.S.n;if(r!==void 0&&(e.r=r),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function rt(t){for(var e=t.s,r=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):r=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}t.s=r}function j(t){b.call(this,void 0),this.x=t,this.s=void 0,this.g=$-1,this.f=4}(j.prototype=new b).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===$))return!0;if(this.g=$,this.f|=1,this.i>0&&!tt(this))return this.f&=-2,!0;var t=p;try{et(this),p=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return p=t,rt(this),this.f&=-2,!0};j.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}b.prototype.S.call(this,t)};j.prototype.U=function(t){if(this.t!==void 0&&(b.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};j.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};j.prototype.peek=function(){if(this.h()||I(),16&this.f)throw this.v;return this.v};Object.defineProperty(j.prototype,"value",{get:function(){1&this.f&&I();var t=Q(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function it(t){return new j(t)}function ot(t){var e=t.u;if(t.u=void 0,typeof e=="function"){T++;var r=p;p=void 0;try{e()}catch(i){throw t.f&=-2,t.f|=8,Z(t),i}finally{p=r,D()}}}function Z(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,ot(t)}function St(t){if(p!==this)throw new Error("Out-of-order effect");rt(this),p=t,this.f&=-2,8&this.f&&Z(this),D()}function W(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}W.prototype.c=function(){var t=this.S();try{!(8&this.f)&&this.x!==void 0&&(this.u=this.x())}finally{t()}};W.prototype.S=function(){1&this.f&&I(),this.f|=1,this.f&=-9,ot(this),et(this),T++;var t=p;return p=this,St.bind(this,t)};W.prototype.N=function(){2&this.f||(this.f|=2,this.o=B,B=this)};W.prototype.d=function(){this.f|=8,1&this.f||Z(this)};function V(t){var e=new W(t);try{e.c()}catch(r){throw e.d(),r}return e.d.bind(e)}Symbol.observable||=Symbol("observable");var nt=t=>t&&!!(t[Symbol.observable]||t[Symbol.asyncIterator]||t.call&&t.set||t.subscribe||t.then),kt=new FinalizationRegistry(t=>t.call?.()),xt=t=>t&&(()=>t.unsubscribe?.()),st=(t,e,r,i,s,o)=>t&&(o=xt((t[Symbol.observable]?.()||t).subscribe?.(e,r,i))||t.set&&t.call?.(s,e)||(t.then?.(n=>(!s&&e(n),i?.()),r)||(async n=>{try{for await(n of t){if(s)return;e(n)}i?.()}catch(a){r?.(a)}})())&&(n=>s=1),kt.register(t,o),o);var Ot=t=>t&&t.peek,X=t=>t&&t[at],at=Symbol("signal-struct");w.isStruct=X;function w(t,e){if(X(t)&&!e)return t;if(q(t)){let r=Object.create(e||Object.getPrototypeOf(t)),i={},s=Object.getOwnPropertyDescriptors(t);for(let o in s){let n=s[o];if(n.get){let a=i[o]=it(n.get.bind(r));Object.defineProperty(r,o,{get(){return a.value},set:n.set?.bind(r),configurable:!1,enumerable:!0})}else{let a=n.value,f=nt(a),c=i[o]=Ot(a)?a:Y(f?void 0:q(a)?Object.seal(w(a)):Array.isArray(a)?w(a):a);f&&st(a,d=>c.value=d),Object.defineProperty(r,o,{get(){return c.value},set(d){if(q(d)){if(q(c.value))try{Object.assign(c.value,d);return}catch{}c.value=Object.seal(w(d))}else Array.isArray(d)?c.value=w(d):c.value=d},enumerable:!0,configurable:!1})}}return Object.defineProperty(r,at,{configurable:!1,enumerable:!1,value:!0}),r}if(Array.isArray(t)&&!X(t[0]))for(let r=0;r<t.length;r++)t[r]=w(t[r]);return t}function q(t){return t&&t.constructor===Object}function lt(t,e,r,i){let s=new Map,o=new Map,n,a;for(n=0;n<e.length;n++)s.set(e[n],n);for(n=0;n<r.length;n++)o.set(r[n],n);for(n=a=0;n!==e.length||a!==r.length;){var f=e[n],c=r[a];if(f===null)n++;else if(r.length<=a)t.removeChild(e[n]),n++;else if(e.length<=n)t.insertBefore(c,e[n]||i),a++;else if(f===c)n++,a++;else{var d=o.get(f),u=s.get(c);d===void 0?(t.removeChild(e[n]),n++):u===void 0?(t.insertBefore(c,e[n]||i),a++):(t.insertBefore(e[u],e[n]||i),e[u]=null,u>n+1&&n++,a++)}}return r}var M={},At={},Nt={},ft=t=>t===null?At:t===void 0?Nt:typeof t=="number"||t instanceof Number?M[t]||(M[t]=new Number(t)):typeof t=="string"||t instanceof String?M[t]||(M[t]=new String(t)):typeof t=="boolean"||t instanceof Boolean?M[t]||(M[t]=new Boolean(t)):t;var R={},S={};R.if=(t,e)=>{let r=document.createTextNode(""),i=[y(t,e,":if")],s=[t],o=t;for(;(o=t.nextElementSibling)&&o.hasAttribute(":else");)o.removeAttribute(":else"),(e=o.getAttribute(":if"))?(o.removeAttribute(":if"),o.remove(),s.push(o),i.push(y(t,e,":else :if"))):(o.remove(),s.push(o),i.push(()=>1));return t.replaceWith(o=r),n=>{let a=i.findIndex(f=>f(n));s[a]!=o&&((o[ut]||o).replaceWith(o=s[a]||r),E(o,n))}};R.with=(t,e,r)=>{let i=y(t,e,"with");E(t,w(i(r),r))};var ut=Symbol(":each");R.each=(t,e)=>{let r=Ct(e);if(!r)return F(new Error,t,e);let i=t[ut]=document.createTextNode("");t.replaceWith(i);let s=y(t,r[2],":each"),o=t.getAttribute(":key"),n=o?y(null,o):null;t.removeAttribute(":key");let a=new WeakMap,f=new WeakMap,c=[];return d=>{let u=s(d);u?typeof u=="number"?u=Array.from({length:u},(m,k)=>[k,k+1]):Array.isArray(u)?u=u.map((m,k)=>[k+1,m]):typeof u=="object"?u=Object.entries(u):F(Error("Bad list value"),t,e,":each",u):u=[];let v=[],A=[];for(let[m,k]of u){let N,L,x=n?.({[r[0]]:k,[r[1]]:m});_t(x)&&(x=ft(x)),x==null?N=t.cloneNode(!0):(N=f.get(x))||f.set(x,N=t.cloneNode(!0)),v.push(N),x==null||!(L=a.get(x))?(L=w({[r[0]]:k,[r[1]]:m},d),x!=null&&a.set(x,L)):L[r[0]]=k,A.push(L)}lt(i.parentNode,c,v,i),c=v;for(let m=0;m<v.length;m++)E(v[m],A[m])}};function Ct(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,s=t.match(i);if(!s)return;let o=s[2].trim(),n=s[1].replace(r,"").trim(),a=n.match(e);return a?[n.replace(e,"").trim(),a[1].trim(),o]:[n,"",o]}S.ref=(t,e,r)=>{r[e]=t};S.id=(t,e)=>{let r=y(t,e,":id"),i=s=>t.id=s||s===0?s:"";return s=>i(r(s))};S.class=(t,e)=>{let r=y(t,e,":class"),i=t.className;return s=>{let o=r(s);t.className=i+typeof o=="string"?o:(Array.isArray(o)?o:Object.entries(o).map(([n,a])=>a?n:"")).filter(Boolean).join(" ")}};S.style=(t,e)=>{let r=y(t,e,":style"),i=t.getAttribute("style")||"";return i.endsWith(";")||(i+="; "),s=>{let o=r(s);if(typeof o=="string")t.setAttribute("style",i+o);else{t.setAttribute("style",i);for(let n in o)t.style.setProperty(n,o[n])}}};S.text=(t,e)=>{let r=y(t,e,":text");return i=>{let s=r(i);t.textContent=s??""}};S.data=(t,e)=>{let r=y(t,e,":data");return i=>{let s=r(i);for(let o in s)t.dataset[o]=s[o]}};S.aria=(t,e)=>{let r=y(t,e,":aria"),i=s=>{for(let o in s)K(t,"aria-"+pt(o),s[o]==null?null:s[o]+"")};return s=>i(r(s))};S[""]=(t,e)=>{let r=y(t,e,":");if(r)return i=>{let s=r(i);for(let o in s)K(t,pt(o),s[o])}};S.value=(t,e)=>{let r=y(t,e,":value"),i,s,o=t.type==="text"||t.type===""?n=>t.setAttribute("value",t.value=n??""):t.tagName==="TEXTAREA"||t.type==="text"||t.type===""?n=>(i=t.selectionStart,s=t.selectionEnd,t.setAttribute("value",t.value=n??""),i&&t.setSelectionRange(i,s)):t.type==="checkbox"?n=>(t.value=n?"on":"",K(t,"checked",n)):t.type==="select-one"?n=>{for(let a in t.options)a.removeAttribute("selected");t.value=n,t.selectedOptions[0]?.setAttribute("selected","")}:n=>t.value=n;return n=>o(r(n))};S.on=(t,e)=>{let r=y(t,e,":on");return i=>{let s=r(i),o=[];for(let n in s)o.push(ht(t,n,s[n]));return()=>{for(let n of o)n()}}};var dt=(t,e,r,i)=>{let s=i.startsWith("on")&&i.slice(2),o=y(t,e,":"+i);if(o)return s?n=>{let a=o(n)||(()=>{});return ht(t,s,a)}:n=>K(t,i,o(n))},ht=(t,e,r)=>{let i=e.split("..").map(a=>{let f={evt:"",target:t,test:()=>!0};return f.evt=(a.startsWith("on")?a.slice(2):a).replace(/\.(\w+)?-?([-\w]+)?/g,(c,d,u="")=>(f.test=Tt[d]?.(f,...u.split("-"))||f.test,"")),f});if(i.length==1)return n(r,i[0]);let s,o=(a,f=0)=>s=n(d=>{s(),typeof(a=a.call(t,d))!="function"&&(a=()=>{}),++f<i.length?o(a,f):o(r)},i[f]);return o(r),()=>s();function n(a,{evt:f,target:c,test:d,defer:u,stop:v,prevent:A,...m}){u&&(a=u(a));let k=N=>d(N)&&(v&&N.stopPropagation(),A&&N.preventDefault(),a.call(c,N));return c.addEventListener(f,k,m),()=>c.removeEventListener(f,k,m)}},Tt={prevent(t){t.prevent=!0},stop(t){t.stop=!0},once(t){t.once=!0},passive(t){t.passive=!0},capture(t){t.capture=!0},window(t){t.target=window},document(t){t.target=document},throttle(t,e){t.defer=r=>jt(r,e?Number(e)||0:108)},debounce(t,e){t.defer=r=>Et(r,e?Number(e)||0:108)},outside:t=>e=>{let r=t.target;return!(r.contains(e.target)||e.target.isConnected===!1||r.offsetWidth<1&&r.offsetHeight<1)},self:t=>e=>e.target===t.target,ctrl:(t,...e)=>r=>h.ctrl(r)&&e.every(i=>h[i]?h[i](r):r.key===i),shift:(t,...e)=>r=>h.shift(r)&&e.every(i=>h[i]?h[i](r):r.key===i),alt:(t,...e)=>r=>h.alt(r)&&e.every(i=>h[i]?h[i](r):r.key===i),meta:(t,...e)=>r=>h.meta(r)&&e.every(i=>h[i]?h[i](r):r.key===i),arrow:t=>h.arrow,enter:t=>h.enter,escape:t=>h.escape,tab:t=>h.tab,space:t=>h.space,backspace:t=>h.backspace,delete:t=>h.delete,digit:t=>h.digit,letter:t=>h.letter,character:t=>h.character},h={ctrl:t=>t.ctrlKey||t.key==="Control"||t.key==="Ctrl",shift:t=>t.shiftKey||t.key==="Shift",alt:t=>t.altKey||t.key==="Alt",meta:t=>t.metaKey||t.key==="Meta"||t.key==="Command",arrow:t=>t.key.startsWith("Arrow"),enter:t=>t.key==="Enter",escape:t=>t.key.startsWith("Esc"),tab:t=>t.key==="Tab",space:t=>t.key==="\xA0"||t.key==="Space"||t.key===" ",backspace:t=>t.key==="Backspace",delete:t=>t.key==="Delete",digit:t=>/^\d$/.test(t.key),letter:t=>/^[a-zA-Z]$/.test(t.key),character:t=>/^\S$/.test(t.key)},jt=(t,e)=>{let r,i,s=o=>{r=!0,setTimeout(()=>{if(r=!1,i)return i=!1,s(o),t(o)},e)};return o=>r?i=!0:(s(o),t(o))},Et=(t,e)=>{let r;return i=>{clearTimeout(r),r=setTimeout(()=>{r=null,t(i)},e)}},K=(t,e,r)=>{r==null||r===!1?t.removeAttribute(e):t.setAttribute(e,r===!0?"":typeof r=="number"||typeof r=="string"?r:"")},ct={};function y(t,e,r){let i=ct[e];if(!i){let s=/^[\n\s]*if.*\(.*\)/.test(e)||/\b(let|const)\s/.test(e)?`(() => { ${e} })()`:e;try{i=ct[e]=new Function("__scope",`with (__scope) { return ${s} };`)}catch(o){return F(o,t,e,r)}}return s=>{let o;try{o=i.call(t,s)}catch(n){return F(n,t,e,r)}return o}}function F(t,e,r,i){Object.assign(t,{element:e,expression:r}),console.warn(`\u2234 ${t.message}

${i}=${r?`"${r}"

`:""}`,e),setTimeout(()=>{throw t},0)}function pt(t){return t.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,e=>"-"+e.toLowerCase())}function _t(t){return typeof t=="string"||typeof t=="boolean"||typeof t=="number"}var P=new WeakMap;function E(t,e){if(!t.children)return;if(P.has(t)){let o=P.get(t);return J(()=>Object.assign(o,e)),o}let r=w(e||{}),i=[],s=(o,n=o.parentNode)=>{for(let a in R){let f=":"+a;if(o.hasAttribute?.(f)){let c=o.getAttribute(f);if(o.removeAttribute(f),i.push(R[a](o,c,r,a)),P.has(o)||o.parentNode!==n)return!1}}if(o.attributes)for(let a=0;a<o.attributes.length;){let f=o.attributes[a];if(f.name[0]!==":"){a++;continue}o.removeAttribute(f.name);let c=f.value,d=f.name.slice(1).split(":");for(let u of d){let v=S[u]||dt;if(i.push(v(o,c,r,u)),P.has(o)||o.parentNode!==n)return!1}}for(let a=0,f;f=o.children[a];a++)s(f,o)===!1&&a--};s(t);for(let o of i)if(o){let n;V(()=>{typeof n=="function"&&n(),n=o(r)})}return Object.seal(r),P.set(t,r),r}var yt=E;var z=document.querySelector(".wavearea"),C=z.querySelector(".w-editable"),Mt=z.querySelector(".w-play"),bt=z.querySelector(".w-caret-line"),Rt=new IntersectionObserver(([t])=>{l.caretOffscreen=t.isIntersecting?0:t.intersectionRect.top<=t.rootBounds.top?1:t.intersectionRect.bottom>=t.rootBounds.bottom?-1:0},{root:document,threshold:1,rootMargin:"0px"});Rt.observe(bt);var g=new Audio,O=new Audio;O.loop=!0;var vt=new Worker("./dist/worker.js",{type:"module"}),_=new URL(location);if(_.search.length<2){let t=["https://upload.wikimedia.org/wikipedia/commons/c/cf/Caja_de_m%C3%BAsica_%28PianoConcerto5_Beethoven%29.ogg"],e=t[Math.floor(Math.random()*t.length)];gt(["src",e])}else{let t=[];for(let[e,r]of _.searchParams)t.push(...r.split("..").map(i=>[e,...i.includes(":")?[i]:i.split("-")]));G(...t).then(wt)}async function gt(...t){for(let e of t){let[r,...i]=e;_.searchParams.has(r)?_.searchParams.set(r,`${_.searchParams.get(r)}..${i.join("-")}`):_.searchParams.append(r,i.join("-"))}return history.pushState(null,"",decodeURI(_)),wt(await G(...t))}function G(...t){return new Promise(e=>{vt.postMessage(t),vt.addEventListener("message",r=>e(r.data),{once:!0})})}function wt({url:t,segments:e,duration:r}){let i=g.currentTime;URL.revokeObjectURL(g.src),g.src=t,g.addEventListener("canplay",s=>g.currentTime=i,{once:!0}),l.loading=!1,l.total?console.assert(e.join("")===C.textContent,"Rendered waveform is different from UI"):l.segments=e,l.total=e.reduce((s,o)=>s+=o.length,0),l.duration=r}var l=yt(z,{loading:!0,recording:!1,playing:!1,selecting:!1,playbackStart:0,loop:!1,playbackEnd:null,volume:1,segments:[],total:0,duration:0,caretOffscreen:0,caretOffset:0,caretLine:0,lineWidth:216,async handleCaret(t){let e=U();e&&(l.caretOffset=e.start,l.caretLine=Math.floor(l.caretOffset/l.lineWidth),l.playing||(l.playbackStart=e.start,l.playbackEnd=e.collapsed?l.total:e.end,l.loop=!e.collapsed,l.loop&&mt.selectionChange()),l.loop?O.currentTime=l.playing?O.duration*(Math.max(l.playbackStart,Math.min(e.start,l.playbackEnd))-l.playbackStart)/(l.playbackEnd-l.playbackStart):0:g.currentTime=g.duration*e.start/l.total)},updateTimecodes(){let t=0,e=0;for(let r of C.children){let i=r.textContent.trim(),s=Math.ceil(i.length/l.lineWidth);r.dataset.id=e++,r.dataset.offset=t,r.setAttribute("timecodes",Array.from({length:s},(o,n)=>Lt(n*l.lineWidth+t)).join(`
`)),t+=i.length}},async handleBeforeInput(t){let e=mt[t.inputType];e?e.call(this,t):t.preventDefault()},async handleDrop(t){let r=t.dataTransfer.files[0];if(!r.type.startsWith("audio"))return!1;l.loading=!0,l.segments=[];let i=await fileToArrayBuffer(r),s=await decodeAudio(i),o=await encodeAudio(s),n=new Blob([o],{type:"audio/wav"}),a=URL.createObjectURL(n);return await applyOp(["src",a]),l.loading=!1,i},timeChange(t){document.activeElement!==C&&(U(l.playbackStart=Math.floor(l.total*g.currentTime/l.duration)),C.focus())},scrollIntoCaret(){l.caretOffscreen&&bt.scrollIntoView({behavior:"smooth",block:"center"})},play(t){l.playing=!0,l.scrollIntoCaret();let e=l.playbackStart,r=l.playbackEnd,i,s=()=>{let o=l.loop?l.playbackStart+Math.ceil((l.playbackEnd-l.playbackStart)*O.currentTime/O.duration):Math.max(Math.ceil(l.total*g.currentTime/g.duration),0);U(l.caretOffset=o);let n=Math.floor(l.caretOffset/l.lineWidth);n!==l.caretLine&&(l.caretLine=n,l.scrollIntoCaret()),!l.loop&&r&&o>=r?Mt.click():i=requestAnimationFrame(s)};return s(),C.focus(),(l.loop?O:g).play(),()=>{(l.loop?O:g).pause(),l.playing=!1,cancelAnimationFrame(i),i=null,l.loop?U(e,r):g.currentTime>=l.duration&&U(l.total),C.focus()}}}),mt={async deleteContentBackward(t){let e=t.getTargetRanges()[0],r=e.startOffset+Number(e.startContainer.parentNode.dataset.offset),i=e.endOffset+Number(e.endContainer.parentNode.dataset.offset),s=i-r;this._deleteTimeout?(clearTimeout(this._deleteTimeout),this._deleteOp[1]--,this._deleteOp[2]++):this._deleteOp=["del",r,s],this._deleteTimeout=setTimeout(()=>{gt(this._deleteOp),this._deleteOp=this._deleteTimeout=null},280)},selectionChange(t){this._loopTimeout&&clearTimeout(this._loopTimeout),this._loopTimeout=setTimeout(async()=>{this._loopTimeout=null;let{url:e}=await G(["loop",l.playbackStart,l.playbackEnd]);O.src&&URL.revokeObjectURL(O.src),O.src=e},280)}},U=(t,e,r=0)=>{let i=window.getSelection();if(t!=null){t=Math.max(0,t),e==null&&(e=t);let c,d;i.removeAllRanges();let u=new Range,v=t;for(c=C.firstChild;v+r>c.firstChild.data.length;)v-=c.firstChild.data.length,c=c.nextSibling;u.setStart(c.firstChild,v);let A=e;for(d=C.firstChild;A+r>d.firstChild.data.length;)A-=d.firstChild.data.length,d=d.nextSibling;return u.setEnd(d.firstChild,A),i.addRange(u),{start:t,startNode:c,end:e,endNode:d,startNodeOffset:v,endNodeOffset:A,collapsed:i.isCollapsed}}if(!i.anchorNode||i.anchorNode.parentNode.parentNode!==C)return;t=i.anchorOffset,e=i.focusOffset;let s=i.anchorNode.parentNode;for(;s=s.previousSibling;)t+=s.firstChild.data.length;for(s=i.focusNode.parentNode;s=s.previousSibling;)e+=s.firstChild.data.length;let o=i.anchorNode.parentNode,n=i.anchorOffset,a=i.focusNode.parentNode,f=i.focusOffset;return t>e&&([e,a,f,t,o,n]=[t,o,n,e,a,f]),{start:t,startNode:o,startNodeOffset:n,end:e,endNode:a,endNodeOffset:f,collapsed:i.isCollapsed}},Lt=t=>{let e=t/l.total*l.duration;return`${Math.floor(e/60).toFixed(0)}:${(Math.floor(e)%60).toFixed(0).padStart(2,0)}`};
//# sourceMappingURL=wavearea.js.map
