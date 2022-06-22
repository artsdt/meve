import{R as g}from"./index.45eae9d1.js";import{F as f}from"./index.f9508539.js";import{c as x}from"./create.aa899411.js";import{c as k}from"./relation.9e421618.js";/* empty css               */const v=e=>["normal","small","mini"].includes(e),y={value:{default:!1},label:{type:[String,Number]},checkedValue:{default:!0},uncheckedValue:{default:!1},indeterminate:{type:Boolean,default:!1},size:{type:String,default:"normal",validator:v},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array}};const{createComponent:V,namespace:i}=x("checkbox"),z=V({props:y,mixins:[k("checkboxGroup",{parentKey:"checkboxGroup",childrenKey:"checkboxes"}),k("form",{parentKey:"form",childrenKey:"formComponents"})],directives:{Ripple:g},data:()=>({localValue:!1,errorMessage:""}),computed:{checked(){return this.localValue===this.checkedValue},maximum(){return this.checkboxGroup?this.checkboxGroup.checkedCount>=Number(this.checkboxGroup.max):!1}},watch:{value:{handler(e){this.localValue=e},immediate:!0}},methods:{reset(){this.$emit("input",this.uncheckedValue),this.resetValidation()},validate(){return this.$refs.formItem.validate()},resetValidation(){this.$refs.formItem.resetValidation()},toggle(e){const{uncheckedValue:a,checkedValue:s}=this;![a,s].includes(e)&&(e=this.checked?a:s),this.change(e)},nextTickValidateWithTrigger(e){this.$nextTick(()=>{var a;(a=this.$refs.formItem)==null||a.validateWithTrigger(this.validateTrigger,e,this.rules,this.value)})},change(e){var a,s;this.localValue=e,this.$emit("input",e),this.$emit("change",e),this.nextTickValidateWithTrigger("onChange"),e===this.checkedValue?(a=this.checkboxGroup)==null||a.onChecked(this.checkedValue):(s=this.checkboxGroup)==null||s.onUnchecked(this.checkedValue)},handleClick(e){var h,r;const{disabled:a,readonly:s,uncheckedValue:c,checkedValue:d}=this;((h=this.form)==null?void 0:h.disabled)||a||(this.$emit("click",e),this.nextTickValidateWithTrigger("onClick"),!(((r=this.form)==null?void 0:r.readonly)||s)&&(!this.checked&&this.maximum||this.change(this.checked?c:d)))},sync(e){this.localValue=e.includes(this.checkedValue)?this.checkedValue:this.uncheckedValue},handleErrorMessageChange(e){this.errorMessage=e},getStateClasses(){return this.indeterminate?[i(`--${this.size}-svg-indeterminate`),i("--active")]:this.checked?[i(`--${this.size}-svg`),i("--active")]:[i("--border-visible")]}},render(){const e=arguments[0],{label:a,value:s,rules:c,checked:d,ripple:h,size:r,handleClick:m,disabled:n,readonly:o,form:t,errorMessage:u,indeterminate:p,checkboxGroup:l,handleErrorMessageChange:b}=this;return e(f,{attrs:{"checkbox-cover":!0,label:a,value:s,rules:c},ref:"formItem",on:{"error-message-change":b}},[e("label",{class:[i(),"m--box",i(`--${r}`),(t==null?void 0:t.disabled)||n?i("--text-disabled"):null,(l==null?void 0:l.errorMessage)||u?i("--text-error"):null]},[e("input",{class:i("__input"),attrs:{type:"checkbox",disabled:(t==null?void 0:t.disabled)||n,readOnly:(t==null?void 0:t.readonly)||o},on:{click:m}}),e("div",{class:[i("__checkbox-container"),i(`--${r}-checkbox-container`)],directives:[{name:"ripple",value:{disabled:!h||n||o||(t==null?void 0:t.disabled)||(t==null?void 0:t.readonly)}}]},[e("div",{class:[i("__checkbox"),i(`--${r}-checkbox`),...this.getStateClasses(),(l==null?void 0:l.errorMessage)||u?i(d||p?"--background-error":"--border-error"):null,(t==null?void 0:t.disabled)||n?i("--disabled"):null]})]),e("div",{class:i("__label")},[this.slots()])])])}});export{z as C};