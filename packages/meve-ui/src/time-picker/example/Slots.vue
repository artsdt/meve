<template>
  <m-time-picker placeholder="Please pick time?" v-model="value">
    <template #prepend-icon>
      <m-icon class="prepend-icon" name="magnify-plus-outline" />
    </template>

    <template #append-icon>
      <m-icon class="append-icon" name="magnify-plus-outline" />
    </template>
  </m-time-picker>
</template>

<script>
import TimePicker from '..'
import Icon from '../../icon'

export default {
  components: {
    [TimePicker.name]: TimePicker,
    [Icon.name]: Icon,
  },
  data: () => ({
    value: undefined,
  }),
}
</script>

<style scoped>
.prepend-icon {
  margin-right: 4px;
  margin-top: 1px;
  color: #888;
}

.append-icon {
  margin-left: 4px;
  margin-top: 1px;
  color: #888;
}
</style>
