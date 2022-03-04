<template>
  <div class="example">
    <m-space align="center">
      <m-icon name="checkbox-marked-circle" color="#5e72e4" />
      <m-icon name="checkbox-marked-circle" color="#5e72e4" :size="26" />
    </m-space>
  </div>
</template>

<script>
import Icon from '..'
import Space from '../../space'

export default {
  components: {
    [Icon.name]: Icon,
    [Space.name]: Space,
  },
}
</script>
