/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  const component = shallow(<Card>Hello world</Card>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-card');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
