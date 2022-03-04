# LoadingBar 加载条

### 介绍

可以控制页面顶部的加载进度

### 加载状态

通过提供的方法来控制进度条的状态

```vue
import State from '../example/State.vue'
```

```html
<template>
  <m-space>
    <m-button type="primary" @click="start">Start</m-button>
    <m-button type="primary" @click="finish" :disabled="disabled">Finish</m-button>
    <m-button type="primary" @click="error">Error</m-button>
  </m-space>
</template>

<script>
import { LoadingBar } from '@meve/ui'

export default {
  data: () => ({
    disabled: true,
  }),
  methods: {
    start() {
      this.disabled = false
      LoadingBar.start()
    },

    finish() {
      this.disabled = true
      LoadingBar.finish()
    },

    error() {
      this.disabled = true
      LoadingBar.error()
    }
  }
}
</script>
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `start` | 开始加载 | _-_ | **-** |
| `finished` | 结束加载 | _-_ | **-** |
| `error` | 加载失败 | _-_ | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `loading-bar-primary-color` | `@color-primary` |
| `loading-bar-error-color` | `@color-error` |
| `loading-bar-height` | `3px` |