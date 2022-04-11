# Checkbox 复选框

### 介绍

复选框，可以成组使用

### 基本使用

通过`v-model`双向绑定，未选中为`false`，选中为`true`

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-checkbox v-model="value">Eat</m-checkbox>
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
    <m-checkbox label="NORMAL" v-model="value">Eat</m-checkbox>
    <m-checkbox label="SMALL" size="small" v-model="value">Eat</m-checkbox>
    <m-checkbox label="MINI" size="mini" v-model="value">Eat</m-checkbox>
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
  <m-checkbox label="FAVORITE" v-model="value">Eat</m-checkbox>
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

通过`checkedValue`和`uncheckedValue`设置选中和未选中时的值

```vue
import Relation from '../example/Relation.vue'
```

```html
<template>
  <m-checkbox v-model="value" :checked-value="1" :unchecked-value="2">Eat</m-checkbox>
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
    <m-checkbox disabled v-model="value">Eat</m-checkbox>
    <m-checkbox readonly v-model="value">Eat</m-checkbox>
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

### 复选框组

通过`<m-checkbox-group/>`对`<m-checkbox/>`进行分组和控制

```vue
import Group from '../example/Group.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-checkbox-group ref="group" v-model="value">
      <m-checkbox :checked-value="1">Eat</m-checkbox>
      <m-checkbox :checked-value="2">Sleep</m-checkbox>
      <m-checkbox :checked-value="3">Coding</m-checkbox>
    </m-checkbox-group>

    <m-space>
      <m-button type="primary" @click="$refs.group.checkAll()">全选</m-button>
      <m-button type="primary" @click="$refs.group.inverseAll()">反选</m-button>
    </m-space>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
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
  <m-checkbox-group direction="vertical" v-model="value">
    <m-checkbox :checked-value="1">Eat</m-checkbox>
    <m-checkbox :checked-value="2">Sleep</m-checkbox>
    <m-checkbox :checked-value="3">Coding</m-checkbox>
  </m-checkbox-group>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
}
</script>
```

### 最大选择数

通过`max`设置最大选择个数

```vue
import Max from '../example/Max.vue'
```

### 字段验证

通过传入一个验证规则数组可以对值进行校验，校验器返回`true`表示校验通过。以外的值将转换为文本作为用户提示。

```vue
import Validation from '../example/Validation.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-checkbox :rules="[(v) => !!v || 'You must check it']" v-model="value">Eat</m-checkbox>

    <m-checkbox-group :rules="[(v) => v.length === 3 || 'You must check all']" v-model="groupValue">
      <m-checkbox :checked-value="1">Eat</m-checkbox>
      <m-checkbox :checked-value="2">Sleep</m-checkbox>
      <m-checkbox :checked-value="3">Coding</m-checkbox>
    </m-checkbox-group>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: true,
    groupValue: [],
  }),
}
</script>
```

## API

### 属性

#### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any_ | **-** |
| `label` | 标签名	 | _string \| number_ | **-** |
| `direction` | 布局方向，可选值为 `horizontal` `vertical` | _string_ | **horizontal** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any) => any>_ | **-** |

#### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any_ | **false** |
| `checked-value` | 选中状态的值 | _any_ | **true** |
| `unchecked-value` | 未选中状态的值 | _any_ | **false** |
| `label` | 标签名	 | _string \| number_ | **-** |
| `size` | 复选框尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `ripple` | 是否开启水波纹 | _boolean_ | **true** |
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` | _CheckboxValidateTrigger[]_ | **['onChange']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any) => any>_ | **-** |

### 方法

#### CheckboxGroup Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | **-** | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 |**`-** | **-** |
| `reset` | 清空绑定的值(设置为 `[]`)和校验信息 | **-** | **-** |
| `checkAll` | 全选 | **-** | **value: any** |
| `inverseAll` | 反选 | **-** | **value: any** |

#### Checkbox Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 | _-_ | **-** |
| `reset` | 清空绑定的值(设置为 `unchecked-value`)和校验信息 | _-_ | **-** |
| `toggle` | 切换选中状态，传 `checked-value` 为选中， `unchecked-value` 为取消选中，不传或其他情况为取反 | _value: any_ | **-** |

### 事件

### CheckboxGroup Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值变化时触发 | **value: any[]** |
| `change` | 状态变更时触发 | **value: any[]** |

### Checkbox Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值变化时触发 | **value: any** |
| `click` | 点击时触发 | **e: Event** |
| `change` | 状态变更时触发 | **value: any** |

### 插槽

### CheckboxGroup Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 复选框组的内容 | **-** |

### Checkbox Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 显示的文本 | **-** |

### 样式变量

#### Checkbox Variables

| 变量名 | 默认值 |
| --- | --- |
| `--checkbox-checked-color` | `var(--color-primary)` |
| `--checkbox-error-color` | `var(--color-warning)` |
| `--checkbox-disabled-text-color` | `var(--color-text-disabled)` |
| `--checkbox-checkbox-container-margin` | `0 2px 0 0` |
| `--checkbox-normal-checkbox-container-padding` | `6px` |
| `--checkbox-normal-checkbox-container-padding` | `6px` |
| `--checkbox-normal-checkbox-size` | `20px` |
| `--checkbox-normal-checkbox-font-size` | `15px` |
| `--checkbox-normal-svg-size` | `10px` |
| `--checkbox-small-checkbox-container-padding` | `4px` |
| `--checkbox-small-checkbox-container-padding` | `4px` |
| `--checkbox-small-checkbox-size` | `16px` |
| `--checkbox-small-checkbox-font-size` | `14px` |
| `--checkbox-small-svg-size` | `8px` |
| `--checkbox-mini-checkbox-container-padding` | `3px` |
| `--checkbox-mini-checkbox-container-padding` | `3px` |
| `--checkbox-mini-checkbox-size` | `14px` |
| `--checkbox-mini-checkbox-font-size` | `12px` |
| `--checkbox-mini-svg-size` | `6px` |
| `--checkbox-text-color` | `#525f7f` |
| `--checkbox-background` | `#fff` |
| `--checkbox-border-color` | `#cad1d7` |