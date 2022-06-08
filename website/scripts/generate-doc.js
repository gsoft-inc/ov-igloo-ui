import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { checkFileExists } from './files-utils';

const getComponentContent = async (readmePath) => {
  if (!readmePath) {
    return null;
  }

  let readme = fs.readFileSync(readmePath, { encoding: 'utf-8' });

  const { content } = matter(readme.concat('## API'));

  return { content, empty: content === '' };
};

export const generateDoc = async (component) => {
  const README_PATH = path.join(
    process.cwd(),
    '../packages',
    component,
    'README.md'
  );

  const hasReadme = await checkFileExists(README_PATH);

  return hasReadme ? await getComponentContent(README_PATH) : null;
};
