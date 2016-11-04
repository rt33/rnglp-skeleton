import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import precss from 'precss';
import webpack from 'webpack';

export default {
  context: `${__dirname}/src`,
  entry: {
    bundle: `${__dirname}/src/js/main.js`
  },
  output: {
    path: `${__dirname}/dist`,
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
    colors: true,
    contentBase: 'dist',
    port: 3000
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/html/index.html`,
      filename: `${__dirname}/dist/index.html`
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
          `${__dirname}/src`
        ],
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass'
        ]
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