import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Reminder from '@igloo-ui/icons/dist/Reminder';
import Button from '@igloo-ui/button';
import Tag from '@igloo-ui/tag';

import readme from '../README.md';

import List from './List';
import type { Option, Member, OptionType } from './List';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
} as Meta<typeof List>;

const textOnlyList: Option[] = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
  },
  {
    type: 'list',
    label: 'Item 2 (disabled)',
    value: '2',
    disabled: true,
  },
  {
    type: 'list',
    label: 'Item 3',
    value: '3',
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
    label: 'Item 7',
    value: '7',
  },
];

const textAndHelperTextList: Option[] = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
    description: 'A longer description to see how it works',
  },
  {
    type: 'list',
    label: 'Item 2 (disabled)',
    value: '2',
    disabled: true,
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 3',
    value: '3',
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 4 (selected)',
    value: '4',
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 5',
    value: '5',
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 6',
    value: '6',
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 7',
    value: '7',
    description: 'Description',
  },
];

const textIconList: Option[] = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
    icon: <Reminder size="medium" />,
  },
  {
    type: 'list',
    label: 'Item 2 (disabled)',
    value: '2',
    disabled: true,
    icon: <Reminder size="medium" />,
  },
  {
    type: 'list',
    label: 'Item 3',
    value: '3',
    icon: <Reminder size="medium" />,
  },
  {
    type: 'list',
    label: 'Item 4 (selected)',
    value: '4',
    icon: <Reminder size="medium" />,
  },
  {
    type: 'list',
    label: 'Item 5',
    value: '5',
    icon: <Reminder size="medium" />,
  },
  {
    type: 'list',
    label: 'Item 6',
    value: '6',
    icon: <Reminder size="medium" />,
  },
  {
    type: 'list',
    label: 'Item 7',
    value: '7',
    icon: <Reminder size="medium" />,
  },
];

const textIconHelperTextList: Option[] = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
    description: 'just adding some description',
    icon: <Reminder size="medium" />,
  },
  {
    type: 'list',
    label: 'Item 2 (disabled)',
    value: '2',
    disabled: true,
    icon: <Reminder size="medium" />,
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 3',
    value: '3',
    description: 'Description',
    icon: <Reminder size="medium" />,
  },
  {
    type: 'list',
    label: 'Item 4 (selected)',
    value: '4',
    icon: <Reminder size="medium" />,
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 5',
    value: '5',
    icon: <Reminder size="medium" />,
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 6',
    value: '6',
    icon: <Reminder size="medium" />,
    description: 'Description',
  },
  {
    type: 'list',
    label: 'Item 7',
    value: '7',
    icon: <Reminder size="medium" />,
    description: 'Description',
  },
];

const listWithAction: OptionType[] = [
  {
    type: 'list',
    label: 'Quarterly Performance Discussion',
    value: '1',
    description: <Tag size="xsmall">Self review</Tag>,
    action: <Button appearance={'ghost'} size="small">Preview</Button>,
  },
  {
    type: 'list',
    label: 'Clarifying Role and Expectations',
    value: '2',
    action: <Button appearance={'ghost'} size="small">Preview</Button>,
  },
  {
    type: 'list',
    label: 'Discussing progress on individual goals',
    value: '3',
    action: <Button appearance={'ghost'} size="small">Preview</Button>,
    description: 'Description',
  }
];

const membersList: Member[] = [
  {
    type: 'member',
    member: 'Member name',
    role: 'Member role',
    value: '1',
    src: 'https://i.pravatar.cc/100',
  },
  {
    type: 'member',
    member: 'Member name',
    value: '2',
    role: 'Member role',
    manager: true,
    src: 'https://i.pravatar.cc/100',
  },
  {
    type: 'member',
    member: 'Member name',
    role: 'Member role',
    value: '3',
    src: 'https://i.pravatar.cc/100',
  },
  {
    type: 'member',
    member: 'Member name',
    role: 'Member role',
    value: '4',
    src: 'https://i.pravatar.cc/100',
  },
  {
    type: 'member',
    member: 'Member name',
    role: 'Member role',
    value: '5',
    src: 'https://i.pravatar.cc/100',
  },
  {
    type: 'member',
    member: 'Member name',
    role: 'Member role',
    value: '6',
    src: 'https://i.pravatar.cc/100',
  },
  {
    type: 'member',
    member: 'Member name',
    role: 'Member role',
    value: 'icon',
    src: 'https://i.pravatar.cc/100',
  },
];

const Template: StoryFn<typeof List> = (args) => {
  const [selectedOption, setSelectedOption] = React.useState<OptionType | null>(
    textOnlyList[3]
  );
  const [focusedOption, setFocusedOption] = React.useState<OptionType | null>();

  function handleOptionSelect(option: OptionType) {
    setSelectedOption(option);
  }

  function handleOptionFocus(option: OptionType) {
    setFocusedOption(option);
  }

  return (
    <List
      {...args}
      onOptionChange={handleOptionSelect}
      onOptionFocus={handleOptionFocus}
      onOptionBlur={() => setFocusedOption(undefined)}
      selectedOption={selectedOption}
      focusedOption={focusedOption}
      style={{ maxWidth: '40rem' }}
    />
  );
};

export const Overview = {
  render: Template,

  args: {
    options: textOnlyList,
  },
};

export const Members = {
  render: Template,

  args: {
    options: membersList,
  },
};

export const NotCompact = {
  render: Template,

  args: {
    options: textIconHelperTextList,
    isCompact: false,
  },
};

export const Multiselect = () => {
  const [focusedOption, setFocusedOption] = React.useState<OptionType | null>();
  const [selectedResults, setSelectedResults] = React.useState<OptionType[]>([
    textAndHelperTextList[3],
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
      options={textAndHelperTextList}
      multiple
      onOptionChange={handleOptionChange}
      onOptionFocus={handleOptionFocus}
      onOptionBlur={() => setFocusedOption(undefined)}
      focusedOption={focusedOption}
      selectedOption={selectedResults}
      style={{ maxWidth: '40rem' }}
    />
  );
};

export const TextAndIcon = () => {
  return <List options={textIconList} style={{ maxWidth: '40rem' }} />;
};

export const TextIconAndHelperText = () => {
  return (
    <List options={textIconHelperTextList} style={{ maxWidth: '40rem' }} />
  );
};

export const Action = () => {
  const [selectedOption, setSelectedOption] = React.useState<OptionType | null>();
  const [focusedOption, setFocusedOption] = React.useState<OptionType | null>();

  function handleOptionSelect(option: OptionType) {
    setSelectedOption(option);
  }

  function handleOptionFocus(option: OptionType) {
    setFocusedOption(option);
  }

  return (
    <List options={listWithAction} 
    onOptionChange={handleOptionSelect}
    onOptionFocus={handleOptionFocus}
    onOptionBlur={() => setFocusedOption(undefined)}
    selectedOption={selectedOption}
    focusedOption={focusedOption}
    style={{ maxWidth: '40rem' }} />
  );
};

export const Loading = () => {
  return (
    <List loading style={{ maxWidth: '40rem' }} />
  );
};
