const { webpack } = require("webpack");

module.exports = (config) => {
    config.resolve.fallback = {
      // webpack5: true,
      // path: false,
      // fs: false,
      // os: false,
      // crypto: false,
      // process: false,
      // util: false,
      // assert: false,
      // stream: false,
      // zlib: false,
      // resolve: {
      //   extensions: [".ts"],
      //   fallback: {
      //     crypto: "crypto-browserify",
      //     http: "stream-http",
      //     https: "https-browserify",
      //     os: "os-browserify/browser",
      //     path: "path-browserify",
      //     stream: "stream-browserify",
      //     process: "process/browser",
      //     url: "url/",
      //     zlib: "browserify-zlib",
      //   }
      // },
    };
    return config;
  };