export default {
  data: () => ({
    running: false,
  }),

  methods: {
    handleMessage(e) {
      if (e.data !== 'action: menu-action-click') {
        return
      }
      this.running = true

      this.resizeRaf()

      setTimeout(() => {
        this.running = false
      }, 250)
    },

    resizeRaf() {
      if (!this.running) {
        return
      }

      requestAnimationFrame(() => {
        this.$refs.swipe.resize()
        this.resizeRaf()
      })
    },
  },

  mounted() {
    window.addEventListener('message', this.handleMessage)
  },

  beforeDestroy() {
    window.removeEventListener('message', this.handleMessage)
  },
}
