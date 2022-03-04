# Tabs 标签页

### 介绍

标签页和可滑动切换的标签页视图

### 绑定标签页

通过`v-model`绑定激活的标签页的值，默认匹配标签页的`index`位置索引

```vue
import Bind from '../example/Bind.vue'
```

```html
<template>
  <m-tabs v-model="value">
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
  </m-tabs>
</template>

<script>
export default {
  data: () => ({
    value: 0,
  }),
}
</script>
```

### 具名标签页

可以通过给选项卡设置`name`来命名选项卡，这时`v-model`会优先匹配`name`

```vue
import Name from '../example/Name.vue'
```

```html
<template>
  <m-tabs v-model="value">
    <m-tab name="option 1">Option</m-tab>
    <m-tab name="option 2">Option</m-tab>
    <m-tab name="option 3">Option</m-tab>
    <m-tab name="option 4">Option</m-tab>
    <m-tab name="option 5">Option</m-tab>
  </m-tabs>
</template>

<script>
export default {
  data: () => ({
    value: 'option 1',
  }),
}
</script>
```

### 禁用标签页

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<template>
  <m-tabs v-model="value">
    <m-tab disabled>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
  </m-tabs>
</template>

<script>
export default {
  data: () => ({
    value: 1,
  }),
}
</script>
```

### 标签页垂直布局

通过`item-direction`使标签页转换为垂直布局

```vue
import ItemVertical from '../example/ItemVertical.vue'
```

```html
<template>
  <m-tabs item-direction="vertical" v-model="value">
    <m-tab>
      <m-icon name="information"/>
      <span>Option</span>
    </m-tab>
    <m-tab>
      <m-icon name="information"/>
      <span>Option</span>
    </m-tab>
    <m-tab>
      <m-icon name="information"/>
      <span>Option</span>
    </m-tab>
    <m-tab>
      <m-icon name="information"/>
      <span>Option</span>
    </m-tab>
    <m-tab>
      <m-icon name="information"/>
      <span>Option</span>
    </m-tab>
  </m-tabs>
</template>

<script>
export default {
  data: () => ({
    value: 0,
  }),
}
</script>
```

### 自定义样式

组件提供了一些样式相关的属性可以进行配置

```vue
import CustomStyle from '../example/CustomStyle.vue'
```

### 容器垂直布局

标签页的外层容器也可以垂直布局, 你需要给它一个高度

```vue
import LayoutVertical from '../example/LayoutVertical.vue'
```

```html
<template>
  <m-tabs class="tabs" layout-direction="vertical" v-model="value">
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
  </m-tabs>
</template>

<script>
export default {
  data: () => ({
    value: 0,
  }),
}
</script>

<style>
.tabs {
  width: 210px;
  height: 270px;
}
</style>
```

### 标签页和视图联动

```vue
import Relation from '../example/Relation.vue'
```

```html
<template>
  <div class="example">
    <m-tabs v-model="value">
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
    </m-tabs>

    <m-tabs-items class="tabs-items" v-model="value">
      <m-tab-item>
        <m-card>
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
        </m-card>
      </m-tab-item>
      <m-tab-item>
        <m-card>
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
        </m-card>
      </m-tab-item>
      <m-tab-item>
        <m-card>
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
        </m-card>
      </m-tab-item>
      <m-tab-item>
        <m-card>
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
        </m-card>
      </m-tab-item>
      <m-tab-item>
        <m-card>
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
          To a certain extent, talking about what “the metaverse” means is a bit
          like having a discussion about what “the internet” means in the 1970s.
        </m-card>
      </m-tab-item>
    </m-tabs-items>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 0,
  }),
}
</script>

<style>
.tabs-items {
  margin: 10px;
  color: #555;
}
</style>
```

### 粘性布局

组件内置了粘性组件，通过`sticky`开启

```vue
import Sticky from '../example/Sticky.vue'
```

```html
<template>
  <m-tabs sticky :offset-top="66" v-model="value">
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
  </m-tabs>
</template>

<script>
export default {
  data: () => ({
    value: 0,
  }),
}
</script>
```

## API

### 属性

#### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 激活的标签页绑定的值, 优先匹配 `name`，其次是 `index` | _string \| number_ | **0** |
| `layout-direction` | 标签页容器的布局方向， 可选值为 `horizontal` `vertical` | _string_ | **horizontal** |
| `item-direction` | 标签页的布局方向，可选值为 `horizontal` `vertical` | _string_ | **horizontal** |
| `active-color` | 标签页卡激活的文字颜色 | _string_ | **-** |
| `active-background` | 标签页卡激活的背景 | _string_ | **-** |
| `inactive-color` | 标签页未激活的文字颜色 | _string_ | **-** |
| `inactive-background` | 标签页未激活的背景 | _string_ | **-** |
| `disabled-color` | 标签页禁用时的文字颜色 | _string_ | **-** |
| `disabled-background` | 标签页禁用时的背景颜色 | _string_ | **-** |
| `sticky` | 是否启用粘性布局 | _boolean_ | **false** |
| `offset-top` | 吸顶距离 | _string \| number_ | **0** |

#### Tab Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 标签页的名字 | _string \| number_ | **index** |
| `disabled` | 是否禁用标签页 | _boolean_ | **false** |

#### TabsItems Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 激活的视图绑定的值，优先匹配 `name`，其次是 `index` | _string \| number_ | **0** |
| `can-swipe` | 是否可以滑动切换 | _boolean_ | **true** |
| `loop` | 是否可以循环切换 | _boolean_ | **false** |

#### TabItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 视图的名字 | _string \| number_ | **index** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `resize` | 产生位置大小变化时可以调用此方法进行重绘 | _-_ | **-** |

### 事件

#### Tabs Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击标签页时触发, 在选项卡 `disabled` 状态为 `true` 时不触发 | `value: 标签页标识` |
| `change` | 切换标签页时触发 | `value: 标签页标识` |

#### Tab Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击标签页时触发, 在 `disabled` 状态为 `true` 时不触发 | `value: 标签页标识， event: Event` |

### 插槽

#### Tabs Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 标签页组的内容 | `-` |

#### Tab Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 标签页内容 | `-` |

#### TabsItems Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 视图组的内容 | `-` |

#### TabItem Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 视图的内容 | `-` |

### 样式变量

#### Tabs Variables

| 变量名 | 默认值 |
| --- | --- |
| `@tabs-item-horizontal-height` | `58px` |
| `@tabs-item-vertical-height` | `74px` |
| `@tabs-padding` | `8px` |

#### Tab Variables

| 变量名 | 默认值 |
| --- | --- |
| `@tab-margin` | `6px` |
| `@tab-padding` | `12px` |
| `@tab-active-color` | `#fff` |
| `@tab-active-background` | `@color-primary` |
| `@tab-inactive-color` | `#333` |
| `@tab-inactive-background` | `#f0f1f5` |
| `@tab-border-radius` | `4px` |
| `@tab-disabled-color` | `@color-text-disabled` |
| `@tab-disabled-background` | `@color-disabled` |
| `@tab-font-size` | `14px` |