/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

const setUp = (props = {}) => {
  return render(<Checkbox htmlFor="checkbox-master" {...props} />);
};

describe('Checkbox', () => {
  test('It should render without errors', () => {
    setUp({ children: 'Label', htmlFor: 'checkbox-test' });
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('It should render without label', () => {
    setUp({ htmlFor: 'checkbox-test' });
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('It should render a checked state', () => {
    const { asFragment } = setUp({ checked: true });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a disabled state', () => {
    const { asFragment } = setUp({ disabled: true });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a indeterminate state', () => {
    const { asFragment } = setUp({ indeterminate: true });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a completion appearance', () => {
    setUp({ appearance: "completion" });
    expect(screen.getByRole('checkbox')).toHaveClass('ids-checkbox--completion');
  });
});
