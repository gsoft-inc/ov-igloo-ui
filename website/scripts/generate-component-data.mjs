import path from 'path';
import fs from 'fs';
import { generateComponentList } from './generate-component-list.mjs';
import { getComponentAPI } from '../../utils/generate-api.mjs';

const PACKAGES = path.join(process.cwd(), '..', 'packages');
const COMPONENT_DATA = path.join(process.cwd(), 'data', 'components')

async function writeFile(filename, data) {
  await fs.writeFile(`${COMPONENT_DATA}/${filename}.json`, JSON.stringify(data), function (err) {
    if(err) {
      console.error(err)
      throw err;
    }
    console.log(`${filename} api is created!`)
  })
}


export async function generateComponentData() {
  console.log('Start api generation for components');
  const components = await generateComponentList(PACKAGES)

  components.map( async component => {
    const props = await getComponentAPI(path.join(process.cwd(), '..', 'packages', `${component}`, 'src'));
    await writeFile(component, props)
  })
}

generateComponentData().then().catch(err => console.error(err));
