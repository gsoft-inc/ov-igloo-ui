const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const docgen = require('react-docgen-typescript');
const glob = require('glob');

const options = {
  propFilter: (prop) => {
    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.find(
        (declaration) => {
          return !declaration.fileName.includes('node_modules');
        }
      );

      return Boolean(hasPropAdditionalDescription);
    }

    return true;
  },
};
const directoryPath = path.join(process.cwd(), 'packages/**/src/*.tsx');

const formatFilePath = (filePath) => {
  if (!filePath) {
    throw new Error('File path is not defined');
  }

  return filePath.match(/packages.*/);
};

const getComponent = async () => {
  const filesPath = glob.sync(directoryPath).filter((module) => {
    return /\/[A-Z]\w*\.tsx$/.test(module);
  });

  return filesPath.map((file) => {
    const name = path.basename(file).replace('.tsx', '');
    const [filePath] = formatFilePath(file);
    return {
      name,
      filePath,
    };
  });
};

const getType = (type) => {
  const handler = {
    enum: (type) =>
      type.value.map((item) => item.value.replace(/'/g, '')).join(' \\| '),
    union: (type) => type.value.map((item) => item.name).join(' \\| '),
  };
  if (typeof handler[type.name] === 'function') {
    return handler[type.name](type).replace(/\|/g, '');
  }
  return type.name.replace(/\|/g, '');
};

const renderProp = (name, prop) => {
  const {
    type = { name: '-' },
    defaultValue = { value: '-' },
    required,
    description,
  } = prop;

  return `| ${name} | ${getType(type)} | ${
    defaultValue !== null && defaultValue.replace(/\|/g, '<span>|</span>')
  } | ${required ? '✓' : '✗'} |  ${description || '-'} |
  `;
};

const writeFile = (data, output) => {
  fs.writeFile(output, data, (err) => {
    if (err) {
      throw err;
    }
  });

  const file = path.basename(output);
  console.log(`${file} has been saved!`);
};

const commentToMarkdown = (comments) => {
  if (comments.length === 0) {
    return;
  }

  return comments.map((comment) => {
    const { props, displayName } = comment;

    const content = `---\ntitle: ${displayName}\n---\n\n
|Attribute | type | default value | required | description|
| --- | --- | --- | --- | ---|
      ${Object.keys(props)
        .map((key) => renderProp(key, props[key]))
        .join('')}
      `;

    const formattedContent = prettier.format(content, { parser: 'markdown' });

    return { name: displayName, content: formattedContent };
  });
};

const generateDoc = async () => {
  const components = await getComponent();
  const componentsName = components.map((component) => component.name);
  const componentsPath = components.map((component) => component.filePath);

  const componentsInfo = docgen.parse(componentsPath, options);
  const mdxContent = commentToMarkdown(componentsInfo);

  const BASE_PATH = 'website/data/';

  mdxContent.map((mdx) => {
    const { name, content } = mdx;
    const output = path.join(process.cwd(), BASE_PATH, `files/${name}.mdx`);
    writeFile(content, output);
  });

  const content = JSON.stringify(componentsName);
  const output = path.join(process.cwd(), BASE_PATH, `components.json`);
  writeFile(content, output);
};

generateDoc().catch((error) => console.log('error', error));
