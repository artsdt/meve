# Calendar 日历

### 介绍

一个日历

### 基本使用

通过`v-model`双向绑定

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-calendar v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  })
}
</script>
```

### 范围选择

通过`range`开启范围选择

```vue
import Range from '../example/Range.vue'
```

```html
<template>
  <m-calendar range v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: [],
  })
}
</script>
```

### 禁用日期

通过`customDisabled`可以自定义禁用的日期，接收一个被`dayjs`包装之后的实例

```vue
import CustomDisabled from '../example/CustomDisabled.vue'
```

```html
<template>
  <m-calendar :custom-disabled="customDisabled" v-model="value"/>
</template>

<script>
export default {
  data: () => ({
    value: undefined,
  }),
  methods: {
    customDisabled(date) {
      return date.date() % 2
    }
  }
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string_ | **-** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `day-style` | 星期格子样式 | _object_ | **-** |
| `date-style` | 日期格子样式 | _object_ | **-** |
| `date-text-style` | 日期文字样式 | _object_ | **-** |
| `value-format` | 值格式化字符串 | _string_ | **YYYY-MM-DD** |
| `ripple` | 是否开启水波纹 | _boolean_ | **true** |
| `custom-disabled` | 自定义禁用日期方法 | _(date) => boolean_ | **() => false** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `prev` | 上一个月 | _-_ | **-** |
| `month` | 下一个月 | _-_ | **-** |
| `toNow` | 跳转到今天 | _-_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值改变触发 | **value: string** |
| `change` | 绑定值改变触发 | **value: string** |
| `click` | 点击日期时触发 | **value: string** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `header` | 日历头部内容 | **current: 当前页实例, disabled: boolean, readonly: boolean** |
| `extra` | 日期格子附加内容 | **date: 日期实例** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@calendar-text-disabled-color` | `@color-text-disabled` |
| `@calendar-disabled-color` | `@color-disabled` |
| `@calendar-day-text-color` | `#adb5bd` |
| `@calendar-date-text-color` | `#555` |
| `@calendar-today-date-color` | `@color-warning` |
| `@calendar-picked-date-color` | `@color-primary` |
| `@calendar-header-margin` | `0 0 14px 0` |
| `@calendar-current-text-color` | `#67748e` |
| `@calendar-current-font-size` | `24px` |
| `@calendar-today-button-margin` | `0 14px` |
| `@calendar-background` | `#fff` |
| `@calendar-border-color` | `#eee` |
| `@calendar-date-text-box-shadow` | `0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)` |
| `@calendar-day-padding` | `10px` |
| `@calendar-day-font-size` | `14px` |
