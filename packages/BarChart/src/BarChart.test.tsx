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
      label: 'Good vibes',
      value: 48,
      color: tokens.dandelion400,
    },
    {
      label: 'Excellence',
      value: 46,
      color: tokens.electricBlue500,
    },
    {
      label: 'Radical candor',
      value: 24,
      color: tokens.strawberryFields200,
    },
    {
      label: 'Custom cards by members',
      value: 0,
      color: tokens.sky100,
    },
  ];

  return render(
    <BarChart dataSet={mockData} dataTest="ids-bar-chart" {...props}>
      Hello world
    </BarChart>
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
