## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `span` | 栅格列数 | _string \| number_ | **24*![img.png](img.png)* |
| `offset` | 偏移列数 | _string_ | **0** |
| `xs` | `<768px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |
| `sm` | `>=768px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |
| `md` | `>=992px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |
| `lg` | `>=1200px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |
| `xl` | `>=1920px` 响应式栅格数或栅格尺寸描述对象 | _string \| string \| ColSizeDescriptor_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击列触发 | **event: Event** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 列内容 | **-** |