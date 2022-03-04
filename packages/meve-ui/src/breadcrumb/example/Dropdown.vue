<template>
  <m-breadcrumb>
    <m-breadcrumb-item>
      <m-dropdown :options="options">首页</m-dropdown>
    </m-breadcrumb-item>
    <m-breadcrumb-item>
      <m-dropdown :options="options">用户</m-dropdown>
    </m-breadcrumb-item>
    <m-breadcrumb-item>
      <m-dropdown>用户详情</m-dropdown>
    </m-breadcrumb-item>
  </m-breadcrumb>
</template>

<script>
import Breadcrumb from '..'
import BreadcrumbItem from '../../breadcrumb-item'
import Dropdown from '../../dropdown'

export default {
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [BreadcrumbItem.name]: BreadcrumbItem,
    [Dropdown.name]: Dropdown,
  },

  data: () => ({
    options: [
      {
        key: 1,
        label: 'Meve: 1',
      },
      {
        key: 2,
        label: 'Meve: 2',
      },
    ],
  }),
}
</script>
