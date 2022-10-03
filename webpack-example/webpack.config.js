const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    compress: false,
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    open: true
   
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  plugins: [new HtmlWebpackPlugin()],
};
