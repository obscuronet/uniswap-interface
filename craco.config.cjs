/* eslint-disable @typescript-eslint/no-var-requires */
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  babel: {
    plugins: ['@vanilla-extract/babel-plugin'],
  },
  webpack: {
    plugins: [
        new VanillaExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env.TESTNET_NAME': JSON.stringify(process.env.TESTNET_NAME)
      })
    ],
    configure: (webpackConfig) => {
      const instanceOfMiniCssExtractPlugin = webpackConfig.plugins.find(
        (plugin) => plugin instanceof MiniCssExtractPlugin
      )
      if (instanceOfMiniCssExtractPlugin !== undefined) instanceOfMiniCssExtractPlugin.options.ignoreOrder = true
      return webpackConfig
    },
    alias: {
      '@uniswap/conedison': '@uniswap/conedison/dist',
    },
  },
}
