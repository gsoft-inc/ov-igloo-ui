/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Select, { SelectOption } from './Select';

const setup = (props = {}, options: SelectOption[] = []) => {
  options =
    options && options.length > 0
      ? options
      : [
          {
            label: 'Option 1',
            value: '1',
          },
          {
            label: 'Option 2',
            value: '2',
          },
        ];

  const component = shallow(<Select options={options}>Hello world</Select>);
  return component;
};

describe('Select', () => {
  test('It should render without errors', () => {
    const select = setup();
    const wrapper = select.find('.ids-select');
    expect(wrapper.length).toBe(1);
  });

  test('It should render a snapshot', () => {
    const select = setup();
    expect(select).toMatchSnapshot();
  });
});
