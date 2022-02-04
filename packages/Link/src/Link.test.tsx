/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

describe('Link', () => {
  const component = shallow(<Link to="#">Hello world</Link>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-link');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
