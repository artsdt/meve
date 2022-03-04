<template>
  <m-tabs item-direction="vertical" v-model="value">
    <m-tab>
      <m-icon name="information" />
      <span>Option</span>
    </m-tab>
    <m-tab>
      <m-icon name="information" />
      <span>Option</span>
    </m-tab>
    <m-tab>
      <m-icon name="information" />
      <span>Option</span>
    </m-tab>
    <m-tab>
      <m-icon name="information" />
      <span>Option</span>
    </m-tab>
    <m-tab>
      <m-icon name="information" />
      <span>Option</span>
    </m-tab>
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
