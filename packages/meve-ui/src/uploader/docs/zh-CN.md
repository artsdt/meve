# Uploader 文件上传

### 介绍

上传文件，支持图片预览

### 基本使用

通过`v-model`双向绑定文件列表

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-uploader v-model="files" @after-read="handleAfterRead">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
export default {
  data: () => ({
    timer: null,
    files: []
  }),
  methods: {
    handleAfterRead(file) {
      file.state = 'loading'
      
      this.timer = setInterval(() => {
        if (file.progress === 100) {
          file.state = 'success'
          clearInterval(this.timer)
          return
        }

        file.progress += 20
      }, 200)
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
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
  <m-uploader label="FILES" v-model="files">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
export default {
  data: () => ({
    files: []
  }),
}
</script>
```

### 多种状态

组件存在多种状态, 可以通过文件对象的`state`控制

```vue
import State from '../example/State.vue'
```

```html
<template>
  <m-uploader v-model="files">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
export default {
  data: () => ({
    files: [
      {
        name: '加载状态',
        state: 'loading',
        progress: 50
      },
      {
        name: '链接',
        state: 'success',
        url: 'https://www.baidu.com'
      },
      {
        name: '图片',
        state: 'error',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg'
      }
    ]
  }),
}
</script>
```

### 文件数量限制

通过`maxlength`设置文件数量限制

```vue
import Maxlength from '../example/Maxlength.vue'
```

```html
<template>
  <m-uploader :maxlength="1" v-model="files">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
export default {
  data: () => ({
    files: []
  })
}
</script>
```

### 文件大小限制

通过`maxsize`设置单个文件最大限制，超过限制时会触发`oversize`事件

```vue
import Oversize from '../example/Oversize.vue'
```

```html
<template>
  <m-uploader :maxsize="1024" v-model="files" @oversize="handleOversize">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  data: () => ({
    files: []
  }),
  methods: {
    handleOversize() {
      Message('文件大小超过限制')
    }
  }
}
</script>
```

### 上传预处理

通过注册`before-read`事件可以对文件进行预处理，返回假值阻止文件读取。

```vue
import BeforeRead from '../example/BeforeRead.vue'
```

```html
<template>
  <m-uploader v-model="files" @before-read="handleBeforeRead">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
import { Message } from '@meve/ui'

export default {
  data: () => ({
    files: []
  }),
  methods: {
    handleBeforeRead(file) {
      if (file.file.size <= 1 * 1024 * 1024) {
        Message.success('文件小于1M，上传成功')
        return true
      } else {
        Message.warning('文件大于1M，不能上传')
        return false
      }
    }
  }
}
</script>
```

### 删除前处理

```vue
import Removable from '../example/Removable.vue'
```

```html
<template>
  <m-uploader v-model="files" @before-remove="handleBeforeRemove">
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
import { Dialog } from '@meve/ui'

export default {
  data: () => ({
    files: [
      {
        name: '图片',
        state: 'success',
        cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg'
      }
    ]
  }),
  methods: {
    async handleBeforeRemove() {
      const action = await Dialog({
        title: '是否删除?',
        message: '删除后无法撤回'
      })

      return action === 'confirm'
    }
  }
}
</script>
```

### 自定义文件列表

通过`hide-list`关闭组件的文件列表可进行自定义

```vue
import HideList from '../example/HideList.vue'
```

```html
<template>
  <div class="example">
    <m-uploader hide-list v-model="files">
      <m-button>文件上传</m-button>
    </m-uploader>

    <div class="custom-list">
      <div class="custom-item" v-for="file in files">{{ file.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    files: []
  }),
}
</script>
```

### 禁用/只读

通过设置`disabled`和`readonly`控制禁用和只读状态

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<template>
  <m-space direction="column" size="large">
    <m-uploader disabled v-model="files">
      <m-button disabled>文件上传</m-button>
    </m-uploader>
    <m-uploader readonly v-model="files">
      <m-button disabled>文件上传</m-button>
    </m-uploader>
  </m-space>
</template>

<script>
export default {
  data: () => ({
    files: [
      {
        name: '一个文件'
      }
    ]
  }),
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
  <m-uploader
    v-model="files"
    :rules="[(v, u) => u.getSuccess().length === v.length || 'There are files that have not been uploaded successfully']"
  >
    <m-button>文件上传</m-button>
  </m-uploader>
</template>

<script>
export default {
  data: () => ({
    files: []
  })
}
</script>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 文件列表 | _MFile[]_ | **[]** |
| `accept` | 接受的文件类型，与原生属性一致 | _string_ | **\*** |
| `label` | 标签 | _string \| number_ | `-` |
| `capture` | 获取文件方式，与原生属性一致 | _string_ | **-** |
| `multiple` | 是否多选文件 | _boolean_ | **false** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `removable` | 是否可以删除 | _boolean_ | **true** |
| `maxlength` | 最大文件个数 | _string \| number_ | **-** |
| `maxsize` | 最大文件大小 | _string \| number_ | **-** |
| `previewed` | 是否允许预览 | _boolean_ | **true** |
| `hide-list` | 是否隐藏文件列表 | _boolean_ | **false** |
| `validate-trigger` | 触发验证的时机， 可选值为 `onChange` `onRemove` | _UploaderValidateTrigger[]_ | **['onChange', 'onRemove']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: MFile, u: MFileUtils) => any>_ | **-** |

### MFile

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 原生文件 | _File_ | **-** |
| `name` | 文件名 | _string_ | **-** |
| `url` | 文件地址 | _string_ | **-** |
| `cover` | 封面图 | _string_ | **-** |
| `fit` | 封面图填充模式，可选值为 `fill` `contain` `cover` `none` `scale-down` | _string_ | **'cover'** |
| `state` | 文件上传状态，可选值为 `loading` `success` `error` | _string_ | **-** |
| `progress` | 文件上传进度 | _number \| string_ | **0** |

### MFileUtils

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `getLoading` | 获取 `state` 等于 `loading` 的文件集合| `-` | **MFile[]** |
| `getSuccess` | 获取 `state` 等于 `success` 的文件集合| `-` | **MFile[]** |
| `getError` |  获取 `state` 等于 `error` 的文件集合 | `-` | **MFile[]** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `getLoading` | 获取 `state` 等于 `loading` 的文件集合| `-` | **MFile[]** |
| `getSuccess` | 获取 `state` 等于 `success` 的文件集合| `-` | **MFile[]** |
| `getError` |  获取 `state` 等于 `error` 的文件集合 | `-` | **MFile[]** |
| `validate` | 触发校验 | `-` | **valid: Promise\<boolean\>** |
| `resetValidation` | 清空校验信息 | `-` | **-** |
| `reset` | 清空绑定的值(设置为 `[]`)和校验信息 | `-` | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `before-read` | 文件读取前触发，返回假值阻止文件读取(支持 promise) | **file: MFile** |
| `after-read` | 文件读取后触发 | **file: MFile** |
| `oversize` | 文件超过限制大小时触发 | **file: MFile** |
| `before-remove` | 文件删除前触发，返回假值阻止文件删除(支持 promise) | **file: MFile** |
| `remove` | 文件删除时触发 | **file: MFile** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 上传按钮内容 | `-` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--uploader-normal-hover-color` | `#eee` |
| `--uploader-primary-color` | `var(--color-primary)` |
| `--uploader-primary-hover-color` | `var(--color-light-primary)` |
| `--uploader-error-hover-color` | `var(--color-light-warning)` |
| `--uploader-error-color` | `var(--color-warning)` |
| `--uploader-file-padding` | `8px` |
| `--uploader-file-text-color` | `#666` |
| `--uploader-file-font-size` | `14px` |
| `--uploader-file-border-radius` | `4px` |
| `--uploader-file-list-margin` | `14px 0 0` |
| `--uploader-file-name-padding` | `0 2px` |
| `--uploader-file-profile-margin` | `0 10px` |
| `--uploader-file-progress-margin` | `4px 0 0` |
| `--uploader-file-progress-track-height` | `2px` |
| `--uploader-remove-icon-size` | `16px` |
| `--uploader-cover-size` | `32px` |