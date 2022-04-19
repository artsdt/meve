<template>
  <m-table border :columns="columns" @load="load" />
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
        headColSpan: 2,
        bodySpan(rowIndex) {
          if (rowIndex === 1) {
            return { colSpan: 2 }
          }
          if (rowIndex === 3) {
            return { rowSpan: 2 }
          }
        },
      },
      {
        key: 'text',
        title: 'Text',
        headColSpan: 0,
        bodySpan(rowIndex) {
          if (rowIndex === 1) {
            return { colSpan: 0 }
          }
          if (rowIndex === 4) {
            return { rowSpan: 0 }
          }
        },
      },
    ],
  }),

  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 5)), 300)
      })
    },
  },
}
</script>
