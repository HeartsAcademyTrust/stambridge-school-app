var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'app/App.js')
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
    publicPath: '/public/'
    
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'app'),
      loader: 'babel'
    }]
  },
};