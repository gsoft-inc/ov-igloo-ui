import path from 'path';
import fs from 'fs';

export async function generateComponentList(packagesDirectory) {
  const packages = fs.readdirSync(packagesDirectory);

  return packages
    .map((el) => {
      const packageFile = path.join(packagesDirectory, el, 'package.json');
      const isValidPackage = fs.existsSync(packageFile);

      if (!isValidPackage) {
        return null;
      }

      return el;
    })
    .filter((name) => name !== null);
}
