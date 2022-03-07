<template>
  <m-switch label="ENABLE?" v-model="value" />
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
