# Ripple 水波反馈

### 介绍

点击时产生一个水波

### 基本使用

点击下面方块儿试试...

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <div class="container" v-ripple></div>
</template>

<style>
.container {
  width: 100px;
  height: 100px;
  background: #f1f1f1;
}
</style>
```

### 修改颜色

水波颜色默认为`currentColor`, 但你可以手动修改颜色

```vue
import ModifyColor from '../example/ModifyColor.vue'
```

```html
<template>
  <div class="container" v-ripple="{ color: '#5e72e4' }"></div>
</template>

<style>
.container {
  width: 100px;
  height: 100px;
  background: #f1f1f1;
}
</style>
```

### 禁用

通过`disabled`可以禁用水波反馈效果

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<template>
  <div class="container" v-ripple="{ disabled: true }"></div>
</template>

<style>
.container {
  width: 100px;
  height: 100px;
  background: #f1f1f1;
}
</style>
```

## API

### 选项

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `color` | 水波纹的颜色 | _string_ | **currentColor** |
| `disabled` | 禁用状态 | _boolean_ | **false** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@ripple-cubic-bezier` | `cubic-bezier(0.68, 0.01, 0.62, 0.6)` |
