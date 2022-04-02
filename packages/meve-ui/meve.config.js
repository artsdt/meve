module.exports = {
  highlight: {
    style: './highlight.css',
  },
  menu: [
    {
      name: 'developer-guide',
      labelCN: '开发指南',
      labelUS: 'Developer Guide',
      children: [
        {
          name: 'home',
          labelCN: '基本介绍',
          labelUS: 'Basic Introduce',
        },
        {
          name: 'quickstart',
          labelCN: '快速开始',
          labelUS: 'Quickstart',
        },
        {
          name: 'style-provider',
          labelCN: '主题定制',
          labelUS: 'Custom Themes',
        },
      ],
    },
    {
      name: 'basic-component',
      labelCN: '基础组件',
      labelUS: 'Basic Component',
      children: [
        {
          name: 'button',
          labelCN: 'Button 按钮',
          labelUS: 'Button',
        },
        {
          name: 'card',
          labelCN: 'Card 卡片',
          labelUS: 'Card',
        },
        {
          name: 'icon',
          labelCN: 'Icon 图标',
          labelUS: 'Icon',
        },
        {
          name: 'image',
          labelCN: 'Image 图片',
          labelUS: 'Image',
        },
        {
          name: 'loading',
          labelCN: 'Loading 加载',
          labelUS: 'Loading',
        },
        {
          name: 'tag',
          labelCN: 'Tag 标签',
          labelUS: 'Tag',
        },
      ],
    },
    {
      name: 'display-component',
      labelCN: '展示组件',
      labelUS: 'Display Component',
      children: [
        {
          name: 'breadcrumb',
          labelCN: 'Breadcrumb 面包屑',
          labelUS: 'Breadcrumb',
        },
        {
          name: 'calendar',
          labelCN: 'Calendar 日历',
          labelUS: 'Calendar',
        },
        {
          name: 'list',
          labelCN: 'List 懒加载列表',
          labelUS: 'List',
        },
        {
          name: 'menu',
          labelCN: 'Menu 折叠菜单',
          labelUS: 'Menu',
        },
        {
          name: 'swipe',
          labelCN: 'Swipe 轮播',
          labelUS: 'Swipe',
        },
        {
          name: 'skeleton',
          labelCN: 'Skeleton 骨架屏',
          labelUS: 'Skeleton',
        },
        {
          name: 'tabs',
          labelCN: 'Tabs 标签页',
          labelUS: 'Tabs',
        },
      ],
    },
    {
      name: 'action-component',
      labelCN: '反馈组件',
      labelUS: 'Action Component',
      children: [
        {
          name: 'back-top',
          labelCN: 'BackTop 回到顶部',
          labelUS: 'BackTop',
        },
        {
          name: 'dialog',
          labelCN: 'Dialog 对话框',
          labelUS: 'Dialog',
        },
        {
          name: 'dropdown',
          labelCN: 'Dropdown 下拉框',
          labelUS: 'Dropdown',
        },
        {
          name: 'loading-bar',
          labelCN: 'LoadingBar 加载条',
          labelUS: 'LoadingBar',
        },
        {
          name: 'message',
          labelCN: 'Message 提示信息',
          labelUS: 'Message',
        },
        {
          name: 'popup',
          labelCN: 'Popup 弹出层',
          labelUS: 'Popup',
        },
        {
          name: 'popover',
          labelCN: 'Popover 悬浮框',
          labelUS: 'Popover',
        },
      ],
    },
    {
      name: 'layout-component',
      labelCN: '布局组件',
      labelUS: 'Layout Component',
      children: [
        {
          name: 'space',
          labelCN: 'Space 间隔',
          labelUS: 'Space',
        },
        {
          name: 'row',
          labelCN: 'Layout 栅格布局',
          labelUS: 'Layout',
        },
        {
          name: 'sticky',
          labelCN: 'Sticky 粘性布局',
          labelUS: 'Sticky',
        },
      ],
    },
    {
      name: 'form-component',
      labelCN: '表单组件',
      labelUS: 'Form Component',
      children: [
        {
          name: 'form',
          labelCN: 'Form 表单',
          labelUS: 'Form',
        },
        {
          name: 'input',
          labelCN: 'Input 文本输入',
          labelUS: 'Input',
        },
        {
          name: 'auto-complete',
          labelCN: 'AutoComplete 自动补全',
          labelUS: 'AutoComplete',
        },
        {
          name: 'select',
          labelCN: 'Select 选择框',
          labelUS: 'Select',
        },
        {
          name: 'radio-group',
          labelCN: 'Radio 单选框',
          labelUS: 'Radio',
        },
        {
          name: 'checkbox-group',
          labelCN: 'Checkbox 复选框',
          labelUS: 'Checkbox',
        },
        {
          name: 'rate',
          labelCN: 'Rate 评分',
          labelUS: 'Rate',
        },
        {
          name: 'switch',
          labelCN: 'Switch 开关',
          labelUS: 'Switch',
        },
        {
          name: 'slider',
          labelCN: 'Slider 滑块',
          labelUS: 'Slider',
        },
        {
          name: 'time-picker',
          labelCN: 'TimePicker 时间选择器',
          labelUS: 'TimePicker',
        },
        {
          name: 'date-picker',
          labelCN: 'DatePicker 日期选择器',
          labelUS: 'DatePicker',
        },
      ],
    },
    {
      name: 'directives',
      labelCN: '指令',
      labelUS: 'Directives',
      children: [
        {
          name: 'ripple',
          labelCN: 'Ripple 水波反馈',
          labelUS: 'Ripple',
        },
        {
          name: 'lazy',
          labelCN: 'Lazy 图片懒加载',
          labelUS: 'Lazy',
        },
      ],
    },
  ],
  moduleCompatible: {
    "import dayjs from 'dayjs/esm'\n": "import dayjs from 'dayjs'\n",
    "import customParseFormat from 'dayjs/esm/plugin/customParseFormat'\n":
      "import customParseFormat from 'dayjs/plugin/customParseFormat'\n",
  },
}
