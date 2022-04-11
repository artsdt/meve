# 样式定制

### 介绍

组件库通过 [css 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，每个组件都有对应的样式变量，
您可以通过 css 文件覆盖的方式直接替换根节点上的样式变量, 或者使用 StyleProvider 组件。

### 基本样式变量

以下是组件库一些基本的样式变量

```css
/* default fold */
:root {
  --font-size-xs: 12px;
  --font-size-sm: 12px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --color-default: #fff;
  --color-deep-default: #fff;
  --color-primary: #5e72e4;
  --color-deep-primary: #233dd2;
  --color-light-primary: rgba(93, 113, 227, 0.3);
  --color-info: #11cdef;
  --color-deep-info: #0b8fa7;
  --color-light-info: rgba(17, 206, 240, 0.3);
  --color-success: #2fcf8a;
  --color-deep-success: #1f905f;
  --color-light-success: rgba(48, 207, 138, 0.3);
  --color-warning: #fb6340;
  --color-deep-warning: #af452c;
  --color-light-warning: rgba(250, 97, 62, 0.3);
  --color-error: #f5365c;
  --color-deep-error: #ab2540;
  --color-light-error: rgba(245, 54, 92, 0.3);
  --color-disabled: #e0e0e0;
  --color-text-disabled: #aaa;
  --cubic-bezier: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 运行时修改样式

可能您有在程序运行时替换样式的需求，比如一键换肤之类的，组件库提供了 StyleProvider 组件来辅助管理样式，
组件提供了 `组件式调用` 和 `函数式调用` 和两种调用方式。

### 组件式调用

组件式调用可以有范围性的定制组件样式，避免了全局污染，需要注意是有些使用 `teleport` 传送到  `StyleProvider` 外的元素将不会生效。

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-style-provider :style-vars="styleVars">
    <m-button type="primary" @click="toggleTheme">
      切换样式变量
    </m-button>
  </m-style-provider>
</template>

<script>
export default {
  data: () => ({
    styleVars: null
  }),
  methods: {
    toggleTheme() {
      this.styleVars = this.styleVars
        ? null
        : { 
          '--button-primary-color': 'var(--color-success)',
          '--button-primary-hover-color': 'var(--color-deep-success)'
        }
    }
  }
}
</script>
```

### 函数式调用

函数式的调用是直接更新 `:root` 上的变量，适合需要全局更新样式的情况。

```vue
import Functional from '../example/Functional.vue'
```

```html
<template>
  <m-button type="primary" @click="toggleRootTheme">切换根节点样式变量</m-button>
</template>

<script>
import { StyleProvider } from '@meve/ui'

export default {
  data: () => ({
    rootStyleVars: null
  }),
  methods: {
    toggleRootTheme() {
      this.rootStyleVars = this.rootStyleVars
        ? null
        : {
          '--color-primary': '#F06292',
          '--color-deep-primary': '#EC407A',
        }
      StyleProvider(this.rootStyleVars)
    }
  }
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `style-vars` | css 变量 | _Record<string, string>_ | `{}` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 组件内容 | `-` |