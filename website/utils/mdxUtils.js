import fs from 'fs';
import path from 'path';

export const DOCS_PATH = path.join(process.cwd(), 'docs/files');

export const docsFilePaths = fs
  .readdirSync(DOCS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
