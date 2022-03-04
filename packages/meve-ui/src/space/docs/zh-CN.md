# Space 间隔

### 介绍

可以很方便的加间隔，基于`flexbox`, 可以很方便的调整布局

### 默认间隔

组件默认添加了水平和垂直的间距

```vue
import DefaultSpace from '../example/DefaultSpace.vue'
```

```html
<m-space>
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
</m-space>
```

### 排列方向

可以通过`direction`改变排列方向

```vue
import Direction from '../example/Direction.vue'
```

```html
<m-space direction="column">
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
</m-space>
```

### 修改间隔

可以通过`size`自定义间隔, `[垂直间距, 水平间距]`

```vue
import ModifySpace from '../example/ModifySpace.vue'
```

```html
<m-space :size="[20, 20]">
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
  ......
  ......
  ......
</m-space>
```

### 居中

```vue
import Center from '../example/Center.vue'
```

```html
<m-space justify="center">
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
</m-space>
```

### 靠右

```vue
import End from '../example/End.vue'
```

```html
<m-space justify="end">
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
</m-space>
```

### 两端对齐

```vue
import SpaceBetween from '../example/SpaceBetween.vue'
```

```html
<m-space justify="space-between">
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
</m-space>
```

### 环绕

```vue
import SpaceAround from '../example/SpaceAround.vue'
```

```html
<m-space justify="space-around">
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
  <m-button type="primary">按钮</m-button>
</m-space>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `justify` | 水平排列方式 可选值为 `start` `end` `center` `space-around` `space-between`| _string_ | **start** |
| `align` | 垂直排列方式 可选值为 `stretch` `center` `start` `end` `baseline` | _string_ | **-** |
| `size` | 间距，可选值为 `mini` `small` `normal` `large` 或 `[垂直间距, 水平间距]`，支持长度单位 | _string \| number \| [string \| number, string \| number]_  | **normal** |
| `wrap` | 是否超出换行 | _boolean_ | **true** |
| `direction` | 布局方向 可选值为 `row` `column` | _string_ | **row** |
| `inline` | 是否为行内元素 | _boolean_ | **false** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 间距组件内容 | **-** |