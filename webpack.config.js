// const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i, // Обработка всех CSS-файлов
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "dist"),
//     },
//     port: 9000,
//     open: true,
//   },
// };
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Очищает папку dist перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Путь к статическим файлам
    },
    port: 9000,
    open: true, // Открывать браузер автоматически
    historyApiFallback: true, // Для поддержки HTML5 History API
  },
};
