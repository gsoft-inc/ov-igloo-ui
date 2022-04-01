import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import useState from 'storybook-addon-state';

import UnorderedList from '@igloo-ui/icons/dist/UnorderedList';
import Tree from '@igloo-ui/icons/dist/Tree';

import Section from '@components/section';
import readme from '../README.md';

import ButtonGroup, { Item } from './ButtonGroup';
import { ButtonGroupItem } from './ButtonGroupItem.stories';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  subcomponents: { Item },
  parameters: {
    description: readme,
  },
  argTypes: {
    small: { table: { defaultValue: { summary: false } } },
    compact: { table: { defaultValue: { summary: false } } },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<any> = (args) => {
  const { items } = args;

  return (
    <ButtonGroup {...args}>
      {items.map((item: any) => (
        <ButtonGroupItem {...item}>{item.children}</ButtonGroupItem>
      ))}
    </ButtonGroup>
  );
};
export const Overview = Template.bind({});
Overview.args = {
  items: [
    {
      children: 'Button 1',
      active: false,
      disabled: false,
    },
    {
      children: 'Button 2',
      active: false,
      disabled: false,
    },
    {
      children: 'Button 3',
      active: false,
      disabled: false,
    },
  ],
};

export const Compact = () => {
  const [selected, setSelected] = useState('default', '0');

  return (
    <Section>
      <ButtonGroup compact={false} small={false}>
        <Item
          active={selected === '1'}
          disabled={false}
          onClick={() => setSelected('1')}
        >
          Label 1
        </Item>
        <Item
          active={selected === '2'}
          disabled={false}
          onClick={() => setSelected('2')}
        >
          Label 2
        </Item>
        <Item
          active={selected === '3'}
          disabled={false}
          onClick={() => setSelected('3')}
        >
          Label 3
        </Item>
      </ButtonGroup>
    </Section>
  );
};

export const Small = () => (
  <Section>
    <ButtonGroup small>
      <Item>Label 1</Item>
      <Item>Label 2</Item>
    </ButtonGroup>
  </Section>
);

export const WhitIcons = () => (
  <Section>
    <ButtonGroup compact>
      <Item>
        <UnorderedList />
      </Item>
      <Item>
        <Tree />
      </Item>
    </ButtonGroup>

    <ButtonGroup compact small>
      <Item>
        <UnorderedList />
      </Item>
      <Item>
        <Tree />
      </Item>
    </ButtonGroup>

    <ButtonGroup>
      <Item>
        <UnorderedList />
      </Item>
      <Item>
        <Tree />
      </Item>
    </ButtonGroup>

    <ButtonGroup small>
      <Item>
        <UnorderedList />
      </Item>
      <Item>
        <Tree />
      </Item>
    </ButtonGroup>
  </Section>
);
