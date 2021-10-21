import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function handleName(name) {
  if (!name) return null;

  const scope = '@igloo-ui';
  const component = capitalize(name.replace(`${scope}/`, ''));
  const style = component.toLowerCase();

  return {
    component,
    style,
  };
}

function injectCssImport(file) {
  return {
    name: 'plugin-css-import',
    renderChunk: function (code) {
      return {
        code: `import './${file}'\n${code}`,
        map: { mappings: '' },
      };
    },
  };
}

export function createRollupConfig(distDir, name, format) {
  const { component, style } = handleName(name);

  return {
    input: path.resolve(__dirname, `./src/${component}.tsx`),
    output: {
      file: path.resolve(distDir, `${component}.js`),
      format,
      name: component,
      sourcemap: true,
    },
    external: ['react'],
    plugins: [
      postcss({
        extract: path.resolve(distDir, `${style}.css`),
        minimize: true,
      }),
      resolve(),
      commonjs({
        exclude: 'node_modules',
        ignoreGlobal: true,
      }),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          exclude: ['**/*.stories.*', '**/*.test.*'],
        },
        clean: true,
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
      }),
      injectCssImport(`${style}.css`),
      cleanup({
        comments: 'none',
        extensions: ['.ts'],
      }),
    ],
  };
}
