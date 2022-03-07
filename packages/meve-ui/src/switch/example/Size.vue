<template>
  <m-space direction="column" size="large">
    <m-switch label="NORMAL" v-model="value" />
    <m-switch label="SMALL" size="small" v-model="value" />
    <m-switch label="MINI" size="mini" v-model="value" />
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
