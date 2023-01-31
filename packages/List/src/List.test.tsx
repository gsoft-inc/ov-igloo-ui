/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import List from './List';

const setup = (props = {}) => {
  return render(
    <List dataTest="ids-list" {...props}>
      Hello world
    </List>
  );
};

describe('List', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-list');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });
});
