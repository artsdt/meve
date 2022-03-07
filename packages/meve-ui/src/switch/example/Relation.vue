<template>
  <m-switch v-model="value" :checked-value="1" :unchecked-value="2" />
</template>

<script>
import Switch from '..'

export default {
  components: {
    [Switch.name]: Switch,
  },
  data: () => ({
    value: false,
  }),
}
</script>
