import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonItem } from './ButtonGroup';

export default {
  component: ButtonItem,
  argTypes: {
    active: { table: { defaultValue: { summary: false } } },
    disabled: { table: { defaultValue: { summary: false } } },
  },
} as ComponentMeta<typeof ButtonItem>;

export const ButtonGroupItem: ComponentStory<typeof ButtonItem> = (args) => (
  <ButtonItem {...args} />
);
