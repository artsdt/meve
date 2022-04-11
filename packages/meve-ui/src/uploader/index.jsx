import Image from '../image'
import Button from '../button'
import Progress from '../progress'
import Icon from '../icon'
import FormItem from '../form-item'
import { createNamespace } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'
import { isHttpProtocol, toNumber } from '../utils/shared'
import { props } from './props'

import '../styles/common.less'
import '../image/image.less'
import '../button/button.less'
import '../progress/progress.less'
import '../icon/icon.less'
import '../form-item/formItem.less'
import './uploader.less'

const { createComponent, namespace } = createNamespace('uploader')

let fid = 0

const UploaderPlugin = createComponent({
  mixins: [createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formComponents' })],

  props,

  data: () => ({
    callReset: false,
    errorMessage: '',
  }),

  computed: {
    files() {
      const { value, hideList } = this

      if (hideList) {
        return []
      }

      return value
    },
  },

  watch: {
    value: {
      deep: true,
      handler() {
        !this.callReset && this.nextTickValidateWithTrigger('onChange')
        this.callReset = false
      },
    },
  },

  methods: {
    // expose
    reset() {
      this.callReset = true
      this.$emit('input', [])
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

    // expose
    getSuccess() {
      return this.value.filter((file) => file.state === 'success')
    },

    // expose
    getError() {
      return this.value.filter((file) => file.state === 'error')
    },

    // expose
    getLoading() {
      return this.value.filter((file) => file.state === 'loading')
    },

    nextTickValidateWithTrigger(trigger) {
      this.$nextTick(() => {
        this.$refs.formItem?.validateWithTrigger(this.validateTrigger, trigger, this.rules, this.value, {
          getSuccess: this.getSuccess,
          getError: this.getError,
          getLoading: this.getLoading,
        })
      })
    },

    handleErrorMessageChange(errorMessage) {
      this.errorMessage = errorMessage
    },

    triggerAction() {
      this.$refs.input.click()
    },

    getFiles(event) {
      const el = event.target
      const { files: fileList } = el
      return Array.from(fileList)
    },

    createMFile(file) {
      return {
        id: fid++,
        url: '',
        cover: '',
        fit: 'cover',
        name: file.name,
        state: undefined,
        progress: 0,
        file,
      }
    },

    resolver(mFile) {
      return new Promise((resolve) => {
        const fileReader = new FileReader()

        fileReader.onload = () => {
          const base64 = fileReader.result

          mFile.file.type.startsWith('image') && (mFile.cover = base64)
          mFile.url = base64

          resolve(mFile)
        }

        fileReader.readAsDataURL(mFile.file)
      })
    },

    getResolvers(mFiles) {
      return mFiles.map(this.resolver)
    },

    getBeforeReaders(mFiles) {
      return mFiles.map((mFile) => {
        return new Promise((resolve) => {
          const valid = this.$listeners['before-read'] ? this.$listeners['before-read'](mFile) : true
          Promise.resolve(valid).then((valid) =>
            resolve({
              valid,
              mFile,
            })
          )
        })
      })
    },

    async handleChange(event) {
      const { maxsize, maxlength, value, readonly, disabled, form } = this

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      const getValidSizeMFiles = (mFiles) => {
        return mFiles.filter((mFile) => {
          if (mFile.file.size > toNumber(maxsize)) {
            this.$emit('oversize', mFile)
            return false
          }

          return true
        })
      }

      const getValidLengthMFiles = (mFiles) => {
        const limit = Math.min(mFiles.length, toNumber(maxlength) - value.length)
        return mFiles.slice(0, limit)
      }
      // limit
      const files = this.getFiles(event)
      let mFiles = files.map(this.createMFile)
      mFiles = maxsize != null ? getValidSizeMFiles(mFiles) : mFiles
      mFiles = maxlength != null ? getValidLengthMFiles(mFiles) : mFiles

      // pre resolve
      const resolvedMFiles = await Promise.all(this.getResolvers(mFiles))
      const validationMFiles = await Promise.all(this.getBeforeReaders(resolvedMFiles))
      const validMFiles = validationMFiles.filter(({ valid }) => valid).map(({ mFile }) => mFile)

      this.$emit('input', [...value, ...validMFiles])
      event.target.value = ''
      validMFiles.forEach((mFile) => {
        this.$emit('after-read', mFile)
      })
    },

    renderImage(file) {
      if (!file.cover) {
        return <Icon class={namespace('__cover')} uploader-cover name="file" />
      }

      return (
        <Image
          class={namespace('__cover')}
          uploader-cover
          src={file.cover}
          fit={file.fit}
          previewDisabled={!this.previewed || this.form?.disabled || this.disabled}
          onClick={(e) => e.stopPropagation()}
        />
      )
    },

    async handleRemove(removedMFile) {
      const { disabled, readonly, value, form } = this

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      if (this.$listeners['before-remove'] && !(await this.$listeners['before-remove'](removedMFile))) {
        return
      }

      const expectedFiles = value.filter((mFile) => mFile !== removedMFile)
      this.$emit('remove', removedMFile)
      this.nextTickValidateWithTrigger('onRemove')
      this.$emit('input', expectedFiles)
    },

    handleFileClick(mFile) {
      if (isHttpProtocol(mFile.url)) {
        window.open(mFile.url)
      }
    },

    renderFiles() {
      return this.files.map((file) => {
        return (
          <div
            class={[
              namespace('__file'),
              file.state === 'success' ? namespace('--success') : null,
              file.state === 'error' ? namespace('--error') : null,
              this.form?.disabled || this.disabled ? namespace('--disabled') : null,
            ]}
            key={file.id}
            onClick={() => this.handleFileClick(file)}
          >
            {this.renderImage(file)}

            <div class={namespace('__file-profile')}>
              <div class={[namespace('__file-name'), isHttpProtocol(file.url) ? namespace('--link') : null]}>
                {file.name ?? file.url}
              </div>

              <Progress
                class={namespace('__file-progress')}
                v-show={file.state === 'loading'}
                uploader-cover
                value={file.progress}
              />
            </div>

            <Button
              class={namespace('__remove-button')}
              uploader-cover
              text
              round
              onClick={() => this.handleRemove(file)}
            >
              <Icon class={namespace('__remove-button-icon')} uploader-cover name="close" />
            </Button>
          </div>
        )
      })
    },
  },

  render() {
    const { label, value, rules } = this

    return (
      <FormItem
        ref="formItem"
        label={label}
        value={value}
        rules={rules}
        {...{
          on: {
            'error-message-change': this.handleErrorMessageChange,
          },
        }}
      >
        <div class={[namespace(), 'm--box']}>
          <input
            class={namespace('__action-input')}
            ref="input"
            type="file"
            multiple={this.multiple}
            accept={this.accept}
            capture={this.capture}
            disabled={this.disabled || this.form?.disabled}
            readOnly={this.readonly || this.form?.readonly}
            onChange={this.handleChange}
          />
          <div class={namespace('__action')} onClick={this.triggerAction}>
            {this.slots()}
          </div>
          <div class={namespace('__file-list')}>{this.renderFiles()}</div>
        </div>
      </FormItem>
    )
  },
})

export const _UploaderComponent = UploaderPlugin

export default UploaderPlugin
