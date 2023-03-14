---
outline: deep
---

<!-- markdownlint-disable-next-line -->
<script setup>
import CapsureTable from '../../src/components/capsure-table/index.vue'
</script>

# CapsureTable

简易胶囊图

## demo

```js
<capsure-table
  style="width: 300px; height: 200px;"
  :data="[
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 67
    },
    {
      name: '漯河',
      value: 123
    },
    {
      name: '郑州',
      value: 55
    },
    {
      name: '西峡',
      value: 98
    }
  ]"
/>
```

<!-- markdownlint-disable-next-line -->
<capsure-table
  style="width: 300px; height: 200px;"
  :data="[
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 67
    },
    {
      name: '漯河',
      value: 123
    },
    {
      name: '郑州',
      value: 55
    },
    {
      name: '西峡',
      value: 98
    }
  ]"
></capsure-table>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|---|---|---|
| `data` | 表单数据 | object[] | require |  |
| `unit` | 单位名称 | string | '' |  |
| `showValue` | 是否显示值 | boolean | true |  |
| `colors` | 每一行的color | string[] |  |  |
