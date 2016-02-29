'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {
  // config goes here
  context: APP,
  entry: {
    app: 'app/app.js'
  },
  output: APP,
  filename: 'bundle.js'
};
