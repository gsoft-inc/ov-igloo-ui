/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import PieChart from './PieChart';

const setup = (props = {}) => {
  return render(<PieChart dataTest="ids-pie-chart" {...props} />);
};

describe('PieChart', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-pie-chart');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render the provided data elements', () => {
    const data = [
      { id: 'data1', percentage: 30 },
      { id: 'data2', percentage: 20 },
      { id: 'data3', percentage: 50 },
    ];
    setup({ data });

    const dataElements = screen.getAllByRole('img');
    expect(dataElements.length).toBe(data.length);
  });

  test('It should render the provided label in the center', () => {
    const label = 'Sample Label';
    setup({ label });

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  test('It should render the provided rate in the center', () => {
    const rate = 75;
    setup({ rate });

    const rateElement = screen.getByText(rate);
    expect(rateElement).toBeInTheDocument();
  });

  test('It should render a regular-sized chart when size is "regular"', () => {
    setup({ size: 'regular' });

    const chartContainer = screen.getByTestId('ids-pie-chart');
    expect(chartContainer).toHaveClass('ids-pie-chart--regular');
  });

  test('It should render a large-sized chart when size is "large"', () => {
    setup({ size: 'large' });

    const chartContainer = screen.getByTestId('ids-pie-chart');
    expect(chartContainer).toHaveClass('ids-pie-chart--large');
  });

  test('It should render the default "empty" data if no data is provided', () => {
    const { container } = setup({ data: undefined });

    const emptyDataElement = container.querySelector('.ids-pie-chart--empty');
    expect(emptyDataElement).toBeInTheDocument();
  });
});
