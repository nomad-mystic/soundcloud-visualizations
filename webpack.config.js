
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Config
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve('public/'),
        filename: 'bundle.js',
        publicPath: './public/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins: function () { // post css plugins, can be exported to postcss.config.js
                                    return [
                                        require('precss'),
                                        require('autoprefixer'),
                                    ];
                                },
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                    publicPath: './public/assets/css/',
                }),
            },
        ],
    },
    // devServer: {
    //     contentBase: path.join(__dirname, '/public'),
    //     watchContentBase: true,
    //     // proxy: [
    //     //     {
    //     //         context: ['./api'],
    //     //         target: 'http://localhost:8000',
    //     //         secure: false,
    //     //     },
    //     // ],
    //     port: 8000, // port webpack-dev-server listens to, defaults to 8080
    //     overlay: { // Shows a full-screen overlay in the browser when there are compiler errors or warnings
    //         warnings: false, // defaults to false
    //         errors: false, // defaults to false
    //     },
    // },
    devtool: 'source-map',
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'Tether': 'tether',
        //     'Popper': 'popper.js',
        //     // In case you imported plugins individually, you must also require them here:
        //     // Util: "exports-loader?Util!bootstrap/js/dist/util",
        //     // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
        // }),
        new ExtractTextPlugin('assets/css/styles.css'),
    ],
};