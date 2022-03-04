<template>
  <div class="container" v-ripple="{ disabled: true }"></div>
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
