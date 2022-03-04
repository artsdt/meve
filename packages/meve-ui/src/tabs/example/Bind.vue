<template>
  <m-tabs v-model="value">
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
