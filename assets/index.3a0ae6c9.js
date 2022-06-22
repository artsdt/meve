import{R as v}from"./index.45eae9d1.js";import{d as n}from"./vendor.b6844a64.js";import{B as d}from"./index.644136aa.js";import{I as p}from"./index.c2868c0e.js";import{c as D}from"./create.aa899411.js";import{a as _}from"./shared.3ed6fcb1.js";/* empty css               */const b={value:{type:[String,Array]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},range:{type:Boolean,default:!1},valueFormat:{type:String,default:"YYYY-MM-DD"},dateStyle:{type:Object},dayStyle:{type:Object},dateTextStyle:{type:Object},customDisabled:{type:Function,default:()=>!1},ripple:{type:Boolean,default:!0}};const{createComponent:C,namespace:e}=D("calendar"),M=42,S=["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],P=C({props:b,directives:{Ripple:v},data:()=>({now:{},current:{}}),created(){this.initDayjs()},computed:{valueDate(){return this.range?(_(this.value)?this.value:[]).map(this.formatValue):this.formatValue(this.value)}},methods:{nextMonth(){this.current=this.current.month(this.current.month()+1)},prevMonth(){this.current=this.current.month(this.current.month()-1)},nextYear(){this.current=this.current.year(this.current.year()+1)},prevYear(){this.current=this.current.year(this.current.year()-1)},toNow(){this.current=n(),!this.customDisabled(this.current)&&this.change(this.range?[n()]:n())},slideTo(t){this.current=n(t)},formatValue(t){return n(t,this.valueFormat)},pickDate(t,s){if(s||(this.$emit("click",t.format(this.valueFormat)),this.readonly))return;if(!this.range){this.change(t);return}const r=[...this.valueDate],a=!r.length||r.length===2,h=r.length===1;if(a&&this.change([t]),h){const[i]=r;t.isBefore(i,"date")&&r.unshift(t),t.isAfter(i,"date")&&r.push(t),this.change(r)}},change(t){t=this.range?t.map(s=>s.format(this.valueFormat)):t.format(this.valueFormat),this.$emit("input",t),this.$emit("change",t)},initDayjs(){this.now=n(),this.current=n()},isLeapYear(t){return t%4===0&&t%100!==0||t%400===0},getDateCount(t,s){switch(s+1){case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;case 2:return this.isLeapYear(t)?29:28}return 30},getCalender(){const t=this.current.year(),s=this.current.month(),r=n().year(t).month(s).date(1).day(),a=n().year(t).month(s-1),h=this.getDateCount(a.year(),a.month()),i=n().year(t).month(s),c=this.getDateCount(i.year(),i.month()),o=n().year(t).month(s+1),u=Array.from({length:r},(y,l)=>n().year(a.year()).month(a.month()).date(h-l)).reverse(),m=Array.from({length:c},(y,l)=>n().year(i.year()).month(i.month()).date(l+1)),f=M-u.length-m.length,g=Array.from({length:f},(y,l)=>n().year(o.year()).month(o.month()).date(l+1));return[...u,...m,...g]},hasInRangeClass(t){if(this.range&&this.valueDate.length===2){const[s,r]=this.valueDate;return t.isAfter(s,"date")&&t.isBefore(r,"date")}return!1},hasPickedClass(t){return this.range?this.hasSameDate(t,this.valueDate):t.isSame(this.valueDate,"date")},hasSameDate(t,s){return s.some(r=>t.isSame(r,"date"))},renderHeader(){const t=this.$createElement;return this.hasSlots("header")?this.slots("header",{current:this.current,disabled:this.disabled,readonly:this.readonly}):t("div",{class:e("__header")},[t("div",{class:e("__current")},[this.current.format("YYYY-MM")]),t("div",{class:e("__pager")},[t(d,{attrs:{type:"primary",round:!0,disabled:this.disabled,readonly:this.readonly},on:{click:this.prevMonth}},[t(p,{attrs:{name:"arrow-left"}})]),t(d,{attrs:{type:"primary","calender-cover":!0,disabled:this.disabled,readonly:this.readonly},class:e("__today"),on:{click:this.toNow}},["\u4ECA\u5929"]),t(d,{attrs:{type:"primary",round:!0,disabled:this.disabled,readonly:this.readonly},on:{click:this.nextMonth}},[t(p,{attrs:{name:"arrow-right"}})])])])},renderCalender(){const t=this.$createElement,r=this.getCalender(this.current.year(),this.current.month()).map(a=>{const h=a.isSame(this.now,"date"),i=this.hasPickedClass(a),c=this.hasInRangeClass(a),o=this.disabled||this.customDisabled(a);return t("div",{class:[e("__date-cell"),o?e("--date-disabled"):null],style:this.dateStyle,directives:[{name:"ripple",value:{disabled:o||this.readonly||!this.ripple}}],on:{click:()=>this.pickDate(a,o)}},[t("div",{class:[e("__date-text"),h?e("--date-today"):null,i?e("--date-picked"):null,c?e("--in-range"):null,o?e("--date-text-disabled"):null,o&&(i||c||h)?e("--date-text-background-disabled"):null],style:this.dateTextStyle},[a.date()]),this.slots("extra",{date:a})])});return t("div",{class:e("__calender")},[t("div",{class:e("__day-container")},[S.map(a=>t("div",{class:e("__day"),style:this.dayStyle},[a]))]),t("div",{class:e("__date-container")},[r])])}},render(){return arguments[0]("div",{class:[e(),"m--box"]},[this.renderHeader(),this.renderCalender()])}});export{P as C};