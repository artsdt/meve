<template>
  <m-radio-group direction="vertical" v-model="value">
    <m-radio :checked-value="1">Agree</m-radio>
    <m-radio :checked-value="2">Disagree</m-radio>
  </m-radio-group>
</template>

<script>
import Radio from '../../radio'
import RadioGroup from '..'

export default {
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>
