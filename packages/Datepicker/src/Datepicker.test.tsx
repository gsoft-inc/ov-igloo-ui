/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Datepicker from './Datepicker';

describe('Datepicker', () => {
  const component = shallow(<Datepicker />);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-datepicker');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
