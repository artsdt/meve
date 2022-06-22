import{P as e}from"./index.28ff6645.js";import{n as a}from"./main.9e6b74e9.js";import{S as l}from"./index.22725d14.js";import"./create.aa899411.js";import"./shared.3ed6fcb1.js";/* empty css               */import"./elements.43ed79a4.js";import"./vendor.b6844a64.js";/* empty css              */var c=function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("m-progress",{attrs:{value:s.value}})},i=[];const h={components:{[e.name]:e},data:()=>({timer:null,value:0}),mounted(){this.timer=setInterval(()=>{this.value=this.value===100?0:this.value+20},1e3)},beforeDestroy(){clearInterval(this.timer)}},n={};var o=a(h,c,i,!1,m,null,null,null);function m(s){for(let r in n)this[r]=n[r]}var j=function(){return o.exports}(),d=function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("m-space",{attrs:{direction:"column",size:"large"}},[t("m-progress",{attrs:{label:"",value:s.value}}),t("m-progress",{attrs:{label:"",value:s.value}},[s._v(s._s(this.value===100?"completed":this.value+"%"))])],1)},f=[];const b={components:{[e.name]:e,[l.name]:l},data:()=>({timer:null,value:0}),mounted(){this.timer=setInterval(()=>{this.value=this.value===100?0:this.value+20},1e3)},beforeDestroy(){clearInterval(this.timer)}},v={};var g=a(b,d,f,!1,$,null,null,null);function $(s){for(let r in v)this[r]=v[r]}var y=function(){return g.exports}(),k=function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("m-progress",{attrs:{color:"#fb6340","track-color":"#eecd98",value:s.value}})},x=[];const C={components:{[e.name]:e},data:()=>({timer:null,value:0}),mounted(){this.timer=setInterval(()=>{this.value=this.value===100?0:this.value+20},1e3)},beforeDestroy(){clearInterval(this.timer)}},_={};var I=a(C,k,x,!1,w,null,null,null);function w(s){for(let r in _)this[r]=_[r]}var E=function(){return I.exports}(),z=function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("m-progress",{attrs:{"track-size":4,value:s.value}})},D=[];const S={components:{[e.name]:e},data:()=>({timer:null,value:0}),mounted(){this.timer=setInterval(()=>{this.value=this.value===100?0:this.value+20},1e3)},beforeDestroy(){clearInterval(this.timer)}},p={};var P=a(S,z,D,!1,F,null,null,null);function F(s){for(let r in p)this[r]=p[r]}var M=function(){return P.exports}(),R=function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"meve-site-doc"},[t("h1",[s._v("Progress \u8FDB\u5EA6\u6761")]),s._m(0),t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u57FA\u672C\u4F7F\u7528")]),s._m(1),t("div",{staticClass:"meve-component-preview"},[t("basic-use")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-progress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" />")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timer")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(`
  }),
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("mounted")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".timer = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` {
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(`
    }, `),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(`)
  },
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("beforeDestroy")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("clearInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(`.timer)
  }
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u663E\u793A\u6807\u7B7E")]),s._m(2),t("div",{staticClass:"meve-component-preview"},[t("label-component")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-space")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"column"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-progress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" />")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-progress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),s._v("{{ this.value === 100 ? 'completed' : `${this.value}%` }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-progress")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-space")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timer")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(`
  }),
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("mounted")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".timer = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` {
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(`
    }, `),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(`)
  },
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("beforeDestroy")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("clearInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(`.timer)
  }
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u81EA\u5B9A\u4E49\u989C\u8272")]),s._m(3),t("div",{staticClass:"meve-component-preview"},[t("custom-color")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-progress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#fb6340"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("track-color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#eecd98"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" />")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timer")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(`
  }),
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("mounted")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".timer = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` {
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(`
    }, `),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(`)
  },
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("beforeDestroy")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("clearInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(`.timer)
  }
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u81EA\u5B9A\u4E49\u5C3A\u5BF8")]),s._m(4),t("div",{staticClass:"meve-component-preview"},[t("track-size")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-progress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":track-size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" />")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timer")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(`
  }),
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("mounted")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".timer = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` {
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(".value + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(`
    }, `),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(`)
  },
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("beforeDestroy")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("clearInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("this")]),s._v(`.timer)
  }
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`
`)])])])],1),t("h2",[s._v("API")]),s._m(5),s._m(6),s._m(7)])},A=[function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u4ECB\u7ECD")]),t("p",[s._v("\u663E\u793A\u8FDB\u5EA6")])])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("p",[s._v("\u901A\u8FC7"),t("code",{pre:!0},[s._v("value")]),s._v("\u6307\u5B9A\u8FDB\u5EA6\uFF0C\u53D6\u503C"),t("code",{pre:!0},[s._v("0->100")])])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("p",[s._v("\u901A\u8FC7"),t("code",{pre:!0},[s._v("label")]),s._v("\u663E\u793A\u6807\u7B7E\uFF0C\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E\u5185\u5BB9")])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("p",[s._v("\u901A\u8FC7"),t("code",{pre:!0},[s._v("color")]),s._v("\u4FEE\u6539\u586B\u5145\u989C\u8272\uFF0C\u901A\u8FC7"),t("code",{pre:!0},[s._v("trackColor")]),s._v("\u4FEE\u6539\u8F68\u9053\u989C\u8272")])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("p",[s._v("\u901A\u8FC7"),t("code",{pre:!0},[s._v("track-size")]),s._v("\u4FEE\u6539\u8F68\u9053\u5C3A\u5BF8")])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u5C5E\u6027")]),t("table",[t("thead",[t("tr",[t("th",[s._v("\u53C2\u6570")]),t("th",[s._v("\u8BF4\u660E")]),t("th",[s._v("\u7C7B\u578B")]),t("th",[s._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("value")])]),t("td",[s._v("\u8FDB\u5EA6\uFF0C")]),t("td",[t("em",[s._v("string | number")])]),t("td",[t("strong",[s._v("0")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("color")])]),t("td",[s._v("\u586B\u5145\u8272")]),t("td",[t("em",[s._v("string")])]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("track-color")])]),t("td",[s._v("\u8F68\u9053\u989C\u8272")]),t("td",[t("em",[s._v("string")])]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("track-size")])]),t("td",[s._v("\u8F68\u9053\u5C3A\u5BF8")]),t("td",[t("em",[s._v("string | number")])]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("label")])]),t("td",[s._v("\u662F\u5426\u663E\u793A\u6807\u7B7E")]),t("td",[t("em",[s._v("boolean")])]),t("td",[t("strong",[s._v("false")])])])])])])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u63D2\u69FD")]),t("table",[t("thead",[t("tr",[t("th",[s._v("\u63D2\u69FD\u540D")]),t("th",[s._v("\u8BF4\u660E")]),t("th",[s._v("\u53C2\u6570")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("default")])]),t("td",[s._v("\u6807\u7B7E\u5185\u5BB9")]),t("td",[t("strong",[s._v("-")])])])])])])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u6837\u5F0F\u53D8\u91CF")]),t("table",[t("thead",[t("tr",[t("th",[s._v("\u53D8\u91CF\u540D")]),t("th",[s._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("--progress-bar-color")])]),t("td",[t("code",{pre:!0},[s._v("var(--color-primary)")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("--progress-label-text-color")])]),t("td",[t("code",{pre:!0},[s._v("#888")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("--progress-label-font-size")])]),t("td",[t("code",{pre:!0},[s._v("14px")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("--progress-label-margin")])]),t("td",[t("code",{pre:!0},[s._v("0 0 2px")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("--progress-track-height")])]),t("td",[t("code",{pre:!0},[s._v("8px")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("--progress-track-background")])]),t("td",[t("code",{pre:!0},[s._v("#e9ecef")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("--progress-track-box-shadow")])]),t("td",[t("code",{pre:!0},[s._v("inset 0 1px 2px rgba(0, 0, 0, .1)")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("--progress-track-border-radius")])]),t("td",[t("code",{pre:!0},[s._v("4px")])])])])])])}];const B={components:{BasicUse:j,LabelComponent:y,CustomColor:E,TrackSize:M}},u={};var L=a(B,R,A,!1,N,null,null,null);function N(s){for(let r in u)this[r]=u[r]}var V=function(){return L.exports}();export{V as default};