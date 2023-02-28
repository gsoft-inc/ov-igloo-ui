/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import ActionMenu from './ActionMenu';

const setup = (props = {}) => {
  return render(
    <ActionMenu dataTest="ids-action-menu" {...props}>
      Hello world
    </ActionMenu>
  );
};

describe('ActionMenu', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-action-menu');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });
});
