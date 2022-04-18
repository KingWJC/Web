# ECMAScript

ES是一种由ECMA组织(欧洲计算机制造商协会)制定和发布的脚本语言规范。

JavaScript是ECMAScript的实现，平时我们所说的JavaScript和ECMAScript是同一个意思

ES的几个重要版本

1. ES5：2009年发布
2. ES6(ES2015)：2015年发布
3. ES7(ES2016)：2016年发布
4. ES8(ES2017)：2017年发布

# ES5

## 严格模式

除了正常运行模式(混杂模式)，ES5添加了第二种运行模式：严格模式(strict mode)，这种模式使得JavaScript在更严格的语法条件下运行

作用：避免JS语法中的一些不合理、不严谨的地方，减少一些怪异的行为，消除代码运行的一些不安全的地方

使用：在全局或者函数的第一条语句定义为：'use strict';	如果浏览器不支持，只解析为一条简单的语句，没有任何副作用.

规范:

1. 必须使用var声明变量
2. 禁止自定义函数中的this指向window
3. 创建eval作用域
4. 对象不能有重名的属性

## Json对象扩展

1. JSON.stringify(obj/arr)：js对象(数组)转换为json对象(数组)
2. JSON.parse(json)：json对象(数组)转换为js对象(数组)

**注意：所谓的json对象和json字符串或者js数组等其实就是一个字符串，只不过其格式是json格式，本质还是字符串，严格意义上来讲，没有json对象只有json字符串**

## Object对象扩展

ES5给Object扩展了一些方法，常用的2个：

1. Object.create(prototype,[descriptors])

   1. 作用：以指定对象为原型创建新的对象

   2. 第一个参数：指定对象的显示原型

   3. 第二个参数：为新的对象指定新的属性，并对属性进行描述

      value：指定值

      writable：标识当前属性值是否可以被修改，默认为false

      configurable：标识当前属性是否可以被删除，默认为false

      enumerable：标识当前属性是否能用for in枚举，默认为false

2. Object.defineProperties(object,[descriptors])

   1. 作用：为指定的对象扩展多个属性

   2. 第一个参数：需要扩展属性的对象

   3. 第二个参数：为扩展属性定义getter和setter方法

      get：用来获取当前属性值的回调函数

      set：用来监听当前属性值的回调函数，并且实参为修改后的值

      这两种东西称为为存取器属性，一个用来取值，一个用来存值

      对象本身也有get和se这两个方法：get propertyName(){} 和 set propertyName(){}


**注意：扩展属性的getter方法只有在主动调用的时候才能执行，这种机制我们称之为惰性求值**

## 数组的扩展

1. Array.prototype.indexOf(value)：得到值在数组中的第一个下标
2. Array.prototype.lastIndexOf(value)：得到值在数组中的最后一个下标
3. Array.prototype.forEach(function(item,index{}))：遍历数组
4. Array.prototype.map(function(item,index){})：遍历数组返回一个加工后的数组，在function中去加工
5. Array.prototype.filter(function(item,index){})：遍历数据返回一个过滤后的数组，在function中去过滤

# ES6

## var、let和const

var和let都是用来定义变量

const是用来定义常量的，**const声明的变量必须赋值，且不能再次被赋值**

var的特点：

1. var只有全局作用域和函数作用域，没有块级作用域
2. var可以在同一个作用域下多次声明同一变量
3. var可以在声明语句前使用

var引发的问题：

1. **变量提升**：js代码会被js解释器进行编译，转换成二进制编码，在js解释器进行编译的过程当中其会做一个叫做“预编译”的事情，在预编译阶段，js解释器会将所有的声明语句提升到其作用域之前，而赋值语句保持不变，而var变量没有块级作用域的限制，所以其会被提升到外层的函数作用域或者全局作用域中
2. 判断语句、循环语句和{}就是块级作用域，而由于var声明的变量无视块级作用域，导致其会提升到外层的作用域或者全局作用域中。
3. 多次声明同一名称变量和未声明之前访问变量明显在大多数语言中是不被允许的

**let定义的变量受块级作用域的限制，不会出现变量提升的问题**

**结论：变量声明使用let，不要使用var**

## 变量的解构赋值

从对象或数组中提起数据，并赋值给变量(多个)

```js
//对象的解构赋值 
let { username, age } = { username: '张三', age: '12' };
//数组的解构赋值
let [a, b, c, d, e] = [1, 2, 3, 'a', true];
```

**注意：变量的解构赋值在函数中的应用**

## 箭头函数

1. 作用：定义匿名函数

2. 基本语法：

   ```js
   //没有参数
   let foo = ()=>console.log('我是回调函数');
   //一个参数
   let foo = index => index*10;
   //多个参数
   let foo = (item,index)=>index*10;
   //一条语句的情况下，函数体不用大括号，默认返回该语句执行结果
   //以下语句或默认返回index*10之后的结果
   let foo = (item,index)=>index*10;
   //函数体如果有多条语句，需要用{}包围，如果需要返回值，需要手动返回
   let foo = (item,index)=>{
       console.log(item);
       return index(10;)
   }
   ```

3. 使用场景：多用来定义回调函数

4. 箭头函数的this指向问题

   箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候所处的对象决定的。

   **箭头函数的this看外层是否有函数，如果有函数，外层函数的this就是箭头函数的this，如果没有则this是window**

## Promise对象

Promise对象代表了未来某个将要发生的事情(通常是一个异步操作)，其有三个状态

1. pending：初始化Promise对象后的状态
2. fullfilled：成功状态
3. reject：失败状态

有了Promise对象，可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数(回调地狱)

通常使用Promise对象处理网络请求

```js
//1.创建Promise对象
let promise = new Promise((resolve,reject)=>{
    //发送异步请求
    xxx
    //请求成功
    resolve(data);
    //请求失败
    reject(error);
})
//2.调用Promise对象的then方法
promise.then((data)=>{
    //处理请求成功后的逻辑
},(error)=>{
    //处理请求失败后的逻辑
})
```

方法：

1. all：提供了并行执行异步操作的能力，在all中所有异步操作结束后才执行回调。

   ```javascript
   Promise.all([p1(),p2(),p3()]).then(function(data){
       console.log(data);
   })
   ```

2. race：提供了并行执行异步操作的能力，在race中第一个异步操作结束后执行回调。

   ```javascript
   Promise.race([p1(),p2(),p3()]).then(function(data){
       console.log(data);
   })
   ```

## Symbol

ES6中添加的一种**原始的数据类型**，已有的原始数据类型(String，Number，Boolean，null，undefined，Object)

**作用：**

可以表示独一无二的值，比如定义对象的唯一属性名，定义不会重复的常量等

**特点**

1. Symbol不是构造函数，不能使用new关键字
2. Symbol()括号中的内容代表Symbol的描述，只是为了方便开发中辨识，并不是Symbol的值
3. 每一个Symbol类型的数据都是独一无二的，使用==或者===返回的永远都是false
4. Symbol值不能与其他数据进行计算，包括字符串拼接
5. for in，for of遍历时不会遍历Symbol属性
6. Symbol可以显式的转换为字符串和布尔值(永远是true)，但是不能转换为数字

**语法**

```js
//参数表示对当前Symbol的一个描述。可以不写
let symbol = Symbol('name'); 
```

**使用场景**

1. 类似于枚举的使用场景

2. 可以用来定义对象的唯一属性名

   ```js
   let sex = Symbol();
   let user = {
       name:'张三',
       age:12
   }
   use[sex] = '男';
   
   let user = {
       name:'张三',
       age:12,
       [sex]:'男'
   }
   ```

## Iterator

**重点理解**

Iterator是一种接口机制，为各种不同的数据结构提供统一的访问机制

**作用**

1. 为各种数据解构提供一个统一的，简便的访问接口；
2. 使用数据结构的成员能够按照某种次序排列
3. ES6添加了一种新的遍历方式 for of 循环，iterator接口主要供for of消费

**原理**

1. 创建了一个指针对象（遍历器对象），指向数据结构的起始位置。

2. 第一次调用next方法，指针自动指向数据解构的第一个成员。

3. 接下来不断的next方法，指针会一直向后移动，直到指向最后一个成员。

   每次调用next方法返回的是一个包含value和done的对象，

   value表示当前成员的值，done是一个布尔值，表示当前的数据结构是否遍历结束，

4. 当遍历结束的时候返回的value值为undefined，done值为true

```js
//通过自己实现的迭代器更好的理解iterator迭代器
function myiterator() {
    let arr = this;
    let index = 0;
    return {
        next: function () {
            let item = { value: arr[index], done: arr[index] == undefined };
            index++;
            return item;
        }
    };
}
arr.myiterator = myiterator;
let test = arr.myiterator();
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
```

**使用**

将iterator接口部署到指定的数据类型上，可以使用for of去遍历循环

部署iterator接口的对象：数字，字符串，arguments对象，set容器，map容器

使用三点运算符实际上是在调用其iterator接口

```js
let arr = [1, 2, 3, 4, 5];
console.dir(arr[Symbol.iterator]);
let iterator = arr[Symbol.iterator]();
let value1 = iterator.next();
console.log(value1);
value1 = iterator.next();
console.log(value1);
value1 = iterator.next();
console.log(value1);
value1 = iterator.next();
console.log(value1);
value1 = iterator.next();
console.log(value1);
value1 = iterator.next();
console.log(value1);
```

## Generator函数

ES6提供的解决异步编程的方案之一

**原理**

1. Generator函数是一个状态机，内部封装了不同状态的数据，用来生成遍历器对象
2. 也叫做可暂停函数(惰性求值函数)，yield可暂停，next方法可启动，每次返回的是yield后的表达式的结果

**特点**

1. function与函数之间有一个*号

2. 内部用yield表达式来定义不同的状态

   ```js
   function* foo() {
       let result = yield 'start'; //状态为start
       yield 'end'; //状态为start
   }
   ```

3. Generator函数返回的是指针对象，而不会执行函数内部逻辑

4. 调用next方法函数内部逻辑开始执行，遇到yield表达式停止，返回{value:yield后的表达式结果,done:是否结束当前函数逻辑}

5. 再次调用next方法会从上一次停止时的yield处开始，直到最后

6. yield语句返回结果通常为undefined，当调用next方法时传参内容会作为启动时yield语句的返回值

**场景**

1. 使用Generator函数给对象绑定一个迭代器，其实可以通过for of遍历
2. 处理异步请求，解决"回调地狱"的又一种方法

## 扩展方法

### 字符串扩展

1. includes(str)：判断是否包含指定的字符串
2. startsWith(str)：判断是否以指定字符串开头
3. endsWith(str)：判断是否以指定字符串结束
4. repeat(count)：将目标字符串重复指定次数后返回

### 数字的扩展

1. 二进制用0b表示，八进制用0o表示
2. Number.isFinite(num)：判断是否是有限大的数
3. Number.isNaN(num)：判断是否是NaN
4. Number.isInteget(num)：判断是否为整数
5. Number.parseInt(str)：将字符串转化为对应的数值
6. Math.trunc(i)：直接舍弃小数部分

### 数组的扩展

1. Array.from(arr)：将伪数组对象或可遍历对象转换为真数组
2. Array.of(v1,v2,v3)：将多个值转换成数组
3. find(function(value,index,arr){})：找出第一个满足条件返回true的值
4. findIndex(function(value,index,arr){})：找出第一个满足条件返回true的元素索引

### 对象的扩展

1. Object.is(v1,v2)：判断两个对象是否相等

   **注意：以下代码的输出结果**	

   ```js
   console.log(0 == -0); //true
   console.log(NaN == NaN); //false
   console.log(Object.is(0, -0)); //false
   console.log(Object.is(NaN, NaN)); //true
   ```

2. Object.assign(target,source1,source2,...)：将源对象的属性复制到目标对象上

3. proto属性：直接操作对象的隐式原型

## 克隆

基本数据拷贝后会生一份新的数据，修改拷贝数据不会影响原数据

对象和数组拷贝之后不会生成新的数据，而是在拷贝引用，修改拷贝以后的数据会影响原来的数据

1. 直接复制给变量：浅拷贝
2. Object.assign()：浅拷贝
3. Array.prototype.concat()：浅拷贝
4. Array.prototype.slice()：浅拷贝
5. JSON.parse(JSON.stringify())：深拷贝(深度克隆)，但是注意不能克隆对象或者数组中的函数

**浅拷贝**

拷贝引用，修改拷贝以后的数据会影响原来的数据，导致数据安全隐患

**深拷贝(深度克隆)**

拷贝的时候生成新的数据，修改拷贝以后的数据不会影响原来的数据

## 模块化开发

常见的模块化规范：CommonJS、AMD、CMD、Modules(ES6)

**CommonJS的导入和导出**

1. 导出 ：module.exports = {patient:pat,foo:foo}
2. 导入：let {pat,foo}= require('index.js')

**ES6的导入和导出**

1. 导出：export default {patient:pat,foo:foo};
2. 导入：import {pat,foo} from 'xxx.js';

## 其它改进

1. 模板字符串：简化字符串的拼接

   使用+拼接字符串比较复杂，容易拼错，推荐使用模板字符串

2. 对象的简写：省略同名的属性值，省略方法的function

3. 三点(...)运算符

   1. 作用：定义rest(可变)参数，用来取代arguments，但比arguments灵活，只能是最后部分形参参数

   2. 扩展运算符

      ```js
      //数组合并
      let arr1 = [1,6];
      let arr2 = [2,3,4,5];
      arr1 = [1,...arr2,6];
      //遍历数组
      console.log(...arr1);
      ```

4. 形参默认值：定义函数参数的默认值

   ```js
   function(x=0,y=0)
   {
       this.x = x;
       this.y = y;
   }
   ```

5. Set、Map容器

   1. Set：无序不可重复的多个value集合体

      ```js
      let set = new Set([2, 3]);
      set.add(1);
      set.delete(2);
      set.has(3);
      set.clear();
      console.log(set.size);
      ```

   2. Map：无序的、不重复的多个key-value的集合体

      ```js
      let map = new Map([
          ['username', '张三'],
          ['age', '12岁']
      ]);
      map.set(key,value);
      map.get(1);
      map.delete(2);
      map.has(3);
      map.clear();
      console.log(map.size);
      ```

# ES7

1. 幂(指数)运算符：**
2. Array.prototype.includes('xxx')：判断数组中是否包含某个值

# ES8

## Async函数

解决"回调"地狱的又一种方法

真正意义上去解决异步回调的问题，同步流程表达异步操作

本质是Generator函数的语法糖

**语法**

```js
async function foo(){
	await 异步请求1;
	await 异步请求2=;
}
```

**特点**

1. 不需要像Generator函数去调用next方法，遇到await等待当前的异步操作完成就往下执行
2. 返回的总是Promise对象，可以用then方法进行下一步操作
3. async取代Generator函数的星号*，await取代Generator的yield
4. 语义上更加明确，使用简单

## 对象方法扩展

1. Object.values()：返回对象的属性值，封装成一个数组
2. Object.entries()：返回对象的属性名和属性值，封装成一个二维数组
3. Object.getOwnPropertyDescriptors()：返回对象的属性的描述对象

# ES9

## 对象的rest可变参数

```js
function foo({ name, age, ...others }) {
    console.log(name);
    console.log(age);
    console.log(others);
}
foo({
    name: '张三',
    age: 12,
    sex: '男',
    salary: 100000000000
});
```

## 对象的扩展运算符

```js
let class1 = {
  a: '语文'
};
let class2 = {
  b: '数学'
};
let class3 = {
  c: '英语'
};
let class4 = {
  d: '物理'
};
let class5 = {
  e: '化学'
};
let classes = { ...class1, ...class1, ...class3, ...class4, ...class5 };
console.log(classes);
```

