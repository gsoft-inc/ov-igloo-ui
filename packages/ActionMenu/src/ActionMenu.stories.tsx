import React from 'react';
import isChromatic from 'chromatic/isChromatic';

import IconButton from '@igloo-ui/icon-button';
import Button from '@igloo-ui/button';
import { OptionType } from '@igloo-ui/list';
import Kebab from '@igloo-ui/icons/dist/Kebab';
import AddSolid from '@igloo-ui/icons/dist/AddSolid';
import Delete from '@igloo-ui/icons/dist/Delete';
import Copy from '@igloo-ui/icons/dist/Copy';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ChromaticWrapper from '@components/chromaticWrapper';
import Section from '@components/section';
import readme from '../README.md';

import ActionMenu, { ActionMenuOption } from './ActionMenu';

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

const kebab = (props: any) => {
  return (
    <IconButton
      icon={<Kebab size="medium" />}
      appearance={{ type: 'ghost', variant: 'secondary' }}
      size="medium"
      {...props}
    />
  );
};

const Template: ComponentStory<typeof ActionMenu> = (args) => (
  <ChromaticWrapper>
    <ActionMenu
      {...args}
      style={{ display: 'flex', justifyContent: 'center' }}
    />
  </ChromaticWrapper>
);
export const Overview = Template.bind({});
Overview.args = {
  options: actionMenuList,
  renderReference: kebab,
  isOpen: isChromatic(),
  position: 'bottom-end',
};

export const Positioning = () => {
  return (
    <ChromaticWrapper>
      <Section style={{ gap: '2rem' }}>
        <ActionMenu
          options={actionMenuList2}
          position="bottom-end"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Bottom End
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="top"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Top
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="bottom-start"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Bottom Start
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="top-end"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Top End
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="bottom"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Bottom
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="top-start"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Top Start
              </Button>
            );
          }}
        />
      </Section>
    </ChromaticWrapper>
  );
};

export const Events = () => {
  return (
    <ChromaticWrapper>
      <p style={{ fontSize: '1.4rem' }}>
        The menu close event will not be called when clicking{' '}
        <strong>delete</strong>.
      </p>
      <ActionMenu
        renderReference={kebab}
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
          return option.value !== 'delete';
        }}
      />
    </ChromaticWrapper>
  );
};
