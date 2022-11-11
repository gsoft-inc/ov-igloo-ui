/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  test('It should render without errors', () => {
    render(<Card>Hello world</Card>);
    const wrapper = screen.getByText('Hello world');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a small size', (): void => {
    render(<Card size="small">Hello world</Card>);
    const wrapper = screen.getByText('Hello world');

    expect(wrapper).toHaveClass('ids-card--small');
  });

  test('It should render a snapshot', () => {
    const { asFragment } = render(<Card>Hello world</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
});
