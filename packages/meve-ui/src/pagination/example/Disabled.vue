<template>
  <m-pagination
    disabled
    show-size-changer
    show-quick-jumper
    :current.sync="current"
    :size.sync="size"
    :total="100"
    :show-total="(total) => `共 ${total} 条`"
  />
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
