<template>
  <m-tabs v-model="value">
    <m-tab name="option 1">Option</m-tab>
    <m-tab name="option 2">Option</m-tab>
    <m-tab name="option 3">Option</m-tab>
    <m-tab name="option 4">Option</m-tab>
    <m-tab name="option 5">Option</m-tab>
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
    value: 'option 1',
  }),
}
</script>
