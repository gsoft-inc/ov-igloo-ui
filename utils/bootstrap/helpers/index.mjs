import { $, chalk, fs, which } from 'zx';

export function exitWthError(msg) {
  console.error(chalk.red(msg));
  process.exit(1);
}

// Check dependencies: git, node, npx
export async function checkRequiredProgramsExist(programs) {
  try {
    for (const program of programs) {
      await which(program);
    }
  } catch (error) {
    exitWthError(`Error: Require command ${error.message}`);
  }
}

export async function getGlobalGitSettingValue(settingName) {
  $.verbose = false;

  let settingValue = '';
  try {
    settingValue = (
      await $`git config --global --get ${settingName}`
    ).stdout.trim();
  } catch (error) {
    // Ignore
  }

  $.verbose = true;
  return settingValue;
}

// Check global Git settings
export async function checkGlobalGitSettings(settingsToCheck) {
  for (const settingName of settingsToCheck) {
    const settingValue = await getGlobalGitSettingValue(settingName);
    if (!settingValue) {
      console.warn(
        chalk.yellow(`Warning: Global git setting '${settingName}' is not set.`)
      );
    }
  }
}

export async function copyTemplate(directory) {
  return await fs.copy('utils/bootstrap/template', directory);
}

export async function readPackageJson(directory) {
  const packageJsonFilePath = `packages/${directory}/package.json`;

  return await fs.readJSON(packageJsonFilePath);
}

export async function writePackageJson(directory, contents) {
  const packageJsonFilePath = `packages/${directory}/package.json`;

  return await fs.writeJSON(packageJsonFilePath, contents, { spaces: 2 });
}
