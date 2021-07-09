const path = require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
//https://www.npmjs.com/package/mini-css-extract-plugin  用于生成新的css 文件
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
// https://github.com/webpack-contrib/css-minimizer-webpack-plugin 用于压缩css文件
const CssMinimizerPlugin=require('css-minimizer-webpack-plugin')

let assesDir='static'

module.exports={
    mode: "development",
    entry: "./page/index/static/js/index.js",
    devServer:{
        watchContentBase: true,
        contentBase:"./page",
        host: "localhost",
        hot:true,
        port:8888,
        // inline: true,//设置外部引入
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:true,
            filename:"index.html" ,
            template:"./page/index/index.html",
            hash:true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename:`${assesDir}/css/[name].[hash:8].css`,
            chunkFilename: `${assesDir}/css/[name].[hash:8].css`,
            linkType: "text/css",
        })
    ],
    module:{
      rules:[
          {
              test:/\.js$/,
              exclude: /(node_modules)/,
              use:[{
                  loader: 'babel-loader',
              }],
          },
          {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader,
                  // { loader :'style-loader'}, 和minicss 冲突
                  { loader :'css-loader'}]
          },
          {
              test:/\.html$/,
              use:[{
                  loader: "html-loader",
              }]
          },
          {
              //webpack5中不再使用url-loader，但是我们先将webpack4使用url-loader的用例
              test:/\.(png|jpg|gif|svg|webp)$/, //如有需要后续自己加
              type: 'asset/resource', //发送一个单独的文件并导出 URL
              generator:{
                  //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                  filename:`${assesDir}/img/[name].[hash:8][ext]`,
              },
          },
          {
              test:/\.(ttf)$/,
              type:'asset/resource',
              generator:{
                  filename:`${assesDir}/font/[name]-[hash:8].[ext]`,
              },
          }
      ],
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    devtool: "source-map",
    output:{
        filename:`${assesDir}/js/[name].bundle.js`,
        path: path.resolve(__dirname, 'dist'),
        clean:true,
        chunkFilename:`${assesDir}/js/[name].chunk.js`,
    },
}
