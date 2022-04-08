const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const docgen = require('react-docgen-typescript');

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

// Parse a file for docgen info
const componentInfo = docgen.parse('./packages/Button/src/Button.tsx', options);
// console.log(componentInfo);

function getType(type) {
  const handler = {
    enum: (type) =>
      type.value.map((item) => item.value.replace(/'/g, '')).join(' \\| '),
    union: (type) => type.value.map((item) => item.name).join(' \\| '),
  };
  if (typeof handler[type.name] === 'function') {
    return handler[type.name](type).replace(/\|/g, '');
  }
  return type.name.replace(/\|/g, '');
}

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

const commentToMarkdown = (comments) => {
  if (comments === undefined) {
    return '';
  }

  const markdownInfo = comments.map((comment) => {
    const { props } = comment;
    // console.log(props);

    return ` parameter props
    |Attribute | type | default value | required | description|
    | --- | --- | --- | --- | ---|
    ${Object.keys(props)
      .map((key) => renderProp(key, props[key]))
      .join('')}
    `;
  });

  const content = prettier.format(markdownInfo[0], { parser: 'markdown' });

  fs.writeFileSync(path.resolve('website/docs/button.mdx'), content);
  // console.log(content);
};

commentToMarkdown(componentInfo);

// const componentContent = JSON.stringify(result, null, 2);
// fs.writeFile('./docs.json', componentContent, 'utf8', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('The file has been saved!');
// });
