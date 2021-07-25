

JavaScript定义：是开发web脚本语言，可以嵌套在静态页面中可以给静态页面添加一些动态效果。

### 组成

| ECMAScript | 欧洲计算机协会每年6月份定时语法规范                      |
| ---------- | -------------------------------------------------------- |
| DOM        | Document  Object Model  文档对象模型（经常用来操作标签） |
| BOM        | Browser  Object Model  浏览器对象模型（模拟浏览器）      |

#### DOM

就是系统内置引用类型对象document，树状结构。

属性

1. documentElement属性：可以获取页面中HTML标签
2. head属性:可以获取到head标签
3. body属性：可以获取到body标签
4. title属性：可以操作title标签文本

方法

1. getElementById：通过标签的ID选择器匹配任意节点树上的标签。
2. createElement：创建指定标签。

操作

1. 操作标签文本：表单元素，使用value属性。其它元素，使用innerHTML属性。
2. 操作标签属性：大多情况下，通过标签.属性名字进行操作，而标签的class属性，通过className属性值。
3. 操作标签行内样式：div.style.background=‘black';
4. 事件：div.onclick = function() { } 绑定元素的单击事件。
5. 动态创建标签：ul.appendChild()。

#### BOM

1. JS 代码还没运行的时候，JS 环境里已经有一个 window 对象了
2. window 对象有一个 Object 属性，window.Object 是一个函数对象
3. window.Object 这个函数对象有一个重要属性是 prototype
4. window.Object.prototype 里面有这么几个属性 toString（函数）、valueOf（函数）

### 书写格式

JavaScript属于脚本语言，JS语法一定嵌套在静态页面中，才可以运行；

1. JS语法必须放置在双闭合标签script里面
2. 双闭合标签script可以放置静态页面中任意地方（一般放置静态页面底部）
3. 程序当中当然可以有多个script标签
4. JS当中字符串，外层需要加上双引号或单引号
5. 每行代码最后面加上一个分号：代表的是这行语句结束

### 数据类型

##### 包含基本数据类型（5） 

| 数据类型          | 数值            |
| ----------------- | --------------- |
| String：字符串    | “我爱你祖国”    |
| Number：数字类型  | 100，3.14，-666 |
| Boolean：布尔类型 | true、false     |
| Undefined：未定义 | undefined       |
| Null：空对象类型  | null            |

##### 引用类型【复杂数据类型】（1）

| 数据类型         | 数值                       |
| ---------------- | -------------------------- |
| Object: 引用类型 | 函数、数组、正则、DOM、BOM |

typeof 是JS当中一个关键字，可以检查数据类型

```js
console.log(typeof undefined);
```

### 变量

变量variable，用关键字var声明，未赋值的默认初始undefined。

1. 局部变量：函数形参、在函数体中声明变量，只能在函数体中使用
2. 全局变量：可以在JS行为层中任意地方使用。

作用域：是书写代码范围：

1. 全局作用域：你可以理解为两个双闭合标签script之间
2. 函数作用域：函数体

### 运算符

包括算术运算符，比较运算符、逻辑运算符、赋值运算符

##### 算术运算符

除了数字以外，其他类型数据需要隐式转换为数字，

1. 隐式转换由系统内置函数Number自动完成。
2. NaN是数字类型一个特殊值：这个数字进行数学运算的时候都是计算不出结果（NaN）
3. 未定义类型数据，undefined=>NaN
4. 空对象类型，null=>0
5. 布尔值，true=>1    false=>0
6. 字符串，加号遇见字符串称之为连字符：将数据从左到右拼接为字符串。

##### 比较运算符

除了数字以外，其他类型数据需要隐式转换为数字参与。（字符串特殊）

1. 两个等号（==, !=）：相等比较运算符   (只看数值是否一样)
2. 三个等号（===, !==）：全等比较 （即看数值又看类型比较）
3. 如果是字符串和字符串进行表：通过的是ASCII码数值进行比较。

##### 逻辑运算符

或||，与&&，非！。除了布尔值以外数据，需要隐式转换为布尔值。

| 值           | 布尔值 |
| ------------ | ------ |
| 0            | False  |
| NaN          | False  |
| 非0、NaN数字 | true   |
| 空字符串     | False  |
| 非空字符串   | True   |
| undefined    | False  |
| null         | False  |

### 语句

条件语句 if else、循环语句for、while、do.while，break，continue，return。

```javascript
//for循环，变量i为全局变量，放在<script>内，函数外。
    for (var i = 0; i < 10; i++) {
        console.log(i);
        document.write("<h1>我爱你祖国</h1>");
    }
    //JS循环语句变量可以在循环体外边使用
    console.log(i);
//while  i=0隐式转为false；
    var i = 11;
    var sum = 0;
    while (i--) {
        sum += i;
    }
```

### 对象

只要是引用类型数据即为对象, 只有对象才可以通过点语法动态添加属性和方法.

#### 狭义对象

概述：在JS当中狭义对象用一个大花括号表示{}；

狭义对象可以拥有很多属性和方法.

```javascript
<script>
   //狭义对象:使用大花括号表示
   var obj = {  
		name:"小明",
    age:18,
    sex:"男",
    eat:function(){
         console.log("我可以吃八斤米饭");
    }
   };
   //修改属性值
   obj.name = "二哈";
   //动态添加属性、方法
   obj.color = "白加黑";
```

####   广义对象

概述：是引用类型数据，且除了自定义属性、方法以外, 系统提供内置属性和方法的对象.

```javascript
<script>
  //广义对象-----函数
  function People (a,b,c){

  }
  //name:系统提供内置属性，可以获取函数名字
  console.log(People.name);
  //length：系统提供内置属性，可以获取函数形参个数
  console.log(People.length);
  //动态添加自定义属性
  People.xingming = "我是小明";
  People.age = 18;
  console.log(People.xingming);

  //广义对象------数组
  var arr = ["吃饭",'睡觉','打豆豆'];
  console.log(arr.length);
  console.log(arr.reverse());
  //动态添加属性和方法
  arr.xingming ="小红";
  arr.age = 18;
  console.log(arr.xingming);
</script>
```

### 函数

函数使用也是分为两部分：声明+调用。用关键字function进行声明，参数为形参。调用时的参数为实参。

JS中如果有多个重名的函数，永远是后者覆盖前者。

return关键字只能在函数体中使用，返回函数计算结果，return关键字后面语句不再执行。

#### 内置功能函数

1. 警告框-alert
2. 提示框-prompt
3. 控制台打印数据 console.log
4. 类型转换为数字 Number

#### 函数上下文

函数上下文即为this，它只能在函数体中使用.

this 就是你 call 一个函数时，传入的第一个参数,  所以函数上下文数值取决函数该如何调用执行.

#### 函数调用

函数调用只有一种形式：func.call(context, p1, p2) , 其它都是语法糖，可以等价地变为 call 形式

- 函数名+小括号 :  函数上下文即为BOM【内置window对象】

  ```javascript
    function fun (){
        //这个this即为函数上下文
        console.log(this);
    }
    //如果是函数名+小括号调用函数上下文为window【所谓BOM对象】
    fun();  
    // 等价于func.call(undefined),可以简写为 func.call(), 
    // 因为浏览器里有一条规则, window 对象就是默认的 context（严格模式下默认 context 是 undefined）
   
    //如果你希望这里的 this 不是 window，很简单：
  	func.call(obj) // 那么里面的 this 就是 obj 对象了
  ```

- 函数作为狭义对象方法执行 :  函数的上下文最后打点对象

  ```javascript
     //狭义对象
     var obj = {
         name:"贾成豪",
         eat:function(){
             console.log(this.name+"我可以吃八级米饭");
         }
     }
  	//调用对象方法
  	obj.eat();
  	// 等价于obj.eat.call(obj)
  
    //打印出的 this 是 window
    var bar = obj.eat;
    bar();  //转换为 bar.call(), 由于没有传 context, 所以 this 就是 undefined, 最后浏览器给你一个默认的 this —— window 对象
  ```

- 函数作为事件处理函数执行 : 函数的上下文即为触发事件的当前标签.

  ```javascript
    //绑定单击事件
    div.onclick = function(){
       //函数体中上下文
       this.style.background = "red";
    }
  ```

- 定时器回调函数执行 : 函数上下文为BOM【内置window对象】.

  ```javascript
  <script>
    //定时器回调函数每隔一段事件执行一次
    //第一个参数：函数（称之为回调函数）
    //第二个参数：是一个数字（代表的是定时器间隔）单位MS
    setInterval(function(){
        console.log(this);
    },1500);
  </script>
  ```

- 函数作为数组元素枚举出来执行 : 函数的上下文为当前数组

  ```javascript
    var arr = [1,2,3,4,5,function(){
         console.log("我是数组里面函数----我执行了");
         this.reverse();
    },6,7,8,9,10];
    //枚举出函数执行
    arr[5]();  //转换为 arr.5.call(arr)
  ```

### 构造函数

也叫函数对象, 用于创建一个狭义对象.  构造函数就是所谓‘类’，通过四步走出来的狭义对象，称之为‘实例’：

#### 特征:

1. 构造函数的首个英文字母一般是大写的
2. 使用关键字new调用.
3. 构造函数可以返回一个狭义对象.

#### prototype原型

1. 任意构造函数天生都有一个prototype属性，指向一个空的狭义对象(一块内存)，这个内存里面有共用属性.
2. 实例天生拥有一个\__proto\__属性，指向上面的狭义对象, 使用它的共用属性,

```javascript
    function Dog(name,sex,age){
      //构造函数独有四步走
      //第一步：在函数体中神秘创建了一个空的狭义对象
      //第二步：函数的上下文指向当前的空的下一对象
      //第三步：通过点语法动态给狭义对象添加属性、方法
       this.name = name;
       this.sex  = sex;
       this.age = age;
      //第四步：虽然没有关键字new，但是系统会将当前这个狭义对象返回
      for(var i = 0 ; i < 10 ;i++){};
      if(true){};
    }
		//给类动态添加方法
    Dog.prototype.yaoren = function(){
        console.log("我可以咬人");
    }
    //调用函数
    var erha =  new Dog("二哈","公",3);
    var taidi  =  new Dog("泰迪","母",6);
   //因为这是两个不同对象，因为在堆空间当中内存地址不同
   console.log(erha,taidi);
	 //调用动态添加的方法
	 erha.yaoren()
	 taidi.__proto__.yaoren();
```

![img](images/v2-ad47ad13ffce5c03f4f6367f19ff12bb_1440w.jpg)

#### 原型链

1. 原型链 : 函数对象「读」属性的「搜索过程」, 是连着由 __proto__ 组成的链子一直走的.

   window.Object.prototype.\_\_proto\_\_为null .

   ```javascript
   var obj = {};
   obj.toString();
   // obj 变量指向一个空对象，这个空对象有个 __proto__ 属性指向 window.Object.prototype。
   // 调用 obj.toString() 的时候，obj 本身没有 toString，就去 obj.__proro__ 上面去找 toString。
   // 所以 obj.toString() 等价于 window.Object.prototype.toString.call(obj)
   
   var arr = []
   arr.push(1) // [1
   arr.valueOf() 
   // 让 arr 指向一个空的数组对象，然后 arr.__proto__ 指向 window.Array.prototype。
   // 1. arr.push(1) 等价于 window.Array.prototype.push.call(arr, 1)
   // 2. arr 没有 valueOf，于是去 arr.__proto__ 上找, arr.__proto__ 只有 pop、push, length，于是去 arr.__proto__.__proto__ 上找
   //    Array的父类是Object, 所以arr.__proto__.__proto__指向window.Object.prototype.
   //    arr.valueOf() 等价于 window.Object.prototype.valueOf.call(arr)
   ```

2. 共享原型链:  两个对象具有某些相同行为

   ```javascript
       var obj1 = { name: 'obj1' }
       var obj2 = { name: 'obj2' }
       // obj1.toString 和 obj2.toString 其实是同一个东西, window.Object.prototype.toString()
       console.log(obj1.toString() === obj2.toString()); //true
   
       obj2.__proto__.toString = function () {
           return '新的方法';
       };
   		// 改写 obj2.__proto__.toString，那么 obj1.toString 也会变
       console.log(obj1.toString());
       console.log(obj2.toString());
   ```

3. 差异化 : 直接赋值.

   ```javascript
   		obj.toString = function(){ return '新的 toString 方法' }
   ```

### 数组

1. array数组，引用类型数据，
2. 可以存储很多有序数据，可以是任意类型，
3. 用中括号表示。

```javascript
var arr=[]; //声明
arr[3]=12;  //增加
```

属性：length

#### 方法：

1. pop 数组尾处移除元素，返回的是移除掉的那项元素

2. push 在数组尾处添加元素，返回的数值是数组新增完元素总个数；

3. shift，unshift：在数组头部添加、移除元素。

4. reverse：顺序倒置。

5. concat：将多个数组合并为一个数组

6. join： 使用一个字符将数组拼接为字符串

7. slice：(起始索引值，结束索引值)，截取数组，

   截取的时候，包含起始位置，但是不包含结束位置、

   起始位置可以 为负向索引。

   对于原始数组没有任何影响

8. splice：(起始位置，长度)，删除元素，并向数组添加新元素。

   替换：arr.splice(2,2,"123","345")); 返回删除的元素。
   插入：arr.splice(2,0,"678")); 返回空

9. indexOf是数组方法，可以获取数组当中某一个元素索引值

   注意1：获取到的是从左到右第一个符合条件索引值

   注意2：如果获取的是数组里面没有元素，返回索引值是-1

#### 伪数组

1. 如果一个数组的 __*proto*__ 直接或间接指向 Array.prototye（用到了数组的共用属性），那么就是真数组
2. 如果一个数组的 __*proto*__ 没有直接或间接指向 Array.prototye，那么就是伪数组

```javascript
var realArr = {0: 'a', 1:'b', length: 2}
realArr.__proto__ = Array.prototype
// 这就是真数组（并不完全是）
// 基本等价于 realArr = ['a', 'b']
realArr.push !== undefined // true

var fakeArr = {0: 'a', 1:'b', length: 2}
// 这就是伪数组
realArr.push === undefined // true
```

### 
