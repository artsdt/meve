# Dialog 对话框

### 介绍

弹出一个对话框展示内容并处理用户交互，提供了函数式和组件声明式两种使用方式

### 函数式调用

函数式调用返回一个`promise`, 包含`confirm`、`cancel`、`close`三种状态来表示用户的选择

```vue
import FunctionCall from '../example/FunctionCall.vue'
```

```html
<template>
  <m-button type="primary" @click="showDialog">函数式调用</m-button>
</template>

<script>
import { Message, Dialog } from '@meve/ui'

export default {
  methods: {
    async showDialog() {
      const action = await Dialog('元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造')

      Message(`Action: ${action}`)
    },
  },
}
</script>
```

### 函数式配置

函数式调用除了传递一个文字内容以外还支持一个配置对象，可以详细的控制组件行为

```vue
import FunctionOptions from '../example/FunctionOptions.vue'
```

```html
<template>
  <div class="example">
    <m-space>
      <m-button
        type="primary"
        @click="showDialog({ title: '米薇', message: '我是米薇!' })"
      >
        修改标题
      </m-button>

      <m-button
        type="primary"
        @click="showDialog({
          title: '米薇',
          message: '我是米薇!',
          confirmButton: false,
          cancelButton: false
        })"
      >
        隐藏按钮
      </m-button>

      <m-button
        type="primary"
        @click="showDialog({
          title: '米薇',
          message: '我是米薇!',
          confirmButtonType: 'error',
          cancelButtonType: 'error',
        })"
      >
        按钮类型
      </m-button>

      <m-button
        type="primary"
        @click="showDialog({
          title: '米薇',
          message: '我是米薇!',
          confirmButtonText: '好的',
          cancelButtonText: '告辞',
        })"
      >
        按钮文字
      </m-button>

      <m-button
        type="primary"
        @click="showDialog({
          title: '米薇',
          message: '我是米薇!',
          messageAlign: 'center'
        })"
      >
        文字对齐
      </m-button>
    </m-space>
  </div>
</template>

<script>
import { Message, Dialog } from '@meve/ui'

export default {
  methods: {
    async showDialog(options) {
      const action = await Dialog(options)

      Message(`Action: ${action}`)
    },
  },
}
</script>
```

### 函数式异步关闭

通过传入`onBeforeClose`阻止正常关闭，函数会接收到用户选择的`action`和用来手动关闭弹窗的`done`方法

```vue
import FunctionAsyncClose from '../example/FunctionAsyncClose.vue'
```

```html
<template>
  <m-button type="primary" @click="showDialog">函数式调用</m-button>
</template>

<script>
import { Dialog, Message } from '@meve/ui'

export default {
  methods: {
    showDialog() {
      Dialog({
        message: '我是米薇',
        onBeforeClose(action, done) {
          const { clear } = Message.loading({
            forbidClick: true,
            duration: Infinity,
            content: '正在异步关闭'
          })

          setTimeout(() => {
            clear()
            Message(`Action: ${action}`)
            done()
          }, 1000)
        }
      })
    },
  },
}
</script>
```

### 组件声明式调用

传统组件的调用方式

```vue
import Call from '../example/Call.vue'
```

```html
<template>
  <div class="example">
    <m-button type="primary" @click="show = true">组件声明式调用</m-button>

    <m-dialog
      v-model="show"
      title="你好"
      message="我是米薇!"
      @confirm="showMessage('confirm')"
      @cancel="showMessage('cancel')"
      @close="showMessage('close')"
    />
  </div>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  data: () => ({
    show: false,
  }),
  methods: {
    async showMessage(action) {
      Message(`Action: ${action}`)
    },
  },
}
</script>
```

### 组件声明式插槽

使用插槽更加灵活

```vue
import Slots from '../example/Slots.vue'
```

```html
<template>
  <div class="example">
    <m-button type="primary" @click="show = true">组件声明式插槽</m-button>

    <m-dialog v-model="show">
      <div class="message">这里是正文</div>

      <template #title>
        <span>这里是标题</span>
      </template>

      <template #footer>
        <div class="footer">这里是尾部</div>
      </template>
    </m-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  })
}
</script>

<style>
.message, .footer {
  padding: 20px;
  color: #555;
}
</style>
```

### 组件声明式异步关闭

操作跟函数式差不多

```vue
import AsyncClose from '../example/AsyncClose.vue'
```

```html
<template>
  <div class="example">
    <m-button type="primary" @click="show = true">组件声明式调用</m-button>

    <m-dialog
      v-model="show"
      title="你好"
      message="我是米薇!"
      :before-close="handleBeforeClose"
    />
  </div>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  data: () => ({
    show: false,
  }),
  methods: {
    handleBeforeClose(action, done) {
      const { clear } = Message.loading({
        forbidClick: true,
        duration: Infinity,
        content: '正在异步关闭'
      })

      setTimeout(() => {
        clear()
        Message(`Action: ${action}`)
        done()
      }, 1000)
    },
  },
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | 是否显示对话框 | _boolean_ | **false** |
| `title` | 对话框标题 | _string_ | **提示** |
| `message` | 对话框内容 | _string_ | **-** |
| `message-align` | 对话框内容文字对齐方式，可选值 `center`, `left`, `right` | _string_ | **left** |
| `confirm-button` | 是否显示确认按钮 | _boolean_ | **true** |
| `cancel-button` | 是否显示取消按钮 | _boolean_ | **true** |
| `confirm-button-text` | 确认按钮文字 | _string_ | **确认** |
| `cancel-button-text` | 取消按钮文字 | _string_ | **取消** |
| `confirm-button-type` | 确认按钮类型 | _string_ | **-** |
| `cancel-button-type` | 取消按钮类型 | _string_ | **-** |
| `overlay` | 是否显示遮罩层 | _boolean_ | **true** |  
| `overlay-class` | 自定义遮罩层的 class | _string_ | **-** |
| `overlay-style` | 自定义遮罩层的 style | _string_ | **-** |
| `lock-scroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动 | _boolean_ | **true** |
| `close-on-click-overlay` | 是否点击遮罩层关闭弹出层 | _boolean_ | **true** | 
| `before-close` | 对话框关闭前回调，传入此参数会阻止对话框的自动关闭 | _(action: 用户动作, done: 关闭弹窗) => void_ | *-* | 

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 打开对话框时触发 | **-** |
| `opened` | 打开对话框动画结束时触发 | **-** |
| `close` | 关闭对话框时触发 | **-** |
| `closed` | 关闭对话框动画结束时触发 | **-** |
| `confirm` | 确认时触发 | **-** |
| `cancel` | 取消时触发 | **-** |
| `click-overlay` | 点击遮罩层时触发 | **-** |

### 函数选项

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `title` | 对话框标题 | _string_ | **提示** |
| `message` | 对话框内容 | _string_ | **-** |
| `messageAlign` | 对话框内容文字对齐方式，可选值 `center` `left` `right` | _string_ | **left** |
| `confirmButton` | 是否显示确认按钮 | _boolean_ | **true** |
| `cancelButton` | 是否显示取消按钮 | _boolean_ | **true** |
| `confirmButtonText` | 确认按钮文字 | _string_ | **确认** |
| `cancelButtonText` | 取消按钮文字 | _string_ | **取消** |
| `confirmButtonType` | 确认按钮类型 | _string_ | **-** |
| `cancelButtonType` | 取消按钮类型 | _string_ | **-** |
| `overlay` | 是否显示遮罩层 | _boolean_ | **true** |  
| `overlayClass` | 自定义遮罩层的class | _string_ | **-** |
| `overlayStyle` | 自定义遮罩层的style | _string_ | **-** |
| `lockScroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动 | _boolean_ | **true** |
| `closeOnClickOverlay` | 是否点击遮罩层关闭弹出层 | _boolean_ | **true** |
| `onOpen` | 对话框开启回调 | _() => void_ | **-** |
| `onOpened` | 对话框开启动画结束回调 | _() => void_ | **-** |
| `onBeforeClose` | 对话框关闭前回调，会阻止关闭 | _(action: 用户动作, done: 关闭弹窗) => void_ | **-** |
| `onClose` | 对话框关闭回调 | _() => void_ | **-** |
| `onClosed` | 对话框关闭动画结束回调 | _() => void_ | **-** |
| `onConfirm` | 确认回调 | _() => void_ | **-** |
| `onCancel` | 取消回调 | _() => void_ | **-** |
| `onClickOverlay` | 遮罩层点击回调 | _() => void_ | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 对话框正文内容 | `-` |
| `title` | 对话框标题 | `-` |
| `footer` | 对话框尾部 | `-` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@dialog-title-wrapper-padding` | `16px 20px` |
| `@dialog-content-border-radius` | `6px` |
| `@dialog-title-text-color` | `#333` |
| `@dialog-message-padding` | `16px 20px` |
| `@dialog-footer-padding` | `16px` |
| `@dialog-message-font-size` | `15px` |
| `@dialog-message-text-color` | `#555` |
| `dialog-border-color` | `#ddd` |