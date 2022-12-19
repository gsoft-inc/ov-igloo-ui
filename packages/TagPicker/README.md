# TagPicker

A multiselect of items displayed as tags.

<ReferenceLinks is="custom" />

<Example is="custom" />

## Installation

To install `@igloo-ui/tag-picker` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/tag-picker
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/tag-picker
```

## Usage

Then to use the component in your code just import it!

```jsx
import TagPicker from '@igloo-ui/tag-picker';
import { mockData } from './data';

const [selected, setSelected] = React.useState([]);
const [results, setResults] = React.useState([]);

const onInput = (value) => {
  setResults(
    mockData.filter(
      (d) =>
        d.text.toLowerCase().includes(value.toLowerCase()) &&
        !selected.includes(d)
    )
  );
};

const select = (id) => {
  const selectedItem = mockData.find((d) => d.id === id);
  if (selectedItem) {
    setSelected([...selected, selectedItem]);
  } else {
    setSelected([...selected]);
  }
};

const remove = (id) => {
  setSelected(selected.filter((s) => s.id !== id));
};

<TagPicker
  {...args}
  results={results}
  selectedResults={selected}
  onInput={onInput}
  onSelection={select}
  onTagRemove={remove}
  noResultsText="No results"
  placeholder="Enter Team or Bob"
/>;
```
