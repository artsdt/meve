import{I as u}from"./index.5b84c5bd.js";import{I as o}from"./index.77d610ea.js";import{P as m}from"./index.5b8b0d4c.js";import{R as f}from"./index.45eae9d1.js";import{B as h}from"./index.a979e08f.js";import{S as v}from"./index.67f1c326.js";import{d as l,c as y}from"./vendor.b6844a64.js";import{K as $}from"./keyboardActive.acc7335a.js";import{c as g}from"./create.d5ed34a6.js";import{c as T}from"./relation.9e421618.js";import{i as a,t as c}from"./shared.c7f62d01.js";/* empty css               *//* empty css                 */import"./index.b0ae6451.js";const b=e=>["normal","small","mini"].includes(e),V={value:{type:String},label:{type:[String,Number]},size:{type:String,default:"normal",validator:b},placeholder:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},valueFormat:{type:String,default:"HH:mm:ss"},customDisabled:{type:Function,default:()=>!1},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onClear"]},rules:{type:Array}};l.extend(y);const{createComponent:k,namespace:s}=g("time-picker"),_=Array.from({length:60},(e,t)=>t<10?"0"+t:""+t),d="HH:mm:ss",p="1970-01-01",P="YYYY-MM-DD",A=23,H=k({mixins:[$,T("form",{parentKey:"form",childrenKey:"formComponents"})],props:V,directives:{Ripple:f},data:()=>({enterPopover:!1,keyboardDisabled:!1,id:void 0,panelValues:[]}),watch:{value:{handler(){this.syncValueEffect()},immediate:!0}},computed:{invalidDisplayValue(){return this.panelValues.some((e,t)=>this.customDisabled(t,e))},displayValue(){return this.panelValues.join(":")}},mounted(){this.id=this.$refs.input.id},methods:{reset(){this.$emit("input",void 0),this.resetValidation()},validate(){return this.$refs.input.validate()},resetValidation(){this.$refs.input.resetValidation()},nextTickValidateWithTrigger(e){!this.validateTrigger.includes(e)||this.$nextTick(()=>{this.validate()})},focus(){this.$refs.input.focus()},blur(){var e;(e=this.$refs.input)==null||e.blur()},open(){this.$refs.popover.show||(this.$refs.popover.open(),this.keyboardDisabled=!1,this.scrollAllToTop(),this.focus())},close(){var e,t;!((e=this.$refs.popover)==null?void 0:e.show)||((t=this.$refs.popover)==null||t.close(),this.keyboardDisabled=!0,this.syncValueEffect(),this.blur())},handleKeydownEscape(){if(!this.invalidDisplayValue){this.confirm();return}this.close()},syncValueEffect(){this.panelValues=a(this.value)?[]:l(`${p} ${this.value}`,`${P} ${this.valueFormat}`).format(d).split(":")},toNow(){this.panelValues=l().format(d).split(":"),this.scrollAllToTop()},scrollAllToTop(){this.panelValues.forEach((e,t)=>{this.scrollToTop(t,e)})},confirm(){const e=a(this.displayValue)?void 0:l(`${p} ${this.displayValue}`).format(this.valueFormat);this.value!==e&&(this.$emit("input",e),this.$emit("change",e),this.nextTickValidateWithTrigger("onChange")),this.close(),requestAnimationFrame(this.blur)},scrollToTop(e,t){this.$refs[`scroller-${e}`].disableTransitionDuration(),requestAnimationFrame(()=>{this.$refs[`scroller-${e}`]&&(this.$refs[`scroller-${e}`].resize(),this.$refs[`scroller-${e}`].scrollTo(this.$refs[`${e}-${t}`].offsetTop))})},updatePanelValues(e,t){this.panelValues=this.panelValues.map((i,r)=>r===e?t:i)},handleClick(e){var t,i;((t=this.form)==null?void 0:t.disabled)||this.disabled||(this.$emit("click",e),this.nextTickValidateWithTrigger("onClick"),!(((i=this.form)==null?void 0:i.readonly)||this.readonly)&&this.focus())},handleFocus(e){var t,i;((t=this.form)==null?void 0:t.disabled)||this.disabled||(this.$emit("focus",e),!(((i=this.form)==null?void 0:i.readonly)||this.readonly)&&this.open())},handleBlur(e){if(this.$emit("blur",e),!this.enterPopover){if(!this.invalidDisplayValue){this.confirm();return}this.close()}},handleClear(){this.$emit("clear",void 0),this.$emit("input",void 0),this.$emit("change",void 0),this.nextTickValidateWithTrigger("onClear"),this.nextTickValidateWithTrigger("onChange")},handleMouseenter(){this.enterPopover=!0},handleMouseleave(){this.enterPopover=!1},handleTimeClick(e,t,i){i||(a(this.panelValues)&&this.toNow(),this.scrollToTop(e,t),this.updatePanelValues(e,t))},renderTimes(e){const t=this.$createElement,i=_.map(r=>{if(e===0&&c(r)>A)return;const n=this.customDisabled(e,c(r));return t("div",{class:[s("__time"),n?s("--time-disabled"):null,this.panelValues[e]===r?s("--active"):null],ref:`${e}-${r}`,directives:[{name:"ripple",value:{disabled:this.ripple||n}}],on:{click:()=>this.handleTimeClick(e,r,n)}},[r])});return i.push(t("div",{class:s("--space")})),i},renderTimePanel(){const e=this.$createElement;return e("div",{class:s("__time-panel-container")},[Array.from({length:3},(t,i)=>e(v,{class:s("__time-panel"),ref:`scroller-${i}`,attrs:{right:0,height:210}},[this.renderTimes(i)]))])},renderAppendIcon(){const e=this.$createElement,t=e(o,{attrs:{"time-picker-cover":!0,name:"clock-outline"},class:s("__clock-icon")}),i=this.clearable&&e(o,{attrs:{"time-picker-cover":!0,name:"close-circle"},class:[s("__clear-icon"),a(this.value)?s("--hide-clear-icon"):null],on:{click:this.handleClear}});return e("div",{class:s("__append-icon"),on:{click:r=>r.stopPropagation()}},[i,this.hasSlots("append-icon")?this.slots("append-icon"):t])},renderInput(){var t;return this.$createElement(u,{attrs:{"time-picker-cover":!0,value:this.displayValue,validateValue:this.value,label:this.label,validateTrigger:this.validateTrigger,rules:this.rules,placeholder:this.placeholder,size:this.size,readonly:!0,disabled:((t=this.form)==null?void 0:t.disabled)||this.disabled},class:this.invalidDisplayValue?s("--invalid-display-value"):null,ref:"input",on:{clear:this.handleClear,focus:this.handleFocus,blur:this.handleBlur,click:this.handleClick},scopedSlots:{"prepend-icon":()=>this.slots("prepend-icon"),"append-icon":this.renderAppendIcon}})}},render(){const e=arguments[0],{disabled:t,handleMouseenter:i,handleMouseleave:r}=this;return e("div",{class:[s(),t?s("--disabled"):null]},[e(m,{class:s("__popover"),attrs:{"time-picker-cover":!0,trigger:"manual",placement:"bottom-start",y:6,defaultStyle:!1},ref:"popover",on:{open:()=>this.$emit("open"),opened:()=>this.$emit("opened"),close:()=>this.$emit("close"),closed:()=>this.$emit("closed")},scopedSlots:{trigger:this.renderInput}},[e("label",{class:s("__popover-inner"),attrs:{for:this.id},on:{mouseenter:i,mouseleave:r}},[this.renderTimePanel(),e("div",{class:s("__actions"),on:{click:this.focus}},[e(h,{attrs:{type:"primary",size:"small"},on:{click:this.toNow}},["Now"]),e(h,{attrs:{type:"primary",size:"small",disabled:this.invalidDisplayValue},on:{click:this.confirm}},["OK"])])])])])}});export{H as T};
