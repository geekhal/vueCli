var path = require('path');
module.exports = {
    entry: {
        main: './src/app.js',
    },
    output: {
        path: __dirname,
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
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
    }
}
