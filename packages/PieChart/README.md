# PieChart

A pie chart is a circular graph used to display proportions or percentages. It includes a label and percentage in the middle, representing the category or component being depicted and its proportion of the whole.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/pie-chart` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/pie-chart
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/pie-chart
```

## Usage

Then to use the component in your code just import it!

```jsx
import PieChart from '@igloo-ui/pie-chart';
import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';

const mockData = [
  { id: 'positive', percentage: 25, color: tokens.seaweed400 },
  { id: 'negative', percentage: 10, color: tokens.coral400 },
  { id: 'skipped', percentage: 40, color: tokens.creamsicle100 },
  { id: 'unanswered', percentage: 25, color: tokens.grey300 },
];

<PieChart data={mockData} label="Poll Completion" size="large" rate={35} />;
```
