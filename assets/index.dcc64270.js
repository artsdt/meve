import{R as p}from"./index.45eae9d1.js";import{L as f}from"./index.4bd8fdf2.js";import{c as m}from"./create.af6e9796.js";/* empty css               */const h=e=>["default","primary","info","success","warning","error"].includes(e),g=e=>["mini","normal","small","large"].includes(e),b={type:{type:String,default:"default",validator:h},size:{type:String,default:"normal",validator:g},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},loadingSize:{type:[Number,String]}};const{createComponent:y,namespace:t}=m("button"),$=y({props:b,directives:{Ripple:p},methods:{handleClick(e){this.disabled||this.loading||this.$emit("click",e)},handleTouchstart(e){this.disabled||this.loading||this.$emit("touchstart",e)}},render(){const e=arguments[0],{size:i,disabled:l,block:s,text:a,round:d,outline:r,ripple:u,type:o,loading:n,loadingSize:c}=this;return e("button",{class:[t(),"m--box",t(`--${i}`),s?`m--flex ${t("--block")}`:"m--inline-flex",t(a?`--text-${o}`:`--${o}`),t(a?"--text":"--shadow"),d?t("--round"):null,r?t("--outline"):null,!a&&l?t("--disabled"):null,a&&l?t("--text-disabled"):null],attrs:{tabIndex:"-1",disabled:l},directives:[{name:"ripple",value:{disabled:l||!u}}],on:{click:this.handleClick,touchstart:this.handleTouchstart}},[e("div",{class:t("__content")},[this.slots()]),n&&e(f,{attrs:{"button-cover":!0,svgClass:t(`--${i}-loading`),loading:n,size:c},class:t("__loading")})])}});export{$ as B,h as t};