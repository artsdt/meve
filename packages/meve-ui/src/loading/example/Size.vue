<template>
  <div class="example">
    <m-loading loading :size="50" />
  </div>
</template>

<script>
import Loading from '..'

export default {
  components: {
    [Loading.name]: Loading,
  },
}
</script>
