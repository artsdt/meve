<template>
  <div class="example">
    <m-loading loading description="加载中...">
      <div class="container"></div>
    </m-loading>
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

<style>
.container {
  width: 100px;
  height: 100px;
  background: #f2f2f2;
}
</style>
