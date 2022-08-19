import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Happiness from '@igloo-ui/icons/dist/Happiness';

import Section from '@components/section';
import readme from '../../Select/README.md';

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
  children: 'Select place holder text',
  isOpen: true,
  options: [
    {
      label: 'Text option',
      value: 'text',
    },
    {
      label: 'Disabled option',
      value: 'disabled',
      disabled: true,
    },
    {
      label: 'Text option with icon',
      value: 'icon',
      icon: <Happiness size="small" />,
    },
  ],
};

// export const Appearances = () => (
//   <Section>
//     ...
//   </Section>
// );
