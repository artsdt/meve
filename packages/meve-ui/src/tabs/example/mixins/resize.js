export default {
  data: () => ({
    sticky: true,
  }),

  methods: {
    handleMessage(e) {
      if (e.data !== 'action: menu-action-click') {
        return
      }
      this.sticky = false

      setTimeout(() => {
        this.sticky = true
      }, 250)
    },
  },

  mounted() {
    window.addEventListener('message', this.handleMessage)
  },

  beforeDestroy() {
    window.removeEventListener('message', this.handleMessage)
  },
}
