/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Ellipsis from './Ellipsis';

describe('Ellipsis', () => {
  const component = shallow(<Ellipsis>Hello world</Ellipsis>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-ellipsis');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
