<template>
  <div class="example">
    <img v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
    <img v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
    <img v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
    <img v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
    <img v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" />
  </div>
</template>

<script>
import Lazy from '..'

export default {
  name: 'Load',
  directives: { Lazy },
}
</script>

<style scoped>
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  pointer-events: none;
}
</style>
