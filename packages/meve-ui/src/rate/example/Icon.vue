<template>
  <m-rate icon="star-outline" v-model="value" />
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
