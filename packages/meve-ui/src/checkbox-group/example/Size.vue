<template>
  <m-space direction="column" size="large">
    <m-checkbox label="NORMAL" v-model="value">Eat</m-checkbox>
    <m-checkbox label="SMALL" size="small" v-model="value">Eat</m-checkbox>
    <m-checkbox label="MINI" size="mini" v-model="value">Eat</m-checkbox>
  </m-space>
</template>

<script>
import Checkbox from '../../checkbox'
import CheckboxGroup from '../../checkbox-group'

export default {
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
  },
  data: () => ({
    value: false,
  }),
}
</script>
