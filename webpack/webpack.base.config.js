const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); // 测速
const smp = new SpeedMeasurePlugin();
const WebpackBar = require("webpackbar"); // 进度条
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const resolvePath = (_path) => path.resolve(__dirname, _path);
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 单独打包css
const baseConfig = {
  entry: resolvePath("../src/index.jsx"), // 入口
  output: {
    // 出口
    path: resolvePath("../dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 从左往右执行
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        // 从左往右执行
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.jsx$/,
        use: "babel-loader",
      },
      {
        test: /\.tsx$/,
        use: "ts-loader",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("../public/index.html"),
      filename: "index.html",
      title: "Webpack React",
    }), // html
    new WebpackBar(), // 进度条
    new CleanWebpackPlugin(), // 清理之前打包文件
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
  ],
};

module.exports = smp.wrap({
  baseConfig,
  resolvePath,
});
