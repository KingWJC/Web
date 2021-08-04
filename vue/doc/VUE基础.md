### 前言

前端领域当中有三大框架，Angular(google)，Rect(facebook)，Vue，都是开发单页面应用框架。

Vue框架官网地址：https://cn.vuejs.org/ 

VUE是一套用于构建用户界面的渐进式（JavaScript）框架，源码都封装到了一个尾缀为JS这样一样的文件里面。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合

### 基础使用

声明式渲染：Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统

响应式；一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 `#app`) 然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。数据和 DOM 已经被建立了关联，所有东西都是**响应式的**

VUE实例：每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 **Vue 实例**开始的：

值得注意的是只有当实例被创建时就已经存在于 `data` 中的 property 才是**响应式**的。也就是说如果你添加一个新的 property，比如：vm.b = 'hi'，那么对 `b` 的改动将不会触发任何视图的更新

### 常用指令

指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

1. 插值：文本，HTML， Attribute，JavaScript 表达式
2. 绑定到 DOM 结构
3. class和style的绑定
4. 条件，列表渲染。
5. 事件处理
6. 表单输入绑定：v-model，由数据劫持结合发布者－订阅者模式实现
7. 组件基础。

原理：https://blog.csdn.net/weixin_37861326/article/details/80854763

实现：

1. 调色板
2. 微博发布框
3. 百度预搜索效果

https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=34302,33966,34335,34369,31660,34331,34004,34073,34281,34094,26350,34245,34090&wd=wangjicheng&req=2&bs=html%20span%20p&pbs=html%20span%20p&csor=11&pwd=wangjichen&cb=jQuery1102009684849123971118_1628056613932&_=1628056614015

### 生命周期

