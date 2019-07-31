var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
  "react",
  "lodash",
  "redux",
  "react-redux",
  "react-dom",
  "faker",
  "react-input-range",
  "redux-form",
  "redux-thunk"
];

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, "dist"),
    // [name] entry name
    // [chunkhash] is calculated for entry file
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        // do not apply babel to any files that are located inside the directory
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // mainfest file to tell the browser whether vendor file is change
      names: ["vendor", "manifest"]
    }),
    // add script tags to html automatically
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    // use to define window scope variable within the bundle.js file
    new webpack.DefinePlugin({
      // react will check this
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
