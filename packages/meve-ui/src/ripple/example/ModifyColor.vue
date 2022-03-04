<template>
  <div class="container" v-ripple="{ color: '#5e72e4' }"></div>
</template>

<script>
import Ripple from '..'

export default {
  directives: { Ripple },
}
</script>

<style>
.container {
  width: 100px;
  height: 100px;
  background: #f1f1f1;
}
</style>
