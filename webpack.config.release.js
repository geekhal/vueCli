var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var versionReadPath = './src/ver.js';
var versionSavePath = './ver.js';
var flag = 'release'; //生产或调试环境标识
module.exports = {
    entry: {
        main: './src/app.js',
    },
    output: {
        path: path.join(__dirname, flag, '[hash]'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: "vue" }, 
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.html$/, loader: 'html' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false // 警告开关
            },
            output: {
                comments: false // 注释开关
            }
        }),
        function() {
            this.plugin('done', function(stats) {
                fs.readFile(versionReadPath, 'utf-8', function(err, data) {
                    if (!err) {
                        var reg = new RegExp('{{version}}', 'ig');
                        data = data.replace(reg, flag + '/' + stats.hash);
                        fs.writeFile(versionSavePath, data, 'utf-8', function(err2) {
                            if (err2) {
                                console.log(err2);
                            }
                        });
                    }
                    else {
                        console.log(err);
                    }
                });
            });
        }
    ]
}
