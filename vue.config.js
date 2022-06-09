const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))

    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        elementUI: {
          name: 'chunk-elementUI', // 单独将 elementUI 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /element-ui/
        },
        lottie: {
          name: 'chunk-lottie',
          priority: 20,
          test: /lottie-web/,
        },
        highlight: {
          name: 'chunk-highlight',
          priority: 20,
          test: /highlight.js/,
        },
        marked: {
          name: 'chunk-marked',
          priority: 20,
          test: /marked/,
        }
      }
    })
  },

  configureWebpack: {
    module: {
      rules: [
        // 配置读取 *.md 文件的规则
        {
          test: /\.md$/,
          use: [
            { loader: "html-loader" },
            { loader: "markdown-loader", options: {} }
          ]
        }
      ]
    },

    // 
    cache: {
      type: 'filesystem',
      cacheDirectory: resolve('.cache'),
    },
  },

  devServer: {
    port: 8088,
    compress: true,
    // hot: true,
    proxy: {
      '/api': {
        target: 'http://market.develop.aiyichuan.com/api/admin/provider',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  css: {
    extract: process.env.NODE_ENV !== 'development',
    sourceMap: false,
    loaderOptions: {
        sass: {
          additionalData: '@import "@/assets/variables.scss";'
        }
    }
  },

  productionSourceMap: false,
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : 'https://coolooks.github.io/coo/',
  outputDir: 'dist'
})
