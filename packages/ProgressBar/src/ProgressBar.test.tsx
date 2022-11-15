/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('It should render without errors and a snapshot', () => {
    const { asFragment } = render(
      <ProgressBar value={0.5} dataTest="ids-progress-bar" />
    );
    expect(screen.getByTestId('ids-progress-bar')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
