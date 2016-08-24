var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var versionReadPath = './src/ver.js';
var versionSavePath = './ver.js';
var flag = 'build'; //生产或开发环境标识
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
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
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
                    } else {
                        console.log(err);
                    }
                });
            });
        }
    ]
}