const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/assets'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
}