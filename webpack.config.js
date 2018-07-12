const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    course: "./public/component/course/index.js",
    login: "./public/component/login/index.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "build/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ['@babel/preset-env'],
            plugins: ['transform-class-properties']
          }
        }
      }
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // }
    ]
  }
  // },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: "./src/index.html",
  //     filename: "./index.html"
  //   })
  // ]
};