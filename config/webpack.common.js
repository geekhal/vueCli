'use strict';
const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
  entry: {
    'vendor': './src/kit/vendor.js',
    'app': './src/jobs/app.js'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'file'
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    })
  ]
};