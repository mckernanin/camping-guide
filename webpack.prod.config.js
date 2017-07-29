const baseConfig = require('./webpack.base.config.js');
const HtmlWebbpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

baseConfig.devtool = 'cheap-module-source-map';
baseConfig.plugins = [
  new HtmlWebbpackPlugin({
    title: 'Shrimp',
    template: 'index.ejs'
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];
module.exports = baseConfig;
