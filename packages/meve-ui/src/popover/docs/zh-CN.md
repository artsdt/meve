# Popover 悬浮框

### 介绍

用户交互触发悬浮显示一些内容，支持多个方向的悬浮

### 触发方式

通过`trigger`可以设置触发悬浮的方式，提供了`hover` 和 `click` 两种方式

```vue
import Trigger from '../example/Trigger.vue'
```

```html
<m-popover>
  <div>自恨罗衣掩诗句，举头空羡榜中名</div>

  <template #trigger>
    <m-button type="primary">Hover 触发</m-button>
  </template>
</m-popover>

<m-popover trigger="click">
  <div>自恨罗衣掩诗句，举头空羡榜中名</div>

  <template #trigger>
    <m-button type="primary">Click 触发</m-button>
  </template>
</m-popover>
```

### 偏移量

可以通过`x`、`y`设置悬浮框和触发器的偏移量

```vue
import Offset from '../example/Offset.vue'
```

```html
<m-popover :y="4">
  <div>自恨罗衣掩诗句，举头空羡榜中名</div>

  <template #trigger>
    <m-button type="primary">Hover 触发</m-button>
  </template>
</m-popover>

<m-popover trigger="click" :y="4">
  <div>自恨罗衣掩诗句，举头空羡榜中名</div>

  <template #trigger>
    <m-button type="primary">Click 触发</m-button>
  </template>
</m-popover>
```

### 与触发器同宽

可以通过`same-width`设置悬浮框的宽度和一样

```vue
import SameWidth from '../example/SameWidth.vue'
```

```html
<m-popover same-width :y="4">
  <div>自恨罗衣掩诗句，举头空羡榜中名</div>

  <template #trigger>
    <m-button type="primary">Hover 触发</m-button>
  </template>
</m-popover>

<m-popover same-width :y="4" trigger="click">
  <div>自恨罗衣掩诗句，举头空羡榜中名</div>

  <template #trigger>
    <m-button type="primary">Click 触发</m-button>
  </template>
</m-popover>
```

### 位置

通过`placement`控制悬浮位置, 可选值为`top`、`bottom`、`left`、`right`、`left-start`、
`right-start`、`left-end`、`right-end`、`top-start`、`top-end`、`bottom-start`、`bottom-end`

```vue
import Placement from '../example/Placement.vue'
```

```html
<m-popover trigger="click" placement="top-start">
  <div class="text">米薇</div>

  <template #trigger>
    <m-button type="primary">top-start</m-button>
  </template>
</m-popover>
```

### 禁用

通过`disabled`禁止悬浮触发

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<m-popover :y="4" disabled>
  <div>自恨罗衣掩诗句，举头空羡榜中名</div>

  <template #trigger>
    <m-button type="primary">Hover 触发</m-button>
  </template>
</m-popover>

<m-popover trigger="click" :y="4" disabled>
  <div>自恨罗衣掩诗句，举头空羡榜中名</div>

  <template #trigger>
    <m-button type="primary">Click 触发</m-button>
  </template>
</m-popover>
```

### 事件

组件提供了悬浮框显示隐藏的事件

```vue
import Events from '../example/Events.vue'
```

```html
<template>
  <m-space>
    <m-popover 
      :y="4" 
      @open="handleOpen"
      @opened="handleOpened"
      @close="handleClose"
      @closed="handleClosed"
    >
      <div>自恨罗衣掩诗句，举头空羡榜中名</div>

      <template #trigger>
        <m-button type="primary">Hover 触发</m-button>
      </template>
    </m-popover>

    <m-popover 
      trigger="click"
      :y="4"
      @open="handleOpen"
      @opened="handleOpened"
      @close="handleClose"
      @closed="handleClosed"
    >
      <div>自恨罗衣掩诗句，举头空羡榜中名</div>

      <template #trigger>
        <m-button type="primary">Click 触发</m-button>
      </template>
    </m-popover>
  </m-space>

</template>

<script>
import { Message } from '@meve/ui'

export default {
  methods: {
    handleOpen() {
      Message('open')
    },
    handleClose() {
      Message('close')
    },
    handleOpened() {
      Message('opened')
    },
    handleClosed() {
      Message('closed')
    },
  }
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `trigger` | 触发方式，可选值为 `click` `hover` `manual` | _string_ | **hover** |
| `placement` | 悬浮位置，可选值查看上方案例说明 | _string_ | **bottom** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `x` | 悬浮框x轴位置的偏移量 | _number \| string_ | **0** |
| `y` | 悬浮框y轴位置的偏移量 | _boolean_ | **0** | 
| `same-width` | 是否和触发器同宽 | _boolean_ | **false** | 
| `default-style` | 是否带有默认样式 | _boolean_ | **true** |


### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `open` | 打开悬浮框 | _-_ | **-** |
| `close` | 关闭悬浮框 | _-_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 悬浮框开启时触发 | **-** |
| `opened` | 悬浮框开启动画结束时触发 | **-** |
| `close` | 悬浮框关闭时触发 | **-** |
| `closed` | 悬浮框关闭动画结束时触发 | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 悬浮框内容 | **-** |
| `trigger` | 触发器内容 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--popover-cubic-bezier` | `var(--cubic-bezier)` |
| `--popover-box-shadow` | `0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1)` |
| `--popover-padding` | `10px 14px` |
| `--popover-border-radius` | `6px` |
| `--popover-background` | `#fff` |