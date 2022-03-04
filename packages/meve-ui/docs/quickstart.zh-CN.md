# 快速开始

### CDN

单页面使用CDN的方式使用组件库

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script src="https://cdn.jsdelivr.net/npm/@meve/ui/umd/meve.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@meve/touch-emulator/iife.js"></script>
<script>
  Vue.use(Meve)
  
  new Vue({
    template: '<m-button>Meve</m-button>'
  }).$mount('#app')
</script>
```

### Webpack / Vite

在构建工具中使用组件库，支持`Webpack`和`Vite`

```shell
# Install with npm or yarn or pnpm

# npm
npm i @meve/ui @meve/touch-emulator -S

# yarn
yarn add @meve/ui @meve/touch-emulator

# pnpm
pnpm add @meve/ui @meve/touch-emulator
```

```js
import Vue from 'vue'
import App from './App.vue'
import Meve from '@meve/ui'
import '@meve/ui/es/style.js'
import '@meve/touch-emulator'

Vue.use(Meve)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

### 仓库当前处于开发阶段!

当前处于开发阶段, 暂不推荐在生产环境中使用.