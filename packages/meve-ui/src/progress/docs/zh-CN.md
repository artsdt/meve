# Progress 进度条

### 介绍

显示进度

### 基本使用

通过`value`指定进度，取值`0->100`

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-progress :value="value" />
</template>

<script>
export default {
  data: () => ({
    timer: null,
    value: 0
  }),
  mounted() {
    this.timer = setInterval(() => {
      this.value = this.value === 100 ? 0 : this.value + 20
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
```

### 显示标签

通过`label`显示标签，通过默认插槽可以自定义标签内容

```vue
import LabelComponent from '../example/Label.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-progress label :value="value" />
    <m-progress label :value="value">{{ this.value === 100 ? 'completed' : `${this.value}%` }}</m-progress>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    timer: null,
    value: 0
  }),
  mounted() {
    this.timer = setInterval(() => {
      this.value = this.value === 100 ? 0 : this.value + 20
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
```

### 自定义颜色

通过`color`修改填充颜色，通过`trackColor`修改轨道颜色

```vue
import CustomColor from '../example/CustomColor.vue'
```

```html
<template>
  <m-progress color="#fb6340" track-color="#eecd98" :value="value" />
</template>

<script>
export default {
  data: () => ({
    timer: null,
    value: 0
  }),
  mounted() {
    this.timer = setInterval(() => {
      this.value = this.value === 100 ? 0 : this.value + 20
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
```

### 自定义尺寸

通过`track-size`修改轨道尺寸

```vue
import TrackSize from '../example/TrackSize.vue'
```

```html
<template>
  <m-progress :track-size="4" :value="value" />
</template>

<script>
export default {
  data: () => ({
    timer: null,
    value: 0
  }),
  mounted() {
    this.timer = setInterval(() => {
      this.value = this.value === 100 ? 0 : this.value + 20
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `value` | 进度，| _string \| number_ | **0** |
| `color` | 填充色 | _string_ | **-** |
| `track-color` | 轨道颜色 | _string_ | **-** |
| `track-size` | 轨道尺寸 | _string \| number_ | **-** |
| `label` | 是否显示标签 | _boolean_ | **false** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 标签内容 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--progress-bar-color` | `var(--color-primary)` |
| `--progress-label-text-color` | `#888` |
| `--progress-label-font-size` | `14px` |
| `--progress-label-margin` | `0 0 2px` |
| `--progress-track-height` | `8px` |
| `--progress-track-background` | `#e9ecef` |
| `--progress-track-box-shadow` | `inset 0 1px 2px rgba(0, 0, 0, .1)` |
| `--progress-track-border-radius` | `4px` |