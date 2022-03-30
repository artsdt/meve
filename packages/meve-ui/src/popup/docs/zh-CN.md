# Popup 弹出层

### 介绍

弹出层，支持上下左右中五个方向的弹出

### 弹出方向

通过`position`来决定弹出的方向

```vue
import Position from '../example/Position.vue'
```

```html
<template>
  <div class="example">
    <m-space>
      <m-button type="primary" @click="center = !center">中间弹出</m-button>
      <m-button type="primary" @click="top = !top">上方弹出</m-button>
      <m-button type="primary" @click="right = !right">右侧弹出</m-button>
      <m-button type="primary" @click="bottom = !bottom">下方弹出</m-button>
      <m-button type="primary" @click="left = !left">左侧弹出</m-button>
    </m-space>

    <m-popup v-model="center">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup position="top" v-model="top">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup position="right" v-model="right">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup position="bottom" v-model="bottom">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup position="left" v-model="left">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>
  </div>
</template>

<script>
export default {
  data: () => ({
    top: false,
    right: false,
    bottom: false,
    left: false,
    center: false,
  })
}
</script>

<style>
.text {
  width: 300px;
  padding: 20px;
  color: #888;
}
</style>
```

### 自定义遮罩层

可以通过`overlayClass`和`overlayStyle`修改遮罩层的样式

```vue
import Overlay from '../example/Overlay.vue'
```

```html
<template>
  <div class="example">
    <m-space>
      <m-button type="primary" @click="overlayStyle = !overlayStyle">遮罩层样式</m-button>
      <m-button type="primary" @click="overlayClass = !overlayClass">遮罩层类名</m-button>
    </m-space>

    <m-popup
      :overlay-style="{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }"
      v-model="overlayStyle"
    >
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>

    <m-popup overlay-class="custom-overlay" v-model="overlayClass">
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>
  </div>
</template>

<script>
export default {
  data: () => ({
    overlayStyle: false,
    overlayClass: false,
  })
}
</script>

<style>
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.text {
  width: 300px;
  padding: 20px;
  color: #888;
}
</style>
```

### 事件监听

可以通过组件内置事件监听弹出层的开启关闭状态

```vue
import Events from '../example/Events.vue'
```

```html
<template>
  <div class="example">
    <m-button type="primary" @click="show = !show">开启遮罩层</m-button>

    <m-popup
      v-model="show"
      @open="showMessage('open')"
      @close="showMessage('close')"
      @opened="showMessage('opened')"
      @closed="showMessage('closed')"
    >
      <div class="text">
        元宇宙本质上是对现实世界的虚拟化、数字化过程，需要对内容生产、经济系统、用户体验以及实体世界内容等进行大量改造
      </div>
    </m-popup>
  </div>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  data: () => ({
    show: false,
  }),
  methods: {
    showMessage(message) {
      Message(message)
    }
  }
}
</script>

<style>
.text {
  width: 300px;
  padding: 20px;
  color: #888;
}
</style>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model` | 是否显示弹出层 | _boolean_ | **false** |
| `position` | 弹出位置，可选值为 `top` `bottom` `right` `left` `center` | _string_ | **center** |
| `overlay` | 是否显示遮罩层 | _boolean_ | **true** |  
| `overlay-class` | 自定义遮罩层的class | _string_ | **-** |
| `overlay-style` | 自定义遮罩层的style | _string_ | **-** |
| `lock-scroll` | 是否禁止滚动穿透，禁止时滚动弹出层不会引发body的滚动 | _boolean_ | **true** |
| `close-on-click-overlay` | 是否点击遮罩层关闭弹出层 | _boolean_ | **true** | 

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 打开弹出层时触发 | **-** |
| `opened` | 打开弹出层动画结束时触发 | **-** |
| `close` | 关闭弹出层时触发 | **-** |
| `closed` | 关闭弹出层动画结束时触发 | **-** |
| `click-overlay` | 点击遮罩层时触发 | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 弹出层内容 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--popup-overlay-background-color` | `rgba(0, 0, 0, 0.6)` |
| `--popup-content-background-color` | `#fff` |


