<template>
  <div class="example">
    <m-space>
      <m-button round>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="primary" round>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="info" round>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="warning" round>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="success" round>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="error" round>
        <m-icon name="menu-open" />
      </m-button>
    </m-space>
  </div>
</template>

<script>
import Button from '..'
import Space from '../../space'
import Icon from '../../icon'

export default {
  components: {
    [Button.name]: Button,
    [Space.name]: Space,
    [Icon.name]: Icon,
  },
}
</script>
