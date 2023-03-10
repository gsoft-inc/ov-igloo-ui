# StackedBar

A stacked bar is a representation of data that uses rectangular bars to show the relative proportions of different categories.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/stacked-bar` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/stacked-bar
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/stacked-bar
```

## Usage

Then to use the component in your code just import it!

```jsx
import StackedBar from '@igloo-ui/stacked-bar';

<StackedBar
  dataSet={[
    {
      key: 'stronglyUnfavorable',
      label: 'Strongly Unfavorable',
      value: 30,
      strength: -2,
    },
    {
      key: 'unfavorable',
      label: 'Unfavorable',
      value: 10,
      strength: -1,
    },
    {
      key: 'neutral',
      label: 'Neutral',
      value: 20,
      strength: 0,
    },
    {
      key: 'favorable',
      label: 'Favorable',
      value: 15,
      strength: 1,
    },
    {
      key: 'stronglyFavorable',
      label: 'Strongly Favorable',
      value: 25,
      strength: 2,
    },
  ]}
  showValue
/>;
```
