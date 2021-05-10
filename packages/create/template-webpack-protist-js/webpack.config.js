const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');

module.exports={
    mode: "development",
    entry:{
        index:"./page/index/static/js/index.js",
    },
    devServer:{
        watchContentBase: true,
        contentBase:"./page",
        host: "0.0.0.0",
        hot:true,
        port:8081,
        inline: true,//设置外部引入
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:true,
            filename:"index.html" ,
            template:"./page/index/index.html",
            hash:true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module:{
      rules:[
          {
              test:/\.js$/,
              use:['babel-loader'],
          },
          {
              test: /\.css$/,
              use: [
                  { loader :'style-loader'},
                  { loader :'css-loader'}]
          },
          {
              test:/\.html$/,
              use:['html-loader']
          }
      ],
    },
    devtool: "source-map",
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
}
