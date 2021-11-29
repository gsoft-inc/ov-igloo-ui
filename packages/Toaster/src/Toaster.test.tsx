/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Toaster from './Toaster';

describe('Toaster', () => {
  const component = shallow(<Toaster>Hello world</Toaster>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-toaster');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
