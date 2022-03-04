<template>
  <div class="example">
    <m-button type="primary" @click="fullscreen">Fullscreen</m-button>
    <m-skeleton fullscreen :loading="loading" />
  </div>
</template>

<script>
import Button from '../../button'
import Skeleton from '..'

export default {
  components: {
    [Button.name]: Button,
    [Skeleton.name]: Skeleton,
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    fullscreen() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
  },
}
</script>
