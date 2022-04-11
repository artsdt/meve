import Ripple from '../ripple'
import Lazy from '../lazy'
import Popup from '../popup'
import Button from '../button'
import Space from '../space'
import Icon from '../icon'
import { props } from './props'
import { createNamespace } from '../utils/create'
import { toSizeUnit } from '../utils/elements'
import { nextTick } from '../utils/components'

import '../styles/common.less'
import '../ripple/ripple.less'
import '../button/button.less'
import '../popup/popup.less'
import '../icon/icon.less'
import '../space/space.less'
import './image.less'
import { KeyboardActiveMixin } from '../utils/mixins/keyboardActive'

const { createComponent, namespace } = createNamespace('image')

const MIN_SCALE = 0.5
const SCALE_RATIO = 0.5
const ROTATE_RATIO = 90
const ZOOM_ANIMATION_DURATION = 200

const ImagePlugin = createComponent({
  directives: {
    Ripple,
    Lazy,
  },

  mixins: [KeyboardActiveMixin],

  props,

  watch: {
    showPreview(newValue) {
      if (newValue) {
        this.resetAll()
      }
    },
  },

  data: () => ({
    initPreview: false,
    showPreview: false,
    scale: 0.5,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    prevX: 0,
    prevY: 0,
    touching: false,
    transitionDuration: undefined,
  }),

  methods: {
    handleLoad(e) {
      const el = e.currentTarget

      if (this.lazy) {
        el._lazy.state === 'success' && this.$emit('load', e)
        el._lazy.state === 'error' && this.$emit('error', e)
      } else {
        this.$emit('load', e)
      }
    },

    handleError(e) {
      !this.lazy && this.$emit('error', e)
    },

    async handleClick(e) {
      this.$emit('click', e)

      if (this.previewDisabled) {
        return
      }

      if (!this.initPreview) {
        this.initPreview = true
        await nextTick()
      }

      this.showPreview = true
      this.keyboardDisabled = false
    },

    // implement for KeyboardActiveMixin
    handleKeydownEscape() {
      this.closePreview()
    },

    resetTranslate() {
      this.translateX = 0
      this.translateY = 0
    },

    resetAll() {
      this.resetTranslate()
      this.scale = 0.5
      this.rotate = 0
      this.enableAnimation()
    },

    enableAnimation() {
      this.transitionDuration = ZOOM_ANIMATION_DURATION

      setTimeout(() => {
        this.transitionDuration = 0
      }, ZOOM_ANIMATION_DURATION)
    },

    zoomIn() {
      this.scale += SCALE_RATIO
      this.enableAnimation()
    },

    zoomOut() {
      if (this.scale <= MIN_SCALE) {
        return
      }

      this.scale -= SCALE_RATIO
      this.enableAnimation()
    },

    rotateLeft() {
      this.rotate -= ROTATE_RATIO
      this.enableAnimation()
    },

    rotateRight() {
      this.rotate += ROTATE_RATIO
      this.enableAnimation()
    },

    renderLazyImage() {
      return (
        <img
          class={[namespace('__image'), this.previewDisabled ? namespace('--preview-disabled') : null]}
          alt={this.alt}
          lazy-error={this.error}
          lazy-loading={this.loading}
          v-lazy={this.src}
          style={{ objectFit: this.fit }}
          onLoad={this.handleLoad}
          onError={this.handleError}
          onClick={this.handleClick}
        />
      )
    },

    renderImage() {
      return (
        <img
          class={[namespace('__image'), this.previewDisabled ? namespace('--preview-disabled') : null]}
          alt={this.alt}
          src={this.src}
          style={{ objectFit: this.fit }}
          onLoad={this.handleLoad}
          onError={this.handleError}
          onClick={this.handleClick}
        />
      )
    },

    closePreview() {
      this.showPreview = false
      this.keyboardDisabled = true
    },

    handleTouchstart(event) {
      this.touching = true
      const { touches } = event
      this.prevX = touches[0].clientX
      this.prevY = touches[0].clientY
    },

    handleTouchmove(event) {
      if (!this.touching) {
        return
      }

      const { touches } = event
      const { clientX, clientY } = touches[0]

      const moveX = clientX - this.prevX
      const moveY = clientY - this.prevY

      this.translateX += moveX / this.scale
      this.translateY += moveY / this.scale

      this.prevX = clientX
      this.prevY = clientY
    },

    handleTouchend() {
      this.touching = false
    },

    renderPreview() {
      return (
        <Popup class={namespace('__popup')} image-cover v-model={this.showPreview}>
          <div
            class={namespace('__preview-container')}
            style={{
              transform: `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`,
              transitionDuration: `${this.transitionDuration}ms`,
            }}
            onTouchstart={this.handleTouchstart}
            onTouchmove={this.handleTouchmove}
            onTouchend={this.handleTouchend}
          >
            <img
              class={namespace('__preview-image')}
              src={this.src}
              alt={this.alt}
              style={{
                transform: `rotate(${this.rotate}deg)`,
                transitionDuration: `${this.transitionDuration}ms`,
              }}
            />
          </div>

          <div class={namespace('__preview-toolbar')}>
            <Space wrap={false}>
              <Button class={namespace('__reset-all')} image-cover type="primary" round onClick={this.resetAll}>
                <Icon name="map-marker-outline" />
              </Button>
              <Button class={namespace('__rotate-left')} image-cover type="primary" round onClick={this.rotateLeft}>
                <Icon name="rotate-left" />
              </Button>
              <Button class={namespace('__rotate-right')} image-cover type="primary" round onClick={this.rotateRight}>
                <Icon name="rotate-right" />
              </Button>
              <Button class={namespace('__zoom-in')} image-cover type="primary" round onClick={this.zoomIn}>
                <Icon name="magnify-plus-outline" />
              </Button>
              <Button class={namespace('__zoom-out')} image-cover type="primary" round onClick={this.zoomOut}>
                <Icon name="magnify-minus-outline" />
              </Button>
              <Button class={namespace('__close-preview')} image-cover type="primary" round onClick={this.closePreview}>
                <Icon name="close" />
              </Button>
            </Space>
          </div>
        </Popup>
      )
    },
  },

  render() {
    const { width, height, radius, block, ripple, lazy, initPreview, previewDisabled } = this

    return (
      <div
        class={[namespace(), 'm--box', block ? null : 'm--inline-block']}
        style={{
          width: toSizeUnit(width),
          height: toSizeUnit(height),
          borderRadius: toSizeUnit(radius),
        }}
      >
        <div
          class={[namespace('__image-container'), 'm--box', block ? null : 'm--inline-block']}
          style={{
            width: toSizeUnit(width),
            height: toSizeUnit(height),
            borderRadius: toSizeUnit(radius),
          }}
          v-ripple={{ disabled: !ripple }}
        >
          {lazy ? this.renderLazyImage() : this.renderImage()}
        </div>

        {initPreview && !previewDisabled && this.renderPreview()}
      </div>
    )
  },
})

export const _ImageComponent = ImagePlugin

export default ImagePlugin
