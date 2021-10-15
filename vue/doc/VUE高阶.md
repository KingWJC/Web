### 生命周期

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数.

生命周期钩子的 `this` 上下文指向调用它的 Vue 实例.

不要在选项 property 或回调上使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。

![Vue 实例生命周期](images/lifecycle.png)

### 计算属性

computed: 对于任何复杂逻辑，你都应当使用**计算属性**.

**它是基于它们的响应式依赖进行缓存的**。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数.

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：

```javascript
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
//现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新
```

### 侦听器

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**, 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的. 

使用 `watch` 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的.

但其它情况下, 通常更好的做法是使用计算属性而不是命令式的 `watch` 回调.

watch函数名要与监听属性一致.

### 组件

![image-20210805174837082](images/image-20210805174837082.png)

1. **一个组件的 `data` 选项必须是一个函数**，返回的是一个对象，因此每个实例可以维护一份被返回对象的独立的拷贝，防止数据之间冲突。

   这个是JavaScript的原理，如果直接返回数据地址，会造成多个引用，引用同一个对象的问题。而函数中return新对象，会让每个实例都生成独立的新对象。

2. 最外层必须有默认暴露export default{}, 所有的vue的对象清单都必须在export default里面去罗列

3. 使用组件三步走

   \1)  创建vue文件

   \2)  在要渲染的地方引入该组件

   \3)  注册该组件

4. 为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。

   这里有两种组件的注册类型：**全局注册**和**局部注册**。

   `Vue.component` 是全局注册，对象内部conponents{} 是局部注册。

5. 组件传值有3种。

   1. 父组件通过 props 向子组件传递数据

      **单向数据流**：所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解

      两种常见的试图变更一个 prop 的情形：

      1. **这个子组件接下来希望将其作为一个本地的 prop 数据来使用。**在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值。
      2. **这个 prop 以一种原始的值传入且需要进行转换。**在这种情况下，最好使用这个 prop 的值来定义一个计算属性。
      3. 原因：JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身**将会**影响到父组件的状态。

      类型检查： prop 会在一个组件实例创建**之前**进行验证，所以实例的 property (如 `data`、`computed` 等) 在 `default` 或 `validator` 函数中是不可用的

      ```vue
      Vue.component('my-component', {
        props: {
          // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
          propA: Number,
          // 多个可能的类型
          propB: [String, Number],
          // 必填的字符串
          propC: {
            type: String,
            required: true
          },
          // 带有默认值的数字
          propD: {
            type: Number,
            default: 100
          },
          // 带有默认值的对象
          propE: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
              return { message: 'hello' }
            }
          },
          // 自定义验证函数
          propF: {
            validator: function (value) {
              // 这个值必须匹配下列字符串中的一个
              return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
          }
        }
      })
      ```

   2. 注意由于vue的属性对大小写不敏感，所以如果需要写驼峰命名，需要使用-隔开，比如msb-value代表的就是msbValue

   3. 子组件可以通过调用内建的 `$emit`方法并传入事件名称来触发一个事件, 

      还可以使用事件抛出一个值, 父级组件监听这个事件的时候，可以通过 `$event` 访问到被抛出的这个值. 

      或者作为第一个参数传入事件处理函数的方法.

      ![image-20211015171620295](images/image-20211015171620295.png)

   4. 兄弟组件之间，通过中央管道：就是将Vue实例作为原型对象的属性值，然后所有Vue组件都可以使用它（根组件和子组件）来进行事件的监听和触发，实现组件间通信。

      ```vue
      Vue.prototype.$custom = new Vue
      this.$custom.$on('eventName',($event)=>{ console.log($event) })
      this.$custom.$emit('eventName',this.info)
      ```

6. 属性Attribute的继承。

   1. 组件中非 Prop 的 Attribute：是指传向一个组件，但是该组件并没有相应 prop 定义的 attribute，这些 attribute 会被添加到这个组件的根元素上。
   2. Attribute的替换和合并：大多数attribute，从外部提供给组件的值回替换掉组件内部设置好的值。但class和style的attribute会合并。
   3. 禁用attribute继承：可以在组件的选项中设置 `inheritAttrs: false`。

7. 每个组件必须只有一个根元素，单个根元素

8. 组件上使用 v-model

   ```vue
   <custom-input v-model="searchText"></custom-input>
   <!--等价于-->
   <custom-input v-bind:value="searchText" v-on:input="searchText = $event"></custom-input>
   
   Vue.component("custom-input",{
   	props:['value'],
   	template:
       '<input\
         v-bind:value="value"\
         v-on:input="$emit('input', $event.target.value)"\
       >'
   })
   ```

9. 通过插槽分发内容：slot元素。

10. 动态组件：`is` attribute 

11. 解析DOM模板：有些 HTML 元素，诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，对于哪些元素可以出现在其内部是有严格限制的，

    ```vue
    <table>
      <blog-post-row></blog-post-row>
    </table>
    <!--这个自定义组件 <blog-post-row> 会被作为无效的内容提升到外部，并导致最终渲染结果出错,需改为-->
    <table>
      <tr :is="blog-post-row"></tr>
    </table>
    ```

    需要注意的是**如果我们从以下来源使用模板的话，这条限制是\*不存在\*的**：

    - 字符串 (例如：`template: '...'`)
    - 单文件组件(.vue)
    - 脚本文件<script type='text/x-temlate'>

