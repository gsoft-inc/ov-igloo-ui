/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';
import VerticalBarChart, { VerticalBarChartProps } from './VerticalBarChart';

jest.mock('recharts', () => {
  const OriginalRechartsModule = jest.requireActual('recharts');

  return {
    ...OriginalRechartsModule,
    ResponsiveContainer: ({ height, children }: any) => (
      <div className="recharts-responsive-container" style={{ width: 800, height }}>
        {children}
      </div>
    ),
  };
});

const getColorFromScore = (score: number) => {
  if (score >= 0 && score < 2) return tokens.coral400;
  if (score >= 2 && score < 4) return tokens.coral200;
  if (score >= 4 && score < 6) return tokens.creamsicle100;
  if (score >= 6 && score < 9) return tokens.seaweed200;
  return tokens.seaweed400;
};

const values = [12, 20, 35, 18, 3, 42, 60, 33, 16, 43, 15];
const chartData = values.map((value, index) => {
  return {
    score: index,
    value,
    color: getColorFromScore(index),
  };
});

const chartDefaults = {
  data: chartData,
  isAnimationActive: false,
};

const setup = (
  props: VerticalBarChartProps = chartDefaults
) => {
  return render(
    <VerticalBarChart dataTest="ids-vertical-bar-chart" {...props} />
  );
};

describe('VerticalBarChart', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-vertical-bar-chart');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render the provided data elements', () => {
    const { container } = setup();
    const dataElements = container.querySelectorAll(
      '.ids-vertical-bar-chart__bar'
    );
    expect(dataElements.length).toBe(chartData.length);
  });

  test('It should render the correct height', () => {
    setup({height: 600, ...chartDefaults});
    const chartContainer = screen.getByRole('region');
    const containerStyles = window.getComputedStyle(chartContainer);
    const containerHeight = containerStyles.height;
    expect(containerHeight).toBe('600px');
  });

  test('It should render the max and min labels', () => {
    const minLabelText = 'Negative Label';
    const maxLabelText = 'Positive Label';
    setup({minLabel: minLabelText, maxLabel: maxLabelText, ...chartDefaults});
    const minLabel = screen.getByText(minLabelText);
    const maxLabel = screen.getByText(maxLabelText);
    expect(minLabel).toBeInTheDocument();
    expect(maxLabel).toBeInTheDocument();
  });
});
