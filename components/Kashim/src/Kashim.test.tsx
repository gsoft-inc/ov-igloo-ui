/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Kashim from './Kashim';

describe('Kashim', () => {
  const component = shallow(<Kashim>Hello world</Kashim>);
  test('It should render without errors', () => {
    // console.debug(component.debug());
    const wrapper = component.find('.ids-kashim');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
