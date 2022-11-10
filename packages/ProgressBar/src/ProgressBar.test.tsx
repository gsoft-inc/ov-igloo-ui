/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  const component = shallow(<ProgressBar>Hello world</ProgressBar>);
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-progress-bar');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
