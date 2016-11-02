import path from 'path';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    bundle: './src/js/main.js',
    style: './src/js/style.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          `${__dirname}/src`
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true
    })
  ],
  postcss: [
    autoprefixer({
      browsers: [
        'IE 9',
        'IE 10',
        'IE 11',
        'last 2 versions'
      ]
    }), precss
  ]
};