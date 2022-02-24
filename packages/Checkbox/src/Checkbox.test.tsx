/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

const setUp = (props = {}) => {
  const component = shallow(<Checkbox htmlFor="checkbox-master" {...props} />);
  return component;
};

describe('Checkbox', () => {
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', () => {
    const { getByText } = render(
      <Checkbox htmlFor="checkbox-test">Label</Checkbox>
    );
    expect(getByText('Label')).toBeInTheDocument();
  });

  test('It should render without label', () => {
    const { getByRole } = render(<Checkbox htmlFor="checkbox-test" />);
    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  test('It should render a checked state', () => {
    const checkbox = setUp({ checked: true });
    expect(checkbox).toMatchSnapshot();
  });

  test('It should render a disabled state', () => {
    const checkbox = setUp({ disabled: true });
    expect(checkbox).toMatchSnapshot();
  });

  test('It should render a indeterminate state', () => {
    const checkbox = setUp({ indeterminate: true });
    expect(checkbox).toMatchSnapshot();
  });
});
