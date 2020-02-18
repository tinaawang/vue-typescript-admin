module.exports = {
  devServer: {
    open: false, // open设置为true的时候会在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
    // host: '0.0.0.0', // 前端项目的ip 设置为0.0.0.0既可以使用本地ip也可以使用localhost或者127.0.0.1访问
    port: 8080, // 前端启动的端口
    hot: true, // 开启后将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览
    overlay: false, // 错误是否在页面上显示
    proxy: {
      // 代理 解决跨域问题
      "/api": {
        target: "",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  },
  lintOnSave: false
};
