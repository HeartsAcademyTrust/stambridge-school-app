module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exlude: /(node_nodules|bower_components)/,
				loader: 'babel'
			}
		]
	}
}	