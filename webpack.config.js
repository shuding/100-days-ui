var HtmlWebpackPlugin = require('html-webpack-plugin');

var app = process.env.app;

module.exports = {
	plugins: [
    	new HtmlWebpackPlugin("index.html")
	],
	entry: './src/' + app + '/index.js',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel" },
            { extensions: [ 'png', 'jpg', 'jpeg', 'gif', 'svg' ],
    		  test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
    		  loader: 'url-loader?limit=10000' },
  			{ extensions: [ 'less' ],
    		  test: /\.(less)(\?.*)?$/,
    		  loaders: ['style', 'css?module', require.resolve('./fix-loader') ,'less?minimize'] }
        ]
    }
};
