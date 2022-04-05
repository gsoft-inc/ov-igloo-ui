/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Toggle from './Toggle';

describe('Toggle', () => {
  const component = shallow(<Toggle>Hello world</Toggle>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-toggle');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
