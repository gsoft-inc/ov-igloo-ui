import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import ActionMenu, { ActionMenuOption } from './ActionMenu';

const textOnlyList: ActionMenuOption[] = [
  {
    label: 'Add Item',
    value: 'add',
  },
  {
    label: 'Delete Item',
    value: 'delete',
    disabled: true,
  },
  {
    label: 'Copy Item',
    value: 'copy',
  },
];

export default {
  title: 'Components/ActionMenu',
  component: ActionMenu,
  parameters: {
    description: readme,
  },
  argTypes: {
    closeOnSelect: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof ActionMenu>;

const Template: ComponentStory<typeof ActionMenu> = (args) => (
  <ActionMenu {...args} style={{ display: 'flex', justifyContent: 'center' }} />
);
export const Overview = Template.bind({});
Overview.args = {
  options: textOnlyList,
};

// export const Appearances = () => (
//   <Section>
//     ...
//   </Section>
// );
