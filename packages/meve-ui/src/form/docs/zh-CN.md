# Form 表单

### 介绍

提供了表单组件的控制能力

### 表单控制

通过`disabled`和`readonly`控制表单的禁用和只读，通过`validate`方法进行触发表单验证，通过`resetValidation`重制表单验证信息，
通过`reset`清空表单值

```vue
import All from '../example/All.vue'
```

```html
// TODO: 表单组件完成后写这里...
```

### 自定义组件表单验证

通过`<m-form-item/>`组件携带`rules`和`value`，进行表单验证。`rules`是一个校验器数组，校验器返回`true`表示校验通过， 以外的值将转换为文本作为用户提示。
组件库内置的表单组件都自带表单验证功能，`<m-form-item/>`仅在需要自定义表单组件的场景使用。

```vue
import CustomFormComponent from '../example/CustomFormComponent.vue'
```

```html
<template>
  <m-form ref="form" :disabled="disabled" :readonly="readonly">
    <m-space direction="column" size="large">
      <m-form-item
        ref="formItem"
        label="YOUR ACCOUNT"
        :value="form.account"
        :rules="[v => v && v.length > 6 || 'Length must over than 6']"
      >
        <input
          class="custom-input"
          placeholder="Please input your account"
          :disabled="disabled"
          :readonly="readonly"
          v-model="form.account"
          @input="handleInput"
        >
      </m-form-item>

      <m-input
        type="password"
        placeholder="Please input your password"
        label="YOUR PASSWORD"
        :rules="[v => v && v.length > 6 || 'Length must over than 6']"
        v-model="form.password"
      />

      <m-space>
        <m-button type="primary" @click="$refs.form.validate()">Validate</m-button>
        <m-button type="info" @click="$refs.form.resetValidation()">Reset Validation</m-button>
        <m-button type="warning" @click="reset">Reset</m-button>
        <m-button type="error" @click="disabled = !disabled">Toggle Disabled: {{ disabled }}</m-button>
        <m-button type="success" @click="readonly = !readonly">Toggle Readonly: {{ readonly }}</m-button>
      </m-space>
    </m-space>
  </m-form>
</template>

<script>
export default {
  data: () => ({
    disabled: false,
    readonly: false,
    form: {
      account: '',
      password: ''
    }
  }),
  methods: {
    handleInput() {
      this.$nextTick(() => {
        this.$refs.formItem.validate()
      })
    },

    reset() {
      this.$refs.form.reset()
      
      this.form.account = ''
      this.$refs.formItem.resetValidation()
    },
  }
}
</script>

<style>
.custom-input {
  display: block;
  width: 100%;
  height: 42px;
  padding: 0 8px;
  color: #555;
  font-size: 15px;
  border: thin solid #ccc;
}

.custom-input::placeholder {
  color: #bbb;
}
</style>
```

## API

### 属性

#### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |

#### FormItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 验证的值 | _any_ | **-** |
| `label` | 标签名 | _string_ | **-** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: any) => any>_ | **-** |

### 事件

#### FormItem Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `error-message-change` | 验证信息变更时触发 | **errorMessage: string** |

### 方法

#### Form Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发所有表单组件的校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空所有表单组件的校验信息 | _-_ | **-** |
| `reset` | 清空所有表单组件绑定的值和校验信息 | _-_ | **-** |

#### FormItem Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发值的校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清除值的校验信息 | _-_ | **-** |

### 插槽

#### Form Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 表单内容 | **-** |

#### FormItem Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 表单项内容 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@form-item-label-text-color` | `#525f7f` |
| `@form-item-label-font-size` | `13px` |
| `@form-item-label-margin` | `0 0 12px` |
| `@form-details-error-color` | `@color-warning` |
| `@form-details-margin-top` | `6px` |
| `@form-details-font-size` | `12px` |