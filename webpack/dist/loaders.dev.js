"use strict";

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [{
  test: /\.s?css$/,
  oneOf: [{
    test: /\.module\.s?css$/,
    use: [MiniCssExtractPlugin.loader, {
      loader: 'css-loader',
      options: {
        modules: true,
        exportOnlyLocals: false
      }
    }, 'sass-loader']
  }, {
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
  }]
}];