<template>
  <m-space direction="column" size="large">
    <m-radio :rules="[(v) => !!v || 'You must check it']" v-model="value">Agree</m-radio>

    <m-radio-group :rules="[(v) => v === 1 || 'You must check agree']" v-model="groupValue">
      <m-radio :checked-value="1">Agree</m-radio>
      <m-radio :checked-value="2">Disagree</m-radio>
    </m-radio-group>
  </m-space>
</template>

<script>
import Radio from '../../radio'
import Space from '../../space'
import RadioGroup from '..'

export default {
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Space.name]: Space,
  },
  data: () => ({
    value: true,
    groupValue: 1,
  }),
}
</script>
