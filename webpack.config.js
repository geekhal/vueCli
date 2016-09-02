var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var versionReadPath = './src/ver.js';
var versionSavePath = './ver.js';
var flag = 'build'; // 生产或开发环境标识

var isProduction = function() {
    // 是否为生产环境
    return process.env.NODE_ENV === 'production';
};

var output = {
    path: path.join(__dirname, flag),
    filename: '[name].bundle.js'
};

var plugins = [];

var dealConfigs = function() {
    if (isProduction()) {
        flag = 'dist';
        output['path'] = path.join(__dirname, flag, '[hash]');
        // 混淆
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false // 警告开关
                },
                output: {
                    comments: false // 注释开关
                }
            })
        );
    } else {
        flag = 'build';
        output['path'] = path.join(__dirname, flag);
    }
    (function(flag) {
        // 生产或开发环境文件存储
        plugins.push(function() {
            this.plugin('done', function(stats) {
                fs.readFile(versionReadPath, 'utf-8', function(err, data) {
                    if (!err) {
                        var reg = new RegExp('{{version}}', 'ig');
                        if (flag === 'dist') {
                            // 生产环境
                            data = data.replace(reg, flag + '/' + stats.hash);
                        } else {
                            // 开发环境
                            data = data.replace(reg, flag);
                        }
                        fs.writeFile(versionSavePath, data, 'utf-8', function(err2) {
                            if (err2) {
                                console.log(err2);
                            }
                        });
                    } else {
                        console.log(err);
                    }
                });
            });
        });
    })(flag);
}

dealConfigs();

var config = {
    entry: {
        'app': './src/app.js'
    },
    output: output,
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: "vue"
        }, {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },
    resolve: {
        modulesDirectories: [
            'node_modules', 'web_modules'
        ]
    },
    plugins: plugins
}
module.exports = config;