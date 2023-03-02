import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import AddSolid from '@igloo-ui/icons/dist/AddSolid';
import Delete from '@igloo-ui/icons/dist/Delete';
import Copy from '@igloo-ui/icons/dist/Copy';

import ActionMenu, { ActionMenuOption } from './ActionMenu';
import { OptionType } from '../../List/dist/List';

const actionMenuList: ActionMenuOption[] = [
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

const actionMenuList2: ActionMenuOption[] = [
  {
    label: 'Add Item',
    value: 'add',
    icon: <AddSolid size="medium" />,
  },
  {
    label: 'Delete Item',
    value: 'delete',
    icon: <Delete size="medium" />,
  },
  {
    label: 'Copy Item',
    value: 'copy',
    icon: <Copy size="medium" />,
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
  options: actionMenuList,
};

export const Positioning = () => {
  return (
    <Section style={{ gap: '4rem' }}>
      <div>
        <ActionMenu options={actionMenuList2} position="bottom" />
      </div>

      <div>
        <ActionMenu options={actionMenuList2} position="bottom-start" />
      </div>

      <div>
        <ActionMenu options={actionMenuList2} position="bottom-end" />
      </div>

      <div>
        <ActionMenu options={actionMenuList2} position="top" />
      </div>

      <div>
        <ActionMenu options={actionMenuList2} position="top-start" />
      </div>

      <div>
        <ActionMenu options={actionMenuList2} position="top-end" />
      </div>
    </Section>
  );
};

export const Events = () => {
  return (
    <>
      <p style={{ fontSize: '1.4rem' }}>
        The menu close event will not be called when clicking{' '}
        <strong>delete</strong>.
      </p>
      <ActionMenu
        options={actionMenuList2}
        style={{ display: 'flex', justifyContent: 'center' }}
        onOptionSelect={(option: OptionType) => {
          alert(`The "${option.value}" item was selected.`);
        }}
        onMenuOpen={() => {
          alert('The action menu was opened');
        }}
        onMenuClose={() => {
          alert('The action menu was closed');
        }}
        closeOnSelect={(option: OptionType) => {
          if (option.value === 'delete') {
            return false;
          }
          return true;
        }}
      />
    </>
  );
};
