# Table 表格

### 介绍

显示行列数据

### 基本使用

通过`data方法`返回表格数据进行绑定, 自动处理`loading`状态，通过`columns`绑定列信息

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<template>
  <m-table :columns="columns" @load="load"/>
</template>

<script>
function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
    }
  })
}

export default {
  data: () => ({
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      }
    ]
  }),
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 3)), 300)
      })
    }
  }
}
</script>
```

### 紧凑型表格

通过`size`可以设置为紧凑型表格

```vue
import Size from '../example/Size.vue'
```

```html
<template>
  <m-table size="small" :columns="columns" @load="load"/>
</template>

<script>
function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
    }
  })
}

export default {
  data: () => ({
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      }
    ]
  }),
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 3)), 300)
      })
    }
  }
}
</script>
```

### 合并单元格

通过`column`的`headColSpan`和`bodySpan`进行合并单元格

```vue
import Colspan from '../example/Colspan.vue'
```

```html
<template>
  <m-table border :columns="columns" @load="load"/>
</template>

<script>
function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
    }
  })
}

export default {
  data: () => ({
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
        headColSpan: 2,
        bodySpan(rowIndex) {
          if (rowIndex === 1) {
            return { colSpan: 2 }
          }
          if (rowIndex === 3) {
            return { rowSpan: 2 }
          }
        }
      },
      {
        key: 'text',
        title: 'Text',
        headColSpan: 0,
        bodySpan(rowIndex) {
          if (rowIndex === 1) {
            return { colSpan: 0 }
          }
          if (rowIndex === 4) {
            return { rowSpan: 0 }
          }
        }
      }
    ]
  }),
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 5)), 300)
      })
    }
  }
}
</script>
```

### 筛选

通过`column`的`sorter`可以开启筛选功能

```vue
import Sorter from '../example/Sorter.vue'
```

```html
<template>
  <m-table :columns="columns" @load="load"/>
</template>

<script>
function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
    }
  })
}

export default {
  data: () => ({
    columns: [
      {
        key: 'id',
        title: 'ID',
        sorter: true
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      }
    ]
  }),
  methods: {
    load({ sorters }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = get(1, 3)

          if (sorters.id === 'asc') {
            data.sort((a, b) => a.id - b.id)
          } else if (sorters.id === 'desc') {
            data.sort((a, b) => b.id - a.id)
          }

          resolve(data)
        }, 300)
      })
    }
  }
}
</script>
```

### 固定表头

通过`scroller`设置滚动容器的滚动距离并自动开启表头固定。通过`column`的`sticky`选项开启列固定，通过`style`设置固定偏移量。

```vue
import FixedTable from '../example/FixedTable.vue'
```

```html
<template>
  <m-table
    :scroller="{ x: 800, y: 260 }"
    :columns="columns"
    @load="load"
  >
    <template #action>
      <m-button size="small">Action</m-button>
    </template>
  </m-table>
</template>

<script>
function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
    }
  })
}

export default {
  data: () => ({
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      },
      {
        key: 'action',
        title: 'Action',
        sticky: true,
        style: {
          right: '0px'
        }
      }
    ]
  }),
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 10)), 300)
      })
    }
  }
}
</script>
```

### 开启行选择

通过`column`的`selection`开启行选择

```vue
import Selection from '../example/Selection.vue'
```

```html
<template>
  <m-table :selected-keys.sync="selectedKeys" :columns="columns" @load="load"/>
</template>

<script>
import { Message } from '@meve/ui'

function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
    }
  })
}

export default {
  data: () => ({
    selectedKeys: [],
    columns: [
      {
        selection: true,
        style: {
          width: '40px'
        }
      },
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      }
    ]
  }),
  watch: {
    selectedKeys(keys) {
      Message.warning(keys.toString())
    }
  },
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 3)), 300)
      })
    }
  }
}
</script>
```

### 树形表格

默认识别数据项中的`children`字段，默认开启树形表格，可以通过`childrenKey`自定义`children`字段名，也可配合`selection`。

```vue
import Tree from '../example/Tree.vue'
```

```html
<template>
  <m-table
    :selected-keys.sync="selectedKeys"
    :columns="columns"
    @load="load"
  />
</template>

<script>
import { Message } from '@meve/ui'

function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = ((current - 1) * size + 1 + index).toString()
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
      children: [
        {
          id: `${id}-1`,
          title:  `Title: ${id}-1`,
          text: 'Hello Meve Child!'
        },
        {
          id: `${id}-2`,
          title:  `Title: ${id}-2`,
          text: 'Hello Meve Child!'
        }
      ]
    }
  })
}

export default {
  data: () => ({
    selectedKeys: [],
    columns: [
      {
        selection: true,
        style: {
          width: '40px'
        }
      },
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      }
    ]
  }),
  watch: {
    selectedKeys(keys) {
      Message.warning(keys.toString())
    }
  },
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 3)), 300)
      })
    }
  }
}
</script>
```

### 配合分页

通过`footer`插槽插入分页组件

```vue
import Page from '../example/Page.vue'
```

```html
<template>
  <m-table
    ref="table"
    :columns="columns"
    @load="load"
  >
    <template #action>
      <m-button size="small">Action</m-button>
    </template>

    <template #footer>
      <m-pagination
        show-quick-jumper
        show-size-changer
        :current.sync="current"
        :size.sync="size"
        :total="total"
        :show-total="(total, [start, end]) => `共 ${total} 条，当前${start}-${end}条`"
        @change="handlePageChange"
      />
    </template>
  </m-table>
</template>

<script>
function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id: id.toString(),
      title,
      text,
    }
  })
}

export default {
  data: () => ({
    current: 1,
    size: 10,
    total: 0,
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      },
      {
        key: 'action',
        title: 'Action',
      }
    ]
  }),
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.total = 100
          resolve(get(this.current, this.size))
        }, 300)
      })
    },
    handlePageChange() {
      this.$refs.table.load()
    }
  }
}
</script>
```

### 可编辑表格

```vue
import Edit from '../example/Edit.vue'
```

```html
<template>
  <m-table :columns="columns" @load="load">
    <template #title="{ row }">
      <m-input v-model="row.title"/>
    </template>
    <template #text="{ row }">
      <m-input v-model="row.text"/>
    </template>
    <template #action="{ row }">
      <m-button size="small" @click="showRow(row)">Action</m-button>
    </template>
  </m-table>
</template>

<script>
import { Message } from '@meve/ui'

function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
    }
  })
}

export default {
  data: () => ({
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      },
      {
        key: 'action',
        title: 'Action',
      }
    ]
  }),
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 3)), 300)
      })
    },
    showRow(row) {
      Message.warning(JSON.stringify(row))
    }
  }
}
</script>
```

## API

### 属性

#### Table Props

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `row-key` | 每行的唯一键名 | _string_ | **id** |
| `columns` | 列配置 | _boolean_ | **TableColumn[]** |
| `selected-keys.sync` | 选择的行 | _any[]_ | **[]** |
| `size` | 表格尺寸, 可选值: `normal` `small` | _normal \| small_ | **normal** |
| `table-layout` | 表格布局，同原生属性 | _string_ | **auto** |
| `children-key` | 子列表键名 | _string_ | **children** |
| `scroller` | 滚动容器配置 | _{ x: number \| string, y: number \| string }_ | **-** |
| `border` | 是否使用全边框 | _boolean_ | **false** |
| `indent` | 树形菜单层级缩进距离 | _number \| string_ | **20** |

#### Table Column

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `key` | 当前列对应每行中的键名 | _string_ | **-** |
| `title` | 当前列的表头文本 | _string_ | **-** |
| `style` | 当前列样式 | _Record<string, any>_ | **-** |
| `selection` | 是否渲染行选择器 | _boolean_ | **false** |
| `sorter` | 是否渲染筛选控制器 | _boolean_ | **false** |
| `sticky` | 当前列是否开启粘性定位 | _boolean_ | **false** |
| `headColSpan` | 当前列的表头分栏，用于合并单元格操作，取值`0`时不渲染当前列的表头 | _number_ | **1** |
| `bodySpan` | 当前列的分栏，用于合并单元格操作，取值`0`时不渲染当前列 | _(rowIndex: number, row: any, column: any): { colSpan?: number, rowSpan?: number } \| undefined_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `load` | 表格加载数据时触发 | **{ sorters: Record<string, any> }** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `load` | 重新加载表格数据 | _-_ | **Promise\<void\>** |
| `getData` | 获取表格数据 | _-_ | **any[]** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `*` | 动态渲染插槽，根据 `column` 的 `key` 来决定 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@table-sorter-active-color` | `var(--color-deep-primary)` |
| `@table-normal-cell-padding` | `12px 24px` |
| `@table-small-cell-padding` | `8px 12px` |
| `@table-font-size` | `16px` |
| `@table-background-color` | `#fff` |
| `@table-th-text-color` | `#8392ab` |
| `@table-td-text-color` | `#67748e` |
| `@table-border` | `thin solid #eee` |
| `@table-empty-padding` | `12px` |
| `@table-empty-font-size` | `14px` |
| `@table-empty-text-color` | `#8392ab` |
| `@table-error-padding` | `12px` |
| `@table-error-font-size` | `14px` |
| `@table-error-text-color` | `#8392ab` |
| `@table-footer-padding` | `16px 12px` |
| `@table-footer-justify-content` | `flex-end` |