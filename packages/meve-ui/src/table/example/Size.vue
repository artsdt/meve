<template>
  <m-table size="small" :columns="columns" @load="load" />
</template>

<script>
import Table from '..'

function get(current, size) {
  return Array.from({ length: size }, (_, index) => {
    const id = (current - 1) * size + 1 + index
    const title = `Title: ${id}`
    const text = 'Hello Meve!'

    return {
      id,
      title,
      text,
    }
  })
}

export default {
  components: {
    [Table.name]: Table,
  },
  data: () => ({
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
    ],
  }),

  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 3)), 300)
      })
    },
  },
}
</script>
