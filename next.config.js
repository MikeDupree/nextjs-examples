/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  swcMinify: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
