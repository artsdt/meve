# Input 文本输入

### 介绍

提供基本的文本输入功能

### 基本使用

通过`v-model`进行双向绑定

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-input placeholder="What is your name?" v-model="value" />
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

```html
<template>
  <m-space direction="column" size="large">
    <m-input label="NORMAL" placeholder="What is your name?" v-model="value" />
    <m-input label="SMALL" placeholder="What is your name?" size="small" v-model="value" />
    <m-input label="MINI" placeholder="What is your name?" size="mini" v-model="value" />
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

### 输入类型

支持`number`、`text`、`password`，行为和原生一致

```vue
import Type from '../example/Type.vue'
```

```html
<template>
  <m-space direction="column">
    <m-input placeholder="What is your name?" v-model="text" />
    <m-input type="password" placeholder="What is your name?" v-model="password" />
    <m-input type="number" placeholder="What is your name?" v-model="number" />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    text: '',
    password: '',
    number: '',
  })
}
</script>
```

### 标签

通过`label`设置组件的标签，通常用于表单中

```vue
import LabelComponent from '../example/Label.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-input placeholder="What is your name?" label="YOUR NAME" v-model="name" />
    <m-input placeholder="What is your gender?" label="YOUR GENDER" v-model="gender" />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    name: '',
    gender: ''
  })
}
</script>
```

### 长度限制

通过`maxlength`指定最大长度

```vue
import Maxlength from '../example/Maxlength.vue'
```

```html
<template>
  <m-input placeholder="What is your name?" :maxlength="10" v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: ''
  })
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
  <m-input placeholder="What is your name?" clearable v-model="value" />
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
  <m-input placeholder="What is your name?" v-model="value">
    <template #prepend-icon>
      <m-icon class="prepend-icon" name="magnify-plus-outline" />
    </template>

    <template #append-icon>
      <m-icon class="append-icon" name="magnify-plus-outline" />
    </template>
  </m-input>
</template>

<script>
export default {
  data: () => ({
    value: ''
  })
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

### 文本域

通过`textarea`使用文本域

```vue
import TextareaComponent from '../example/Textarea.vue'
```

```html
<template>
  <m-input placeholder="What is your name?" textarea v-model="value" />
</template>

<script>
export default {
  data: () => ({
    value: ''
  })
}
</script>
```

### 只读/禁用

通过`readonly`和`disabled`设置组件的只读和禁用状态

```vue
import Status from '../example/Status.vue'
```

```html
<template>
  <m-space direction="column">
    <m-input placeholder="What is your name?" readonly v-model="value" />
    <m-input placeholder="What is your name?" textarea readonly v-model="value" />
    <m-input placeholder="What is your name?" disabled v-model="value" />
    <m-input placeholder="What is your name?" textarea disabled v-model="value" />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: '',
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
  <m-space direction="column">
    <m-input
      placeholder="What is your name?"
      v-model="value"
      :rules="[v => v && v.length > 6 || '长度必须大于6']"
    />
    <m-input
      placeholder="What is your name?"
      textarea
      v-model="text"
      :rules="[v => v && v.length > 12 || '长度必须大于12']"
    />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: '',
    text: ''
  })
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string \| number_ | **-** |
| `label` | 标签名 | _string \| number_ | **-** |
| `placeholder` | 占位符 | _string_ | **-** |
| `type` | 输入框类型, 可选值为 `text` `password` `number` | _string_ | **text** |
| `size` | 输入框尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `maxlength` | 最大长度 | _string \| number_ | **-** |
| `textarea` | 是否是文本域 | _boolean_ | **false** |
| `rows` | 文本域的显示行数 | _string \| number_ | **5** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `clearable` | 是否可清除 | _boolean_ | **false** |
| `resize` | 文本域是否可以拖动调整尺寸 | _boolean_ | **false** |
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` `onClear` `onInput` | _InputValidateTrigger[]_ | **['onInput', 'onClear']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: string \| number) => any>_ | **-** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦 | _-_ | **-** |
| `blur` | 失焦 | _-_ | **-** |
| `validate` | 触发校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 | _-_ | **-** |
| `reset` | 清空绑定的值和校验信息 | _-_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 输入时触发 | **value: string \| number** |
| `change` | 更新时触发 | **value: string \| number** |
| `clear` | 清除时触发 | **value: string \| number** |
| `click` | 点击时触发 | **event: Event** |
| `focus` | 聚焦时触发 | **-** |
| `blur` | 失焦时触发 | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prepend-icon` | 前置图标 | **-** |
| `append-icon` | 后置图标 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@input-normal-height` | `42px` |
| `@input-normal-font-size` | `15px` |
| `@input-small-height` | `36px` |
| `@input-small-font-size` | `14px` |
| `@input-mini-height` | `30px` |
| `@input-mini-font-size` | `13px` |
| `@input-padding` | `0 10px` |
| `@input-normal-textarea-padding` | `10px 0` |
| `@input-small-textarea-padding` | `7px 0` |
| `@input-mini-textarea-padding` | `5px 0` |
| `@input-background` | `#fff` |
| `@input-outline-active-color` | `@color-primary` |
| `@input-outline-inactive-color` | `#ccc` |
| `@input-border-radius` | `4px` |
| `@input-text-color` | `#666` |
| `@input-placeholder-text-color` | `#bbb` |
| `@input-disabled-background` | `#e6e9ec` |
| `@input-disabled-text-color` | `#888` |
| `@input-maxlength-font-size` | `14px` |
| `@input-maxlength-text-color` | `#888` |
| `@input-maxlength-margin` | `0 0 0 6px` |
| `@input-clear-margin` | `0 0 0 6px` |
| `@input-clear-size` | `16px` |
| `@input-clear-color` | `#888` |
| `@input-validation-error-color` | `@color-warning` |