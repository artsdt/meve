<template>
  <m-switch :rules="[(v) => !!v || 'You must enable it']" v-model="value" />
</template>

<script>
import Switch from '..'

export default {
  components: {
    [Switch.name]: Switch,
  },
  data: () => ({
    value: true,
  }),
}
</script>
