const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // ... Configuración de empaquetado
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        // ... Lista de reglas respecto a los loaders	
        rules: [
            // Reglas para babel
            {
                test: /\.(js|jsx)$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            },
            // Reglas para HTML loader
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            // Reglas para css loader
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        //... Configuración de plugins
        new HtmlWebpackPlugin(
            {
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer:{
        allowedHosts: path.join(__dirname, 'dist'),
        port: 3005,
        compress:true
    }
}
