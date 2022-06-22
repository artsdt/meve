import{P as a}from"./index.6d5d31b7.js";import{n}from"./main.9e6b74e9.js";import{S as _}from"./index.22725d14.js";import"./index.c2868c0e.js";import"./vendor.b6844a64.js";import"./create.aa899411.js";import"./shared.3ed6fcb1.js";import"./elements.43ed79a4.js";/* empty css               */import"./index.45eae9d1.js";import"./index.37570424.js";import"./index.f9508539.js";import"./relation.9e421618.js";import"./index.fa8e81d3.js";import"./index.218c5b48.js";import"./index.5b31b8c0.js";import"./zIndex.a6423b4e.js";import"./index.f3581791.js";import"./lock.6e857d47.js";/* empty css                 */import"./index.2714f115.js";import"./index.644136aa.js";import"./index.3f039f2e.js";import"./keyboardActive.acc7335a.js";import"./index.03505042.js";/* empty css              */var m=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-pagination",{attrs:{current:t.current,size:t.size,total:100},on:{"update:current":function(e){t.current=e},"update:size":function(e){t.size=e}}})},j=[];const g={components:{[a.name]:a},data:()=>({current:1,size:10})},p={};var f=n(g,m,j,!1,z,null,null,null);function z(t){for(let r in p)this[r]=p[r]}var $=function(){return f.exports}(),y=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-pagination",{attrs:{"show-quick-jumper":"",current:t.current,size:t.size,total:100},on:{"update:current":function(e){t.current=e},"update:size":function(e){t.size=e}}})},b=[];const w={components:{[a.name]:a},data:()=>({current:1,size:10})},c={};var x=n(w,y,b,!1,k,null,null,null);function k(t){for(let r in c)this[r]=c[r]}var C=function(){return x.exports}(),E=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-space",{attrs:{direction:"column",size:"large"}},[s("m-pagination",{attrs:{"show-size-changer":"",current:t.current,size:t.size,total:100},on:{"update:current":function(e){t.current=e},"update:size":function(e){t.size=e}}}),s("m-pagination",{attrs:{"show-size-changer":"",current:t.current,size:t.size,total:100,"size-option":[10,20]},on:{"update:current":function(e){t.current=e},"update:size":function(e){t.size=e}}})],1)},q=[];const S={components:{[a.name]:a,[_.name]:_},data:()=>({current:1,size:10})},l={};var F=n(S,E,q,!1,M,null,null,null);function M(t){for(let r in l)this[r]=l[r]}var P=function(){return F.exports}(),R=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-space",{attrs:{direction:"column",size:"large"}},[s("m-pagination",{attrs:{current:t.current,size:t.size,total:100,"show-total":function(e){return"\u5171 "+e+" \u6761"}},on:{"update:current":function(e){t.current=e},"update:size":function(e){t.size=e}}}),s("m-pagination",{attrs:{current:t.current,size:t.size,total:100,"show-total":function(e,v){var h=v[0],d=v[1];return"\u5171 "+e+" \u6761\uFF0C\u5F53\u524D "+h+" \u5230  "+d+" \u6761"}},on:{"update:current":function(e){t.current=e},"update:size":function(e){t.size=e}}})],1)},J=[];const Q={components:{[_.name]:_,[a.name]:a},data:()=>({current:1,size:10})},u={};var T=n(Q,R,J,!1,A,null,null,null);function A(t){for(let r in u)this[r]=u[r]}var B=function(){return T.exports}(),D=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-pagination",{attrs:{disabled:"","show-size-changer":"","show-quick-jumper":"",current:t.current,size:t.size,total:100,"show-total":function(e){return"\u5171 "+e+" \u6761"}},on:{"update:current":function(e){t.current=e},"update:size":function(e){t.size=e}}})},I=[];const N={components:{[a.name]:a},data:()=>({current:1,size:10})},i={};var O=n(N,D,I,!1,U,null,null,null);function U(t){for(let r in i)this[r]=i[r]}var G=function(){return O.exports}(),H=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-doc"},[s("h1",[t._v("Pagination \u5206\u9875")]),t._m(0),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u57FA\u672C\u4F7F\u7528")]),t._m(1),s("div",{staticClass:"meve-component-preview"},[s("basic-use")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-pagination")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":current.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"current"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100"')]),t._v(" />")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u5FEB\u901F\u8DF3\u8F6C")]),t._m(2),s("div",{staticClass:"meve-component-preview"},[s("quick-jumper")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-pagination")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show-quick-jumper")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":current.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"current"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100"')]),t._v(`
  />`)]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u6BCF\u9875\u6761\u6570")]),t._m(3),s("div",{staticClass:"meve-component-preview"},[s("size-changer")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"column"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"large"')]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-pagination")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show-size-changer")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":current.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"current"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100"')]),t._v(`
    />`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-pagination")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show-size-changer")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":current.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"current"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size-option")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"[10, 20]"')]),t._v(`
    />`)]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`,
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u663E\u793A\u603B\u6761\u6570")]),t._m(4),s("div",{staticClass:"meve-component-preview"},[s("total")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"column"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"large"')]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-pagination")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":current.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"current"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show-total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"(total) => `\u5171 ${total} \u6761`"')]),t._v(`
    />`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-pagination")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":current.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"current"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show-total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"(total, [start, end]) => `\u5171 ${total} \u6761\uFF0C\u5F53\u524D ${start} \u5230  ${end} \u6761`"')]),t._v(`
    />`)]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u7981\u7528")]),t._m(5),s("div",{staticClass:"meve-component-preview"},[s("disabled")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-pagination")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show-size-changer")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show-quick-jumper")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":current.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"current"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"size"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"100"')]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show-total")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"(total) => `\u5171 ${total} \u6761`"')]),t._v(`
  />`)]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(`
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`
`)])])])],1),s("h2",[t._v("API")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)])},K=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u4ECB\u7ECD")]),s("p",[t._v("\u5206\u9875\u63D2\u4EF6")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v(":current.sync")]),t._v("\u7ED1\u5B9A\u5F53\u524D\u9875\uFF0C\u901A\u8FC7"),s("code",{pre:!0},[t._v(":size.sync")]),t._v("\u7ED1\u5B9A\u6BCF\u9875\u6761\u6570")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("showQuickJumper")]),t._v("\u5F00\u542F\u5FEB\u901F\u8DF3\u8F6C\u529F\u80FD")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("showSizeChanger")]),t._v("\u5F00\u542F\u8BBE\u7F6E\u6BCF\u9875\u6761\u6570\u7684\u529F\u80FD\uFF0C\u901A\u8FC7"),s("code",{pre:!0},[t._v("sizeOption")]),t._v("\u81EA\u5B9A\u4E49\u53EF\u9009\u7684\u6BCF\u9875\u6761\u6570")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("showTotal")]),t._v("\u81EA\u5B9A\u4E49\u603B\u6761\u6570\u663E\u793A\u5185\u5BB9")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("disabled")]),t._v("\u5F00\u542F\u7981\u7528\u72B6\u6001")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u5C5E\u6027")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("current.sync")])]),s("td",[t._v("\u5F53\u524D\u9875\u6570")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("strong",[t._v("1")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("size.sync")])]),s("td",[t._v("\u6BCF\u9875\u6761\u6570")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("strong",[t._v("10")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("total")])]),s("td",[t._v("\u603B\u6761\u6570")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("strong",[t._v("0")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("disabled")])]),s("td",[t._v("\u662F\u5426\u7981\u7528\u5206\u9875")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("show-size-changer")])]),s("td",[t._v("\u662F\u5426\u663E\u793A "),s("code",{pre:!0},[t._v("size")]),t._v(" \u5207\u6362\u5668")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("show-quick-jumper")])]),s("td",[t._v("\u662F\u5426\u5F00\u542F\u5FEB\u901F\u8DF3\u8F6C\u529F\u80FD")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("size-option")])]),s("td",[t._v("\u6307\u5B9A\u6BCF\u9875\u53EF\u4EE5\u663E\u793A\u591A\u5C11\u6761")]),s("td",[s("em",[t._v("number[]")])]),s("td",[s("strong",[t._v("[10, 20, 50, 100]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("show-total")])]),s("td",[t._v("\u7528\u4E8E\u663E\u793A\u6570\u636E\u603B\u91CF\u548C\u5F53\u524D\u6570\u636E\u987A\u5E8F")]),s("td",[s("em",[t._v("(total: number, range: [number, number]) => string")])]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u4E8B\u4EF6")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u4E8B\u4EF6\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u56DE\u8C03\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("change")])]),s("td",[s("code",{pre:!0},[t._v("current")]),t._v(" \u6216 "),s("code",{pre:!0},[t._v("size")]),t._v(" \u6539\u53D8\u540E\u7684\u56DE\u8C03")]),s("td",[s("strong",[t._v("current: number\uFF0Csize: number")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u65B9\u6CD5")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u65B9\u6CD5\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8FD4\u56DE\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("prev")])]),s("td",[t._v("\u4E0A\u4E00\u9875")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("next")])]),s("td",[t._v("\u4E0B\u4E00\u9875")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("to")])]),s("td",[t._v("\u8DF3\u8F6C\u9875\u7801\uFF0C\u8D8A\u754C\u4F1A\u4FEE\u6B63")]),s("td",[s("em",[t._v("number")])]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u63D2\u69FD")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u63D2\u69FD\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("prev-button")])]),s("td",[t._v("\u4E0A\u4E00\u9875\u6309\u94AE\u5185\u5BB9")]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("next-button")])]),s("td",[t._v("\u4E0B\u4E00\u9875\u6309\u94AE\u5185\u5BB9")]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u6837\u5F0F\u53D8\u91CF")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53D8\u91CF\u540D")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-active-color")])]),s("td",[s("code",{pre:!0},[t._v("var(--color-primary)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-active-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#fff")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-pager-size")])]),s("td",[s("code",{pre:!0},[t._v("36px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-pager-border-radius")])]),s("td",[s("code",{pre:!0},[t._v("50%")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-pager-border")])]),s("td",[s("code",{pre:!0},[t._v("thin solid #dee2e6")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-pager-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#8898aa")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-pager-font-size")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-pager-gap")])]),s("td",[s("code",{pre:!0},[t._v("6px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-pager-hover-color")])]),s("td",[s("code",{pre:!0},[t._v("#dee2e6")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-extra-component-gap")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-total-font-size")])]),s("td",[s("code",{pre:!0},[t._v("15px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-total-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#8898aa")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-size-changer-width")])]),s("td",[s("code",{pre:!0},[t._v("94px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-size-changer-height")])]),s("td",[s("code",{pre:!0},[t._v("32px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-size-changer-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#8898aa")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-quick-jumper-width")])]),s("td",[s("code",{pre:!0},[t._v("94px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-quick-jumper-height")])]),s("td",[s("code",{pre:!0},[t._v("32px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-quick-jumper-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#8898aa")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-quick-jumper-placeholder-font-size")])]),s("td",[s("code",{pre:!0},[t._v("13px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-arrow-icon-size")])]),s("td",[s("code",{pre:!0},[t._v("16px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--pagination-offset-y: 10px;")])]),s("td",[s("code",{pre:!0},[t._v("10px")])])])])])])}];const L={components:{BasicUse:$,QuickJumper:C,SizeChanger:P,Total:B,Disabled:G}},o={};var V=n(L,H,K,!1,W,null,null,null);function W(t){for(let r in o)this[r]=o[r]}var bt=function(){return V.exports}();export{bt as default};