/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
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
    const { getByRole } = render(<Radio htmlFor="radio-test" />);
    expect(getByRole('radio')).toBeInTheDocument();
  });

  test('It should render a checked state', () => {
    const radio = setUp({ checked: true });
    expect(radio).toMatchSnapshot();
  });

  test('It should render a disabled state', () => {
    const radio = setUp({ disabled: true });
    expect(radio).toMatchSnapshot();
  });
});
