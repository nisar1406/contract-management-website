const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  // Control how source maps are generated
  // devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: '[id][contenthash].js'
  },
  devServer: {
    historyApiFallback: true,
    // contentBase: './public',
    open: false,
    compress: true,
    hot: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    // new CleanWebpackPlugin(),
    // // Copies files from target to destination folder
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       // from: paths.src + '/assets',
    //       to: 'assets',
    //       globOptions: {
    //         ignore: ['*.DS_Store'],
    //       },
    //     },
    //   ],
    // }),
    new Dotenv({
      path: '.env',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: path.join(__dirname, "public", "favicon.ico"),
      title: "Contract Management"
    }),
  ],
}
