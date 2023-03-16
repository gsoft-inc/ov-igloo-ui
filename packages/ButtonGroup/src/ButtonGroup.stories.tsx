import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import useState from 'storybook-addon-state';

import UnorderedList from '@igloo-ui/icons/dist/UnorderedList';
import Tree from '@igloo-ui/icons/dist/Tree';

import Section from '@components/section';
import readme from '../README.md';

import ButtonGroup, { ButtonItem } from './ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  subcomponents: { ButtonItem },
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<any> = (args) => {
  const { items } = args;

  return (
    <ButtonGroup {...args}>
      {items.map((item: any, key: number) => (
        <ButtonItem {...item} key={`item_${key}`}>
          {item.children}
        </ButtonItem>
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

export const WithIcons = () => (
  <Section>
    <ButtonGroup compact>
      <ButtonItem icon={<UnorderedList />} />
      <ButtonItem icon={<Tree />} />
    </ButtonGroup>

    <ButtonGroup compact small>
      <ButtonItem icon={<UnorderedList />} />
      <ButtonItem icon={<Tree />} />
    </ButtonGroup>

    <ButtonGroup>
      <ButtonItem icon={<UnorderedList />} />
      <ButtonItem icon={<Tree />} />
    </ButtonGroup>

    <ButtonGroup small>
      <ButtonItem icon={<UnorderedList />} />
      <ButtonItem icon={<Tree />} />
    </ButtonGroup>
  </Section>
);

export const WithIconsAndText = () => (
  <Section>
    <ButtonGroup>
      <ButtonItem active icon={<UnorderedList size="small" />}>
        List
      </ButtonItem>
      <ButtonItem icon={<Tree size="small" />}>Tree</ButtonItem>
    </ButtonGroup>

    <ButtonGroup small>
      <ButtonItem icon={<UnorderedList size="small" />}>List</ButtonItem>
      <ButtonItem icon={<Tree size="small" />}>Tree</ButtonItem>
    </ButtonGroup>
  </Section>
);
