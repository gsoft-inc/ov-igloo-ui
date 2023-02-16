# List

Lists render possible actions or selectable options for a given element. This component is usually placed under a kebab menu icon.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/list` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/list
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/list
```

## Usage

Then to use the component in your code just import it!

```jsx
import List from '@igloo-ui/list';

const optionList = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
    description: 'just adding some description',
  },
  {
    type: 'list',
    label: 'Item 2 (disabled)',
    value: '2',
    disabled: true,
  },
  {
    type: 'list',
    label: 'Item 3 (focused)',
    value: '3',
    description: 'just adding some description',
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
    color: '#74DCC9',
  },
];

const [selectedOption, setSeletedOption] = React.useState(optionList[3]);
const [focusedOption, setFocusedOption] = React.useState(optionList[2]);

function handleOptionSelect(option) {
  setSeletedOption(option);
}

function handleOptionFocus(option) {
  setFocusedOption(option);
}

<List
  options={optionList}
  onOptionChange={handleOptionSelect}
  onOptionFocus={handleOptionFocus}
  selectedOption={selectedOption}
  focusedOption={focusedOption}
/>;
```
