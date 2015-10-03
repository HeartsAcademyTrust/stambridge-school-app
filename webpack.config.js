var path = require('path'),
	webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app/App.js'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'app'),
			loaders: ['react-hot', 'babel']
		}]
	}
};