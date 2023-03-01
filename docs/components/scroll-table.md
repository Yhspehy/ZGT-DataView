---
outline:deep
---

# ScrollTable

自动滚动的table组件。

```vue
<ScrollTable
  :header="[
    '船名航次',
    '截关期/开船期',
    '本航次集装箱数量（已发运数量）',
    '铁路发运预计日期',
    '靠泊时间',
    '靠泊码头',
    '待发箱量'
  ]"
  :column-flex="[2,3,3,1,3,1,1]"
  :data="table2Data"
  :row-num="6"
/>
```

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|---|---|---|
| `data` | 表单数据 | object[] | [] |  |
| `columnFlex` | 每栏的flex值 | number[] | [] |  |
| `header` | 表头内容 | string[] | [] |  |
| `showIdx` | 是否展示排序 | boolean | false |  |
| `animation` | 是否滚动 |boolean | true |  |
| `duration` | 滚动动画间隔 | number | 3000 |  |
| `headerBg` | header的背景色 | string | #002c8a |  |
| `oddRowBg` | 单数行的背景 | string | #010c32 |  |
| `evenRowBg` | 双数行的背景 | string | #03184b |  |
| `rowNum` | 表单可以存放几行,其中包括了header一行 | number | 7 |  |
