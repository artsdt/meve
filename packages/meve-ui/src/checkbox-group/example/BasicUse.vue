<template>
  <m-checkbox v-model="value">Eat</m-checkbox>
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
