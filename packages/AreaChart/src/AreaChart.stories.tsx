import React from 'react';

import {Meta, StoryObj} from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import AreaChart from './AreaChart';

export default {
    title: 'Components/AreaChart',
    component: AreaChart,
    parameters: {
        docs: {
            description: {
                component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
            },
        },
        chromatic: {delay: 1000},
    },
    argTypes: {
        locale: {
            control: 'select',
            options: ['fr-CA', 'en-US'],
        },
    },
} as Meta<typeof AreaChart>;

type Story = StoryObj<typeof AreaChart>;

const nFormatter = (num: number): string => {
    const isNegative = num < 0;
    num = Math.abs(num);

    const lookup = [
        {value: 1, symbol: ''},
        {value: 1e3, symbol: 'k'},
        {value: 1e6, symbol: 'M'},
        {value: 1e9, symbol: 'B'},
        {value: 1e12, symbol: 'T'},
    ];

    const digits = 2;
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
        .slice()
        .reverse()
        .find(function (item) {
            return num >= item.value;
        });

    let result = item
        ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
        : '0';

    return isNegative ? `-${result}` : result;
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
        range: {min: 'auto', max: 'auto'},
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
                range={{min: 'dataMin', max: 'dataMax'}}
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
                range={{min: 'auto', max: 'auto'}}
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

export const Last7Days = () => {
    return (
        <AreaChart
            range={{min: 'auto', max: 'auto'}}
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
                range={{min: 0, max: 6}}
                dataSet={[]}
                unavailableDataMessage="You have less than 3 survey answers. To protect anonymity, they are not part of this score."
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
            range={{min: 0, max: 5}}
            dataSet={[]}
        />
    );
};

export const NullEntry: Story = {
    args: {
        dateRange: {
            start: '2023-03-25',
            end: '2023-04-23',
        },
        unavailableDataMessage: 'No data available',
        dataSet: [
            {
                dateTimeStamp: '2023-03-25T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-03-26T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-03-27T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-03-28T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-03-29T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-03-30T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-03-31T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-01T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-02T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-03T00:00:00.000-04:00',
                score: null,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-04T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-05T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-06T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-07T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-08T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-09T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-10T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-11T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-12T00:00:00.000-04:00',
                score: 10,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-13T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-14T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-15T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-16T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-17T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-18T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-19T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-20T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-21T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-22T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
            {
                dateTimeStamp: '2023-04-23T00:00:00.000-04:00',
                score: 5.6,
                name: 'foo',
            },
        ],
    },
};

export const NegativeValues: Story = {
    args: {
        scoreFormatter: nFormatter,
        dateRange: {
            start: '2023-03-25',
            end: '2023-04-23',
        },
        range: {min: -100, max: 'auto'},
        dataSet: [
            {
                "score": 93,
                "dateTimeStamp": "2023-03-25T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -65,
                "dateTimeStamp": "2023-03-26T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -92,
                "dateTimeStamp": "2023-03-27T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 25,
                "dateTimeStamp": "2023-03-28T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 31,
                "dateTimeStamp": "2023-03-29T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 38,
                "dateTimeStamp": '2023-03-30T00:00:00.000-04:00',
                "name": "eNPS"
            },
            {
                "score": 44,
                "dateTimeStamp": "2023-04-01T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 13,
                "dateTimeStamp": "2023-04-02T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -31,
                "dateTimeStamp": "2023-04-03T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -7,
                "dateTimeStamp": "2023-04-04T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 84,
                "dateTimeStamp": "2023-04-05T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 97,
                "dateTimeStamp": "2023-04-06T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -53,
                "dateTimeStamp": "2023-04-07T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -64,
                "dateTimeStamp": "2023-04-08T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 57,
                "dateTimeStamp": "2023-04-09T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -94,
                "dateTimeStamp": "2023-04-10T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 56,
                "dateTimeStamp": "2023-04-11T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 28,
                "dateTimeStamp": "2023-04-12T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -80,
                "dateTimeStamp": "2023-04-13T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -63,
                "dateTimeStamp": "2023-04-14T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -12,
                "dateTimeStamp": "2023-04-15T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -56,
                "dateTimeStamp": "2023-04-16T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 49,
                "dateTimeStamp": "2023-04-17T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -37,
                "dateTimeStamp": "2023-04-18T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 56,
                "dateTimeStamp": "2023-04-19T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -92,
                "dateTimeStamp": "2023-04-20T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": -16,
                "dateTimeStamp": "2023-04-21T00:00:00.000-04:00",
                "name": "eNPS"
            },
            {
                "score": 64,
                "dateTimeStamp": "2023-04-22T00:00:00.000-04:00",
                "name": "eNPS"
            }
        ]
    }
};
