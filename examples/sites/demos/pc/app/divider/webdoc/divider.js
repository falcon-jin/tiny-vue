export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '通过引用组件标签即可。', 'en-US': 'You can refer to component label.' },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'direction',
      'name': { 'zh-CN': '垂直分隔线', 'en-US': 'Vertical divider line' },
      'desc': {
        'zh-CN': '<p>通过 <code>direction</code> 属性可以设置分隔线的方向。</p>',
        'en-US': '<p>The direction of the separator line can be set through the<code>direction</code>attribute.</p>'
      },
      'codeFiles': ['direction.vue']
    },
    {
      'demoId': 'content-position',
      'name': { 'zh-CN': '分隔线文案的位置', 'en-US': 'The position of the separator copy' },
      'desc': {
        'zh-CN': '<p>通过 <code>content-position</code> 属性 可以设置分隔线文案的位置。</p>',
        'en-US':
          '<p>The position of the separator text can be set through the<code>content position</code>attribute.</p>'
      },
      'codeFiles': ['contentPosition.vue']
    },
    {
      'demoId': 'custom-style',
      'name': { 'zh-CN': '自定义分隔线样式', 'en-US': 'Custom divider style' },
      'desc': {
        'zh-CN':
          '<p>通过<code>color</code><code>border-style</code><code>content-color</code>属性，自定义分割线样式。</p>',
        'en-US':
          '<p>Customize the split line style through the<code>color</code><code>border style</code><code>content color</code>attribute.</p>'
      },
      'codeFiles': ['customStyle.vue']
    }
  ],
  apis: [
    {
      'name': 'divider',
      'type': 'component',
      'props': [
        {
          'name': 'color',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置分隔线的颜色', 'en-US': 'Set the color of the divider.' },
          'demoId': 'custom-style'
        },
        {
          'name': 'direction',
          'type': 'string',
          'defaultValue': `'horizontal'`,
          'desc': {
            'zh-CN': '设置分隔线的方向，该属性的可选值为 horizontal / vertical',
            'en-US': `Set the direction of the divider; the possible values for this property are "horizontal" or "vertical"`
          },
          'demoId': 'direction'
        },
        {
          'name': 'content-position',
          'type': 'string',
          'defaultValue': `'center'`,
          'desc': {
            'zh-CN': '设置分隔线文案的位置，该属性的可选值为 left / center / right',
            'en-US': `Set the position of the separator text, with optional values of left/center/right for this attribute`
          },
          'demoId': 'content-position'
        },
        {
          'name': 'border-style',
          'type': 'string',
          'defaultValue': `'solid'`,
          'desc': {
            'zh-CN': '设置分隔线的样式，该属性的可选值为 solid / dashed',
            'en-US': 'Set the style of the separator line, with optional values of solid/dashed for this property'
          },
          'demoId': 'custom-style'
        },
        {
          'name': 'content-color',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置分隔线文案的颜色', 'en-US': 'Set the color of the divider content' },
          'demoId': 'custom-style'
        },
        {
          'name': 'content-background-color',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置分割线文案的背景颜色',
            'en-US': 'Set the background color of the divider content'
          },
          'demoId': 'custom-style'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'content-position'
        }
      ]
    }
  ]
}
