<template>
  <m-space direction="column" size="large">
    <m-radio disabled v-model="value">Agree</m-radio>
    <m-radio readonly v-model="value">Agree</m-radio>
  </m-space>
</template>

<script>
import Radio from '../../radio'
import RadioGroup from '../../radio-group'

export default {
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
  },
  data: () => ({
    value: false,
  }),
}
</script>
