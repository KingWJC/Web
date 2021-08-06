### 双向绑定原理

vue的双向绑定是由数据劫持结合发布者－订阅者模式实现的，

#### 数据劫持

就是通过Object.defineProperty()来劫持对象属性的setter和getter操作，在数据变动时做你想要做的事情。

Object.defineProperty() ：方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。可以控制一个对象属性的一些特有操作，比如读写权，是否可枚举。更多用法，可以参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

```javascript
var Book = {}
var name = ''
Object.defineProperty(Book, 'name', {
    set: function (value) {
        name = value
        console.log('set name as ' + value)
    },
    get: function () {
        console.log('get it')
        return '<' + name + '>'
    }
})
Book.name='my dream'
console.log(Book.name)
console.log(Book)
```

上述示例，通过Object.defineProperty( )这个方法设置了Book对象的name属性，对其get和set方法进行重写操作，get方法在获得name属性时被调用，set方法在设置name属性时被触发

打印Book，与vue打印data中定义的数据进行对比非常类似。

#### 订阅者和发布者模式，

通常用于消息队列中．一般有两种形式来实现消息队列，一是使用生产者和消费者来实现，二是使用订阅者－发布者模式来实现，其中订阅者和发布者实现消息队列的方式，就会用订阅者模式．

模式实现方法：

1. 
   初始化发布者、订阅者。
2. 订阅者需要注册到发布者，
3. 发布者发布消息时，依次向订阅者发布消息。

### 简易实现

#### 分析

实现目标：视图变化更新数据，数据变化更新视图。

view变化更新data：通过事件监听实现，比如input标签监听input事件。

data变化更新view：通过Object.defineProperty()设置的set函数。当属性变化时就会触发这个函数。

#### 实现

实现步骤：

1. 监听器Observer，数据劫持：首先要设置一个监听器Observer,用来监听所有的属性。当属性变化时，就需要通知订阅者Watcher,看是否需要更新。
2. 订阅者Watcher：收到属性的变化通知并执行相应的函数，从而更新视图。
3. 消息订阅器Dep：因为属性可能是多个，所以会有多个订阅者，故我们需要一个消息订阅器Dep来专门收集这些订阅者，并在监听器Observer和订阅者Watcher之间进行统一的管理．
4. 解析器Compile：因为在节点元素上可能存在一些指令，所以我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令初始化成一个订阅者Watcher，并替换模板数据并绑定相应的函数
5. 这时候当订阅者Watcher接受到相应属性的变化，就会执行相对应的更新函数，从而更新视图。

流程图如下：

![img](https://img-blog.csdn.net/20180224145638410?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGlzaGFubGVpbGl4aW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

源码下周：github Clone with HTTPS:https://github.com/2686685661/SelfVue.git

参考：

https://blog.csdn.net/weixin_37861326/article/details/80854763