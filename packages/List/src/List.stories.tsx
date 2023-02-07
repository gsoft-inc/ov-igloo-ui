import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Happiness from '@igloo-ui/icons/dist/Happiness';

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
    disabled: true,
  },
  {
    type: 'list',
    label: 'Item 3 (focused)',
    value: '3',
    icon: <Happiness size="small" />,
    description: 'just adding some description',
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
    color: '#74DCC9',
  },
  {
    type: 'list',
    label: 'Item 6',
    value: '6',
  },
  {
    type: 'list',
    label: 'Item 7',
    value: '7',
  },
];

const premiumOptionlist: Option[] = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
    description: 'just adding some description',
  },
  {
    type: 'list',
    label: 'Item 2',
    value: '2',
  },
  {
    type: 'list',
    label: 'Item 3 (Premium)',
    value: '3',
    icon: <Happiness size="small" />,
    premium: true,
  },
  {
    type: 'list',
    label: 'Item 4',
    value: '4',
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
    member: 'Item 2',
    value: '2',
    role: 'just adding some description',
    src: 'https://i.pravatar.cc/100',
    manager: true,
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
    src: 'https://i.pravatar.cc/100',
  },
];

const Template: ComponentStory<typeof List> = (args) => {
  const [selectedOption, setSeletedOption] = React.useState<OptionType | null>(
    largeOptionList[3]
  );
  const [focusedOption, setFocusedOption] = React.useState<OptionType | null>(
    largeOptionList[2]
  );

  function handleOptionSelect(option: OptionType) {
    setSeletedOption(option);
  }

  function handleOptionFocus(option: OptionType) {
    setFocusedOption(option);
  }

  return (
    <List
      {...args}
      onOptionChange={handleOptionSelect}
      onOptionFocus={handleOptionFocus}
      selectedOption={selectedOption}
      focusedOption={focusedOption}
      style={{ maxWidth: '40rem' }}
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

export const NotCompact = Template.bind({});

NotCompact.args = {
  options: largeOptionList,
  isCompact: false,
};

export const Multiselect = () => {
  const [focusedOption, setFocusedOption] = React.useState<OptionType | null>(
    largeOptionList[2]
  );
  const [selectedResults, setSelectedResults] = React.useState<OptionType[]>([
    largeOptionList[3],
  ]);

  function handleOptionChange(option: OptionType) {
    const selectedItem = selectedResults.filter((o) => {
      return o.value === option.value;
    });
    const isChecked = !!selectedItem && selectedItem.length > 0;
    if (isChecked) {
      const filteredResults = selectedResults.filter(
        (s) => s.value !== option.value
      );
      setSelectedResults([...filteredResults]);
    } else {
      setSelectedResults([...selectedResults, option]);
    }
  }

  function handleOptionFocus(option: OptionType) {
    setFocusedOption(option);
  }

  return (
    <List
      options={largeOptionList}
      multiple
      onOptionChange={handleOptionChange}
      onOptionFocus={handleOptionFocus}
      focusedOption={focusedOption}
      selectedOption={selectedResults}
      style={{ maxWidth: '40rem' }}
    />
  );
};

export const Premium = () => {
  return <List options={premiumOptionlist} style={{ maxWidth: '40rem' }} />;
};
