# Breadcrumb 面包屑

### 介绍

一级一级的展示一些信息

### 分隔符

通过`separator`设置分隔符

```vue
import Separator from '../example/Separator.vue'
```

```html
<m-breadcrumb>
  <m-breadcrumb-item>一级</m-breadcrumb-item>
  <m-breadcrumb-item>二级</m-breadcrumb-item>
  <m-breadcrumb-item>三级</m-breadcrumb-item>
</m-breadcrumb>

<m-breadcrumb separator="\">
  <m-breadcrumb-item>一级</m-breadcrumb-item>
  <m-breadcrumb-item>二级</m-breadcrumb-item>
  <m-breadcrumb-item>三级</m-breadcrumb-item>
</m-breadcrumb>
```

### 每一级分隔符

每一级的分隔符可以单独设置

```vue
import ItemSeparator from '../example/ItemSeparator.vue'
```

```html
<m-breadcrumb>
  <m-breadcrumb-item separator="\">一级</m-breadcrumb-item>
  <m-breadcrumb-item separator="~">二级</m-breadcrumb-item>
  <m-breadcrumb-item>三级</m-breadcrumb-item>
</m-breadcrumb>
```

### 分隔符插槽

分隔符也支持插槽，可以深度定制

```vue
import SeparatorSlot from '../example/SeparatorSlot.vue'
```

```html
<template>
  <m-breadcrumb>
    <m-breadcrumb-item>
      一级
      <template #separator>
        <m-icon class="separator" name="arrow-right"/>
      </template>
    </m-breadcrumb-item>
    <m-breadcrumb-item>
      二级
      <template #separator>
        <m-icon class="separator" name="arrow-right"/>
      </template>
    </m-breadcrumb-item>
    <m-breadcrumb-item>三级</m-breadcrumb-item>
  </m-breadcrumb>
</template>

<style>
.separator {
  font-size: 16px;
  margin: 0 10px;
}
</style>
```

### 下拉框

配合下拉框使用

```vue
import Dropdown from '../example/Dropdown.vue'
```

```html
<template>
  <m-breadcrumb>
    <m-breadcrumb-item>
      <m-dropdown :options="options">首页</m-dropdown>
    </m-breadcrumb-item>
    <m-breadcrumb-item>
      <m-dropdown :options="options">用户</m-dropdown>
    </m-breadcrumb-item>
    <m-breadcrumb-item>
      <m-dropdown>用户详情</m-dropdown>
    </m-breadcrumb-item>
  </m-breadcrumb>
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

## API

### 属性

#### Breadcrumb Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `separator` | 分隔符 | _string_ | **/** |

#### BreadcrumbItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `separator` | 分隔符 | _string_ | **-** |


### 插槽

#### Breadcrumb Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 面包屑内容 | `-` |

#### BreadcrumbItem Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 面包屑每一级的内容 | `-` |
| `separator` | 面包屑每一级的分隔符内容 | `-` |

### 样式变量

#### Breadcrumb Variables

| 变量名 | 默认值 |
| --- | --- |
| `--breadcrumb-item-active-color` | `var(--color-primary)` |
| `--breadcrumb-item-active-hover-color` | `#233dd2` |
| `--breadcrumb-item-text-color` | `#888` |
| `--breadcrumb-item-separator-margin` | `0 6px` |
| `--breadcrumb-item-separator-font-size` | `14px` |


