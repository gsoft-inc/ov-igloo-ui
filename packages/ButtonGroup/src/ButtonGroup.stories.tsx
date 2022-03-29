import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import UnorderedList from '@igloo-ui/icons/dist/UnorderedList';
import Tree from '@igloo-ui/icons/dist/Tree';

import Section from '@components/section';
import readme from '../README.md';

import ButtonGroup from './ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    description: readme,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          paddingTop: 40,
          paddingBottom: 40,
          paddingRight: 50,
          paddingLeft: 60,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  items: ['Item 1', 'Item 2'],
};

export const Appearances = () => (
  <Section>
    <ButtonGroup
      items={['Item 1', 'Item 2', 'Item 2', 'Item 4']}
      onClick={(event) => console.log('selected item', event.currentTarget.id)}
    />
  </Section>
);

export const Small = () => (
  <Section>
    <ButtonGroup
      small
      items={['Item 1', 'Item 2']}
      onClick={(event) => console.log('selected item', event.currentTarget.id)}
    />
  </Section>
);

export const WhitIcons = () => (
  <Section>
    <ButtonGroup
      items={[<UnorderedList />, <Tree />]}
      onClick={(event) => console.log('selected item', event.currentTarget.id)}
    />
  </Section>
);
