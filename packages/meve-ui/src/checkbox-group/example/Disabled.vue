<template>
  <m-space direction="column" size="large">
    <m-checkbox disabled v-model="value">Eat</m-checkbox>
    <m-checkbox readonly v-model="value">Eat</m-checkbox>
  </m-space>
</template>

<script>
import Checkbox from '../../checkbox'

export default {
  components: {
    [Checkbox.name]: Checkbox,
  },
  data: () => ({
    value: false,
  }),
}
</script>
