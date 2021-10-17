module.exports = {
  // 修改webpack
  configureWebpack: {
    resolve: {
      // 别名配置
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    },
    devServer: {
      disableHostCheck: true
    }
  },
  outputDir: "docs",
  publicPath: "/vue_mall/",
  outputDir: "docs",
  assetsDir: "vue_mall"
};
