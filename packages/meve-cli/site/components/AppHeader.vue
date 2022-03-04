<template>
  <div class="app-site-header">
    <div class="app-site-header-lead">
      <m-button
        class="app-site-header-action"
        round
        @click="$emit('menu-action-click')"
      >
        <m-icon name="menu-open"/>
      </m-button>
    </div>
    <div class="app-site-header-tail">
      <m-button
        class="app-site-header-action"
        round
        @click="toGithub"
        v-if="config.github"
      >
        <m-icon name="github"/>
      </m-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',

  inject: ['config'],

  methods: {
    toGithub() {
      window.location.href = this.config.github
    }
  },
}
</script>

<style lang="less" scoped>
.app-site-header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 98;
  display: flex;
  height: 66px;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: #fff;
  border-bottom: 1px solid #eee;
  transition: all .25s;

  .app-site-header-action {
    padding: 8px;
  }
}
</style>
