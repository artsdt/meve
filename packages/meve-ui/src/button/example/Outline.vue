<template>
  <div class="example">
    <m-space>
      <m-button text outline>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="primary" text outline>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="info" text outline>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="warning" text outline>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="success" text outline>
        <m-icon name="menu-open" />
      </m-button>
      <m-button type="error" text outline>
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
