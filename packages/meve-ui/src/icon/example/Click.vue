<template>
  <div class="example">
    <m-space align="center">
      <m-icon name="checkbox-marked-circle" color="#5e72e4" @click="handleClick" />
      <m-icon name="checkbox-marked-circle" color="#5e72e4" :size="26" @click="handleClick" />
    </m-space>
  </div>
</template>

<script>
import Space from '../../space'
import Message from '../../message'

export default {
  name: 'Click',
  components: {
    [Space.name]: Space,
  },
  methods: {
    handleClick() {
      Message.success('Click ok')
    },
  },
}
</script>
