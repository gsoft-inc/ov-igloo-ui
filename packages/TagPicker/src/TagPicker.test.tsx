/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import TagPicker from './TagPicker';

const setup = (props = {}) => {
  return render(
    <TagPicker dataTest="ids-tag-picker" {...props}>
      Hello world
    </TagPicker>
  );
};

describe('TagPicker', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-tag-picker');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });
});
