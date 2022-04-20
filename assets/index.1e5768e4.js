import{I as a}from"./index.d779017e.js";import{P as n}from"./index.5b8b0d4c.js";import{R as h}from"./index.45eae9d1.js";import{S as p}from"./index.67f1c326.js";import{K as d}from"./keyboardActive.acc7335a.js";import{r as c,d as u,i as o}from"./shared.c7f62d01.js";import{c as f}from"./create.d5ed34a6.js";import{c as m}from"./relation.9e421618.js";import{c as y}from"./lock.6e857d47.js";/* empty css               */import"./index.77d610ea.js";/* empty css                 */import"./index.bfdd33bd.js";const g=e=>["text","password","number"].includes(e),v=e=>["normal","small","mini"].includes(e),b={value:{type:[String,Number]},label:{type:[String,Number]},options:{type:Array,default:()=>[]},size:{type:String,default:"normal",validator:v},placeholder:{type:String},type:{type:String,default:"text",validator:g},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:5},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onInput","onSelect","onClear"]},rules:{type:Array}};const{createComponent:$,namespace:i}=f("auto-complete"),K=$({mixins:[d,y("locked"),m("form",{parentKey:"form",childrenKey:"formComponents"})],props:b,directives:{Ripple:h},data:()=>({enterOptions:!1,forbidOpen:!1,keyboardDisabled:!1,scrollerHeight:0,keyboardActiveIndex:0,keyboardLastIndex:0,locked:!1}),watch:{options:{handler(){this.keyboardLastIndex=this.options.length?this.options.length-1:0,this.keyboardActiveIndex=c(this.keyboardActiveIndex,0,this.keyboardLastIndex),this.resizeScroller()},immediate:!0}},mounted(){this.resizeScroller=u(this.resizeScroller)},methods:{reset(){this.$refs.input.reset(),this.resetValidation()},validate(){this.$refs.input.validate()},resetValidation(){this.$refs.input.resetValidation()},resizeScroller(){var e;!((e=this.$refs.popover)==null?void 0:e.show)||this.$refs.scroller.resize()},nextTickValidateWithTrigger(e){!this.validateTrigger.includes(e)||this.$nextTick(()=>{this.validate()})},focus(){this.$refs.input.focus()},blur(){this.$refs.input.blur()},open(){!this.options.length||this.forbidOpen||this.$refs.popover.show||(this.$refs.popover.open(),this.keyboardActiveIndex=0,this.keyboardDisabled=!1,this.resizeScroller(),this.$refs.scroller.scrollToTop())},close(){var e,t;!((e=this.$refs.popover)==null?void 0:e.show)||((t=this.$refs.popover)==null||t.close(),this.keyboardDisabled=!0)},lockOnce(){this.locked=!0,setTimeout(()=>{this.locked=!1})},handleKeydownEnter(e){if(!this.$refs.popover.show)return;this.lockOnce();const{value:t}=this.options[e];this.$emit("input",t),this.$emit("select",t),this.nextTickValidateWithTrigger("onSelect"),setTimeout(this.close)},handleKeydownArrow(){if(!this.$refs.popover.show)return;const e=this.$refs[`option-${this.keyboardActiveIndex}`].offsetTop,t=this.$refs[`option-${this.keyboardActiveIndex}`].offsetHeight,s=this.$refs.scroller.getScrollTop(),r=this.$refs.scroller.$el.offsetHeight;e<s&&this.$refs.scroller.scrollTo(e),e+t>r&&this.$refs.scroller.scrollTo(e)},handleKeydownEscape(){!this.$refs.popover.show||this.close()},handleClick(e){this.$emit("click",e)},handleFocus(e){var t,s;this.$emit("focus",e),!(((t=this.form)==null?void 0:t.disabled)||this.disabled||((s=this.form)==null?void 0:s.readonly)||this.readonly)&&(o(this.value)?this.close():this.open())},handleBlur(e){this.$emit("blur",e),!this.enterOptions&&this.close()},handleOptionClick(e){this.$emit("input",e.value),this.$emit("select",e.value),this.nextTickValidateWithTrigger("onSelect"),this.forbidOpen=!0,this.close(),setTimeout(()=>{this.forbidOpen=!1})},handleInput(e){this.$emit("input",e),o(e)?this.close():this.open()},handleChange(e){this.$emit("change",e)},handleClear(e){this.$emit("clear",e)},handleMouseenter(){this.enterOptions=!0},handleMouseleave(){this.enterOptions=!1},handleOptionMouseenter(e){this.keyboardActiveIndex=e},renderOptions(){var t;const e=this.$createElement;return e("label",{attrs:{for:(t=this.$refs.input)==null?void 0:t.id},class:[i("__options"),i(`--${this.size}-options`)],on:{mouseenter:this.handleMouseenter,mouseleave:this.handleMouseleave}},[e(p,{ref:"scroller",attrs:{height:200}},[this.options.map((s,r)=>e("div",{ref:`option-${r}`,class:[i("__option"),i(`--${this.size}-option`),r===this.keyboardActiveIndex?i("--active"):null],on:{mouseenter:()=>this.handleOptionMouseenter(r),click:l=>this.handleOptionClick(s,r,l)},directives:[{name:"ripple",value:!0}]},[s.label]))])])},renderInput(){return this.$createElement(a,{ref:"input",attrs:{value:this.value,label:this.label,type:this.type,textarea:this.textarea,rows:this.rows,maxlength:this.maxlength,clearable:this.clearable,resize:this.resize,validateTrigger:this.validateTrigger,rules:this.rules,placeholder:this.placeholder,size:this.size,readonly:this.readonly,disabled:this.disabled},on:{input:this.handleInput,change:this.handleChange,clear:this.handleClear,focus:this.handleFocus,blur:this.handleBlur,click:this.handleClick},scopedSlots:{"prepend-icon":()=>this.slots("prepend-icon"),"append-icon":()=>this.slots("append-icon")}})}},render(){const e=arguments[0];return e("div",{class:i(),on:{touchstart:t=>t.stopPropagation()}},[e(n,{class:i("__popover"),attrs:{"auto-complete-cover":!0,trigger:"manual",y:6,sameWidth:!0,defaultStyle:!1},ref:"popover",on:{open:()=>this.$emit("open"),opened:()=>this.$emit("opened"),close:()=>this.$emit("close"),closed:()=>this.$emit("closed")},scopedSlots:{trigger:this.renderInput}},[this.renderOptions()])])}});export{K as A};