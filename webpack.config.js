module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./main.js",
    html: "./index.html",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },


  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx', '.json', '.coffee']
  }
}
