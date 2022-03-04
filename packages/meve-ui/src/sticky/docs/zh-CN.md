# Sticky 粘性布局

### 介绍

支持`position: sticky`和`scroll`事件两种实现方式，当组件在滚动容器范围内时，会按照正常的布局排列，当组件滚动出滚动容器范围时，会固定在滚动容器顶部

### 局部滚动容器

组件会找到最近的上级滚动容器作为计算区域，可以通过`offsetTop`设置距离顶部的距离

```vue
import ScopeScroller from '../example/ScopeScroller.vue'
```

```html
<template>
  <div class="scroller">
    <div class="item">Item: 1</div>
    <div class="item">Item: 2</div>

    <m-sticky>
      <m-button type="primary">黏在局部滚动容器的顶部</m-button>
    </m-sticky>

    <div class="item">Item: 3</div>
    <div class="item">Item: 4</div>
    <div class="item">Item: 5</div>
    <div class="item">Item: 6</div>
    <div class="item">Item: 7</div>
    <div class="item">Item: 8</div>
    <div class="item">Item: 9</div>
    <div class="item">Item: 10</div>
    <div class="item">Item: 11</div>
    <div class="item">Item: 12</div>
    <div class="item">Item: 13</div>
    <div class="item">Item: 14</div>
    <div class="item">Item: 15</div>
  </div>
</template>

<style>
.scroller {
  width: 100%;
  height: 300px;
  overflow: auto;
  background: #f0f1f5;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  margin: 20px 0;
}
</style>
```

### 基本使用

当没有找到滚动容器作为计算区域时，将会使用`window`作为滚动容器

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<m-sticky :offset-top="66">
  <m-button type="primary">黏在距离窗口顶部66像素的位置</m-button>
</m-sticky>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `offset-top` | 吸顶距离 | _string \| number_ | **0** |
| `z-index` | 吸顶时的层级 | _string \| number_ | **0** |
| `css-mode` | 开启原生`css sticky`模式 | _boolean_ | **false** |
| `disabled` | 禁用吸顶, 设置为`true`时, 元素会回到文档流中 | _boolean_ | **false** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `scroll` | 当滚动容器滚动时触发 | **距离顶部的像素值: offsetTop: number`，`是否吸顶: isFixed: boolean** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 粘性布局的内容 | **-** |