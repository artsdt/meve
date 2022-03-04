import{c as $}from"./create.af6e9796.js";import{a as _}from"./relation.9e421618.js";/* empty css               */import{S as a}from"./index.a42a7a69.js";import{B as n}from"./index.dcc64270.js";import{I as l}from"./index.ff99db59.js";import{S as p,O as c}from"./index.7b40e6e4.js";import{R as u}from"./index.4d45f381.js";import{A as i}from"./index.49c925ef.js";import{R as m,a as d}from"./index.e2b9c342.js";import{C as h,a as f}from"./index.6a2c4fab.js";import{n as v}from"./main.7198649e.js";import{F as j}from"./index.69ee1880.js";import"./shared.285cd5cf.js";import"./vendor.9049838c.js";import"./elements.aa4184a2.js";import"./index.45eae9d1.js";import"./index.4bd8fdf2.js";import"./index.ae1cb571.js";import"./index.d22b92d8.js";import"./index.6a2c952c.js";import"./index.0b43e02a.js";import"./zIndex.3656b1cc.js";import"./index.86c64737.js";import"./lock.a03ef939.js";import"./index.283b330d.js";import"./keyboardActive.acc7335a.js";const k={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},{createComponent:x,namespace:C}=$("form"),o=x({mixins:[_("form",{childrenKey:"formItems"}),_("form",{childrenKey:"formComponents"})],props:k,methods:{async validate(){return(await Promise.all(this.formItems.map(({validate:r})=>r()))).every(r=>r===!0)},reset(){this.formComponents.forEach(({reset:t})=>t())},resetValidation(){this.formItems.forEach(({resetValidation:t})=>t())}},render(){return arguments[0]("div",{class:C()},[this.slots()])}});var P=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-form",{ref:"form",attrs:{disabled:t.disabled,readonly:t.readonly}},[s("m-space",{attrs:{direction:"column",size:"large"}},[s("m-input",{attrs:{placeholder:"Please input your account",label:"YOUR ACCOUNT",rules:[function(e){return e&&e.length>6||"Length must over than 6"}]},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}}),s("m-input",{attrs:{type:"password",placeholder:"Please input your password",label:"YOUR PASSWORD",rules:[function(e){return e&&e.length>6||"Length must over than 6"}]},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),s("m-auto-complete",{attrs:{placeholder:"Please input your email",label:"YOUR EMAIL",options:t.options,rules:[function(e){return e&&e.length>12||"Length must over than 12"}]},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),s("m-select",{attrs:{label:"GENDER",placeholder:"What is your gender",rules:[function(e){return!!e||"You must select one"}]},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}},[s("m-option",{attrs:{label:"Male"}}),s("m-option",{attrs:{label:"Female"}})],1),s("m-select",{attrs:{label:"FAVORITE",multiple:"",placeholder:"What is your favorite",rules:[function(e){return!!e.length||"You must select one"}]},model:{value:t.form.favorite,callback:function(e){t.$set(t.form,"favorite",e)},expression:"form.favorite"}},[s("m-option",{attrs:{label:"Eat"}}),s("m-option",{attrs:{label:"Sleep"}}),s("m-option",{attrs:{label:"Coding"}})],1),s("m-radio-group",{attrs:{label:"AGREEMENT",rules:[function(e){return!!e||"You must check one"}]},model:{value:t.form.agreement,callback:function(e){t.$set(t.form,"agreement",e)},expression:"form.agreement"}},[s("m-radio",{attrs:{"checked-value":1}},[t._v("Agree")]),s("m-radio",{attrs:{"checked-value":2}},[t._v("Disagree")])],1),s("m-checkbox-group",{attrs:{label:"GROUP",rules:[function(e){return e.length>=1||"You check at least one"}]},model:{value:t.form.group,callback:function(e){t.$set(t.form,"group",e)},expression:"form.group"}},[s("m-checkbox",{attrs:{"checked-value":1}},[t._v("Frontend")]),s("m-checkbox",{attrs:{"checked-value":2}},[t._v("Backend")]),s("m-checkbox",{attrs:{"checked-value":3}},[t._v("Production Manager")])],1),s("m-rate",{attrs:{label:"RATE",rules:[function(e){return e>0||"You must pick one"}]},model:{value:t.form.rate,callback:function(e){t.$set(t.form,"rate",e)},expression:"form.rate"}}),s("div",{staticStyle:{"margin-top":"10px"}},[s("m-space",[s("m-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.form.validate()}}},[t._v("Validate")]),s("m-button",{attrs:{type:"info"},on:{click:function(e){return t.$refs.form.resetValidation()}}},[t._v("Reset Validation")]),s("m-button",{attrs:{type:"warning"},on:{click:function(e){return t.$refs.form.reset()}}},[t._v("Reset")]),s("m-button",{attrs:{type:"error"},on:{click:function(e){t.disabled=!t.disabled}}},[t._v("Toggle Disabled: "+t._s(t.disabled))]),s("m-button",{attrs:{type:"success"},on:{click:function(e){t.readonly=!t.readonly}}},[t._v("Toggle Readonly: "+t._s(t.readonly))])],1)],1)],1)],1)},R=[];const w={components:{[o.name]:o,[a.name]:a,[l.name]:l,[i.name]:i,[n.name]:n,[p.name]:p,[c.name]:c,[m.name]:m,[d.name]:d,[h.name]:h,[f.name]:f,[u.name]:u},data:()=>({disabled:!1,readonly:!1,form:{account:"",password:"",email:"",gender:"",favorite:[],group:[],agreement:void 0,rate:0}}),computed:{options(){return["@qq.com","@163.com","@outlook.com"].map(t=>{var s;const r=(s=this.form.email)==null?void 0:s.split("@")[0];return{label:r+t,value:r+t}})}}},g={};var E=v(w,P,R,!1,I,null,null,null);function I(t){for(let r in g)this[r]=g[r]}var F=function(){return E.exports}(),O=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("m-form",{ref:"form",attrs:{disabled:t.disabled,readonly:t.readonly}},[s("m-space",{attrs:{direction:"column",size:"large"}},[s("m-form-item",{ref:"formItem",attrs:{label:"YOUR ACCOUNT",value:t.form.account,rules:[function(e){return e&&e.length>6||"Length must over than 6"}]}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.account,expression:"form.account"}],staticClass:"custom-input",attrs:{placeholder:"Please input your account",disabled:t.disabled,readonly:t.readonly},domProps:{value:t.form.account},on:{input:[function(e){e.target.composing||t.$set(t.form,"account",e.target.value)},t.handleInput]}})]),s("m-input",{attrs:{type:"password",placeholder:"Please input your password",label:"YOUR PASSWORD",rules:[function(e){return e&&e.length>6||"Length must over than 6"}]},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),s("m-space",[s("m-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.form.validate()}}},[t._v("Validate")]),s("m-button",{attrs:{type:"info"},on:{click:function(e){return t.$refs.form.resetValidation()}}},[t._v("Reset Validation")]),s("m-button",{attrs:{type:"warning"},on:{click:t.reset}},[t._v("Reset")]),s("m-button",{attrs:{type:"error"},on:{click:function(e){t.disabled=!t.disabled}}},[t._v("Toggle Disabled: "+t._s(t.disabled))]),s("m-button",{attrs:{type:"success"},on:{click:function(e){t.readonly=!t.readonly}}},[t._v("Toggle Readonly: "+t._s(t.readonly))])],1)],1)],1)},S=[];const A={components:{[o.name]:o,[j.name]:j,[a.name]:a,[n.name]:n,[l.name]:l},data:()=>({disabled:!1,readonly:!1,form:{account:"",password:""}}),methods:{handleInput(){this.$nextTick(()=>{this.$refs.formItem.validate()})},reset(){this.$refs.form.reset(),this.form.account="",this.$refs.formItem.resetValidation()}}},b={};var V=v(A,O,S,!1,T,"a0bbfcd4",null,null);function T(t){for(let r in b)this[r]=b[r]}var Y=function(){return V.exports}(),M=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-doc"},[s("h1",[t._v("Form \u8868\u5355")]),t._m(0),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u8868\u5355\u63A7\u5236")]),t._m(1),s("div",{staticClass:"meve-component-preview"},[s("all")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),t._v(`// TODO: \u8868\u5355\u7EC4\u4EF6\u5B8C\u6210\u540E\u5199\u8FD9\u91CC...
`)])])])],1),s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u8868\u5355\u9A8C\u8BC1")]),t._m(2),s("div",{staticClass:"meve-component-preview"},[s("custom-form-component")],1),s("app-code",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("link",{pre:!0,attrs:{rel:"stylesheet",href:"./highlight.css"}}),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"form"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":disabled")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"disabled"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":readonly")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readonly"')]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"column"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"large"')]),t._v(">")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-form-item")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"formItem"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"YOUR ACCOUNT"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"form.account"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rules")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"[v => v && v.length > 6 || 'Length must over than 6']"`)]),t._v(`
      >`)]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("input")]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"custom-input"')]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Please input your account"')]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":disabled")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"disabled"')]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":readonly")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readonly"')]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"form.account"')]),t._v(`
          @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("input")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleInput"')]),t._v(`
        >`)]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-form-item")]),t._v(">")]),t._v(`

      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-input")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"password"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Please input your password"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"YOUR PASSWORD"')]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rules")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"[v => v && v.length > 6 || 'Length must over than 6']"`)]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"form.password"')]),t._v(`
      />`)]),t._v(`

      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(">")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"$refs.form.validate()"')]),t._v(">")]),t._v("Validate"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"info"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"$refs.form.resetValidation()"')]),t._v(">")]),t._v("Reset Validation"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"reset"')]),t._v(">")]),t._v("Reset"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"disabled = !disabled"')]),t._v(">")]),t._v("Toggle Disabled: {{ disabled }}"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
        `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"success"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readonly = !readonly"')]),t._v(">")]),t._v("Toggle Readonly: {{ readonly }}"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-space")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-form")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("form")]),t._v(`: {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("account")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("password")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(`
    }
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleInput")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".$nextTick("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.$refs.formItem.validate()
      })
    },

    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("reset")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.$refs.form.reset()
      
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".form.account = "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.$refs.formItem.resetValidation()
    },
  }
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"css"}},[t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[t._v(".custom-input")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("display")]),t._v(`: block;
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("width")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100%")]),t._v(`;
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("height")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("42px")]),t._v(`;
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("padding")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("8px")]),t._v(`;
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("color")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("#555")]),t._v(`;
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("font-size")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("15px")]),t._v(`;
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("border")]),t._v(": thin solid "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("#ccc")]),t._v(`;
}

`),s("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[t._v(".custom-input")]),s("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[t._v("::placeholder")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("color")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("#bbb")]),t._v(`;
}
`)]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v(`
`)])])])],1),s("h2",[t._v("API")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])},U=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u4ECB\u7ECD")]),s("p",[t._v("\u63D0\u4F9B\u4E86\u8868\u5355\u7EC4\u4EF6\u7684\u63A7\u5236\u80FD\u529B")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("disabled")]),t._v("\u548C"),s("code",{pre:!0},[t._v("readonly")]),t._v("\u63A7\u5236\u8868\u5355\u7684\u7981\u7528\u548C\u53EA\u8BFB\uFF0C\u901A\u8FC7"),s("code",{pre:!0},[t._v("validate")]),t._v("\u65B9\u6CD5\u8FDB\u884C\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1\uFF0C\u901A\u8FC7"),s("code",{pre:!0},[t._v("resetValidation")]),t._v("\u91CD\u5236\u8868\u5355\u9A8C\u8BC1\u4FE1\u606F\uFF0C \u901A\u8FC7"),s("code",{pre:!0},[t._v("reset")]),t._v("\u6E05\u7A7A\u8868\u5355\u503C")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u901A\u8FC7"),s("code",{pre:!0},[t._v("<m-form-item/>")]),t._v("\u7EC4\u4EF6\u643A\u5E26"),s("code",{pre:!0},[t._v("rules")]),t._v("\u548C"),s("code",{pre:!0},[t._v("value")]),t._v("\uFF0C\u8FDB\u884C\u8868\u5355\u9A8C\u8BC1\u3002"),s("code",{pre:!0},[t._v("rules")]),t._v("\u662F\u4E00\u4E2A\u6821\u9A8C\u5668\u6570\u7EC4\uFF0C\u6821\u9A8C\u5668\u8FD4\u56DE"),s("code",{pre:!0},[t._v("true")]),t._v("\u8868\u793A\u6821\u9A8C\u901A\u8FC7\uFF0C \u4EE5\u5916\u7684\u503C\u5C06\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A\u3002 \u7EC4\u4EF6\u5E93\u5185\u7F6E\u7684\u8868\u5355\u7EC4\u4EF6\u90FD\u81EA\u5E26\u8868\u5355\u9A8C\u8BC1\u529F\u80FD\uFF0C"),s("code",{pre:!0},[t._v("<m-form-item/>")]),t._v("\u4EC5\u5728\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\u7684\u573A\u666F\u4F7F\u7528\u3002")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u5C5E\u6027")]),s("h4",[t._v("Form Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("readonly")])]),s("td",[t._v("\u662F\u5426\u53EA\u8BFB")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("disabled")])]),s("td",[t._v("\u662F\u5426\u7981\u7528")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("strong",[t._v("false")])])])])]),s("h4",[t._v("FormItem Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("value")])]),s("td",[t._v("\u9A8C\u8BC1\u7684\u503C")]),s("td",[s("em",[t._v("any")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("label")])]),s("td",[t._v("\u6807\u7B7E\u540D")]),s("td",[s("em",[t._v("string")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("rules")])]),s("td",[t._v("\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE "),s("code",{pre:!0},[t._v("true")]),t._v(" \u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A")]),s("td",[s("em",[t._v("Array<(v: any) => any>")])]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u4E8B\u4EF6")]),s("h4",[t._v("FormItem Events")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u4E8B\u4EF6\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("error-message-change")])]),s("td",[t._v("\u9A8C\u8BC1\u4FE1\u606F\u53D8\u66F4\u65F6\u89E6\u53D1")]),s("td",[s("strong",[t._v("errorMessage: string")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u65B9\u6CD5")]),s("h4",[t._v("Form Methods")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u65B9\u6CD5\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8FD4\u56DE\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("validate")])]),s("td",[t._v("\u89E6\u53D1\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7684\u6821\u9A8C")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("valid: Promise<boolean>")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("resetValidation")])]),s("td",[t._v("\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7684\u6821\u9A8C\u4FE1\u606F")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("reset")])]),s("td",[t._v("\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u7684\u503C\u548C\u6821\u9A8C\u4FE1\u606F")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("-")])])])])]),s("h4",[t._v("FormItem Methods")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u65B9\u6CD5\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8FD4\u56DE\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("validate")])]),s("td",[t._v("\u89E6\u53D1\u503C\u7684\u6821\u9A8C")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("valid: Promise<boolean>")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("resetValidation")])]),s("td",[t._v("\u6E05\u9664\u503C\u7684\u6821\u9A8C\u4FE1\u606F")]),s("td",[s("em",[t._v("-")])]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u63D2\u69FD")]),s("h4",[t._v("Form Slots")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u63D2\u69FD\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("default")])]),s("td",[t._v("\u8868\u5355\u5185\u5BB9")]),s("td",[s("strong",[t._v("-")])])])])]),s("h4",[t._v("FormItem Slots")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u63D2\u69FD\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("default")])]),s("td",[t._v("\u8868\u5355\u9879\u5185\u5BB9")]),s("td",[s("strong",[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"meve-site-card"},[s("h3",[t._v("\u6837\u5F0F\u53D8\u91CF")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53D8\u91CF\u540D")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("@form-item-label-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#525f7f")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@form-item-label-font-size")])]),s("td",[s("code",{pre:!0},[t._v("13px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@form-item-label-margin")])]),s("td",[s("code",{pre:!0},[t._v("0 0 12px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@form-details-error-color")])]),s("td",[s("code",{pre:!0},[t._v("@color-warning")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@form-details-margin-top")])]),s("td",[s("code",{pre:!0},[t._v("6px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("@form-details-font-size")])]),s("td",[s("code",{pre:!0},[t._v("12px")])])])])])])}];const D={components:{All:F,CustomFormComponent:Y}},y={};var z=v(D,M,U,!1,L,null,null,null);function L(t){for(let r in y)this[r]=y[r]}var ht=function(){return z.exports}();export{ht as default};