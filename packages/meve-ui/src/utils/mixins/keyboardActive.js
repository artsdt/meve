export const KeyboardActiveMixin = {
  data: () => ({
    keyboardActiveIndex: 0,
    keyboardLastIndex: 0,
    keyboardDisabledIndexes: [],
    keyboardDisabled: false,
  }),

  computed: {
    canMove() {
      return this.keyboardLastIndex + 1 - this.keyboardDisabledIndexes.length > 1
    },
  },

  methods: {
    handleKeydownActive(event) {
      if (this.keyboardDisabled) {
        return
      }

      switch (event.code) {
        case 'ArrowDown':
          this.nextActiveIndex()
          this.handleKeydownArrow()
          break

        case 'ArrowUp':
          this.prevActiveIndex()
          this.handleKeydownArrow()
          break

        case 'Escape':
          this.handleKeydownEscape()
          break

        case 'Enter':
        case 'NumpadEnter':
          this.handleKeydownEnter(this.keyboardActiveIndex)
          break
      }
    },

    isDisabledIndex() {
      return this.keyboardDisabledIndexes.includes(this.keyboardActiveIndex)
    },

    nextActiveIndex() {
      if (!this.canMove) {
        return
      }

      this.keyboardActiveIndex = this.keyboardActiveIndex === this.keyboardLastIndex ? 0 : this.keyboardActiveIndex + 1

      if (this.isDisabledIndex()) {
        this.nextActiveIndex()
      }
    },

    prevActiveIndex() {
      if (!this.canMove) {
        return
      }

      this.keyboardActiveIndex = this.keyboardActiveIndex === 0 ? this.keyboardLastIndex : this.keyboardActiveIndex - 1

      if (this.isDisabledIndex()) {
        this.prevActiveIndex()
      }
    },

    // wait implement
    handleKeydownEnter() {},

    // wait implement
    handleKeydownArrow() {},

    // wait implement
    handleKeydownEscape() {},
  },

  mounted() {
    window.addEventListener('keydown', this.handleKeydownActive)
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydownActive)
  },
}
