const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  console.log("x production");
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config.js");
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  // go to find dist directory
  app.use(express.static("dist"));

  // Anyone make a route, send them back the index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });
}

app.listen(process.env.PORT || 3050, () => console.log("Listening"));
