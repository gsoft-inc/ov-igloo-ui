import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Happiness from '@igloo-ui/icons/dist/Happiness';

import Section from '@components/section';
import readme from '../README.md';

import List, { Option, Member, OptionType } from './List';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof List>;

const largeOptionList: Option[] = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
    description: 'just adding some description',
  },
  {
    type: 'list',
    label: 'Item 2 (disabled)',
    value: '2',
  },
  {
    type: 'list',
    label: 'Item 3 (focused)',
    value: '3',
    icon: <Happiness size="small" />,
  },
  {
    type: 'list',
    label: 'Item 4 (selected)',
    value: '4',
  },
  {
    type: 'list',
    label: 'Item 5',
    value: '5',
  },
  {
    type: 'list',
    label: 'Item 6',
    value: '6',
  },
  {
    type: 'list',
    label: 'Item with icon',
    value: 'icon',
  },
];

const membersList: Member[] = [
  {
    type: 'member',
    member: 'List item with click and hover events',
    value: '1',
  },
  {
    type: 'member',
    member: 'Item 2 (disabled)',
    value: '2',
    role: 'just adding some description',
  },
  {
    type: 'member',
    member: 'Item 3 (focused)',
    value: '3',
  },
  {
    type: 'member',
    member: 'Item 4 (selected)',
    value: '4',
  },
  {
    type: 'member',
    member: 'Item 5',
    value: '5',
    color: '#74DCC9',
  },
  {
    type: 'member',
    member: 'Item 6',
    value: '6',
    src: 'https://i.pravatar.cc/100',
  },
  {
    type: 'member',
    member: 'Item with icon',
    value: 'icon',
  },
];

const Template: ComponentStory<typeof List> = (args) => {
  const [selectedOption, setSeletedOption] = React.useState<OptionType | null>(
    null
  );

  function handleOptionSelect(option: OptionType) {
    setSeletedOption(option);
  }

  return (
    <List
      {...args}
      onOptionSelect={handleOptionSelect}
      selectedOption={selectedOption}
    />
  );
};
export const Overview = Template.bind({});

Overview.args = {
  options: largeOptionList,
};

export const Members = Template.bind({});

Members.args = {
  options: membersList,
};

export const Compact = Template.bind({});

Compact.args = {
  options: membersList,
  isCompact: true,
};

// export const Appearances = () => (
//   <Section>
//     ...
//   </Section>
// );
