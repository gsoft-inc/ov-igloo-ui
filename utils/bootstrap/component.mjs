#! /usr/bin/env node

import { $, cd, chalk, fs, question } from 'zx';

import path from 'path';
import { pascalcase } from 'pascalcase';

import {
  readPackageJson,
  writePackageJson,
  checkRequiredProgramsExist,
  checkGlobalGitSettings,
  copyTemplate,
} from './helpers/index.mjs';

import {
  getComponentTemplate,
  getTestTemplate,
  getStoriesTemplate,
  getReadmeTemplate,
  getCssTemplate,
} from './helpers/template.mjs';

await checkRequiredProgramsExist(['git', 'node', 'npx']);

async function promptForName() {
  const name = await question(
    'What is the name of the package? (e.g. @igloo-ui/my-package) '
  );
  return name;
}

async function promptForAuthor() {
  const author = await question(
    'What is your name and email? (e.g. Name my.email@gsoft.com) '
  );
  return author;
}

async function getAuthor() {
  const author = await promptForAuthor();

  if (!author) {
    console.error(chalk.red(`Error: Please enter your name and email: `));

    return await getAuthor();
  }

  return author;
}

async function getPackageName() {
  const packageName = await promptForName();

  if (!packageName) {
    console.error(chalk.red(`Error: Please enter a package name: `));

    return await getPackageName();
  }

  const componentName = packageName.replace('@igloo-ui/', '');

  return { packageName, componentName };
}

async function idendifyExistingComponent(component) {
  const componentDirectory = path.resolve('packages/' + component);
  if (!(await fs.pathExists(componentDirectory))) {
    return false;
  }

  console.error(
    chalk.red('Error: You must specify a component that does not exist')
  );
  return true;
}

async function creatingComponentFolder(component) {
  const componentExisting = await idendifyExistingComponent(component);

  if (componentExisting) {
    const { componentName } = await getPackageName();
    return creatingComponent(componentName);
  }

  const componentDirectory = `packages/${pascalcase(component)}`;
  await copyTemplate(componentDirectory);

  return component;
}

async function createFiles(component) {
  $.verbose = false;
  const pascalCaseName = pascalcase(component);

  cd(`packages/${component}`);

  const readmeTemplate = getReadmeTemplate(component);
  const componentTemplate = getComponentTemplate(component);
  const testTemplate = getTestTemplate(component);
  const storiesTemplate = getStoriesTemplate(component);
  const cssTemplate = getCssTemplate(component);

  await fs.writeFile(`README.md`, readmeTemplate);
  await fs.writeFile(`src/${pascalCaseName}.tsx`, componentTemplate);
  await fs.writeFile(`src/${pascalCaseName}.test.tsx`, testTemplate);
  await fs.writeFile(`src/${pascalCaseName}.stories.tsx`, storiesTemplate);
  await fs.writeFile(`src/${component}.scss`, cssTemplate);

  cd(`../`);

  $.verbose = true;
}

async function updatePackageJson(component) {
  $.verbose = false;

  const pascalCaseName = pascalcase(component);
  const packageJson = await readPackageJson(component);
  packageJson.name = packageName;
  packageJson.version = '0.0.0';
  packageJson.main = `dist/${pascalCaseName}.js`;
  packageJson.module = `dist/${pascalCaseName}.js`;
  packageJson.types = `dist/${pascalCaseName}.d.ts`;
  packageJson.styles = `dist/${component}.js`;

  const author = await getAuthor();
  packageJson.contributors = [author];

  await writePackageJson(component, packageJson);

  $.verbose = true;
}

const { packageName, componentName } = await getPackageName();

const component = await creatingComponentFolder(componentName);
await updatePackageJson(component);
await createFiles(component);

// Successfully bootstrapped
console.log(
  chalk.green(
    `\n✔️ The component ${component} has been successfully bootstrapped!\n`
  )
);
