# Loading 加载

### 介绍

加载组件，用来控制加载状态，提高一点儿用户体验

### 加载动画

通过`loading`控制是否显示动画

```vue
import Loading from '../example/Loading.vue'
```

```html
<m-loading loading />
```

### 加载动画颜色

通过`color`控制加载动画颜色

```vue
import Color from '../example/Color.vue'
```

```html
<m-loading loading color="#fb6340" />
```

### 加载动画尺寸

通过`size`控制加载动画尺寸

```vue
import Size from '../example/Size.vue'
```

```html
<m-loading loading :size="50" />
```

### 加载动画插槽

使用插槽可以给一个元素加上一个带加载动画带遮罩层，可以通过`description`携带提示信息

```vue
import DefaultSlot from '../example/Slot.vue'
```

```html
<template>
  <m-loading loading>
    <div class="container"></div>
  </m-loading>
</template>

<style>
.container {
  width: 100px;
  height: 100px;
  background: #f2f2f2;
}  
</style>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `loading` | 加载状态 | _boolean_ | **false** |
| `size` | 尺寸 | _string \| number_ | **-** |
| `color` | 颜色 | _boolean_ | **-** |
| `rotate` | 是否开启旋转动画 | _boolean_ | **true** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 加载遮罩包裹的元素内容 | **-** |