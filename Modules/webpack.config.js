const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './change-background/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './change-background/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  }
};
