import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import readme from '../README.md';

import FormGroup from '@igloo-ui/form-group';
import { mockData } from './data';
import TagPicker, { TagItem, Keys } from './TagPicker';

export default {
  title: 'Components/TagPicker',
  component: TagPicker,
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
          minHeight: '35rem',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof TagPicker>;

const Template: StoryFn<typeof TagPicker> = (args) => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);

  const select = (tagText: string): void => {
    setSelected((prevSelected) => [
      ...prevSelected,
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

export const Overview = {
  render: Template,

  args: {
    separators: [Keys.Enter, Keys.Comma, Keys.Space],
    placeholder: 'Enter anything then press enter, comma or space',
  },
};

export const DefaultSeparators = {
  render: Template,

  args: {
    placeholder: 'Enter anything then press enter.',
  },
};

const SearchTemplate: StoryFn<typeof TagPicker> = (args) => {
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

export const WithSearching = {
  render: SearchTemplate,

  args: {
    placeholder: 'Enter Team or Bob',
    showSearchIcon: true,
  },
};

export const MaxHeight = {
  render: SearchTemplate,

  args: {
    placeholder: 'Enter multiple tags to see how the max height works.',
    maxHeight: '16rem',
    className: 'isb-tag-picker--small-width',
  },
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
        showSearchIcon
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

export const Error = () => {
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
    <TagPicker
      results={results}
      selectedResults={selected}
      onInput={onInput}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
      placeholder="Disabled tag picker"
      error
    />
  );
};

export const SelectedOptions = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([mockData[0], mockData[1]]);
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
    <TagPicker
      results={results}
      selectedResults={selected}
      onInput={onInput}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
      placeholder="Enter more options"
      showSearchIcon
    />
  );
};
