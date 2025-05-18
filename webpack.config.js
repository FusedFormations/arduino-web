const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './dist/test.js',
  output: {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist'),
  library: 'ArduinoWeb', 
  libraryTarget: 'window', 
  }
}
