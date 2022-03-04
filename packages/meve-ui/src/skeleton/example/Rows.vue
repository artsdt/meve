<template>
  <m-skeleton :rows="6" loading />
</template>

<script>
import Skeleton from '..'

export default {
  components: {
    [Skeleton.name]: Skeleton,
  },
}
</script>
