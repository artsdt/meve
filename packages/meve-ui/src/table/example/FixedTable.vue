<template>
  <m-table :scroller="{ x: 800, y: 260 }" :columns="columns" @load="load">
    <template #action>
      <m-button size="small">Action</m-button>
    </template>
  </m-table>
</template>

<script>
import Table from '..'
import Button from '../../button'

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
    [Button.name]: Button,
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
      {
        key: 'action',
        title: 'Action',
        sticky: true,
        style: {
          right: '0px',
        },
      },
    ],
  }),

  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 10)), 300)
      })
    },
  },
}
</script>
