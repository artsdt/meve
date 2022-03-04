# Icon 图标

### 介绍

基于字体的图标库, 可通过组件内置的命名空间进行扩展

### 图标尺寸

支持自定义图标的尺寸, 支持长度单位

```vue
import Size from '../example/Size.vue'
```

```html
<m-icon name="checkbox-marked-circle" />
<m-icon name="checkbox-marked-circle" :size="26"/>
```

### 图标颜色

支持修改图标颜色

```vue
import Color from '../example/Color.vue'
```

```html
<m-icon name="checkbox-marked-circle" color="#5e72e4" />
<m-icon name="checkbox-marked-circle" color="#5e72e4" :size="26"/>
```

### 点击事件

图标可以绑定点击事件

```vue
import Click from '../example/Click.vue'
```

```html
<template>
  <div>
    <m-icon
      name="checkbox-marked-circle"
      color="#5e72e4"
      @click="handleClick"
    />
    <m-icon
      name="checkbox-marked-circle"
      color="#5e72e4"
      :size="26"
      @click="handleClick"
    />
  </div>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  methods: {
    handleClick() {
      Message.success('Click ok')
    }
  }
}  
</script>
```

### 自定义图标库

首先您需要设置您自己的字体，并引入到您的项目。
这里假设扩展一个名为 `my-icons` 的字体。

```css
/* 设置字体 */
@font-face {
  font-family: "my-icons";
  src: url("https://xxx.my-icons.eot");
  src: url("https://xxx.my-icons.eot") format("embedded-opentype"), 
    url("https://xxx.my-icons.woff2") format("woff2"), 
    url("https://xxx.my-icons.woff") format("woff"), 
    url("https://xxx.my-icons.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* 字体样式 */
.my-icon--set,
.my-icon--set::before {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "my-icons";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

/* 字体名称映射码点 */
.my-icon-hot::before {
  content: "\F000";
}
```

### 使用自定义图标库

经过以上的定义，`my-icon` 就是字体的 `命名空间 (namespace)`，您可以如下方式使用

```html
<m-icon namespace="my-icon" name="hot" />
```

### 内置字体图标列表

点击可复制代码

```vue
import Icons from '../example/Icons.vue'
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `name` | 图标名称 | _string_ | `-` |
| `size` | 尺寸 | _string \| number_ | `-` |
| `color` | 图标颜色 | _string_ | `-` |  
| `namespace` | 图标的命名空间 |  _string_ | `m-icon` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图标时触发 | `event: Event` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@icon-size` | `20px` |

