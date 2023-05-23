import { pascalcase } from 'pascalcase';

export const getComponentTemplate = (name) => {
  const pascalCaseName = pascalcase(name);

  return `import * as React from 'react';

import './${name}.scss';

export interface ${pascalCaseName}Props extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
}

const ${pascalCaseName}: React.FunctionComponent<${pascalCaseName}Props> = ({ children, dataTest }: ${pascalCaseName}Props) => {
  return <div className="ids-${name}" data-test={dataTest}>{children}</div>;
};

export default ${pascalCaseName};
`;
};

export const getTestTemplate = (name) => {
  const pascalCaseName = pascalcase(name);

  return `/**
  * @jest-environment jsdom
  */
 import React from 'react';
 import { render, screen } from '@testing-library/react';

 import ${pascalCaseName} from './${pascalCaseName}';

 const setup = (props = {}) => {
  return render(
    <${pascalCaseName} dataTest="ids-${name}" {...props}>Hello world</${pascalCaseName}>
  );
};

 describe('${pascalCaseName}', () => {
   test('It should render without errors', () => {
    setup();
     const wrapper = screen.getByTestId('ids-${name}');
     expect(wrapper).toBeInTheDocument();
   });

   test('It should render a snapshot', () => {
     const {asFragment} = setup();
     expect(asFragment()).toMatchSnapshot();
   });
 });
`;
};

export const getStoriesTemplate = (name) => {
  const pascalCaseName = pascalcase(name);

  return `import React from 'react';

  import { Meta, StoryObj } from '@storybook/react';

  import Section from '@components/section';
  import readme from '../README.md';

  import ${pascalCaseName} from './${pascalCaseName}';

  export default {
    title: 'Components/${pascalCaseName}',
    component: ${pascalCaseName},
    parameters: {
      docs: {
        description: {
          component: readme,
        }
      }
    }
  } as Meta<typeof ${pascalCaseName}>;
  
  type Story = StoryObj<typeof ${pascalCaseName}>;

  export const Overview: Story = {
    args: {
      children: 'Dummy starter component',
    },
  };

  // export const Appearances: Story = {
  //  render: () => {
  //    return (
  //      <Section>
  //         ...
  //      </Section>
  //    );
  //  };
`;
};

export const getReadmeTemplate = (name) => {
  const pascalCaseName = pascalcase(name);

  return `# ${pascalCaseName}

  TODO: Write your component description here.

  <ReferenceLinks is="custom" />

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

  // TODO: Add your component usage here
  \`\`\`
  `;
};

export const getCssTemplate = (name) => {
  return `@use '~@igloo-ui/tokens/dist/base10/variables' as tokens;
@use '~@igloo-ui/tokens/dist/fonts';

  :root {
    /* Default */
    --ids-${name}-font-family: #{tokens.$primary-font-family};
    --ids-${name}-font-size: #{tokens.$font-size-4};
  }

  .ids-${name} {
    font-family: var(--ids-${name}-font-family);
    font-size: var(--ids-${name}-font-size);
  }
  `;
};
