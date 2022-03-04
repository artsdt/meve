# Tag 标签

### 介绍

展示一些可以关闭的列表项

### 标签类型

提供了一些类型

```vue
import Type from '../example/Type.vue'
```

```html
<m-tag>默认标签</m-tag>
<m-tag type="primary">主要标签</m-tag>
<m-tag type="info">信息标签</m-tag>
<m-tag type="warning">警告标签</m-tag>
<m-tag type="success">成功标签</m-tag>
<m-tag type="error">错误标签</m-tag>
```

### 标签尺寸

```vue
import Size from '../example/Size.vue'
```

```html
<m-tag type="primary" size="large">大型标签</m-tag>
<m-tag type="primary">普通标签</m-tag>
<m-tag type="primary" size="small">小型标签</m-tag>
<m-tag type="primary" size="mini">迷你标签</m-tag>
```

### 可关闭

可以通过`closeable`是否显示关闭按钮, `closeIconSize`可以控制关闭按钮的尺寸, 通过`close`事件控制关闭

```vue
import Close from '../example/Close.vue'
```

```html
<template>
  <m-tag closeable @close="handleClose">可关闭标签</m-tag>
  <m-tag closeable :close-icon-size="12" @close="handleClose">可关闭标签</m-tag>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  methods: {
    handleClose() {
      Message.success('Close ok')
    }
  }
}  
</script>
```

### 禁用状态

禁用状态中的标签不会触发`关闭`事件

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<m-tag readonly closeable>只读标签</m-tag>
<m-tag disabled closeable>禁用标签</m-tag>
```

### 文字标签

带关闭的按钮的文字

```vue
import Txt from '../example/Text.vue'
```

```html
<m-tag text closeable>默认标签</m-tag>
<m-tag type="primary" text closeable>主要标签</m-tag>
<m-tag type="info" text closeable>信息标签</m-tag>
<m-tag type="warning" text closeable>警告标签</m-tag>
<m-tag type="success" text closeable>成功标签</m-tag>
<m-tag type="error" text closeable>错误标签</m-tag>
```

### 镂空标签

```vue
import Outline from '../example/Outline.vue'
```

```html
<m-tag text outline closeable>默认标签</m-tag>
<m-tag type="primary" text outline closeable>主要标签</m-tag>
<m-tag type="info" text outline closeable>信息标签</m-tag>
<m-tag type="warning" text outline closeable>警告标签</m-tag>
<m-tag type="success" text outline closeable>成功标签</m-tag>
<m-tag type="error" text outline closeable>错误标签</m-tag>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `type` | 类型，可选值为 `default` `primary` `info` `success` `warning` `error` | _string_ | **default** |
| `size` | 尺寸，可选值为 `normal` `mini` `small` `large` | _string_ | **normal** |
| `closeable` | 是否显示关闭按钮 | _boolean_ | **false** |
| `close-icon-size` | 关闭按钮尺寸 | _number \| string_ | **-** |
| `block` | 块级标签 | _boolean_ | **false** | 
| `text` | 是否是文字标签 | _boolean_ | **false** | 
| `outline` | 是否使用外边框 | _boolean_ | **false** |
| `readonly` | 只读状态 | _boolean_ | **false** |
| `disabled` | 禁用状态 | _boolean_ | **false** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发，在 `disabled` 状态为 `true` 时不触发 | **event: Event** |
| `touchstart` | 触摸手指压下按钮时触发，在 `disabled` 状态为 `true` 时不触发 | **event: Event** |
| `close` | 点击关闭按钮时触发，在 `disabled` 状态为 `true` 时不触发 | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 标签内容 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@tag-default-color` | `#172b4d` |
| `@tag-primary-color` | `@color-primary` |
| `@tag-error-color` | `@color-error` |
| `@tag-success-color` | `@color-success` |
| `@tag-warning-color` | `@color-warning` |
| `@tag-info-color` | `@color-info` |
| `@tag-disabled-color` | `@color-disabled` |
| `@tag-disabled-text-color` | `@color-text-disabled` |
| `@tag-border-radius` | `4px` |
| `@tag-mini-padding` | `0 6px` |
| `@tag-small-padding` | `0 8px` |
| `@tag-normal-padding` | `0 10px` |
| `@tag-large-padding` | `0 18px` |
| `@tag-mini-height` | `20px` |
| `@tag-small-height` | `28px` |
| `@tag-normal-height` | `36px` |
| `@tag-large-height` | `44px` |
| `@tag-close-icon-size` | `16px` |
| `@tag-close-button-padding` | `3px` |

