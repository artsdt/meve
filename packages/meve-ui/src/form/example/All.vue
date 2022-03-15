<template>
  <m-form ref="form" :disabled="disabled" :readonly="readonly">
    <m-space direction="column" size="large">
      <m-input
        placeholder="Please input your account"
        label="YOUR ACCOUNT"
        :rules="[(v) => (v && v.length > 6) || 'Length must over than 6']"
        v-model="form.account"
      />
      <m-input
        type="password"
        placeholder="Please input your password"
        label="YOUR PASSWORD"
        :rules="[(v) => (v && v.length > 6) || 'Length must over than 6']"
        v-model="form.password"
      />
      <m-auto-complete
        placeholder="Please input your email"
        label="YOUR EMAIL"
        :options="options"
        :rules="[(v) => (v && v.length > 12) || 'Length must over than 12']"
        v-model="form.email"
      />
      <m-select
        label="GENDER"
        placeholder="What is your gender"
        :rules="[(v) => !!v || 'You must select one']"
        v-model="form.gender"
      >
        <m-option label="Male" />
        <m-option label="Female" />
      </m-select>
      <m-select
        label="FAVORITE"
        multiple
        placeholder="What is your favorite"
        :rules="[(v) => !!v.length || 'You must select one']"
        v-model="form.favorite"
      >
        <m-option label="Eat" />
        <m-option label="Sleep" />
        <m-option label="Coding" />
      </m-select>
      <m-time-picker
        label="TIME"
        placeholder="Please pick time"
        :rules="[(v) => (v && v.startsWith('10:')) || 'You must pick 10 hour']"
        v-model="form.time"
      />
      <m-radio-group label="AGREEMENT" v-model="form.agreement" :rules="[(v) => !!v || 'You must check one']">
        <m-radio :checked-value="1">Agree</m-radio>
        <m-radio :checked-value="2">Disagree</m-radio>
      </m-radio-group>
      <m-checkbox-group label="GROUP" v-model="form.group" :rules="[(v) => v.length >= 1 || 'You check at least one']">
        <m-checkbox :checked-value="1">Frontend</m-checkbox>
        <m-checkbox :checked-value="2">Backend</m-checkbox>
        <m-checkbox :checked-value="3">Production Manager</m-checkbox>
      </m-checkbox-group>
      <m-rate label="RATE" v-model="form.rate" :rules="[(v) => v > 0 || 'You must pick one']" />
      <m-switch label="ENABLE?" v-model="form.enable" :rules="[(v) => !!v || 'You must enable it']" />
      <m-slider label="PROGRESS" v-model="form.progress" :rules="[(v) => v >= 10 || 'You must slide progress >= 10']" />

      <div style="margin-top: 10px">
        <m-space>
          <m-button type="primary" @click="$refs.form.validate()">Validate</m-button>
          <m-button type="info" @click="$refs.form.resetValidation()">Reset Validation</m-button>
          <m-button type="warning" @click="$refs.form.reset()">Reset</m-button>
          <m-button type="error" @click="disabled = !disabled">Toggle Disabled: {{ disabled }}</m-button>
          <m-button type="success" @click="readonly = !readonly">Toggle Readonly: {{ readonly }}</m-button>
        </m-space>
      </div>
    </m-space>
  </m-form>
</template>

<script>
import Form from '..'
import Space from '../../space'
import Button from '../../button'
import Input from '../../input'
import Select from '../../select'
import Option from '../../option'
import Rate from '../../rate'
import AutoComplete from '../../auto-complete'
import RadioGroup from '../../radio-group'
import Radio from '../../radio'
import Checkbox from '../../checkbox'
import CheckboxGroup from '../../checkbox-group'
import Switch from '../../switch'
import Slider from '../../slider'
import TimePicker from '../../time-picker'

export default {
  components: {
    [Form.name]: Form,
    [Space.name]: Space,
    [Input.name]: Input,
    [AutoComplete.name]: AutoComplete,
    [Button.name]: Button,
    [Select.name]: Select,
    [Option.name]: Option,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Rate.name]: Rate,
    [Switch.name]: Switch,
    [Slider.name]: Slider,
    [TimePicker.name]: TimePicker,
  },
  data: () => ({
    disabled: false,
    readonly: false,
    form: {
      account: '',
      password: '',
      email: '',
      gender: '',
      favorite: [],
      group: [],
      enable: false,
      agreement: undefined,
      rate: 0,
      progress: 5,
      time: undefined,
    },
  }),
  computed: {
    options() {
      return ['@qq.com', '@163.com', '@outlook.com'].map((suffix) => {
        const prefix = this.form.email?.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix,
        }
      })
    },
  },
}
</script>
