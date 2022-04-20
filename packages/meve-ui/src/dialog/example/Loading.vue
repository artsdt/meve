<template>
  <div class="example">
    <m-button type="primary" @click="show = true">组件声明式插槽</m-button>

    <m-dialog
      v-model="show"
      :loading="loading"
      message="Hello!"
      @before-close="(action, done) => action !== 'confirm' && done()"
      @confirm="handleConfirm"
    />
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
    loading: false,
  }),
  methods: {
    handleConfirm() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.show = false
      }, 1000)
    },
  },
}
</script>
