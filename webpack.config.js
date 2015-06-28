module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['react-hot', 'jsx', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    // 'react': 'React'
  },
  entry: {
    helloWorld: './src/main.js'
  },
  output: {
    filename: 'dist/webpack-bundle.js'
  },
};
