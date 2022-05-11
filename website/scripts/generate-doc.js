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

const getComponentContent = async (readmePath) => {
  if (!readmePath) {
    return null;
  }

  const readme = fs.readFileSync(readmePath);

  const { content } = matter(readme);

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
