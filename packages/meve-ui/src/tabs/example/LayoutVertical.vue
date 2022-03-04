<template>
  <m-tabs class="tabs" layout-direction="vertical" v-model="value">
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
    <m-tab>Option</m-tab>
  </m-tabs>
</template>

<script>
import Tabs from '..'
import Tab from '../../tab'

export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
  },
  data: () => ({
    value: 0,
  }),
}
</script>

<style scoped>
.tabs {
  width: 210px;
  height: 270px;
}
</style>
