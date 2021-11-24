/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('Input', () => {
  const component = shallow(<Input>Hello world</Input>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-input');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
