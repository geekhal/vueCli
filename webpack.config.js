const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');
const testConfig = require('./config/webpack.test');

const flag = process.env.NODE_ENV || 'development';

if(flag === 'production') {
    module.exports = prodConfig;
}
else if (flag === 'test') {
    module.exports = testConfig;
}
else {
    module.exports = devConfig;
}