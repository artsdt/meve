import Popup from '../popup'
import Button from '../button'
import Icon from '../icon'
import { createNamespace } from '../utils/create'
import { props } from './props'

import '../button/button.less'
import '../icon/icon.less'
import '../popup/popup.less'
import '../styles/common.less'
import './dialog.less'

const { createComponent, namespace } = createNamespace('dialog')

const DialogPlugin = createComponent({
  props,
  data: () => ({
    show: false,
    localCloseOnClickOverlay: false,
  }),

  watch: {
    value: {
      handler(newValue) {
        this.show = newValue
      },
      immediate: true,
    },

    closeOnClickOverlay: {
      handler(newValue) {
        if (this.beforeClose) {
          this.localCloseOnClickOverlay = false
          return
        }

        this.localCloseOnClickOverlay = newValue
      },
      immediate: true,
    },
  },

  methods: {
    handleOpen() {
      this.$emit('open')
    },

    handleOpened() {
      this.$emit('opened')
    },

    handleClose() {
      this.$emit('close')
    },

    handleClosed() {
      this.$emit('closed')
    },

    handleRouteChange() {
      this.$emit('route-change')
    },

    done() {
      this.$emit('input', false)
    },

    handleClickOverlay() {
      this.$emit('click-overlay')

      if (!this.closeOnClickOverlay) {
        return
      }

      if (this.beforeClose) {
        this.beforeClose('close', this.done.bind(this))
        return
      }

      this.done()
    },

    handleClickCloseButton() {
      if (this.beforeClose) {
        this.beforeClose('close', this.done.bind(this))
        return
      }

      this.done()
    },

    confirm() {
      this.$emit('confirm')

      if (this.beforeClose) {
        this.beforeClose('confirm', this.done.bind(this))
        return
      }

      this.done()
    },

    cancel() {
      this.$emit('cancel')

      if (this.beforeClose) {
        this.beforeClose('cancel', this.done.bind(this))
        return
      }

      this.done()
    },

    renderMessage() {
      if (this.hasSlots()) {
        return this.slots()
      }

      if (this.message) {
        return (
          <div class={namespace('__message')} style={{ textAlign: this.messageAlign }}>
            {this.message}
          </div>
        )
      }
    },

    renderTitle() {
      if (this.hasSlots('title')) {
        return this.slots('title')
      }

      return <div class={namespace('__title')}>{this.title ?? '提示'}</div>
    },

    renderFooter() {
      if (this.hasSlots('footer')) {
        return this.slots('footer')
      }

      return (
        <div class={namespace('__footer')}>
          {this.confirmButton && (
            <Button
              class={namespace('__confirm-button')}
              dialog-cover
              size="large"
              type={this.confirmButtonType}
              onClick={this.confirm}
            >
              {this.confirmButtonText ?? '确认'}
            </Button>
          )}
          {this.cancelButton && (
            <Button
              class={namespace('__cancel-button')}
              dialog-cover
              size="large"
              type={this.cancelButtonType}
              text={true}
              onClick={this.cancel}
            >
              {this.cancelButtonText ?? '取消'}
            </Button>
          )}
        </div>
      )
    },
  },

  render() {
    const {
      show,
      overlay,
      overlayClass,
      lockScroll,
      localCloseOnClickOverlay,
      handleOpen,
      handleOpened,
      handleClose,
      handleClosed,
      handleClickOverlay,
      handleRouteChange,
    } = this

    return (
      <Popup
        class={namespace()}
        dialog-cover
        value={show}
        overlay={overlay}
        overlayClass={overlayClass}
        lockScroll={lockScroll}
        closeOnClickOverlay={localCloseOnClickOverlay}
        onOpen={handleOpen}
        onOpened={handleOpened}
        onClose={handleClose}
        onClosed={handleClosed}
        onClickOverlay={handleClickOverlay}
        onRouteChange={handleRouteChange}
      >
        <div class={namespace('__container')}>
          <div class={namespace('__title-wrapper')}>
            {this.renderTitle()}
            <Button
              class={namespace('__close-button')}
              dialog-cover
              text={true}
              round={true}
              onClick={this.handleClickCloseButton}
            >
              <Icon name="close" />
            </Button>
          </div>

          {this.renderMessage()}
          {this.renderFooter()}
        </div>
      </Popup>
    )
  },
})

export const _DialogComponent = DialogPlugin

export default DialogPlugin
