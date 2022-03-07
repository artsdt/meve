<template>
  <m-space direction="column" size="large">
    <m-switch loading v-model="a" />
    <m-switch loading v-model="b" />
  </m-space>
</template>

<script>
import Switch from '..'

export default {
  components: {
    [Switch.name]: Switch,
  },
  data: () => ({
    a: false,
    b: true,
  }),
}
</script>
