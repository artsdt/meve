<template>
  <m-radio v-model="value" :checked-value="1" :unchecked-value="2">Agree</m-radio>
</template>

<script>
import Radio from '../../radio'

export default {
  components: {
    [Radio.name]: Radio,
  },
  data: () => ({
    value: false,
  }),
}
</script>
