### webpack 处理 css 的浏览器兼容性

1. 安装 postcss-loader 和 postcss-extract-plugin
2. 在 webpack.config.js 中使用 postcss-loader（先 css 文件转为转为兼容的 css 文件）
3. 在 webpack.config.js（根目录下）同目录下，创建 postcss.config.js，内容如下：
   <code>
   module.exports={
   plugins:[
   require('postcss-preset-env')()
   ]
   }
   </code>
4. 在 package.json 中 "browserslist"选项配置
   "browserslist":{
   "development":[] // 测试
   "product":[] //生产
   }
   "browserslist": [
   "> 0.2%", // 80%浏览器
   "last 2 versions", // 最新的两个版本
   "not dead" // 死游戏浏览器不支持
   ]

### browserslist 配置简介：

例子 说明

> 1% 全球超过 1%人使用的浏览器
> 5% in US 指定国家使用率覆盖
> last 2 versions 所有浏览器兼容到最后两个版本根据 CanIUse.com 追踪的版本
> Firefox ESR 火狐最新版本
> Firefox > 20 指定浏览器的版本范围
> not ie <=8 方向排除部分版本
> ie 6-8 选择一个包含所有版本的范围。
> iOS 7 直接使用 iOS 浏览器版本 7。
> Firefox 12.1 指定浏览器的兼容到指定版本
> unreleased versions 所有浏览器的 beta 测试版本
> unreleased Chrome versions 指定浏览器的测试版本
> since 2013 2013 年之后发布的所有版本
> defaults Browserslist 默认浏览器(> 0.5%，last 2 versions，Firefox ESR，not dead)。

### devServer 监听项目文件变化，自动打包

> npm i webpack-dev-server
> 如果想让浏览器自动刷新打包文件，在 webpack.config.js 中添加 target:"web"的选项
> 启动服务：
> webpack5 的方式：webpack serve [--port] [--open] [--hot] 等等
> 可在 package.json 中的 script 里配置命令，使用 npm run xxx 运行
> 还可以在 webpack.config.js 中配置 devServer:{}

### webpack 通过 tree-shaking 去掉实际没有使用的 js 代码

> 1. 必须使用 es6 模块化语法
> 2. 必须开启 production 环境

### purgecss-webpack-plugin 减少没有使用的 css 样式的引入

> 1. es6 或者 commonJs 方式都可以
> 2. 一般都是 production 环境
