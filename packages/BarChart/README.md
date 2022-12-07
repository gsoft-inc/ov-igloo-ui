# BarChart

Bar charts should be used when you are showing segments of information.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/bar-chart` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/bar-chart
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/bar-chart
```

## Usage

Then to use the component in your code just import it!

```jsx
import BarChart from '@igloo-ui/bar-chart';

const data = [
    {
      label: 'Good vibes',
      value: 48,
      color: '#FBC73B',
    },
    {
      label: 'Excellence',
      value: 46,
      color: '#6893FF',
    },
]

<BarChart dataSet={data} />
```
