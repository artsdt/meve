# AutoComplete 自动补全

### 介绍

输入时提供自动补全

### 基本使用

通过`v-model`进行双向绑定

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-auto-complete
    placeholder="What is your email?"
    :options="options"
    v-model="value"
  />
</template>

<script>
export default {
  data: () => ({
    value: '',
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
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
    <m-auto-complete
      label="NORMAL"
      placeholder="What is your email?"
      :options="options"
      v-model="value"
    />
    <m-auto-complete
      label="SMALL"
      placeholder="What is your email?"
      size="small"
      :options="options"
      v-model="value"
    />
    <m-auto-complete
      label="MINI"
      placeholder="What is your email?"
      size="mini"
      :options="options"
      v-model="value"
    />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: '',
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
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
  <m-auto-complete
    placeholder="What is your email?"
    label="YOUR EMAIL"
    :options="options"
    v-model="value"
  />
</template>

<script>
export default {
  data: () => ({
    value: '',
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
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
  <m-auto-complete
    placeholder="What is your email?"
    :maxlength="10"
    :options="options"
    v-model="value"
  />
</template>

<script>
export default {
  data: () => ({
    value: ''
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
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
  <m-auto-complete
    placeholder="What is your email?"
    clearable
    :options="options"
    v-model="value"
  />
</template>

<script>
export default {
  data: () => ({
    value: ''
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value?.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
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
  <m-auto-complete
    placeholder="What is your email?"
    :options="options"
    v-model="value"
  >
    <template #prepend-icon>
      <m-icon class="prepend-icon" name="magnify-plus-outline" />
    </template>

    <template #append-icon>
      <m-icon class="append-icon" name="magnify-plus-outline" />
    </template>
  </m-auto-complete>
</template>

<script>
export default {
  data: () => ({
    value: '',
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
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
  <m-auto-complete
    placeholder="What is your email?"
    textarea
    :options="options"
    v-model="value"
  />
</template>

<script>
export default {
  data: () => ({
    value: ''
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
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
    <m-auto-complete
      placeholder="What is your email?"
      readonly
      v-model="value"
    />
    <m-auto-complete
      placeholder="What is your email?"
      textarea
      readonly
      v-model="value"
    />
    <m-auto-complete
      placeholder="What is your email?"
      disabled
      v-model="value"
    />
    <m-auto-complete
      placeholder="What is your email?"
      textarea
      disabled
      v-model="value"
    />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: '',
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
}
</script>
```

### 自动补全列表事件

组件提供了自动补全列表显示隐藏的有关事件

```vue
import PopoverEvents from '../example/PopoverEvents.vue'
```

```html
<template>
  <m-auto-complete
    placeholder="What is your email?"
    :options="options"
    v-model="value"
    @open="Message('open')"
    @opened="Message('opened')"
    @close="Message('close')"
    @closed="Message('closed')"
  />
</template>

<script>
import { Message } from '@meve/ui'

export default {
  data: () => ({
    value: '',
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  },
  methods: {
    Message
  }
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
    <m-auto-complete
      placeholder="What is your email?"
      :options="options"
      v-model="value"
      :rules="[(v) => (v && v.length > 6) || '长度必须大于6']"
    />
    <m-auto-complete
      placeholder="What is your email?"
      textarea
      :options="textareaOptions"
      v-model="text"
      :rules="[(v) => (v && v.length > 12) || '长度必须大于12']"
    />
  </m-space>
</template>

<script>
export default {
  data: () => ({
    value: '',
    text: ''
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.value.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    },

    textareaOptions() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.text.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      })
    }
  }
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _string \| number_ | **-** |
| `options` | 自动补全选项列表 | _{ label: any, value: any }[]_ | **[]** |
| `label` | 标签名 | _string_ | **-** |
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
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` `onClear` `onInput` `onChange` | _AutoCompleteValidateTrigger[]_ | **['onInput', 'onChange', onClear']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: string \| number) => any>_ | **-** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `open` | 打开自动补全列表 | _-_ | **-** |
| `close` | 关闭自动补全列表 | _-_ | **-** |
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
| `select` | 选择时触发 | **value: string \| number** |
| `clear` | 清除时触发 | **value: string \| number** |
| `click` | 点击时触发 | **event: Event** |
| `focus` | 聚焦时触发 | **event: Event** |
| `blur` | 失焦时触发 | **event: Event** |
| `open` | 自动补全列表开启时触发 | **-** |
| `opened` | 自动补全列表开启动画结束时触发 | **-** |
| `close` | 自动补全列表关闭时触发 | **-** |
| `closed` | 自动补全列表关闭动画结束时触发 | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prepend-icon` | 前置图标 | **-** |
| `append-icon` | 后置图标 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@auto-complete-options-box-shadow` | `0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1)` |
| `@auto-complete-options-border-radius` | `6px` |
| `@auto-complete-options-background` | `#fff` |
| `@auto-complete-option-text-color` | `#333` |
| `@auto-complete-option-active-text-color` | `#fff` |
| `@auto-complete-option-active-background` | `@color-primary` |
| `@auto-complete-normal-options-padding` | `9px 0` |
| `@auto-complete-normal-option-padding` | `9px 14px` |
| `@auto-complete-normal-option-font-size` | `15px` |
| `@auto-complete-small-options-padding` | `7px 0` |
| `@auto-complete-small-option-padding` | `7px 14px` |
| `@auto-complete-small-option-font-size` | `14px` |
| `@auto-complete-mini-options-padding` | `5px 0` |
| `@auto-complete-mini-option-padding` | `5px 14px` |
| `@auto-complete-mini-option-font-size` | `13px` |