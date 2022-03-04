<template>
  <m-breadcrumb>
    <m-breadcrumb-item>
      一级
      <template #separator>
        <m-icon class="separator" name="arrow-right" />
      </template>
    </m-breadcrumb-item>
    <m-breadcrumb-item>
      二级
      <template #separator>
        <m-icon class="separator" name="arrow-right" />
      </template>
    </m-breadcrumb-item>
    <m-breadcrumb-item>三级</m-breadcrumb-item>
  </m-breadcrumb>
</template>

<script>
import Breadcrumb from '..'
import BreadcrumbItem from '../../breadcrumb-item'
import Icon from '../../icon'

export default {
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [BreadcrumbItem.name]: BreadcrumbItem,
    [Icon.name]: Icon,
  },
}
</script>

<style scoped>
.separator {
  font-size: 16px;
  margin: 0 10px;
}
</style>
