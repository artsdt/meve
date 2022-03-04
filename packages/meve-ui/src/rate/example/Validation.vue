<template>
  <m-rate :rules="[(v) => v === 5 || 'You must pick 5']" v-model="value" />
</template>

<script>
import Rate from '..'

export default {
  components: {
    [Rate.name]: Rate,
  },
  data: () => ({
    value: 0,
  }),
}
</script>
