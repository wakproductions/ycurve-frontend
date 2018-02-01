const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: "./js/App.jsx",
  watch: true,
  devtool: "cheap-eval-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/dist/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.scss?$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require('precss'),
                  require('autoprefixer')
                ]
              }
            }
          },
          { loader: "sass-loader" }
        ]
      },
      { test: /\.jsx?$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    // This copies index.html into dist for production
    new CopyWebpackPlugin(
      ['index.html']
    ),

    // This copies index.html into dist for webpack-dev-server
    new WriteFileWebpackPlugin({ test: /\.html$/ })
  ]
}