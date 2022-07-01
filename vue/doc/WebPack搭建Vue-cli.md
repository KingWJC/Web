背景
--

大家平时在进行Vue开发的时候，大部分人都是使用 **Vue-cli** 这个现成的Vue脚手架来进行开发的，但是用它用了这么久，你难道不想自己搭一个属于自己的 `Vue-cli` 吗？

今天我就带大家来搭建一个基本的 `Vue-cli` ，也可以让大家对 `Webpack` 有更深入的了解！建议大家一定要跟着我一步一步来哦！

建一个文件夹
--------

新建一个文件夹**my-vue-cli**用来存放项目

初始化npm
--------

在终端中输入

```
npm init
```

然后一直回车就行，这样能使项目拥有一个npm管理环境，之后可以在此环境上安装我们所需要的包

webpack、webpack-cli
---------------------

安装 `webpack、webpack-cli`

*   `webpack` ：打包的工具
*   `webpack-cli` ：为webpack提供命令行的工具
    
    ```
    npm i webpack webpack-cli -D
    ```
    

src、public
------------

在根目录下新建 `src、public` 这两个文件夹，前者用来放置项目主要代码，后者用来放项目公用静态资源

*   `public/index.html`
    
    ```
    <!DOCTYPE html\>
    <html lang\="en"\>
    <head\>
    <meta charset\="UTF-8"\>
    <meta http-equiv\="X-UA-Compatible" content\="IE=edge"\>
    <meta name\="viewport" content\="width=device-width, initial-scale=1.0"\>
    <title\>my-vue-cli</title\>
    </head\>
    <body\>
    <div id\="app"\></div\>
    </body\>
    </html\>
    ```
    
*   `src/main.js`
    
    ```
    import { add } from './tools/add.js'
    
    console.log(add(1, 2))
    console.log('我是main.js')
    ```
    
*   `src/tools/add.js`
    
    ```
    export const add = (a, b) => {
    return a + b
    }
    ```
    

入口文件
------

刚刚的 `main.js` 就是我们的入口文件，也就相当于整个引用树的根节点，webpack打包需要从入口文件开始查找，一直到打包所有引用文件。

进行入口文件的配置，在根目录下新建 `webpack.config.js` ：

```
const path = require('path')

module.exports = {
  
  mode: 'development',
  
  entry: {
    main: './src/main.js'
  },
  
  output: {
    
    path: path.resolve(\_\_dirname, './dist'),
    
    filename: 'js/chunk-\[contenthash\].js',
    
    clean: true,
  }
}
```

配置打包命令
--------

到 `package.json` 里配置打包命令：

```
"scripts": {
    "build": "webpack"
},
```

现在我们到终端输入 `npm run build` ，就能发现打包成功：

![](https://segmentfault.com/img/remote/1460000041548564)

但是这其实不是我们要的目的，我们的目的是将这个打包后的最终js文件，插入到刚刚的 `index.html` 中，因为js文件得让html文件引用，才有意义嘛！所以我们不仅要打包js，还要打包html

### 小知识：loader和plugin

*   `loader` ：使webpack拥有解析非js文件的能力，如css、png、ts等等
*   `plugin` ：拓展webpack的打包功能，如优化体积、显示进度条等等

打包html
--------

打包html需要用到 `html-webpack-plugin` 这个插件，也就是plugin，所以需要安装一下：

```
npm i html-webpack-plugin -D
```

并且需要在 `webpack.config.js` 中配置一下

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: \[
    new HtmlWebpackPlugin({
      
      template: './public/index.html',
      
      filename: 'index.html',
      
      inject: 'body',
    }),
  \]
}
```

现在我们可以在终端中执行打包命令 `npm run build` 可以看到html被打包了，且打包后的html自动引入打包后的js文件

![](https://segmentfault.com/img/remote/1460000041548565)

![](https://segmentfault.com/img/remote/1460000041548566)

现在我们可以打开打包后的 `index.html` ，发现控制台可以输出，说明成功了！

![](https://segmentfault.com/img/remote/1460000041548567)

打包CSS
-----

在 `src` 下新建 `styles` 文件夹，用来存放样式文件文件

*   `src/styles/index.scss`
    
    ```css
    body {
    	background-color: blue;
    }
    ```
    
    然后我们在入口文件 `main.js` 中引入
    
    ```js
    import './styles/index.scss'
    ```
    
    我们的目的是，打包 `index.scss` 这个文件，并且让 `index.html` 自动引入打包后的css文件，所以我们需要安装以下几个东西：
    
*   `sass、sass-loader` ：可以将scss代码转成css
*   `css-loader` ：使webpack具有打包css的能力
*   `sass-resources-loader` ：可选，支持打包全局公共scss文件
*   `mini-css-extract-plugin` ：可将css代码打包成一个单独的css文件

我们安装一下这些插件

```
npm i 
sass
sass-loader
sass-resources-loader
mini-css-extract-plugin
-D
```

然后配置一下 `webpack.config.js`

```
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  
  plugins: \[
    
    new MiniCssExtractPlugin({
      
      filename: 'styles/chunk-\[contenthash\].css',
      ignoreOrder: true,
    }),
  \],
  module: {
    rules: \[
      {
        
        test: /\\.(css|s\[cs\]ss)$/,
        use: \[
          
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          
          
          
          
          
          
          
          
        \],
      },
    \]
  }
}
```

此时我们重新执行打包命令 `npm run build` ，可以发现出现了打包后的css文件，且 `index.html` 中自动引入了css文件：

![](https://segmentfault.com/img/remote/1460000041548568)

![](https://segmentfault.com/img/remote/1460000041548569)

我们可以看看页面，可以看到，body的背景已经变成蓝色，说明有效果了：

![](https://segmentfault.com/img/remote/1460000041548570)

打包图片
----

webpack5中已经废弃了 `url-loader` ，打包图片可以使用 `asset-module` ，我们先放置一张图片在 `src/assets/images` 中：

![](https://segmentfault.com/img/remote/1460000041548571)

并且改写一下 `index.css`

```
body {
  width: 100vw;
  height: 100vh;
  // 引入背景图片
  background-image: url('../assets/images/guang.png');
  background-size: 100% 100%;
}
```

然后我们在 `webpack.config.js` 中添加打包图片的配置

```
  module: {
    rules: \[  
      {     
        test: /\\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset',
        parser: {
          
          dataUrlCondition: {
             maxSize: 25 \* 1024, 
          }
        },
        generator: {
          
         filename: 'images/\[contenthash\]\[ext\]\[query\]',
        },
     }
    \]
  }
```

我们现在重新运行一下 `npm run build` ，发现dist下已经有了 `images` 这个文件夹

![](https://segmentfault.com/img/remote/1460000041548572)

我们看一下页面背景图片已经生效，说明打包成功了！

![](https://segmentfault.com/img/remote/1460000041548573)

配置babel
-------

`babel` 可以将我们项目中的高级语法转化成比较低级的语法，比如可以将 `ES6` 转为 `ES5` ，这样可以兼容一些低版本浏览器，所以是很有必要的

首先安装所需的包：

*   `@babel/core、babel-loader` ：转换语法的工具
*   `@babel/preset-env` ：转换的一套现成规则
*   `@babel/plugin-transform-runtime` ：转换async/await所需插件
    
    ```
    npm i
    @babel/core babel-loader
    @babel/preset-env
    @babel/plugin-transform-runtime
    -D
    ```
    
    由于 `babel` 是针对js文件的语法转换，所以我们需要在 `webpack.config.js` 中去针对js进行操作
    
    ```
    module: {
      rules: \[    
        {    
          test: /\\.js$/,
          
          exclude: /node\_modules/,
          use: \[
            'babel-loader'
          \],
        }
      \]
    }
    ```
    
    单单配置了 `babel-loader` 还是不够的，我们还需要配置 `babel` 转换的规则，所以需要在根目录下创建 `babel.config.js`
    
    ```
    module.exports = {
    presets: \[
      
      "@babel/preset-env"
    \],
    
    plugins: \["@babel/plugin-transform-runtime"\]
    }
    ```
    
    此时我们重新运行打包 `npm run build` ，我们可以发现打包后的js代码中，已经把刚刚代码中的 `ES6` 语法转成 `ES5` 语法了！可以看到刚刚代码中的 `const` 已经转成 `ES5` 语法了
    

![](https://segmentfault.com/img/remote/1460000041548575)

打包Vue
-----

打包Vue需要用到以下几个包：

*   `vue` ：Vue开发所需的依赖
*   `vue-loader` ：解析 `.vue` 文件的loader
*   `vue-template-compiler` ：解析vue中模板的工具
*   `@vue/babel-preset-jsx` ：支持解析vue中的jsx语法

> 注意： `vue` 和 `vue-template-compiler` 版本需要一致，这里我使用 `2.6.14` 这个版本， `vue-loader` 这里我使用了 `15.9.8` 这个版本

所以我们先安装一下：

```
npm i 
vue@2.6.14 vue-template-compiler@2.6.14
vue-loader@15.9.8 @vue/babel-preset-jsx
-D
```

然后我们需要去 `webpack.config.js` 中配置对 `.vue` 文件的解析

```
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  
  plugins: \[
    
    new VueLoaderPlugin()
  \],
  module: {
    rules: \[
      
      {
        test: /\\.vue$/,
        use: 'vue-loader',
      }
    \]
  }
}
```

并且到 `babel.config.js` 中配置一下，让webpack支持 `.vue` 文件中的 `jsx` 语法

```
module.exports = {
  presets: \[
    "@babel/preset-env",
    
    "@vue/babel-preset-jsx"
  \],
  plugins: \["@babel/plugin-transform-runtime"\]
}
```

现在我们可以在 `src` 下新建一个 `App.vue`

```
<template>
  <div class\="box"\>我是App哈哈哈哈</div\>
</template>

<script\> export default {} </script\>

<style lang\="scss"\> .box {
  width: 500px;
  height: 200px;
  color: #fff;
  background-color: #000;
} </style\>
```

然后改写一下 `src/main.js`

```
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

此时我们重新运行 `npm run build` ，我们可以看看页面的效果，说明打包成功啦！

![](https://segmentfault.com/img/remote/1460000041548576)

配置路径别名
------

有时候文件引用搁着太多层，引用起来会看起来很不明确，比如  
`../../../../../App.vue` ，所以我们可以配置一下别名 `alia`

```
module.exports = {
  
  resolve: {
    
    alias: {
      '@': path.resolve('./src'),
      assets: '~/assets',
      tools: '~/tools'
    },
    
    extensions: \['.js', '.ts', '.less', '.vue'\],
  },
}
```

现在别名配置完成啦：

*   配置前： `../../../../../App.vue`
*   配置后： `@/App.vue`

webpack-dev-server
------------------

刚刚我们发现，每改一次代码就得重新打包一次，非常繁琐，有没有可以改代码自动重新打包的呢？这就要用到 `webpack-dev-server`

```
npm i webpack-dev-server -D
```

到 `webpack.config.js` 中配置 `devServer`

```
  devServer: {
    open: true
  },
```

然后到 `package.json` 中配置一下启动命令

```
  "scripts": {
    "build": "webpack",
    "serve": "webpack serve"
  },
```

此时我们运行 `npm run serve` 就可以启动项目啦！

区分环境
----

我们不能把所有配置都配置在一个 `webpack.config.js` 中，因为我们有两个环境 `development(开发环境)、production(生产环境)` ，所以我们在根目录下创建 `build文件夹` ，并创建三个文件

*   `webpack.base.js` ：两个环境共用配置
    
    *   入口，输出配置
    *   各种文件的处理
    *   进度条展示
    *   路径别名
*   `webpack.dev.js` ：开发环境独有配置
    
    *   webpack-dev-server
    *   不同的source-map模式
    *   不同的环境变量
*   `webpack.prod.js` ：生产环境独有配置
    
    *   不同的source-map模式
    *   不同的环境变量

我们需要先安装一个合并插件 `webpack-merge` ，用于两个环境的配置可以合并公共的配置

```
npm i webpack-merge -D
```

然后我们在根目录下新建一个 `build文件夹` ，并在此文件夹下新建 `webpack.base.js、webpack.dev.js、webpack.config.js`

*   `webpack.base.js`
    
    ```
    
    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    const { VueLoaderPlugin } = require('vue-loader')
    module.exports = {
    
    entry: {
      main: './src/main.js'
    },
    
    output: {
      
      
      path: path.resolve(\_\_dirname, '../dist'),
      
      filename: 'js/chunk-\[contenthash\].js',
      
      clean: true,
    },
    plugins: \[
      new HtmlWebpackPlugin({
        
        template: './public/index.html',
        
        filename: 'index.html',
        
        inject: 'body',
      }),
      new MiniCssExtractPlugin({
        
        filename: 'styles/chunk-\[contenthash\].css',
        ignoreOrder: true,
      }),
      new VueLoaderPlugin()
    \],
    module: {
      rules: \[
        {
          
          test: /\\.(css|s\[cs\]ss)$/,
          use: \[      
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',        
          \],
        },
        {
          
          test: /\\.(png|jpe?g|gif|svg|webp)$/,
          type: 'asset',
          parser: {
            
            dataUrlCondition: {
              maxSize: 25 \* 1024, 
            }
          },
          generator: {
            
            filename: 'images/\[contenthash\]\[ext\]\[query\]',
          },
        },
        {
          test: /\\.js$/,
          
          exclude: /node\_modules/,
          use: \[
            'babel-loader'
          \],
        },
        {
          test: /\\.vue$/,
          use: 'vue-loader',
        }
      \]
    },
    resolve: {
      
      alias: {
        '@': path.resolve('./src'),
        assets: '~/assets'
      },
      
      extensions: \['.js', '.ts', '.less', '.vue'\]
    },
    }
    ```
    
*   `webpack.dev.js`
    
    ```
    
    const { merge } = require('webpack-merge')
    const base = require('./webpack.base')
    
    module.exports = merge(base, {
    mode: 'development',
    devServer: {
      open: true,
      
    }
    })
    ```
    
*   `webpack.prod.js`
    
    ```
    
    const { merge } = require('webpack-merge')
    const base = require('./webpack.base')
    
    module.exports = merge(base, {
    mode: 'production'
    })
    ```
    

然后我们到 `package.json` 修改一下指令

```
  "scripts": {
    "serve": "webpack serve --config ./build/webpack.dev",
    "build": "webpack --config ./build/webpack.prod"
  },
```

接下来我们运行这两个命令，发现都成功了：

*   `npm run build`
*   `npm run serve`

构建进度条
-----

无论是启动项目时还是打包时，都需要进度条的展示，所以需要把进度条配置在 `webpack.base` 中，我们需要先安装进度条的插件 `progress-bar-webpack-plugin`

```
npm i progress-bar-webpack-plugin -D
```

```

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

module.exports = {
  
  plugins: \[
    
    new ProgressBarPlugin({
      format: \` build \[:bar\] ${chalk.green.bold(':percent')} (:elapsed seconds)\`,
    })
  \],
  
}
```

现在我们可以看到无论启动项目或者打包，都会有进度条了

![](https://segmentfault.com/img/remote/1460000041548577)

source-map
----------

`source-map` 的作用：代码报错时，能快速定位到出错位置， `webpack5` 的所有 `source-map模式` 可以看webpack官网：[https://webpack.docschina.org...](https://link.segmentfault.com/?enc=FisSL%2BPEE0nMRC%2FlgVuWiA%3D%3D.BwZfHI6GTfOgkBo5nhiU5%2FsWHlCJTvzkkg1weRPV9B%2B4zCZovegHueKDYHOB8wPZUyaq5nHQT6MudhuBWKVXMg%3D%3D)

这里我使用两种模式：

*   `development` ：使用 `eval-cheap-module-source-map` 模式，能具体定位到源码位置和源码展示，适合开发模式，体积较小
*   `production` ：使用 `nosources-source-map` ，只能定位源码位置，不能源码展示，体积较小，适合生产模式

所以我们开始配置 `source-map`

*   `webpack.dev.js`
    
    ```
    module.exports = merge(base, {
    
    devtool: 'eval-cheap-module-source-map'
    })
    ```
    
*   `webpack.prod.js`
    
    ```
    module.exports = merge(base, {
    
    devtool: 'nosources-source-map'
    })
    ```
    

环境变量
----

配置 `devlopment、production` 这两个环境的环境变量

*   `webpack.dev.js`
    
    ```
    const webpack = require('webpack')
    
    module.exports = merge(base, {
    
    plugins: \[
      new webpack.DefinePlugin({
        process: {
          env: {
            NODE\_DEV: JSON.stringify('development'),           
          },
        },
      }),
    \]
    })
    ```
    
*   `webpack.prod.js`
    
    ```
    const webpack = require('webpack')
    
    module.exports = merge(base, {
    
    plugins: \[
      
      new webpack.DefinePlugin({
        process: {
          env: {
            NODE\_DEV: JSON.stringify('prodction'), 
          },
        },
      }),
    \]
    })
    ```
    

优化、规范
-----

后续补充