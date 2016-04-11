var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: 'web',
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
            // { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader") },
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
        new ExtractTextPlugin("app.css", {allChunks: true}),
        //new webpack.optimize.CommonsChunkPlugin("bootstrap", "vendor.css"),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
