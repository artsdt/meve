## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any_ | **false** |
| `checked-value` | 选中状态的值 | _any_ | **true** |
| `unchecked-value` | 未选中状态的值 | _any_ | **false** |
| `label` | 标签名	 | _string \| number_ | **-** |
| `size` | 单选框尺寸, 可选值为 `normal` `small` `mini` | _string_ | **normal** |
| `disabled` | 是否禁用 | _boolean_ | **false** |
| `readonly` | 是否只读 | _boolean_ | **false** |
| `ripple` | 是否开启水波纹 | _boolean_ | **true** |
| `validate-trigger` | 触发验证的时机，可选值为 `onChange` `onClick` | _RadioValidateTrigger[]_ | **['onChange']** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(value: any) => any>_ | **-** |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `input` | 绑定值改变时触发 | **value: any** |
| `change` | 绑定值改变时触发 | **value: any** |
| `click` | 点击时触发 | **e: Event** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 显示的文本 | **-** |