# Swipe 轮播

### 介绍

一个轮播图，支持水平轮播和垂直轮播

### 基本使用

水平轮播

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-swipe class="swipe">
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
  </m-swipe>
</template>

<style>
.swipe {
  width: 100%;
}

.swipe-item {
  width: 100%;
  height: 190px;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 禁止循环轮播

可以通过`loop`控制是否需要循环播放，默认情况下轮播是循环播放的

```vue
import Loop from '../example/Loop.vue'
```

```html
<template>
  <m-swipe class="swipe" :loop="false">
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
  </m-swipe>
</template>

<style>
.swipe {
  width: 100%;
}

.swipe-item {
  width: 100%;
  height: 190px;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 自动播放

可以通过设置`autoplay`使轮播自动播放，`autoplay`是播放的间隔时间，单位是`ms`

```vue
import Autoplay from '../example/Autoplay.vue'
```

```html
<template>
  <m-swipe class="swipe" :autoplay="2000">
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
  </m-swipe>
</template>

<style>
.swipe {
  width: 100%;
}

.swipe-item {
  width: 100%;
  height: 190px;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 垂直轮播

轮播也可以是垂直方向播放的, 需要设置一个高度

```vue
import Vertical from '../example/Vertical.vue'
```

```html
<template>
  <m-swipe class="swipe" vertical>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
  </m-swipe>
</template>

<style>
.swipe {
  width: 100%;
  height: 190px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 监听切换

通过`change`事件监听轮播切换

```vue
import Events from '../example/Events.vue'
```

```html
<template>
  <m-swipe class="swipe" @change="handleChange">
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
  </m-swipe>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  methods: {
    handleChange(index) {
      Message(index)
    }
  }
}
</script>

<style>
.swipe {
  width: 100%;
}

.swipe-item {
  width: 100%;
  height: 190px;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 自定义指示器

可以使用`indicator`插槽自定义指示器

```vue
import Indicator from '../example/Indicator.vue'
```

```html
<template>
  <m-swipe ref="swipe" class="swipe">
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>
    <m-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </m-swipe-item>

    <template #indicator="{ index, length }">
      <div class="indicators">
        <div class="indicator" v-for="l in length" :key="l" @click="$refs.swipe.to(l - 1)">
          {{ l }}
        </div>
      </div>
    </template>
  </m-swipe>
</template>

<style>
.swipe {
  width: 100%;
}

.swipe-item {
  width: 100%;
  height: 190px;
  object-fit: cover;
  pointer-events: none;
}

.indicators {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
}

.indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
}
</style>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `loop` | 是否开启循环轮播 | _boolean_ | **true** |
| `autoplay` | 自动播放间隔时间(ms) | _string \| number_ | **-** |
| `duration` | 切换过度时间 | _string \| number_ | **300** |
| `initial-index` | 初始化显示的索引 | _string \| number_ | **0** |
| `indicator` | 是否显示指示器 | _boolean_ | **true** |
| `indicator-color` | 指示器颜色 | _string_ | **-** |
| `vertical` | 是否开启垂直轮播 | _boolean_ | **false** |
| `touchable` | 是否可以拖动 | _boolean_ | **true** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `resize` | 产生位置大小变化时可以调用此方法进行重绘 | _-_ | **-** |
| `prev` | 上一页 | _-_ | **-** |
| `next` | 下一页 | _-_ | **-** |
| `to` | 跳转到指定下标 | _index: number_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 切换轮播时触发 | **轮播索引 index: number** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 轮播内容 | **-** |
| `indicator` | 指示器内容 | **轮播索引 index: number，轮播总数 length: number** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--swipe-indicator-color` | `#fff` |
| `--swipe-indicators-offset` | `14px` |
| `--swipe-indicator-offset` | `4px` |
| `--swipe-indicator-width` | `12px` |
| `--swipe-indicator-height` | `8px` |
| `--swipe-indicator-border-radius` | `2px` |