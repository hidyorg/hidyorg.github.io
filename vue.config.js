/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

/** @type {Options} */
const config = {
  devServer: {
    overlay: false
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/assets/styles/fonts.scss";
        @import "@/assets/styles/init.scss";
        @import "@/assets/styles/common.scss";
        `
      }
    }
  },
  publicPath: "/doyoung0205.github.io/",
  outputDir: "docs"
};

module.exports = config;
