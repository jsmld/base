const HtmlWebPackPlugin = require("html-webpack-plugin");
const Webpack = require('webpack')
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const reactPlugin = new Webpack.ProvidePlugin({
  React: 'react'
});
module.exports = {
  mode: "development",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    { test: /\.tsx?$/, loader: 'ts-loader' },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [htmlPlugin, reactPlugin]
};