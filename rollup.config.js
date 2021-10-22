import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

const SCOPE = '@igloo-ui';
const DIST = './dist';
const FORMAT = 'es';

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function handleName(name) {
  if (!name) return null;

  const component = capitalize(name.replace(`${SCOPE}/`, ''));
  const style = component.toLowerCase();

  return {
    component,
    style,
  };
}

function injectCssImport(file) {
  return {
    name: 'plugin-css-import',
    renderChunk(code) {
      return {
        code: `import './${file}';\n${code}`,
        map: { mappings: '' },
      };
    },
  };
}

export function createRollupConfig(packageName) {
  const { component, style } = handleName(packageName);

  return {
    input: path.resolve(__dirname, `./src/${component}.tsx`),
    output: {
      file: path.resolve(DIST, `${component}.js`),
      format: FORMAT,
      name: component,
      sourcemap: true,
    },
    external: ['react'],
    plugins: [
      postcss({
        extract: path.resolve(DIST, `${style}.css`),
        minimize: true,
      }),
      resolve(),
      json(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          exclude: ['**/*.stories.*', '**/*.test.*'],
        },
        clean: true,
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
      }),
      commonjs({
        exclude: 'node_modules',
        ignoreGlobal: true,
      }),
      injectCssImport(`${style}.css`),
      cleanup({
        comments: 'none',
        extensions: ['.ts'],
      }),
    ],
  };
}
