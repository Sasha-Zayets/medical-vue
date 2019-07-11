module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/sass/styles.scss";`
      }
    }
  }
}