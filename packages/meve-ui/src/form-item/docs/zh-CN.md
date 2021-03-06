## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 验证的值 | _any_ | **-** |
| `label` | 标签名 | _string_ | **-** |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: any) => any>_ | **-** |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发值的校验 | _-_ | **valid: Promise\<boolean\>** |
| `resetValidation` | 清除值的校验信息 | _-_ | **-** |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 表单项内容 | **-** |