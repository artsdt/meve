<template>
  <m-select placeholder="What is your favorite" v-model="value">
    <m-option label="Eat" />
    <m-option label="Sleep" />
    <m-option label="Coding" />
  </m-select>
</template>

<script>
import Select from '..'
import Option from '../../option'

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data: () => ({
    value: '',
  }),
}
</script>
