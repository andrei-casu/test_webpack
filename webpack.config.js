var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: 'web',
    entry: {
        app: [/*path.join(__dirname, "app"),*/ path.join(__dirname, "app/index.jsx")],
        vendor: ["jquery", "bootstrap", path.join(__dirname, "app/components/shared/vendor.js"), "react", "react-dom"]
    },
    output: {
        path: "./dist",
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
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
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.js?$/,
                // loaders: ['babel?cacheDirectory,presets[]=es2015'],
                loaders: ['babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=survivejs-kanban'],//only if react is used with js and not jsx
                include: path.join(__dirname, "app")
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=survivejs-kanban'],
                include: path.join(__dirname, "app")
            }
        ]
    },
    
    plugins: [
        // new ExtractTextPlugin("app.css", {allChunks: false}),
        new ExtractTextPlugin("[name].css"),
        //new webpack.optimize.CommonsChunkPlugin("bootstrap", "vendor.css"),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
