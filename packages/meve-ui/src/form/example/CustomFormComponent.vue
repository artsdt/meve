<template>
  <m-form ref="form" :disabled="disabled" :readonly="readonly">
    <m-space direction="column" size="large">
      <m-form-item
        ref="formItem"
        label="YOUR ACCOUNT"
        :value="form.account"
        :rules="[(v) => (v && v.length > 6) || 'Length must over than 6']"
      >
        <input
          class="custom-input"
          placeholder="Please input your account"
          :disabled="disabled"
          :readonly="readonly"
          v-model="form.account"
          @input="handleInput"
        />
      </m-form-item>

      <m-input
        type="password"
        placeholder="Please input your password"
        label="YOUR PASSWORD"
        :rules="[(v) => (v && v.length > 6) || 'Length must over than 6']"
        v-model="form.password"
      />

      <m-space>
        <m-button type="primary" @click="$refs.form.validate()">Validate</m-button>
        <m-button type="info" @click="$refs.form.resetValidation()">Reset Validation</m-button>
        <m-button type="warning" @click="reset">Reset</m-button>
        <m-button type="error" @click="disabled = !disabled">Toggle Disabled: {{ disabled }}</m-button>
        <m-button type="success" @click="readonly = !readonly">Toggle Readonly: {{ readonly }}</m-button>
      </m-space>
    </m-space>
  </m-form>
</template>

<script>
import Form from '..'
import FormItem from '../../form-item'
import Space from '../../space'
import Button from '../../button'
import Input from '../../input'

export default {
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Space.name]: Space,
    [Button.name]: Button,
    [Input.name]: Input,
  },
  data: () => ({
    disabled: false,
    readonly: false,
    form: {
      account: '',
      password: '',
    },
  }),
  methods: {
    handleInput() {
      this.$nextTick(() => {
        this.$refs.formItem.validate()
      })
    },

    reset() {
      this.$refs.form.reset()

      this.form.account = ''
      this.$refs.formItem.resetValidation()
    },
  },
}
</script>

<style scoped lang="less">
.custom-input {
  display: block;
  width: 100%;
  height: 42px;
  padding: 0 8px;
  color: #555;
  font-size: 15px;
  border: thin solid #ccc;

  &::placeholder {
    color: #bbb;
  }
}
</style>
