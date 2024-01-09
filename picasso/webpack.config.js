const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (_, argv) => ({
    entry: './src/index.js',

    devServer: {
        port: 5002,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: "vue/dist/vue.js",
        },
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
});
