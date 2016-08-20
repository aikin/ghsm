const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.devServer.port, 'localhost', (err) => {
    if (err) {
      console.error(err);
    }
    console.info('listening at localhost:' + config.devServer.port);
    console.info('opening your system browser...');
    open('http://localhost:' + config.devServer.port + '/webpack-dev-server/');
  });
