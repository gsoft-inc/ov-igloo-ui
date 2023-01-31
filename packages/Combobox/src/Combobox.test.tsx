/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Combobox from './Combobox';

const setup = (props = {}) => {
  return render(
    <Combobox dataTest="ids-combobox" {...props}>
      Hello world
    </Combobox>
  );
};

describe('Combobox', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-combobox');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });
});
