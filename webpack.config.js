var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//将所有css文件导成一个
var extractLESS = new ExtractTextPlugin('./css/[name].less');
var extractCSS = new ExtractTextPlugin('./css/[name].css');
module.exports = {
	entry : __dirname + '/src/app.js',
	output : {
		path : __dirname + '/lastpack',
		filename : '[name].pack.js'
	},
	module : {
		loaders : [
			{
				test : /\.html$/,
				loader : 'html'
			},
			{
				test : /\.(css|less)/,
				loader : ExtractTextPlugin.extract('style', 'css!less'),
				exclude: '/lastpack/'
			}
		]
	},
	externals : {
		'vue' : 'Vue',
		'vue-router' : 'VueRouter' 
	},
	plugins : [
		extractCSS,
		new webpack.optimize.UglifyJsPlugin({// 打包文件
			compress : {
				warnings : false
			}
		})
	]
};