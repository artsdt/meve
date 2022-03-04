<template>
  <div class="example">
    <m-loading loading color="#fb6340" />
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
