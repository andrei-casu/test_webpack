var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
<<<<<<< HEAD
    // target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    // externals: [nodeExternals()],//ignore from bundle external libraries
    // target: 'web',
=======
    target: 'web',
>>>>>>> 23d6b0a89b201d86c4468f5abafaa99be2dc5c55
    entry: {
        app: "./app",
        vendor: ["jquery", "bootstrap"]
    },
    output: {
        path: "./dist",
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader") },
            { test: /\.less$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test: /\.(jpe?g|png|gif)$/i,
              loader:'file' },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    
    plugins: [
<<<<<<< HEAD
        new ExtractTextPlugin("app.css", {allChunks: false}),
        // new webpack.optimize.CommonsChunkPlugin("bootstrap", "vendor.css"),
=======
        new ExtractTextPlugin("app.css", {allChunks: true}),
        //new webpack.optimize.CommonsChunkPlugin("bootstrap", "vendor.css"),
>>>>>>> 23d6b0a89b201d86c4468f5abafaa99be2dc5c55
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
