# Switch 开关

### 介绍

一个开关

### 基本使用

通过`v-model`双向绑定，关闭为`false`，选中为`true`

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-switch v-model="value">Agree</m-switch>
</template>

<script>
export default {
  data: () => ({
    value: false,
  }),
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
    <m-switch label="NORMAL" v-model="value"/>
    <m-switch label="SMALL" size="small" v-model="value"/>
    <m-switch label="MINI" size="mini" v-model="value"/>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: false,
  }),
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
  <m-switch label="ENABLE?" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: false,
  }),
}
</script>
```

### 关连值

通过`activeValue`和`inactiveValue`设置开启和关闭时的值

```vue
import Relation from '../example/Relation.vue'
```

```html
<template>
  <m-switch v-model="value" :checked-value="1" :unchecked-value="2"/>
</template>

<script>
export default {
  data: () => ({
    value: false,
  }),
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
    <m-switch disabled v-model="value"/>
    <m-switch readonly v-model="value"/>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: false,
  }),
}
</script>
```

### 加载

通过设置`loading`，使组件进入加载状态，并且无法进行切换

```vue
import Loading from '../example/Loading.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-switch loading v-model="a"/>
    <m-switch loading v-model="b"/>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    a: false,
    b: true
  }),
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
  <m-switch :rules="[(v) => !!v || 'You must enable it']" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: true,
  }),
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any_ | **false** |
| `active-value` | 开启状态的值 | _any_ | **true** |
| `inactive-value` | 关闭状态的值 | _any_ | **false** |
| `label` | 标签名	 | _string \| number_ | **-** |
| `size` | 单选框尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `loading` | 是否加载 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `ripple` | 是否开启水波纹 | _boolean_ | **true** |
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` | _RadioValidateTrigger[]_ | **['onChange']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any) => any>_ | **-** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 | _-_ | **-** |
| `reset` | 清空绑定的值(设置为 `active-value`)和校验信息 | _-_ | **-** |
| `toggle` | 切换状态，传 `active-value` 为开启， `inactive-value` 为关闭，不传或其他情况为取反 | _value: any_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值改变时触发 | **value: any** |
| `change` | 绑定值改变时触发 | **value: any** |
| `click` | 点击时触发 | **e: Event** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@switch-active-color` | `@color-primary` |
| `@switch-inactive-color` | `#cad1d7` |
| `@switch-loading-color` | `#fff` |
| `@switch-error-color` | `@color-warning` |
| `@switch-normal-width` | `50px` |
| `@switch-normal-height` | `24px` |
| `@switch-normal-button-size` | `18px` |
| `@switch-normal-loading-size` | `16px` |
| `@switch-small-width` | `40px` |
| `@switch-small-height` | `20px` |
| `@switch-small-button-size` | `14px` |
| `@switch-small-loading-size` | `12px` |
| `@switch-mini-width` | `32px` |
| `@switch-mini-height` | `18px` |
| `@switch-mini-button-size` | `12px` |
| `@switch-mini-loading-size` | `10px` |
| `@switch-button-offset` | `2px` |