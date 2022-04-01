import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Item } from './ButtonGroup';

export default {
  component: Item,
  argTypes: {
    active: { table: { defaultValue: { summary: false } } },
    disabled: { table: { defaultValue: { summary: false } } },
  },
} as ComponentMeta<typeof Item>;

export const ButtonGroupItem: ComponentStory<typeof Item> = (args) => (
  <Item {...args} />
);
