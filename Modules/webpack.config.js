const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './change-background/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './change-background/index.html'
    })
  ]
};
