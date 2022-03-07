<template>
  <m-switch v-model="value">Agree</m-switch>
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
