/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Select from './Select';

describe('Select', () => {
  const component = shallow(<Select>Hello world</Select>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-select');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
