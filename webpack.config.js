const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".css", ".scss", ".js", ".jsx", ".ts",".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith("data:")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },

      {
        test: /\.(ts|tsx)?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new ModuleFederationPlugin({
      name: "FIRST_APP",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/App.tsx",
        "./counterSlice":'./src/redux/slice/dashboardSlice.ts'
      },
      // shared:['react','react-dom']
      // shared: require("./package.json").dependencies,
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] },
        "@reduxjs/toolkit" :{singleton: true, eager: true, requiredVersion: deps["@reduxjs/toolkit"]},
        "react-redux" :{singleton: true, eager: true, requiredVersion: deps["react-redux"]}
      },
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8088,
    liveReload: true
    
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    scriptType: 'text/javascript'
  },
  optimization: {
    minimize: false,
    splitChunks: false,
  },
};