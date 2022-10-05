/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Filter from './Filter';

describe('Filter', () => {
  test('It should render a snapshot', () => {
    const { asFragment } = render(
      <Filter dataTest="filter1">Assigned to me</Filter>
    );
    expect(screen.getByTestId('filter1')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a disabled state', () => {
    render(
      <Filter dataTest="filter2" disabled>
        Assigned to me
      </Filter>
    );
    const filter = screen.getByTestId('filter2');
    expect(filter).toBeDisabled();
  });

  test('It should render a selected look', () => {
    render(
      <Filter dataTest="filter3" selected>
        Assigned to me
      </Filter>
    );
    const filter = screen.getByTestId('filter3');
    expect(filter).toHaveClass('ids-filter--selected');
  });
});
