var path = require('path'),
	webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
    './app/App.js'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'app'),
			loaders: ['react-hot', 'babel']
		}]
	}
};