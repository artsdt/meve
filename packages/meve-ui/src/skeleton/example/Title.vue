<template>
  <m-skeleton title loading />
</template>

<script>
import Skeleton from '..'

export default {
  components: {
    [Skeleton.name]: Skeleton,
  },
}
</script>
