const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    main: './index.native.js',
  },
  fallback: {
    fs: false,
    tls: false,
    net: false,
    path: false,
    zlib: false,
    http: false,
    https: false,
    stream: false,
    crypto: false,
    'crypto-browserify': require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
  },
  rules: [
    {
      test: require.resolve('chess.js'),
      parser: {
        amd: false,
      },
    },
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};
