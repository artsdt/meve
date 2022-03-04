<template>
  <m-space direction="column" size="large">
    <m-radio label="NORMAL" v-model="value">Agree</m-radio>
    <m-radio label="SMALL" size="small" v-model="value">Agree</m-radio>
    <m-radio label="MINI" size="mini" v-model="value">Agree</m-radio>
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
