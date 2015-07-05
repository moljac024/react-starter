var path = require('path');
var webpack = require('webpack');

var DEV_SERVER_HOST = '0.0.0.0';
var DEV_SERVER_PORT = 3000;
var DEV_SERVER_LISTEN_HOST = 'localhost';

module.exports = {

  devServer: {
    host: DEV_SERVER_HOST,
    port: DEV_SERVER_PORT
  },

  context: path.join(__dirname, "/src"),
  entry: {
    // javascript: "./main.js",
    javascript: [
      'webpack-dev-server/client?http://' + DEV_SERVER_LISTEN_HOST + ':' + DEV_SERVER_PORT, // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      "./main.js"
    ],
    html: "./index.html"
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx', '.json', '.coffee']
  }
};
