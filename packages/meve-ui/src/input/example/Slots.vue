<template>
  <m-input placeholder="What is your name?" v-model="value">
    <template #prepend-icon>
      <m-icon class="prepend-icon" name="magnify-plus-outline" />
    </template>

    <template #append-icon>
      <m-icon class="append-icon" name="magnify-plus-outline" />
    </template>
  </m-input>
</template>

<script>
import Input from '..'
import Icon from '../../icon'

export default {
  components: {
    [Input.name]: Input,
    [Icon.name]: Icon,
  },
  data: () => ({
    value: '',
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
