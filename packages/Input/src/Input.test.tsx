/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('Input', () => {
  test('It should render without errors', () => {
    const input = shallow(<Input />);
    const wrapper = input.find('.ids-input');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a medium size', (): void => {
    const input = shallow(<Input />);
    const wrapper = input.find('.ids-input--medium');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a small size', (): void => {
    const input = shallow(<Input inputSize="small" />);
    const wrapper = input.find('.ids-input--small');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a readonly', (): void => {
    const input = shallow(<Input readOnly={true} />);
    const wrapper = input.find('.ids-input--readonly');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    const input = shallow(<Input />);
    expect(input).toMatchSnapshot();
  });

  test('It should render an email type', (): void => {
    const input = shallow(<Input value={'hashbrown@example.com'} />);
    expect(input).toMatchSnapshot();
  });

  test('It should render a text type', (): void => {
    const input = shallow(<Input type="text" value={'potat'} />);
    expect(input).toMatchSnapshot();
  });

  test('It should render a password type', (): void => {
    const input = shallow(
      <Input type="password" value={'this is a great password!'} />
    );
    expect(input).toMatchSnapshot();
  });

  test('It should render a number type', (): void => {
    const input = shallow(<Input type="number" value={12345} />);
    expect(input).toMatchSnapshot();
  });
});
