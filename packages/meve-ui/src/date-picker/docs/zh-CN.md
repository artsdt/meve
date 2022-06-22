# DatePicker 日期选择器

### 介绍

日期选择器，用于选取日期或日期范围

### 基本使用

通过`v-model`进行双向绑定

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-date-picker placeholder="please pick date" v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: undefined
  })
}
</script>
```

### 范围选择

通过`range`开启范围选择，可以得到一个包含起止日期的数组

```vue
import Range from '../example/Range.vue'
```

```html
<template>
  <m-date-picker range placeholder="please pick date" v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: []
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
    <m-date-picker label="NORMAL" placeholder="Please pick date" v-model="value" />
    <m-date-picker label="SMALL" placeholder="Please pick date" size="small" v-model="value" />
    <m-date-picker label="MINI" placeholder="Please pick date" size="mini" v-model="value" />
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

### 标签

通过`label`设置组件的标签，通常用于表单中

```vue
import LabelComponent from '../example/Label.vue'
```

```html
<template>
  <m-date-picker label="YOUR DATE" placeholder="Please pick date" v-model="value" />
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
  <m-date-picker clearable placeholder="Please pick date" v-model="value" />
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
  <m-date-picker placeholder="Please pick date" v-model="value">
    <template #prepend-icon>
      <m-icon class="prepend-icon" name="magnify-plus-outline" />
    </template>

    <template #append-icon>
      <m-icon class="append-icon" name="magnify-plus-outline" />
    </template>
  </m-date-picker>
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
    <m-date-picker placeholder="Please pick date" disabled v-model="value" />
    <m-date-picker placeholder="Please pick date" readonly v-model="value" />
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

通过`customDisabled`可以自定义禁用的日期，接收一个被`dayjs`包装之后的实例

```vue
import CustomDisabled from '../example/CustomDisabled.vue'
```

```html
<template>
  <m-date-picker placeholder="Please pick date" :custom-disabled="customDisabled" v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
  methods: {
    customDisabled(date) {
      return date.date() % 2 === 0
    },
  },
}
</script>
```

### 值格式化

通过`valueFormat`指定取值格式，[格式化字符串使用方式参考这里](https://day.js.org/docs/en/parse/string-format)

```vue
import ValueFormat from '../example/ValueFormat.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-date-picker value-format="YYYY/MM/DD" placeholder="Please pick date" v-model="value" />
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

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string \| string[]_ | **-** |
| `label` | 标签名 | _string \| number_ | **-** |
| `placeholder` | 占位符 | _string_ | **-** |
| `range` | 开启范围选择 | _boolean_ | **false** |
| `size` | 日期选择器尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `value-format` | 值格式化字符串 | _string_ | **YYYY-MM-DD** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `clearable` | 是否可清除 | _boolean_ | **false** |
| `custom-disabled` | 自定义禁用日期方法 | _(date) => boolean_ | **() => false** |
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` `onClear` | _DatePickerValidateTrigger[]_ | **['onChange', 'onClear']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: string \| string[]) => any>_ | **-** |

### 方法

| 方法名 | 说明         | 参数 | 返回值 |
| --- |------------| --- | --- |
| `focus` | 聚焦         | _-_ | **-** |
| `blur` | 失焦         | _-_ | **-** |
| `validate` | 触发校验       | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息     | _-_ | **-** |
| `reset` | 清空绑定的值和校验信息 | _-_ | **-** |
| `open` | 开启时间选择面板   | _-_ | **-** |
| `close` | 关闭时间选择面板   | _-_ | **-** |
| `prevMonth` | 翻到上一个月     | _-_ | **-** |
| `nextMonth` | 翻到下一个月       | _-_ | **-** |
| `prevYear` | 翻到上一年        | _-_ | **-** |
| `nextYear` | 翻到下一年        | _-_ | **-** |
| `toNow` | 翻到今天       | _-_ | **-** |
| `slideTo` | 翻到某个日期     | _date: Date_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值改变触发 | **value: string \| string[]** |
| `change` | 绑定值改变触发 | **value: string \| string[]** |
| `clear` | 清除时触发 | **value: string \| string[]** |
| `click` | 点击时触发 | **event: Event** |
| `focus` | 聚焦时触发 | **-** |
| `blur` | 失焦时触发 | **-** |
| `open` | 日期选择面板开启时触发 | **-** |
| `opened` | 日期选择面板开启动画结束时触发 | **-** |
| `close` | 日期选择面板关闭时触发 | **-** |
| `closed` | 日期选择面板关闭动画结束时触发 | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prepend-icon` | 前置图标 | **-** |
| `append-icon` | 后置图标 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--date-picker-popover-box-shadow` | `0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)` |
| `--date-picker-popover-border-radius` | `4px` |
| `--date-picker-popover-font-size` | `14px` |
| `--date-picker-popover-padding` | `6px 14px` |
| `--date-picker-popover-width` | `294px` |
| `--date-picker-popover-background` | `#fff` |
| `--date-picker-actions-border` | `thin solid #eee` |
| `--date-picker-actions-padding` | `10px 2px` |
| `--date-picker-calendar-icon-size` | `16px` |
| `--date-picker-calendar-icon-margin` | `0 0 0 6px` |
| `--date-picker-clear-icon-size` | `16px` |
| `--date-picker-calendar-date-cell-height` | `38px` |
| `--date-picker-calendar-date-cell-padding` | `2px` |
| `--date-picker-calendar-date-text-size` | `28px` |
| `--date-picker-calendar-date-text-font-size` | `14px` |
| `--date-picker-calendar-day-border` | `thin solid #eee` |
| `--date-picker-calendar-header-padding` | `8px 0 0` |
| `--date-picker-calendar-button-padding` | `2px` |
| `--date-picker-calendar-arrow-icon-size` | `16px` |
| `--date-picker-calendar-arrow-icon-color` | `#888` |
