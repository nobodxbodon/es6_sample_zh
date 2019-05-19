const path = require('path');

module.exports = {
  entry: './测试.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};