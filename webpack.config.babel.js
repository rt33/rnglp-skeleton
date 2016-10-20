import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

export default {
  entry: {
    bundle: './src/js/main.js',
    style: './src/js/style.js'
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          `${__dirname}/src`,
        ],
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss?parser=sugarss'
        ]
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: [
      'IE 9',
      'IE 10',
      'IE 11',
      'last 2 versions'
    ] }), precss
  ]
};