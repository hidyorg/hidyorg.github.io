/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

/** @type {Options} */
const config = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/hidyorg.github.io/" : "/",
  outputDir: "docs",
  devServer: {
    overlay: false
  }
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: `
  //       @import "@/assets/styles/fonts.scss";
  //       @import "@/assets/styles/init.scss";
  //       @import "@/assets/styles/common.scss";
  //       `
  //     }
  //   }
  // }
};

module.exports = config;
