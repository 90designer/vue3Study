const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        test:/\.css$/,
        // use:[ MiniCssExtractPlugin.loader, 'css-loader','postcss-loader']

        // 这种写法，只需要在webpack.config.js中配置，不需要独立的配置文件
        use:[ 
            MiniCssExtractPlugin.loader, 
            'css-loader',
            {
              loader:'postcss-loader',
              options:{
                  postcssOptions:{
                    plugins:[
                      [
                        'postcss-preset-env',
                        {
                          // 其他选项
                        }
                      ]
                    ]
                  }
              }
           }
          ]
      },
      {
        test:/\.less$/,
        // 先用less-loader解析，再用css-loader打包，再用 MiniCssExtractPlugin.loader打包单独文件，并引入。
        use:[ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test:/\.scss$/,
        // 先用less-loader解析，再用css-loader打包，再用style-loader引入到head的style中。
        use:['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),
  ],
}