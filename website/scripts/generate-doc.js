import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const checkFileExists = async (filePath) => {
  try {
    fs.accessSync(filePath, fs.constants.R_OK);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getComponentContent = async (readmePath, apiPath) => {
  if (!readmePath && !apiPath) {
    return null;
  }

  let readme = '';
  let api = '';
  if (await checkFileExists(readmePath)) {
    readme = fs.readFileSync(readmePath);
  }

  if (await checkFileExists(apiPath)) {
    api = fs.readFileSync(apiPath);
  }

  // const { content } = matter(readme + api);
  const { content } = matter(readme);

  return { content, empty: api === '' && readme === '' };
};

export const generateDoc = async (component) => {
  const README_PATH = path.join(
    process.cwd(),
    '../packages',
    component,
    'README.md'
  );
  const DATA_PATH = path.join(process.cwd(), 'data/files/', `${component}.mdx`);

  return await getComponentContent(README_PATH, DATA_PATH);
};
