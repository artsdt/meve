import{L as W}from"./index.4fc42c55.js";import{I as g}from"./index.77d610ea.js";import{C as T}from"./index.d8f1c103.js";import{t as G,s as Q,a as C}from"./elements.024da98f.js";import{c as X}from"./create.d5ed34a6.js";import{e as Y}from"./animation.106839c4.js";import{q as Z,a as tt,p as st,s as f,e as b,v as rt,l as et,u as S}from"./shared.c7f62d01.js";/* empty css               */import"./index.45eae9d1.js";import{n as v}from"./main.36095777.js";import{B as o}from"./index.a979e08f.js";import{M as w}from"./index.ffe64384.js";import{P as K}from"./index.ab09679e.js";import{I as z}from"./index.d779017e.js";import"./vendor.b6844a64.js";import"./index.bfdd33bd.js";import"./relation.9e421618.js";import"./index.5b31b8c0.js";import"./components.b6372a71.js";import"./index.da2e691a.js";import"./index.5b8b0d4c.js";import"./index.2ccc5c40.js";import"./zIndex.a6423b4e.js";import"./index.67f1c326.js";import"./lock.6e857d47.js";/* empty css                 */import"./index.f0a75a29.js";import"./keyboardActive.acc7335a.js";/* empty css              */const at=t=>["normal","small"].includes(t),nt={rowKey:{type:String,default:"id"},selectedKeys:{type:Array,default:()=>[]},size:{type:String,validator:at,default:"normal"},tableLayout:{type:String,default:"auto"},childrenKey:{type:String,default:"children"},scroller:{type:Object},border:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]},indent:{type:[Number,String],default:20}};const{createComponent:lt,namespace:n}=X("table"),_=lt({props:nt,data:()=>({loading:!1,hasError:!1,allSelected:!1,data:[],sorters:{},expandedRowKeys:[],keyMap:null}),computed:{allRowKeys(){return this.getAllRows().map(t=>t[this.rowKey])},indentNum(){return G(this.indent)}},watch:{data:{handler(){this.syncAllSelected(),this.expandedRowKeys=[],this.keyMap=Z(this.data,this.rowKey)},deep:!0,immediate:!0},selectedKeys:{handler(){this.syncAllSelected()},immediate:!0}},created(){this.load(!0)},methods:{async load(t=!1){var r,s;this.scroller!=null&&!t&&this.scrollToTop();try{this.hasError=!1,this.loading=!0,this.data=await Promise.resolve((s=(r=this.$listeners).load)==null?void 0:s.call(r,{sorters:this.sorters}))}catch{this.hasError=!0}finally{this.loading=!1}},getData(){return this.data},syncAllSelected(){this.allSelected=this.data.length>0&&this.allRowKeys.every(t=>this.selectedKeys.includes(t))},normalizeColumns(){return this.columns.filter(t=>t.key||this.isValidSelection(t.selection))},scrollToTop(){this.$nextTick(()=>{Q(this.$refs["table-container"],{top:0,animation:Y})})},hasChildren(t){const r=t[this.childrenKey];return tt(r)&&r.length>0},isValidSelection(t){return st(t)||t===!0},findDisplayRows(t){if(!this.hasChildren(t)||!this.expandedRowKeys.includes(t[this.rowKey]))return[];const r=[];return t[this.childrenKey].forEach(e=>{r.push(e),r.push(...this.findDisplayRows(e))}),r},findChildrenRows(t){if(!this.hasChildren(t))return[];const r=[];return t[this.childrenKey].forEach(e=>{r.push(e),r.push(...this.findChildrenRows(e))}),r},findChildrenLeafRows(t){if(!this.hasChildren(t))return[];const r=[];return t[this.childrenKey].forEach(e=>{this.hasChildren(e)||r.push(e),r.push(...this.findChildrenLeafRows(e))}),r},getAllRows(){return this.data.reduce((t,r)=>(t.push(r),t.push(...this.findChildrenRows(r)),t),[])},handleSorterClick(t){const{sorter:{asc:r="asc",desc:s="desc"},key:e}=t,a=this.sorters[e];a==null?(this.sorters={},this.$set(this.sorters,e,r)):a===r?this.$set(this.sorters,e,s):a===s&&this.$delete(this.sorters,e),this.load()},onRowSelectChange(t,r){let s=f(this.keyMap,r[this.rowKey]);for(;s;)s[this.childrenKey].some(a=>t.includes(a[this.rowKey]))?t.push(s[this.rowKey]):b(t,s[this.rowKey]),s=f(this.keyMap,s[this.rowKey])},renderIndent(t){return this.$createElement("span",{class:n("__indent"),style:{marginRight:`${t*this.indentNum}px`}})},renderTableColumns(t){const r=this.$createElement;return this.normalizeColumns(this.columns).map(s=>{var k,x;const e=this.data.indexOf(t),{colSpan:a=1,rowSpan:l=1}=(x=(k=s.bodySpan)==null?void 0:k.call(s,e,t,s))!=null?x:{};if(a===0||l===0)return;const{style:p={},sticky:j,key:c}=s,h=t[c],u=t[this.rowKey],L=f(this.keyMap,u),N=this.findChildrenRows(t),m=[u,...N.map(i=>i[this.rowKey])],O=i=>{const d=[...this.selectedKeys];i?d.push(...m):m.forEach($=>{b(d,$)}),L&&this.onRowSelectChange(d,t),this.$emit("update:selected-keys",S(d))},V=()=>{if(c===this.rowKey&&this.hasChildren(t))return r(g,{class:[n("__expanded-icon"),this.expandedRowKeys.includes(u)?n("--expanded"):null],attrs:{"table-cover":!0,name:"chevron-right"},on:{click:()=>et(this.expandedRowKeys,u)}})},q=()=>{const i=m.every(y=>this.selectedKeys.includes(y)),U=this.findChildrenLeafRows(t).some(y=>this.selectedKeys.includes(y[this.rowKey]))&&!i;return r(T,{attrs:{indeterminate:U,value:i},on:{change:O}})},J=()=>this.hasSlots(c)?this.slots(c,{row:t,column:s}):this.isValidSelection(s.selection)?q():r("span",[h]);return r("td",{class:[n("__td"),n(`--${this.size}-cell`),this.border?n("--td-or-th-border"):null,j?n("--sticky"):null],attrs:{rowSpan:l,colSpan:a},style:p},[c===this.rowKey&&this.renderIndent(rt(this.keyMap,t[this.rowKey])),V(),J()])})},renderTHs(){const t=this.$createElement;return this.normalizeColumns(this.columns).map(r=>{const{style:s={},headColSpan:e=1,title:a,sticky:l}=r;if(e===0)return;const p=c=>{const h=[...this.selectedKeys];c?h.push(...this.allRowKeys):this.allRowKeys.forEach(u=>{b(h,u)}),this.$emit("update:selected-keys",S(h))},j=()=>{if(this.isValidSelection(r.selection)){const c=!this.allSelected&&this.selectedKeys.length>=1;return t(T,{attrs:{value:this.allSelected,indeterminate:c},on:{change:p}})}return t("div",{class:n("__th-cell")},[t("span",[a]),this.renderSorter(r)])};return t("th",{class:[n("__th"),n(`--${this.size}-cell`),this.border?n("--td-or-th-border"):null,l?n("--sticky"):null],attrs:{colSpan:e},style:s},[j()])})},renderSorter(t){const r=this.$createElement;if(t.sorter==null||t.sorter===!1)return;const{sorter:{asc:s="asc",desc:e="desc"}}=t,a=this.sorters[t.key];return r("div",{class:n("__sorter"),on:{click:()=>this.handleSorterClick(t)}},[r(g,{class:[n("__sorter-up"),a===s?n("--sorter-active"):null],attrs:{"table-cover":!0,name:"menu-up"}}),r(g,{class:[n("__sorter-down"),a===e?n("--sorter-active"):null],attrs:{"table-cover":!0,name:"menu-down"}})])},renderHead(){const t=this.$createElement;return t("thead",{class:[n("__thead"),this.scroller==null?null:n("--thead-sticky")]},[t("tr",{class:n("__tr")},[this.renderTHs()])])},renderBody(){return this.$createElement("tbody",[this.renderRows()])},renderRows(){const t=this.$createElement;return this.data.reduce((s,e)=>(s.push(e),s.push(...this.findDisplayRows(e)),s),[]).map(s=>t("tr",{class:n("__tr"),key:this.rowKey!=null?s[this.rowKey]:void 0},[this.renderTableColumns(s)]))},renderEmptyOrError(){const t=this.$createElement;if(this.hasError)return t("div",{class:n("__error"),on:{click:this.load}},["\u52A0\u8F7D\u9519\u8BEF\uFF0C\u70B9\u51FB\u91CD\u8BD5"]);if(this.data.length===0&&!this.loading)return t("div",{class:n("__empty")},["\u6682\u65E0\u6570\u636E"])},renderFooter(){const t=this.$createElement;if(this.hasSlots("footer"))return t("div",{class:n("__footer")},[this.slots("footer")])}},render(){const t=arguments[0],{loading:r,border:s,scroller:e,tableLayout:a}=this;return t("div",{class:[n(),"m--box"]},[t(W,{class:n("__loading"),attrs:{loading:r,"table-cover":!0}},[t("div",{ref:"table-container",class:[n("__table-container"),e==null?null:n("--scroller")],style:{maxHeight:e==null?void 0:C(e.y)}},[t("table",{class:[n("__table"),s?n("--table-border"):null],style:{tableLayout:e!=null?"fixed":a,minWidth:e==null?void 0:"100%",width:e==null?void 0:C(e.x)}},[this.renderHead(),this.renderBody()])]),this.renderEmptyOrError(),this.renderFooter()])])}});var _t=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{attrs:{columns:t.columns},on:{load:t.load}})},pt=[];function vt(t,r){return Array.from({length:r},(s,e)=>{const a=(t-1)*r+1+e,l=`Title: ${a}`;return{id:a,title:l,text:"Hello Meve!"}})}const ct={components:{[_.name]:_},data:()=>({columns:[{key:"id",title:"ID"},{key:"title",title:"Title"},{key:"text",title:"Text"}]}),methods:{load(){return new Promise(t=>{setTimeout(()=>t(vt(1,3)),300)})}}},E={};var ut=v(ct,_t,pt,!1,it,null,null,null);function it(t){for(let r in E)this[r]=E[r]}var ot=function(){return ut.exports}(),ht=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{attrs:{size:"small",columns:t.columns},on:{load:t.load}})},dt=[];function jt(t,r){return Array.from({length:r},(s,e)=>{const a=(t-1)*r+1+e,l=`Title: ${a}`;return{id:a,title:l,text:"Hello Meve!"}})}const mt={components:{[_.name]:_},data:()=>({columns:[{key:"id",title:"ID"},{key:"title",title:"Title"},{key:"text",title:"Text"}]}),methods:{load(){return new Promise(t=>{setTimeout(()=>t(jt(1,3)),300)})}}},R={};var yt=v(mt,ht,dt,!1,gt,null,null,null);function gt(t){for(let r in R)this[r]=R[r]}var ft=function(){return yt.exports}(),bt=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{attrs:{border:"",columns:t.columns},on:{load:t.load}})},wt=[];function kt(t,r){return Array.from({length:r},(s,e)=>{const a=(t-1)*r+1+e,l=`Title: ${a}`;return{id:a,title:l,text:"Hello Meve!"}})}const xt={components:{[_.name]:_},data:()=>({columns:[{key:"id",title:"ID"},{key:"title",title:"Title",headColSpan:2,bodySpan(t){if(t===1)return{colSpan:2};if(t===3)return{rowSpan:2}}},{key:"text",title:"Text",headColSpan:0,bodySpan(t){if(t===1)return{colSpan:0};if(t===4)return{rowSpan:0}}}]}),methods:{load(){return new Promise(t=>{setTimeout(()=>t(kt(1,5)),300)})}}},M={};var $t=v(xt,bt,wt,!1,Tt,null,null,null);function Tt(t){for(let r in M)this[r]=M[r]}var Ct=function(){return $t.exports}(),St=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{attrs:{columns:t.columns},on:{load:t.load}})},Kt=[];function zt(t,r){return Array.from({length:r},(s,e)=>{const a=(t-1)*r+1+e,l=`Title: ${a}`;return{id:a,title:l,text:"Hello Meve!"}})}const Et={components:{[_.name]:_},data:()=>({columns:[{key:"id",title:"ID",sorter:!0},{key:"title",title:"Title"},{key:"text",title:"Text"}]}),methods:{load({sorters:t}){return new Promise(r=>{setTimeout(()=>{const s=zt(1,3);t.id==="asc"?s.sort((e,a)=>e.id-a.id):t.id==="desc"&&s.sort((e,a)=>a.id-e.id),r(s)},300)})}}},A={};var Rt=v(Et,St,Kt,!1,Mt,null,null,null);function Mt(t){for(let r in A)this[r]=A[r]}var At=function(){return Rt.exports}(),Pt=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{attrs:{scroller:{x:800,y:260},columns:t.columns},on:{load:t.load},scopedSlots:t._u([{key:"action",fn:function(){return[s("m-button",{attrs:{size:"small"}},[t._v("Action")])]},proxy:!0}])})},It=[];function Ht(t,r){return Array.from({length:r},(s,e)=>{const a=(t-1)*r+1+e,l=`Title: ${a}`;return{id:a,title:l,text:"Hello Meve!"}})}const Dt={components:{[_.name]:_,[o.name]:o},data:()=>({columns:[{key:"id",title:"ID"},{key:"title",title:"Title"},{key:"text",title:"Text"},{key:"action",title:"Action",sticky:!0,style:{right:"0px"}}]}),methods:{load(){return new Promise(t=>{setTimeout(()=>t(Ht(1,10)),300)})}}},P={};var Ft=v(Dt,Pt,It,!1,Bt,null,null,null);function Bt(t){for(let r in P)this[r]=P[r]}var Lt=function(){return Ft.exports}(),Nt=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{attrs:{"selected-keys":t.selectedKeys,columns:t.columns},on:{"update:selectedKeys":function(e){t.selectedKeys=e},"update:selected-keys":function(e){t.selectedKeys=e},load:t.load}})},Ot=[];function Vt(t,r){return Array.from({length:r},(s,e)=>{const a=(t-1)*r+1+e,l=`Title: ${a}`;return{id:a,title:l,text:"Hello Meve!"}})}const qt={components:{[_.name]:_},data:()=>({selectedKeys:[],columns:[{selection:!0,style:{width:"40px"}},{key:"id",title:"ID"},{key:"title",title:"Title"},{key:"text",title:"Text"}]}),watch:{selectedKeys(t){w.warning(t.toString())}},methods:{load(){return new Promise(t=>{setTimeout(()=>t(Vt(1,3)),300)})}}},I={};var Jt=v(qt,Nt,Ot,!1,Ut,null,null,null);function Ut(t){for(let r in I)this[r]=I[r]}var Wt=function(){return Jt.exports}(),Gt=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{attrs:{"selected-keys":t.selectedKeys,columns:t.columns},on:{"update:selectedKeys":function(e){t.selectedKeys=e},"update:selected-keys":function(e){t.selectedKeys=e},load:t.load}})},Qt=[];function Xt(t,r){return Array.from({length:r},(s,e)=>{const a=((t-1)*r+1+e).toString(),l=`Title: ${a}`;return{id:a,title:l,text:"Hello Meve!",children:[{id:`${a}-1`,title:`Title: ${a}-1`,text:"Hello Meve Child!",children:[{id:`${a}-1-1`,title:`Title: ${a}-1-1`,text:"Hello Meve Child Child!"}]},{id:`${a}-2`,title:`Title: ${a}-2`,text:"Hello Meve Child!"}]}})}const Yt={components:{[_.name]:_},data:()=>({selectedKeys:[],columns:[{selection:!0,style:{width:"40px"}},{key:"id",title:"ID"},{key:"title",title:"Title"},{key:"text",title:"Text"}]}),watch:{selectedKeys(t){w.warning(t.toString())}},methods:{load(){return new Promise(t=>{setTimeout(()=>t(Xt(1,3)),300)})}}},H={};var Zt=v(Yt,Gt,Qt,!1,ts,null,null,null);function ts(t){for(let r in H)this[r]=H[r]}var ss=function(){return Zt.exports}(),rs=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{ref:"table",attrs:{columns:t.columns},on:{load:t.load},scopedSlots:t._u([{key:"action",fn:function(){return[s("m-button",{attrs:{size:"small"}},[t._v("Action")])]},proxy:!0},{key:"footer",fn:function(){return[s("m-pagination",{attrs:{"show-quick-jumper":"","show-size-changer":"",current:t.current,size:t.size,total:t.total,"show-total":function(e,a){var l=a[0],p=a[1];return"\u5171 "+e+" \u6761\uFF0C\u5F53\u524D"+l+"-"+p+"\u6761"}},on:{"update:current":function(e){t.current=e},"update:size":function(e){t.size=e},change:t.handlePageChange}})]},proxy:!0}])})},es=[];function as(t,r){return Array.from({length:r},(s,e)=>{const a=(t-1)*r+1+e,l=`Title: ${a}`,p="Hello Meve!";return{id:a.toString(),title:l,text:p}})}const ns={components:{[_.name]:_,[K.name]:K,[o.name]:o},data:()=>({current:1,size:10,total:0,columns:[{key:"id",title:"ID"},{key:"title",title:"Title"},{key:"text",title:"Text"},{key:"action",title:"Action"}]}),methods:{load(){return new Promise(t=>{setTimeout(()=>{this.total=100,t(as(this.current,this.size))},300)})},handlePageChange(){this.$refs.table.load()}}},D={};var ls=v(ns,rs,es,!1,_s,null,null,null);function _s(t){for(let r in D)this[r]=D[r]}var ps=function(){return ls.exports}(),vs=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-table",{attrs:{columns:t.columns},on:{load:t.load},scopedSlots:t._u([{key:"title",fn:function(e){var a=e.row;return[s("m-input",{model:{value:a.title,callback:function(l){t.$set(a,"title",l)},expression:"row.title"}})]}},{key:"text",fn:function(e){var a=e.row;return[s("m-input",{model:{value:a.text,callback:function(l){t.$set(a,"text",l)},expression:"row.text"}})]}},{key:"action",fn:function(e){var a=e.row;return[s("m-button",{attrs:{size:"small"},on:{click:function(l){return t.showRow(a)}}},[t._v("Action")])]}}])})},cs=[];function us(t,r){return Array.from({length:r},(s,e)=>{const a=(t-1)*r+1+e,l=`Title: ${a}`;return{id:a,title:l,text:"Hello Meve!"}})}const is={components:{[_.name]:_,[z.name]:z,[o.name]:o},data:()=>({columns:[{key:"id",title:"ID"},{key:"title",title:"Title"},{key:"text",title:"Text"},{key:"action",title:"Action"}]}),methods:{load(){return new Promise(t=>{setTimeout(()=>t(us(1,3)),300)})},showRow(t){w.warning(JSON.stringify(t))}}},F={};var os=v(is,vs,cs,!1,hs,null,null,null);function hs(t){for(let r in F)this[r]=F[r]}var ds=function(){return os.exports}(),js=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-doc"},[s("h1",[t._v("Table \u8868\u683C")]),t._m(0),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u57FA\u672C\u4F7F\u7528")]),t._m(1),s("div",{staticClass:"meve-component-preview"},[s("basic-use")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v("/>")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = (current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      id,
      title,
      text,
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(" resolve(get("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(")), "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u7D27\u51D1\u578B\u8868\u683C")]),t._m(2),s("div",{staticClass:"meve-component-preview"},[s("size")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v("/>")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = (current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      id,
      title,
      text,
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(" resolve(get("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(")), "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u5408\u5E76\u5355\u5143\u683C")]),t._m(3),s("div",{staticClass:"meve-component-preview"},[s("colspan")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("border")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v("/>")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = (current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      id,
      title,
      text,
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("headColSpan")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("bodySpan")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("rowIndex")]),t._v(")")]),t._v(` {
          `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (rowIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`) {
            `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("colSpan")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(` }
          }
          `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (rowIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(`) {
            `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rowSpan")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(` }
          }
        }
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("headColSpan")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("bodySpan")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("rowIndex")]),t._v(")")]),t._v(` {
          `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (rowIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`) {
            `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("colSpan")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(` }
          }
          `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (rowIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(`) {
            `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rowSpan")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(` }
          }
        }
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(" resolve(get("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("5")]),t._v(")), "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u7B5B\u9009")]),t._m(4),s("div",{staticClass:"meve-component-preview"},[s("sorter")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v("/>")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = (current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      id,
      title,
      text,
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("sorter")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("{ sorters }")]),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
          `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" data = get("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(`)

          `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (sorters.id === "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'asc'")]),t._v(`) {
            data.sort(`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("a, b")]),t._v(") =>")]),t._v(` a.id - b.id)
          } `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (sorters.id === "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'desc'")]),t._v(`) {
            data.sort(`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("a, b")]),t._v(") =>")]),t._v(` b.id - a.id)
          }

          resolve(data)
        }, `),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u56FA\u5B9A\u8868\u5934")]),t._m(5),s("div",{staticClass:"meve-component-preview"},[s("fixed-table")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":scroller")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"{ x: 800, y: 260 }"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(`
    @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
  >`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("action")]),t._v(">")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(">")]),t._v("Action"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = (current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      id,
      title,
      text,
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'action'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Action'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("sticky")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("style")]),t._v(`: {
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("right")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'0px'")]),t._v(`
        }
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(" resolve(get("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(")), "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u5F00\u542F\u884C\u9009\u62E9")]),t._m(6),s("div",{staticClass:"meve-component-preview"},[s("selection")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":selected-keys.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"selectedKeys"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v("/>")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Message } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@meve/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = (current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      id,
      title,
      text,
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("selectedKeys")]),t._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("selection")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("style")]),t._v(`: {
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'40px'")]),t._v(`
        }
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("watch")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("selectedKeys")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("keys")]),t._v(")")]),t._v(` {
      Message.warning(keys.toString())
    }
  },
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(" resolve(get("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(")), "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u6811\u5F62\u8868\u683C")]),t._m(7),s("div",{staticClass:"meve-component-preview"},[s("tree")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":selected-keys.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"selectedKeys"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(`
    @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
  />`)]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Message } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@meve/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = ((current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index).toString()
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      id,
      title,
      text,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(`: [
        {
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("-1`")]),t._v(`,
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(":  "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("-1`")]),t._v(`,
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve Child!'")]),t._v(`
        },
        {
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("-2`")]),t._v(`,
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(":  "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("-2`")]),t._v(`,
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve Child!'")]),t._v(`
        }
      ]
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("selectedKeys")]),t._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("selection")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("style")]),t._v(`: {
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'40px'")]),t._v(`
        }
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("watch")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("selectedKeys")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("keys")]),t._v(")")]),t._v(` {
      Message.warning(keys.toString())
    }
  },
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(" resolve(get("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(")), "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u914D\u5408\u5206\u9875")]),t._m(8),s("div",{staticClass:"meve-component-preview"},[s("page")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"table"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(`
    @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
  >`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("action")]),t._v(">")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(">")]),t._v("Action"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("footer")]),t._v(">")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-pagination")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show-quick-jumper")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show-size-changer")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":current.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"current"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"total"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show-total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"(total, [start, end]) => `\u5171 ${total} \u6761\uFF0C\u5F53\u524D${start}-${end}\u6761`"')]),t._v(`
        @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("change")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handlePageChange"')]),t._v(`
      />`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = (current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(`: id.toString(),
      title,
      text,
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("total")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'action'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Action'")]),t._v(`,
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".total = "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100")]),t._v(`
          resolve(get(`),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".current, "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.size))
        }, `),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    },
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handlePageChange")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.$refs.table.load()
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u53EF\u7F16\u8F91\u8868\u683C")]),s("div",{staticClass:"meve-component-preview"},[s("edit")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"{ row }"')]),t._v(">")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"row.title"')]),t._v("/>")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"{ row }"')]),t._v(">")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"row.text"')]),t._v("/>")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("action")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"{ row }"')]),t._v(">")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"showRow(row)"')]),t._v(">")]),t._v("Action"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-table")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Message } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@meve/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("get")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("current, size")]),t._v(") ")]),t._v(`{
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": size }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" id = (current - "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") * size + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` + index
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" title = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Title: "),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${id}")]),t._v("`")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" text = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Meve!'")]),t._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      id,
      title,
      text,
    }
  })
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'id'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ID'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Title'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'text'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Text'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("key")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'action'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Action'")]),t._v(`,
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("resolve")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(" resolve(get("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(")), "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(`)
      })
    },
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("showRow")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("row")]),t._v(")")]),t._v(` {
      Message.warning(`),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("JSON")]),t._v(`.stringify(row))
    }
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("h2",[t._v("API")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13)])},ms=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u4ECB\u7ECD")]),s("p",[t._v("\u663E\u793A\u884C\u5217\u6570\u636E")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("data\u65B9\u6CD5")]),t._v("\u8FD4\u56DE\u8868\u683C\u6570\u636E\u8FDB\u884C\u7ED1\u5B9A, \u81EA\u52A8\u5904\u7406"),s("code",{pre:!0},[t._v("loading")]),t._v("\u72B6\u6001\uFF0C\u901A\u8FC7"),s("code",{pre:!0},[t._v("columns")]),t._v("\u7ED1\u5B9A\u5217\u4FE1\u606F")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("size")]),t._v("\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u7D27\u51D1\u578B\u8868\u683C")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("column")]),t._v("\u7684"),s("code",{pre:!0},[t._v("headColSpan")]),t._v("\u548C"),s("code",{pre:!0},[t._v("bodySpan")]),t._v("\u8FDB\u884C\u5408\u5E76\u5355\u5143\u683C")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("column")]),t._v("\u7684"),s("code",{pre:!0},[t._v("sorter")]),t._v("\u53EF\u4EE5\u5F00\u542F\u7B5B\u9009\u529F\u80FD")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("scroller")]),t._v("\u8BBE\u7F6E\u6EDA\u52A8\u5BB9\u5668\u7684\u6EDA\u52A8\u8DDD\u79BB\u5E76\u81EA\u52A8\u5F00\u542F\u8868\u5934\u56FA\u5B9A\u3002\u901A\u8FC7"),s("code",{pre:!0},[t._v("column")]),t._v("\u7684"),s("code",{pre:!0},[t._v("sticky")]),t._v("\u9009\u9879\u5F00\u542F\u5217\u56FA\u5B9A\uFF0C\u901A\u8FC7"),s("code",{pre:!0},[t._v("style")]),t._v("\u8BBE\u7F6E\u56FA\u5B9A\u504F\u79FB\u91CF\u3002")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("column")]),t._v("\u7684"),s("code",{pre:!0},[t._v("selection")]),t._v("\u5F00\u542F\u884C\u9009\u62E9")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u9ED8\u8BA4\u8BC6\u522B\u6570\u636E\u9879\u4E2D\u7684"),s("code",{pre:!0},[t._v("children")]),t._v("\u5B57\u6BB5\uFF0C\u9ED8\u8BA4\u5F00\u542F\u6811\u5F62\u8868\u683C\uFF0C\u53EF\u4EE5\u901A\u8FC7"),s("code",{pre:!0},[t._v("childrenKey")]),t._v("\u81EA\u5B9A\u4E49"),s("code",{pre:!0},[t._v("children")]),t._v("\u5B57\u6BB5\u540D\uFF0C\u4E5F\u53EF\u914D\u5408"),s("code",{pre:!0},[t._v("selection")]),t._v("\u3002")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("footer")]),t._v("\u63D2\u69FD\u63D2\u5165\u5206\u9875\u7EC4\u4EF6")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u5C5E\u6027")]),s("h4",[t._v("Table Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("row-key")])]),s("td",[t._v("\u6BCF\u884C\u7684\u552F\u4E00\u952E\u540D")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("id")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("columns")])]),s("td",[t._v("\u5217\u914D\u7F6E")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("TableColumn[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("selected-keys.sync")])]),s("td",[t._v("\u9009\u62E9\u7684\u884C")]),s("td",[s("em",[t._v("any[]")])]),s("td",[s("strong",[t._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("size")])]),s("td",[t._v("\u8868\u683C\u5C3A\u5BF8, \u53EF\u9009\u503C: "),s("code",{pre:!0},[t._v("normal")]),t._v(" "),s("code",{pre:!0},[t._v("small")])]),s("td",[s("em",[t._v("normal | small")])]),s("td",[s("strong",[t._v("normal")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("table-layout")])]),s("td",[t._v("\u8868\u683C\u5E03\u5C40\uFF0C\u540C\u539F\u751F\u5C5E\u6027")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("auto")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("children-key")])]),s("td",[t._v("\u5B50\u5217\u8868\u952E\u540D")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("children")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("scroller")])]),s("td",[t._v("\u6EDA\u52A8\u5BB9\u5668\u914D\u7F6E")]),s("td",[s("em",[t._v("{ x: number | string, y: number | string }")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("border")])]),s("td",[t._v("\u662F\u5426\u4F7F\u7528\u5168\u8FB9\u6846")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("indent")])]),s("td",[t._v("\u6811\u5F62\u83DC\u5355\u5C42\u7EA7\u7F29\u8FDB\u8DDD\u79BB")]),s("td",[s("em",[t._v("number | string")])]),s("td",[s("strong",[t._v("20")])])])])]),s("h4",[t._v("Table Column")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("key")])]),s("td",[t._v("\u5F53\u524D\u5217\u5BF9\u5E94\u6BCF\u884C\u4E2D\u7684\u952E\u540D")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("\u5F53\u524D\u5217\u7684\u8868\u5934\u6587\u672C")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("style")])]),s("td",[t._v("\u5F53\u524D\u5217\u6837\u5F0F")]),s("td",[s("em",[t._v("Record<string, any>")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("selection")])]),s("td",[t._v("\u662F\u5426\u6E32\u67D3\u884C\u9009\u62E9\u5668")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("sorter")])]),s("td",[t._v("\u662F\u5426\u6E32\u67D3\u7B5B\u9009\u63A7\u5236\u5668")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("sticky")])]),s("td",[t._v("\u5F53\u524D\u5217\u662F\u5426\u5F00\u542F\u7C98\u6027\u5B9A\u4F4D")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("headColSpan")])]),s("td",[t._v("\u5F53\u524D\u5217\u7684\u8868\u5934\u5206\u680F\uFF0C\u7528\u4E8E\u5408\u5E76\u5355\u5143\u683C\u64CD\u4F5C\uFF0C\u53D6\u503C"),s("code",{pre:!0},[t._v("0")]),t._v("\u65F6\u4E0D\u6E32\u67D3\u5F53\u524D\u5217\u7684\u8868\u5934")]),s("td",[s("em",[t._v("number")])]),s("td",[s("strong",[t._v("1")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("bodySpan")])]),s("td",[t._v("\u5F53\u524D\u5217\u7684\u5206\u680F\uFF0C\u7528\u4E8E\u5408\u5E76\u5355\u5143\u683C\u64CD\u4F5C\uFF0C\u53D6\u503C"),s("code",{pre:!0},[t._v("0")]),t._v("\u65F6\u4E0D\u6E32\u67D3\u5F53\u524D\u5217")]),s("td",[s("em",[t._v("(rowIndex: number, row: any, column: any): { colSpan?: number, rowSpan?: number } | undefined")])]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u4E8B\u4EF6")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u4E8B\u4EF6\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("load")])]),s("td",[t._v("\u8868\u683C\u52A0\u8F7D\u6570\u636E\u65F6\u89E6\u53D1")]),s("td",[s("strong",[t._v("{ sorters: Record<string, any> }")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u65B9\u6CD5")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u65B9\u6CD5\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8FD4\u56DE\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("load")])]),s("td",[t._v("\u91CD\u65B0\u52A0\u8F7D\u8868\u683C\u6570\u636E")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("Promise<void>")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("getData")])]),s("td",[t._v("\u83B7\u53D6\u8868\u683C\u6570\u636E")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("any[]")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u63D2\u69FD")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u63D2\u69FD\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("*")])]),s("td",[t._v("\u52A8\u6001\u6E32\u67D3\u63D2\u69FD\uFF0C\u6839\u636E "),s("code",{pre:!0},[t._v("column")]),t._v(" \u7684 "),s("code",{pre:!0},[t._v("key")]),t._v(" \u6765\u51B3\u5B9A")]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u6837\u5F0F\u53D8\u91CF")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53D8\u91CF\u540D")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-sorter-active-color")])]),s("td",[s("code",{pre:!0},[t._v("var(--color-deep-primary)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-normal-cell-padding")])]),s("td",[s("code",{pre:!0},[t._v("12px 24px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-small-cell-padding")])]),s("td",[s("code",{pre:!0},[t._v("8px 12px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-font-size")])]),s("td",[s("code",{pre:!0},[t._v("16px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-background-color")])]),s("td",[s("code",{pre:!0},[t._v("#fff")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-th-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#8392ab")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-td-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#67748e")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-border")])]),s("td",[s("code",{pre:!0},[t._v("thin solid #eee")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-empty-padding")])]),s("td",[s("code",{pre:!0},[t._v("12px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-empty-font-size")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-empty-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#8392ab")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-error-padding")])]),s("td",[s("code",{pre:!0},[t._v("12px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-error-font-size")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-error-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#8392ab")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-footer-padding")])]),s("td",[s("code",{pre:!0},[t._v("16px 12px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@table-footer-justify-content")])]),s("td",[s("code",{pre:!0},[t._v("flex-end")])])])])])])}];const ys={components:{BasicUse:ot,Size:ft,Colspan:Ct,Sorter:At,FixedTable:Lt,Selection:Wt,Tree:ss,Page:ps,Edit:ds}},B={};var gs=v(ys,js,ms,!1,fs,null,null,null);function fs(t){for(let r in B)this[r]=B[r]}var Qs=function(){return gs.exports}();export{Qs as default};
