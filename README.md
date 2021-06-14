# Yiu JS
这个只是我方便自己调用第三方JS库时，自己封装的一个JS库。

方便我在各种环境下使用第三方库。

如果你熟悉使用 [`lodash`](https://lodash.com/) 、[`moment`](https://momentjs.com/) ，请尽量使用他们。

# 安装

npm：

```bash
npm i yiu-js
```

yarn：

```bash
yarn add yiu-js
```

浏览器无其他依赖：

```html

<script src="https://unpkg.com/yiu-js@1.0.14/yiu.iife.min.js"></script>
```

浏览器有其他依赖：

```html
<script src="https://unpkg.com/moment@2.29.1/moment.js"></script>
<script src="https://unpkg.com/yiu-js@1.0.14/yiu.onlib.iife.min.js"></script>

<script>
    console.log(Yiu)
</script>
```

