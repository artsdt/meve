# Card 卡片

### 介绍

一张卡片，用于划分区域

### 描述文字

通过`description`显示描述文字

```vue
import Description from '../example/Description.vue'
```

```html
<m-card description="Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua,
  retro synth master cleanse. Mustache cliche tempor,
  williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
  Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua,
  retro synth master cleanse. Mustache cliche tempor,
  williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth."/>
```

### 标题/副标题

通过`title`和`subtitle`显示标题和副标题

```vue
import TitleComponent from '../example/Title.vue'
```

```html
<m-card
  title="卡片"
  subtitle="下面的文章是抄来的"
  description="Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua,
    retro synth master cleanse. Mustache cliche tempor,
    williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
    Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua,
    retro synth master cleanse. Mustache cliche tempor,
    williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth."
/>
```

### 自定义插槽

通过自定义插槽定制内容

```vue
import Slots from '../example/Slots.vue'
```

```html
<template>
  <m-card>
    <template #title>
      <div class="title">自定义标题</div>
    </template>

    <template #subtitle>
      <small class="subtitle">自定义副标题</small>
    </template>

    <template #default>
      <div class="description">
        <m-button>下面有一个按钮</m-button>
      </div>
    </template>

    <template #extra>
      <div class="extra">
        <m-button>上面有一个按钮</m-button>
      </div>
    </template>
  </m-card>
</template>

<style>
.title {
  color: #5e72e4;
  font-size: 18px;
}

.subtitle {
  font-size: 12px;
  color: #5e72e4;
}

.description {
  padding: 20px;
  color: #5e72e4;
}

.extra {
  padding: 0 20px 20px;
}
</style>
```

## API

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `title` | 卡片标题 | **-** |
| `subtitle` | 卡片副标题 | **-** |
| `default` | 卡片描述 | **-** |
| `extra` | 卡片附加部分 | **-** |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `@card-title-wrapper-padding` | `20px` |
| `@card-description-padding` | `22px` |
| `@card-background-color` | `#fff` |
| `@card-title-text-color` | `#333` |
| `@card-description-text-color` | `#555` |
| `@card-subtitle-text-color` | `#888` |
| `@card-title-font-size` | `18px` |
| `@card-subtitle-font-size` | `12px` |
| `@card-border-radius` | `6px` |