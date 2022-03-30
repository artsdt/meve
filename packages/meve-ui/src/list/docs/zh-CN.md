# List 懒加载列表

### 介绍

支持触底加载，手动检查位置并加载，错误时重新加载，自定义加载状态、错误状态、数据加载完成状态。`由于懒加载列表的特殊性，组件演示统一放到了文档底部`

### 基本使用

当检测到滚动容器滚动到底部底部时会触发`load`事件，并会设置`loading`为`true`，在加载结束时您需要手动设置`loading`为`false`，表示加载结束

```html
<template>
  <m-list
    :finished="finished"
    :loading.sync="loading"
    @load="load"
  >
    <div v-for="item in list" :key="item">Item: {{ item }}</div>
  </m-list>
</template>

<script>
export default {
  data: () => ({
    finished: false,
    loading: false,
    list: []
  }),
  methods: {
    load() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        this.loading = false

        if (this.list.length >= 30) {
          this.finished = true
        }
      }, 1000)
    },
  }
}
</script>
```

### 加载失败

您可以使用`error.sync`手动设置错误状态，会展示错误提示，点击错误提示会帮您把`error`设置成`false`并再次触发`load`事件

```html
<template>
  <m-list
    :finished="finished"
    :loading.sync="loading"
    :error.sync="error"
    @load="load"
  >
    <div v-for="item in list" :key="item">Item: {{ item }}</div>
  </m-list>
</template>

<script>
export default {
  data: () => ({
    finished: false,
    loading: false,
    error: false,
    list: []
  }),
  methods: {
    load() {
      setTimeout(() => {
        if (this.list.length === 20) {
          this.error = true
          this.loading = false
          return
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        this.loading = false
      }, 1000)
    },
  }
}
</script>
```

### 自定义提示信息

所有的提示文字都可以进行自定义

```html
<template>
  <m-list
    loading-text="米薇正在努力加载..."
    finished-text="米薇找不到更多数据了..."
    errorText-text="米薇发现异常，点击此处可以重试..."
    :finished="finished"
    :loading.sync="loading"
    @load="load"
  >
    <div v-for="item in list" :key="item">Item: {{ item }}</div>
  </m-list>
</template>

<script>
export default {
  data: () => ({
    finished: false,
    loading: false,
    list: []
  }),
  methods: {
    load() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        this.loading = false

        if (this.list.length >= 30) {
          this.finished = true
        }
      }, 1000)
    },
  }
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `loading` | 加载状态 | _boolean_ | **false** |
| `error` | 错误状态 | _boolean_ | **false** |
| `immediate-check` | 是否在组件初始化时立刻检测位置 | _boolean_ | **true** |
| `finished` | 是否加载完毕 | _boolean_ | **false** |
| `offset` | 距离底部的触发距离 | _string \| number_ | **0** |
| `loading-text` | 加载状态文字 | _string_ | **加载中** |
| `finished-text` | 加载完毕文字 | _string_ | **暂无更多** |
| `error-text` | 加载失败文字 | _string_ | **加载失败，点击重试** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `check` | 触发位置检查, 如果触底则会触发load事件 | _-_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `load` | 触底时触发 | **-** |
| `update:loading` | load事件触发前会触发一次，将loading设置为true | **loading: boolean** |
| `update:error` | load事件触发前会触发一次，将error设置为false | **error: boolean** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 列表内容 | **-** |
| `loading` | 加载中内容 | **-** |
| `error` | 加载失败内容 | **-** |
| `finished` | 加载完毕内容 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--list-loading-height` | `50px` |
| `--list-finished-height` | `50px` |
| `--list-error-height` | `50px` |
| `--list-loading-color` | `#888` |
| `--list-finished-color` | `#888` |
| `--list-error-color` | `#888` |
| `--list-loading-font-size` | `14px` |
| `--list-finished-font-size` | `14px` |
| `--list-error-font-size` | `14px` |

### 演示

这里是演示区域，注意组件不包含标签页，标签页仅用来划分区域

```vue
import Complex from '../example/Complex.vue'
```