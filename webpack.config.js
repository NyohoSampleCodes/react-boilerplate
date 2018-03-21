const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')
const pkg = require('./package')
const DEV_PORT = process.env.PORT || 4444

module.exports = {
  mode: 'development',
  
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.txt$/,
        use: 'raw-laoder'
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader']
        })
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin("style.css"),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
