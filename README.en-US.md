<div align="center">
  <a href="https://artsdt.github.io/meve/">
    <img src="https://artsdt.github.io/meve/logo.svg" width="150">
  </a>
  <h1>MEVE UI</h1>
  <p>Vue2 UI Lib Referenced Argon Design System</p>
  <p>
    <a href="https://artsdt.github.io/meve/">Documentation</a>
  </p>
</div>

### Quickstart

#### CDN

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

#### Webpack / Vite

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

### Repo Status WIP!

Currently in development, do not use in production environment.

Documentation currently only supports Chinese

| Vue Version | Dev Progress | Status |
| --- | --- | --- |
| Vue2 | 60% | WIP |
| Vue3 | 0% | PENDING |