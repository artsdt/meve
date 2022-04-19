<template>
  <m-table :columns="columns" @load="load">
    <template #title="{ row }">
      <m-input v-model="row.title" />
    </template>
    <template #text="{ row }">
      <m-input v-model="row.text" />
    </template>
    <template #action="{ row }">
      <m-button size="small" @click="showRow(row)">Action</m-button>
    </template>
  </m-table>
</template>

<script>
import Table from '..'
import Input from '../../input'
import Button from '../../button'
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
    [Input.name]: Input,
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
      },
    ],
  }),

  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(get(1, 3)), 300)
      })
    },

    showRow(row) {
      Message.warning(JSON.stringify(row))
    },
  },
}
</script>
