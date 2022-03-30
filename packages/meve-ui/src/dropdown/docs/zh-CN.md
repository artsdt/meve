# Dropdown 下拉框

### 介绍

下拉框，支持级联

### 配置项

传入一个配置列表，组件根据配置项进行渲染, 每个配置项必须带有一个`key`作为唯一标识

```vue
import Options from '../example/Options.vue'
```

```html
<template>
  <m-dropdown :options="options">
    <m-button type="primary">点我下拉</m-button>
  </m-dropdown>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
      },
      {
        key: 2,
        label: 'Meve: 2',
      }
    ],
  }),
}
</script>
```

### 尺寸

提供了一些常用尺寸

```vue
import Size from '../example/Size.vue'
```

```html
<template>
  <m-space>
    <m-dropdown :options="options" size="small">
      <m-button type="primary">小</m-button>
    </m-dropdown>

    <m-dropdown :options="options">
      <m-button type="primary">中</m-button>
    </m-dropdown>

    <m-dropdown :options="options" size="large">
      <m-button type="primary">大</m-button>
    </m-dropdown>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
      },
      {
        key: 2,
        label: 'Meve: 2',
      },
    ],
  })
}
</script>

```

### 禁用下拉

通过给组件传入`disabled`禁止下拉

```vue
import DropdownDisabled from '../example/DropdownDisabled.vue'
```

```html
<template>
  <m-dropdown :options="options" disabled>
    <m-button type="primary">点我不能下拉</m-button>
  </m-dropdown>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
      },
      {
        key: 2,
        label: 'Meve: 2',
      },
    ],
  }),
}
</script>
```

### 禁用某一项

配置项传入`disabled`可以禁用该项

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<template>
  <m-dropdown :options="options">
    <m-button type="primary">点我下拉</m-button>
  </m-dropdown>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
      },
      {
        key: 2,
        label: 'Meve: 2',
        disabled: true
      },
    ],
  }),
}
</script>
```

### 带图标

配置项传入`icon`可渲染一个图标，传入字符串默认为`icon`组件的`name`属性，也支持传入一个渲染函数自定义渲染

```vue
import Icon from '../example/Icon.vue'
```

```html
<template>
  <m-dropdown :options="options">
    <m-button type="primary">点我下拉</m-button>
  </m-dropdown>
</template>

<script>
import { Icon } from '@meve/ui'

export default {
  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
        icon: 'information'
      },
      {
        key: 2,
        label: 'Meve: 2',
        icon: h => h(Icon, { props: { name: 'information' }, style: { marginRight: '4px' } })
      },
    ],
  })
}
</script>
```

### 级联

通过`children`实现级联

```vue
import Children from '../example/Children.vue'
```

```html
<template>
  <m-dropdown :options="options">
    <m-button type="primary">点我下拉</m-button>
  </m-dropdown>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
      },
      {
        key: 2,
        label: 'Meve: 2',
        children: [
          {
            key: 3,
            label: 'Child: 3',
          },
          {
            key: 4,
            label: 'Child: 4',
          },
        ]
      },
    ],
  }),
}
</script>
```

### 监听事件

通过`--select`监听选择的配置项, 并且组件提供了下拉框显示隐藏的事件

```vue
import Events from '../example/Events.vue'
```

```html
<template>
  <m-dropdown
    :options="options"
    @select="handleSelect"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed"
  >
    <m-button type="primary">点我下拉</m-button>
  </m-dropdown>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
      },
      {
        key: 2,
        label: 'Meve: 2',
      },
    ],
  }),
  methods: {
    handleSelect(option) {
      Message(`Select: ${option.label}`)
    },
    handleOpen() {
      Message('Open')
    },
    handleOpened() {
      Message('Opened')
    },
    handleClose() {
      Message(`Close`)
    },
    handleClosed() {
      Message(`Closed`)
    },
  }
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `options` | 配置项数组 | _DropdownOption_ | **[]** |
| `size` | 尺寸大小，可选值为`small` `normal` `large` | _string_ | **normal** |
| `disabled` | 是否禁用下拉 | _string_ | **false** |
| `label-field` | 自定义显示文本的属性名 | _string_ | **label** |
| `key-field` | 自定义唯一标识的属性名 | _string_ | **key** |
| `children-field` | 自定义子列表的属性名 | _string_ | **children** |
| `icon-field` | 自定义图标的属性名 | _string_ | **icon** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 下拉框开启时触发 | **-** |
| `close` | 下拉框关闭时触发 | **-** |
| `select` | 下拉框选择时触发 | **DropdownOption** |


### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 下拉框触发器内容 | **-** |

### DropdownOption

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `key` | 唯一标识 | _any_ | **-** |
| `label` | 文本内容, 支持渲染函数 | _string \| Function_ | **-** |
| `icon` | 图标名, 支持渲染函数 | _string \| Function_ | **-** |
| `children` | 子列表，实现级联 | _DropdownOption[]_ | **[]** |
| `disabled` | 禁用选项 | _boolean_ | **false** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--dropdown-box-shadow` | `0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1)` |
| `--dropdown-padding` | `6px 0` |
| `--dropdown-border-radius` | `6px` |
| `--dropdown-background` | `#fff` |
| `--dropdown-cell-normal-padding` | `6px 16px` |
| `--dropdown-cell-small-padding` | `2px 10px` |
| `--dropdown-cell-large-padding` | `10px 24px` |
| `--dropdown-cell-font-size` | `14px` |
| `--dropdown-cell-hover-background` | `rgba(0, 0, 0, 0.04)` |
| `--dropdown-cell-arrow-margin` | `0 -6px 0 14px` |
| `--dropdown-cell-arrow-size` | `12px` |
| `--dropdown-cell-arrow-color` | `#aaa` |
| `--dropdown-cell-icon-size` | `20px` |
| `--dropdown-cell-icon-margin` | `0 4px 0 0` |
| `--dropdown-cell-disabled-text-color` | `var(--color-text-disabled)` |
