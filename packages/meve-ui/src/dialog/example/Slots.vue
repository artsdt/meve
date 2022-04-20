<template>
  <div class="example">
    <m-button type="primary" @click="show = true">组件声明式插槽</m-button>

    <m-dialog v-model="show">
      <div class="message">这里是正文</div>

      <template #title>
        <span>这里是标题</span>
      </template>

      <template #footer>
        <div class="footer">这里是尾部</div>
      </template>
    </m-dialog>
  </div>
</template>

<script>
import Dialog from '..'

export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data: () => ({
    show: false,
    loading: true,
  }),
}
</script>

<style scoped>
.message,
.footer {
  padding: 20px;
  color: #555;
}
</style>
