import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Tag from '@igloo-ui/tag';
import Happiness from '@igloo-ui/icons/dist/Happiness';
import { OptionType } from '@igloo-ui/list';
import Button from '@igloo-ui/button';

import Section from '@components/section';
import readme from '../../Combobox/README.md';

import Combobox, { ComboboxOption } from './Combobox';

export default {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '34rem',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof Combobox>;

const comboboxPlaceholder = 'ex: Lorem ipsum dolor';

const handleOnChange = (option: OptionType | undefined): void => {
  const item = option as ComboboxOption;
  alert(`Option: ${item?.label}`);
};

const smallOptionList: ComboboxOption[] = [
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

const largeOptionList: ComboboxOption[] = [
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
    label:
      'Text 3. I will put a lot of text here to see how it behaves. Hopefully it looks good!',
    value: '3',
    color: '#74DCC9',
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
  {
    label: 'Text 7',
    value: '7',
  },
  {
    label: 'Text 8',
    value: '8',
  },
  {
    label: 'Text 9',
    value: '9',
  },
  {
    label: 'Text 10',
    value: '10',
  },
  {
    label: 'Text 11',
    value: '11',
  },
  {
    label: 'Text 12',
    value: '12',
  },
];

const listWithAction: ComboboxOption[] = [
  {
    label: 'Quarterly Performance Discussion',
    value: '1',
    description: <Tag appearance="grey" size="xsmall">Self review</Tag>,
    action: <Button appearance={'ghost'} size="small">Preview</Button>,
  },
  {
    label: 'Clarifying Role and Expectations',
    value: '2',
    action: <Button appearance={'ghost'} size="small">Preview</Button>,
  },
  {
    label: 'Discussing progress on individual goals',
    value: '3',
    action: <Button appearance={'ghost'} size="small">Preview</Button>,
    description: 'Description',
  }
];


type Story = StoryObj<typeof Combobox>;

export const Overview: Story = {
  args: {
    children: comboboxPlaceholder,
    options: smallOptionList,
  },

  play: async ({ canvasElement }) => {
    const body = canvasElement.ownerDocument.body;
    const canvas = within(body);

    await userEvent.click(canvas.getByRole('button'));
    const firstOption = await canvas.findByText('Text option');

    await expect(firstOption).toBeInTheDocument();
  },
};

export const Sizes: Story = {
  render: () => (
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
  ),

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

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

export const Search: Story = {
  render: () => (
    <Section column>
      <Combobox
        options={largeOptionList}
        onChange={handleOnChange}
        search={true}
      >
        Place holder text
      </Combobox>
    </Section>
  ),

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const NoSearchIcon: Story = {
  render: () => (
    <Section column>
      <Combobox
        options={largeOptionList}
        onChange={handleOnChange}
        search={true}
        showSearchIcon={false}
      >
        Place holder text
      </Combobox>
    </Section>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Clear: Story = {
  render: () => (
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
  ),

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const AutoWidth: Story = {
  render: () => (
    <Section column>
      <Combobox options={largeOptionList} onChange={handleOnChange} autoWidth>
        Place holder text
      </Combobox>
    </Section>
  ),

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Multiple: Story = {
  render: () => {
    const [selectedResults, setSelectedResults] = React.useState<OptionType[]>(
      []
    );

    const removeItem = (optionValue: string): void => {
      const filteredResults = selectedResults.filter(
        (s) => s.value !== optionValue
      );
      setSelectedResults([...filteredResults]);
    };

    const handleOptionChange = (option: OptionType | undefined) => {
      if (option) {
        const selectedItem = selectedResults.filter((o) => {
          return o.value === option.value;
        });
        const isChecked = !!selectedItem && selectedItem.length > 0;
        if (isChecked) {
          removeItem(option.value.toString());
        } else {
          setSelectedResults([...selectedResults, option]);
        }
      }
    };

    const handleTagRemove = (tagId: string): void => {
      removeItem(tagId);
    };

    const handleClear = (): void => {
      setSelectedResults([]);
    };

    return (
      <Section column>
        <div className="isb-combobox__tag-list">
          {selectedResults.map((item: OptionType) => {
            return (
              <Tag
                key={item.value}
                id={item.value.toString()}
                src={item.src}
                color={item.color}
                icon={item.icon}
                dismissible={item.type === 'list' ? !item.disabled : true}
                appearance="secondary"
                onRemove={handleTagRemove}
                className="isb-combobox__tag"
              >
                {item.type === 'list' ? item.label : item.member}
              </Tag>
            );
          })}
        </div>
        <Combobox
          options={largeOptionList}
          multiple
          search
          onChange={handleOptionChange}
          selectedOption={selectedResults}
          clear
          onClear={handleClear}
        >
          Place holder text
        </Combobox>
      </Section>
    );
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const WithActions: Story = {
  render: () => {
    return (
      <Section column>
        <Combobox options={listWithAction}>
          Place holder text
        </Combobox>
      </Section>
    )
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const onClose = (): void => {
      setOpen(false);
    };
    
    const onOpen = (): void => {
      setOpen(true);
    };

    return (
      <Section column>
        <Combobox options={listWithAction} onClose={onClose} onOpen={onOpen} isOpen={open}
          footer={<Button appearance={'ghost'} size="small" onClick={() => setOpen(false)}>Start from scratch</Button>}>
          Place holder text
        </Combobox>
      </Section>
    )
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Loading: Story = {
  render: () => {
    return (
      <Section column>
        <Combobox loading>
          Place holder text
        </Combobox>
      </Section>
    )
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};