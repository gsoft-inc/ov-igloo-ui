/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Popover from './Popover';

describe('Popover', () => {
  const component = shallow(<Popover>Hello world</Popover>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-popover');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
