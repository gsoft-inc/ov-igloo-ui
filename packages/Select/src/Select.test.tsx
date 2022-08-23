/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Select, { SelectOption } from './Select';
import Dropdown from './Dropdown';
import SelectOptionComponent from './SelectOption';
import SelectHeader from './SelectHeader';
import SelectValue from './SelectValue';

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

  return shallow(
    <Select options={options} {...props}>
      Hello world
    </Select>
  );
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

  test('It should render medium size as default', () => {
    const select = setup();

    const isCompact = select.find('.ids-select--compact').length === 1;

    expect(isCompact).toBeFalsy();
  });

  test('It should render compact size when set', () => {
    const select = setup({ isCompact: true });

    const isCompact = select.find('.ids-select--compact').length === 1;

    expect(isCompact).toBeTruthy();
  });

  test('It should render in error state when set', () => {
    const select = setup({ error: true });

    const isCompact = select.find('.ids-select--error').length === 1;

    expect(isCompact).toBeTruthy();
  });

  test('It should render in disabled state when set', () => {
    const select = setup({ disabled: true });

    const isCompact = select.find('.ids-select--disabled').length === 1;

    expect(isCompact).toBeTruthy();
  });

  test('It should render in active state when isOpen', () => {
    const select = setup({ isOpen: true });

    const isCompact = select.find('.ids-select--active').length === 1;

    expect(isCompact).toBeTruthy();
  });

  /* Dropdown */

  test('It should display the Dropdown when isOpen is set', () => {
    const select = setup({ isOpen: true });

    const hasDropdownDisplay = select.find(Dropdown).length === 1;

    expect(hasDropdownDisplay).toBeTruthy();
  });

  test('It should display the Dropdown when the Select is clicked', () => {
    const select = setup();

    select.find('.ids-select').simulate('click');
    const hasDropdownDisplay = select.find(Dropdown).length === 1;

    expect(hasDropdownDisplay).toBeTruthy();
  });

  test('It should not display the Dropdown when the select is clicked if the Select is disabled', () => {
    const select = setup({ disabled: true });

    select.find('.ids-select').simulate('click');
    const hasDropdownDisplay = select.find(Dropdown).length === 1;

    expect(hasDropdownDisplay).toBeFalsy();
  });

  /* Options */

  test('It should render all options', () => {
    const options = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
    ];

    const select = setup({ isOpen: true }, options);
    const dropdown = select.find(Dropdown);
    const selectOptions = dropdown.find(SelectOptionComponent);

    expect(selectOptions.length).toBe(options.length);
  });

  test('It should put the option label in the header after clicked it', () => {
    const options = [{ label: '1', value: 1 }];

    const select = setup({ isOpen: true }, options);
    const dropdown = select.find(Dropdown);
    const selectOptions = dropdown.find(SelectOptionComponent);
    selectOptions.simulate('click');
    const hasPlaceholderValue = select
      .find(SelectHeader)
      .find(SelectValue)
      .prop('isPlaceholder');

    expect(hasPlaceholderValue).toBeFalsy();
  });

  test('It should not put the option label in the header after clicked it if the option is disabled', () => {
    const options = [{ label: '1', value: 1, disabled: true }];

    const select = setup({ isOpen: true }, options);
    const dropdown = select.find(Dropdown);
    const selectOptions = dropdown.find(SelectOptionComponent);
    selectOptions.simulate('click');
    const hasPlaceholderValue = select
      .find(SelectHeader)
      .find(SelectValue)
      .prop('isPlaceholder');

    expect(hasPlaceholderValue).toBeTruthy();
  });
});
