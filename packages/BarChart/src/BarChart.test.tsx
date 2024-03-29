/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import BarChart from './BarChart';
import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';

const setup = (props = {}) => {
  const mockData = [
    {
      id: '1',
      label: 'Good vibes',
      value: 48,
      color: tokens.dandelion400,
    },
    {
      id: '2',
      label: 'Excellence',
      value: 46,
      color: tokens.electricBlue500,
    },
    {
      id: '3',
      label: 'Radical candor',
      value: 24,
      color: tokens.strawberryFields200,
    },
    {
      id: '4',
      label: 'Custom cards by members',
      value: 0,
      color: tokens.sky100,
    },
  ];

  return render(
    <BarChart dataSet={mockData} dataTest="ids-bar-chart" {...props} />
  );
};

describe('BarChart', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-bar-chart');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });
});
