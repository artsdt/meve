<template>
  <m-pagination show-quick-jumper :current.sync="current" :size.sync="size" :total="100" />
</template>

<script>
import Pagination from '..'

export default {
  components: {
    [Pagination.name]: Pagination,
  },
  data: () => ({
    current: 1,
    size: 10,
  }),
}
</script>
