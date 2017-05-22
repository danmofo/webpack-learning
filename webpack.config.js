const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: [
		'./src/main.js',
		'./src/main.scss'
		]
	},
	output: {
		path: path.resolve(__dirname + '/dist/'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "[name].css"
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true			
		})
	]
}

if(process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	)
}