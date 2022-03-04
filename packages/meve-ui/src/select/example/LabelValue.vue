<template>
  <m-select placeholder="What is your favorite" v-model="value">
    <m-option label="Eat" :value="1" />
    <m-option label="Sleep" :value="2" />
    <m-option label="Coding" :value="3" />
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
