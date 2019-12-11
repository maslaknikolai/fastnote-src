module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "~@/sass/common";
        `
      }
    }
  },

  publicPath: '',

  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    },
    themeColor: '#67368C'
  }
}
