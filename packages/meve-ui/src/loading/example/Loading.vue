<template>
  <div class="example">
    <m-loading loading />
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
