/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import HelperText from './HelperText';

const setUp = (props = {}) => {
  const component = shallow(
    <HelperText {...props}>Information message</HelperText>
  );
  return component;
};

describe('HelperText', () => {
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', () => {
    const wrapper = component.find('.ids-helperText');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a default appearance', () => {
    const helperText = setUp();
    expect(helperText).toMatchSnapshot();
  });

  test('It should render a error appearance', () => {
    const helperText = setUp({ appearance: 'error' });
    expect(helperText).toMatchSnapshot();
  });
});
