// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api':{
        target:'https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&uid=57f8bbcdda2f60004f8bdf79&device_id=1500256339979&token=eyJhY2Nlc3NfdG9rZW4iOiJBN1hsUllBZmpDc1hid0xOIiwicmVmcmVzaF90b2tlbiI6IkdMcWc1Y2pJZnJBWERWWXIiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&limit=20&category=5562b415e4b00c57d9b94ac8',
        changeOrigin: true,
        pathRewrite:{
          '^/api': ''
        }
      },
      '/list':{
        target:'http://www.jqsite.com/post/getNotes',
        changeOrigin: true,
        pathRewrite:{
          '^/list': ''
        }
      },
      '/ide':{
        target:'https://marketplace.visualstudio.com/getextensionspercategory?Product=vs&RemoveFirstSetCategories=false&_=1502157208344',
        changeOrigin: true,
        pathRewrite:{
          '^/ide': ''
        }
      },


    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
