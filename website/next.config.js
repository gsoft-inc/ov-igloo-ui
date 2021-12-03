const withTM = require('next-transpile-modules')(['@igloo-ui/icons']);
const path = require('path');

module.exports = withTM({
  reactStrictMode: true,
  target: 'serverless',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
