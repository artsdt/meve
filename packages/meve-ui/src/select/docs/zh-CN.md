# Select 选择框

### 介绍

提供选项选择能力

### 基本使用

通过`v-model`进行双向绑定

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-select placeholder="What is your favorite" v-model="value">
    <m-option label="Eat" />
    <m-option label="Sleep" />
    <m-option label="Coding"/>
  </m-select>
</template>

<script>
export default {
  data: () => ({
    value: ''
  })
}
</script>
```

### 关连值

通过`<m-option>`的`label`和`value`关连绑定的文本和绑定的值

```vue
import LabelValue from '../example/LabelValue.vue'
```

```html
<template>
  <m-select placeholder="What is your favorite" v-model="value">
    <m-option label="Eat" :value="1" />
    <m-option label="Sleep" :value="2" />
    <m-option label="Coding" :value="3"/>
  </m-select>
</template>

<script>
export default {
  data: () => ({
    value: ''
  })
}
</script>
```

### 尺寸

通过`size`指定尺寸

```vue
import Size from '../example/Size.vue'
```

### 标签

通过`label`设置组件的标签，通常用于表单中

```vue
import LabelComponent from '../example/Label.vue'
```

```html
<template>
  <m-select label="FAVORITE" placeholder="What is your favorite" v-model="value">
    <m-option label="Eat" />
    <m-option label="Sleep" />
    <m-option label="Coding"/>
  </m-select>
</template>

<script>
export default {
  data: () => ({
    value: '',
  }),
}
</script>
```

### 可清空

通过`clearable`可以显示清空按钮

```vue
import Clearable from '../example/Clearable.vue'
```

```html
<template>
  <m-select
    placeholder="What is your favorite"
    clearable
    v-model="value"
  >
    <m-option label="Eat" />
    <m-option label="Sleep" />
    <m-option label="Coding"/>
  </m-select>
</template>

<script>
export default {
  data: () => ({
    value: ''
  })
}
</script>
```

### 前置/后置插槽

可以通过插槽修改组件的前置和后置部分的内容

```vue
import Slots from '../example/Slots.vue'
```

```html
<template>
  <m-select placeholder="What is your favorite" v-model="value">
    <m-option label="Eat" />
    <m-option label="Sleep" />
    <m-option label="Coding"/>

    <template #prepend-icon>
      <m-icon class="prepend-icon" name="magnify-plus-outline" />
    </template>

    <template #append-icon>
      <m-icon class="append-icon" name="magnify-plus-outline" />
    </template>
  </m-select>
</template>

<script>
export default {
  data: () => ({
    value: '',
  }),
}
</script>

<style>
.prepend-icon {
  margin-right: 4px;
  margin-top: 1px;
  color: #888;
}

.append-icon {
  margin-left: 4px;
  margin-top: 1px;
  color: #888;
}
</style>
```

### 只读/禁用

通过`readonly`和`disabled`设置组件的只读和禁用状态

```vue
import Status from '../example/Status.vue'
```

```html
<template>
  <m-space direction="column">
    <m-select readonly placeholder="What is your favorite" v-model="value">
      <m-option label="Eat" />
      <m-option label="Sleep" />
      <m-option label="Coding"/>
    </m-select>
    <m-select disabled placeholder="What is your favorite" v-model="value">
      <m-option label="Eat" />
      <m-option label="Sleep" />
      <m-option label="Coding"/>
    </m-select>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: '',
  }),
}
</script>
```

### 多选

通过`multiple`标记为多选框

```vue
import Multiple from '../example/Multiple.vue'
```

```html
<template>
  <m-select multiple placeholder="What is your favorite" v-model="value">
    <m-option label="Eat" />
    <m-option label="Sleep" />
    <m-option label="Coding"/>
  </m-select>
</template>

<script>
export default {
  data: () => ({
    value: []
  })
}
</script>
```

### 字段验证

通过传入一个验证规则数组可以对值进行校验，校验器返回`true`表示校验通过。以外的值将转换为文本作为用户提示。

```vue
import Validation from '../example/Validation.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-select
      placeholder="What is your favorite"
      :rules="[v => v === 'Eat' || 'You must select eat']"
      v-model="value"
    >
      <m-option label="Eat" />
      <m-option label="Sleep" />
      <m-option label="Coding"/>
    </m-select>

    <m-select
      multiple
      placeholder="What is your favorite"
      :rules="[v => v.length === 3 || 'You must select all']"
      v-model="list"
    >
      <m-option label="Eat" />
      <m-option label="Sleep" />
      <m-option label="Coding"/>
    </m-select>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: '',
    list: []
  }),
}
</script>
```

## API

### 属性

#### Select Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string \| number \| Array_ | **-** |
| `label` | 标签名 | _string_ | **-** |
| `placeholder` | 占位符 | _string_ | **-** |
| `multiple` | 是否多选 | _boolean_ | **false** |
| `size` | 选择框尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `clearable` | 是否可清除 | _boolean_ | **false** |
| `validate-trigger` | 触发验证的时机，可选值为 `onSelect` `onClick` `onClear` `onInput` `onTagClose` | _SelectValidateTrigger[]_ | **['onChange', 'onClear', 'onClose']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: any) => any>_ | **-** |

#### Option Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `label` | 选项显示的文本 | _any_ | `-` |
| `value` | 选项绑定的值 | _any_ | `-` |
| `disabled` | 是否禁用 | _boolean_ | `-` |

### 方法

#### Select Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `open` | 打开下拉列表 | _-_ | **-** |
| `close` | 关闭下拉列表 | _-_ | **-** |
| `focus` | 聚焦 | _-_ | **-** |
| `blur` | 失焦 | _-_ | **-** |
| `validate` | 触发校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 | _-_ | **-** |
| `reset` | 清空绑定的值和校验信息 | _-_ | **-** |

### 事件

#### Select Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值变化时触发 | **value: any** |
| `select` | 选择时触发 | **value: any** |
| `clear` | 清除时触发 | **value: any** |
| `tag-close` | 标签关闭时触发 | **value: any** |
| `click` | 点击时触发 | **event: Event** |
| `focus` | 聚焦时触发 | **-** |
| `blur` | 失焦时触发 | **-** |
| `open` | 下拉列表开启时触发 | **-** |
| `opened` | 下拉列表开启动画结束时触发 | **-** |
| `close` | 下拉列表关闭时触发 | **-** |
| `closed` | 下拉列表关闭动画结束时触发 | **-** |

### 插槽

#### Select Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 选择框内容 | **-** ｜
| `prepend-icon` | 前置图标 | **-** |
| `append-icon` | 后置图标 | **-** |

#### Option Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 选项显示的内容 | `-` |

### 样式变量

Select Variables

| 变量名 | 默认值 |
| --- | --- |
| `@select-normal-height` | `42px` |
| `@select-normal-font-size` | `15px` |
| `@select-small-height` | `36px` |
| `@select-small-font-size` | `14px` |
| `@select-mini-height` | `30px` |
| `@select-mini-font-size` | `13px` |
| `@select-padding` | `0 10px` |
| `@select-background` | `#fff` |
| `@select-outline-active-color` | `@color-primary` |
| `@select-outline-inactive-color` | `#ccc` |
| `@select-border-radius` | `4px` |
| `@select-text-color` | `#666` |
| `@select-placeholder-text-color` | `#bbb` |
| `@select-disabled-background` | `#e6e9ec` |
| `@select-disabled-text-color` | `#888` |
| `@select-clear-margin` | `0 0 0 6px` |
| `@select-clear-size` | `16px` |
| `@select-clear-color` | `#888` |
| `@select-validation-error-color` | `@color-warning` |
| `@select-normal-options-padding` | `9px 0` |
| `@select-small-options-padding` | `7px 0` |
| `@select-mini-options-padding` | `5px 0` |
| `@select-options-background` | `#fff` |
| `@select-options-box-shadow` | `0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1)` |
| `@select-options-border-radius` | `6px` |
| `@select-arrow-size` | `20px` |
| `@select-tag-vertical-space` | `3px` |

Option Variables

| 变量名 | 默认值 |
| --- | --- |
| `@option-text-color` | `#333` |
| `@option-selected-text-color` | `#fff` |
| `@option-selected-background` | `@color-primary` |
| `@option-key-active-background` | `rgba(0, 0, 0, 0.06)` |
| `@option-normal-padding` | `9px 14px` |
| `@option-normal-font-size` | `15px` |
| `@option-small-padding` | `7px 14px` |
| `@option-small-font-size` | `14px` |
| `@option-mini-padding` | `5px 14px` |
| `@option-mini-font-size` | `13px` |
| `@option-disabled-text-color` | `@color-text-disabled` |
