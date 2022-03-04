# Image 图片

### 介绍

点击图片可预览，内置懒加载功能

### 加载图片

通过`src`加载图片

```vue
import Src from '../example/Src.vue'
```

```html
<m-image width="100px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```

### 填充模式

通过`fit`设置填充模式

```vue
import Fit from '../example/Fit.vue'
```

```html
<m-image width="100px" height="100px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
<m-image width="100px" height="100px" fit="cover" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
<m-image width="100px" height="100px" fit="contain" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
<m-image width="100px" height="100px" fit="none" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
<m-image width="100px" height="100px" fit="scale-down" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```

### 圆角

通过`radius`设置圆角

```vue
import Radius from '../example/Radius.vue'
```

```html
<m-image
  width="100px"
  height="100px"
  fit="cover"
  :radius="10"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
/>

<m-image
  width="100px"
  height="100px"
  fit="cover"
  radius="50%"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
/>
```

### 开启水波

通过`ripple`开启水波

```vue
import Ripple from '../example/Ripple.vue'
```

### 开启懒加载

通过`lazy`开启懒加载，可以配置加载图片和错误图片

```vue
import Lazy from '../example/Lazy.vue'
```

```html
<m-image
  lazy
  width="100px"
  loading="https://xxx.xxx/loading.png"
  error="https://xxx.xxx/error.png"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
/>
```

### 禁用预览

通过`previewDisabled`控制预览功能的禁用

```vue
import PreviewDisabled from '../example/PreviewDisabled.vue'
```

```html
<m-image preview-disabled width="100px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```


## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | 图片地址 | _string_ | **-** |
| `fit` | 填充模式, 可选值为 `fill` `contain` `cover` `none` `scale-down` | _string_ | **fill** |
| `alt` | 替代文本 | _string_ | **-** |
| `width` | 图片宽度 | _string \| number_ | **-** |
| `height` | 图片高度 | _string \| number_ | **-** |
| `radius` | 图片圆角 | _string \| number_ | **-** |
| `lazy` | 是否开启懒加载 | _boolean_ | **false** |
| `loading` | 当开启懒加载时, 加载中显示的图片 | _string_ | **-** |
| `error` | 当开启懒加载时, 加载失败显示的图片 | _string_ | **-** |
| `ripple` | 是否开启水波 | _boolean_ | **false** |
| `preview-disabled` | 是否禁用预览 | _boolean_ | **true** |
| `block` | 是否是块级元素 | _boolean_ | **true** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图片时触发 | **event: Event** |
| `load` | 图片成功加载时触发(懒加载模式下失败时会多次尝试加载图片，只会在成功加载时触发) | **event: Event** |
| `error` | 图片失败加载时触发(懒加载模式下失败时会多次尝试加载图片，只会在尝试次数结束时触发) | **event: Event** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@image-preview-toolbar-padding` | `10px` |
| `@image-preview-toolbar-background` | `rgba(0, 0, 0, 0.4)` |
| `@image-preview-toolbar-border-radius` | `30px` |
| `@image-preview-toolbar-bottom` | `4vh` |
