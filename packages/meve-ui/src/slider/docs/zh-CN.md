# Slider 滑块

### 介绍

滑块选择器，支持区域选择

### 基本使用

通过`v-model`进行双向绑定

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-slider v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: 20,
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
    <m-slider label="NORMAL" v-model="value" />
    <m-slider label="SMALL" size="small" v-model="value" />
    <m-slider label="MINI" size="mini" v-model="value" />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: 20,
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
  <m-slider label="Slide your progress!" v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: 20,
  }),
}
</script>
```

### 步长

通过`step`设置步长

```vue
import Step from '../example/Step.vue'
```

```html
<template>
  <m-slider :step="10" v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: 20,
  }),
}
</script>
```

### 取值范围

通过`max`和`min`设置组件的取值范围

```vue
import Limit from '../example/Limit.vue'
```

```html
<template>
  <m-slider :min="10" :max="90" v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: 20,
  }),
}
</script>
```

### 区域选择

通过设置`range`开启区域选择

```vue
import Range from '../example/Range.vue'
```

```html
<template>
  <m-slider range v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: [40, 60],
  }),
}
</script>
```

### 垂直模式

通过设置`vertical`开启垂直模式

```vue
import Vertical from '../example/Vertical.vue'
```

```html
<template>
  <m-space size="large">
    <m-slider vertical v-model="value" />
    <m-slider vertical range v-model="rangeValue" />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: 20,
    rangeValue: [20, 60]
  }),
}
</script>
```

### 只读/禁用

通过`readonly`和`disabled`设置组件的只读和禁用状态

```vue
import Status from '../example/Status.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-slider label="DISABLED" disabled v-model="value" />
    <m-slider label="READONLY" readonly v-model="value" />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: 20,
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
  <m-space direction="column" :size="[24, 0]">
    <m-slider :rules="[v => v >= 50 || 'You must slide value >= 50']" v-model="value" />
    <m-slider 
      :rules="[([v1, v2]) => v2 - v1 >= 50 || 'You must slide range value total >= 50']"
      range
      v-model="rangeValue" 
    />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: 20,
    rangeValue: [20, 30]
  }),
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _number \| Array_ | **0** |
| `label` | 标签名 | _string \| number_ | **-** |
| `size` | 滑块尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `min` | 最小值 | _string \| number_ | **0** |
| `max` | 最大值 | _string \| number_ | **100** |
| `step` | 步长 | _string \| number_ | **1** |
| `range` | 是否开启范围选择 | _boolean_ | **false** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `vertical` | 是否开启垂直模式 | _boolean_ | **false** |
| `vertical-height` | 垂直模式滑块的高度 | _string \| number_ | **-** |
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` | _SliderValidateTrigger[]_ | **['onChange']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: number \| Array) => any>_ | **-** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 | _-_ | **-** |
| `reset` | 清空绑定的值和校验信息 | _-_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 更新时触发 | **value: number \| Array** |
| `change` | 更新时触发 | **value: number \| Array** |
| `click` | 点击时触发 | **event: Event** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--slider-active-color` | `var(--color-primary)` |
| `--slider-error-color` | `var(--color-warning)` |
| `--slider-track-background` | `#eceeef` |
| `--slider-track-vertical-height` | `200px` |
| `--slider-button-border-radius` | `50%` |
| `--slider-tooltip-border-radius` | `4px` |
| `--slider-tooltip-background` | `#fff` |
| `--slider-tooltip-box-shadow` | `0 8px 26px -4px hsla(0deg, 0%, 8%, 0.15), 0 8px 9px -5px hsla(0deg, 0%, 8%, 0.06)` |
| `--slider-normal-track-size` | `5px` |
| `--slider-normal-button-size` | `15px` |
| `--slider-normal-tooltip-padding` | `8px 10px` |
| `--slider-normal-tooltip-font-size` | `14px` |
| `--slider-small-track-size` | `3.5px` |
| `--slider-small-button-size` | `13px` |
| `--slider-small-tooltip-padding` | `6px 8px` |
| `--slider-small-tooltip-font-size` | `13px` |
| `--slider-mini-track-size` | `3px` |
| `--slider-mini-button-size` | `10px` |
| `--slider-mini-tooltip-padding` | `4px 6px` |
| `--slider-mini-tooltip-font-size` | `12px` |
| `--slider-border-radius` | `5px` |
