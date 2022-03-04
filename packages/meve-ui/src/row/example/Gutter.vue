<template>
  <div class="example">
    <m-row :gutter="10">
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
    </m-row>
    <m-row class="last" :gutter="10">
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
      <m-col :span="8"><div class="col">span: 8</div></m-col>
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
