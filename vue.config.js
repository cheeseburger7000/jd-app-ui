module.exports = {
    configureWebpack: {
        devServer: {
            port: 8089,
            open: true,
            // Mock data
            before(app) {

            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
