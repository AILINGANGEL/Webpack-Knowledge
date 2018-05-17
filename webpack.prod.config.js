const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge'); //合并配置
const webpackBaseConfig = require('./webpack.config.js');

webpackBaseConfig.plugins = []; //清空基本文件中的插件配置
module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        filename: '[name].[hash].js' //通过hash值来判断唯一的文件名,防止缓存
    },
    plugins:[
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true //提取所有分支的css
        }),
        //定义Node环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //自动生成html文件
        new HtmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs', //ejs是Node的一种模板,
            inject: false
        })
    ]
})