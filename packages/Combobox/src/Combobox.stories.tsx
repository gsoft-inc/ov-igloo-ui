import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Happiness from '@igloo-ui/icons/dist/Happiness';
import { Option, OptionType } from '@igloo-ui/list';

import Section from '@components/section';
import readme from '../../Combobox/README.md';

import Combobox from './Combobox';

export default {
  title: 'Components/Combobox',
  component: Combobox,
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
} as ComponentMeta<typeof Combobox>;

const comboboxPlaceholder = 'ex: Lorem ipsum dolor';

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
  },
  {
    type: 'list',
    label: 'Text 6',
    value: '6',
  },
];

const Template: ComponentStory<typeof Combobox> = (args) => (
  <Combobox {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  children: comboboxPlaceholder,
  options: smallOptionList,
};
Overview.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));
  const firstOption = await canvas.findByText('Text option');

  await expect(firstOption).toBeInTheDocument();
};

export const Sizes = () => (
  <Section column>
    <Combobox options={smallOptionList} onChange={handleOnChange}>
      Default
    </Combobox>
    <Combobox
      options={smallOptionList}
      onChange={handleOnChange}
      isCompact={true}
    >
      Compact
    </Combobox>
  </Section>
);

export const States = () => (
  <Section column>
    <Combobox
      options={smallOptionList}
      onChange={handleOnChange}
      disabled={true}
    >
      Disabled
    </Combobox>
    <Combobox
      options={smallOptionList}
      onChange={handleOnChange}
      className={'active'}
    >
      Active / Focus
    </Combobox>
    <Combobox options={smallOptionList} onChange={handleOnChange} error={true}>
      Error
    </Combobox>
  </Section>
);

export const LargeOptionNumber = () => (
  <Section column>
    <Combobox options={largeOptionList} onChange={handleOnChange}>
      Place holder text
    </Combobox>
  </Section>
);

export const Search = () => (
  <Section column>
    <Combobox options={largeOptionList} onChange={handleOnChange} search={true}>
      Place holder text
    </Combobox>
  </Section>
);

export const Clear = () => (
  <Section column>
    <Combobox
      options={largeOptionList}
      onChange={handleOnChange}
      search={true}
      clear
      clearTooltipText="Remove Mapping"
    >
      Place holder text
    </Combobox>
  </Section>
);

export const AutoWidth = () => (
  <Section column>
    <Combobox options={largeOptionList} onChange={handleOnChange} autoWidth>
      Place holder text
    </Combobox>
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
