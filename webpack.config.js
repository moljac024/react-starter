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
    'react': 'React'
  },
  entry: {
    helloWorld: './src/main.js'
    // helloWorld: './src/main.jsx'
  },
  output: {
    // filename: 'dist/[name].js'
    // filename: 'dist/bundle.js'
    filename: 'bundle.js'
  },
};
