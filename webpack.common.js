const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: path.join(__dirname, "src/index.jsx") //for non static user wtitten code
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test :/\jsx?$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            }
        ]
    },
    plugins :[
        new HTMLWebpackPlugin({
            template : path.join(__dirname, "src/index.html")
        })
    ],
}