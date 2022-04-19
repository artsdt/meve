<template>
  <m-table :selected-keys.sync="selectedKeys" :columns="columns" @load="load" />
</template>

<script>
import Table from '..'
import Message from '../../message'

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
    selectedKeys: [],
    columns: [
      {
        selection: true,
        style: {
          width: '40px',
        },
      },
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

  watch: {
    selectedKeys(keys) {
      Message.warning(keys.toString())
    },
  },

  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 3)), 300)
      })
    },
  },
}
</script>
