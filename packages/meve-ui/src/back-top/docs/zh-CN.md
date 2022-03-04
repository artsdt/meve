# BackTop 回到顶部

### 介绍

帮你快速的滚动到页面顶部

### 基本使用

组件会找到首个可滚动的祖先元素并且监听它的滚动事件，到了一定滚动高度显示按钮

```vue
import BackTop from '../example/BackTop.vue'
```

```html
<m-back-top />
```

### 触发器显示的滚动距离

通过`visibilityHeight`可以设置按钮显示时最小滚动距离

```html
<m-back-top :visibility-height="200" />
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `right` | 触发器距离页面右侧的距离	| _string \| number_ | **-** |
| `bottom` | 触发器距离页面底部的距离	| _string \| number_ | **-** |
| `target` | 触发滚动的对象	| _string \| object \| Window_ | **-** |
| `visibility-height` | 触发器显示的滚动距离 | _string \| number_ | **200** |
| `duration` | 回到顶部过渡时间（ms） | _number_ | **300** |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click` | 点击触发器触发 | **event: Event** |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 自定义触发器 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@back-top-right` | `50px` |
| `@back-top-bottom` | `50px` |
| `@back-top-button-size` | `40px` |
| `@back-top-icon-size` | `22px` |