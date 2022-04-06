<template>
  <m-progress :value="value" />
</template>

<script>
import Progress from '..'

export default {
  components: {
    [Progress.name]: Progress,
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
