<template>
  <div class="cat" v-lazy:background-image="'https://varlet.gitee.io/varlet-ui/cat.jpg'"></div>
</template>

<script>
import Lazy from '..'

export default {
  name: 'Load',
  directives: { Lazy },
}
</script>

<style scoped>
.cat {
  width: 100%;
  height: 200px;
  background-size: cover;
}
</style>
