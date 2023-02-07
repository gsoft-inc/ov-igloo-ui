# Combobox

A combobox has all the features a select does as well as filtering and clearing results.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/combobox` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/combobox
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/combobox
```

## Usage

Then to use the component in your code just import it!

```jsx
import Combobox from '@igloo-ui/combobox';

const optionList = [
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
];

<Combobox options={optionList} search clear clearTooltipText="Remove Mapping">
  Place holder text
</Combobox>;
```
