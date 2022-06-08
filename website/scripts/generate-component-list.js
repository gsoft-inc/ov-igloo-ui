import fs from 'fs';

const ignoreFiles = ['.DS_Store', 'Kashim'];

export function generateComponentList(source) {
  return fs.readdirSync(source).filter((name) => !ignoreFiles.includes(name));
}
