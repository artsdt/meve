<template>
  <m-breadcrumb>
    <m-breadcrumb-item separator="\">一级</m-breadcrumb-item>
    <m-breadcrumb-item separator="~">二级</m-breadcrumb-item>
    <m-breadcrumb-item>三级</m-breadcrumb-item>
  </m-breadcrumb>
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
