const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/"
  },
  module: {
    // each loader reffered to as a rule
    rules: [
      {
        use: "babel-loader",
        // regular expression looking for any *.js file
        test: /\.js$/
      },
      {
        // loaders are applied from right to left
        // injecting all css into a style tag in the html document
        // bad performance
        // use: ["style-loader", "css-loader"],

        // Extracts text from a bundle into a separate file
        loader: ExtractTextPlugin.extract({
          loader: "css-loader"
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          // if smaller than 40,000 BYTES, save into bundle
          { loader: "url-loader", options: { limit: 40000 } },
          "image-webpack-loader"
        ]
      }
    ]
  },
  // find any files were transformed by loader (css) and save to "style.css"
  plugins: [new ExtractTextPlugin("style.css")]
};

module.exports = config;
