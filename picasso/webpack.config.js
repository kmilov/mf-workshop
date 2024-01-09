const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    devServer: {
        port: 5002
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.html$/,
                use: ['html-loader']
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'picasso',
            filename: 'remotePicasso.js',
            exposes: {
                './Picasso': './src/picasso'
            },
        
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};