const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output:{
    // filename:'[name][hash:10].js',
    filename:'[name].js',
    path:resolve(__dirname, 'build')
  },
  module:{
    rules:[
      {
        test:/\.less$/,
        // 先用less-loader解析，再用css-loader打包到js文件中，再用style-loader引入到head的style中。
        use:['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test:/\.scss$/,
        // 先用less-loader解析，再用css-loader打包到js文件中，再用style-loader引入到head的style中。
        use:['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
  ],
}