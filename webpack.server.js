var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var HOST = config.devServer.host;
var PORT = config.devServer.port;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, HOST, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + HOST + ':' + PORT);
});
