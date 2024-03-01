/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import IglooProvider from "@igloo-ui/provider";

import AreaChart from './AreaChart';

describe('AreaChart', () => {
  test('It should render without error and a snapshot', () => {
    const { asFragment } = render(
      <IglooProvider locale="en-US">
        <AreaChart
          scoreFormatter={(score) => `${score}%`}
          isResponsive={false}
          dataTest="areaChart1"
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
        />
      </IglooProvider>
    );
    expect(screen.getByTestId('areaChart1')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
