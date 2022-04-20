import{I as y}from"./index.43a57353.js";import{B as b}from"./index.a979e08f.js";import{P as _}from"./index.505f40ab.js";import{I as h}from"./index.77d610ea.js";import{F as $}from"./index.bfdd33bd.js";import{c as P}from"./create.d5ed34a6.js";import{c as R}from"./relation.9e421618.js";import{t as m,m as g}from"./shared.c7f62d01.js";/* empty css               */const x={value:{type:Array,default:()=>[]},label:{type:[String,Number]},accept:{type:String,default:"*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},hideList:{type:Boolean,default:!1}};const{createComponent:k,namespace:a}=P("uploader");let w=0;const z=k({mixins:[R("form",{parentKey:"form",childrenKey:"formComponents"})],props:x,data:()=>({callReset:!1,errorMessage:""}),computed:{files(){const{value:e,hideList:t}=this;return t?[]:e}},watch:{value:{deep:!0,handler(){!this.callReset&&this.nextTickValidateWithTrigger("onChange"),this.callReset=!1}}},methods:{reset(){this.callReset=!0,this.$emit("input",[]),this.resetValidation()},validate(){this.$refs.formItem.validate()},resetValidation(){this.$refs.formItem.resetValidation()},getSuccess(){return this.value.filter(e=>e.state==="success")},getError(){return this.value.filter(e=>e.state==="error")},getLoading(){return this.value.filter(e=>e.state==="loading")},nextTickValidateWithTrigger(e){this.$nextTick(()=>{var t;(t=this.$refs.formItem)==null||t.validateWithTrigger(this.validateTrigger,e,this.rules,this.value,{getSuccess:this.getSuccess,getError:this.getError,getLoading:this.getLoading})})},handleErrorMessageChange(e){this.errorMessage=e},triggerAction(){this.$refs.input.click()},getFiles(e){const t=e.target,{files:r}=t;return Array.from(r)},createMFile(e){return{id:w++,url:"",cover:"",fit:"cover",name:e.name,state:void 0,progress:0,file:e}},resolver(e){return new Promise(t=>{const r=new FileReader;r.onload=()=>{const s=r.result;e.file.type.startsWith("image")&&(e.cover=s),e.url=s,t(e)},r.readAsDataURL(e.file)})},getResolvers(e){return e.map(this.resolver)},getBeforeReaders(e){return e.map(t=>new Promise(r=>{const s=this.$listeners["before-read"]?this.$listeners["before-read"](t):!0;Promise.resolve(s).then(i=>r({valid:i,mFile:t}))}))},async handleChange(e){const{maxsize:t,maxlength:r,value:s,readonly:i,disabled:u,form:n}=this;if((n==null?void 0:n.disabled.value)||(n==null?void 0:n.readonly.value)||u||i)return;const p=l=>l.filter(d=>d.file.size>m(t)?(this.$emit("oversize",d),!1):!0),f=l=>{const d=Math.min(l.length,m(r)-s.length);return l.slice(0,d)};let o=this.getFiles(e).map(this.createMFile);o=t!=null?p(o):o,o=r!=null?f(o):o;const v=await Promise.all(this.getResolvers(o)),c=(await Promise.all(this.getBeforeReaders(v))).filter(({valid:l})=>l).map(({mFile:l})=>l);this.$emit("input",[...s,...c]),e.target.value="",c.forEach(l=>{this.$emit("after-read",l)})},renderImage(e){var r;const t=this.$createElement;return e.cover?t(y,{class:a("__cover"),attrs:{"uploader-cover":!0,src:e.cover,fit:e.fit,previewDisabled:!this.previewed||((r=this.form)==null?void 0:r.disabled)||this.disabled},on:{click:s=>s.stopPropagation()}}):t(h,{class:a("__cover"),attrs:{"uploader-cover":!0,name:"file"}})},async handleRemove(e){const{disabled:t,readonly:r,value:s,form:i}=this;if((i==null?void 0:i.disabled.value)||(i==null?void 0:i.readonly.value)||t||r||this.$listeners["before-remove"]&&!await this.$listeners["before-remove"](e))return;const u=s.filter(n=>n!==e);this.$emit("remove",e),this.nextTickValidateWithTrigger("onRemove"),this.$emit("input",u)},handleFileClick(e){g(e.url)&&window.open(e.url)},renderFiles(){const e=this.$createElement;return this.files.map(t=>{var r,s;return e("div",{class:[a("__file"),t.state==="success"?a("--success"):null,t.state==="error"?a("--error"):null,((r=this.form)==null?void 0:r.disabled)||this.disabled?a("--disabled"):null],key:t.id,on:{click:()=>this.handleFileClick(t)}},[this.renderImage(t),e("div",{class:a("__file-profile")},[e("div",{class:[a("__file-name"),g(t.url)?a("--link"):null]},[(s=t.name)!=null?s:t.url]),e(_,{class:a("__file-progress"),directives:[{name:"show",value:t.state==="loading"}],attrs:{"uploader-cover":!0,value:t.progress}})]),e(b,{class:a("__remove-button"),attrs:{"uploader-cover":!0,text:!0,round:!0},on:{click:()=>this.handleRemove(t)}},[e(h,{class:a("__remove-button-icon"),attrs:{"uploader-cover":!0,name:"close"}})])])})}},render(){var i,u;const e=arguments[0],{label:t,value:r,rules:s}=this;return e($,{ref:"formItem",attrs:{label:t,value:r,rules:s},on:{"error-message-change":this.handleErrorMessageChange}},[e("div",{class:[a(),"m--box"]},[e("input",{class:a("__action-input"),ref:"input",attrs:{type:"file",multiple:this.multiple,accept:this.accept,capture:this.capture,disabled:this.disabled||((i=this.form)==null?void 0:i.disabled),readOnly:this.readonly||((u=this.form)==null?void 0:u.readonly)},on:{change:this.handleChange}}),e("div",{class:a("__action"),on:{click:this.triggerAction}},[this.slots()]),e("div",{class:a("__file-list")},[this.renderFiles()])])])}});export{z as U};