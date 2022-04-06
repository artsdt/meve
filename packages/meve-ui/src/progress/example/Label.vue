<template>
  <m-space direction="column" size="large">
    <m-progress label :value="value" />
    <m-progress label :value="value">{{ this.value === 100 ? 'completed' : `${this.value}%` }}</m-progress>
  </m-space>
</template>

<script>
import Progress from '..'
import Space from '../../space'

export default {
  components: {
    [Progress.name]: Progress,
    [Space.name]: Space,
  },
  data: () => ({
    timer: null,
    value: 0,
  }),
  mounted() {
    this.timer = setInterval(() => {
      this.value = this.value === 100 ? 0 : this.value + 20
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>
