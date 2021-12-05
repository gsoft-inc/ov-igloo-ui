const withTM = require('next-transpile-modules')(['@igloo-ui/icons']);
const path = require('path');

module.exports = withTM({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/components',
        destination: '/storybook',
        permanent: true,
      },
    ];
  },
});
