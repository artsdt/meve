<template>
  <div class="example">
    <m-button type="primary" @click="loading = !loading">切换状态</m-button>

    <m-skeleton :loading="loading">
      <m-button class="button" type="error">Loaded</m-button>
    </m-skeleton>
  </div>
</template>

<script>
import Button from '../../button'
import Skeleton from '..'

export default {
  components: {
    [Skeleton.name]: Skeleton,
    [Button.name]: Button,
  },
  data: () => ({
    loading: true,
  }),
}
</script>

<style scoped>
.button {
  margin-top: 24px;
}
</style>
