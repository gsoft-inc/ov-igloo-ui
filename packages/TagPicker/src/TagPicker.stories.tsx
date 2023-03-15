import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import readme from '../README.md';

import FormGroup from '@igloo-ui/form-group';
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
        {Story()}
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
        id: Date.now().toString(),
        text: tagText,
      },
    ]);
  };

  const remove = (id: string): void => {
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

export const DefaultSeparators = Template.bind({});
DefaultSeparators.args = {
  placeholder: 'Enter anything then press enter.',
};

const SearchTemplate: ComponentStory<typeof TagPicker> = (args) => {
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

  const remove = (id: string): void => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      {...args}
      results={results}
      selectedResults={selected}
      onInput={onInput}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
    />
  );
};

export const WithSearching = SearchTemplate.bind({});
WithSearching.args = {
  placeholder: 'Enter Team or Bob',
};

export const MaxHeight = SearchTemplate.bind({});
MaxHeight.args = {
  placeholder: 'Enter multiple tags to see how the max height works.',
  maxHeight: '16rem',
  className: 'isb-tag-picker--small-width',
};

export const MaxTags = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);
  const [results, setResults] = React.useState<TagItem[]>([]);
  const [showMessage, setShowMessage] = React.useState(false);

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
    setShowMessage(false);
  };

  const onMaxTags = () => {
    setShowMessage(true);
  };

  return (
    <FormGroup
      messageType="info"
      message="You’ve reached your 5 recipient limit"
      showMessage={showMessage}
    >
      <TagPicker
        results={results}
        selectedResults={selected}
        onInput={onInput}
        onSelection={select}
        onTagRemove={remove}
        noResultsText="No results"
        placeholder="Try entering more than 5 tags"
        maxTags={5}
        onMaxTags={onMaxTags}
      />
    </FormGroup>
  );
};

export const Disabled = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);

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
    <TagPicker
      selectedResults={[mockData[0]]}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
      placeholder="Disabled tag picker"
      disabled
    />
  );
};
