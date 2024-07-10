const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = {
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  images: {
    domains: ['accentune.vercel.app'],
  },
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
          }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/js/telegram-web-app.js',
        destination: 'https://telegram.org/js/telegram-web-app.js',
      },
    ];
  },
};
