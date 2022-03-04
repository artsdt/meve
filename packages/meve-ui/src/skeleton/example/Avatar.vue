<template>
  <m-skeleton title avatar loading />
</template>

<script>
import Skeleton from '..'

export default {
  components: {
    [Skeleton.name]: Skeleton,
  },
}
</script>
