<template>
  <div ref="example" class="example">
    <m-tabs ref="tabs" v-if="isRemoveParentScroller" :sticky="sticky" :offset-top="66" v-model="value">
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
    </m-tabs>
  </div>
</template>

<script>
import Tabs from '..'
import Tab from '../../tab'
import resize from './mixins/resize'

export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
  },
  mixins: [resize],
  data: () => ({
    value: 0,
    isRemoveParentScroller: false,
  }),
  mounted() {
    this.$refs.example.parentNode.parentNode.style.overflow = 'visible'
    this.isRemoveParentScroller = true
  },
}
</script>
