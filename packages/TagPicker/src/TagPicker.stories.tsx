import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import { mockData } from './data';
import TagPicker, { TagItem, Keys } from './TagPicker';

export default {
  title: 'Components/TagPicker',
  component: TagPicker,
  parameters: {
    description: readme,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '35rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TagPicker>;

const Template: ComponentStory<typeof TagPicker> = (args) => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);

  const select = (tagText: string): void => {
    setSelected([
      ...selected,
      {
        // To generate unique id
        id: Date.now().toString(),
        text: tagText,
      },
    ]);
  };

  const remove = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      {...args}
      selectedResults={selected}
      onSelection={select}
      onTagRemove={remove}
    />
  );
};
export const Overview = Template.bind({});
Overview.args = {
  separators: [Keys.Enter, Keys.Comma, Keys.Space],
  placeholder: 'Enter anything then press enter, comma or space',
};

export const Appearances = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);
  const [results, setResults] = React.useState<TagItem[]>([]);

  const onInput = (value: string): void => {
    setResults(
      mockData.filter(
        (d) =>
          d.text.toLowerCase().includes(value.toLowerCase()) &&
          !selected.includes(d)
      )
    );
  };

  const select = (id: string): void => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <Section column>
      <TagPicker
        results={results}
        selectedResults={selected}
        onInput={onInput}
        onSelection={select}
        onTagRemove={remove}
        placeholder="Eg. Team"
        noResultsText="No results"
      />
    </Section>
  );
};
