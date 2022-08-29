import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Happiness from '@igloo-ui/icons/dist/Happiness';

import Section from '@components/section';
import readme from '../../Select/README.md';

import Select, { SelectOption } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Select>;

const selectPlaceholder = 'ex: Lorem ipsum dolor';

const largeDisplay = {
  height: 230,
};

const handleOnChange = (option: SelectOption): void => {
  alert(`Option: ${option.label}`);
};

const smallOptionList = [
  {
    label: 'Text option',
    value: 'text',
  },
  {
    label: 'Disabled option',
    value: 'disabled',
    disabled: true,
  },
  {
    label: 'Text option with icon',
    value: 'icon',
    icon: <Happiness size="small" />,
  },
];

const largeOptionList = [
  {
    label: 'Text 1',
    value: '1',
  },
  {
    label: 'Text 2 (disabled)',
    value: '2',
    disabled: true,
  },
  {
    label: 'Text 3',
    value: '3',
  },
  {
    label: 'Text 4',
    value: '4',
  },
  {
    label: 'Text 5',
    value: '5',
  },
  {
    label: 'Text 6',
    value: '6',
  },
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: selectPlaceholder,
  options: smallOptionList,
};

export const Sizes = () => (
  <Section column>
    <Select options={smallOptionList} onChange={handleOnChange}>
      Default
    </Select>
    <Select
      options={smallOptionList}
      onChange={handleOnChange}
      isCompact={true}
    >
      Compact
    </Select>
  </Section>
);

export const States = () => (
  <Section column>
    <Select options={smallOptionList} onChange={handleOnChange} disabled={true}>
      Disabled
    </Select>
    <Select
      options={smallOptionList}
      onChange={handleOnChange}
      className={'active'}
    >
      Active / Focus
    </Select>
    <Select options={smallOptionList} onChange={handleOnChange} error={true}>
      Error
    </Select>
  </Section>
);

export const LargeOptionNumber = () => (
  <Section style={largeDisplay}>
    <Select options={largeOptionList} onChange={handleOnChange}>
      Place holder text
    </Select>
  </Section>
);
