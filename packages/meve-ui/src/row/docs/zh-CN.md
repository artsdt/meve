# Layout 栅格布局

### 介绍

利用行和列进行布局，内置响应式栅格系统

### 基础布局

一行被划分为`24`份，通过`span`设置一列占的份数，默认是`24`

```vue
import Basic from '../example/Basic.vue'
```

```html
<template>
  <div class="example">
    <m-row>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
    </m-row>
    <m-row class="last">
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
    </m-row>
  </div>
</template>

<style>
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  color: #fff;
  background: #5e72e4;
  margin-bottom: 10px;
}

.last {
  margin-bottom: -10px;
}
</style>
```

### 水槽

通过`gutter`设置列与列之间的间距

```vue
import Gutter from '../example/Gutter.vue'
```

```html
<template>
  <div class="example">
    <m-row :gutter="10">
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
    </m-row>
    <m-row class="last" :gutter="10">
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
    </m-row>
  </div>
</template>

<style>
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  color: #fff;
  background: #5e72e4;
  margin-bottom: 10px;
}
  
.last {
  margin-bottom: -10px;
}
</style>
```

### 列偏移

通过`offset`设置列的偏移量

```vue
import Offset from '../example/Offset.vue'
```

```html
<template>
  <div class="example">
    <m-row :gutter="10">
      <m-col :span="6"><div class="col">span: 6</div></m-col>
      <m-col :offset="2" :span="8"><div class="col">offset: 2 span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
    </m-row>
    <m-row class="last" :gutter="10">
      <m-col :span="6"><div class="col">span: 6</div></m-col>
      <m-col :offset="2" :span="8"><div class="col">offset: 2 span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
    </m-row>
  </div>
</template>

<style>
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  color: #fff;
  background: #5e72e4;
  margin-bottom: 10px;
}

.last {
  margin-bottom: -10px;
}
</style>
```

### 响应式栅格

通过`xs`、`sm`、`md`、`lg`、`xl`控制每一列在不同屏幕宽度下占的份数，未设置的尺寸默认使用`span`的份数

```vue
import Responsive from '../example/Responsive.vue'
```

```html
<template>
  <div class="example">
    <m-row :gutter="10">
      <m-col :xs="24" :sm="12" :md="8" :lg="4" :xl="2">
        <div class="col">Responsive</div>
      </m-col>
      <m-col :xs="24" :sm="12" :md="8" :lg="4" :xl="2">
        <div class="col">Responsive</div>
      </m-col>
      <m-col :xs="24" :sm="12" :md="8" :lg="4" :xl="2">
        <div class="col">Responsive</div>
      </m-col>
    </m-row>

    <m-row class="last" :gutter="10">
      <m-col
        :xs="{ span: 22, offset: 2 }"
        :sm="{ span: 10, offset: 2 }"
        :md="{ span: 6, offset: 2 }"
        :lg="{ span: 3, offset: 1 }"
        :xl="{ span: 2 }"
      >
        <div class="col">Responsive</div>
      </m-col>
      <m-col
        :xs="{ span: 22, offset: 2 }"
        :sm="{ span: 10, offset: 2 }"
        :md="{ span: 6, offset: 2 }"
        :lg="{ span: 3, offset: 1 }"
        :xl="{ span: 2 }"
      >
        <div class="col">Responsive</div>
      </m-col>
      <m-col
        :xs="{ span: 22, offset: 2 }"
        :sm="{ span: 10, offset: 2 }"
        :md="{ span: 6, offset: 2 }"
        :lg="{ span: 3, offset: 1 }"
        :xl="{ span: 2 }"
      >
        <div class="col">Responsive</div>
      </m-col>
    </m-row>
  </div>
</template>

<style>
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  color: #fff;
  background: #5e72e4;
  margin-bottom: 10px;
}

.last {
  margin-bottom: -10px;
}
</style>
```

## API

### 属性

#### Row Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `gutter` | 列间距 | _string \| number_ | **0** |
| `justify` | 水平排列方式 可选值为 `start` `end` `center` `space-around` `space-between` | _string_ | **start** |
| `align` | 垂直排列方式 可选值为 `stretch` `center` `start` `end` `baseline`	 | _string_ | **-** |

#### Col Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `span` | 栅格列数 | _string \| number_ | **24** |
| `offset` | 偏移列数 | _string_ | **0** |
| `xs` | `<768px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |
| `sm` | `>=768px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |
| `md` | `>=992px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |
| `lg` | `>=1200px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |
| `xl` | `>=1920px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |

### 事件

#### Row Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击行触发 | **event: Event** |

#### Col Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击列触发 | **event: Event** |

### 插槽

#### Row Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 行内容 | **-** |

#### Col Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 列内容 | **-** |

### ColSizeDescriptor

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `span` | 栅格列数 | _string \| number_ | **24** |
| `offset` | 偏移列数 | _string_ | **0** |