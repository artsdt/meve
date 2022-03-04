<template>
  <m-select placeholder="What is your favorite" v-model="value">
    <m-option label="Eat" />
    <m-option label="Sleep" />
    <m-option label="Coding" />

    <template #prepend-icon>
      <m-icon class="prepend-icon" name="magnify-plus-outline" />
    </template>

    <template #append-icon>
      <m-icon class="append-icon" name="magnify-plus-outline" />
    </template>
  </m-select>
</template>

<script>
import Select from '..'
import Option from '../../option'
import Icon from '../../icon'

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
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
