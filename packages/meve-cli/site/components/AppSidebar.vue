<template>
  <div
    class="app-site-sidebar-scroller"
    :class="{
      'app-site-sidebar-fixed': fixed,
      'app-site-sidebar-hidden': inSmallScreen
    }"
  >
    <div class="app-site-sidebar">
      <div class="app-site-sidebar-profile">
        <img class="app-site-sidebar-logo" :src="logo" alt="">
      </div>
      <m-menu
        accordion
        :expanded-names.sync="expandedNames"
        :selected-names.sync="selectedNames"
        :options="options"
        :label-field="labelField"
      />
    </div>
  </div>
</template>

<script>
import config from '@config'
import { get } from 'lodash-es'
import { buildTreeRelation, findNodeRelationChain, getLang, getMenuName } from '../utils/shared'

export default {
  name: 'AppHeader',
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    inSmallScreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const { tree, flatTree } = buildTreeRelation(get(config, 'menu', []))

    return {
      labelField: 'labelCN',
      options: tree,
      flatOptions: flatTree,
      logo: get(config, 'logo'),
      name: get(config, 'name'),
      expandedNames: [],
      selectedNames: []
    }
  },

  watch: {
    '$route': {
      handler(route) {
        if (route.fullPath === '/') {
          return
        }

        const name = getMenuName(route.fullPath)
        const option = this.flatOptions.find(option => option.name === name)
        if (!option) {
          return
        }

        const chain = findNodeRelationChain(option)
        this.expandedNames = chain.map(c => c.name)
        this.selectedNames = [name]
      },
      immediate: true
    },

    selectedNames(name) {
      const expect = `/${getLang(this.$route.fullPath)}/${name}`
      if (expect === this.$route.fullPath) {
        return
      }

      this.$router.push(expect)
    }
  }
}
</script>

<style lang="less" scoped>
.app-site-sidebar-scroller {
  width: 245px;
  padding: 14px;
  height: 100vh;
  transition: transform .25s;
  background: #fff;
  box-shadow: 0 10px 30px -12px rgb(0 0 0 / 42%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  overflow-y: auto;
}

.app-site-sidebar-fixed {
  position: fixed;
  left: 0;
  flex-shrink: 0;
  z-index: 99;
}

.app-site-sidebar-hidden {
  transform: translateX(-245px);
}

.app-site-sidebar {
  min-height: calc(100vh - 28px);

  .app-site-sidebar-profile {
    display: flex;
    align-items: center;
    padding: 6px 20px 20px;
    border-bottom: 1px solid #eee;

    .app-site-sidebar-logo {
      width: 100px;
      flex-shrink: 0;
    }

    .app-site-sidebar-name {
      font-size: 24px;
    }
  }
}
</style>
