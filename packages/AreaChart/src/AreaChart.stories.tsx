import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import AreaChart from './AreaChart';

export default {
  title: 'Components/AreaChart',
  component: AreaChart,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    },
    chromatic: { delay: 1000 },
  },
  argTypes: {
    locale: {
      control: 'select',
      options: ['fr', 'en'],
    },
  },
} as Meta<typeof AreaChart>;

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
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
};

const weekDataset = [
  {
    dateTimeStamp: '2022-10-01',
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
];

export const Overview = {
  args: {
    dataSet: [
      {
        dateTimeStamp: '2022-10-01',
        score: 48878,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-04',
        score: 49879,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-05',
        score: 33587,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-06',
        score: 0,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-07',
        score: 0,
        secondaryScore: 60000,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-08',
        score: 0,
        secondaryScore: 52677,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-09',
        score: 67897,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-10',
        score: 46777,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-11',
        score: 40000,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-12',
        score: 57900,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-14',
        score: 57930,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-16',
        score: 57089,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-18',
        score: 30955,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-20',
        score: 0,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-23',
        score: 0,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-24',
        score: 28050,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-26',
        score: 24667,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-27',
        score: 68588,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-28',
        score: 40066,
        name: 'sent',
        secondaryName: 'sent',
      },
      {
        dateTimeStamp: '2022-10-30',
        score: 20000,
        name: 'sent',
        secondaryName: 'sent',
      },
    ],
    dateRange: {
      start: '2022-10-01',
      end: '2022-10-30',
    },
    scoreFormatter: nFormatter,
    range: { min: 'auto', max: 'auto' },
    locale: 'en',
    loading: false,
  },
};

export const OneWeek = () => {
  return (
    <Section column>
      <AreaChart
        scoreFormatter={nFormatter}
        dateRange={{
          start: '2022-10-01',
          end: '2022-10-07',
        }}
        dataSet={weekDataset}
      />
    </Section>
  );
};

export const ScoreMinMaxRange = () => {
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  return (
    <Section column>
      <AreaChart
        range={{ min: 'dataMin', max: 'dataMax' }}
        scoreFormatter={nFormatter}
        dateRange={{
          start: '2022-10-01',
          end: '2022-10-07',
        }}
        dataSet={weekDataset}
        loading={loading}
      />
    </Section>
  );
};

export const ScoreAutoRange = () => {
  return (
    <Section column>
      <AreaChart
        range={{ min: 'auto', max: 'auto' }}
        scoreFormatter={nFormatter}
        dateRange={{
          start: '2022-10-01',
          end: '2022-10-07',
        }}
        dataSet={weekDataset}
      />
    </Section>
  );
};

export const Locale = () => {
  return (
    <AreaChart
      range={{ min: 'auto', max: 'auto' }}
      scoreFormatter={nFormatter}
      dateRange={{
        start: '2022-10-01',
        end: '2022-10-07',
      }}
      dataSet={weekDataset}
      locale="fr"
    />
  );
};

export const Last7Days = () => {
  return (
    <AreaChart
      range={{ min: 'auto', max: 'auto' }}
      scoreFormatter={nFormatter}
      dateRange={{
        start: '2022-10-01',
        end: '2022-10-08',
      }}
      dataSet={[
        ...weekDataset,
        {
          dateTimeStamp: '2022-10-08',
          score: 61897,
          name: 'sent',
          secondaryName: 'sent',
        },
      ]}
      xAxisTickCount={8}
      locale="en"
    />
  );
};

export const EmptyData = () => {
  return (
    <Section column>
      <AreaChart
        scoreFormatter={nFormatter}
        dateRange={{
          start: '2022-10-01',
          end: '2022-10-07',
        }}
        range={{ min: 0, max: 6 }}
        dataSet={[]}
        unavailableDataMessage="This is an empty chart"
      />
    </Section>
  );
};

export const Loading = () => {
  return (
    <AreaChart
      loading
      scoreFormatter={nFormatter}
      dateRange={{
        start: '2022-10-01',
        end: '2022-10-07',
      }}
      range={{ min: 0, max: 5 }}
      dataSet={[]}
    />
  );
};
