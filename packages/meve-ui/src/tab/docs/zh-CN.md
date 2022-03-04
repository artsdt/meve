## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 标签页的名字 | _string \| number_ | **index** |
| `disabled` | 是否禁用标签页 | _boolean_ | **false** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击标签页时触发, 在 `disabled` 状态为 `true` 时不触发 | `value: 标签页标识， event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 标签页内容 | `-` |