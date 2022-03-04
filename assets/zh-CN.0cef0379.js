var K=Object.defineProperty,z=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var N=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,m=(e,t)=>{for(var s in t||(t={}))L.call(t,s)&&N(e,s,t[s]);if(x)for(var s of x(t))B.call(t,s)&&N(e,s,t[s]);return e},y=(e,t)=>z(e,A(t));import{I as v}from"./index.ae1cb571.js";import{R as F}from"./index.45eae9d1.js";import{f as d,o as R,c as H,e as V,a as D}from"./shared.285cd5cf.js";import{c as j}from"./create.af6e9796.js";import{c as h,a as o}from"./relation.9e421618.js";import{d as T,t as O}from"./elements.aa4184a2.js";import{n as W}from"./components.e3c2a99c.js";/* empty css               */import{n as p}from"./main.78a4988a.js";import{S as M}from"./index.a42a7a69.js";import"./vendor.9049838c.js";const q={name:{type:[String,Number]},label:{type:[String,Number,Function]},icon:{type:[String,Object,Function]},disabled:{type:Boolean}};const{createComponent:J,namespace:n}=j("menu-item-group"),c=J({mixins:[h("menu",{parentKey:"menuParent",childrenKey:"menuItemGroups"}),o("menuItemGroup",{childrenKey:"menuItemGroups"}),h("menuItemGroup",{parentKey:"menuItemGroupParent",childrenKey:"menuItemGroups"}),o("menuItemGroup",{childrenKey:"menuItems"})],directives:{Ripple:F},props:q,data:()=>({expanded:!1,listHeight:0,level:0}),mounted(){this.updateLevel()},updated(){this.updateLevel()},methods:{renderIcon(){const e=this.$createElement;if(this.hasSlots("icon"))return this.slots("icon");const{icon:t}=this;if(d(t))return t(this.$createElement);if(R(t))return e(v,{class:n("__icon"),attrs:{"menu-item-group-cover":!0},props:m({},t)});if(H(t))return e(v,{class:n("__icon"),attrs:{"menu-item-group-cover":!0,name:t}})},renderLabel(){const e=this.$createElement;if(this.hasSlots("label"))return this.slots("label");const{label:t}=this;return d(t)?t(this.$createElement):e("div",{class:n("__label")},[t])},handleClick(){this.disabled||this.menuParent.onGroupChange(this)},reduce(){!this.expanded||(this.menuItemGroups.forEach(e=>e.reduce()),this.expanded=!1,this.syncParentHeight(this.menuItemGroupParent,-this.listHeight),this.listHeight=0)},syncParentHeight(e,t){e&&(e.listHeight+=t,this.syncParentHeight(e.menuItemGroupParent,t))},async expand(){this.expanded||(this.menuItemGroupParent&&await this.menuItemGroupParent.expand(),this.expanded=!0,await this.tickExpandAnimation())},async tickExpandAnimation(){var t,s;this.listHeight=-1,await W();const e=(s=(t=this.$refs.list)==null?void 0:t.offsetHeight)!=null?s:0;this.listHeight=0,await T(),this.listHeight=e,this.syncParentHeight(this.menuItemGroupParent,e)},updateLevel(){let e=0,t=this.menuItemGroupParent;for(;t;)e++,t=t.menuItemGroupParent;this.level=e}},render(){const e=arguments[0],{disabled:t,listHeight:s,expanded:a,level:l,menuParent:i}=this;return e("div",{class:[n(),"m--box"]},[e("div",{class:[n("__trigger"),t?n("--disabled"):null,a?n("--trigger-expanded"):null],on:{click:this.handleClick},directives:[{name:"ripple",value:{disabled:t}}]},[e("div",{class:n("__indent"),style:{paddingLeft:`${(l-1)*O(i.indent)}px`}}),this.renderIcon(),this.renderLabel(),e(v,{class:[n("__arrow"),a?n("--arrow-expanded"):null],attrs:{"menu-item-group-cover":!0,name:"menu-down"}})]),e("div",{ref:"list",class:[n("__list"),n("--list-height-transition")],style:{height:s>=0?`${s}px`:void 0}},[this.slots()])])}}),Q={name:{type:[String,Number]},label:{type:[String,Number,Function]},icon:{type:[String,Object,Function]},disabled:{type:Boolean}};const{createComponent:U,namespace:_}=j("menu-item"),u=U({mixins:[h("menu",{parentKey:"menuParent",childrenKey:"menuItems"}),h("menuItemGroup",{parentKey:"menuItemGroupParent",childrenKey:"menuItems"})],directives:{Ripple:F},props:Q,data:()=>({selected:!1}),methods:{renderIcon(){const e=this.$createElement;if(this.hasSlots("icon"))return this.slots("icon");const{icon:t}=this;if(d(t))return t(this.$createElement);if(R(t))return e(v,{class:_("__icon"),attrs:{"menu-item-cover":!0},props:m({},t)});if(H(t))return e(v,{class:_("__icon"),attrs:{"menu-item-cover":!0,name:t}})},renderLabel(){const e=this.$createElement;if(this.hasSlots("label"))return this.slots("label");const{label:t}=this;return d(t)?t(this.$createElement):e("div",{class:_("__label")},[t])},handleClick(){this.disabled||this.menuParent.onItemChange(this)}},render(){const e=arguments[0],{disabled:t,selected:s,menuParent:a,menuItemGroupParent:l}=this;return e("div",{class:[_(),"m--box",s?_("--selected"):null,t?_("--disabled"):null],on:{click:this.handleClick},directives:[{name:"ripple",value:{disabled:t}}]},[e("div",{class:_("__indent"),style:{paddingLeft:l?`${l.level*O(a.indent)}px`:void 0}}),this.renderIcon(),this.renderLabel()])}}),X={options:{type:Array,default:()=>[]},expandedNames:{type:Array,default:()=>[]},selectedNames:{type:Array,default:()=>[]},nameField:{type:String,default:"name"},labelField:{type:String,default:"label"},accordion:{type:Boolean,default:!1},indent:{type:[String,Number],default:24},multiple:{type:Boolean,default:!1}};function Y(e,t){var s;((s=process==null?void 0:process.env)==null?void 0:s.NODE_ENV)==="development"&&console.warn(`Warning: ${e} ${t?`from ${t}`:""}`)}const{createComponent:Z,namespace:ee}=j("menu"),r=Z({mixins:[o("menu",{childrenKey:"menuItemGroups"}),o("menu",{childrenKey:"menuItems"})],props:X,watch:{expandedNames(){this.syncExpand()},selectedNames(e){!this.multiple&&e.length>1&&Y("Not in multiple mode, it is detected that multiple menu-items are selected"),this.syncSelect()},menuItemGroups(){this.syncExpand(),this.syncSelect()},menuItems(){this.syncExpand(),this.syncSelect()}},mounted(){window.menu=this},methods:{onGroupChange(e){const t=!this.expandedNames.includes(e.name),s=!t;let a=[...this.expandedNames];if(this.accordion&&t){const l=this.getExpandedSiblingGroups(e);a=this.removeGroupsNames(l,a),a.push(e.name)}else t?a.push(e.name):s&&(a=this.removeGroupNames(e,a));this.$emit("update:expanded-names",a)},onItemChange(e){const t=[...this.selectedNames];this.multiple?!t.includes(e.name)?(t.push(e.name),this.$emit("update:selected-names",t)):(V(t,e.name),this.$emit("update:selected-names",t)):this.$emit("update:selected-names",[e.name])},syncExpand(){this.menuItemGroups.forEach(e=>{this.expandedNames.includes(e.name)?e.expand():e.reduce()})},syncSelect(){this.menuItems.forEach(e=>{e.selected=this.selectedNames.includes(e.name)})},getExpandedSiblingGroups(e){return this.menuItemGroups.filter(t=>e!==t&&t.expanded&&t.level===e.level)},collectChildrenNames(e,t){e.menuItemGroups.forEach(s=>{t.push(s.name),s.menuItemGroups.length&&this.collectChildrenNames(s,t)})},findGroupChildrenNames(e){const t=[];return this.collectChildrenNames(e,t),t},removeGroupNames(e,t){const s=[e.name,...this.findGroupChildrenNames(e)];return t.filter(a=>!s.includes(a))},removeGroupsNames(e,t){return e.reduce((s,a)=>this.removeGroupNames(a,s),t)},normalizeOption(e){return y(m({},e),{name:e[this.nameField],label:e[this.labelField]})},renderOptions(e){const t=this.$createElement,s=a=>D(a)&&a.length;return e.map(a=>{const{children:l,icon:i,disabled:g,name:f,label:b}=this.normalizeOption(a);return s(l)?t(c,{attrs:{name:f,icon:i,label:b,disabled:g}},[this.renderOptions(l)]):t(u,{attrs:{name:f,icon:i,label:b,disabled:g}})})}},render(){return arguments[0]("div",{class:[ee(),"m--box"]},[this.hasSlots()?this.slots():this.renderOptions(this.options)])}});var se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-menu",{attrs:{options:e.options,"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}})},te=[];const ae={components:{[r.name]:r},data:()=>({expandedNames:["1"],selectedNames:["1-1"],options:[{name:"1",label:"Meve: 1",children:[{name:"1-1",label:"Meve: 1-1"},{name:"1-2",label:"Meve: 1-2"}]},{name:"2",label:"Meve: 2",children:[{name:"2-1",label:"Meve: 2-1"},{name:"2-2",label:"Meve: 2-2"}]},{name:"3",label:"Meve: 3"}]})},$={};var re=p(ae,se,te,!1,ne,null,null,null);function ne(e){for(let t in $)this[t]=$[t]}var le=function(){return re.exports}(),pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-menu",{attrs:{multiple:"",options:e.options,"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}})},ve=[];const _e={components:{[r.name]:r},data:()=>({expandedNames:[],selectedNames:[],options:[{name:"1",label:"Meve: 1",children:[{name:"1-1",label:"Meve: 1-1"},{name:"1-2",label:"Meve: 1-2"}]},{name:"2",label:"Meve: 2",children:[{name:"2-1",label:"Meve: 2-1"},{name:"2-2",label:"Meve: 2-2"}]},{name:"3",label:"Meve: 3"}]})},I={};var ce=p(_e,pe,ve,!1,ue,null,null,null);function ue(e){for(let t in I)this[t]=I[t]}var ie=function(){return ce.exports}(),me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-menu",{attrs:{options:e.options,"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}})},de=[];const he={components:{[r.name]:r},data:()=>({expandedNames:[],selectedNames:[],options:[{name:"1",label:"Meve: 1",children:[{name:"1-1",label:"Meve: 1-1"},{name:"1-2",label:"Meve: 1-2"}]},{name:"2",label:"Meve: 2",children:[{name:"2-1",label:"Meve: 2-1"},{name:"2-2",label:"Meve: 2-2"}]},{name:"3",label:"Meve: 3",disabled:!0}]})},C={};var oe=p(he,me,de,!1,je,null,null,null);function je(e){for(let t in C)this[t]=C[t]}var ge=function(){return oe.exports}(),fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-menu",{attrs:{options:e.options,"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}})},be=[];const xe={components:{[r.name]:r},data:()=>({expandedNames:[],selectedNames:[],options:[{name:"1",label:"Meve: 1",icon:"information",children:[{name:"1-1",label:"Meve: 1-1"},{name:"1-2",label:"Meve: 1-2"}]},{name:"2",label:"Meve: 2",icon:"warning",children:[{name:"2-1",label:"Meve: 2-1"},{name:"2-2",label:"Meve: 2-2"}]},{name:"3",label:"Meve: 3",icon:e=>e(v,{props:{name:"checkbox-marked-circle"},style:{marginRight:"10px"}})}]})},k={};var Ne=p(xe,fe,be,!1,ye,null,null,null);function ye(e){for(let t in k)this[t]=k[t]}var Me=function(){return Ne.exports}(),$e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-menu",{attrs:{accordion:"",options:e.options,"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}})},Ie=[];const Ce={components:{[r.name]:r},data:()=>({expandedNames:[],selectedNames:[],options:[{name:"1",label:"Meve: 1",children:[{name:"1-1",label:"Meve: 1-1"},{name:"1-2",label:"Meve: 1-2"}]},{name:"2",label:"Meve: 2",children:[{name:"2-1",label:"Meve: 2-1"},{name:"2-2",label:"Meve: 2-2"}]},{name:"3",label:"Meve: 3"}]})},S={};var ke=p(Ce,$e,Ie,!1,Se,null,null,null);function Se(e){for(let t in S)this[t]=S[t]}var we=function(){return ke.exports}(),Ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-space",[s("m-menu",{staticClass:"menu",attrs:{options:e.options,"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}}),s("m-menu",{staticClass:"menu",attrs:{indent:54,options:e.options,"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}})],1)},Ge=[];const Pe={components:{[r.name]:r,[M.name]:M},data:()=>({expandedNames:[],selectedNames:[],options:[{name:"1",label:"Meve: 1",children:[{name:"1-1",label:"Meve: 1-1",children:[{name:"1-1-1",label:"Meve: 1-1-1",children:[{name:"1-1-1-1",label:"Meve: 1-1-1-1"}]}]}]}]})},w={};var Fe=p(Pe,Ee,Ge,!1,Re,"767b228e",null,null);function Re(e){for(let t in w)this[t]=w[t]}var He=function(){return Fe.exports}(),Oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-menu",{attrs:{"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}},[s("m-menu-item-group",{attrs:{name:"1",label:"Meve: 1"}},[s("m-menu-item",{attrs:{name:"1-1",label:"Meve: 1-1"}})],1),s("m-menu-item-group",{attrs:{name:"2",label:"Meve: 2"}},[s("m-menu-item",{attrs:{name:"2-1",label:"Meve: 2-1"}})],1),s("m-menu-item",{attrs:{name:"3-1",label:"Meve: 3"}})],1)},Ke=[];const ze={components:{[r.name]:r,[u.name]:u,[c.name]:c},data:()=>({expandedNames:[],selectedNames:[]})},E={};var Ae=p(ze,Oe,Ke,!1,Le,null,null,null);function Le(e){for(let t in E)this[t]=E[t]}var Be=function(){return Ae.exports}(),Ve=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("m-menu",{attrs:{"expanded-names":e.expandedNames,"selected-names":e.selectedNames},on:{"update:expandedNames":function(a){e.expandedNames=a},"update:expanded-names":function(a){e.expandedNames=a},"update:selectedNames":function(a){e.selectedNames=a},"update:selected-names":function(a){e.selectedNames=a}}},[s("m-menu-item-group",{attrs:{name:"1"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("Meve: 1")]},proxy:!0},{key:"icon",fn:function(){return[s("m-icon",{staticClass:"icon",attrs:{name:"information"}})]},proxy:!0}])},[s("m-menu-item",{attrs:{name:"1-1"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("Meve: 1-1")]},proxy:!0}])})],1),s("m-menu-item-group",{attrs:{name:"2"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("Meve: 2")]},proxy:!0},{key:"icon",fn:function(){return[s("m-icon",{staticClass:"icon",attrs:{name:"warning"}})]},proxy:!0}])},[s("m-menu-item",{attrs:{name:"2-1"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("Meve: 2-1")]},proxy:!0}])})],1),s("m-menu-item",{attrs:{name:"3-1",disabled:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("Meve: 3")]},proxy:!0},{key:"icon",fn:function(){return[s("m-icon",{staticClass:"icon",attrs:{name:"checkbox-marked-circle"}})]},proxy:!0}])})],1)},De=[];const Te={components:{[r.name]:r,[u.name]:u,[c.name]:c,[v.name]:v},data:()=>({expandedNames:[],selectedNames:[]})},G={};var We=p(Te,Ve,De,!1,qe,"53427dbc",null,null);function qe(e){for(let t in G)this[t]=G[t]}var Je=function(){return We.exports}(),Qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"meve-site-doc"},[s("h1",[e._v("\u83DC\u5355 Menu")]),e._m(0),s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u914D\u7F6E\u83DC\u5355")]),e._m(1),s("div",{staticClass:"meve-component-preview"},[s("options")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":options")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"options"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
  />`)]),e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("expandedNames")]),e._v(": ["),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1'")]),e._v(`],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("selectedNames")]),e._v(": ["),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1'")]),e._v(`],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("options")]),e._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'3'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 3'")]),e._v(`,
      },
    ],
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u591A\u9009")]),e._m(2),s("div",{staticClass:"meve-component-preview"},[s("multiple")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("multiple")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":options")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"options"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
  />`)]),e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("expandedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("selectedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("options")]),e._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'3'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 3'")]),e._v(`,
      },
    ],
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u7981\u7528\u83DC\u5355\u9879")]),e._m(3),s("div",{staticClass:"meve-component-preview"},[s("disabled")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":options")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"options"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
  />`)]),e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("expandedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("selectedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("options")]),e._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'3'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 3'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("disabled")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(`
      },
    ],
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u5E26\u56FE\u6807")]),e._m(4),s("div",{staticClass:"meve-component-preview"},[s("icon")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":options")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"options"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
  />`)]),e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { Icon } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@meve/ui'")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("expandedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("selectedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("options")]),e._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("icon")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'information'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("icon")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'warning'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'3'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 3'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("icon")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("h")]),e._v(" =>")]),e._v(" h(Icon, { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("props")]),e._v(": { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'checkbox-marked-circle'")]),e._v(" }, "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("style")]),e._v(": { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("marginRight")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'10px'")]),e._v(` } })
      },
    ],
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u624B\u98CE\u7434\u6A21\u5F0F")]),s("p",[e._v("\u50CF\u662F\u624B\u98CE\u7434\u4E00\u6837\uFF0C\u540C\u7EA7\u83DC\u5355\u53EA\u5C55\u5F00\u4E00\u4E2A")]),s("div",{staticClass:"meve-component-preview"},[s("accordion")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("accordion")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":options")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"options"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
  />`)]),e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("expandedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("selectedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("options")]),e._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-1'")]),e._v(`,
          },
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'2-2'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 2-2'")]),e._v(`,
          },
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'3'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 3'")]),e._v(`,
      },
    ],
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u5C42\u7EA7\u7F29\u8FDB")]),e._m(5),s("div",{staticClass:"meve-component-preview"},[s("indent")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-space")]),e._v(">")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"menu"')]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":options")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"options"')]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
    />`)]),e._v(`

    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"menu"')]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":indent")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"54"')]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":options")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"options"')]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
    />`)]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-space")]),e._v(">")]),e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("expandedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("selectedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("options")]),e._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1'")]),e._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-1'")]),e._v(`,
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
              {
                `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1-1'")]),e._v(`,
                `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-1-1'")]),e._v(`,
                `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
                  {
                    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'1-1-1-1'")]),e._v(`,
                    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Meve: 1-1-1-1'")]),e._v(`,
                  },
                ]
              },
            ]
          }
        ]
      }
    ],
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("style")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"css"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[e._v(".menu")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[e._v("width")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("256px")]),e._v(`;
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("style")]),e._v(">")]),e._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u58F0\u660E\u5F0F\u7EC4\u4EF6\u751F\u6210\u83DC\u5355")]),e._m(6),s("div",{staticClass:"meve-component-preview"},[s("slots")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
  >`)]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item-group")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Meve: 1"')]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"1-1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Meve: 1-1"')]),e._v(" />")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item-group")]),e._v(">")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item-group")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"2"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Meve: 2"')]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"2-1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Meve: 2-1"')]),e._v("/>")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item-group")]),e._v(">")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"3-1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Meve: 3"')]),e._v("/>")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(">")]),e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("expandedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("selectedNames")]),e._v(`: [],
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u58F0\u660E\u5F0F\u7EC4\u4EF6\u63D2\u69FD")]),e._m(7),s("div",{staticClass:"meve-component-preview"},[s("component-slots")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":expanded-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"expandedNames"')]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":selected-names.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"selectedNames"')]),e._v(`
  >`)]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item-group")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"1"')]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"1-1"')]),e._v(">")]),e._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(">")]),e._v("Meve: 1-1"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(">")]),e._v(`

      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(">")]),e._v("Meve: 1"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("icon")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-icon")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"icon"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"information"')]),e._v("/>")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item-group")]),e._v(">")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item-group")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"2"')]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"2-1"')]),e._v(">")]),e._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(">")]),e._v("Meve: 2-1"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(">")]),e._v(`

      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(">")]),e._v("Meve: 2"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("icon")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-icon")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"icon"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v("/>")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item-group")]),e._v(">")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"3-1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("disabled")]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(">")]),e._v("Meve: 3"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("icon")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-icon")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"icon"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"checkbox-marked-circle"')]),e._v("/>")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu-item")]),e._v(">")]),e._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("m-menu")]),e._v(">")]),e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("expandedNames")]),e._v(`: [],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("selectedNames")]),e._v(`: [],
  })
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("style")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"css"}},[e._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[e._v(".icon")]),e._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[e._v("margin-right")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("10px")]),e._v(`;
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("style")]),e._v(">")]),e._v(`
`)])])])],1),s("h2",[e._v("API")]),e._m(8),e._m(9),e._m(10),e._m(11)])},Ue=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u4ECB\u7ECD")]),s("p",[e._v("\u6298\u53E0\u83DC\u5355")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\u901A\u8FC7"),s("code",{pre:!0},[e._v("options")]),e._v("\u751F\u6210\u83DC\u5355\u7ED3\u6784\uFF0C"),s("code",{pre:!0},[e._v("children")]),e._v("\u662F\u5B50\u7EA7\u914D\u7F6E\uFF0C\u901A\u8FC7"),s("code",{pre:!0},[e._v("expanedNames.sync")]),e._v("\u7ED1\u5B9A\u5C55\u5F00\u7684\u83DC\u5355\u540D\uFF0C\u901A\u8FC7"),s("code",{pre:!0},[e._v("selectedNames.sync")]),e._v("\u7ED1\u5B9A\u9009\u4E2D\u7684\u83DC\u5355\u540D")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\u914D\u7F6E"),s("code",{pre:!0},[e._v("multiple")]),e._v("\u5F00\u542F\u591A\u9009")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\u901A\u8FC7"),s("code",{pre:!0},[e._v("disabled")]),e._v("\u53EF\u4EE5\u7981\u7528\u67D0\u4E00\u4E2A\u83DC\u5355\u9879")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\u914D\u7F6E\u9879\u4F20\u5165"),s("code",{pre:!0},[e._v("icon")]),e._v("\u53EF\u6E32\u67D3\u4E00\u4E2A\u56FE\u6807\uFF0C\u4F20\u5165\u5B57\u7B26\u4E32\u9ED8\u8BA4\u4E3A"),s("code",{pre:!0},[e._v("icon")]),e._v("\u7EC4\u4EF6\u7684"),s("code",{pre:!0},[e._v("name")]),e._v("\u5C5E\u6027\uFF0C\u4E5F\u652F\u6301\u4F20\u5165\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u6E32\u67D3")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\u901A\u8FC7"),s("code",{pre:!0},[e._v("indent")]),e._v("\u8BBE\u7F6E\u7F29\u8FDB\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u4ECE\u7B2C\u4E09\u7EA7\u5F00\u59CB\u8FDB\u884C\u7F29\u8FDB")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\u901A\u8FC7\u83DC\u5355\u63D2\u69FD\u3001"),s("code",{pre:!0},[e._v("MenuItem")]),e._v("\u3001"),s("code",{pre:!0},[e._v("MenuItemGroup")]),e._v("\u58F0\u660E\u5F0F\u751F\u6210\u83DC\u5355\u7ED3\u6784")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49"),s("code",{pre:!0},[e._v("icon")]),e._v("\u3001"),s("code",{pre:!0},[e._v("label")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u5C5E\u6027")]),s("h4",[e._v("Menu Props")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u53C2\u6570")]),s("th",[e._v("\u8BF4\u660E")]),s("th",[e._v("\u7C7B\u578B")]),s("th",[e._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("options")])]),s("td",[e._v("\u83DC\u5355\u914D\u7F6E\u9879")]),s("td",[s("em",[e._v("MenuOption[]")])]),s("td",[s("strong",[e._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("expanded-names.sync")])]),s("td",[e._v("\u5C55\u5F00\u7684\u83DC\u5355\u7EC4\u540D\u6570\u7EC4")]),s("td",[s("em",[e._v("Array")])]),s("td",[s("strong",[e._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("selected-names.sync")])]),s("td",[e._v("\u9009\u4E2D\u7684\u83DC\u5355\u9879\u540D\u6570\u7EC4")]),s("td",[s("em",[e._v("Array")])]),s("td",[s("strong",[e._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("name-field")])]),s("td",[e._v("\u81EA\u5B9A\u4E49\u83DC\u5355\u9879\u552F\u4E00\u6807\u8BC6\u5C5E\u6027\u540D")]),s("td",[s("em",[e._v("string")])]),s("td",[s("strong",[e._v("name")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("label-field")])]),s("td",[e._v("\u81EA\u5B9A\u4E49\u83DC\u5355\u9879\u6587\u672C\u5C5E\u6027\u540D")]),s("td",[s("em",[e._v("string")])]),s("td",[s("strong",[e._v("label")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("accordion")])]),s("td",[e._v("\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F")]),s("td",[s("em",[e._v("boolean")])]),s("td",[s("strong",[e._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("indent")])]),s("td",[e._v("\u5C42\u7EA7\u7F29\u8FDB\u8DDD\u79BB")]),s("td",[s("em",[e._v("string | number")])]),s("td",[s("strong",[e._v("24")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("multiple")])]),s("td",[e._v("\u662F\u5426\u5F00\u542F\u591A\u9009\u6A21\u5F0F")]),s("td",[s("em",[e._v("boolean")])]),s("td",[s("strong",[e._v("false")])])])])]),s("h4",[e._v("MenuItemGroup Props")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u53C2\u6570")]),s("th",[e._v("\u8BF4\u660E")]),s("th",[e._v("\u7C7B\u578B")]),s("th",[e._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("name")])]),s("td",[e._v("\u83DC\u5355\u7EC4\u540D\uFF0C\u552F\u4E00\u6807\u8BC6")]),s("td",[s("em",[e._v("string | number")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("label")])]),s("td",[e._v("\u83DC\u5355\u7EC4\u6587\u672C")]),s("td",[s("em",[e._v("string | number | Function")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("icon")])]),s("td",[e._v("\u83DC\u5355\u7EC4\u56FE\u6807")]),s("td",[s("em",[e._v("string | IconProps | Function")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("disabled")])]),s("td",[e._v("\u662F\u5426\u7981\u7528\u83DC\u5355\u7EC4")]),s("td",[s("em",[e._v("boolean")])]),s("td",[s("strong",[e._v("false")])])])])]),s("h4",[e._v("MenuItem Props")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u53C2\u6570")]),s("th",[e._v("\u8BF4\u660E")]),s("th",[e._v("\u7C7B\u578B")]),s("th",[e._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("name")])]),s("td",[e._v("\u83DC\u5355\u9879\u540D\uFF0C\u552F\u4E00\u6807\u8BC6")]),s("td",[s("em",[e._v("string | number")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("label")])]),s("td",[e._v("\u83DC\u5355\u9879\u6587\u672C")]),s("td",[s("em",[e._v("string | number | Function")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("icon")])]),s("td",[e._v("\u83DC\u5355\u9879\u56FE\u6807")]),s("td",[s("em",[e._v("string | IconProps | Function")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("disabled")])]),s("td",[e._v("\u662F\u5426\u7981\u7528\u83DC\u5355\u9879")]),s("td",[s("em",[e._v("boolean")])]),s("td",[s("strong",[e._v("false")])])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("MenuOption")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u53C2\u6570")]),s("th",[e._v("\u8BF4\u660E")]),s("th",[e._v("\u7C7B\u578B")]),s("th",[e._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("name")])]),s("td",[e._v("\u83DC\u5355\u552F\u4E00\u6807\u8BC6")]),s("td",[s("em",[e._v("string | number")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("label")])]),s("td",[e._v("\u83DC\u5355\u6587\u672C\u5185\u5BB9, \u652F\u6301\u6E32\u67D3\u51FD\u6570")]),s("td",[s("em",[e._v("string | number | Function")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("icon")])]),s("td",[e._v("\u83DC\u5355\u56FE\u6807\u540D, \u652F\u6301\u6E32\u67D3\u51FD\u6570")]),s("td",[s("em",[e._v("string | number | Function")])]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("disabled")])]),s("td",[e._v("\u7981\u7528\u83DC\u5355")]),s("td",[s("em",[e._v("boolean")])]),s("td",[s("strong",[e._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("children")])]),s("td",[e._v("\u5B50\u83DC\u5355")]),s("td",[s("em",[e._v("MenuOption[]")])]),s("td",[s("strong",[e._v("-")])])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u63D2\u69FD")]),s("h4",[e._v("Menu Slots")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u63D2\u69FD\u540D")]),s("th",[e._v("\u8BF4\u660E")]),s("th",[e._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("default")])]),s("td",[e._v("\u83DC\u5355\u5185\u5BB9")]),s("td",[s("strong",[e._v("-")])])])])]),s("h4",[e._v("MenuItemGroup Slots")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u63D2\u69FD\u540D")]),s("th",[e._v("\u8BF4\u660E")]),s("th",[e._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("label")])]),s("td",[e._v("\u83DC\u5355\u7EC4\u6587\u672C")]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("icon")])]),s("td",[e._v("\u83DC\u5355\u7EC4\u56FE\u6807")]),s("td",[s("strong",[e._v("-")])])])])]),s("h4",[e._v("MenuItem Slots")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u63D2\u69FD\u540D")]),s("th",[e._v("\u8BF4\u660E")]),s("th",[e._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("label")])]),s("td",[e._v("\u83DC\u5355\u6587\u672C")]),s("td",[s("strong",[e._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("icon")])]),s("td",[e._v("\u83DC\u5355\u56FE\u6807")]),s("td",[s("strong",[e._v("-")])])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"meve-site-card"},[s("h3",[e._v("\u6837\u5F0F\u53D8\u91CF")]),s("h4",[e._v("Menu Variables")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u53D8\u91CF\u540D")]),s("th",[e._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-background")])]),s("td",[s("code",{pre:!0},[e._v("#fff")])])])])]),s("h4",[e._v("MenuItemGroup Variables")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u53D8\u91CF\u540D")]),s("th",[e._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-padding")])]),s("td",[s("code",{pre:!0},[e._v("12px 20px")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-margin")])]),s("td",[s("code",{pre:!0},[e._v("6px 0 0 0")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-border-radius")])]),s("td",[s("code",{pre:!0},[e._v("4px")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-text-disabled-color")])]),s("td",[s("code",{pre:!0},[e._v("#bbb")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-text-color")])]),s("td",[s("code",{pre:!0},[e._v("#777")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-text-expanded-color")])]),s("td",[s("code",{pre:!0},[e._v("#000")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-font-size")])]),s("td",[s("code",{pre:!0},[e._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-arrow-size")])]),s("td",[s("code",{pre:!0},[e._v("20px")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-icon-margin")])]),s("td",[s("code",{pre:!0},[e._v("0 10px 0 0")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-group-cubic-bezier")])]),s("td",[s("code",{pre:!0},[e._v("@cubic-bezier")])])])])]),s("h4",[e._v("MenuItem Variables")]),s("table",[s("thead",[s("tr",[s("th",[e._v("\u53D8\u91CF\u540D")]),s("th",[e._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-padding")])]),s("td",[s("code",{pre:!0},[e._v("12px 20px")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-margin")])]),s("td",[s("code",{pre:!0},[e._v("6px 0 0 0")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-border-radius")])]),s("td",[s("code",{pre:!0},[e._v("4px")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-text-disabled-color")])]),s("td",[s("code",{pre:!0},[e._v("#bbb")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-text-color")])]),s("td",[s("code",{pre:!0},[e._v("#777")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-text-selected-color")])]),s("td",[s("code",{pre:!0},[e._v("#fff")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-font-size")])]),s("td",[s("code",{pre:!0},[e._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-icon-margin")])]),s("td",[s("code",{pre:!0},[e._v("0 10px 0 0")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-cubic-bezier")])]),s("td",[s("code",{pre:!0},[e._v("@cubic-bezier")])])]),s("tr",[s("td",[s("code",{pre:!0},[e._v("@menu-item-selected-background")])]),s("td",[s("code",{pre:!0},[e._v("@color-primary")])])])])])])}];const Xe={components:{Options:le,Multiple:ie,Disabled:ge,Icon:Me,Accordion:we,Indent:He,Slots:Be,ComponentSlots:Je}},P={};var Ye=p(Xe,Qe,Ue,!1,Ze,null,null,null);function Ze(e){for(let t in P)this[t]=P[t]}var is=function(){return Ye.exports}();export{is as default};
