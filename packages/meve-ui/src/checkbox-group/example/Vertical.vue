<template>
  <m-checkbox-group direction="vertical" v-model="value">
    <m-checkbox :checked-value="1">Eat</m-checkbox>
    <m-checkbox :checked-value="2">Sleep</m-checkbox>
    <m-checkbox :checked-value="3">Coding</m-checkbox>
  </m-checkbox-group>
</template>

<script>
import Checkbox from '../../checkbox'
import CheckboxGroup from '..'

export default {
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
