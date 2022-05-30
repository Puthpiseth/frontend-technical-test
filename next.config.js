module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  env: {
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // web-loader reduces the size of images
  loaders: [
    {
      test: /\.(jpe?g|png)$/i,
      loaders: ['file-loader', 'webp-loader?{quality: 13}'],
    },
  ],
};
