/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Pager from './Pager';

describe('Pager', () => {
  const component = shallow(<Pager>Hello world</Pager>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-pager');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
