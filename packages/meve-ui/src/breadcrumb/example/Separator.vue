<template>
  <div class="example">
    <m-breadcrumb>
      <m-breadcrumb-item>一级</m-breadcrumb-item>
      <m-breadcrumb-item>二级</m-breadcrumb-item>
      <m-breadcrumb-item>三级</m-breadcrumb-item>
    </m-breadcrumb>

    <div class="space"></div>

    <m-breadcrumb separator="\">
      <m-breadcrumb-item>一级</m-breadcrumb-item>
      <m-breadcrumb-item>二级</m-breadcrumb-item>
      <m-breadcrumb-item>三级</m-breadcrumb-item>
    </m-breadcrumb>
  </div>
</template>

<script>
import Breadcrumb from '..'
import BreadcrumbItem from '../../breadcrumb-item'

export default {
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [BreadcrumbItem.name]: BreadcrumbItem,
  },
}
</script>

<style scoped>
.space {
  margin: 20px 0;
}
</style>
