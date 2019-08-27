const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const uglifyJs = new UglifyJsPlugin();

module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path: path.resolve(__dirname, "assets/js/"),
    filename: "bundle.js"
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ],
    rules: [
      {
        test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
        }
      }
    ],
  },
  plugins:[
    uglifyJs
  ]
}
