<template>
  <div class="example">
    <m-tabs v-model="value">
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
      <m-tab>Option</m-tab>
    </m-tabs>

    <m-tabs-items class="tabs-items" v-model="value">
      <m-tab-item>
        To a certain extent, talking about what “the metaverse” means is a bit like having a discussion about what “the
        internet” means in the 1970s. To a certain extent, talking about what “the metaverse” means is a bit like having
        a discussion about what “the internet” means in the 1970s.
      </m-tab-item>
      <m-tab-item>
        To a certain extent, talking about what “the metaverse” means is a bit like having a discussion about what “the
        internet” means in the 1970s. To a certain extent, talking about what “the metaverse” means is a bit like having
        a discussion about what “the internet” means in the 1970s.
      </m-tab-item>
      <m-tab-item>
        To a certain extent, talking about what “the metaverse” means is a bit like having a discussion about what “the
        internet” means in the 1970s. To a certain extent, talking about what “the metaverse” means is a bit like having
        a discussion about what “the internet” means in the 1970s.
      </m-tab-item>
      <m-tab-item>
        To a certain extent, talking about what “the metaverse” means is a bit like having a discussion about what “the
        internet” means in the 1970s. To a certain extent, talking about what “the metaverse” means is a bit like having
        a discussion about what “the internet” means in the 1970s.
      </m-tab-item>
      <m-tab-item>
        To a certain extent, talking about what “the metaverse” means is a bit like having a discussion about what “the
        internet” means in the 1970s. To a certain extent, talking about what “the metaverse” means is a bit like having
        a discussion about what “the internet” means in the 1970s.
      </m-tab-item>
    </m-tabs-items>
  </div>
</template>

<script>
import Tabs from '..'
import Tab from '../../tab'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'
import Card from '../../card'

export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [TabsItems.name]: TabsItems,
    [TabItem.name]: TabItem,
    [Card.name]: Card,
  },
  data: () => ({
    value: 0,
  }),
}
</script>

<style>
.tabs-items {
  margin: 10px;
  color: #555;
}
</style>
