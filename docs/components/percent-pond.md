---
outline: deep
---

<!-- markdownlint-disable-next-line -->
<script setup>
import PercentPond from '../../src/components/percent-pond/index.vue'
</script>

# PercentPond

简易进度池

## 基础

```js
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
/>
```

<!-- markdownlint-disable-next-line -->
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
/>

## 自定义文本内容

```js
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
  text="Hello"
/>
```

<!-- markdownlint-disable-next-line -->
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
  text="Hello"
/>

## 改变渐变颜色

```js
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
  :colors="['#01c4f9', '#c135ff']"
/>
```

<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
  :colors="['#01c4f9', '#c135ff']"
/>

## 定制块隙长度

```js
<percent-pond
  style="width: 200px; height: 100px;"
  :value="100"
  :colors="['#01c4f9', '#c135ff']"
  :line-dash="[47, 3, 94, 3, 47, 3]"
/>
```

<percent-pond
  style="width: 200px; height: 100px;"
  :value="100"
  :colors="['#01c4f9', '#c135ff']"
  :line-dash="[47, 3, 94, 3, 47, 3]"
/>

## 调节边框

```js
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
  :border-width="5"
  :border-radius="10"
  :border-gap="5"
/>
```

<!-- markdownlint-disable-next-line -->
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
  :border-width="5"
  :border-radius="10"
  :border-gap="5"
/>

## 线条间隙

```js
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
  :line-dash="[10, 2]"
/>
```

<!-- markdownlint-disable-next-line -->
<percent-pond
  style="width: 200px; height: 100px;"
  :value="66"
  :line-dash="[10, 2]"
/>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|---|---|---|---|---|
| `value` | 百分比值 | number | require |  |
| `text` | 文本内容，不传则默认展示`${value}%` | string | '' |  |
| `text-color` | 文本字体颜色 | string | '#fff' |  |
| `border-width` | border宽度 | number | 3 |  |
| `border-gap` | border间隙 | number | 3 |  |
| `border-radius` | border弧度 | number | 5 |  |
| `line-dash` | 线条间隙，可个性化定制 | number[] | [5, 1] |  |
| `colors` | 渐变颜色，从左到右 | string[] | ['#3DE7C9', '#00BAFF'] |  |
