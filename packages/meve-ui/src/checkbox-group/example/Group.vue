<template>
  <m-space direction="column" size="large">
    <m-checkbox-group ref="group" v-model="value">
      <m-checkbox :checked-value="1">Eat</m-checkbox>
      <m-checkbox :checked-value="2">Sleep</m-checkbox>
      <m-checkbox :checked-value="3">Coding</m-checkbox>
    </m-checkbox-group>

    <m-space>
      <m-button type="primary" @click="$refs.group.checkAll()">全选</m-button>
      <m-button type="primary" @click="$refs.group.inverseAll()">反选</m-button>
    </m-space>
  </m-space>
</template>

<script>
import Space from '../../space'
import Button from '../../button'
import Checkbox from '../../checkbox'
import CheckboxGroup from '..'

export default {
  components: {
    [Space.name]: Space,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
