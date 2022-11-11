/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';

import Radio from './Radio';

const setUp = (props = {}) => {
  return render(<Radio htmlFor="radio-master" {...props} />);
};

describe('Radio', () => {
  test('It should render without errors', () => {
    const { getByText } = setUp({ htmlFor: 'radio-test', children: 'Label' });
    expect(getByText('Label')).toBeInTheDocument();
  });

  test('It should render without label', () => {
    const { container } = setUp({ htmlFor: 'radio-test-1' });
    const label = container.querySelector('label');
    expect(label).not.toBeInTheDocument();
  });

  test('It should render a checked state', () => {
    const { getByRole } = setUp({
      htmlFor: 'radio-test-2',
      children: 'Label',
      checked: true,
      onChange: () => {},
    });
    const radio = getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('It should render a disabled state', () => {
    const { getByRole } = setUp({
      htmlFor: 'radio-test-3',
      children: 'Label',
      disabled: true,
    });
    const radio = getByRole('radio');

    expect(radio).toBeDisabled();
  });
});
