const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "src", dir);
}

module.exports = {
  resolve: {
    alias: {
      "@app": resolve(""),
      "@containers": resolve("containers"),
      "@components": resolve("components"),
      "@actions": resolve("actions"),
      "@reducers": resolve("reducers"),
      "@assets": resolve("assets")
    },
    extensions: ["*", ".js", ".jsx", ".json"]
  },
  context: process.cwd(),
  node: { __filename: true },
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  externals: [
    {
      xmlhttprequest: "{XMLHttpRequest:XMLHttpRequest}"
    }
  ]
};
