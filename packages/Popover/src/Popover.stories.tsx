import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Popover from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    description: readme,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontSize: '1.6rem',
          paddingTop: 40,
          paddingBottom: 40,
          paddingRight: 50,
          paddingLeft: 60,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  children: 'Dummy starter component',
};

// export const Appearances = () => (
//   <Section>
//     ...
//   </Section>
// );
