import fs from 'fs';

export function generateComponentList(source) {
  return fs.readdirSync(source).filter((name) => name !== '.DS_Store');
}
