---
outline: deep
---

# BorderBox

BorderBox组件。

<!-- markdownlint-disable-next-line -->
<script setup>
import {
  BorderBox1,
  BorderBox2,
  BorderBox3,
  BorderBox4,
  BorderBox5,
  BorderBox6,
  BorderBox7,
  BorderBox8,
  BorderBox9
} from '../../src/components/border-box'
</script>

## BorderBox1

```js
<border-box1>
  <div style="height: 200px;width: 100%;"></div>
</border-box1>
```

<!-- markdownlint-disable-next-line -->
<border-box1>
  <!-- markdownlint-disable-next-line -->
  <div style="height: 200px;width: 100%;"></div>
</border-box1>

## BorderBox2

::: tip
borderBox2因为有外边框的距离，所以他的width和height取决于他的父容器，而不是子节点。
:::

```js
<div style="height: 200px;width: 100%;">
  <border-box2 />
</div>
```

<!-- markdownlint-disable-next-line -->
<div style="height: 200px;width: 100%;">
  <!-- markdownlint-disable-next-line -->
  <border-box2>
  </border-box2>
</div>

## BorderBox3

```js
<border-box3>
  <div style="height: 200px;width: 100%;"></div>
</border-box3>
```

<!-- markdownlint-disable-next-line -->
<border-box3>
  <!-- markdownlint-disable-next-line -->
  <div style="height: 200px;width: 100%;"></div>
</border-box3>

## BorderBox4

```js
<border-box4 title="title" :titleWidth="250">
  <div style="height: 200px;width: 100%;"></div>
</border-box4>
```

<!-- markdownlint-disable-next-line -->
<border-box4 title="title" :titleWidth="250">
  <!-- markdownlint-disable-next-line -->
  <div style="height: 200px;width: 100%;"></div>
</border-box4>

### BorderBox4.API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|---|---|---|
| `title` | 边框标题 | string | '' |  |
| `title-width` | 标题宽度 | number | 250 |  |

## BorderBox5

```js
<border-box5>
  <div style="height: 200px;width: 100%;"></div>
</border-box5>
```

<!-- markdownlint-disable-next-line -->
<border-box5>
  <!-- markdownlint-disable-next-line -->
  <div style="height: 200px;width: 100%;"></div>
</border-box5>

## BorderBox6

```js
<border-box6 >
  <div style="height: 200px;width: 100%;"></div>
</border-box6>
```

<!-- markdownlint-disable-next-line -->
<border-box6 >
  <!-- markdownlint-disable-next-line -->
  <div style="height: 200px;width: 100%;"></div>
</border-box6>

## BorderBox7

```js
<border-box7 >
  <div style="height: 200px;width: 100%;"></div>
</border-box7>
```

<!-- markdownlint-disable-next-line -->
<border-box7 >
  <!-- markdownlint-disable-next-line -->
  <div style="height: 200px;width: 100%;"></div>
</border-box7>

## BorderBox8

```js
<border-box8 >
  <div style="height: 200px;width: 100%;"></div>
</border-box8>
```

<!-- markdownlint-disable-next-line -->
<border-box8 >
  <!-- markdownlint-disable-next-line -->
  <div style="height: 200px;width: 100%;"></div>
</border-box8>

### BorderBox8.API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|---|---|---|
| `reverse` | 动画方向，默认顺时针 | boolean | false |  |
| `duration` | 动画时间(s) | number | 3 |  |

## BorderBox9

```js
<border-box9 >
  <div style="height: 200px;width: 100%;"></div>
</border-box9>
```

<!-- markdownlint-disable-next-line -->
<border-box9 >
  <!-- markdownlint-disable-next-line -->
  <div style="height: 200px;width: 100%;"></div>
</border-box9>
