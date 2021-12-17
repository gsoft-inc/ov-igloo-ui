const withTM = require('next-transpile-modules')([
  '@igloo-ui/icons',
  '@igloo-ui/tokens',
  '@igloo-ui/button',
]);
const path = require('path');

module.exports = withTM({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
