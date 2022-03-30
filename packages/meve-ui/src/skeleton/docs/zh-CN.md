# Skeleton 骨架屏

### 介绍

数据完成加载之前，占个位置

### 切换骨架屏状态

通过`loading`控制骨架屏的显示和隐藏，默认插槽是加载成功后显示的内容

```vue
import Loading from '../example/Loading.vue'
```

```html
<template>
  <div class="example">
    <m-button type="primary" @click="loading = !loading">切换状态</m-button>

    <m-skeleton :loading="loading">
      <m-button class="button" type="error">Loaded</m-button>
    </m-skeleton>
  </div>s
</template>

<script>
export default {
  data: () => ({
    loading: true
  })
}
</script>

<style>
.button {
  margin-top: 24px;
}
</style>
```

### 自定义行数

通过`rows`设置渲染的行数

```vue
import Rows from '../example/Rows.vue'
```

```html
<m-skeleton :rows="6" loading />
```

### 自定义行宽

通过`rows-width`设置每一行的宽度

```vue
import RowsWidth from '../example/RowsWidth.vue'
```

```html
<m-skeleton :rows-width="['260px', '200px', '140px']" loading />
```

### 显示标题

通过`title`控制标题的显示

```vue
import TitleComponent from '../example/Title.vue'
```

```html
<m-skeleton title loading />
```

### 显示头像

通过`avatar`控制头像的显示

```vue
import Avatar from '../example/Avatar.vue'
```

```html
<m-skeleton title avatar loading />
```

### 显示卡片

通过`card`控制卡片的显示

```vue
import Card from '../example/Card.vue'
```

```html
<m-skeleton title avatar card loading />
```

### 全屏骨架

通过`fullscreen`设置为全屏幕的骨架屏

```vue
import Skeleton from '../example/Fullscreen.vue'
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 加载状态，设置为 `true` 开启骨架屏 | _boolean_ | **true** |
| `title` | 是否显示标题 | _boolean_ | **false** |
| `card` | 是否显示卡片 | _boolean_ | **false** |
| `avatar` | 是否显示头像 | _boolean_ | **false** |
| `fullscreen` | 是否开启全屏模式 | _boolean_ | **false** |
| `fullscreen-z-index` | 全屏模式的层级 | _string \| number_ | **100** |
| `title-width` | 标题宽度 | _string \| number_ | **-** |
| `card-height` | 卡片高度 | _string \| number_ | **-** |
| `avatar-size` | 头像尺寸 | _string \| number_ | **-** |
| `rows` | 段落行数 | _string \| number_ | **3** |
| `rows-width` | 段落每一行的宽度 | _number[] \| string[]_ | **[]** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 加载成功后显示的内容 | `-` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--skeleton-content-padding` | `16px` |
| `--skeleton-animation-background` | `linear-gradient(90deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 100%, 0.3),hsla(0, 0%, 100%, 0))` |
| `--skeleton-avatar-size` | `40px` |
| `--skeleton-avatar-border-radius` | `50%` |
| `--skeleton-avatar-margin-right` | `16px` |
| `--skeleton-avatar-background-color` | `rgba(0, 0, 0, 0.12)` |
| `--skeleton-title-width` | `50%` |
| `--skeleton-title-border-radius` | `0px` |
| `--skeleton-title-background-color` | `rgba(0, 0, 0, 0.12)` |
| `--skeleton-row-height` | `12px` |
| `--skeleton-row-border-radius` | `0px` |
| `--skeleton-row-margin-top` | `12px` |
| `--skeleton-card-height` | `160px` |
| `--skeleton-card-border-radius` | `0px` |
| `--skeleton-card-margin-bottom` | `16px` |
| `--skeleton-card-background-color` | `rgba(0, 0, 0, 0.12)` |

