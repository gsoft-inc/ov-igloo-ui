/**
 * @jest-environment jsdom
 */
import React from 'react';
import { findByRole, render } from '@testing-library/react';
import { shallow } from 'enzyme';

import Radio from './Radio';

const setUp = (props = {}) => {
  const component = shallow(<Radio htmlFor="radio-master" {...props} />);
  return component;
};

describe('Radio', () => {
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', () => {
    const { getByText } = render(<Radio htmlFor="radio-test">Label</Radio>);
    expect(getByText('Label')).toBeInTheDocument();
  });

  test('It should render without label', () => {
    render(<Radio htmlFor="radio-test" />);
    const label = document.getElementsByTagName('label');
    expect(label.length).toBe(0);
  });

  test('It should render a checked state', () => {
    const { getByRole } = render(
      <Radio htmlFor="radio-test-2" checked>
        Label
      </Radio>
    );
    const radio = getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('It should render a disabled state', () => {
    const { getByRole } = render(
      <Radio htmlFor="radio-test-3" disabled>
        Label
      </Radio>
    );
    const radio = getByRole('radio');

    expect(radio).toBeDisabled();
  });
});
