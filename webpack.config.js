const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = {
    entry: {
        main: './main' //从这个文件开始寻找依赖
    },
    output: {
        path: path.join(__dirname, './dist'), //存放打包文件输出目录
        publicPath: '/dist/', //制定资源文件引用目录
        filename: 'main.js' //生成的文件名
    },
    module: {
        // rules:[{
        //     test: /\.css/,
        //     use: ['style-loader', 'css-loader']
        // }]
        rules: [
            {
                test: /\.vue/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        //把vue文件里面的css也提取出来
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader?minimize', //加上minimize参数就可以对css文件也进行压缩
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                //最终生成的路径是和publicPath拼接而成的绝对路径
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'//如果小于1kb，这些文件都会转成base64来加载,否则会占用一次请求
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};

module.exports = config;
//之前写成了export 就报错了说config file found but no entry
//之前还使用了webpack4 总是报错误解析./src文件失败，开始很纳闷没写过./src路径查了之后发现是webpack4默认要找src文件下的index.js作为入口文件
//然后果断降级为webpack2