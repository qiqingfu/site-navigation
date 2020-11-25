## site-navigation

个人及企业内部网站导航页配置模板



## 预览

![导航预览](https://tva1.sinaimg.cn/large/0081Kckwly1gl1stmudatj31p20u00zn.jpg)



## 使用

本项目可以进行模块配置, configs 目录中有三个 .js 文件, 每个 js 文件代表预览中的某个导航页模块。

每个导航模块的渲染顺序根据在 index.html 文件的 head 标签内部引入的 js 配置模块对应。调整导航模块的先后顺序只需要调整引入顺序即可。

```html
<!--按需引入文件 start, 按照引入配置文件的顺序渲染-->
<script defer src="configs/author.js"></script>
<script defer src="configs/navigations.js"></script>
<script defer src="configs/ope.js"></script>
<!--按需引入文件 end-->
```



## 约定配置项

以 `configs/author.js` 文件的配置项进行说明: 

```text
name ：String -  模块的名字
  - children:  Array<Object> - 模块的子导航
    - title: String - 子导航标题
    - notice: String - 子导航的公告说明
    - href?: String - 子导航点击跳转的链接地址，可选项
    - logo: Sting - 子导航 Logo 图
    - buttons?: Array<Object> - 子导航的底部按钮链接，可选项, 可配合多个
      - title: String - 按钮链接标题`
      - href: String - 子链接对应的跳转地址
```
     

## 参考示例

```js
const author = {
  name: "项目源码",
  children: [
    {
      title: "GitHub", notice: "开源社区", href: "https://github.com", logo: "img/github.png",
      buttons: [
        { title: "作者GitHub", href: "https://github.com/qiqingfu" },
        { title: "项目源码", href: "https://github.com/qiqingfu/site-navigation" },
      ]
    },
  ]
}

$mount({
  author
})
```

每个模块配置项对象, 都要调用一次 `$mount()` 函数, 用于挂载配置项。


## 感谢

感谢 [zyupo](https://github.com/zyupo), 本项目基于 [https://github.com/openspug/index](https://github.com/openspug/index) 改造为配置型的导航
