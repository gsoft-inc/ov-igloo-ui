import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Tag from '@igloo-ui/tag';
import Happiness from '@igloo-ui/icons/dist/Happiness';
import { OptionType } from '@igloo-ui/list';

import Section from '@components/section';
import readme from '../../Combobox/README.md';

import Combobox, { ComboboxOption } from './Combobox';

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

export const Multiple = () => {
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
};

// Chromatic configuration
Sizes.bind({});
Sizes.parameters = {
  chromatic: { disableSnapshot: true },
};

Search.bind({});
Search.parameters = {
  chromatic: { disableSnapshot: true },
};

Clear.bind({});
Clear.parameters = {
  chromatic: { disableSnapshot: true },
};

AutoWidth.bind({});
AutoWidth.parameters = {
  chromatic: { disableSnapshot: true },
};

Multiple.bind({});
Multiple.parameters = {
  chromatic: { disableSnapshot: true },
};
