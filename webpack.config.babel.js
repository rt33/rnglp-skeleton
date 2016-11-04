import path from 'path';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

export default {
  context: __dirname + "/src",
  entry: {
    bundle: __dirname + '/src/js/main.js',
    style: __dirname + '/src/js/style.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extenstions: ['', '.js', '.json', '.html']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint"
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