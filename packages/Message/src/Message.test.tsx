/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Message from './Message';

const setUp = (props = {}) => {
  const component = shallow(<Message {...props}>Information message</Message>);
  return component;
};

describe('Message', () => {
  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', () => {
    const wrapper = component.find('.ids-message');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a default appearance', () => {
    const message = setUp();
    expect(message).toMatchSnapshot();
  });

  test('It should render a error appearance', () => {
    const message = setUp({ appearance: 'error' });
    expect(message).toMatchSnapshot();
  });
});
