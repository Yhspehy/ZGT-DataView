---
outline: deep
---

<!-- markdownlint-disable-next-line -->
<script setup>
import ConicalChart from '../../src/components/conical-chart/index.vue'
</script>

# PercentPond

简易进度池

## 基础

```js
<conical-chart
  style="width: 400px; height: 200px;"
  :data="[
    {
      name: '周口',
      value: 55,
      img: '/conical-chart/1.png'
    },
    {
      name: '南阳',
      value: 120,
      img: '/conical-chart/2.png'
    },
    {
      name: '西峡',
      value: 71,
      img: '/conical-chart/3.png'
    },
    {
      name: '驻马店',
      value: 66,
      img: '/conical-chart/4.png'
    },
    {
      name: '新乡',
      value: 80,
      img: '/conical-chart/5.png'
    },
    {
      name: '信阳',
      value: 35,
      img: '/conical-chart/6.png'
    },
    {
      name: '漯河',
      value: 15,
      img: '/conical-chart/7.png'
    }
  ]"
/>
```

<!-- markdownlint-disable-next-line -->
<conical-chart
  style="width: 400px; height: 200px;"
  :data="[
    {
      name: '周口',
      value: 55,
      img: '/conical-chart/1.png'
    },
    {
      name: '南阳',
      value: 120,
      img: '/conical-chart/2.png'
    },
    {
      name: '西峡',
      value: 71,
      img: '/conical-chart/3.png'
    },
    {
      name: '驻马店',
      value: 66,
      img: '/conical-chart/4.png'
    },
    {
      name: '新乡',
      value: 80,
      img: '/conical-chart/5.png'
    },
    {
      name: '信阳',
      value: 35,
      img: '/conical-chart/6.png'
    },
    {
      name: '漯河',
      value: 15,
      img: '/conical-chart/7.png'
    }
  ]"
/>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|---|---|---|
| `data` | 表单数据 | [] | require |  |
| `fontSize` | 字体大小 | number | 12 |  |
| `textColor` | 文本字体颜色 | string | '#fff' |  |
| `imgSideLength` | 图片长度 | number | 30 |  |
| `columnColor` | 图表背景色 | string | `rgba(0, 194, 255, 0.4)` |  |
| `showValue` | 是否显示值 | boolean | false |  |
| `sort` | 是否自动排序 | boolean | true |  |

## Data Props

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|---|---|---|
| `value` | 值 | string | require |  |
| `name` | 标题 | string | require |  |
| `img` | 图片链接 | string | '' |  |
