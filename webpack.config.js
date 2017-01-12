var path = require('path');
var ROOT_DIR = process.cwd();
var RESOURCE_DIR = path.resolve(ROOT_DIR, 'src/main/resources/static/app');
var DIST_DIR = path.resolve(ROOT_DIR, 'src/main/resources/static/app-dist');


module.exports = {
    context:RESOURCE_DIR,
    entry: './index.js',
    output: {
        path: DIST_DIR,
        filename: 'app.bundle.js'
    },
    watch:  true,
    module: {
        loaders :[{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/
        }]
    },
    plugins: []
};