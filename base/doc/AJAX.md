### 定义

**AJAX**即“**Asynchronous JavaScript and XML**”（异步的[JavaScript](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FJavaScript)与[XML](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FXML)技术），指的是一套综合了多项技术的浏览器端网页开发技术

Ajax = 异步 [JavaScript](https://baike.baidu.com/item/JavaScript) 和 XML 或者是 HTML（[标准通用标记语言](https://baike.baidu.com/item/标准通用标记语言/6805073)的子集）。

Ajax 是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。在页面没有重新加载情况下可以实现页面局部更新

传统的Web应用允许用户端填写表单（form），当提交表单时就向[网页服务器](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%E7%B6%B2%E9%A0%81%E4%BC%BA%E6%9C%8D%E5%99%A8)发送一个请求。服务器接收并处理传来的表单，然后送回一个新的网页，但这个做法浪费了许多带宽，因为在前后两个页面中的大部分HTML码往往是相同的。由于每次应用的沟通都需要向服务器发送请求，应用的回应时间依赖于服务器的回应时间。这导致了用户界面的回应比本机应用慢得多。

与此不同，AJAX应用可以仅向服务器发送并取回必须的数据，并在客户端采用JavaScript处理来自服务器的回应。因为在服务器和浏览器之间交换的数据大量减少（大约只有原来的5%）[[来源请求\]](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FWikipedia%3A%E5%88%97%E6%98%8E%E6%9D%A5%E6%BA%90),服务器回应更快了。同时，很多的处理工作可以在发出请求的[客户端](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%E5%AE%A2%E6%88%B7%E7%AB%AF)机器上完成，因此Web服务器的负荷也减少了。

类似于[DHTML](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FDHTML)或[LAMP](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FLAMP)，AJAX不是指一种单一的技术，而是有机地利用了一系列相关的技术。虽然其名称包含XML，但实际上数据格式可以由[JSON](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FJSON)代替，进一步减少数据量，形成所谓的AJAJ。而客户端与服务器也并不需要异步。一些基于AJAX的“派生／合成”式（derivative/composite）的技术也正在出现，如[AFLAX](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FAFLAX)。

### AJAX 应用

- 运用[XHTML](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FXHTML)+[CSS](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FCSS)来表达信息；
- 运用[JavaScript](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FJavaScript)操作[DOM](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%E6%96%87%E4%BB%B6%E7%89%A9%E4%BB%B6%E6%A8%A1%E5%9E%8B)（Document Object Model）来运行动态效果；
- 运用[XML](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FXML)和[XSLT](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FXSLT)操作数据
- 运用[XMLHttpRequest](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FXMLHttpRequest)或新的Fetch API与[网页服务器](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%E7%B6%B2%E9%A0%81%E4%BC%BA%E6%9C%8D%E5%99%A8)进行异步数据交换；
- 注意：AJAX与[Flash](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FFlash)、[Silverlight](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FSilverlight)和[Java Applet](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FJava_Applet)等[RIA](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FRIA)技术是有区分的。
- 在工作当中一般都是用JQ，因为JQ将原生AJAX技术进行封装

### AJAX 兼容性

[JavaScript](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FJavaScript) 编程的最大问题来自不同的浏览器对各种技术和标准的支持。

XmlHttpRequest 对象在不同浏览器中不同的创建方法，以下是跨浏览器的通用方法：

```javascript
// Provide the XMLHttpRequest class for IE 5.x-6.x:
// Other browsers (including IE 7.x-8.x) ignore this
//   when XMLHttpRequest is predefined
var xmlHttp;
if (typeof XMLHttpRequest != "undefined") {
    xmlHttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    var aVersions = ["Msxml2.XMLHttp.5.0", "Msxml2.XMLHttp.4.0", 
        "Msxml2.XMLHttp.3.0", "Msxml2.XMLHttp", "Microsoft.XMLHttp"];
    for (var i = 0; i < aVersions.length; i++) {
        try {
            xmlHttp = new ActiveXObject(aVersions[i]);
            break;
        } catch (e) {}
    }
}复制代码
```

详细信息请参考 - [Can I use XMLHttpRequest](https://link.juejin.cn?target=http%3A%2F%2Fcaniuse.com%2F%23search%3DXMLHttpRequest)

### AJAX/HTTP 库对比

|                                                              |              | Support           |      |                |          | Features |                 |                      |
| ------------------------------------------------------------ | ------------ | ----------------- | ---- | -------------- | -------- | -------- | --------------- | -------------------- |
|                                                              | All Browsers | Chrome & Firefox1 | Node | Concise Syntax | Promises | Native2  | Single Purpose3 | Formal Specification |
| [XMLHttpRequest](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequest) | ✓            | ✓                 |      |                |          | ✓        | ✓               | ✓                    |
| [Node HTTP](https://link.juejin.cn?target=https%3A%2F%2Fnodejs.org%2Fapi%2Fhttp.html) |              |                   | ✓    |                |          | ✓        | ✓               | ✓                    |
| [fetch()](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FGlobalFetch%2Ffetch) |              | ✓                 |      | ✓              | ✓        | ✓        | ✓               | ✓                    |
| [Fetch polyfill](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fgithub%2Ffetch) | ✓            | ✓                 |      | ✓              | ✓        |          | ✓               | ✓                    |
| [node-fetch](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbitinn%2Fnode-fetch) |              |                   | ✓    | ✓              | ✓        |          | ✓               | ✓                    |
| [isomorphic-fetch](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmatthew-andrews%2Fisomorphic-fetch) | ✓            | ✓                 | ✓    | ✓              | ✓        |          | ✓               | ✓                    |
| [superagent](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvisionmedia%2Fsuperagent) | ✓            | ✓                 | ✓    | ✓              |          |          | ✓               |                      |
| [axios](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmzabriskie%2Faxios) | ✓            | ✓                 | ✓    | ✓              | ✓        |          | ✓               |                      |
| [request](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Frequest%2Frequest) |              |                   | ✓    | ✓              |          |          | ✓               |                      |
| [jQuery](https://link.juejin.cn?target=https%3A%2F%2Fjquery.com%2F) | ✓            | ✓                 |      | ✓              |          |          |                 |                      |
| [reqwest](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fded%2Freqwest) | ✓            | ✓                 | ✓    | ✓              | ✓        |          | ✓               |                      |

1 **Chrome & Firefox** are listed separately because they support `fetch()`: [caniuse.com/fetch](https://link.juejin.cn?target=http%3A%2F%2Fcaniuse.com%2Ffetch)
2 **Native:** Meaning you can just use it - no need to include a library.
3 **Single Purpose:** Meaning this library or technology is ONLY used for AJAX / HTTP communication, nothing else.

详细信息请参考 - [AJAX/HTTP Library Comparison](https://link.juejin.cn?target=http%3A%2F%2Fandrewhfarmer.com%2Fajax-libraries%2F)
