const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: 'production',
	entry: [
		'./src/app.js',
	],
	output: {
		filename: 'app.js',
		path: __dirname + '/js',
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
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						// options: {
						// 	includePaths: [
						// 		__dirname + '/bower_components/bootstrap-sass/assets/stylesheets',
						// 	],
						// },
					},
				]
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '../css/app.css',
		}),
	],
};
