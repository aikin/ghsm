'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  devServer:{
    contentBase: './src',  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
    devtool: 'eval',
    hot: true,        //自动刷新
    inline: true,
    port: 3005
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '../dist/js'),
    publicPath: /dist/
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, "./src"),
        exclude: /node_modules/
      }
    ],
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0&plugins=transform-runtime',
      include: path.join(__dirname, './src'),
      exclude: /node_modules/
    }]
  }
};
