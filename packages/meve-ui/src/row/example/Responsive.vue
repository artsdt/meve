<template>
  <div class="example">
    <m-row :gutter="10">
      <m-col :xs="24" :sm="12" :md="8" :lg="4" :xl="2">
        <div class="col">Responsive</div>
      </m-col>
      <m-col :xs="24" :sm="12" :md="8" :lg="4" :xl="2">
        <div class="col">Responsive</div>
      </m-col>
      <m-col :xs="24" :sm="12" :md="8" :lg="4" :xl="2">
        <div class="col">Responsive</div>
      </m-col>
    </m-row>

    <m-row class="last" :gutter="10">
      <m-col
        :xs="{ span: 22, offset: 2 }"
        :sm="{ span: 10, offset: 2 }"
        :md="{ span: 6, offset: 2 }"
        :lg="{ span: 3, offset: 1 }"
        :xl="{ span: 2 }"
      >
        <div class="col">Responsive</div>
      </m-col>
      <m-col
        :xs="{ span: 22, offset: 2 }"
        :sm="{ span: 10, offset: 2 }"
        :md="{ span: 6, offset: 2 }"
        :lg="{ span: 3, offset: 1 }"
        :xl="{ span: 2 }"
      >
        <div class="col">Responsive</div>
      </m-col>
      <m-col
        :xs="{ span: 22, offset: 2 }"
        :sm="{ span: 10, offset: 2 }"
        :md="{ span: 6, offset: 2 }"
        :lg="{ span: 3, offset: 1 }"
        :xl="{ span: 2 }"
      >
        <div class="col">Responsive</div>
      </m-col>
    </m-row>
  </div>
</template>

<script>
import Row from '..'
import Col from '../../col'

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
  },
}
</script>

<style scoped>
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  color: #fff;
  background: #5e72e4;
  margin-bottom: 10px;
}

.last {
  margin-bottom: -10px;
}
</style>
