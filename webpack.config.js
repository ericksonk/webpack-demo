'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {
  context: APP,
   entry: {
      app: ['webpack/hot/dev-server', './app.js']
  },
  output: {
      path: APP,
      filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
};
