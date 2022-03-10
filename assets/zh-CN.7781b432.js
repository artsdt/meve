import{L as h}from"./index.2f6c5c49.js";import{R as d}from"./index.45eae9d1.js";import{c as m}from"./create.af6e9796.js";import{c as j,t as f}from"./elements.aa4184a2.js";import{n as g}from"./components.389a5113.js";/* empty css               */import{T as n,a as _,b as v,c as i}from"./index.d3c7be9e.js";import{n as u}from"./main.e0877570.js";import"./vendor.9e020b39.js";import"./shared.285cd5cf.js";import"./index.4e777949.js";import"./relation.9e421618.js";import"./animation.106839c4.js";import"./index.e614f759.js";const b={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String}};const{createComponent:y,namespace:a}=m("list"),p=y({props:b,directives:{Ripple:d},data:()=>({scroller:null}),mounted(){this.initScroller()},beforeDestroy(){this.scroller.removeEventListener("scroll",this.check)},methods:{initScroller(){const{immediateCheck:t,check:r,list:s}=this;this.scroller=j(s),t&&r(),this.scroller.addEventListener("scroll",r)},load(){this.$emit("update:error",!1),this.$emit("update:loading",!0),this.$emit("load")},async check(){const{loading:t,finished:r,error:s,load:e,isReachBottom:l}=this;await g(),!t&&!r&&!s&&l()&&e()},isReachBottom(){const{scroller:t,$refs:{detector:r},offset:s}=this,e=t===window?window.innerHeight:t.getBoundingClientRect().bottom,{bottom:l}=r.getBoundingClientRect();return l-f(s)<=e},renderLoading(){const t=this.$createElement,{loading:r,loadingText:s}=this;if(!!r)return this.hasSlots("loading")?this.slots("loading"):t("div",{class:a("__loading")},[t("div",{class:a("__loading-text")},[s!=null?s:"\u52A0\u8F7D\u4E2D"]),t(h,{attrs:{"list-cover":!0,size:22,loading:!0},class:a("__loading-icon")})])},renderFinished(){const t=this.$createElement,{finished:r,finishedText:s}=this;if(!!r)return this.hasSlots("finished")?this.slots("finished"):t("div",{class:a("__finished")},[s!=null?s:"\u6682\u65E0\u66F4\u591A"])},renderError(){const t=this.$createElement,{error:r,errorText:s,load:e}=this;if(!!r)return this.hasSlots("error")?this.slots("error"):t("div",{class:a("__error"),directives:[{name:"ripple",value:!0}],on:{click:e}},[s!=null?s:"\u52A0\u8F7D\u5931\u8D25, \u70B9\u51FB\u91CD\u8BD5"])}},render(){const t=arguments[0];return t("div",{ref:"list",class:[a(),"m--box"]},[this.slots(),this.renderLoading(),this.renderFinished(),this.renderError(),t("div",{ref:"detector",class:a("__detector")})])}});var k=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"example"},[s("m-tabs",{model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[s("m-tab",[t._v("\u57FA\u672C\u4F7F\u7528")]),s("m-tab",[t._v("\u52A0\u8F7D\u5931\u8D25")]),s("m-tab",[t._v("\u81EA\u5B9A\u4E49")])],1),s("m-tabs-items",{model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[s("m-tab-item",[s("m-list",{attrs:{finished:t.finished,loading:t.loading},on:{"update:loading":function(e){t.loading=e},load:t.load}},t._l(t.list,function(e){return s("div",{key:e,staticClass:"item"},[t._v("Item: "+t._s(e))])}),0)],1),s("m-tab-item",[s("m-list",{attrs:{finished:t.finished2,loading:t.loading2,error:t.error2},on:{"update:loading":function(e){t.loading2=e},"update:error":function(e){t.error2=e},load:t.load2}},t._l(t.list2,function(e){return s("div",{key:e,staticClass:"item"},[t._v("Item: "+t._s(e))])}),0)],1),s("m-tab-item",[s("m-list",{attrs:{"loading-text":"\u7C73\u8587\u6B63\u5728\u52AA\u529B\u52A0\u8F7D...","finished-text":"\u7C73\u8587\u627E\u4E0D\u5230\u66F4\u591A\u6570\u636E\u4E86...","error-text-text":"\u7C73\u8587\u53D1\u73B0\u5F02\u5E38\uFF0C\u70B9\u51FB\u6B64\u5904\u53EF\u4EE5\u91CD\u8BD5...",finished:t.finished3,loading:t.loading3},on:{"update:loading":function(e){t.loading3=e},load:t.load3}},t._l(t.list3,function(e){return s("div",{key:e,staticClass:"item"},[t._v("Item: "+t._s(e))])}),0)],1)],1)],1)},x=[];const C={components:{[p.name]:p,[n.name]:n,[_.name]:_,[v.name]:v,[i.name]:i},data:()=>({current:0,finished:!1,error:!1,loading:!1,finished2:!1,error2:!1,loading2:!1,finished3:!1,error3:!1,loading3:!1,list:[],list2:[],list3:[]}),methods:{load(){if(this.current!==0){this.loading=!1;return}setTimeout(()=>{for(let t=0;t<10;t++)this.list.push(this.list.length+1);this.loading=!1,this.list.length>=30&&(this.finished=!0)},1e3)},load2(){if(this.current!==1){this.loading2=!1;return}setTimeout(()=>{if(this.list2.length===20){this.error2=!0,this.loading2=!1;return}for(let t=0;t<10;t++)this.list2.push(this.list2.length+1);this.loading2=!1},1e3)},load3(){if(this.current!==2){this.loading3=!1;return}setTimeout(()=>{for(let t=0;t<10;t++)this.list3.push(this.list3.length+1);this.loading3=!1,this.list3.length>=30&&(this.finished3=!0)},1e3)}}},c={};var $=u(C,k,x,!1,w,"395d7a28",null,null);function w(t){for(let r in c)this[r]=c[r]}var E=function(){return $.exports}(),T=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-doc"},[s("h1",[t._v("List \u61D2\u52A0\u8F7D\u5217\u8868")]),t._m(0),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u57FA\u672C\u4F7F\u7528")]),t._m(1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-list")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":finished")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"finished"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":loading.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loading"')]),t._v(`
    @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
  >`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item in list"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(">")]),t._v("Item: {{ item }}"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-list")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("finished")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loading")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("list")]),t._v(`: []
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i < "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`; i++) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.push("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`)
        }

        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".loading = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`

        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length >= "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30")]),t._v(`) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".finished = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
        }
      }, `),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(`)
    },
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u52A0\u8F7D\u5931\u8D25")]),t._m(2),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-list")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":finished")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"finished"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":loading.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loading"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":error.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(`
    @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
  >`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item in list"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(">")]),t._v("Item: {{ item }}"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-list")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("finished")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loading")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("error")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("list")]),t._v(`: []
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(`) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".error = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".loading = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(`
        }

        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i < "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`; i++) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.push("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`)
        }

        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".loading = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`
      }, `),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(`)
    },
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u81EA\u5B9A\u4E49\u63D0\u793A\u4FE1\u606F")]),s("p",[t._v("\u6240\u6709\u7684\u63D0\u793A\u6587\u5B57\u90FD\u53EF\u4EE5\u8FDB\u884C\u81EA\u5B9A\u4E49")]),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-list")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loading-text")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"\u7C73\u8587\u6B63\u5728\u52AA\u529B\u52A0\u8F7D..."')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("finished-text")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"\u7C73\u8587\u627E\u4E0D\u5230\u66F4\u591A\u6570\u636E\u4E86..."')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("errorText-text")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"\u7C73\u8587\u53D1\u73B0\u5F02\u5E38\uFF0C\u70B9\u51FB\u6B64\u5904\u53EF\u4EE5\u91CD\u8BD5..."')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":finished")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"finished"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":loading.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loading"')]),t._v(`
    @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
  >`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item in list"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(">")]),t._v("Item: {{ item }}"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-list")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("finished")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loading")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("list")]),t._v(`: []
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i < "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`; i++) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.push("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`)
        }

        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".loading = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`

        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length >= "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30")]),t._v(`) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".finished = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
        }
      }, `),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(`)
    },
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("h2",[t._v("API")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u6F14\u793A")]),s("p",[t._v("\u8FD9\u91CC\u662F\u6F14\u793A\u533A\u57DF\uFF0C\u6CE8\u610F\u7EC4\u4EF6\u4E0D\u5305\u542B\u6807\u7B7E\u9875\uFF0C\u6807\u7B7E\u9875\u4EC5\u7528\u6765\u5212\u5206\u533A\u57DF")]),s("div",{staticClass:"meve-component-preview"},[s("complex")],1)])])},S=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u4ECB\u7ECD")]),s("p",[t._v("\u652F\u6301\u89E6\u5E95\u52A0\u8F7D\uFF0C\u624B\u52A8\u68C0\u67E5\u4F4D\u7F6E\u5E76\u52A0\u8F7D\uFF0C\u9519\u8BEF\u65F6\u91CD\u65B0\u52A0\u8F7D\uFF0C\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001\u3001\u9519\u8BEF\u72B6\u6001\u3001\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u72B6\u6001\u3002"),s("code",{pre:!0},[t._v("\u7531\u4E8E\u61D2\u52A0\u8F7D\u5217\u8868\u7684\u7279\u6B8A\u6027\uFF0C\u7EC4\u4EF6\u6F14\u793A\u7EDF\u4E00\u653E\u5230\u4E86\u6587\u6863\u5E95\u90E8")])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u5F53\u68C0\u6D4B\u5230\u6EDA\u52A8\u5BB9\u5668\u6EDA\u52A8\u5230\u5E95\u90E8\u5E95\u90E8\u65F6\u4F1A\u89E6\u53D1"),s("code",{pre:!0},[t._v("load")]),t._v("\u4E8B\u4EF6\uFF0C\u5E76\u4F1A\u8BBE\u7F6E"),s("code",{pre:!0},[t._v("loading")]),t._v("\u4E3A"),s("code",{pre:!0},[t._v("true")]),t._v("\uFF0C\u5728\u52A0\u8F7D\u7ED3\u675F\u65F6\u60A8\u9700\u8981\u624B\u52A8\u8BBE\u7F6E"),s("code",{pre:!0},[t._v("loading")]),t._v("\u4E3A"),s("code",{pre:!0},[t._v("false")]),t._v("\uFF0C\u8868\u793A\u52A0\u8F7D\u7ED3\u675F")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u60A8\u53EF\u4EE5\u4F7F\u7528"),s("code",{pre:!0},[t._v("error.sync")]),t._v("\u624B\u52A8\u8BBE\u7F6E\u9519\u8BEF\u72B6\u6001\uFF0C\u4F1A\u5C55\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u4F1A\u5E2E\u60A8\u628A"),s("code",{pre:!0},[t._v("error")]),t._v("\u8BBE\u7F6E\u6210"),s("code",{pre:!0},[t._v("false")]),t._v("\u5E76\u518D\u6B21\u89E6\u53D1"),s("code",{pre:!0},[t._v("load")]),t._v("\u4E8B\u4EF6")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u5C5E\u6027")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("loading")])]),s("td",[t._v("\u52A0\u8F7D\u72B6\u6001")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("error")])]),s("td",[t._v("\u9519\u8BEF\u72B6\u6001")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("immediate-check")])]),s("td",[t._v("\u662F\u5426\u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u65F6\u7ACB\u523B\u68C0\u6D4B\u4F4D\u7F6E")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("finished")])]),s("td",[t._v("\u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("offset")])]),s("td",[t._v("\u8DDD\u79BB\u5E95\u90E8\u7684\u89E6\u53D1\u8DDD\u79BB")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("strong",[t._v("0")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("loading-text")])]),s("td",[t._v("\u52A0\u8F7D\u72B6\u6001\u6587\u5B57")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("\u52A0\u8F7D\u4E2D")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("finished-text")])]),s("td",[t._v("\u52A0\u8F7D\u5B8C\u6BD5\u6587\u5B57")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("\u6682\u65E0\u66F4\u591A")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("error-text")])]),s("td",[t._v("\u52A0\u8F7D\u5931\u8D25\u6587\u5B57")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u8BD5")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u65B9\u6CD5")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u65B9\u6CD5\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8FD4\u56DE\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("check")])]),s("td",[t._v("\u89E6\u53D1\u4F4D\u7F6E\u68C0\u67E5, \u5982\u679C\u89E6\u5E95\u5219\u4F1A\u89E6\u53D1load\u4E8B\u4EF6")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u4E8B\u4EF6")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u4E8B\u4EF6\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("load")])]),s("td",[t._v("\u89E6\u5E95\u65F6\u89E6\u53D1")]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("update:loading")])]),s("td",[t._v("load\u4E8B\u4EF6\u89E6\u53D1\u524D\u4F1A\u89E6\u53D1\u4E00\u6B21\uFF0C\u5C06loading\u8BBE\u7F6E\u4E3Atrue")]),s("td",[s("strong",[t._v("loading: boolean")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("update:error")])]),s("td",[t._v("load\u4E8B\u4EF6\u89E6\u53D1\u524D\u4F1A\u89E6\u53D1\u4E00\u6B21\uFF0C\u5C06error\u8BBE\u7F6E\u4E3Afalse")]),s("td",[s("strong",[t._v("error: boolean")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u63D2\u69FD")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u63D2\u69FD\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("default")])]),s("td",[t._v("\u5217\u8868\u5185\u5BB9")]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("loading")])]),s("td",[t._v("\u52A0\u8F7D\u4E2D\u5185\u5BB9")]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("error")])]),s("td",[t._v("\u52A0\u8F7D\u5931\u8D25\u5185\u5BB9")]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("finished")])]),s("td",[t._v("\u52A0\u8F7D\u5B8C\u6BD5\u5185\u5BB9")]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u6837\u5F0F\u53D8\u91CF")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53D8\u91CF\u540D")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-loading-height")])]),s("td",[s("code",{pre:!0},[t._v("50px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-finished-height")])]),s("td",[s("code",{pre:!0},[t._v("50px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-error-height")])]),s("td",[s("code",{pre:!0},[t._v("50px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-loading-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-finished-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-error-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-loading-font-size")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-finished-font-size")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@list-error-font-size")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])])])])])}];const B={components:{Complex:E}},o={};var I=u(B,T,S,!1,P,null,null,null);function P(t){for(let r in o)this[r]=o[r]}var Q=function(){return I.exports}();export{Q as default};