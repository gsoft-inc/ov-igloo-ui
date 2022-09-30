/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  test('It should render without error and a snapshot', () => {
    const { asFragment } = render(
      <Breadcrumb
        dataTest="breadcrumb1"
        items={[
          {
            label: 'Home',
            link: '#',
          },
          {
            label: 'Career',
            link: '#',
          },
          {
            label: 'Developer',
          },
        ]}
      />
    );
    expect(screen.getByTestId('breadcrumb1')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a left pointing chevron', () => {
    const { container } = render(
      <Breadcrumb
        items={[
          {
            label: 'Back to Main page',
            link: '#',
          },
        ]}
      />
    );
    const leftChevron = container.querySelector(
      '.ids-breadcrumb__item--is-back-link .ids-breadcrumb__chevron'
    );
    expect(leftChevron).toBeInTheDocument();
  });
});
