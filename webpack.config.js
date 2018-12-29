const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const pkg = require('./package')
const DEV_PORT = process.env.PORT || 4444

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/,
        use: 'raw-laoder',
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin({ filename: 'style.css' })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
