import path from 'path';
import fs from 'fs';

export const checkFileExists = async (filePath) => {
  try {
    fs.accessSync(filePath, fs.constants.R_OK);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const formatedName = (name) => {
  return name.charAt(0).toLowerCase() + name.slice(1);
};

export const getCardImage = async (components) => {
  if (components.length <= 0) {
    return null;
  }

  return Promise.all(
    components.map(async (component) => {
      const FILE = `${formatedName(component)}.svg`;
      const EMPTY_FILE = 'empty.png';

      const FILE_PATH = path.join(process.cwd(), 'svg', 'components', FILE);
      const fileExist = await checkFileExists(FILE_PATH);

      let file;
      if (fileExist) {
        file = FILE;
      } else {
        file = EMPTY_FILE;
      }

      return {
        [component]: file,
      };
    })
  );
};
