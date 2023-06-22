const path = require("path");

module.exports = {
    entry: "./src/pages/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, ".next"),
    },
    mode: "development",
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "path": require.resolve("path-browserify")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(jpg|png)$/,
                use: ["file-loader"]
                // loader: "url-loader?limit=25000",
                // //loader: 'file?name=[path][name].[ext]',
                // include: path.join(__dirname, 'client')
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    }
}