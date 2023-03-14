---
outline: deep
---

<!-- markdownlint-disable-next-line -->
<script setup>
import ScrollTable from '../../src/components/scroll-table/index.vue'
</script>

# ScrollTable

自动滚动的table组件。

## 基础

```js
<scroll-table
  style="height: 140px;"
  :header="[
    '船名航次',
    '截关期/开船期',
    '本航次集装箱数量（已发运数量）',
    '铁路发运预计日期',
  ]"
  :column-flex="[2, 4, 3, 2]"
  :data="[[
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ],
    [
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ],[
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ],[
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ]]"
  :row-num="3"
  :show-idx="true"
/>
```

<!-- markdownlint-disable-next-line -->

<scroll-table
  style="height: 140px;"
 :header="[
    '船名航次',
    '截关期/开船期',
    '本航次集装箱数量',
    '预计日期',
  ]"
  :column-flex="[2, 4, 3, 2]"
  :data="[[
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ],
    [
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ],[
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ],[
      'TRAYW 001SI/001NW',
      '2023-01-27 14:30:51/2023-01-29 14:30:51',
      '50(45)',
      '2023-01-24 14:30:51'
    ]]"
  :row-num="3"
  :show-idx="true"
></scroll-table>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|---|---|---|
| `data` | 表单数据 | object[] | [] |  |
| `column-flex` | 每栏的flex值，序号列默认是1 | number[] | [] |  |
| `header` | 表头内容 | string[] | [] |  |
| `show-idx` | 是否展示排序 | boolean | false |  |
| `animation` | 是否滚动 |boolean | true |  |
| `duration` | 滚动动画间隔 | number | 3000 |  |
| `header-bg` | header的背景色 | string | #002c8a |  |
| `odd-row-bg` | 单数行的背景 | string | #010c32 |  |
| `even-row-bg` | 双数行的背景 | string | #03184b |  |
| `row-num` | 表单可以存放几行,其中包括了header一行 | number | 7 |  |
