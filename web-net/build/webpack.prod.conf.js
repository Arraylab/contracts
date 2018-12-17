'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = require('../config/prod.env')
const entry = utils.getEntries('./src/pages/**/*.html') // 获得入口hmtl文件
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseUrl = JSON.stringify(config.build.base)
const PreloadWebpackPlugin = require('preload-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  // 添加webapck4默认的生产模式
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: false
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    publicPath: '/',
    //publicPath: '/',
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    // new CleanWebpackPlugin(['dist'], {
    //   root: path.resolve(__dirname, '..'),
    //   verbose: true, //开启在控制台输出信息
    //   dry: false,
    // }),
    new webpack.DefinePlugin({
      'process.env': env,
      'application.base': baseUrl
    }),
    // webpack4中内置了optimization.minimize
    // new UglifyJsPlugin({
    /*uglifyOptions: {
      compress: {
        warnings: false
      }
    },
    sourceMap: config.build.productionSourceMap,
    parallel: true
  }),*/
    // extract css into its own file
    // new ExtractTextPlugin({
    //   filename: utils.assetsPath('css/[name].[contenthash].css'),
    //   // Setting the following option to `false` will not extract CSS from codesplit chunks.
    //   // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
    //   // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
    //   // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
    //   allChunks: true,
    // }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].[contenthash].css'  // use contenthash *
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin

    // new HtmlWebpackPlugin({
    //   filename: config.build.index,
    //   template: 'index.html',
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   chunksSortMode: 'dependency'
    // }),

    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),

    // webpack4中废弃了CommonsChunkPlugin，采用optimization.splitChunks、optimization.runtimeChunk来代替
    // split vendor js into its own file
    /*new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }}),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),*/

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ],
  optimization: {
    // 采用splitChunks提取出entry chunk的chunk Group
    splitChunks: {
      cacheGroups: {
        // 处理入口chunk
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
        },
        // 处理异步chunk
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    },
    // 为每个入口提取出webpack runtime模块
    runtimeChunk: { name: 'manifest' }
  }
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (!config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

let PreloadWebpackPluginFileWhitelists = {
  'pages/task': [/\/0.[^.]+?/, /\/8.[^.]+?/],
  'pages/register': [/\/0.[^.]+?/, /\/5.[^.]+?/]
}

for (let pathname in entry) {
  let filename = pathname.replace(/views\//, '')
  console.log("======================")
  // console.log(filename)
  // console.log(entry[pathname])
  filename = filename.replace('pages/', '')
  let conf = {
    filename: filename === 'index'
      ? `${filename}.html`
      // : `${filename}/index.html`, // `${filename}/index.html`,
      : `${filename}.html`, // `${filename}/index.html`,
    template: entry[pathname],
    favicon: './favicon.ico',
    versionTime: new Date(),
    versionType: 'test',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }
  if (pathname in webpackConfig.entry) {
    conf.chunks = ['manifest', 'vendors', pathname]
    conf.hash = true
  }
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf))


}
// webpackConfig.plugins.push(
//   new PreloadWebpackPlugin({
//     rel: 'preload',
//     fileWhitelist: PreloadWebpackPluginFileWhitelists['pages/task'],
//     //include: ['pages/task'],
//     excludeHtmlNames: ['pages/register.html'],
//     as (entry) {
//       if (/\.css$/.test(entry)) return 'style'
//       if (/\.woff$/.test(entry)) return 'font'
//       if (/\.png$/.test(entry)) return 'image'
//       return 'script'
//     }
//   })
// )
//
// webpackConfig.plugins.push(
//   new PreloadWebpackPlugin({
//     rel: 'preload',
//     fileWhitelist: PreloadWebpackPluginFileWhitelists['pages/register'],
//     //include: ['pages/task'],
//     excludeHtmlNames: ['pages/task.html'],
//     as (entry) {
//       if (/\.css$/.test(entry)) return 'style'
//       if (/\.woff$/.test(entry)) return 'font'
//       if (/\.png$/.test(entry)) return 'image'
//       return 'script'
//     }
//   })
// )

module.exports = webpackConfig
