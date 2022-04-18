# Button 按钮

### 介绍

常见的按钮，该有的都有

### 按钮类型

提供了一些类型

```vue
import Type from '../example/Type.vue'
```

```html
<m-button>默认按钮</m-button>
<m-button type="primary">主要按钮</m-button>
<m-button type="info">信息按钮</m-button>
<m-button type="warning">警告按钮</m-button>
<m-button type="success">成功按钮</m-button>
<m-button type="error">错误按钮</m-button>
```

### 按钮尺寸

提供了一些尺寸

```vue
import Size from '../example/Size.vue'
```

```html
<m-button type="primary" size="large">大型按钮</m-button>
<m-button type="primary">普通按钮</m-button>
<m-button type="primary" size="small">小型按钮</m-button>
<m-button type="primary" size="mini">迷你按钮</m-button>
```

### 加载状态

加载状态中的按钮不会触发`点击`和`触摸`事件，加载状态的尺寸可以修改

```vue
import Loading from '../example/Loading.vue'
```

```html
<template>
  <m-space>
    <m-button type="primary" loading>加载中...</m-button>
    <m-button type="primary" loading :loading-size="14">加载中...</m-button>
    <m-button type="primary" auto-loading @click="handleAutoLoadingClick">自动加载</m-button>
  </m-space>
</template>

<script>
export default {
  methods:{
    handleAutoLoadingClick() {
      return new Promise((resolve) => {
        setTimeout(resolve, 4000)
      })
    }
  }
}
</script>
```

### 禁用状态

禁用状态中的按钮不会触发`点击`和`触摸`事件, 并且不会产生点击反馈

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<m-button type="primary" disabled>禁用按钮</m-button>
```

### 圆型按钮

圆形按钮，一般配合图标使用

```vue
import Round from '../example/Round.vue'
```

```html
<m-button round>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="primary" round>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="info" round>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="warning" round>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="success" round>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="error" round>
  <m-icon name="menu-open"/>
</m-button>
```

### 块级按钮

有些时候需要一个按钮铺满整行

```vue
import Block from '../example/Block.vue'
```

```html
<m-button type="primary" block>块级按钮</m-button>
```

### 文字按钮

一个可以点击的文字

```vue
import Txt from '../example/Text.vue'
```

```html
<m-button text>默认按钮</m-button>
<m-button type="primary" text>主要按钮</m-button>
<m-button type="info" text>信息按钮</m-button>
<m-button type="warning" text>警告按钮</m-button>
<m-button type="success" text>成功按钮</m-button>
<m-button type="error" text>错误按钮</m-button>
```

### 镂空按钮

一个可以点击的文字带上了外边框

```vue
import Outline from '../example/Outline.vue'
```

```html
<m-button text outline>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="primary" text outline>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="info" text outline>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="warning" text outline>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="success" text outline>
  <m-icon name="menu-open"/>
</m-button>
<m-button type="error" text outline>
  <m-icon name="menu-open"/>
</m-button>
```



## API

### 属性

| 参数             | 说明                                                            | 类型       | 默认值         | 
|----------------|---------------------------------------------------------------|----------|-------------| 
| `type`         | 类型，可选值为 `default` `primary` `info` `success` `warning` `error` | _string_ | **default** |
| `size`         | 尺寸，可选值为 `normal` `mini` `small` `large`                       | _string_ | **normal**  |
| `loading`      | 加载状态                                                          | _boolean_ | **false**   |
| `loading-size` | 加载图标的尺寸                                                       | _number \| string_     | **-** |
| `auto-loading` | 自动 loading 模式，方便处理异步任务                                     | _boolean_ | **false**    | **-** |
| `round`        | 是否是圆形按钮                                                       | _boolean_ | **false**   | 
| `block`        | 是否是块级元素                                                       | _boolean_ | **false**   | 
| `text`         | 是否是文字按钮                                                       | _boolean_ | **false**   |
| `outline`      | 是否使用外边框                                                       | _boolean_ | **false**   |
| `disabled`     | 禁用状态                                                          | _boolean_ | **false**   |
| `ripple`       | 是否使用水波纹                                                       | _boolean_ | **true**    |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发 | **event: Event** |
| `touchstart` | 触摸手指压下按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发 | **event: Event** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--button-default-color` | `var(--color-default)` |
| `--button-default-hover-color` | `var(--color-deep-default)` |
| `--button-default-text-color` | `var(--button-primary-color)` |
| `--button-primary-color` | `var(--color-primary)` |
| `--button-primary-hover-color` | `var(--color-deep-primary)` |
| `--button-error-color` | `var(--color-error)` |
| `--button-error-hover-color` | `var(--color-deep-error)` |
| `--button-success-color` | `var(--color-success)` |
| `--button-success-hover-color` | `var(--color-deep-success)` |
| `--button-warning-color` | `var(--color-warning)` |
| `--button-warning-hover-color` | `var(--color-deep-warning)` |
| `--button-info-color` | `var(--color-info)` |
| `--button-info-hover-color` | `var(--color-deep-info)` |
| `--button-disabled-color` | `var(--color-disabled)` |
| `--button-disabled-text-color` | `var(--color-text-disabled)` |
| `--button-border-radius` | `6px` |
| `--button-mini-padding` | `0 8px` |
| `--button-small-padding` | `0 11px` |
| `--button-normal-padding` | `0 15px` |
| `--button-large-padding` | `0 22px` |
| `--button-mini-height` | `20px` |
| `--button-small-height` | `28px` |
| `--button-normal-height` | `36px` |
| `--button-large-height` | `44px` |
| `--button-round-padding` | `6px` |
| `--button-small-loading-size` | `16px` |
| `--button-normal-loading-size` | `20px` |
| `--button-large-loading-size` | `22px` |
| `--button-mini-loading-size` | `14px` |
| `--button-loading-margin` | `0 0 0 6px` |