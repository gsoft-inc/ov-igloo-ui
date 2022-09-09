import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import useState from 'storybook-addon-state';

import UnorderedList from '@igloo-ui/icons/dist/UnorderedList';
import Tree from '@igloo-ui/icons/dist/Tree';

import Section from '@components/section';
import readme from '../README.md';

import ButtonGroup, { ButtonItem } from './ButtonGroup';
import { ButtonGroupItem } from './ButtonGroupItem.stories';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  subcomponents: { ButtonItem },
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
      <ButtonGroup compact small={false}>
        <ButtonItem
          active={selected === '1'}
          disabled={false}
          onClick={() => setSelected('1')}
        >
          Label 1
        </ButtonItem>
        <ButtonItem
          active={selected === '2'}
          disabled={false}
          onClick={() => setSelected('2')}
        >
          Label 2
        </ButtonItem>
        <ButtonItem
          active={selected === '3'}
          disabled={false}
          onClick={() => setSelected('3')}
        >
          Label 3
        </ButtonItem>
      </ButtonGroup>
    </Section>
  );
};

export const Small = () => (
  <Section>
    <ButtonGroup small>
      <ButtonItem>Label 1</ButtonItem>
      <ButtonItem>Label 2</ButtonItem>
    </ButtonGroup>
  </Section>
);

export const WhitIcons = () => (
  <Section>
    <ButtonGroup compact>
      <ButtonItem>
        <UnorderedList />
      </ButtonItem>
      <ButtonItem>
        <Tree />
      </ButtonItem>
    </ButtonGroup>

    <ButtonGroup compact small>
      <ButtonItem>
        <UnorderedList />
      </ButtonItem>
      <ButtonItem>
        <Tree />
      </ButtonItem>
    </ButtonGroup>

    <ButtonGroup>
      <ButtonItem>
        <UnorderedList />
      </ButtonItem>
      <ButtonItem>
        <Tree />
      </ButtonItem>
    </ButtonGroup>

    <ButtonGroup small>
      <ButtonItem>
        <UnorderedList />
      </ButtonItem>
      <ButtonItem>
        <Tree />
      </ButtonItem>
    </ButtonGroup>
  </Section>
);

export const WhitIconsAndText = () => (
  <Section>
    <ButtonGroup>
      <ButtonItem active>
        <UnorderedList /> List
      </ButtonItem>
      <ButtonItem>
        <Tree /> Tree
      </ButtonItem>
    </ButtonGroup>

    <ButtonGroup small>
      <ButtonItem>
        <UnorderedList /> List
      </ButtonItem>
      <ButtonItem>
        <Tree /> Tree
      </ButtonItem>
    </ButtonGroup>
  </Section>
);
