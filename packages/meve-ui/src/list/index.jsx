import Loading from '../loading'
import Ripple from '../ripple'
import { createNamespace } from '../utils/create'
import { toPxNum, getParentScroller } from '../utils/elements'
import { nextTick } from '../utils/components'
import { props } from './props'

import '../styles/common.less'
import '../loading/loading.less'
import '../ripple/ripple.less'
import './list.less'

const { createComponent, namespace } = createNamespace('list')

const ListPlugin = createComponent({
  props,
  directives: { Ripple },

  data: () => ({
    scroller: null,
  }),

  mounted() {
    this.initScroller()
  },

  beforeDestroy() {
    this.scroller.removeEventListener('scroll', this.check)
  },

  methods: {
    initScroller() {
      const { immediateCheck, check, list } = this

      this.scroller = getParentScroller(list)
      immediateCheck && check()
      this.scroller.addEventListener('scroll', check)
    },

    load() {
      this.$emit('update:error', false)
      this.$emit('update:loading', true)
      this.$emit('load')
    },

    async check() {
      const { loading, finished, error, load, isReachBottom } = this

      await nextTick()

      if (!loading && !finished && !error && isReachBottom()) {
        load()
      }
    },

    isReachBottom() {
      const {
        scroller,
        $refs: { detector },
        offset,
      } = this

      const containerBottom = scroller === window ? window.innerHeight : scroller.getBoundingClientRect().bottom

      const { bottom: detectorBottom } = detector.getBoundingClientRect()

      return detectorBottom - toPxNum(offset) <= containerBottom
    },

    renderLoading() {
      const { loading, loadingText } = this

      if (!loading) {
        return
      }

      if (this.hasSlots('loading')) {
        return this.slots('loading')
      }

      return (
        <div class={namespace('__loading')}>
          <div class={namespace('__loading-text')}>{loadingText ?? '加载中'}</div>
          <Loading list-cover class={namespace('__loading-icon')} size={22} loading={true} />
        </div>
      )
    },

    renderFinished() {
      const { finished, finishedText } = this

      if (!finished) {
        return
      }

      if (this.hasSlots('finished')) {
        return this.slots('finished')
      }

      return <div class={namespace('__finished')}>{finishedText ?? '暂无更多'}</div>
    },

    renderError() {
      const { error, errorText, load } = this

      if (!error) {
        return
      }

      if (this.hasSlots('error')) {
        return this.slots('error')
      }

      return (
        <div class={namespace('__error')} v-ripple onClick={load}>
          {errorText ?? '加载失败, 点击重试'}
        </div>
      )
    },
  },

  render() {
    return (
      <div ref="list" class={[namespace(), 'm--box']}>
        {this.slots()}
        {this.renderLoading()}
        {this.renderFinished()}
        {this.renderError()}

        <div ref="detector" class={namespace('__detector')} />
      </div>
    )
  },
})

export const _ListComponent = ListPlugin

export default ListPlugin
