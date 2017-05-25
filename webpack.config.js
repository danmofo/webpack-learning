var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PurifyCSSPlugin = require('purifycss-webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var inProduction = process.env.NODE_ENV === 'production'; 

module.exports = {
	entry: {
		app: [
		'./src/main.js',
		'./src/main.scss'
		],
		vendor: 'jquery'
	},
	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'scripts/[name].[chunkhash].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}]
				})
			},
			{
				test: /\.html$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loaders: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[hash].[ext]'
						}
					},
					'img-loader'
				]
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					limit: 1,
					name: 'fonts/[name].[hash].[ext]'
				}

			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: true,
			dry: false
		}),
		new ExtractTextPlugin({
			filename: "styles/[name].[hash].css"
		}),
		new HtmlWebpackPlugin(),
		new PurifyCSSPlugin({
			paths: glob.sync(path.join(__dirname, 'src/index.html')),
			minimize: inProduction
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: inProduction
		})
	]
}

if(inProduction) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	)
}