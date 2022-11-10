import * as pkg from './package.json';
import { createRollupConfig } from '../../rollup.config.js';

const { name } = pkg;

export default [createRollupConfig(name)];
