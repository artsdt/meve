import{c as l}from"./create.af6e9796.js";/* empty css               */import{a as c}from"./shared.285cd5cf.js";import{c as h}from"./relation.9e421618.js";const p={errorMessage:{type:String}};const{createComponent:u,namespace:o}=l("form-details");function m(e,r){const{errorMessage:t}=r;return e("transition",{attrs:{name:o()}},[t&&e("div",{class:o()},[t])])}m.props=p;const d=u(m),g={label:{type:[String,Number]},value:{type:[String,Number,Boolean,Object,Array]},rules:{type:Array}},f={data:()=>({errorMessage:""}),methods:{async validateRules(e,r,t){if(!c(e)||!e.length)return!0;const s=!(await Promise.all(e.map(a=>a(r,t)))).some(a=>a!==!0?(this.errorMessage=String(a),!0):!1);return s&&(this.errorMessage=""),s},async validateWithTrigger(e,r,t,i,s){e.includes(r)&&await this.validateRules(t,i,s)},resetValidation(){this.errorMessage=""}}};const{createComponent:v,namespace:n}=l("form-item"),$=v({mixins:[f,h("form",{childrenKey:"formItems"})],props:g,watch:{errorMessage(e){this.$emit("error-message-change",e)}},methods:{async validate(){await this.validateRules(this.rules,this.value)},renderLabel(){const e=this.$createElement;if(this.label)return e("div",{class:n("__label")},[this.label])}},render(){const e=arguments[0],{errorMessage:r}=this;return e("div",{class:n()},[this.renderLabel(),this.slots(),e(d,{attrs:{errorMessage:r}})])}});export{$ as F};