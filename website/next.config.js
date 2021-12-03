const withTM = require('next-transpile-modules')(['@igloo-ui/icons']);
const path = require('path');

module.exports = withTM({
  distDir: 'out',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
