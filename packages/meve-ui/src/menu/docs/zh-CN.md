# 菜单 Menu

### 介绍

折叠菜单

### 配置菜单

通过`options`生成菜单结构，`children`是子级配置，通过`expanedNames.sync`绑定展开的菜单名，通过`selectedNames.sync`绑定选中的菜单名

```vue
import Options from '../example/Options.vue'
```

```html
<template>
  <m-menu
    :options="options"
    :expanded-names.sync="expandedNames"
    :selected-names.sync="selectedNames"
  />
</template>

<script>
export default {
  data: () => ({
    expandedNames: ['1'],
    selectedNames: ['1-1'],
    options: [
      {
        name: '1',
        label: 'Meve: 1',
        children: [
          {
            name: '1-1',
            label: 'Meve: 1-1',
          },
          {
            name: '1-2',
            label: 'Meve: 1-2',
          },
        ]
      },
      {
        name: '2',
        label: 'Meve: 2',
        children: [
          {
            name: '2-1',
            label: 'Meve: 2-1',
          },
          {
            name: '2-2',
            label: 'Meve: 2-2',
          },
        ]
      },
      {
        name: '3',
        label: 'Meve: 3',
      },
    ],
  })
}
</script>
```

### 多选

配置`multiple`开启多选

```vue
import Multiple from '../example/Multiple.vue'
```

```html
<template>
  <m-menu
    multiple
    :options="options"
    :expanded-names.sync="expandedNames"
    :selected-names.sync="selectedNames"
  />
</template>

<script>
export default {
  data: () => ({
    expandedNames: [],
    selectedNames: [],
    options: [
      {
        name: '1',
        label: 'Meve: 1',
        children: [
          {
            name: '1-1',
            label: 'Meve: 1-1',
          },
          {
            name: '1-2',
            label: 'Meve: 1-2',
          },
        ]
      },
      {
        name: '2',
        label: 'Meve: 2',
        children: [
          {
            name: '2-1',
            label: 'Meve: 2-1',
          },
          {
            name: '2-2',
            label: 'Meve: 2-2',
          },
        ]
      },
      {
        name: '3',
        label: 'Meve: 3',
      },
    ],
  })
}
</script>
```

### 禁用菜单项

通过`disabled`可以禁用某一个菜单项

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<template>
  <m-menu
    :options="options"
    :expanded-names.sync="expandedNames"
    :selected-names.sync="selectedNames"
  />
</template>

<script>
export default {
  data: () => ({
    expandedNames: [],
    selectedNames: [],
    options: [
      {
        name: '1',
        label: 'Meve: 1',
        children: [
          {
            name: '1-1',
            label: 'Meve: 1-1',
          },
          {
            name: '1-2',
            label: 'Meve: 1-2',
          },
        ]
      },
      {
        name: '2',
        label: 'Meve: 2',
        children: [
          {
            name: '2-1',
            label: 'Meve: 2-1',
          },
          {
            name: '2-2',
            label: 'Meve: 2-2',
          },
        ]
      },
      {
        name: '3',
        label: 'Meve: 3',
        disabled: true
      },
    ],
  })
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
  <m-menu
    :options="options"
    :expanded-names.sync="expandedNames"
    :selected-names.sync="selectedNames"
  />
</template>

<script>
import { Icon } from '@meve/ui'

export default {
  data: () => ({
    expandedNames: [],
    selectedNames: [],
    options: [
      {
        name: '1',
        label: 'Meve: 1',
        icon: 'information',
        children: [
          {
            name: '1-1',
            label: 'Meve: 1-1',
          },
          {
            name: '1-2',
            label: 'Meve: 1-2',
          },
        ]
      },
      {
        name: '2',
        label: 'Meve: 2',
        icon: 'warning',
        children: [
          {
            name: '2-1',
            label: 'Meve: 2-1',
          },
          {
            name: '2-2',
            label: 'Meve: 2-2',
          },
        ]
      },
      {
        name: '3',
        label: 'Meve: 3',
        icon: h => h(Icon, { props: { name: 'checkbox-marked-circle' }, style: { marginRight: '10px' } })
      },
    ],
  })
}
</script>
```

### 手风琴模式

像是手风琴一样，同级菜单只展开一个

```vue
import Accordion from '../example/Accordion.vue'
```

```html
<template>
  <m-menu
    accordion
    :options="options"
    :expanded-names.sync="expandedNames"
    :selected-names.sync="selectedNames"
  />
</template>

<script>
export default {
  data: () => ({
    expandedNames: [],
    selectedNames: [],
    options: [
      {
        name: '1',
        label: 'Meve: 1',
        children: [
          {
            name: '1-1',
            label: 'Meve: 1-1',
          },
          {
            name: '1-2',
            label: 'Meve: 1-2',
          },
        ]
      },
      {
        name: '2',
        label: 'Meve: 2',
        children: [
          {
            name: '2-1',
            label: 'Meve: 2-1',
          },
          {
            name: '2-2',
            label: 'Meve: 2-2',
          },
        ]
      },
      {
        name: '3',
        label: 'Meve: 3',
      },
    ],
  })
}
</script>
```

### 层级缩进

通过`indent`设置缩进距离，默认从第三级开始进行缩进

```vue
import Indent from '../example/Indent.vue'
```

```html
<template>
  <m-space>
    <m-menu
      class="menu"
      :options="options"
      :expanded-names.sync="expandedNames"
      :selected-names.sync="selectedNames"
    />

    <m-menu
      class="menu"
      :indent="54"
      :options="options"
      :expanded-names.sync="expandedNames"
      :selected-names.sync="selectedNames"
    />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    expandedNames: [],
    selectedNames: [],
    options: [
      {
        name: '1',
        label: 'Meve: 1',
        children: [
          {
            name: '1-1',
            label: 'Meve: 1-1',
            children: [
              {
                name: '1-1-1',
                label: 'Meve: 1-1-1',
                children: [
                  {
                    name: '1-1-1-1',
                    label: 'Meve: 1-1-1-1',
                  },
                ]
              },
            ]
          }
        ]
      }
    ],
  })
}
</script>

<style>
.menu {
  width: 256px;
}
</style>
```

### 声明式组件生成菜单

通过菜单插槽、`MenuItem`、`MenuItemGroup`声明式生成菜单结构

```vue
import Slots from '../example/Slots.vue'
```

```html
<template>
  <m-menu
    :expanded-names.sync="expandedNames"
    :selected-names.sync="selectedNames"
  >
    <m-menu-item-group name="1" label="Meve: 1">
      <m-menu-item name="1-1" label="Meve: 1-1" />
    </m-menu-item-group>
    <m-menu-item-group name="2" label="Meve: 2">
      <m-menu-item name="2-1" label="Meve: 2-1"/>
    </m-menu-item-group>
    <m-menu-item name="3-1" label="Meve: 3"/>
  </m-menu>
</template>

<script>
export default {
  data: () => ({
    expandedNames: [],
    selectedNames: [],
  })
}
</script>
```

### 声明式组件插槽

通过插槽可以自定义`icon`、`label`

```vue
import ComponentSlots from '../example/ComponentSlots.vue'
```

```html
<template>
  <m-menu
    :expanded-names.sync="expandedNames"
    :selected-names.sync="selectedNames"
  >
    <m-menu-item-group name="1">
      <m-menu-item name="1-1">
        <template #label>Meve: 1-1</template>
      </m-menu-item>

      <template #label>Meve: 1</template>
      <template #icon><m-icon class="icon" name="information"/></template>
    </m-menu-item-group>
    <m-menu-item-group name="2">
      <m-menu-item name="2-1">
        <template #label>Meve: 2-1</template>
      </m-menu-item>

      <template #label>Meve: 2</template>
      <template #icon><m-icon class="icon" name="warning"/></template>
    </m-menu-item-group>
    <m-menu-item name="3-1" disabled>
      <template #label>Meve: 3</template>
      <template #icon><m-icon class="icon" name="checkbox-marked-circle"/></template>
    </m-menu-item>
  </m-menu>
</template>

<script>
export default {
  data: () => ({
    expandedNames: [],
    selectedNames: [],
  })
}
</script>

<style>
.icon {
  margin-right: 10px;
}
</style>
```

## API

### 属性

#### Menu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `options` | 菜单配置项 | _MenuOption[]_ | **[]** |
| `expanded-names.sync` | 展开的菜单组名数组 | _Array_ | **[]** |
| `selected-names.sync` | 选中的菜单项名数组 | _Array_ | **[]** |
| `name-field` | 自定义菜单项唯一标识属性名 | _string_ | **name** |
| `label-field` | 自定义菜单项文本属性名 | _string_ | **label** |
| `accordion` | 是否开启手风琴模式 | _boolean_ | **false** |
| `indent` | 层级缩进距离 | _string \| number_ | **24** |
| `multiple` | 是否开启多选模式 | _boolean_ | **false** |

#### MenuItemGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 菜单组名，唯一标识 | _string \| number_ | **-** |
| `label` | 菜单组文本 | _string \| number \| Function_ | **-** |
| `icon` | 菜单组图标 | _string \| IconProps \| Function_ | **-** |
| `disabled` | 是否禁用菜单组 | _boolean_ | **false** |

#### MenuItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 菜单项名，唯一标识 | _string \| number_ | **-** |
| `label` | 菜单项文本 | _string \| number \| Function_ | **-** |
| `icon` | 菜单项图标 | _string \| IconProps \| Function_ | **-** |
| `disabled` | 是否禁用菜单项 | _boolean_ | **false** |

### MenuOption

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `name` | 菜单唯一标识 | _string \| number_ | **-** |
| `label` | 菜单文本内容, 支持渲染函数 | _string \| number \| Function_ | **-** |
| `icon` | 菜单图标名, 支持渲染函数 | _string \| number \| Function_ | **-** |
| `disabled` | 禁用菜单 | _boolean_ | **false** |
| `children` | 子菜单 | _MenuOption[]_ | **-** |

### 插槽

#### Menu Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 菜单内容 | **-** |

#### MenuItemGroup Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `label` | 菜单组文本 | **-** |
| `icon` | 菜单组图标 | **-** |

#### MenuItem Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `label` | 菜单文本 | **-** |
| `icon` | 菜单图标 | **-** |

### 样式变量

#### Menu Variables

| 变量名 | 默认值 |
| --- | --- |
| `@menu-background` | `#fff` |

#### MenuItemGroup Variables

| 变量名 | 默认值 |
| --- | --- |
| `@menu-item-group-padding` | `12px 20px` |
| `@menu-item-group-margin` | `6px 0 0 0` |
| `@menu-item-group-border-radius` | `4px` |
| `@menu-item-group-text-disabled-color` | `#bbb` |
| `@menu-item-group-text-color` | `#777` |
| `@menu-item-group-text-expanded-color` | `#000` |
| `@menu-item-group-font-size` | `14px` |
| `@menu-item-group-arrow-size` | `20px` |
| `@menu-item-group-icon-margin` | `0 10px 0 0` |
| `@menu-item-group-cubic-bezier` | `@cubic-bezier` |

#### MenuItem Variables

| 变量名 | 默认值 |
| --- | --- |
| `@menu-item-padding` | `12px 20px` |
| `@menu-item-margin` | `6px 0 0 0` |
| `@menu-item-border-radius` | `4px` |
| `@menu-item-text-disabled-color` | `#bbb` |
| `@menu-item-text-color` | `#777` |
| `@menu-item-text-selected-color` | `#fff` |
| `@menu-item-font-size` | `14px` |
| `@menu-item-icon-margin` | `0 10px 0 0` |
| `@menu-item-cubic-bezier` | `@cubic-bezier` |
| `@menu-item-selected-background` | `@color-primary` |