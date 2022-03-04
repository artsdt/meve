export function createRouterMixin() {
  return {
    mounted() {
      window.addEventListener('hashchange', this.handleRouteChange)
      window.addEventListener('popstate', this.handleRouteChange)
    },

    beforeDestroy() {
      window.removeEventListener('hashchange', this.handleRouteChange)
      window.removeEventListener('popstate', this.handleRouteChange)
    },
  }
}
