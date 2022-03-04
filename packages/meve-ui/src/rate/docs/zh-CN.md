# Rate 评分

### 介绍

评分组件，五星好评

### 基本使用

通过`v-model`双向绑定分数

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-rate v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: 0
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
    <m-rate label="NORMAL" v-model="value" />
    <m-rate label="SMALL" size="small" v-model="value" />
    <m-rate label="MINI" size="mini" v-model="value" />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: 0,
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
  <m-rate label="RATE" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: 0
  }),
}
</script>
```

### 半星

通过`half`开启半星模式

```vue
import Half from '../example/Half.vue'
```

```html
<template>
  <m-rate half v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: 0
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
  <m-space direction="column">
    <m-rate disabled v-model="value"/>
    <m-rate readonly v-model="value"/>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: 3
  }),
}
</script>
```

### 自定义颜色

通过`color`设置评分激活时的颜色

```vue
import Color from '../example/Color.vue'
```

```html
<template>
  <m-rate color="#5e72e4" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: 0
  }),
}
</script>
```

### 自定义星数

通过`count`设置最大显示的星数

```vue
import Count from '../example/Count.vue'
```

```html
<template>
  <m-rate :count="10" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: 0
  }),
}
</script>
```

### 自定义图标

通过`icon`设置自定义图标

```vue
import Icon from '../example/Icon.vue'
```

```html
<template>
  <m-rate icon="star-outline" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: 0
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
  <m-rate :rules="[v => v === 5 || 'You must pick 5']" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: 0
  }),
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string \| number_ | **0** |
| `label` | 标签名 | _string \| number_ | **-** |
| `color` | 激活时的颜色 | _string_ | **-** |
| `count` | 显示的星星个数 | _string \| number_ | **5** |
| `icon` | 自定义图标名 | _string_ | **-** |
| `half` | 是否使用半星 | _boolean_ | **false** |
| `size` | 图标的尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `ripple` | 是否开启水波纹 | _boolean_ | **true** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: string \| number) => any>_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值变更时触发 | **value: any** |
| `change` | 绑定值变更时触发 | **value: any** |
| `click` | 点击星星时触发 | **value: any** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@rate-inactive-color` | `#dbdbdf` |
| `@rate-disabled-color` | `@color-disabled` |
| `@rate-error-color` | `@color-warning` |
| `@rate-active-color` | `#f7ce55` |
| `@rate-normal-rate-size` | `26px` |
| `@rate-normal-half-rate-size` | `13px` |
| `@rate-small-rate-size` | `22px` |
| `@rate-small-half-rate-size` | `11px` |
| `@rate-mini-rate-size` | `18px` |
| `@rate-mini-half-rate-size` | `9px` |

