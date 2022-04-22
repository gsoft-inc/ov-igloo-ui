const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

const withTM = require('next-transpile-modules')([
  '@igloo-ui/icons',
  '@igloo-ui/tokens',
  '@igloo-ui/button',
  '@igloo-ui/input',
]);

const path = require('path');

module.exports = withTM(
  withMDX({
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  })
);
