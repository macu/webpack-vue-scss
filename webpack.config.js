const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: 'production',
	entry: [
		'./src/app.js',
	],
	output: {
		filename: 'app.js',
		path: __dirname + '/dist',
	},
	externals: {
		jquery: 'jQuery',
		vue: 'Vue',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},

			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: "app.css",
		}),
	],
};
