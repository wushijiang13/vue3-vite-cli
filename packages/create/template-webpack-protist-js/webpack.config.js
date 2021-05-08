const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');

module.exports={
    mode: "development",
    entry:{
        index:"./page/index/index.js",
    },
    devServer:{
        contentBase:"./dist",
        host: "0.0.0.0",
        hot:true,
        port:8081,
        hotOnly: true,//启用热模块构建，以防万一
        lazy: false,
        overlay: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:true,
            filename:"index.html",
            template:"./page/index/index.html",
            hash:true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module:{
      rules:[
          {
              test:/\.js$/,
              use:["babel-loader"],
          },
          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          },
          {
              test:/\.html$/i,
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
