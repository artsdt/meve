<template>
  <m-space direction="column" size="large">
    <m-checkbox :rules="[(v) => !!v || 'You must check it']" v-model="value">Eat</m-checkbox>

    <m-checkbox-group :rules="[(v) => v.length === 3 || 'You must check all']" v-model="groupValue">
      <m-checkbox :checked-value="1">Eat</m-checkbox>
      <m-checkbox :checked-value="2">Sleep</m-checkbox>
      <m-checkbox :checked-value="3">Coding</m-checkbox>
    </m-checkbox-group>
  </m-space>
</template>

<script>
import Checkbox from '../../checkbox'
import Space from '../../space'
import CheckboxGroup from '..'

export default {
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Space.name]: Space,
  },
  data: () => ({
    value: true,
    groupValue: [],
  }),
}
</script>
