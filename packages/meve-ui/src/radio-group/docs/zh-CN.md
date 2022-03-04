# Radio 单选框

### 介绍

单选框，可以成组使用

### 基本使用

通过`v-model`双向绑定，未选中为`false`，选中为`true`

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-radio v-model="value">Agree</m-radio>
</template>

<script>
export default {
  data: () => ({
    value: false,
  })
}
</script>
```

### 尺寸

通过`size`指定尺寸

```vue
import Size from '../example/Size.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-radio label="NORMAL" v-model="value">Agree</m-radio>
    <m-radio label="SMALL" size="small" v-model="value">Agree</m-radio>
    <m-radio label="MINI" size="mini" v-model="value">Agree</m-radio>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: false,
  })
}
</script>
```

### 标签

通过`label`设置组件的标签，通常用于表单中

```vue
import LabelComponent from '../example/Label.vue'
```

```html
<template>
  <m-radio label="AGREEMENT" v-model="value">Agree</m-radio>
</template>

<script>
export default {
  data: () => ({
    value: false,
  })
}
</script>
```

### 关连值

通过`checkedValue`和`uncheckedValue`设置选中和未选中时的值

```vue
import Relation from '../example/Relation.vue'
```

```html
<template>
  <m-radio v-model="value" :checked-value="1" :unchecked-value="2">Agree</m-radio>
</template>

<script>
export default {
  data: () => ({
    value: false,
  })
}
</script>
```

### 禁用/只读

通过`disabled`和`readonly`控制禁用和只读状态

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-radio disabled v-model="value">Agree</m-radio>
    <m-radio readonly v-model="value">Agree</m-radio>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: false,
  })
}
</script>
```

### 单选框组

通过`<m-radio-group/>`对`<m-radio/>`进行分组和控制

```vue
import Group from '../example/Group.vue'
```

```html
<template>
  <m-radio-group v-model="value">
    <m-radio :checked-value="1">Agree</m-radio>
    <m-radio :checked-value="2">Disagree</m-radio>
  </m-radio-group>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  })
}
</script>
```

### 垂直排列

通过`direction`控制排列方向

```vue
import Vertical from '../example/Vertical.vue'
```

```html
<template>
  <m-radio-group direction="vertical" v-model="value">
    <m-radio :checked-value="1">Agree</m-radio>
    <m-radio :checked-value="2">Disagree</m-radio>
  </m-radio-group>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  })
}
</script>
```

### 字段验证

通过传入一个验证规则数组可以对值进行校验，校验器返回`true`表示校验通过。以外的值将转换为文本作为用户提示。

```vue
import Validation from '../example/Validation.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-radio :rules="[v => !!v || 'You must check it']" v-model="value">Agree</m-radio>

    <m-radio-group :rules="[v => v === 1 || 'You must check agree']" v-model="groupValue">
      <m-radio :checked-value="1">Agree</m-radio>
      <m-radio :checked-value="2">Disagree</m-radio>
    </m-radio-group>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: true,
    groupValue: 1
  })
}
</script>
```

## API

### 属性

#### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any_ | **-** |
| `label` | 标签名	 | _string \| number_ | **-** |
| `direction` | 布局方向，可选值为 `horizontal` `vertical` | _string_ | **horizontal** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any) => any>_ | **-** |

#### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any_ | **false** |
| `checked-value` | 选中状态的值 | _any_ | **true** |
| `unchecked-value` | 未选中状态的值 | _any_ | **false** |
| `label` | 标签名	 | _string \| number_ | **-** |
| `size` | 单选框尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `ripple` | 是否开启水波纹 | _boolean_ | **true** |
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` | _RadioValidateTrigger[]_ | **['onChange']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any) => any>_ | **-** |

### 方法

#### RadioGroup Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | **-** | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 |**`-** | **-** |
| `reset` | 清空绑定的值(设置为 `[]`)和校验信息 | **-** | **-** |

#### Radio Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 | _-_ | **-** |
| `reset` | 清空绑定的值(设置为 `unchecked-value`)和校验信息 | _-_ | **-** |
| `toggle` | 切换选中状态，传 `checked-value` 为选中， `unchecked-value` 为取消选中，不传或其他情况为取反 | _value: any_ | **-** |

### 事件

### RadioGroup Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值变更时触发 | **value: any** |
| `change` | 绑定值变更时触发 | **value: any** |

### Radio Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值变更时触发 | **value: any** |
| `change` | 绑定值变更时触发 | **value: any** |
| `click` | 点击时触发 | **e: Event** |

### 插槽

### RadioGroup Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 单选框组的内容 | **-** |

### Radio Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 显示的文本 | **-** |

### 样式变量

#### Radio Variables

| 变量名 | 默认值 |
| --- | --- |
| `@radio-error-color` | `@color-warning` |
| `@radio-disabled-color` | `@color-disabled` |
| `@radio-disabled-text-color` | `@color-text-disabled` |
| `@radio-radio-container-margin` | `0 2px 0 0` |
| `@radio-normal-radio-container-padding` | `6px` |
| `@radio-normal-radio-container-padding` | `6px` |
| `@radio-normal-radio-size` | `20px` |
| `@radio-normal-radio-font-size` | `15px` |
| `@radio-normal-svg-size` | `10px` |
| `@radio-small-radio-container-padding` | `4px` |
| `@radio-small-radio-container-padding` | `4px` |
| `@radio-small-radio-size` | `16px` |
| `@radio-small-radio-font-size` | `14px` |
| `@radio-small-svg-size` | `8px` |
| `@radio-mini-radio-container-padding` | `3px` |
| `@radio-mini-radio-container-padding` | `3px` |
| `@radio-mini-radio-size` | `14px` |
| `@radio-mini-radio-font-size` | `12px` |
| `@radio-mini-svg-size` | `6px` |
| `@radio-text-color` | `#525f7f` |