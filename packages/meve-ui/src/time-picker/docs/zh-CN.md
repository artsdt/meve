# TimePicker 时间选择器

### 介绍

用于选择时分秒

### 基本使用

通过`v-model`进行双向绑定

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-time-picker placeholder="Please pick time" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
}
</script>
```

### 尺寸

通过`size`指定尺寸

```vue
import Size from '../example/Size.vue'
```


### 标签

通过`label`设置组件的标签，通常用于表单中

```vue
import LabelComponent from '../example/Label.vue'
```

```html
<template>
  <m-time-picker label="YOUR TIME" placeholder="Please pick time" v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
}
</script>
```

### 可清空

通过`clearable`可以显示清空按钮

```vue
import Clearable from '../example/Clearable.vue'
```

```html
<template>
  <m-time-picker clearable placeholder="Please pick time" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
}
</script>
```

### 前置/后置插槽

可以通过插槽修改组件的前置和后置部分的内容

```vue
import Slots from '../example/Slots.vue'
```

```html
<template>
  <m-time-picker placeholder="Please pick time?" v-model="value">
    <template #prepend-icon>
      <m-icon class="prepend-icon" name="magnify-plus-outline" />
    </template>

    <template #append-icon>
      <m-icon class="append-icon" name="magnify-plus-outline" />
    </template>
  </m-time-picker>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
}
</script>

<style>
.prepend-icon {
  margin-right: 4px;
  margin-top: 1px;
  color: #888;
}

.append-icon {
  margin-left: 4px;
  margin-top: 1px;
  color: #888;
}
</style>
```

### 只读/禁用

通过`readonly`和`disabled`设置组件的只读和禁用状态

```vue
import Status from '../example/Status.vue'
```

```html
<template>
  <m-space direction="column">
    <m-time-picker placeholder="Please pick time" disabled v-model="value" />
    <m-time-picker placeholder="Please pick time" readonly v-model="value" />
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

### 禁用选项

通过`customDisabled`可以自定义禁用的选项，接收两个参数，`column`是当前的列，`time`是对应的时间

```vue
import CustomDisabled from '../example/CustomDisabled.vue'
```

````html
<template>
  <m-time-picker
    placeholder="Please pick time"
    :custom-disabled="customDisabled"
    v-model="value"
  />
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
  methods: {
    customDisabled(column, time) {
      return column === 0 && time % 2
    }
  }
}
</script>
````

### 值格式化

通过`valueFormat`指定取值格式，[格式化字符串使用方式参考这里](https://day.js.org/docs/en/parse/string-format)，
只支持时间部分的格式化

```vue
import ValueFormat from '../example/ValueFormat.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-time-picker value-format="HH ^ mm ^ ss" placeholder="Please pick time" v-model="value"/>
    <div>Value: {{ value }}</div>
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

### 字段验证

通过传入一个验证规则数组可以对值进行校验，校验器返回`true`表示校验通过。以外的值将转换为文本作为用户提示。

```vue
import Validation from '../example/Validation.vue'
```

```html
<template>
  <m-time-picker
    placeholder="Please pick time"
    :rules="[v => v && v.startsWith('10:') || 'You must pick 10 hour']"
    v-model="value"
  />
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string_ | **-** |
| `label` | 标签名 | _string \| number_ | **-** |
| `placeholder` | 占位符 | _string_ | **-** |
| `size` | 时间选择器尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `value-format` | 值格式化字符串 | _string_ | **HH:mm:ss** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `clearable` | 是否可清除 | _boolean_ | **false** |
| `custom-disabled` | 自定义禁用选项方法 | _(column: number, time: number) => _ | **() => false** |
| `ripple` | 是否开启水波纹 | _boolean_ | **true** |
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` `onClear` | _TimePickerValidateTrigger[]_ | **['onChange', 'onClear']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: string) => any>_ | **-** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦 | _-_ | **-** |
| `blur` | 失焦 | _-_ | **-** |
| `validate` | 触发校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 | _-_ | **-** |
| `reset` | 清空绑定的值和校验信息 | _-_ | **-** |
| `open` | 开启时间选择面板 | _-_ | **-** |
| `close` | 关闭时间选择面板 | _-_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值改变触发 | **value: string** |
| `change` | 绑定值改变触发 | **value: string** |
| `clear` | 清除时触发 | **value: string** |
| `click` | 点击时触发 | **event: Event** |
| `focus` | 聚焦时触发 | **-** |
| `blur` | 失焦时触发 | **-** |
| `open` | 时间选择面板开启时触发 | **-** |
| `opened` | 时间选择面板开启动画结束时触发 | **-** |
| `close` | 时间选择面板关闭时触发 | **-** |
| `closed` | 时间选择面板关闭动画结束时触发 | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prepend-icon` | 前置图标 | **-** |
| `append-icon` | 后置图标 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@time-picker-active-color` | `@color-primary` |
| `@time-picker-popover-box-shadow` | `0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)` |
| `@time-picker-popover-border-radius` | `4px` |
| `@time-picker-popover-font-size` | `14px` |
| `@time-picker-popover-padding` | `4px` |
| `@time-picker-popover-width` | `180px` |
| `@time-picker-popover-background` | `#fff` |
| `@time-picker-time-margin` | `4px` |
| `@time-picker-time-height` | `30px` |
| `@time-picker-time-border-radius` | `4px` |
| `@time-picker-time-text-color` | `#555` |
| `@time-picker-time-hover-background` | `rgba(0, 0, 0, 0.06)` |
| `@time-picker-actions-border` | `thin solid #eee` |
| `@time-picker-actions-padding` | `10px` |
| `@time-picker-space-height` | `172px` |
| `@time-picker-clock-icon-size` | `16px` |
| `@time-picker-clock-icon-margin` | `0 0 0 6px` |
| `@time-picker-clear-icon-size` | `16px` |