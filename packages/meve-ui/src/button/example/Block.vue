<template>
  <div class="example">
    <m-button type="primary" block>块级按钮</m-button>
  </div>
</template>

<script>
import Button from '..'

export default {
  components: {
    [Button.name]: Button,
  },
}
</script>
