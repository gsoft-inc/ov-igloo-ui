/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from './Input';
import Search from '@igloo-ui/icons/dist/Search';

const setUp = (props = {}) => {
  return render(<Input dataTest="ids-input" {...props} />);
};

describe('Input', () => {
  test('It should render without errors', (): void => {
    setUp();
    const wrapper = screen.getByTestId('ids-input');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a small size', (): void => {
    setUp({ isCompact: true });
    const wrapper = screen.getByTestId('ids-input');
    expect(wrapper).toHaveClass('ids-input--compact');
  });

  test('It should render a readonly', (): void => {
    setUp({ disabled: true });
    const wrapper = screen.getByTestId('ids-input');
    expect(wrapper).toHaveClass('ids-input--disabled');
  });

  test('It should render a snapshot', (): void => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render an email type', (): void => {
    const { asFragment } = setUp({
      type: 'email',
      value: 'hashbrown@potatocatinc.com',
    });
    expect(screen.getByTestId('ids-input').getAttribute('type')).toEqual(
      'email'
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a text type', (): void => {
    const { asFragment } = setUp({ type: 'text', value: 'potato' });
    expect(screen.getByTestId('ids-input').getAttribute('type')).toEqual(
      'text'
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a password type', (): void => {
    const { asFragment } = setUp({
      type: 'password',
      value: 'this is a great password!',
    });
    expect(screen.getByTestId('ids-input').getAttribute('type')).toEqual(
      'password'
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a number type', (): void => {
    const { asFragment } = setUp({ type: 'number', value: 12345 });
    expect(screen.getByTestId('ids-input').getAttribute('type')).toEqual(
      'number'
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a input with prefix icon', (): void => {
    setUp({ prefixIcon: <Search size="small" /> });
    const wrapper = screen.getByTestId('ids-input');
    expect(wrapper).toHaveClass('ids-input--prefixIcon');
  });
});
