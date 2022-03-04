<template>
  <m-space>
    <m-button type="primary" @click="showMessage('loading')">加载类型</m-button>
    <m-button type="info" @click="showMessage('info')">信息类型</m-button>
    <m-button type="warning" @click="showMessage('warning')">警告类型</m-button>
    <m-button type="error" @click="showMessage('error')">错误类型</m-button>
    <m-button type="success" @click="showMessage('success')">成功类型</m-button>
  </m-space>
</template>

<script>
import Message from '../index'
import Space from '../../space'
import Button from '../../button'

export default {
  components: {
    [Space.name]: Space,
    [Button.name]: Button,
  },
  methods: {
    showMessage(type) {
      Message[type](
        'The term metaverse has its origins in the 1992 science fiction novel Snow Crash as a portmanteau of meta and universe.'
      )
    },
  },
}
</script>
