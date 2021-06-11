const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssminimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][hash].js",
    },
    resolve: {
        extensions: [".js"],
        // alias
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/i,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: true,
                    },
                },
            },
            {
                test: /\.css|sass|scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    {
                        loader: "css-loader",
                    },
                    "sass-loader",
                ],
            },
            {
                test: /(png|jpe?g|svg|webp|woff|woff2)$/i,
                type: "asset/resource",
                use: {
                    loader: "image-webpack-loader",
                },
                generator: {
                    filename: "./img/[hash][ext][query]",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "assets / [name][contenthash].css",
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssminimizerWebpackPlugin(), new TerserWebpackPlugin()],
    },
};
