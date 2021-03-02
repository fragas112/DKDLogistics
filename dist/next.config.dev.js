"use strict";

var path = require('path'); // const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
// const withOffline = require('next-offline');


var withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
});

var nextConfig = {
  target: 'serverless',
  // next-offline options
  workboxOpts: {
    runtimeCaching: [{
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'https-calls',
        networkTimeoutSeconds: 15,
        expiration: {
          maxEntries: 150,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month

        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }]
  } //   webpack: (config, { dev }) => {
  //     const base = dev ? require('./webpack/webpack.config.dev') : require('./webpack/webpack.config.prod');
  //     if (base.plugins) {
  //         config.plugins = config.plugins.concat(base.plugins);
  //     }
  //     return config;
  // },

};
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

var withImages = require('next-images');

module.exports = withImages();
var exposedConfigs = withImages({
  trailingSlash: true,
  cssModule: true,
  i18n: {
    locales: ['en-US', 'ru'],
    defaultLocale: 'en-US'
  }
});
var configuration = Object.assign(exposedConfigs);
module.exports = configuration; // module.exports = withOffline(withBundleAnalyzer(withSass(withCSS(nextConfig))));