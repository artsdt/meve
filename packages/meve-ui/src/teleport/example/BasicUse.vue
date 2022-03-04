<template>
  <div>
    <m-teleport :disabled="disabled" :to="to">
      <video controls src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
    </m-teleport>

    <button @click="push">push</button>
    <button @click="disabled = !disabled">disabled</button>
    <button @click="to = to === 'body' ? '.meve-site-doc' : 'body'">to</button>
  </div>
</template>

<script>
import Teleport from '..'

let count = 0

export default {
  components: {
    [Teleport.name]: Teleport,
  },
  data: () => ({
    items: [],
    disabled: false,
    to: 'body',
  }),
  methods: {
    push() {
      this.items.push(count++)
    },
    inc() {
      this.state++
    },
  },
}
</script>
