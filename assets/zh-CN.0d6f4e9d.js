import{P as e}from"./index.503193fa.js";import{B as l}from"./index.3f9b7da1.js";import{S as v}from"./index.151060a5.js";import{n}from"./main.91abb042.js";import{M as o}from"./index.69d7e621.js";import"./create.d5ed34a6.js";import"./shared.c7f62d01.js";import"./zIndex.a6423b4e.js";import"./index.5b31b8c0.js";import"./vendor.b6844a64.js";import"./lock.6e857d47.js";/* empty css               */import"./index.45eae9d1.js";import"./index.4fc42c55.js";import"./elements.024da98f.js";/* empty css              */import"./index.77d610ea.js";import"./components.b6372a71.js";var h=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"example"},[t("m-space",[t("m-button",{attrs:{type:"primary"},on:{click:function(r){s.center=!s.center}}},[s._v("\u4E2D\u95F4\u5F39\u51FA")]),t("m-button",{attrs:{type:"primary"},on:{click:function(r){s.top=!s.top}}},[s._v("\u4E0A\u65B9\u5F39\u51FA")]),t("m-button",{attrs:{type:"primary"},on:{click:function(r){s.right=!s.right}}},[s._v("\u53F3\u4FA7\u5F39\u51FA")]),t("m-button",{attrs:{type:"primary"},on:{click:function(r){s.bottom=!s.bottom}}},[s._v("\u4E0B\u65B9\u5F39\u51FA")]),t("m-button",{attrs:{type:"primary"},on:{click:function(r){s.left=!s.left}}},[s._v("\u5DE6\u4FA7\u5F39\u51FA")])],1),t("m-popup",{model:{value:s.center,callback:function(r){s.center=r},expression:"center"}},[t("div",{staticClass:"text"},[s._v(" \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020 ")])]),t("m-popup",{attrs:{position:"top"},model:{value:s.top,callback:function(r){s.top=r},expression:"top"}},[t("div",{staticClass:"text"},[s._v(" \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020 ")])]),t("m-popup",{attrs:{position:"right"},model:{value:s.right,callback:function(r){s.right=r},expression:"right"}},[t("div",{staticClass:"text"},[s._v(" \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020 ")])]),t("m-popup",{attrs:{position:"bottom"},model:{value:s.bottom,callback:function(r){s.bottom=r},expression:"bottom"}},[t("div",{staticClass:"text"},[s._v(" \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020 ")])]),t("m-popup",{attrs:{position:"left"},model:{value:s.left,callback:function(r){s.left=r},expression:"left"}},[t("div",{staticClass:"text"},[s._v(" \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020 ")])])],1)},i=[];const j={components:{[e.name]:e,[l.name]:l,[v.name]:v},data:()=>({top:!1,right:!1,bottom:!1,left:!1,center:!1})},p={};var m=n(j,h,i,!1,d,"1908e814",null,null);function d(s){for(let a in p)this[a]=p[a]}var g=function(){return m.exports}(),y=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"example"},[t("m-space",[t("m-button",{attrs:{type:"primary"},on:{click:function(r){s.overlayStyle=!s.overlayStyle}}},[s._v("\u906E\u7F69\u5C42\u6837\u5F0F")]),t("m-button",{attrs:{type:"primary"},on:{click:function(r){s.overlayClass=!s.overlayClass}}},[s._v("\u906E\u7F69\u5C42\u7C7B\u540D")])],1),t("m-popup",{attrs:{"overlay-style":{backgroundColor:"rgba(0, 0, 0, 0.3)"}},model:{value:s.overlayStyle,callback:function(r){s.overlayStyle=r},expression:"overlayStyle"}},[t("div",{staticClass:"text"},[s._v(" \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020 ")])]),t("m-popup",{attrs:{"overlay-class":"custom-overlay"},model:{value:s.overlayClass,callback:function(r){s.overlayClass=r},expression:"overlayClass"}},[t("div",{staticClass:"text"},[s._v(" \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020 ")])])],1)},f=[];const b={components:{[e.name]:e,[l.name]:l,[v.name]:v},data:()=>({overlayStyle:!1,overlayClass:!1})},_={};var x=n(b,y,f,!1,k,"111b065f",null,null);function k(s){for(let a in _)this[a]=_[a]}var C=function(){return x.exports}(),$=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"example"},[t("m-button",{attrs:{type:"primary"},on:{click:function(r){s.show=!s.show}}},[s._v("\u5F00\u542F\u906E\u7F69\u5C42")]),t("m-popup",{on:{open:function(r){return s.showMessage("open")},close:function(r){return s.showMessage("close")},opened:function(r){return s.showMessage("opened")},closed:function(r){return s.showMessage("closed")}},model:{value:s.show,callback:function(r){s.show=r},expression:"show"}},[t("div",{staticClass:"text"},[s._v(" \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020 ")])])],1)},w=[];const M={components:{[e.name]:e,[l.name]:l},data:()=>({show:!1}),methods:{showMessage(s){o(s)}}},c={};var S=n(M,$,w,!1,E,"946b8eac",null,null);function E(s){for(let a in c)this[a]=c[a]}var P=function(){return S.exports}(),F=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"meve-site-doc"},[t("h1",[s._v("Popup \u5F39\u51FA\u5C42")]),s._m(0),t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u5F39\u51FA\u65B9\u5411")]),s._m(1),t("div",{staticClass:"meve-component-preview"},[t("position")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"example"')]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-space")]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center = !center"')]),s._v(">")]),s._v("\u4E2D\u95F4\u5F39\u51FA"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"top = !top"')]),s._v(">")]),s._v("\u4E0A\u65B9\u5F39\u51FA"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"right = !right"')]),s._v(">")]),s._v("\u53F3\u4FA7\u5F39\u51FA"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bottom = !bottom"')]),s._v(">")]),s._v("\u4E0B\u65B9\u5F39\u51FA"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left = !left"')]),s._v(">")]),s._v("\u5DE6\u4FA7\u5F39\u51FA"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-space")]),s._v(">")]),s._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v(`
        \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(">")]),s._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"top"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"top"')]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v(`
        \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(">")]),s._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v(`
        \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(">")]),s._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bottom"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bottom"')]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v(`
        \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(">")]),s._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v(`
        \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bottom")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("center")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(`,
  })
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".text")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300px")]),s._v(`;
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(`;
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#888")]),s._v(`;
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42")]),s._m(2),t("div",{staticClass:"meve-component-preview"},[t("overlay")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"example"')]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-space")]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"overlayStyle = !overlayStyle"')]),s._v(">")]),s._v("\u906E\u7F69\u5C42\u6837\u5F0F"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"overlayClass = !overlayClass"')]),s._v(">")]),s._v("\u906E\u7F69\u5C42\u7C7B\u540D"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-space")]),s._v(">")]),s._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":overlay-style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(`"{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }"`)]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"overlayStyle"')]),s._v(`
    >`)]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v(`
        \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(">")]),s._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("overlay-class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"custom-overlay"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"overlayClass"')]),s._v(">")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v(`
        \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("overlayStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("overlayClass")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(`,
  })
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".custom-overlay")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("rgba")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.3")]),s._v(`);
}

`),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".text")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300px")]),s._v(`;
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(`;
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#888")]),s._v(`;
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v(`
`)])])])],1),t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u4E8B\u4EF6\u76D1\u542C")]),t("p",[s._v("\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u5185\u7F6E\u4E8B\u4EF6\u76D1\u542C\u5F39\u51FA\u5C42\u7684\u5F00\u542F\u5173\u95ED\u72B6\u6001")]),t("div",{staticClass:"meve-component-preview"},[t("events")],1),t("app-code",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"example"')]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show = !show"')]),s._v(">")]),s._v("\u5F00\u542F\u906E\u7F69\u5C42"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v(`

    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(`
      @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("open")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(`"showMessage('open')"`)]),s._v(`
      @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("close")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(`"showMessage('close')"`)]),s._v(`
      @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("opened")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(`"showMessage('opened')"`)]),s._v(`
      @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("closed")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(`"showMessage('closed')"`)]),s._v(`
    >`)]),s._v(`
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v(`
        \u5143\u5B87\u5B99\u672C\u8D28\u4E0A\u662F\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u865A\u62DF\u5316\u3001\u6570\u5B57\u5316\u8FC7\u7A0B\uFF0C\u9700\u8981\u5BF9\u5185\u5BB9\u751F\u4EA7\u3001\u7ECF\u6D4E\u7CFB\u7EDF\u3001\u7528\u6237\u4F53\u9A8C\u4EE5\u53CA\u5B9E\u4F53\u4E16\u754C\u5185\u5BB9\u7B49\u8FDB\u884C\u5927\u91CF\u6539\u9020
      `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
    `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-popup")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Message } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@meve/ui'")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(`,
  }),
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(`: {
    `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("showMessage")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("message")]),s._v(")")]),s._v(` {
      Message(message)
    }
  }
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".text")]),s._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300px")]),s._v(`;
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(`;
  `),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#888")]),s._v(`;
}
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v(`
`)])])])],1),t("h2",[s._v("API")]),s._m(3),s._m(4),s._m(5),s._m(6)])},R=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u4ECB\u7ECD")]),t("p",[s._v("\u5F39\u51FA\u5C42\uFF0C\u652F\u6301\u4E0A\u4E0B\u5DE6\u53F3\u4E2D\u4E94\u4E2A\u65B9\u5411\u7684\u5F39\u51FA")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("\u901A\u8FC7"),t("code",{pre:!0},[s._v("position")]),s._v("\u6765\u51B3\u5B9A\u5F39\u51FA\u7684\u65B9\u5411")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("\u53EF\u4EE5\u901A\u8FC7"),t("code",{pre:!0},[s._v("overlayClass")]),s._v("\u548C"),t("code",{pre:!0},[s._v("overlayStyle")]),s._v("\u4FEE\u6539\u906E\u7F69\u5C42\u7684\u6837\u5F0F")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u5C5E\u6027")]),t("table",[t("thead",[t("tr",[t("th",[s._v("\u53C2\u6570")]),t("th",[s._v("\u8BF4\u660E")]),t("th",[s._v("\u7C7B\u578B")]),t("th",[s._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("v-model")])]),t("td",[s._v("\u662F\u5426\u663E\u793A\u5F39\u51FA\u5C42")]),t("td",[t("em",[s._v("boolean")])]),t("td",[t("strong",[s._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("position")])]),t("td",[s._v("\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A "),t("code",{pre:!0},[s._v("top")]),s._v(" "),t("code",{pre:!0},[s._v("bottom")]),s._v(" "),t("code",{pre:!0},[s._v("right")]),s._v(" "),t("code",{pre:!0},[s._v("left")]),s._v(" "),t("code",{pre:!0},[s._v("center")])]),t("td",[t("em",[s._v("string")])]),t("td",[t("strong",[s._v("center")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("overlay")])]),t("td",[s._v("\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42")]),t("td",[t("em",[s._v("boolean")])]),t("td",[t("strong",[s._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("overlay-class")])]),t("td",[s._v("\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684class")]),t("td",[t("em",[s._v("string")])]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("overlay-style")])]),t("td",[s._v("\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684style")]),t("td",[t("em",[s._v("string")])]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("lock-scroll")])]),t("td",[s._v("\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1body\u7684\u6EDA\u52A8")]),t("td",[t("em",[s._v("boolean")])]),t("td",[t("strong",[s._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("close-on-click-overlay")])]),t("td",[s._v("\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42")]),t("td",[t("em",[s._v("boolean")])]),t("td",[t("strong",[s._v("true")])])])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u4E8B\u4EF6")]),t("table",[t("thead",[t("tr",[t("th",[s._v("\u4E8B\u4EF6\u540D")]),t("th",[s._v("\u8BF4\u660E")]),t("th",[s._v("\u53C2\u6570")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("open")])]),t("td",[s._v("\u6253\u5F00\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1")]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("opened")])]),t("td",[s._v("\u6253\u5F00\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1")]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("close")])]),t("td",[s._v("\u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1")]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("closed")])]),t("td",[s._v("\u5173\u95ED\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1")]),t("td",[t("strong",[s._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("click-overlay")])]),t("td",[s._v("\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1")]),t("td",[t("strong",[s._v("-")])])])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u63D2\u69FD")]),t("table",[t("thead",[t("tr",[t("th",[s._v("\u63D2\u69FD\u540D")]),t("th",[s._v("\u8BF4\u660E")]),t("th",[s._v("\u53C2\u6570")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("default")])]),t("td",[s._v("\u5F39\u51FA\u5C42\u5185\u5BB9")]),t("td",[t("strong",[s._v("-")])])])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"meve-site-card"},[t("h3",[s._v("\u6837\u5F0F\u53D8\u91CF")]),t("table",[t("thead",[t("tr",[t("th",[s._v("\u53D8\u91CF\u540D")]),t("th",[s._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("--popup-overlay-background-color")])]),t("td",[t("code",{pre:!0},[s._v("rgba(0, 0, 0, 0.6)")])])]),t("tr",[t("td",[t("code",{pre:!0},[s._v("--popup-content-background-color")])]),t("td",[t("code",{pre:!0},[s._v("#fff")])])])])])])}];const O={components:{Position:g,Overlay:C,Events:P}},u={};var z=n(O,F,R,!1,B,null,null,null);function B(s){for(let a in u)this[a]=u[a]}var ss=function(){return z.exports}();export{ss as default};