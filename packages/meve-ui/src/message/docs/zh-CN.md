# Message 提示信息

### 介绍

基于函数调用的提示信息, 支持传入一个字符串或是配置项

### 类型

提供了一些类型信息

```vue
import Type from '../example/Type.vue'
```

```html
<template>
  <m-space>
    <m-button type="primary" @click="showMessage('loading')">加载类型</m-button>
    <m-button type="info" @click="showMessage('info')">信息类型</m-button>
    <m-button type="warning" @click="showMessage('warning')">警告类型</m-button>
    <m-button type="error" @click="showMessage('error')">错误类型</m-button>
    <m-button type="success" @click="showMessage('success')">成功类型</m-button>
  </m-space>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  methods: {
    showMessage(type) {
      Message[type]('The term metaverse has its origins in the 1992 science fiction novel Snow Crash as a portmanteau of meta and universe.')
    },
  },
}
</script>
```

### 时长

通过`duration`设置信息存在的时间

```vue
import Duration from '../example/Duration.vue'
```

```html
<template>
  <m-button type="primary" @click="showMessage">存在1秒</m-button>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  methods: {
    showMessage() {
      Message({
        duration: 1000,
        content: 'The term metaverse has its origins in the 1992 science fiction novel Snow Crash as a portmanteau of meta and universe.'
      })
    },
  },
}
</script>
```

### 下方弹出

通过`position`修改弹出方向

```vue
import Position from '../example/Position.vue'
```

```html
<template>
  <m-button type="primary" @click="showMessage">从下方弹出</m-button>
</template>

<script>
import Message from '@meve/ui'

export default {
  methods: {
    showMessage() {
      Message({
        position: 'bottom',
        content: 'The term metaverse has its origins in the 1992 science fiction novel Snow Crash as a portmanteau of meta and universe.'
      })
    },
  },
}
</script>
```

### 不可关闭

通过`closeable`控制信息是否可以手动关闭

```vue
import Closeable from '../example/Closeable.vue'
```

```html
<template>
  <m-button type="primary" @click="showMessage">不可关闭</m-button>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  methods: {
    showMessage() {
      Message({
        closeable: false,
        content: 'The term metaverse has its origins in the 1992 science fiction novel Snow Crash as a portmanteau of meta and universe.'
      })
    },
  },
}
</script>
```

### 手动关闭

有一个常见的需求，先加载请求，加载的过程中必须禁止用户点击，在请求成功之后取消加载并提示成功

```vue
import Loading from '../example/Loading.vue'
```

```html
<template>
  <m-button type="primary" @click="showMessage">加载</m-button>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  methods: {
    showMessage() {
      const { clear } = Message.loading({
        duration: Infinity,
        closeable: false,
        forbidClick: true,
        content: 'loading....'
      })

      setTimeout(() => {
        clear()
        Message('success!')
      }, 1000)
    },
  },
}
</script>
```

### 覆盖类型配置

看了上面的例子，你可能觉得调用`Message.loading`传递这么多参数会很麻烦，这里提供了覆盖默认配置的方式，可以针对不同的类型进行覆盖，
这里以`Message.loading`为例子

```js
import { Message } from '@meve/ui'

Message.configType('loading', {
  content: 'loading....',
  duration: Infinity,
  closeable: false,
  forbidClick: true,
})
```

### 覆盖全局的默认配置

当然你也可以选择覆盖全局的默认配置，注意：类型配置的优先级要高于全局的默认配置

```js
import { Message } from '@meve/ui'

Message.config({ closeable: false })
```

### 函数选项

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `type` | 类型，可选值 `success` `loading` `info` `warning` `error` `success` | _string_ | **success** |
| `position` | 位置，可选值 `top` `bottom` | _string_ | **top** |
| `content` | 提示信息 | _string_ | **-** |
| `duration` | 存在时长，单位`ms` | _number_ | **3000** |
| `closeable` | 是否可以关闭 | _boolean_ | **true** |
| `forbidClick` | 是否阻止用户点击，设置为 `true` 用户将无法点击任何元素 | _boolean_ | **false** |
| `lockScroll` | 是否禁止滚动穿透，设置为 `true` 时 `body` 将无法滚动 | _boolean_ | **false** |

### 实例方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `clear` | 关闭弹窗 | `-` | `-` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@message-text-color` | `#fff` |
| `@message-loading-background-color` | `#3f4d67` |
| `@message-info-background-color` | `@color-info` |
| `@message-warning-background-color` | `@color-warning` |
| `@message-success-background-color` | `@color-success` |
| `@message-error-background-color` | `@color-error` |
| `@message-loading-color` | `#fff` |
| `@message-cubic-bezier` | `@cubic-bezier` |
| `@message-offset-top` | `30px` |
| `@message-offset-bottom` | `30px` |
| `@message-content-margin` | `0 16px` |
| `@message-icon-size` | `20px` |
| `@message-close-icon-size` | `18px` |
| `@message-close-button-margin` | `0 -10px 0 0` |


