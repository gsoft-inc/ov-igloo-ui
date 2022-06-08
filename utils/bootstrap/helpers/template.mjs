import { pascalcase } from 'pascalcase';

export const getComponentTemplate = (name) => {
  const pascalCaseName = pascalcase(name);

  const componentContent = `import * as React from 'react';

import './${name}.scss';

export interface ${pascalCaseName}Props extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const ${pascalCaseName}: React.FunctionComponent<${pascalCaseName}Props> = (props: ${pascalCaseName}Props) => {
  const { children } = props;
  return <div className="ids-${name}">{children}</div>;
};

export default ${pascalCaseName};
`;

  return componentContent;
};

export const getTestTemplate = (name) => {
  const pascalCaseName = pascalcase(name);

  const testContent = `/**
  * @jest-environment jsdom
  */
 import React from 'react';
 import { shallow } from 'enzyme';

 import ${pascalCaseName} from './${pascalCaseName}';

 describe('${pascalCaseName}', () => {
   const component = shallow(<${pascalCaseName}>Hello world</${pascalCaseName}>);
   test('It should render without errors', () => {
     const wrapper = component.find('.ids-${name}');
     expect(wrapper.length).toBe(1);
   });

   test('It should render a snapshot', () => {
     expect(component).toMatchSnapshot();
   });
 });
`;

  return testContent;
};

export const getStoriesTemplate = (name) => {
  const pascalCaseName = pascalcase(name);

  const storiesContent = `import React from 'react';

  import { ComponentMeta, ComponentStory } from '@storybook/react';

  import Section from '@components/section';
  import readme from '../README.md';

  import ${pascalCaseName} from './${pascalCaseName}';

  export default {
    title: 'Components/${pascalCaseName}',
    component: ${pascalCaseName},
    parameters: {
      description: readme,
    },
  } as ComponentMeta<typeof ${pascalCaseName}>;

  const Template: ComponentStory<typeof ${pascalCaseName}> = (args) => <${pascalCaseName} {...args} />;
  export const Overview = Template.bind({});
  Overview.args = {
    children: 'Dummy starter component',
  };

  // export const Appearances = () => (
  //   <Section>
  //     ...
  //   </Section>
  // );
`;

  return storiesContent;
};

export const getReadmeTemplate = (name) => {
  const pascalCaseName = pascalcase(name);

  const readmeContent = `# ${pascalCaseName}

  TODO: Write your component description here.

  <ReferenceLinks />

  ## Installation

  To install \`@igloo-ui/${name}\` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

  \`\`\`bash
  npm install @igloo-ui/${name}
  \`\`\`

  If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

  \`\`\`bash
  yarn add @igloo-ui/${name}
  \`\`\`

  ## Usage

  Then to use the component in your code just import it!

  \`\`\`jsx
  import ${pascalCaseName} from '@igloo-ui/${name}';

  TODO: Add your component usage here
  \`\`\`
  `;

  return readmeContent;
};

export const getCssTemplate = (name) => {
  const cssContent = `@import '~@igloo-ui/tokens/dist/base10/variables';
  @import '~@igloo-ui/tokens/dist/fonts.css';

  :root {
    /* Default */
    --ids-${name}-font-family: #{$primary-font-family};
    --ids-${name}-font-size: #{$font-size-4};
  }

  .ids-${name} {
    font-family: var(--ids-${name}-font-family);
    font-size: var(--ids-${name}-font-size);
  }
  `;

  return cssContent;
};
