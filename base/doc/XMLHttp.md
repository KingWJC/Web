### XMLHTTP 定义

> **XMLHTTP** 是一组[API](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FAPI)函数集，可被[JavaScript](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FJavaScript)、JScript、[VBScript](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FVBScript)以及其它[web浏览器](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FWeb%E6%B5%8F%E8%A7%88%E5%99%A8)内嵌的[脚本语言](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80)调用，通过[HTTP](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FHTTP)在浏览器和[web服务器](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FWeb%E6%9C%8D%E5%8A%A1%E5%99%A8)之间收发[XML](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FXML)或其它数据。XMLHTTP最大的好处在于可以动态地更新网页，它无需重新从服务器读取整个网页，也不需要安装额外的插件。该技术被许多网站使用，以实现快速响应的动态网页应用。例如：[Google](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FGoogle)的[Gmail](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FGmail)服务、Google Suggest动态查找界面以及[Google Map](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FGoogle%E5%9C%B0%E5%9B%BE)地理信息服务。
>
> XMLHTTP是**AJAX**网页开发技术的重要组成部分。除XML之外，XMLHTTP还能用于获取其它格式的数据，如[JSON](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FJSON)或者甚至纯文本。—— 维基百科

### XMLHTTP 背景知识

> XMLHTTP最初是由微软公司发明的，在[Internet Explorer](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FInternet_Explorer) 5.0中用作[ActiveX](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FActiveX)对象，可通过JavaScript、VBScript或其它浏览器支持的脚本语言访问。[Mozilla](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FMozilla)的开发人员后来在Mozilla 1.0中实现了一个兼容的版本。之后苹果电脑公司在[Safari](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FSafari) 1.2中开始支持XMLHTTP，而[Opera](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FOpera)从8.0版开始也宣布支持XMLHTTP。
>
> 大多数使用了XMLHTTP的设计良好的网页，会使用简单的JavaScript函数，将不同浏览器之间调用XMLHTTP的差异性屏蔽，该函数会自动检测浏览器版本并隐藏不同环境的差异。
>
> 在[DOM](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FDOM) 3（文档对象模型 Level 3）的读取和保存规范（Load and Save Specification）中也有类似的功能，它已经成为[W3C](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FW3C)推荐的方法。截止2011年，大多数浏览器已经支持。

### XMLHTTP 实现

- ActiveXObject
- XMLHttpRequest

#### 什么是 ActiveX 控件

Microsoft ActiveX 控件是由软件提供商开发的可重用的软件组件。使用 ActiveX 控件，可以很快地在网址、台式应用程序、以及开发工具中加入特殊的功能。例如，StockTicker 控件可以用来在网页上即时地加入活动信息，动画控件可用来向网页中加入动画特性。

#### ActiveXObject 对象

JavaScript 中 ActiveXObject 对象是启用并返回 Automation 对象的引用。

**ActiveXObject 语法**

```
newObj = new ActiveXObject(servername.typename[, location])复制代码
```

参数：

- newObj
  - 必选 - ActiveXObject 分配到的变量名称
- servername
  - 必选 - 提供对象的应用程序名称
- typename
  - 必选 - 要创建的对象的类型或类
- location
  - 可选 - 要再其中创建对象的网络服务器的名称

**ActiveXObject 使用**

```
// 在IE5.x和IE6下创建xmlHttp对象
// servername - MSXML2
// typename - XMLHTTP.3.0
var xmlHttp = new ActiveXObject('MSXML2.XMLHTTP.3.0');
xmlHttp.open("GET", "http://localhost/books.xml", false);  
xmlHttp.send();复制代码
```

详细信息可以参考 - [msdn - JavaScript 对象 - ActiveXObject 对象](https://link.juejin.cn?target=https%3A%2F%2Fmsdn.microsoft.com%2Fzh-cn%2Flibrary%2F7sw4ddf8(v%3Dvs.94).aspx)

#### XMLHttpRequest

XMLHttpRequest 是一个API, 它为客户端提供了在客户端和服务器之间传输数据的功能。它提供了一个通过 URL 来获取数据的简单方式，并且不会使整个页面刷新。这使得网页只更新一部分页面而不会打扰到用户。XMLHttpRequest 在 [AJAX ](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FAJAX)中被大量使用。

XMLHttpRequest 是一个 [JavaScript](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-cn%2FJavaScript) 对象，它最初由微软设计,随后被 Mozilla、Apple 和 Google采纳. 如今,该对象已经被 [W3C组织标准化](https://link.juejin.cn?target=http%3A%2F%2Fwww.w3.org%2FTR%2FXMLHttpRequest%2F). 通过它,你可以很容易的取回一个URL上的资源数据. 尽管名字里有XML, 但 XMLHttpRequest 可以取回所有类型的数据资源，并不局限于XML。 而且除了[HTTP](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-cn%2FHTTP) ,它还支持`file` 和 `ftp` 协议。

**XMLHttpRequest 语法**

```
var req = new XMLHttpRequest();复制代码
```

**XMLHttpRequest 使用**

```
var xhr = new XMLHttpRequest(); // 创建xhr对象
xhr.open( method, url );
xhr.onreadystatechange = function () { ... };
xhr.setRequestHeader( ..., ... );
xhr.send( optionalEncodedData );
```