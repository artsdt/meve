<template>
  <m-table ref="table" :columns="columns" @load="load">
    <template #action>
      <m-button size="small">Action</m-button>
    </template>

    <template #footer>
      <m-pagination
        show-quick-jumper
        show-size-changer
        :current.sync="current"
        :size.sync="size"
        :total="total"
        :show-total="(total, [start, end]) => `共 ${total} 条，当前${start}-${end}条`"
        @change="handlePageChange"
      />
    </template>
  </m-table>
</template>

<script>
import Table from '..'
import Pagination from '../../pagination'
import Button from '../../button'

function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id: id.toString(),
      title,
      text,
    }
  })
}

export default {
  components: {
    [Table.name]: Table,
    [Pagination.name]: Pagination,
    [Button.name]: Button,
  },

  data: () => ({
    current: 1,
    size: 10,
    total: 0,
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'title',
        title: 'Title',
      },
      {
        key: 'text',
        title: 'Text',
      },
      {
        key: 'action',
        title: 'Action',
      },
    ],
  }),

  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.total = 100
          resolve(get(this.current, this.size))
        }, 300)
      })
    },

    handlePageChange() {
      this.$refs.table.load()
    },
  },
}
</script>
