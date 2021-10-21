## 定义

XMLHttpRequest 是 AJAX 的基础。

XMLHttpRequest 术语缩写为XHR，中文可以解释为可扩展超文本传输请求。

XMLHttpRequest 对象可以在不向服务器提交整个页面的情况下，实现局部更新网页。

XMLHttpRequest的对象用于客户端和服务器之间的异步通信。

XMLHttpRequest (XHR) 是一个可以用 JavaScript，JScript，VBScript 和其他 Web 浏览器脚本语言传输和操作 XML 数据，以及使用 HTTP 从 Web 服务器上在网页客户端和服务端之间建立一个独立连接通道的 API。

调用 XMLHttpRequest 返回的数据通常都由后端数据库提供。除了 XML 之外，XMLHttpRequest 还可以用来获取其他格式的数据，例如 JSON 或者是纯文本。

它执行以下操作：

1. 在后台从客户端发送数据
2. 从服务器接收数据
3. 更新网页而不重新加载。

参考：https://www.jianshu.com/p/918c63045bc3/

## 详解

### 构造函数

用于初始化一个 XMLHttpRequest 对象，必须在所有其它方法被调用前调用构造函数。使用示例如下：

```
var req = new XMLHttpRequest();复制代码
```

### 属性

- onreadystatechange:  Function - 当 readyState 属性改变时会调用它。
- readyState:  unsigned short - 用于表示请求的五种状态：

| 值   | 状态                            | 描述                                            |
| ---- | ------------------------------- | ----------------------------------------------- |
| 0    | UNSENT (未打开)                 | 表示已创建 XHR 对象，open() 方法还未被调用      |
| 1    | OPENED (未发送)                 | open() 方法已被成功调用，send() 方法还未被调用  |
| 2    | HEADERS_RECEIVED (已获取响应头) | send() 方法已经被调用，响应头和响应状态已经返回 |
| 3    | LOADING (正在下载响应体)        | 响应体下载中，responseText中已经获取了部分数据  |
| 4    | DONE (请求完成)                 | 整个请求过程已经完毕                            |

- response: varies - 响应体的类型由 responseType 来指定，可以是 ArrayBuffer、Blob、Document、JSON，或者是字符串。如果请求未完成或失败，则该值为 null。
- responseText: DOMString - 此请求的响应为文本，或者当请求未成功或还是未发送时未 null **(只读)**
- responseType: XMLHttpRequestResponseType - 设置该值能够改变响应类型，就是告诉服务器你期望的响应格式：

| 值            | 响应数据类型                                                 |
| ------------- | ------------------------------------------------------------ |
| ""            | 字符串(默认值)                                               |
| "arraybuffer" | [ArrayBuffer](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArrayBuffer) |
| "blob"        | [Blob](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FBlob) |
| "document"    | [Document](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FDocument) |
| "json"        | [JSON](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FJSON) |
| "text"        | 字符串                                                       |

xhr.spec 规范中定义的 XMLHttpRequestResponseType 类型如下：

```
enum XMLHttpRequestResponseType {
  "",
  "arraybuffer",
  "blob",
  "document",
  "json",
  "text"
};复制代码
```

- responseXML: Document - 本次请求响应式一个 Document 对象，如果是以下情况则值为 null：
  - 请求未成功
  - 请求未发送
  - 响应无法被解析成 XML 或 HTML
- status: unsigned short - 请求的响应状态码，如 200 (表示一个成功的请求)。  **(只读)**
- statusText: DOMString - 请求的响应状态信息，包含一个状态码和消息文本，如 "200 OK"。 **(只读)**
- timeout: unsigned long - 表示一个请求在被自动终止前所消耗的毫秒数。默认值为 0，意味着没有超时时间。超时并不能应用在同步请求中，否则会抛出一个 InvalidAccessError 异常。当发生超时时，timeout 事件将会被触发。
- upload: XMLHttpRequestUpload - 可以在 upload 上添加一个事件监听来跟踪上传过程
- withCredentials: boolean -  表明在进行跨站 (cross-site) 的访问控制 (Access-Control) 请求时，是否使用认证信息 (例如cookie或授权的header)。默认为 false。**注意：这不会影响同站 same-site 请求**

### 方法

- abort() - 如果请求已经被发送，则立刻中止请求。

- getAllResponseHeaders() - 返回所有响应头信息(响应头名和值)，如果响应头还没有接收，则返回 null。**注意：使用该方法获取的 response headers 与在开发者工具 Network 面板中看到的响应头不一致**

- getResponseHeader() - 返回指定响应头的值，如果响应头还没有被接收，或该响应头不存在，则返回 null。**注意：使用该方法获取某些响应头时，浏览器会抛出异常，具体原因如下：**

  - [W3C的 xhr 标准中做了限制](https://link.juejin.cn?target=https%3A%2F%2Fwww.w3.org%2FTR%2FXMLHttpRequest%2F)，规定客户端无法获取 response 中的 `Set-Cookie`、`Set-Cookie2`这2个字段，无论是同域还是跨域请求。

  - [W3C 的 cors 标准对于跨域请求也做了限制](https://link.juejin.cn?target=https%3A%2F%2Fwww.w3.org%2FTR%2Fcors%2F%23access-control-allow-credentials-response-header)，规定对于跨域请求，客户端允许获取的response header字段只限于 [simple response header](https://link.juejin.cn?target=https%3A%2F%2Fwww.w3.org%2FTR%2Fcors%2F%23ascii-case-insensitive) (常见的 simple response header 如下)

    - Cache-Control
    - Content-Language
    - Content-Type
    - Expires
    - Last-Modified
    - Pragma

    和 Access-Control-Expose-Headers。

- open() - 初始化一个请求：

  - 方法签名：

    ```
    void open(
       DOMString method,
       DOMString url,
       optional boolean async,
       optional DOMString user,
       optional DOMString password
    );复制代码
    ```

  - 参数：

    - method - 请求所使用的 HTTP 方法，如 GET、POST、PUT、DELETE
    - url - 请求的 URL 地址
    - async - 一个可选的布尔值参数，默认值为 true，表示执行异步操作。如果值为 false，则 send() 方法不会返回任何东西，直到接收到了服务器的返回数据
    - user - 用户名，可选参数，用于授权。默认参数为空字符串
    - password - 密码，可选参数，用于授权。默认参数为空字符串

  - 备注：

    - 如果 method 不是有效的 HTTP 方法或 url 地址不能被成功解析，将会抛出 `SyntaxError` 异常
    - 如果请求方法(不区分大小写)为 `CONNECT`、`TRACE` 或 `TRACK` 将会抛出 `SecurityError` 异常

- overrideMimeType() - 重写由服务器返回的 [MIME](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%E5%A4%9A%E7%94%A8%E9%80%94%E4%BA%92%E8%81%AF%E7%B6%B2%E9%83%B5%E4%BB%B6%E6%93%B4%E5%B1%95) 类型。例如，可以用于强制把响应流当做 `text/xml` 来解析，即使服务器没有指明数据是这个类型。**注意：这个方法必须在 send() 之前被调用。**

- send() - 发送请求。如果该请求是异步模式(默认)，该方法会立刻返回。相反，如果请求是同步模式，则直到请求的响应完全接受以后，该方法才会返回。**注意：所有相关的事件绑定必须在调用 send() 方法之前进行。**

  - 方法签名：

    ```
    void send();
    void send(ArrayBuffer data);
    void send(Blob data);
    void send(Document data);
    void send(DOMString? data);
    void send(FormData data);复制代码
    ```

- setRequestHeader() - 设置 HTTP 请求头信息。**注意：在这之前，你必须确认已经调用了 open() 方法打开了一个 url**

  - 方法签名：

    ```
    void setRequestHeader(
       DOMString header,
       DOMString value
    );复制代码
    ```

  - 参数：

    - header - 请求头名称
    - value - 请求头的值

- sendAsBinary() - 发送二进制的 send() 方法的变种。

  - 方法签名：

    ```
    void sendAsBinary(
       in DOMString body
    );复制代码
    ```

  - 参数：

    - body - 消息体

### 浏览器兼容性

- Desktop

| Feature                      | Chrome | Firefox (Gecko) | Internet Explorer                       | Opera  | Safari (WebKit) |
| ---------------------------- | ------ | --------------- | --------------------------------------- | ------ | --------------- |
| Basic support (XHR1)         | 1      | 1.0             | 5 (via ActiveXObject)7 (XMLHttpRequest) | (Yes)  | 1.2             |
| send(ArrayBuffer)            | 9      | 9               | ?                                       | 11.60  | ?               |
| send(Blob)                   | 7      | 3.6             | ?                                       | 12     | ?               |
| send(FormData)               | 6      | 4               | ?                                       | 12     | ?               |
| response                     | 10     | 6               | 10                                      | 11.60  | ?               |
| responseType = 'arraybuffer' | 10     | 6               | 10                                      | 11.60  | ?               |
| responseType = 'blob'        | 19     | 6               | 10                                      | 12     | ?               |
| responseType = 'document'    | 18     | 11              | 未实现                                  | 未实现 | 未实现          |
| responseType = 'json'        | 未实现 | 10              | 未实现                                  | 12     | 未实现          |
| Progress Events              | 7      | 3.5             | 10                                      | 12     | ?               |
| withCredentials              | 3      | 3.5             | 10                                      | 12     | 4               |

### 事件

- [loadstart](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents%2Floadstart) - 当程序开始加载时，loadstart 事件将被触发。
- [progress](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents%2F%E8%BF%9B%E5%BA%A6%E6%9D%A1) - 进度事件会被触发用来指示一个操作正在进行中。
- [abort](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents%2Fabort) - 当一个资源的加载已中止时，将触发 abort 事件。
- [error](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents%2Ferror) - 当一个资源加载失败时会触发error事件。
- [load](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents%2Fload) - 当一个资源及其依赖资源已完成加载时，将触发load事件。
- [timeout](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents%2Ftimeout) - 当进度由于预定时间到期而终止时，会触发timeout 事件。
- [loadend](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents%2Floadend) - 当一个资源加载进度停止时 (例如，在已经分派“错误”，“中止”或“加载”之后)，触发loadend事件。
- [readystatechange](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents%2Freadystatechange) - readystatechange 事件会在 document.readyState属性发生变化时触发。

## XMLHttpRequest Level 1

### XMLHttpRequest Level 1 使用

首先，创建一个 XMLHttpRequest 对象：

```
var xhr = new XMLHttpRequest();复制代码
```

然后，向服务器发出一个 HTTP 请求：

```
xhr.open('GET', 'example.php');
xhr.send();复制代码
```

接着，就等待远程主机做出回应。这时需要监控XMLHttpRequest对象的状态变化，指定回调函数。

```
xhr.onreadystatechange = function(){
　　if ( xhr.readyState == 4 && xhr.status == 200 ) {
　　　　　alert( xhr.responseText );
　　} else {
　　　　　alert( xhr.statusText );
　　}
};复制代码
```

上面的代码包含了老版本 XMLHttpRequest 对象的主要属性：

- xhr.readyState： XMLHttpRequest对象的状态，等于4表示数据已经接收完毕。
- xhr.status：服务器返回的状态码，等于200表示一切正常。
- xhr.responseText：服务器返回的文本数据。
- xhr.statusText：服务器返回的状态文本。

### XMLHttpRequest Level 1 缺点

- 只支持文本数据的传送，无法用来读取和上传二进制文件。
- 传送和接收数据时，没有进度信息，只能提示有没有完成。
- 受到["同域限制"](https://link.juejin.cn?target=http%3A%2F%2Fwww.w3.org%2FSecurity%2Fwiki%2FSame_Origin_Policy)（Same Origin Policy），只能向同一域名的服务器请求数据。

## XMLHttpRequest Level 2

XMLHttpRequest Level 2 针对 XMLHttpRequest Level 1 的缺点，做了大幅改进。具体如下：

- 可以设置HTTP请求的超时时间。
- 可以使用FormData对象管理表单数据。
- 可以上传文件。
- 可以请求不同域名下的数据（跨域请求）。
- 可以获取服务器端的二进制数据。
- 可以获得数据传输的进度信息。

### 设置超时时间

新版本 XMLHttpRequest 对象，增加了 timeout 属性，可以设置HTTP请求的时限。

```
　xhr.timeout = 3000;复制代码
```

上面的语句，将最长等待时间设为3000毫秒。过了这个时限，就自动停止HTTP请求。与之配套的还有一个timeout事件，用来指定回调函数。

```
xhr.ontimeout = function(event){
　　console.log('请求超时');
}复制代码
```

### FormData 对象

AJAX 操作往往用来传递表单数据。为了方便表单处理，HTML 5新增了一个 [FormData](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FFormData%2FFormData) 对象，可以用于模拟表单。

#### FormData 简介

**构造函数 FormData()**

用于创建一个新的 FormData 对象。

**语法**

```
var formData = new FormData(form)复制代码
```

- 参数
  - form 可选 - 一个 HTML 上的 `<form>` 表单元素。当使用 form 参数，创建的 FormData 对象会自动将 form 中的表单值也包含进去，文件内容会被编码

#### FormData 使用

首先，新建一个 [FormData](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FFormData%2FFormData) 对象：

```
var formData = new FormData();复制代码
```

然后，为它添加表单项：

```
formData.append('username', 'semlinker');
formData.append('id', 2005821040);复制代码
```

最后，直接传送这个FormData对象。这与提交网页表单的效果，完全一样。

```
xhr.send(formData);复制代码
```

FormData 对象也可以用来获取网页表单的值。

```
var form = document.getElementById('myform'); // 获取页面上表单对象
var formData = new FormData(form);
formData.append('username', 'semlinker'); // 添加一个表单项
xhr.open('POST', form.action);
xhr.send(formData);复制代码
```

### 上传文件

新版 XMLHttpRequest 对象，不仅可以发送文本信息，还可以上传文件。

1.为了上传文件, 我们得先选中一个文件. 一个 type 为 file 的 input 输入框

```
<input id="input" type="file">复制代码
```

2.然后用 FormData 对象包裹选中的文件

```
var input = document.getElementById("input"),
    formData = new FormData();
formData.append("file",input.files[0]); // file名称与后台接收的名称一致复制代码
```

3.设置上传地址和请求方法

```
var url = "http://localhost:3000/upload",
    method = "POST";复制代码
```

4.发送 FormData 对象

```
xhr.send(formData);复制代码
```

### 跨域资源共享 (CORS)

新版本的 XMLHttpRequest 对象，可以向不同域名的服务器发出 HTTP 请求。这叫做 ["跨域资源共享"](https://link.juejin.cn?target=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCross-Origin_Resource_Sharing)（Cross-origin resource sharing，简称 CORS）。

使用"跨域资源共享"的前提，是浏览器必须支持这个功能，而且服务器端必须同意这种"跨域"。如果能够满足上面的条件，则代码的写法与不跨域的请求完全一样。

```
xhr.open('GET', 'http://other.server/and/path/to/script');复制代码
```

### 接收二进制数据

XMLHttpRequest Level 1 XMLHttpRequest 对象只能处理文本数据，新版则可以处理二进制数据。从服务器取回二进制数据，较新的方法是使用新增的 responseType 属性。如果服务器返回文本数据，这个属性的值是 "TEXT"，这是默认值。较新的浏览器还支持其他值，也就是说，可以接收其他格式的数据。

你可以把 responseType 设为 blob，表示服务器传回的是二进制对象。

```
var xhr = new XMLHttpRequest();
xhr.open('GET', '/path/to/image.png');
xhr.responseType = 'blob';
xhr.send();复制代码
```

接收数据的时候，用浏览器自带的 [Blob](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FBlob) 对象即可。

> 一个  **Blob** 对象表示一个不可变的, 原始数据的类似文件对象。Blob 表示的数据不一定是一个 JavaScript 原生格式。 [`File`](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FFile) 接口基于Blob，继承 blob功能并将其扩展为支持用户系统上的文件。

```
var blob = new Blob([xhr.response], {type: 'image/png'});复制代码
```

更多示例请参考 [发送和接收二进制数据](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-cn%2FDOM%2FXMLHttpRequest%2FSending_and_Receiving_Binary_Data) 。

### 进度信息

新版本的 XMLHttpRequest 对象，传送数据的时候，有一个 progress 事件，用来返回进度信息。

它分成上传和下载两种情况。下载的 progress 事件属于 XMLHttpRequest 对象，上传的 progress 事件属于XMLHttpRequest.upload 对象。

我们先定义progress事件的回调函数：

```
xhr.onprogress = updateProgress;
xhr.upload.onprogress = updateProgress;复制代码
```

然后，在回调函数里面，使用这个事件的一些属性。

```
function updateProgress(event) {
　　if (event.lengthComputable) {
　　　　var percentComplete = event.loaded / event.total;
　　}
}复制代码
```

上面的代码中，event.total 是需要传输的总字节，event.loaded 是已经传输的字节。如果event.lengthComputable 不为真，则 event.total 等于0。

各个浏览器 XMLHttpRequest Level 2 的兼容性 - [Can I use/xhr2](https://link.juejin.cn?target=http%3A%2F%2Fcaniuse.com%2F%23feat%3Dxhr2)

## XHR 下载数据

XHR 可以传输基于文本和二进制数据。实际上，浏览器可以为各种本地数据类型提供自动编码和解码，这样可以让应用程序将这些类型直接传递给XHR，以便正确编码，反之亦然，这些类型可以由浏览器自动解码：

- ArrayBuffer - 固定长度二进制数据缓冲区
- Blob - 二进制不可变数据
- Document - HTML或XML文档
- JSON - JavaScript Object Notation
- Text - 普通文本

XHR 下载图片示例：

```
var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://avatars2.githubusercontent.com/u/4220799?v=3');
    xhr.responseType = 'blob'; // 1

    xhr.onload = function() {
        if (this.status == 200) {
            var img = document.createElement('img');
            img.src = window.URL.createObjectURL(this.response); // 2
            img.onload = function() {
                window.URL.revokeObjectURL(this.src); //3
            };
            document.body.appendChild(img);
        }
    };
    xhr.send();复制代码
```

(1) 设置响应的数据类型为 blob

(2) 基于Blob创建一个唯一的对象URL，并作为图片的源地址 ([URL.createObjectURL()](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FURL%2FcreateObjectURL))

(3) 图片加载成功后释放对象的URL([URL.revokeObjectURL()](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FURL%2FrevokeObjectURL))

## XHR 上传数据

通过 XHR 上传数据对于所有数据类型来说都是简单而有效的。实际上，唯一的区别是当我们在XHR请求中调用 send() 时，我们需传递不同的数据对象。其余的由浏览器处理：

```
var xhr = new XMLHttpRequest();
xhr.open('POST','/upload');
xhr.onload = function() { ... };
xhr.send("text string"); // 1

var formData = new FormData(); // 2
formData.append('id', 123456);
formData.append('topic', 'performance');

var xhr = new XMLHttpRequest();
xhr.open('POST', '/upload');
xhr.onload = function() { ... };
xhr.send(formData); // 3

var xhr = new XMLHttpRequest();
xhr.open('POST', '/upload');
xhr.onload = function() { ... };
var uInt8Array = new Uint8Array([1, 2, 3]); // 4
xhr.send(uInt8Array.buffer); // 5复制代码
```

(1) 发送普通的文本到服务器

(2) 通过 FormData API 创建动态表单

(3) 发送 FormData 数据到服务器

(4) 创建 Unit8Array 数组 ([Uint8Array](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FUint8Array) 数组类型表示一个8位无符号整型数组，创建时内容被初始化为0)

(5) 发送二进制数据到服务器

XHR send() 方法签名：

```
void send();
void send(ArrayBuffer data);
void send(Blob data);
void send(Document data);
void send(DOMString? data);
void send(FormData data);复制代码
```

除此之外，XHR 还支持大文件分块传输：

```
var blob = ...; // 1

const BYTES_PER_CHUNK = 1024 * 1024; // 2
const SIZE = blob.size;

var start = 0;
var end = BYTES_PER_CHUNK;

while(start < SIZE) { // 3
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/upload');
  xhr.onload = function() { ... };

  xhr.setRequestHeader('Content-Range', start+'-'+end+'/'+SIZE); // 4
  xhr.send(blob.slice(start, end)); // 5

  start = end;
  end = start + BYTES_PER_CHUNK;
}复制代码
```

(1) 一个任意的数据块 (二进制或文本)

(2) 将数据库大小设置为 1MB

(3) 迭代提供的数据，增量为1MB

(4) 设置上传的数据范围 ([Content-Range请求头](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FHeaders%2FContent-Range))

(5) 通过 XHR 上传 1MB 数据块

## 监听上传和下载进度

XHR 对象提供了一系列 API，用于监听进度事件，表示请求的当前状态：

| 事件类型  | 描述           | 触发次数  |
| --------- | -------------- | --------- |
| loadstart | 开始传输       | 1次       |
| progress  | 传输中         | 0次或多次 |
| error     | 传输中出现错误 | 0次或1次  |
| abort     | 传输被用户取消 | 0次或1次  |
| load      | 传输成功       | 0次或1次  |
| loadend   | 传输完成       | 1次       |

每个 XHR 传输都以 `loadstart` 事件开始，并以 `loadend` 事件结束，并在这两个事件期间触发一个或多个附加事件来指示传输的状态。因此，为了监控进度，应用程序可以在 XHR 对象上注册一组 JavaScript 事件侦听器：

```
var xhr = new XMLHttpRequest();
xhr.open('GET','/resource');
xhr.timeout = 5000; // 1

xhr.addEventListener('load', function() { ... }); // 2
xhr.addEventListener('error', function() { ... }); // 3

var onProgressHandler = function(event) {
  if(event.lengthComputable) {
    var progress = (event.loaded / event.total) * 100; // 4
    ...
  }
}

xhr.upload.addEventListener('progress', onProgressHandler); // 5
xhr.addEventListener('progress', onProgressHandler); // 6
xhr.send();复制代码
```

(1) 设置请求超时时间为 5,000 ms (默认无超时时间)

(2) 注册成功回调

(3) 注册异常回调

(4) 计算已完成的进度

(5) 注册上传进度事件回调

(6) 注册下载进度事件回调

## 使用XHR流式传输数据

在某些情况下，应用程序可能需要或希望逐步处理数据流：将数据上传到服务器，使其在客户机上可用，或者在从服务器下载数据时，进行流式处理。

```
var xhr = new XMLHttpRequest();
xhr.open('GET', '/stream');
xhr.seenBytes = 0;

xhr.onreadystatechange = function() {  // 1
  if(xhr.readyState > 2) {
    var newData = xhr.responseText.substr(xhr.seenBytes); // 2
    // process newData
    xhr.seenBytes = xhr.responseText.length; // 3
  }
};

xhr.send();复制代码
```

(1) 监听 onreadystatechange 事件

(2) 从部分响应中提取新数据

(3) 更新处理的字节偏移

这个例子可以在大多数现代浏览器中使用。但是,性能并不好，而且还有大量的注意事项和问题：

- 请注意，我们正在手动跟踪所看到字节的偏移量，然后手动分割数据：responseText 正在缓冲完整的响应！对于小的传输，这可能不是一个问题，但对于更大的下载，特别是在内存受限的设备，如手机，这是一个问题。释放缓冲响应的唯一方法是完成请求并打开一个新的请求。
- 部分响应只能从 responseText 属性中读取，这将限制为仅限文本传输。没有办法读取二进制传输的部分响应。
- 一旦读取了部分数据，我们必须识别消息边界：应用程序逻辑必须定义自己的数据格式，然后缓冲并解析流以提取单个消息。
- 浏览器在处理缓冲数据方面有所不同：一些浏览器可能会立即释放数据，而其他浏览器可能会缓冲小的响应并等到积累到一定大小的数据块才释放它们。
- 浏览器对不同 Content-Type 资源类型的处理方式不同，对于某些资源类型允许逐步读取 - 例如，text / html 类型，而其他 Content-Type 类型只能使用 application / x-javascript。

## XHR 定时轮询

从服务器检索更新的最简单的策略之一是让客户端进行定期检查：客户端可以以周期性间隔（轮询服务器）启动后台XHR请求，以检查更新。如果新数据在服务器上可用，则在响应中返回，否则响应为空。

定时轮询的方式很简单，但如果定时间隔很短的话，也是很低效。因此设置合适的时间间隔显得至关重要：轮询间隔时间过长，会导致更新不及时，然而间隔时间过短的话，则会导致客户端与服务器不必要的流程和高开销。接下来我们来看一个简单的示例：

```
function checkUpdates(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() { ... }; // 1
  xhr.send();
}

setInterval(function() { checkUpdates('/updates') }, 60000); // 2复制代码
```

(1) 处理服务端接收的数据

(2) 设置定时轮询时间为 60s

定时轮询会产生以下的问题：

- 每个 XHR 请求都是一个独立的 HTTP 请求，平均来说，HTTP 的请求头可能会引起大约 800 字节的开销 (不带HTTP cookie)。

> 每个浏览器发起 HTTP 请求时都将携带额外的 500 - 800 字节的元数据 (请求头)，如 user-agent、accept、Cache-Control 缓存控制头等。更糟糕的是，500 - 800 字节是理想的情况，如果携带 Cookies 信息，那么这个数值将会更大。总而言之，这些未压缩的 HTTP 元数据会引起很大开销。

- 如果数据能够在间隔期间顺序到达，那么定时轮询可以正常工作。但我们并没有任何机制保证数据的正常接收。另外周期性轮询也将会引起服务器上可用的消息及其传送到客户端之间引入额外的延迟。简单的理解是如果有轮询期间有新的可用消息，客户端是不会马上收到此新消息，而是要等到下一次轮询的时候，才能获取最新数据。
- 除非仔细考虑，不然轮询通常会成为无线网络上昂贵的性能反模式。频繁地轮询会大量的消耗移动设备的电量。

### 轮询开销

平均每个 HTTP 1.x 请求会增加 大约 800字节的请求和响应开销 (详细信息可以查看 - [Measuring and Controlling Protocol Overhead](https://link.juejin.cn?target=https%3A%2F%2Fhpbn.co%2Fhttp1x%2F%23measuring-and-controlling-protocol-overhead)) 。另外在客户端登录后，我们还将产生一个额外的身份验证 cookie 和 消息ID; 假设这又增加了50个字节。因此，不返回新消息的请求将产生 850字节开销！现在假设我们有10,000个客户端，所有的轮询间隔时间都是60秒：
?
(850 bytes  *8 bits*  10,000) / 60 seconds ≈ 1.13 Mbps
?
每个客户端在每个请求上发送 850 字节的数据，这转换为每秒 167 个请求，服务器上的吞吐量大约为 1.13 Mbps！这不是一个固定的值，此外该计算值还是在假设服务器没有向任何客户端传递任何新的消息的理想情况下计算而得的。

## XHR 长轮询

周期性轮询的挑战在于有可能进行许多不必要的和空的检查。考虑到这一点，如果我们对轮询工作流程进行了轻微的修改，而不是在没有更新可用的情况下返回一个空的响应，我们可以保持连接空闲，直到更新可用吗？



![img](images/48adb62206ddbaf5ec726b623f534809.svgtplv-t2oaga2asx-watermark.awebp)



（图片来源 - [hpbn.co/xmlhttprequ…](https://link.juejin.cn?target=https%3A%2F%2Fhpbn.co%2Fxmlhttprequest%2F）)

通过保持长连接，直到更新可用，数据可以立即发送到客户端，一旦它在服务器上可用。因此，长时间轮询为消息延迟提供了最佳的情况，并且还消除了空检查，这减少了 XHR 请求的数量和轮询的总体开销。一旦更新被传递，长的轮询请求完成，并且客户端可以发出另一个长轮询请求并等待下一个可用的消息：

```
function checkUpdates(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() { // 1
    ...
    checkUpdates('/updates'); // 2
  };
  xhr.send();
}

checkUpdates('/updates'); // 3复制代码
```

(1) 处理接收到的数据并启动下一轮检测更新

(2) 启动下一轮检测更新

(3) 发起首次更新请求

那么长时间轮询总是比定期轮询更好的选择？除非消息到达率已知且不变，否则长轮询将始终提供更短的消息延迟。

另一方面，开销讨论需要更细微的观点。首先，请注意，每个传递的消息仍然引起相同的 HTTP 开销;每个新消息都是独立的 HTTP 请求。但是，如果消息到达率高，那么长时间轮询会比定期轮询发出更多的XHR请求！

长轮询通过最小化消息延迟来动态地适应消息到达速率，这是您可能想要的或可能不需要的行为。如果对消息延迟要求不高的话，则定时轮询可能是更有效的传输方式 - 例如，如果消息更新速率较高，则定时轮询提供简单的 "消息聚合" 机制 (即合并一定时间内的消息)，这可以减少请求数量并提高移动设备的电池寿命。

## XMLHttpRequest 库

### Mock.js

Mock.js 是一款模拟数据生成器，旨在帮助前端攻城师独立于后端进行开发，帮助编写单元测试。提供了以下模拟功能：

- 根据数据模板生成模拟数据
- 模拟 Ajax 请求，生成并返回模拟数据
- 基于 HTML 模板生成模拟数据

详细信息，请查看 - [Mock.js 文档](https://link.juejin.cn?target=http%3A%2F%2Fmockjs.com%2F0.1%2F)

### Zone.js

[Zone](https://link.juejin.cn?target=https%3A%2F%2Fdomenic.github.io%2Fzones%2F) 是下一个 ECMAScript 规范的建议之一。Angular 团队实现了 JavaScript 版本的 [zone.js](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fangular%2Fzone.js%2F) ，它是用于拦截和跟踪异步工作的机制。

Zone 是一个全局的对象，用来配置有关如何拦截和跟踪异步回调的规则。Zone 有以下能力：

- 拦截异步任务调度，如 setTimeout、setInterval、XMLHttpRequest 等
- 提供了将数据附加到 zones 的方法
- 为异常处理函数提供正确的上下文
- 拦截阻塞的方法，如 alert、confirm 方法

zone.js 内部使用 [Monkey Patch](https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMonkey_patch) 方式，拦截 XMLHttpRequest.prototype 对象中的 open、send、abort 等方法。

```
// zone.js 源码片段
var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function () { 
    return function (self, args) {
        self[XHR_SYNC] = args[2] == false;
        return openNative.apply(self, args);
    }; 
});复制代码
```

### Oboe.js

Oboe.js 通过将 HTTP 请求-应答模型封装在一个渐进流式接口中，帮助网页应用快速应答。它将 streaming 和downloading 间的转换与SAX和DOM间JSON的解析整合在一起。它是个非常小的库，不依赖于其他程序库。它可以在 ajax 请求结束前就开始解析 json 变得十分容易，从而提高应用的应答速度。另外，它支持 Node.js 框架，还可以读入除了 http 外的其他流。

有兴趣的读者，推荐看一下官网的可交互的演示示例 - [Why Oboe.js](https://link.juejin.cn?target=http%3A%2F%2Foboejs.com%2Fwhy)

(备注：该库就是文中 - 使用XHR流式传输数据章节的实际应用，不信往下看)

```
// oboe-browser.js 源码片段
function handleProgress() {            
    var textSoFar = xhr.responseText,
        newText = textSoFar.substr(numberOfCharsAlreadyGivenToCallback);
    if( newText ) {
        emitStreamData( newText );
    } 
    numberOfCharsAlreadyGivenToCallback = len(textSoFar);
}复制代码
```

### fetch.js

fetch 函数是一个基于 Promise 的机制，用于在浏览器中以编程方式发送 Web 请求。该项目是实现标准 [Fetch](https://link.juejin.cn?target=https%3A%2F%2Ffetch.spec.whatwg.org%2F) 规范的一个子集的 polyfill ，足以作为传统 Web 应用程序中 XMLHttpRequest 的代替品。

详细信息，请参考 - [Github - fetch](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fgithub%2Ffetch) 

Fetch API 兼容性，请参考 - [Can I use Fetch](https://link.juejin.cn?target=http%3A%2F%2Fcaniuse.com%2F%23search%3DFetch)

## XMLHttpRequest 代码片段

### ArrayBuffer 对象转为字符串

```
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}复制代码
```

代码片段来源 - [ArrayBuffer与字符串的互相转换](https://link.juejin.cn?target=http%3A%2F%2Fjavascript.ruanyifeng.com%2Fstdlib%2Farraybuffer.html%23toc11)

### 字符串转 ArrayBuffer对象

```
function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}复制代码
```

代码片段来源 - [ArrayBuffer与字符串的互相转换](https://link.juejin.cn?target=http%3A%2F%2Fjavascript.ruanyifeng.com%2Fstdlib%2Farraybuffer.html%23toc11)

### 创建 XHR 对象

#### 兼容所有浏览器

```
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

#### 精简版

```
var xmlHttp;
if (typeof XMLHttpRequest != "undefined") {
    xmlHttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    try {
       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {} 
}复制代码
```

### sendAsBinary() polyfill

```
if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function (sData) {
    var nBytes = sData.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    this.send(ui8Data);
  };
}复制代码
```

### 获取 XMLHttpRequest 响应体

```
function readBody(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
}复制代码
```

应用示例：

```
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        console.log(readBody(xhr));
    }
}
xhr.open('GET', 'https://www.baidu.com', true);
xhr.send(null);复制代码
```

### 获取 responseURL

```
export function getResponseURL(xhr: any): string {
  if ('responseURL' in xhr) {
    return xhr.responseURL;
  }
  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }
  return;
}复制代码
```

代码片段来源 - [Github - @angular/http - http_utils.ts](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fangular%2Fangular%2Fblob%2Fmaster%2Fpackages%2Fhttp%2Fsrc%2Fhttp_utils.ts%23L35)

### 验证请求是否成功

```
export const isSuccess = (status: number): boolean => (status >= 200 && status < 300);复制代码
```

代码片段来源 - [Github - @angular/http - http_utils.ts](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fangular%2Fangular%2Fblob%2Fmaster%2Fpackages%2Fhttp%2Fsrc%2Fhttp_utils.ts%23L33)

### 解析查询参数为Map对象

```
function paramParser(rawParams: string = ''): Map<string, string[]> {
  const map = new Map<string, string[]>();
  if (rawParams.length > 0) {
    const params: string[] = rawParams.split('&');
    params.forEach((param: string) => {
      const eqIdx = param.indexOf('=');
      const [key, val]: string[] =
          eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }
  return map;
}复制代码
```

代码片段来源 - [Github - @angular/http - url_search_params.ts](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fangular%2Fangular%2Fblob%2Fmaster%2Fpackages%2Fhttp%2Fsrc%2Furl_search_params.ts%23L9)

ts 转换为 js 的代码如下：

```
   function paramParser(rawParams) {
        if (rawParams === void 0) { rawParams = ''; }
        var map = new Map();
        if (rawParams.length > 0) {
            var params = rawParams.split('&');
            params.forEach(function (param) {
                var eqIdx = param.indexOf('=');
                var _a = eqIdx == -1 ? [param, ''] : 
                    [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], 
                        val = _a[1];
                var list = map.get(key) || [];
                list.push(val);
                map.set(key, list);
            });
        }
        return map;
    }复制代码
```

### XHR 下载图片

```
var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://avatars2.githubusercontent.com/u/4220799?v=3');
    xhr.responseType = 'blob';

    xhr.onload = function() {
        if (this.status == 200) {
            var img = document.createElement('img');
            img.src = window.URL.createObjectURL(this.response); 
            img.onload = function() {
                window.URL.revokeObjectURL(this.src); 
            };
            document.body.appendChild(img);
        }
    };
    xhr.send();复制代码
```

### XHR 上传数据

#### 发送普通文本

```
var xhr = new XMLHttpRequest();
xhr.open('POST','/upload');
xhr.onload = function() { ... };
xhr.send("text string");复制代码
```

#### 发送FormData

```
var formData = new FormData(); 
formData.append('id', 123456);
formData.append('topic', 'performance');

var xhr = new XMLHttpRequest();
xhr.open('POST', '/upload');
xhr.onload = function() { ... };
xhr.send(formData);复制代码
```

#### 发送 Buffer

```
var xhr = new XMLHttpRequest();
xhr.open('POST', '/upload');
xhr.onload = function() { ... };
var uInt8Array = new Uint8Array([1, 2, 3]); 
xhr.send(uInt8Array.buffer);复制代码
```

### XHR 上传进度条

progress 元素

```
<progress id="uploadprogress" min="0" max="100" value="0">0</progress>复制代码
```

定义 progress 事件的回调函数

```
xhr.upload.onprogress = function (event) {
　　if (event.lengthComputable) {
　　　　　　var complete = (event.loaded / event.total * 100 | 0);
　　　　　　var progress = document.getElementById('uploadprogress');
　　　　　　progress.value = progress.innerHTML = complete;
　　}
};复制代码
```

注意，progress事件不是定义在xhr，而是定义在xhr.upload，因为这里需要区分下载和上传，下载也有一个progress事件。

## XMLHttpRequest问题

### 1.什么情况下 XMLHttpRequest status 会为 0？

XMLHttpRequest 返回 status 时，会执行以下步骤：

- 如果状态是 UNSENT 或 OPENED，则返回 0
- 如果错误标志被设置，则返回 0
- 否则返回 HTTP 状态码

另外当访问本地文件资源或在 Android 4.1 stock browser 中从应用缓存中获取文件时，XMLHttpRequest 的 status 值也会为0。

**示例一：**

```
var xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","http://www.w3schools.com/XML/cd_catalog.xml", true);
xmlhttp.onreadystatechange=function() {
  if(xmlhttp.readyState == 4) console.log("status " + xmlhttp.status);
};
xmlhttp.addEventListener('error', function (error) {
   console.dir(error);
});
xmlhttp.send();复制代码
```

以上代码运行后，将会在控制台输出：

```
status 0
ProgressEvent # error 对象复制代码
```

### 2.为什么 GET 或 HEAD 请求，不能通过 send() 方法发送请求体？

> ```
> client . send([body = null])
> ```
>
> Initiates the request. The optional argument provides the [request body](https://link.juejin.cn?target=https%3A%2F%2Fxhr.spec.whatwg.org%2F%23request-body). The argument is ignored if [request method](https://link.juejin.cn?target=https%3A%2F%2Fxhr.spec.whatwg.org%2F%23request-method) is `GET` or `HEAD`.  —— xhr.spec

通过 XMLHttpRequest 规范，我们知道当请求方法是 GET 或 HEAD 时，`send()` 方法的 body 参数值将会被忽略。那么对于我们常用的 GET 请求，我们要怎么传递参数呢？解决参数传递可以使用以下两种方式：

- URL 传参 - 常用方式，有大小限制大约为 2KB
- 请求头传参 - 一般用于传递 token 等认证信息

**URL 传参**

```
var url = "bla.php";
var params = "somevariable=somevalue&anothervariable=anothervalue";
var http = new XMLHttpRequest();

http.open("GET", url+"?"+params, true);
http.onreadystatechange = function()
{
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(null); // 请求方法是GET或HEAD时，设置请求体为空复制代码
```

在日常开发中，我们最常用的方式是传递参数对象，因此我们可以封装一个 `formatParams()` 来实现参数格式，具体示例如下：

formatParams() 函数：

```
function formatParams( params ){
  return "?" + Object
        .keys(params)
        .map(function(key){
          return key+"="+params[key]
        })
        .join("&")
}复制代码
```

应用示例：

```
var endpoint = "https://api.example.com/endpoint";
var params = {
  a: 1, 
  b: 2,
  c: 3
};
var url = endpoint + formatParams(params); // 实际应用中需要判断endpoint是否已经包含查询参数
// => "https://api.example.com/endpoint?a=1&b=2&c=3";复制代码
```

一些常用的 AJAX 库，如 jQuery、zepto 等，内部已经封装了参数序列化的方法 (如：[jquery.param](https://link.juejin.cn?target=http%3A%2F%2Fapi.jquery.com%2Fjquery.param%2F))，我们直接调用顶层的 API 方法即可。

(备注：以上示例来源 - [stackoverflow - How do I pass along variables with XMLHttpRequest](https://link.juejin.cn?target=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F8064691%2Fhow-do-i-pass-along-variables-with-xmlhttprequest))

**请求头传参 - (身份认证)**

```
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

xhr.setRequestHeader("x-access-token", "87a476494db6ec53d0a206589611aa3f");
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
       // handle data 
    }
};
xhr.send("foo=bar&lorem=ipsum");复制代码
```

详细的身份认证信息，请参考 - [JSON Web Tokens](https://link.juejin.cn?target=https%3A%2F%2Fjwt.io%2F)

### 3.XMLHttpRequest 请求体支持哪些格式？

send() 方法签名：

```
void send();

void send(ArrayBuffer data);

void send(Blob data);

void send(Document data);

void send(DOMString? data);

void send(FormData data);复制代码
```

**POST请求示例**

发送 POST 请求通常需要以下步骤：

- 使用 open() 方法打开连接时，设定 POST 请求方法和请求 URL地址
- 设置正确的 `Content-Type` 请求头
- 设置相关的事件监听
- 设置请求体，并使用 send() 方法，发送请求

```
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        // handle data
    }
}
xhr.send("foo=bar&lorem=ipsum"); 
// xhr.send('string'); 
// xhr.send(new Blob()); 
// xhr.send(new Int8Array()); 
// xhr.send({ form: 'data' }); 
// xhr.send(document);
```

### 5.XMLHttpRequest 对象垃圾回收机制是什么？

在以下情况下，XMLHttpRequest 对象不会被垃圾回收：

- 如果 XMLHttpRequest 对象的状态是 `OPENED` 且已设置 `send()` 的标识符
- XMLHttpRequest 对象的状态是 HEADERS_RECEIVED (已获取响应头)
- XMLHttpRequest 对象的状态是 LOADING (正在下载响应体)，并且监听了以下一个或多个事件：readystatechange、progress、abort、error、load、timeout、loadend

如果 XMLHttpRequest 对象在连接尚存打开时被垃圾回收机制回收了，用户代理必须终止请求。

### 6.GET 和 POST 请求的区别？

- 对于 GET 请求，浏览器会把 HTTP headers 和 data 一并发送出去，服务器响应 200。
- 而对于 POST 请求，浏览器会先发送 HTTP headers，服务器响应 100 continue ，浏览器再发送 data，服务器响应 200。

详细的信息，请参考 - [99%的人都理解错了HTTP中GET与POST的区别](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F22536382)

### 7.怎样防止重复发送 AJAX 请求？

- setTimeout + clearTimeout - 连续的点击会把上一次点击清除掉，也就是ajax请求会在最后一次点击后发出去
- disable 按钮
- 缓存已成功的请求，若请求参数一致，则直接返回，不发送请求

详细的信息，请参考 - [知乎 - 怎样防止重复发送 Ajax 请求](https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F19805411)

### 8、AJAX 站点怎么做 SEO 优化

众所周知，大部分的搜索引擎爬虫都不会执行 JS，也就是说，如果页面内容由 Ajax 返回的话，搜索引擎是爬取不到部分内容的，也就无从做 SEO (搜索引擎优化)了。国外的 [prerender.io](https://link.juejin.cn?target=https%3A%2F%2Fprerender.io%2F) 网站提供了一套比较成熟的方案，但是需要付费的。接下来我们来看一下，怎么 [PhantomJS](https://link.juejin.cn?target=http%3A%2F%2Fphantomjs.org%2F) 为我们的站点做 SEO。

详细的信息，请参考 - [用PhantomJS来给AJAX站点做SEO优化](https://link.juejin.cn?target=https%3A%2F%2Fwww.mxgw.info%2Ft%2Fphantomjs-prerender-for-seo.html)

## 精品文章

- [XMLHttpRequest 2新技巧](https://link.juejin.cn?target=https%3A%2F%2Fwww.html5rocks.com%2Fzh%2Ftutorials%2Ffile%2Fxhr2%2F)
- [阮一峰 - XMLHttpRequest Level 2 使用指南](https://link.juejin.cn?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2012%2F09%2Fxmlhttprequest_level_2.html)
- [segmentfault - 你真的会使用XMLHttpRequest吗?](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000004322487)
- [Github - Ajax 知识体系大梳理](https://link.juejin.cn?target=http%3A%2F%2Flouiszhai.github.io%2F2016%2F11%2F02%2Fajax%2F)

## 参考资源

- [XMLHttpRequest 标准](https://link.juejin.cn?target=https%3A%2F%2Fxhr.spec.whatwg.org%2F)
- [High Performance Browser Networking - XMLHttpRequest](https://link.juejin.cn?target=https%3A%2F%2Fhpbn.co%2Fxmlhttprequest%2F%23preflight)
- [msdn - ActiveXObject 对象](https://link.juejin.cn?target=https%3A%2F%2Fmsdn.microsoft.com%2Fzh-cn%2Flibrary%2F7sw4ddf8(v%3Dvs.94).aspx)
- [mdn - XMLHttpRequest](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequest)
- [XMLHttpRequest 2新技巧](https://link.juejin.cn?target=https%3A%2F%2Fwww.html5rocks.com%2Fzh%2Ftutorials%2Ffile%2Fxhr2%2F)
- [阮一峰 - XMLHttpRequest Level 2 使用指南](https://link.juejin.cn?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2012%2F09%2Fxmlhttprequest_level_2.html)
- [segmentfault - 你真的会使用XMLHttpRequest吗?](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000004322487)
- [Github - Ajax 知识体系大梳理](https://link.juejin.cn?target=http%3A%2F%2Flouiszhai.github.io%2F2016%2F11%2F02%2Fajax%2F)
- [JavaScript 标准参考教程 (alpha) - 二进制数组](https://link.juejin.cn?target=http%3A%2F%2Fjavascript.ruanyifeng.com%2Fstdlib%2Farraybuffer.html)

