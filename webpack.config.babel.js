import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import precss from 'precss';
import webpack from 'webpack';

export default {
  context: `${__dirname}/src`,
  entry: {
    bundle: `${__dirname}/src/js/main.js`
  },
  output: {
    path: `${__dirname}dist`,
    filename: '[name].js',
    publicPath: '/'
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js', '.json', '.html']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    contentBase: 'dist',
    port: 3000
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${__dirname}/src/html/index.html`
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          `${__dirname}/src/js`
        ],
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss?parser=sugarss'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html?name=[path][name].[ext]'
      }
    ]
  },
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