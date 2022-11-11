/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import HelperText from './HelperText';

const childText = 'Information message';

const setUp = (props = {}) => {
  return render(<HelperText {...props}>{childText}</HelperText>);
};

describe('HelperText', () => {
  test('It should render without errors', () => {
    setUp();
    const wrapper = screen.getByText(childText);
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a default appearance', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a error appearance', () => {
    const { asFragment } = setUp({ appearance: 'error' });
    expect(asFragment()).toMatchSnapshot();
  });
});
