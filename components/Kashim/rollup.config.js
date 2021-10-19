import path from 'path';
import * as pkg from './package.json';
import { createRollupConfig } from '../../rollup.config';

const distDir = path.resolve(__dirname, './dist');
const { name } = pkg;

export default [createRollupConfig(distDir, name, 'es')];
