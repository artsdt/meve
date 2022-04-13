<template>
  <m-space direction="column" size="large">
    <m-pagination :current.sync="current" :size.sync="size" :total="100" :show-total="(total) => `共 ${total} 条`" />
    <m-pagination
      :current.sync="current"
      :size.sync="size"
      :total="100"
      :show-total="(total, [start, end]) => `共 ${total} 条，当前 ${start} 到  ${end} 条`"
    />
  </m-space>
</template>

<script>
import Space from '../../space'
import Pagination from '..'

export default {
  components: {
    [Space.name]: Space,
    [Pagination.name]: Pagination,
  },
  data: () => ({
    current: 1,
    size: 10,
  }),
}
</script>
