import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Happiness from '@igloo-ui/icons/dist/Happiness';

import Section from '@components/section';
import readme from '../README.md';

import MySelect from './MySelect';

export default {
  title: 'Components/MySelect',
  component: MySelect,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof MySelect>;

const Template: ComponentStory<typeof MySelect> = (args) => (
  <MySelect {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  children: 'Select place holder text',
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
