var path = require('path'),
  webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/App.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'app'),
      loader: 'babel'
    }]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
