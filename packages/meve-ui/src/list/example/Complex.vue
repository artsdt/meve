<template>
  <div class="example">
    <m-tabs v-model="current">
      <m-tab>基本使用</m-tab>
      <m-tab>加载失败</m-tab>
      <m-tab>自定义</m-tab>
    </m-tabs>

    <m-tabs-items v-model="current">
      <m-tab-item>
        <m-list :finished="finished" :loading.sync="loading" @load="load">
          <div class="item" :key="item" v-for="item in list">Item: {{ item }}</div>
        </m-list>
      </m-tab-item>
      <m-tab-item>
        <m-list :finished="finished2" :loading.sync="loading2" :error.sync="error2" @load="load2">
          <div class="item" :key="item" v-for="item in list2">Item: {{ item }}</div>
        </m-list>
      </m-tab-item>
      <m-tab-item>
        <m-list
          loading-text="米薇正在努力加载..."
          finished-text="米薇找不到更多数据了..."
          error-text-text="米薇发现异常，点击此处可以重试..."
          :finished="finished3"
          :loading.sync="loading3"
          @load="load3"
        >
          <div class="item" :key="item" v-for="item in list3">Item: {{ item }}</div>
        </m-list>
      </m-tab-item>
    </m-tabs-items>
  </div>
</template>

<script>
import List from '..'
import Tabs from '../../tabs'
import Tab from '../../tab'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'

export default {
  components: {
    [List.name]: List,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [TabsItems.name]: TabsItems,
    [TabItem.name]: TabItem,
  },
  data: () => ({
    current: 0,

    finished: false,
    error: false,
    loading: false,

    finished2: false,
    error2: false,
    loading2: false,

    finished3: false,
    error3: false,
    loading3: false,

    list: [],
    list2: [],
    list3: [],
  }),
  methods: {
    load() {
      if (this.current !== 0) {
        this.loading = false
        return
      }

      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        this.loading = false

        if (this.list.length >= 30) {
          this.finished = true
        }
      }, 1000)
    },

    load2() {
      if (this.current !== 1) {
        this.loading2 = false
        return
      }

      setTimeout(() => {
        if (this.list2.length === 20) {
          this.error2 = true
          this.loading2 = false
          return
        }

        for (let i = 0; i < 10; i++) {
          this.list2.push(this.list2.length + 1)
        }

        this.loading2 = false
      }, 1000)
    },

    load3() {
      if (this.current !== 2) {
        this.loading3 = false
        return
      }

      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list3.push(this.list3.length + 1)
        }

        this.loading3 = false

        if (this.list3.length >= 30) {
          this.finished3 = true
        }
      }, 1000)
    },
  },
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 0;
  background: #f0f1f5;
  color: #555;
}
</style>
