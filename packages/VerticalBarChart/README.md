# VerticalBarChart

A vertical bar chart is a graphical representation that uses vertical bars to display data values, with each bar representing a category or group. The height of each bar corresponds to the magnitude of the data it represents, allowing for easy comparison between different categories.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/vertical-bar-chart` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/vertical-bar-chart
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/vertical-bar-chart
```

## Usage

Then to use the component in your code just import it!

```jsx
import VerticalBarChart from '@igloo-ui/vertical-bar-chart';
import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';

const getColorFromScore = (score) => {
  if (score >= 0 && score < 2) return tokens.coral400;
  if (score >= 2 && score < 4) return tokens.coral200;
  if (score >= 4 && score < 6) return tokens.creamsicle100;
  if (score >= 6 && score < 9) return tokens.seaweed200;
  return tokens.seaweed400;
};

const values = [12, 20, 35, 18, 3, 42, 60, 0, 16, 43, 15];
const chartData = values.map((value, index) => {
  return {
    score: index,
    value,
    color: getColorFromScore(index),
  };
});

<VerticalBarChart data={chartData} />;
```
