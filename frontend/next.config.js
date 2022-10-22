const withImages = require('next-images');

module.exports = withImages();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['dendels.s3.ap-southeast-2.amazonaws.com', 'www.shift4shop.com'],
  },
};
