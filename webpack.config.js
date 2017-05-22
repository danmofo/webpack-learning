const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve('./dist/'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// this is parsed right to left
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
	]
}

if(process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}