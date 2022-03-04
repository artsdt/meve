<template>
  <m-space direction="column" size="large">
    <m-select
      placeholder="What is your favorite"
      :rules="[(v) => v === 'Eat' || 'You must select eat']"
      v-model="value"
    >
      <m-option label="Eat" />
      <m-option label="Sleep" />
      <m-option label="Coding" />
    </m-select>

    <m-select
      multiple
      placeholder="What is your favorite"
      :rules="[(v) => v.length === 3 || 'You must select all']"
      v-model="list"
    >
      <m-option label="Eat" />
      <m-option label="Sleep" />
      <m-option label="Coding" />
    </m-select>
  </m-space>
</template>

<script>
import Select from '..'
import Option from '../../option'
import Space from '../../space'

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    [Space.name]: Space,
  },
  data: () => ({
    value: '',
    list: [],
  }),
}
</script>
