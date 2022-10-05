/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const component = shallow(
    <Dropdown content="All settings">
      <button>Settings</button>
    </Dropdown>
  );
  test('It should render without errors', () => {
    const wrapper = component.find('.ids-drop__container');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
