<template>
  <div class="site-container">
    <app-sidebar :in-small-screen="inSmallScreen || forceShowSidebar" />

    <div class="site-main" :class="{'site-main-padding': !inSmallScreen && !forceShowSidebar}">
      <app-header @menu-action-click="handleMenuActionClick" />

      <div class="site-router-view">
        <router-view />
      </div>
    </div>

    <m-popup position="left" v-model="showPopup">
      <app-sidebar :fixed="false" v-if="showPopup" />
    </m-popup>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar'
import AppHeader from './components/AppHeader'

export default {
  components: {
    AppSidebar,
    AppHeader
  },
  data: () => ({
    showPopup: false,
    inSmallScreen: false,
    forceShowSidebar: false
  }),
  methods: {
    handleMenuActionClick() {
      if (this.inSmallScreen) {
        this.showPopup = !this.showPopup
      } else {
        this.forceShowSidebar = !this.forceShowSidebar
      }

      window.postMessage('action: menu-action-click')
    },

    handleResize() {
      this.inSmallScreen = window.innerWidth <= 980
    }
  },
  created() {
    this.handleResize()
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #f6f7f9;
  color: #333;
}

* {
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

p {
  color: #888;
  font-size: 14px;
  line-height: 22px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  margin: 20px 0 0 0;
}


p {
  margin-bottom: 0;

  code {
    color: #5e72e4;
    margin: 0 8px;
  }
}

table {
  width: 100%;
  border-spacing: 0;
  margin-top: 20px;
}

th {
  background: #f5f8fb;
  padding: 14px;
  color: #999;
  font-size: 14px;
  font-weight: 400;
  text-align: start;
}

tbody {
  td {
    color: #777;
    padding: 14px;
    font-size: 14px;
    font-weight: 400;
    border-bottom: 1px solid #eee;

    code {
      color: #5e72e4;
    }

    em {
      font-style: inherit;
      font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace !important;
      color: #f5365c;
    }

    strong {
      font-weight: 400;
      font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace !important;
      color: #fb6340;
    }
  }
}

.meve-component-preview {
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px dashed #eee;
}

.meve-site-introduce {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06);
  padding: 34px 24px;
  overflow: auto;
  margin-top: 20px;
}

.meve-site-card {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06);
  padding: 1px 24px 24px;
  overflow: auto;
  margin-top: 20px;
}

.hljs {
  font-size: 14px;
  background: #fbfbfb !important;
  padding: 14px 16px !important;
  line-height: 26px;
  margin: 0;
}

code {
  font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace !important;
}

.site-container {
  display: flex;

  .site-main {
    flex: 1;
    min-width: 320px;
    transition: all .25s;
    padding-top: 66px;
    padding-bottom: 30px;

    .site-router-view {
      padding: 0 30px;
    }
  }

  .site-main-padding {
    padding-left: 245px;
  }
}
</style>
