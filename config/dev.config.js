
const path = require('path');
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const base = require('./base.config.js')

module.exports = merge(base, {

  mode: 'development',
  // Control how source maps are generated
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    // contentBase: path.join(__dirname, 'dist'),
    open: false,
    compress: true,
    hot: true,
    port: 3002,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: '.env',
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
});
