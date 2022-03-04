<template>
  <m-skeleton :rows-width="['260px', '200px', '140px']" loading />
</template>

<script>
import Skeleton from '..'

export default {
  components: {
    [Skeleton.name]: Skeleton,
  },
}
</script>
