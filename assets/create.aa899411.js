import{k as a,f as l,g as c,a as u}from"./shared.3ed6fcb1.js";const r={methods:{slots(s="default",t){const{$slots:e,$scopedSlots:n}=this,o=n[s];return o?o(t):e[s]},hasSlots(s="default"){return this.$scopedSlots[s]||this.$slots[s]}}};function p(s){var n,o;const t=(o=(n=s.scopedSlots)!=null?n:s.data.scopedSlots)!=null?o:{},e=s.slots();return Object.keys(e).forEach(i=>{t[i]||(t[i]=()=>e[i])}),t}function d(s){return{functional:!0,props:s.props,render:(t,e)=>s(t,e.props,p(e),e)}}function m(s){s.component(this.name,this)}function f(s,t){return l(t)?t=d(t):t.mixins?t.mixins.push(r):t.mixins=[r],t.name=`M${c(s)}`,t.install=m,t}function $(s){return{createComponent(t){return f(s,t)},namespace:(t="")=>`m-${a(s)}${t}`}}const h=["ref","key","style","class","attrs","refInFor","nativeOn","directives","staticClass","staticStyle"];function C(s){return h.reduce((t,e)=>(s.data[e]&&(t[e==="nativeOn"?"on":e]=s.data[e]),t),{})}function b(s,t,...e){const n=s.listeners[t];u(n)?n.forEach(o=>o(...e)):n==null||n(...e)}export{$ as c,b as e,C as i};