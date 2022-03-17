import{I as m}from"./index.d9ebbb80.js";import{F as f}from"./index.69ee1880.js";import{c as g}from"./create.af6e9796.js";import{i as h}from"./shared.285cd5cf.js";import{c as b}from"./relation.9e421618.js";/* empty css               */const x=e=>["text","password","number"].includes(e),y=e=>["normal","small","mini"].includes(e),v={value:{type:[String,Number]},label:{type:[String,Number]},size:{type:String,default:"normal",validator:y},placeholder:{type:String},type:{type:String,default:"text",validator:x},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:5},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},validateValue:{type:[String,Number]}};const{createComponent:I,namespace:i}=g("input");let $=0;const B=I({mixins:[b("form",{parentKey:"form",childrenKey:"formComponents"})],props:v,data:()=>({id:`m-input-${$++}`,isFocus:!1,errorMessage:""}),computed:{maxlengthText(){const{maxlength:e,value:t}=this;return h(t)?`0 / ${e}`:`${String(t).length} / ${e}`}},methods:{reset(){this.$emit("input",void 0),this.resetValidation()},validate(){this.$refs.formItem.validate()},resetValidation(){this.$refs.formItem.resetValidation()},focus(){this.$refs.input.focus()},blur(){this.$refs.input.blur()},nextTickValidateWithTrigger(e){this.$nextTick(()=>{var t;(t=this.$refs.formItem)==null||t.validateWithTrigger(this.validateTrigger,e,this.rules,this.value)})},handleClick(e){var t;((t=this.form)==null?void 0:t.disabled)||this.disabled||(this.$emit("click",e),this.nextTickValidateWithTrigger("onClick"))},handleErrorMessageChange(e){this.errorMessage=e},handleFocus(){this.isFocus=!0,this.$emit("focus")},handleBlur(){this.isFocus=!1,this.$emit("blur")},handleClear(){var e,t;((e=this.form)==null?void 0:e.disabled)||((t=this.form)==null?void 0:t.readonly)||this.disabled||this.readonly||(this.$emit("input",void 0),this.$emit("clear",void 0),this.nextTickValidateWithTrigger("onClear"))},handleInput(e){this.$emit("input",e.target.value),this.nextTickValidateWithTrigger("onInput")},handleChange(e){this.$emit("change",e.target.value),this.nextTickValidateWithTrigger("onChange")},renderClearIcon(){const e=this.$createElement;if(this.clearable)return e(m,{attrs:{"input-cover":!0,name:"close-circle"},class:[i("__clear-icon"),h(this.value)?null:i("--clear-icon-visible")],on:{click:this.handleClear}})},renderPrependIcon(){if(this.hasSlots("prepend-icon"))return this.slots("prepend-icon")},renderAppendIcon(){if(this.hasSlots("append-icon"))return this.slots("append-icon")},renderMaxlengthText(){const e=this.$createElement;if(this.maxlength!=null)return e("div",{class:i("__maxlength")},[this.maxlengthText])},renderInput(){var t,r,a,s;const e=this.$createElement;return this.textarea?e("textarea",{attrs:{id:this.id,autoComplete:"off",rows:this.rows,maxLength:this.maxlength,placeholder:this.placeholder,disabled:((t=this.form)==null?void 0:t.disabled)||this.disabled,readOnly:((r=this.form)==null?void 0:r.readonly)||this.readonly},ref:"input",class:[i("__textarea"),i(`--${this.size}-textarea`)],domProps:{value:this.value},on:{focus:this.handleFocus,blur:this.handleBlur,input:this.handleInput,change:this.handleChange}}):e("input",{ref:"input",attrs:{id:this.id,autoComplete:"off",type:this.type,maxLength:this.maxlength,placeholder:this.placeholder,disabled:((a=this.form)==null?void 0:a.disabled)||this.disabled,readOnly:((s=this.form)==null?void 0:s.readonly)||this.readonly},class:i("__input"),domProps:{value:this.value},on:{focus:this.handleFocus,blur:this.handleBlur,input:this.handleInput,change:this.handleChange}})}},render(){const e=arguments[0],{isFocus:t,disabled:r,textarea:a,resize:s,value:o,validateValue:n,rules:d,label:u,errorMessage:c,form:l,size:p}=this;return e(f,{ref:"formItem",attrs:{label:u,value:n!=null?n:o,rules:d},on:{"error-message-change":this.handleErrorMessageChange}},[e("div",{class:[i(),"m--box",i(`--${p}`),t?i("--outline"):null,(l==null?void 0:l.disabled)||r?i("--disabled"):null,a&&s&&!r?i("--resizeable"):null,c?i("--validation-error-border"):null],style:{height:a?"auto":void 0},on:{click:this.handleClick}},[this.renderPrependIcon(),this.renderInput(),this.renderClearIcon(),this.renderAppendIcon(),this.renderMaxlengthText()])])}});export{B as I};