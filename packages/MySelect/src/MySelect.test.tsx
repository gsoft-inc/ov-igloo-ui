/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import MySelect from './MySelect';

describe('MySelect', () => {
  const component = shallow(<MySelect>Hello world</MySelect>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-my-select');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
