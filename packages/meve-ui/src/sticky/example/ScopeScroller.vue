<template>
  <div class="scroller">
    <div class="item">Item: 1</div>
    <div class="item">Item: 2</div>
    <m-sticky>
      <m-button type="primary">黏在局部滚动容器的顶部</m-button>
    </m-sticky>
    <div class="item">Item: 3</div>
    <div class="item">Item: 4</div>
    <div class="item">Item: 5</div>
    <div class="item">Item: 6</div>
    <div class="item">Item: 7</div>
    <div class="item">Item: 8</div>
    <div class="item">Item: 9</div>
    <div class="item">Item: 10</div>
    <div class="item">Item: 11</div>
    <div class="item">Item: 12</div>
    <div class="item">Item: 13</div>
    <div class="item">Item: 14</div>
    <div class="item">Item: 15</div>
  </div>
</template>

<script>
import Sticky from '..'
import Button from '../../button'

export default {
  components: {
    [Sticky.name]: Sticky,
    [Button.name]: Button,
  },
}
</script>

<style scoped>
.scroller {
  width: 100%;
  height: 300px;
  overflow: auto;
  background: #f0f1f5;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  margin: 20px 0;
}
</style>
