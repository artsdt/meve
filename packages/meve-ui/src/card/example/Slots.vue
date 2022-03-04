<template>
  <m-card>
    <template #title>
      <div class="title">自定义标题</div>
    </template>

    <template #subtitle>
      <small class="subtitle">自定义副标题</small>
    </template>

    <template #default>
      <div class="description">
        <m-button>下面有一个按钮</m-button>
      </div>
    </template>

    <template #extra>
      <div class="extra">
        <m-button>上面有一个按钮</m-button>
      </div>
    </template>
  </m-card>
</template>

<script>
import Card from '..'
import Button from '../../button'

export default {
  components: {
    [Card.name]: Card,
    [Button.name]: Button,
  },
}
</script>

<style scoped>
.title {
  color: #5e72e4;
  font-size: 18px;
}

.subtitle {
  font-size: 12px;
  color: #5e72e4;
}

.description {
  padding: 20px;
  color: #5e72e4;
}

.extra {
  padding: 0 20px 20px;
}
</style>
