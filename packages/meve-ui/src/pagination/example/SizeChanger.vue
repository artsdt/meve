<template>
  <m-space direction="column" size="large">
    <m-pagination show-size-changer :current.sync="current" :size.sync="size" :total="100" />
    <m-pagination show-size-changer :current.sync="current" :size.sync="size" :total="100" :size-option="[10, 20]" />
  </m-space>
</template>

<script>
import Pagination from '..'
import Space from '../../space'

export default {
  components: {
    [Pagination.name]: Pagination,
    [Space.name]: Space,
  },
  data: () => ({
    current: 1,
    size: 10,
  }),
}
</script>
