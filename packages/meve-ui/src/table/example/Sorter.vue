<template>
  <m-table :columns="columns" @load="load" />
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
        sorter: true,
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
    load({ sorters }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = get(1, 3)

          if (sorters.id === 'asc') {
            data.sort((a, b) => a.id - b.id)
          } else if (sorters.id === 'desc') {
            data.sort((a, b) => b.id - a.id)
          }

          resolve(data)
        }, 300)
      })
    },
  },
}
</script>
