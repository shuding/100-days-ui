var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	plugins: [
    	new HtmlWebpackPlugin()
	],
	output: {
		libraryTarget: "var",
        library: "Foo"
	},
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file?hash=sha512&digest=hex&name=[hash].[ext]" },
            { test: require.resolve('react'), loader: "expose?React" },
            { test: require.resolve('react/lib/ReactDOM'), loader: "expose?ReactDOM" }
        ]
    }
};