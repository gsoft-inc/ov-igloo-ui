# AreaChart

The area chart is a line chart with shading below the line. This area chart depicts score over time.

<Example />

<ReferenceLinks />

## Installation

To install `@igloo-ui/area-chart` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/area-chart
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/area-chart
```

## Usage

Then to use the component in your code just import it!

```jsx
import AreaChart from '@igloo-ui/area-chart';

const nFormatter = (num: number): string => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ];
  const digits = 2;
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
};

<AreaChart
  scoreFormatter={nFormatter}
  dateRange={{
    start: '2022-10-01T17:40:40.457Z',
    end: '2022-10-07T17:40:40.457Z',
  }}
  dataSet={[
    {
      dateTimeStamp: '2022-10-01T00:40:40.457Z',
      score: 48878,
      name: 'sent',
      secondaryName: 'sent',
    },
    {
      dateTimeStamp: '2022-10-02',
      score: 49879,
      name: 'sent',
      secondaryName: 'sent',
    },
    {
      dateTimeStamp: '2022-10-03',
      score: 33587,
      name: 'sent',
      secondaryName: 'sent',
    },
    {
      dateTimeStamp: '2022-10-04',
      score: 45445,
      name: 'sent',
      secondaryName: 'sent',
    },
    {
      dateTimeStamp: '2022-10-05',
      score: 34534,
      secondaryScore: 30000,
      name: 'sent',
      secondaryName: 'sent',
    },
    {
      dateTimeStamp: '2022-10-06',
      score: 34555,
      secondaryScore: 52677,
      name: 'sent',
      secondaryName: 'sent',
    },
    {
      dateTimeStamp: '2022-10-07',
      score: 67897,
      name: 'sent',
      secondaryName: 'sent',
    },
  ]}
/>;
```
