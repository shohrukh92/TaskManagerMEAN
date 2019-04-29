var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [{
            pattern: './config/karma-test-shim.js', 
            watched: false
        }],

        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    };

    config.set(_config);
};