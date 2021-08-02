### 定义

jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。

jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。

它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。

### 核心特性

1. 具有独特的链式语法和短小清晰的多功能接口；
2. 具有高效灵活的css选择器，并且可对CSS选择器进行扩展；
3. 拥有便捷的插件扩展机制和丰富的插件。
4. 可以进行DOM操作、节点事件处理、简单2D动画等。（支持链式语法)

### 安装

jquery-2.0以上版本不再支持IE 6/7/8

源码：http://www.jq22.com/jquery-info122

```html
<script src="./js/jQuery.min.js"></script>

<!--或通过CDN（内容分发网络） 引用它-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js">
```

### 语法

jQuery 语法是为 HTML 元素的选取编制的，可以对元素执行某些操作。

基础语法是：*$(selector).action()*

- 美元符号定义 jQuery
- 选择符（selector）“查询”和“查找” HTML 元素
- jQuery 的 action() 执行对元素的操作

为了防止文档在完全加载（就绪）之前运行 jQuery 代码，所有 jQuery 函数位于一个 document ready 函数中

```javascript
$(document).ready(function(){
--- jQuery functions go here ----
});
```

### 选择器

选择器允许您对 DOM 元素组或单个 DOM 节点进行操作。

```javascript
//元素标签选择器
$("p") 选取 <p> 元素。
$("p.intro") 选取所有 class="intro" 的 <p> 元素。
$("p#demo") 选取所有 id="demo" 的 <p> 元素。
//元素属性选择器
$("[href]") 选取所有带有 href 属性的元素。
$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。
// jQuery CSS 选择器可用于改变 HTML 元素的 CSS 属性。
// 一般情况下单位px可以省略，中间带有横杠的样式【font-size、padding-left】可以变为驼峰写法
$("p").css({
    "color": "red",
    "fontSize": 30,
    "background": "cyan",
    "textAlign": "center"
})
//综合示例
$(this)					//当前 HTML 元素
$("div#intro .head")	//id="intro" 的 <div> 元素中的所有 class="head" 的元素
$("ul li:first")		//每个 <ul> 的第一个 <li> 元素
```

### 事件

jQuery 事件处理方法是 jQuery 中的核心函数。

事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。术语由事件“触发”（或“激发”）经常会被使用。

通常会把 jQuery 代码放到 <head>部分的事件处理方法中：

```html
<html>
<head>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(){
    $("button").click(function(){
    	$("p").hide();
    });
    
    $("div").click(function () {
        f++;
        //修改div的字号大小
        $(this).css({
            "fontSize": f
        })
    });
});
</script>
</head>
```

| Event 函数                      | 绑定函数至                                     |
| :------------------------------ | :--------------------------------------------- |
| $(document).ready(function)     | 将函数绑定到文档的就绪事件（当文档完成加载时） |
| $(selector).click(function)     | 触发或将函数绑定到被选元素的点击事件           |
| $(selector).dblclick(function)  | 触发或将函数绑定到被选元素的双击事件           |
| $(selector).focus(function)     | 触发或将函数绑定到被选元素的获得焦点事件       |
| $(selector).mouseover(function) | 触发或将函数绑定到被选元素的鼠标悬停事件       |

### 总结

由于 jQuery 是为处理 HTML 事件而特别设计的，那么当您遵循以下原则时，您的代码会更恰当且更易维护：

- 把所有 jQuery 代码置于事件处理函数中
- 把所有事件处理函数置于文档就绪事件处理器中
- 把 jQuery 代码置于单独的 .js 文件中
- 如果存在名称冲突，则重命名 jQuery 库

### $名称冲突

1. 某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。

2. jQuery 使用名为 noConflict() 的方法来解决该问题。

   *var jq=jQuery.noConflict()*，帮助您使用自己的名称（比如 jq）来代替 $ 符号。

### 特效

1. slideUp:可以让元素向上卷起，它传递参数2000代表动画时间（MS）

2. slideDown:可以让元素向下展开，它传递参数2000代表动画时间（MS）

3. fadeOut:可以让元素淡出，它传递参数2000代表动画时间（MS）

4. fadeIn:可以让元素淡入，它传递参数2000代表动画时间（MS）

5. animate函数，可以执行 CSS 属性集的自定义2d动画，

   1. 该方法通过CSS样式将元素从一个状态改变为另一个状态。

   2. CSS属性值是逐渐改变的，这样就可以创建动画效果。

   3. 只有数字值可创建动画。

   4. $(selector).animate(JSON,TIME,CALLBACK);

      JSON：动画属性设置【left、width、top等等】

      TIME：动画时间设置（单位是MS）

      CALLBACK：函数，这个函数会在动画结束的时候执行一次

   5. stop(true):将匹配元素全部动画清除，解决动画积累问题

### DOM操作

1. 获得和设置元素的内容

   - text() - 设置或返回所选元素的文本内容
   - html() - 设置或返回所选元素的内容（包括 HTML 标记）
   - val() - 设置或返回表单字段的值

2. 获取和设置属性 - attr()

   ```javascript
   $("button").click(function(){
     $("#w3s").attr({
       "href" : "http://www.w3school.com.cn/jquery",
       "title" : "W3School jQuery Tutorial"
     });
     //使用回调函数，修改原始值，回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。
     $("#w3s").attr("href", function(i,origValue){
       return origValue + "/jquery";
     });
   });
   ```

3. 添加新内容的四个 jQuery 方法：

   - append() - 在被选元素的结尾插入内容
   - prepend() - 在被选元素的开头插入内容
   - after() - 在被选元素之后插入内容
   - before() - 在被选元素之前插入内容

   ```javascript
   function afterText()
   {
       var txt1="<b>I </b>";                    // 以 HTML 创建新元素
       var txt2=$("<i></i>").text("love ");     // 通过 jQuery 创建新元素
       var txt3=document.createElement("big");  // 通过 DOM 创建新元素
       txt3.innerHTML="jQuery!";
       $("img").after(txt1,txt2,txt3);          // 在 img 之后插入新元素
   }
   ```

4. 删除元素和内容，

   - remove() - 删除被选元素（及其子元素）
   - empty() - 从被选元素中删除子元素

5. CSS 操作的方法。

   - addClass() - 向被选元素添加一个或多个类
   - removeClass() - 从被选元素删除一个或多个类
   - toggleClass() - 对被选元素进行添加/删除类的切换操作
   - css() - 设置或返回样式属性

6. 处理元素和浏览器窗口的尺寸

   width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。

   height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。

   innerWidth() 方法返回元素的宽度（包括内边距）。

   innerHeight() 方法返回元素的高度（包括内边距）。

   outerWidth() 方法返回元素的宽度（包括内边距和边框）。

   outerHeight() 方法返回元素的高度（包括内边距和边框）

   outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）。

   outerHeight(true) 方法返回元素的高度（包括内边距、边框和外边距）。

### 遍历

遍历 DOM 树：

1. 向上找父级
   1. parent() 方法返回被选元素的直接父元素。
   2. parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。
   3. parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素。
2. 向下找子级
   1. children() 方法返回被选元素的所有直接子元素。
   2. find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。
3. 同级
   1. siblings() 方法返回被选元素的所有同胞元素。
   2. next() 方法返回被选元素的下一个同胞元素。
   3. nextAll() 方法返回被选元素的所有跟随的同胞元素。
   4. nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素。
   5. prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，返回向前的元素。
4. 过滤
   1. :first,可以获取某一个匹配标签的第一个元素
   2. :last,可以获取到某一个匹配标签最后一个元素
   3. :even,代表的是偶数选择器
   4. :odd，代表的是奇数选择器
   5. :gt(index)，索引大于选择器
   6. :lt(index)，索引小于选择器 
   7. eq(index)  方法返回被选元素中带有指定索引号的元素。首个元素的索引号是 0。
   8. filter() 方法允许您规定一个标准。匹配的元素会被返回。
   9. not() 方法返回不匹配标准的所有元素。

```javascript
$(document).ready(function(){
  //返回介于 <span> 与 <div> 元素之间的所有祖先元素
  $("span").parentsUntil("div");
  //返回带有类名 "intro" 的所有 <p> 元素
  $("p").filter(".intro");
});
```

### JQueryUI插件

https://jqueryui.com/ 学习手册

概述：jQueryUI是JQ函数库一个插件。

插件：就是在JQ已有的功能基础之上，在添加一个其他功能。

注意：jQueryUI是JQ插件【也是一个JS函数库】，需要注意这个函数库依赖JQ

```html
<!-- 引入JQ -->
<script src="./js/jQuery.min.js"></script>
<!-- 引入插件 -->
<script src="./js/jquery-ui.min.js"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="./js/jquery-ui.min.css">

<input type="text">

<script>
    //拖拽
    $("div").draggable();
    //排序拖拽
    $("ul").sortable();
    //日历
    $("input").datepicker();
</script>
```

