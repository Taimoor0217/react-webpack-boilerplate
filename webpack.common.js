const path = require('path')
module.exports = {
    entry: {
        main: './src/index.js' //for non static user wtitten code
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    }
}