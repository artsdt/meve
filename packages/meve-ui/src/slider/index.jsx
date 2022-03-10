import FormItem from '../form-item'
import { createNamespace } from '../utils/create'
import { props } from './props'
import { isArray, isNumber, range, toNumber } from '../utils/shared'

import '../styles/common.less'
import '../form-details/formDetails.less'
import '../form-item/formItem.less'
import './slider.less'
import { createChildrenMixin } from '../utils/mixins/relation'
import { toSizeUnit } from '../utils/elements'

const { createComponent, namespace } = createNamespace('slider')

const TOOLTIP_CLOSE_DELAY = 300

const SliderPlugin = createComponent({
  mixins: [createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' })],

  props,

  data: () => ({
    touching: false,
    ratio: 0,
    stepRatio: 0,
    trackLeft: undefined,
    trackTop: undefined,
    trackWidth: undefined,
    trackHeight: undefined,
    buttonZIndex: 1,
    reverseButtonZIndex: 1,
    // range mode
    reverseRatio: 0,
    showTooltip: false,
    showReverseTooltip: false,
    tooltipCloser: null,
    errorMessage: '',
  }),

  computed: {
    fullStep() {
      return toNumber(this.max) - toNumber(this.min)
    },

    minNum() {
      return toNumber(this.min)
    },

    maxNum() {
      return toNumber(this.max)
    },
  },

  watch: {
    value: {
      handler() {
        this.$nextTick(() => {
          const min = this.minNum
          const max = this.maxNum

          if (this.normalizeValue()) {
            return
          }

          if (this.range) {
            const [value, reverseValue] = this.value
            this.ratio = ((value - min) / this.fullStep) * 100
            this.reverseRatio = ((max - reverseValue) / this.fullStep) * 100
          } else {
            this.ratio = ((this.value - min) / this.fullStep) * 100
          }
        })
      },
      immediate: true,
    },
  },

  mounted() {
    document.addEventListener('touchmove', this.handleTouchmove, { passive: false })
    document.addEventListener('touchend', this.handleTouchend)
  },

  beforeDestroy() {
    document.removeEventListener('touchmove', this.handleTouchmove)
    document.removeEventListener('touchend', this.handleTouchend)
  },

  methods: {
    // expose
    reset() {
      this.$emit('input', this.range ? [this.minNum, this.maxNum] : this.minNum)
      this.resetValidation()
    },

    // expose
    validate() {
      this.$refs.formItem.validate()
    },

    // expose
    resetValidation() {
      this.$refs.formItem.resetValidation()
    },

    nextTickValidateWithTrigger(trigger) {
      this.$nextTick(() => {
        this.$refs.formItem?.validateWithTrigger(this.validateTrigger, trigger, this.rules, this.value)
      })
    },

    handleTouchstart(event) {
      if (this.disabled || this.form?.disabled || this.readonly || this.form?.readonly) {
        return
      }

      this.resize()

      this.touching = true

      const { clientX, clientY } = event.touches[0]

      this.move(clientX, clientY)
    },

    handleTouchmove(event) {
      event.preventDefault()

      if (!this.touching) {
        return
      }

      const { clientX, clientY } = event.touches[0]

      this.move(clientX, clientY)
    },

    handleTouchend() {
      this.touching = false
      this.buttonZIndex = 1
      this.reverseButtonZIndex = 1

      this.closeTooltip()
    },

    normalizeValue() {
      const min = this.minNum
      const max = this.maxNum

      if (this.range) {
        if (!isArray(this.value) || (isArray(this.value) && this.value.length !== 2)) {
          this.$emit('input', [min, max])
          return true
        }

        const [value, reverseValue] = this.value

        const isOutBounds = value < min || reverseValue > max
        if (isOutBounds) {
          this.$emit('input', [range(value, min, max), range(reverseValue, min, max)])
          return true
        }
      } else if (!isNumber(this.value) || this.value < min || this.value > max) {
          this.$emit('input', min)
          return true
        }
    },

    getNext(clientX, clientY, value, ratio, options = {}) {
      const reverse = options.reverse ?? false
      const min = options.minValue ?? this.minNum
      const max = options.maxValue ?? this.maxNum
      const step = toNumber(this.step)
      const { maxRatio = 100, minRatio = 0 } = options

      const mouseRatio = this.getMouseRatio(clientX, clientY, reverse)
      let nextRatio
      let nextValue

      if (mouseRatio >= maxRatio) {
        nextRatio = maxRatio
        nextValue = max
      } else if (mouseRatio <= minRatio) {
        nextRatio = minRatio
        nextValue = min
      } else {
        const stepCount = this.getStepCount(mouseRatio, ratio)
        nextRatio = range(ratio + stepCount * this.stepRatio, minRatio, maxRatio)
        nextValue = range(value + stepCount * step, min, max)
      }

      return { nextRatio, nextValue }
    },

    getMouseRatio(clientX, clientY, reverse = false) {
      const x = reverse ? this.trackLeft + this.trackWidth - clientX : clientX - this.trackLeft
      const y = reverse ? clientY - this.trackTop : this.trackTop + this.trackHeight - clientY
      return (this.vertical ? y / this.trackHeight : x / this.trackWidth) * 100
    },

    shouldMoveReverse(clientX, clientY) {
      const mouseRatio = this.getMouseRatio(clientX, clientY)
      const reverseButtonDistance = mouseRatio - (100 - this.reverseRatio)
      const buttonDistance = mouseRatio - this.ratio

      if (this.reverseButtonZIndex > this.buttonZIndex) {
        return true
      }

      if (this.reverseButtonZIndex < this.buttonZIndex) {
        return false
      }

      if (reverseButtonDistance > 0) {
        return true
      }

      if (buttonDistance < 0) {
        return false
      }

      return Math.abs(reverseButtonDistance) <= Math.abs(buttonDistance)
    },

    move(clientX, clientY) {
      if (this.range) {
        const value = this.value[0]
        let reverseValue = this.value[1]

        if (this.shouldMoveReverse(clientX, clientY)) {
          this.pullUpReverseButton()

          reverseValue = this.maxNum + this.minNum - reverseValue

          const { nextRatio, nextValue } = this.getNext(clientX, clientY, reverseValue, this.reverseRatio, {
            maxValue: this.maxNum + this.minNum - value,
            maxRatio: 100 - this.ratio,
            reverse: true,
          })

          if (this.reverseRatio === nextRatio || reverseValue === nextValue) {
            return
          }

          this.reverseRatio = nextRatio
          const nextReverseValue = this.maxNum + this.minNum - nextValue
          this.$emit('input', [value, nextReverseValue])
          this.$emit('change', [value, nextReverseValue])
        } else {
          this.pullUpButton()
          const { nextRatio, nextValue } = this.getNext(clientX, clientY, value, this.ratio, {
            maxValue: reverseValue,
            maxRatio: 100 - this.reverseRatio,
          })

          if (this.ratio === nextRatio || value === nextValue) {
            return
          }

          this.ratio = nextRatio
          this.$emit('input', [nextValue, reverseValue])
          this.$emit('change', [nextValue, reverseValue])
        }

        this.nextTickValidateWithTrigger('onChange')
        return
      }

      const { nextRatio, nextValue } = this.getNext(clientX, clientY, this.value, this.ratio)

      if (this.ratio === nextRatio || this.value === nextValue) {
        return
      }

      this.ratio = nextRatio
      this.showTooltip = true
      this.$emit('input', nextValue)
      this.$emit('change', nextValue)
      this.nextTickValidateWithTrigger('onChange')
    },

    resize() {
      this.trackLeft = this.$refs.track.getBoundingClientRect().left
      this.trackTop = this.$refs.track.getBoundingClientRect().top
      this.trackWidth = this.$refs.track.offsetWidth
      this.trackHeight = this.$refs.track.offsetHeight
      this.stepRatio = (toNumber(this.step) / this.fullStep) * 100
    },

    getStepCount(mouseRatio, currentRatio) {
      return Math.round((mouseRatio - currentRatio) / this.stepRatio)
    },

    getButtonStyle() {
      if (this.vertical) {
        return { bottom: `${this.ratio}%`, zIndex: this.buttonZIndex }
      }

      return { left: `${this.ratio}%`, zIndex: this.buttonZIndex }
    },

    getReverseButtonStyle() {
      if (this.vertical) {
        return { top: `${this.reverseRatio}%`, zIndex: this.reverseButtonZIndex }
      }

      return { right: `${this.reverseRatio}%`, zIndex: this.reverseButtonZIndex }
    },

    getRailStyle() {
      if (this.vertical) {
        return { height: `${this.ratio}%` }
      }

      return { width: `${this.ratio}%` }
    },

    getReverseRailStyle() {
      if (this.vertical) {
        return { height: `${this.reverseRatio}%` }
      }

      return { width: `${this.reverseRatio}%` }
    },

    pullUpButton() {
      clearTimeout(this.tooltipCloser)
      this.buttonZIndex = 2
      this.reverseButtonZIndex = 1
      this.showTooltip = true
      this.showReverseTooltip = false
    },

    pullUpReverseButton() {
      clearTimeout(this.tooltipCloser)
      this.buttonZIndex = 1
      this.reverseButtonZIndex = 2
      this.showTooltip = false
      this.showReverseTooltip = true
    },

    openTooltip() {
      if (this.disabled || this.form?.disabled) {
        return
      }

      clearTimeout(this.tooltipCloser)
      this.showTooltip = true
    },

    openReverseTooltip() {
      if (this.disabled || this.form?.disabled) {
        return
      }

      clearTimeout(this.tooltipCloser)
      this.showReverseTooltip = true
    },

    closeTooltip() {
      clearTimeout(this.tooltipCloser)
      this.tooltipCloser = setTimeout(() => {
        this.showTooltip = false
        this.showReverseTooltip = false
      }, TOOLTIP_CLOSE_DELAY)
    },

    handleErrorMessageChange(errorMessage) {
      this.errorMessage = errorMessage
    },

    handleClick(event) {
      if (this.form?.disabled || this.disabled) {
        return
      }

      this.$emit('click', event)
      this.nextTickValidateWithTrigger('onClick')
    },
  },

  render() {
    const {
      form,
      value,
      label,
      disabled,
      rules,
      size,
      errorMessage,
      showTooltip,
      showReverseTooltip,
      vertical,
      verticalHeight,
      range,
      getButtonStyle,
      getReverseButtonStyle,
      getRailStyle,
      getReverseRailStyle,
      closeTooltip,
      openTooltip,
      openReverseTooltip,
      handleTouchstart,
      handleErrorMessageChange,
      handleClick,
    } = this

    return (
      <FormItem
        ref="formItem"
        label={label}
        value={value}
        rules={rules}
        {...{
          on: {
            'error-message-change': handleErrorMessageChange,
          },
        }}
      >
        <div
          class={[
            namespace(),
            'm--box',
            vertical ? namespace('--vertical') : null,
            disabled || form?.disabled ? namespace('--disabled') : null,
          ]}
          onClick={handleClick}
        >
          <div
            ref="track"
            class={[
              namespace('__track'),
              namespace(`--${size}-track`),
              vertical ? namespace(`--${size}-track-vertical`) : null,
              range ? namespace('--track-range') : null,
              range && errorMessage ? namespace('--error') : null,
            ]}
            style={{
              height: vertical ? toSizeUnit(verticalHeight) : undefined,
            }}
            onTouchstart={handleTouchstart}
          >
            <div
              class={[
                namespace('__button'),
                namespace(`--${size}-button`),
                vertical ? namespace('--button-vertical') : null,
                errorMessage ? namespace('--error') : null,
              ]}
              style={getButtonStyle()}
              onMouseenter={openTooltip}
              onMouseleave={closeTooltip}
            >
              <div
                class={[
                  namespace('__tooltip'),
                  namespace(`--${size}-tooltip`),
                  vertical ? namespace('--tooltip-vertical') : null,
                  errorMessage ? namespace('--tooltip-error') : null,
                ]}
                style={{ opacity: showTooltip ? 1 : 0 }}
              >
                {range ? value[0] : value}
              </div>
            </div>
            <div
              class={[
                namespace('__rail'),
                vertical ? namespace('--rail-vertical') : null,
                !range && errorMessage ? namespace('--error') : null,
                range ? namespace('--rail-range') : null,
              ]}
              style={getRailStyle()}
            />
            {range && (
              <div
                class={[
                  namespace('__reverse-button'),
                  namespace(`--${size}-button`),
                  this.vertical ? namespace('--reverse-button-vertical') : null,
                  errorMessage ? namespace('--error') : null,
                ]}
                style={getReverseButtonStyle()}
                onMouseenter={openReverseTooltip}
                onMouseleave={closeTooltip}
              >
                <div
                  class={[
                    namespace('__tooltip'),
                    namespace(`--${size}-tooltip`),
                    vertical ? namespace('--tooltip-vertical') : null,
                    errorMessage ? namespace('--tooltip-error') : null,
                  ]}
                  style={{ opacity: showReverseTooltip ? 1 : 0 }}
                >
                  {value[1]}
                </div>
              </div>
            )}
            {range && (
              <div
                class={[
                  namespace('__reverse-rail'),
                  vertical ? namespace('--reverse-rail-vertical') : null,
                  range ? namespace('--reverse-rail-range') : null,
                ]}
                style={getReverseRailStyle()}
              />
            )}
          </div>
        </div>
      </FormItem>
    )
  },
})

export const _SliderComponent = SliderPlugin

export default SliderPlugin
