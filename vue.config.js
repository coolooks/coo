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
