# Pagination 分页

### 介绍

分页插件

### 基本使用

通过`:current.sync`绑定当前页，通过`:size.sync`绑定每页条数

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-pagination :current.sync="current" :size.sync="size" :total="100" />
</template>

<script>
export default {
  data: () => ({
    current: 1,
    size: 10
  })
}
</script>
```

### 快速跳转

通过`showQuickJumper`开启快速跳转功能

```vue
import QuickJumper from '../example/QuickJumper.vue'
```

```html
<template>
  <m-pagination
    show-quick-jumper
    :current.sync="current"
    :size.sync="size"
    :total="100"
  />
</template>

<script>
export default {
  data: () => ({
    current: 1,
    size: 10
  })
}
</script>
```

### 每页条数

通过`showSizeChanger`开启设置每页条数的功能，通过`sizeOption`自定义可选的每页条数

```vue
import SizeChanger from '../example/SizeChanger.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-pagination
      show-size-changer
      :current.sync="current"
      :size.sync="size"
      :total="100"
    />
    <m-pagination
      show-size-changer
      :current.sync="current"
      :size.sync="size"
      :total="100"
      :size-option="[10, 20]"
    />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    current: 1,
    size: 10,
  })
}
</script>
```

### 显示总条数

通过`showTotal`自定义总条数显示内容

```vue
import Total from '../example/Total.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-pagination
      :current.sync="current"
      :size.sync="size"
      :total="100"
      :show-total="(total) => `共 ${total} 条`"
    />
    <m-pagination
      :current.sync="current"
      :size.sync="size"
      :total="100"
      :show-total="(total, [start, end]) => `共 ${total} 条，当前 ${start} 到  ${end} 条`"
    />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    current: 1,
    size: 10
  })
}
</script>
```

### 禁用

通过`disabled`开启禁用状态

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<template>
  <m-pagination
    disabled
    show-size-changer
    show-quick-jumper
    :current.sync="current"
    :size.sync="size"
    :total="100"
    :show-total="(total) => `共 ${total} 条`"
  />
</template>

<script>
export default {
  data: () => ({
    current: 1,
    size: 10
  })
}
</script>
```

## API

### 属性

| 参数                  | 说明 | 类型 | 默认值 |
|---------------------| -------------- | -------- | ---------- |
| `current.sync`  | 当前页数 | _string \| number_ | **1** |
| `size.sync`     | 每页条数 | _string \| number_ | **10** |
| `total`             | 总条数 | _string \| number_ | **0** |
| `disabled`          | 是否禁用分页 | _boolean_ | **false** |
| `show-size-changer` | 是否显示 `size` 切换器 | _boolean_ | **true** |
| `show-quick-jumper` | 是否开启快速跳转功能	 | _boolean_ | **false** |
| `size-option`       | 指定每页可以显示多少条	 | _number[]_ | **[10, 20, 50, 100]** |
| `show-total`        | 用于显示数据总量和当前数据顺序	 | _(total: number, range: [number, number]) => string_ | **-** |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `change` | `current` 或 `size` 改变后的回调 | **current: number，size: number**  |


### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `prev` | 上一页 | _-_ | **-** |
| `next` | 下一页 | _-_ | **-** |
| `to` | 跳转页码，越界会修正 | _number_ | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prev-button` | 上一页按钮内容 | **-** |
| `next-button` | 下一页按钮内容 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--pagination-active-color` | `var(--color-primary)` |
| `--pagination-active-text-color` | `#fff` |
| `--pagination-pager-size` | `36px` |
| `--pagination-pager-border-radius` | `50%` |
| `--pagination-pager-border` | `thin solid #dee2e6` |
| `--pagination-pager-text-color` | `#8898aa` |
| `--pagination-pager-font-size` | `14px` |
| `--pagination-pager-gap` | `6px` |
| `--pagination-pager-hover-color` | `#dee2e6` |
| `--pagination-extra-component-gap` | `14px` |
| `--pagination-total-font-size` | `15px` |
| `--pagination-total-text-color` | `#8898aa` |
| `--pagination-size-changer-width` | `94px` |
| `--pagination-size-changer-height` | `32px` |
| `--pagination-size-changer-text-color` | `#8898aa` |
| `--pagination-quick-jumper-width` | `94px` |
| `--pagination-quick-jumper-height` | `32px` |
| `--pagination-quick-jumper-text-color` | `#8898aa` |
| `--pagination-quick-jumper-placeholder-font-size` | `13px` |
| `--pagination-arrow-icon-size` | `16px` |
| `--pagination-offset-y: 10px;` | `10px` |
