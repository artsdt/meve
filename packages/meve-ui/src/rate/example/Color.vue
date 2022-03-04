<template>
  <m-rate color="#5e72e4" v-model="value" />
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
