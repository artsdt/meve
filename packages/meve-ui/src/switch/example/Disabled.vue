<template>
  <m-space direction="column" size="large">
    <m-switch disabled v-model="value" />
    <m-switch readonly v-model="value" />
  </m-space>
</template>

<script>
import Switch from '..'

export default {
  components: {
    [Switch.name]: Switch,
  },
  data: () => ({
    value: false,
  }),
}
</script>
