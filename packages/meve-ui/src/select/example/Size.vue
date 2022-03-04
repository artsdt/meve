<template>
  <m-space direction="column" size="large">
    <m-select label="NORMAL" placeholder="What is your favorite" v-model="value">
      <m-option label="Eat" />
      <m-option label="Sleep" />
      <m-option label="Coding" />
    </m-select>
    <m-select label="SMALL" size="small" placeholder="What is your favorite" v-model="value">
      <m-option label="Eat" />
      <m-option label="Sleep" />
      <m-option label="Coding" />
    </m-select>
    <m-select label="MINI" size="mini" placeholder="What is your favorite" v-model="value">
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
  }),
}
</script>
