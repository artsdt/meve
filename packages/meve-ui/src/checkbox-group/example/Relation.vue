<template>
  <m-checkbox v-model="value" :checked-value="1" :unchecked-value="2">Eat</m-checkbox>
</template>

<script>
import Checkbox from '../../checkbox'

export default {
  components: {
    [Checkbox.name]: Checkbox,
  },
  data: () => ({
    value: false,
  }),
}
</script>
