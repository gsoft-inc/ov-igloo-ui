import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: 'Dummy starter component',
};

// export const Appearances = () => (
//   <Section>
//     ...
//   </Section>
// );
