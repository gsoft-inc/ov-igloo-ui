import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Happiness from '@igloo-ui/icons/dist/Happiness';
import { Option, OptionType } from '@igloo-ui/list';

import Section from '@components/section';
import readme from '../../Select/README.md';

import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    description: readme,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '34rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Select>;

const selectPlaceholder = 'ex: Lorem ipsum dolor';

const handleOnChange = (option: OptionType | undefined): void => {
  const item = option as Option;
  alert(`Option: ${item?.label}`);
};

const smallOptionList: Option[] = [
  {
    type: 'list',
    label: 'Text option',
    value: 'text',
  },
  {
    type: 'list',
    label: 'Disabled option',
    value: 'disabled',
    disabled: true,
  },
  {
    type: 'list',
    label: 'Text option with icon',
    value: 'icon',
    icon: <Happiness size="small" />,
  },
];

const largeOptionList: Option[] = [
  {
    type: 'list',
    label: 'Text 1',
    value: '1',
  },
  {
    type: 'list',
    label: 'Text 2 (disabled)',
    value: '2',
    disabled: true,
  },
  {
    type: 'list',
    label: 'Text 3',
    value: '3',
    color: '#74DCC9',
  },
  {
    type: 'list',
    label: 'Text 4',
    value: '4',
  },
  {
    type: 'list',
    label: 'Text 5',
    value: '5',
    src: 'https://i.pravatar.cc/100',
  },
  {
    type: 'list',
    label: 'Text 6',
    value: '6',
    icon: <Happiness size="small" />,
  },
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: selectPlaceholder,
  options: smallOptionList,
};
Overview.play = async ({ canvasElement }) => {
  const body = canvasElement.ownerDocument.body;
  const canvas = within(body);

  await userEvent.click(canvas.getByRole('button'));
  const firstOption = await canvas.findByText('Text option');

  await expect(firstOption).toBeInTheDocument();
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
  <Section>
    <Select options={largeOptionList} onChange={handleOnChange}>
      Place holder text
    </Select>
  </Section>
);

export const AutoWidth = () => (
  <Section>
    <Select options={largeOptionList} onChange={handleOnChange} autoWidth>
      Place holder text
    </Select>
  </Section>
);

// Chromatic configuration
Sizes.bind({});
Sizes.parameters = {
  chromatic: { disableSnapshot: true },
};

LargeOptionNumber.bind({});
LargeOptionNumber.parameters = {
  chromatic: { disableSnapshot: true },
};

AutoWidth.bind({});
AutoWidth.parameters = {
  chromatic: { disableSnapshot: true },
};
