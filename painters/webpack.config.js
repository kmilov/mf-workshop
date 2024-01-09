const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    devServer: {
        port: 5001
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'painters',
            filename: 'remoteEntry.js',
            remotes: {
                'picasso': 'picasso@http://localhost:5002/remotePicasso.js'
            },
        
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};