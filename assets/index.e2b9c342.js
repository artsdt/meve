import{F as m}from"./index.69ee1880.js";import{S as y}from"./index.a42a7a69.js";import{c as p}from"./create.af6e9796.js";import{a as k,c as h}from"./relation.9e421618.js";/* empty css               */import{R as b}from"./index.45eae9d1.js";const V=e=>["horizontal","vertical"].includes(e),$={value:{default:void 0},label:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:V},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array}},{createComponent:T,namespace:C}=p("radio-group"),x={horizontal:"row",vertical:"column"},P=T({props:$,mixins:[k("radioGroup",{childrenKey:"radios"}),h("form",{parentKey:"form",childrenKey:"formComponents"})],data:()=>({errorMessage:""}),watch:{value(){this.syncRadios()},radios(){this.syncRadios()}},methods:{reset(){this.$emit("input",void 0),this.resetValidation()},validate(){this.$refs.formItem.validate()},resetValidation(){this.$refs.formItem.resetValidation()},nextTickValidateWithTrigger(e){this.$nextTick(()=>{var t;(t=this.$refs.formItem)==null||t.validateWithTrigger(this.validateTrigger,e,this.rules,this.value)})},syncRadios(){this.radios.forEach(({sync:e})=>e(this.value))},onToggle(e){this.$emit("input",e),this.$emit("change",e),this.nextTickValidateWithTrigger("onChange")},handleErrorMessageChange(e){this.errorMessage=e}},render(){const e=arguments[0],{label:t,value:i,rules:o,direction:s,handleErrorMessageChange:n}=this;return e(m,{attrs:{"radio-group-cover":!0,label:t,value:i,rules:o},ref:"formItem",on:{"error-message-change":n}},[e(y,{class:C(),attrs:{"radio-group-cover":!0,direction:x[s]}},[this.slots()])])}}),M=e=>["normal","small","mini"].includes(e),R={value:{default:!1},label:{type:[String,Number]},checkedValue:{default:!0},uncheckedValue:{default:!1},size:{type:String,default:"normal",validator:M},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array}};const{createComponent:I,namespace:r}=p("radio"),A=I({props:R,mixins:[h("radioGroup",{parentKey:"radioGroup",childrenKey:"radios"}),h("form",{parentKey:"form",childrenKey:"formComponents"})],directives:{Ripple:b},data:()=>({localValue:!1,errorMessage:""}),computed:{checked(){return this.localValue===this.checkedValue}},watch:{value:{handler(e){this.localValue=e},immediate:!0}},methods:{reset(){this.$emit("input",this.uncheckedValue),this.resetValidation()},validate(){this.$refs.formItem.validate()},resetValidation(){this.$refs.formItem.resetValidation()},toggle(e){const{uncheckedValue:t,checkedValue:i}=this;![t,i].includes(e)&&(e=this.checked?t:i),this.change(e)},nextTickValidateWithTrigger(e){this.$nextTick(()=>{var t;(t=this.$refs.formItem)==null||t.validateWithTrigger(this.validateTrigger,e,this.rules,this.value)})},change(e){var t;this.radioGroup&&this.localValue===this.checkedValue||(this.localValue=e,this.$emit("input",e),this.$emit("change",e),(t=this.radioGroup)==null||t.onToggle(this.checkedValue),this.nextTickValidateWithTrigger("onChange"))},handleClick(e){var n,l;const{disabled:t,readonly:i,uncheckedValue:o,checkedValue:s}=this;((n=this.form)==null?void 0:n.disabled)||t||(this.$emit("click",e),this.nextTickValidateWithTrigger("onClick"),!(((l=this.form)==null?void 0:l.readonly)||i)&&this.change(this.checked?o:s))},sync(e){this.localValue=e===this.checkedValue?this.checkedValue:this.uncheckedValue},handleErrorMessageChange(e){this.errorMessage=e}},render(){const e=arguments[0],{label:t,value:i,rules:o,checked:s,ripple:n,size:l,handleClick:f,disabled:c,readonly:u,form:a,errorMessage:g,radioGroup:d,handleErrorMessageChange:v}=this;return e(m,{attrs:{"radio-cover":!0,label:t,value:i,rules:o},ref:"formItem",on:{"error-message-change":v}},[e("label",{class:[r(),"m--box",r(`--${l}`),(a==null?void 0:a.disabled)||c?r("--text-disabled"):null,(d==null?void 0:d.errorMessage)||g?r("--text-error"):null]},[e("input",{class:r("__input"),attrs:{type:"radio",disabled:(a==null?void 0:a.disabled)||c,readOnly:(a==null?void 0:a.readonly)||u},on:{click:f}}),e("div",{class:[r("__radio-container"),r(`--${l}-radio-container`)],directives:[{name:"ripple",value:{disabled:!n||c||u||(a==null?void 0:a.disabled)||(a==null?void 0:a.readonly)}}]},[e("div",{class:[r("__radio"),r(`--${l}-radio`),s?r(`--${l}-svg`):null,s?null:r("--border-visible"),s?r("--checked"):null,(d==null?void 0:d.errorMessage)||g?r(s?"--background-error":"--border-error"):null,(a==null?void 0:a.disabled)||c?r("--disabled"):null]})]),e("div",{class:r("__label")},[this.slots()])])])}});export{P as R,A as a};