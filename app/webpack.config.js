const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, '.'),
  devServer: {
    contentBase: './src',
    devtool: 'eval-source-map',
    hot: true,
    inline: true,
    port: 3005
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3005',
    './src/index.js'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './dist/'),
    publicPath: '/dist/'
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
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel?presets[]=es2015&presets[]=react&presets[]=stage-0&plugins[]=transform-runtime&plugins[]=transform-react-display-name',
        include: path.join(__dirname, './src'),
        exclude: /node_modules/
      }
    ]
  }
};
