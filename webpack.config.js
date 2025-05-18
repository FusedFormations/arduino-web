const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dist/index.js', // after tsc builds index.ts
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ArduinoWeb',
    libraryTarget: 'window' // makes ArduinoWeb available globally
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

