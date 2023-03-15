/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MockDropdown from '@igloo-ui/dropdown/src/__mocks__/Dropdown.mock';

import Select, { SelectOptiontype } from './Select';

const setup = (props = {}, options: SelectOptiontype[] = []) => {
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
  return render(
    <Select dataTest="select1" options={options} {...props}>
      Hello world
    </Select>
  );
};

jest.mock('@igloo-ui/dropdown', () => ({
  __esModule: true,
  default: jest.fn(MockDropdown),
}));

describe('Select', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('select1');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup({ isOpen: true });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render medium size as default', () => {
    setup();
    const select = screen.getByTestId('select1');

    expect(select).not.toHaveClass('ids-select--compact');
  });

  test('It should render compact size when set', () => {
    setup({ isCompact: true });
    const select = screen.getByTestId('select1');

    expect(select).toHaveClass('ids-select--compact');
  });

  test('It should render in error state when set', () => {
    setup({ error: true });

    const select = screen.getByTestId('select1');

    expect(select).toHaveClass('ids-select--error');
  });

  test('It should render in disabled state when set', () => {
    setup({ disabled: true });

    const select = screen.getByTestId('select1');

    expect(select).toHaveClass('ids-select--disabled');
  });

  test('It should render in active state when isOpen', () => {
    setup({ isOpen: true });

    const select = screen.getByTestId('select1');

    expect(select).toHaveClass('ids-select--active');
  });

  /* Dropdown */

  test('It should display the Dropdown when isOpen is set', () => {
    const { container } = setup({ isOpen: true });

    const dropdown = container.querySelector('.ids-dropdown');

    expect(dropdown).toBeInTheDocument();
  });

  test('It should display the Dropdown when the Select is clicked', () => {
    setup();
    const select = screen.getByTestId('select1');
    fireEvent.click(select);

    const dropdown = select.querySelector('.ids-dropdown');

    expect(dropdown).toBeInTheDocument();
  });

  test('It should not display the Dropdown when the select is clicked if the Select is disabled', () => {
    setup({ disabled: true });

    const select = screen.getByTestId('select1');
    fireEvent.click(select);
    const dropdown = select.querySelector('.ids-dropdown');

    expect(dropdown).not.toBeInTheDocument();
  });

  /* Options */

  test('It should render all options', () => {
    const options: SelectOptiontype[] = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
    ];

    setup({ isOpen: true }, options);
    const select = screen.getByTestId('select1');
    const selectOptions = select.querySelectorAll('.ids-list-item');

    expect(selectOptions.length).toBe(options.length);
  });

  test("It should put the option label in the header after it's clicked", () => {
    const options = [{ label: '1', value: 1 }];

    setup({ isOpen: true }, options);
    const select = screen.getByTestId('select1');
    const selectOptions = select.querySelectorAll('.ids-list-item');
    fireEvent.click(selectOptions[0]);
    const selectValue = select.querySelector('.ids-select__value');

    expect(selectValue).not.toHaveClass('ids-select__value--placeholder');
  });

  test("It should not put the option label in the header after it's clicked if the option is disabled", () => {
    const options = [{ label: '1', value: 1, disabled: true }];

    setup({ isOpen: true }, options);
    const select = screen.getByTestId('select1');
    const selectOptions = select.querySelectorAll('.ids-list-item');
    fireEvent.click(selectOptions[0]);
    const selectValue = select.querySelector('.ids-select__value');

    expect(selectValue).toHaveClass('ids-select__value--placeholder');
  });
});
