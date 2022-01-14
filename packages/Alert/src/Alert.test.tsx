/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Alert from './Alert';

describe('Alert', () => {
  const component = shallow(<Alert type="none">Hello world</Alert>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-alert');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
