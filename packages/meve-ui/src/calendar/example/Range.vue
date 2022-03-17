<template>
  <m-calendar range v-model="value" />
</template>

<script>
import Calendar from '..'

export default {
  components: {
    [Calendar.name]: Calendar,
  },
  data: () => ({
    value: [],
  }),
}
</script>
