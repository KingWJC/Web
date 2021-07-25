# HTML

### 定义：

Hyper Test Makeup Language 超级文本标记语言。是静态页面，由标签组成

### 结构

DOCTYPE，HTML，HEAD（META，TITLE），BODY。Style，Script。Script标签一般放置程序最下方

```html
<!DOCTYPE html>  <!--指定html的版本为html5，英文下开发-->
<html lang="en">  
	<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    		<meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!--放入网页描述，如link,meta,title,style,script-->
        <title>My website</title>
	</head>
	<body>
		<!--放入网页内容-->
        <h1>Hello world!</h1>
        <p>
            I'm a p tag! Hear is a 
            <!--页面间跳转-->
            <a href="http://freecodecamp.one" target="_blank">link</a>
        </p>
        <!--图片添加固定链接-->
        <a href="#">
            <img src="https://bit.ly/fcc-relaxing-cat" alt="image comment text">
        </a>
        <!--内部跳转-->
        <a href="#footer">link to end</a>
        <div>
            <p>three ordered items</p>
            <ol>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ol>
            <p>three unordered items</p>
            <ul>
                <li>mather</li>
                <li>father</li>
                <li>sister</li>
            </ul>   
        </div>
        <form action="/submit-cat-photo">
            <input type="text" placeholder="this is placeholder text" required>
            <p>
               	<lable for="indoor">
                    <input type="radio" id="indoor" name="in-out" checked>indoor</lable>
                <lable for="outdoor">
                    <input type="radio" id="outdoor" name="in-out">outdoor</lable>
            </p>
            <p>
                <label for="meat">
                    <input type="checkbox" id="meat" name="food" checked>Meat</label>
                <label for="fruit">
                    <input type="checkbox" id="fruit" name="food">Fruit</label>
                <label for="juice">
                    <input type="checkbox" id="juice" name="food">Juice</label>
            </p>
            <button type="submit">Submit</button>
        </form>
    	<footer id="footer">my app</footer>
	</body>
</html>
```

### 基础元素-标签

#### 块元素

特点：独占一行，在页面中是由上到下进行排列，元素如下：

1. 标题：head，h1-h6；h1主标题, h2副标题。
2. 段落：paragraph <P>
3. 容器：division（层）元素，是一个盛装其他元素的通用容器。
4. 有序列表：ordered lists
5. 无序列表：unordered lists
   1. li标签经常作为他们子元素一起使用
6. address
7. 音频：音频audio标签，只能播放下面三种音频格式，mp3、ogg、wav格式

#### 行内元素

特征：不是独占一行，从左到右进行排列

1. 图片：image, src, alt 属性的文本是当图片无法加载时显示的替代文本.
2. 锚点：anchor, href跳转，包含页面间跳转（增加target=“_blank”，在新的空白页上打开），页内跳转，固定链接。
3. span

#### 表单元素

1. 表单：form,向服务器提交数据的 Web 表单。action=“/url-where you want to submit form data"
2. 文本框：input, type="text", required必填。
3. 按钮：input, type="submit",表单的提交按钮
4. 单选框：input type="radio" 使用相同的name进行分组。
5. 复选框：input type="check-box"
6. 标签：label 

### HTML5新增元素

更具描述性的 HTML 元素

1. main：让搜索引擎和开发者瞬间找到网页的主要内容。
2. header
3. footer
4. nav
5. video
6. article
7. section

Canvas

1. canvas是HTML5中新增的一个双闭合标签【浏览器认为他是一张图片】
2. Canvas标签是由默认w（300）、h（150）
3. canvas标签w、h务必通过属性进行设置（别写样式设置）否则变形
4. canvas中标签文本、儿子标签都没有任何意义
5. Canvas最基本功能是绘制图形，需要注意画布任何操作都是通过2D上下文进行渲染

