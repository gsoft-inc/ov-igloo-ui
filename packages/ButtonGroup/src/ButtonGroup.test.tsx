/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from './ButtonGroup';

describe('ButtonGroup', () => {
  const component = shallow(<ButtonGroup>Hello world</ButtonGroup>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-button-group');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
