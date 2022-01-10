/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import Search from '@igloo-ui/icons/dist/Search';

const setUp = (props = {}) => {
  const component = shallow(<Input dataTest="ids-input" {...props} />);
  return component;
};

describe('Input', () => {
  test('It should render without errors', (): void => {
    const input = setUp();
    const wrapper = input.find('.ids-input');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a small size', (): void => {
    const input = setUp({ isCompact: true });
    const wrapper = input.find('.ids-input--compact');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a readonly', (): void => {
    const input = setUp({ readOnly: true });
    const wrapper = input.find('.ids-input--readonly');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', (): void => {
    const input = setUp();
    expect(input).toMatchSnapshot();
  });

  test('It should render an email type', (): void => {
    const input = setUp({ value: 'hashbrown@potatocatinc.com' });
    expect(input).toMatchSnapshot();
  });

  test('It should render a text type', (): void => {
    const input = setUp({ type: 'test', value: 'potat' });
    expect(input).toMatchSnapshot();
  });

  test('It should render a password type', (): void => {
    const input = setUp({
      type: 'password',
      value: 'this is a great password!',
    });
    expect(input).toMatchSnapshot();
  });

  test('It should render a number type', (): void => {
    const input = setUp({ type: 'number', value: 12345 });
    expect(input).toMatchSnapshot();
  });

  test('It should render a input with prefix icon', (): void => {
    const input = setUp({ prefixIcon: <Search size="small" /> });
    const wrapper = input.find('.ids-input--prefixIcon');
    expect(wrapper.length).toBe(1);
  });
});
