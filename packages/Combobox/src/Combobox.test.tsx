/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MockDropdown from '@igloo-ui/dropdown/src/__mocks__/Dropdown.mock';
import MockTooltip from '@igloo-ui/tooltip/src/__mocks__/Tooltip.mock';

import Combobox, { ComboboxOption } from './Combobox';

jest.mock('@igloo-ui/dropdown', () => ({
  __esModule: true,
  default: jest.fn(MockDropdown),
}));

jest.mock('@igloo-ui/tooltip', () => ({
  __esModule: true,
  default: jest.fn(MockTooltip),
}));

const setup = (props = {}, options: ComboboxOption[] = []) => {
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
    <Combobox dataTest="combobox1" options={options} {...props}>
      Hello world
    </Combobox>
  );
};

describe('Combobox', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('combobox1');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup({ isOpen: true });
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render medium size as default', () => {
    setup();
    const combobox = screen.getByTestId('combobox1');

    expect(combobox).not.toHaveClass('ids-combobox--compact');
  });

  test('It should render compact size when set', () => {
    setup({ isCompact: true });
    const combobox = screen.getByTestId('combobox1');

    expect(combobox).toHaveClass('ids-combobox--compact');
  });

  test('It should render in error state when set', () => {
    setup({ error: true });

    const combobox = screen.getByTestId('combobox1');

    expect(combobox).toHaveClass('ids-combobox--error');
  });

  test('It should render in disabled state when set', () => {
    setup({ disabled: true });

    const combobox = screen.getByTestId('combobox1');

    expect(combobox).toHaveClass('ids-combobox--disabled');
  });

  test('It should render in active state when isOpen', () => {
    setup({ isOpen: true });

    const combobox = screen.getByTestId('combobox1');

    expect(combobox).toHaveClass('ids-combobox--active');
  });

  test('It should render a clear button when item is selected and selected item is cleared when clicked', () => {
    setup({ isOpen: true, clear: true });

    const combobox = screen.getByTestId('combobox1');

    const comboboxOptions = combobox.querySelectorAll('.ids-list-item');
    fireEvent.click(comboboxOptions[0]);

    const clearBtn = combobox.querySelector('.ids-combobox-input__clear');
    expect(clearBtn).toBeInTheDocument();

    if (clearBtn) {
      fireEvent.click(clearBtn);
    }
    const comboboxValue = combobox.querySelector('.ids-combobox-input');

    expect(comboboxValue).toHaveClass('ids-combobox-input--placeholder');
  });

  /* Dropdown */

  test('It should display the Dropdown when isOpen is set', () => {
    const { container } = setup({ isOpen: true });

    const dropdown = container.querySelector('.ids-dropdown');

    expect(dropdown).toBeInTheDocument();
  });

  test('It should display the Dropdown when the Combobox is clicked', () => {
    setup();
    const combobox = screen.getByTestId('combobox1');
    fireEvent.click(combobox);

    const dropdown = combobox.querySelector('.ids-dropdown');

    expect(dropdown).toBeInTheDocument();
  });

  test('It should not display the Dropdown when the combobox is clicked if the Combobox is disabled', () => {
    setup({ disabled: true });

    const combobox = screen.getByTestId('combobox1');
    fireEvent.click(combobox);
    const dropdown = combobox.querySelector('.ids-dropdown');

    expect(dropdown).not.toBeInTheDocument();
  });

  /* Options */

  test('It should render all options', () => {
    const options: ComboboxOption[] = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
    ];

    setup({ isOpen: true }, options);
    const combobox = screen.getByTestId('combobox1');
    const comboboxOptions = combobox.querySelectorAll('.ids-list-item');

    expect(comboboxOptions.length).toBe(options.length);
  });

  test('It should support react nodes', () => {
    const options: ComboboxOption[] = [
      { label: <span>1</span>, value: 1 },
      { label: <span>2</span>, value: 2 },
      { label: <span>3</span>, value: 3 },
      { label: <span>4</span>, value: 4 },
    ];

    setup({ isOpen: true }, options);
    const combobox = screen.getByTestId('combobox1');
    const comboboxOptions = combobox.querySelectorAll('.ids-list-item');

    expect(comboboxOptions.length).toBe(options.length);
  });

  test("It should put the option label in the header after it's clicked", () => {
    const options = [{ label: '1', value: 1 }];

    setup({ isOpen: true }, options);
    const combobox = screen.getByTestId('combobox1');
    const comboboxOptions = combobox.querySelectorAll('.ids-list-item');
    fireEvent.click(comboboxOptions[0]);
    const comboboxValue = combobox.querySelector('.ids-combobox-input');

    expect(comboboxValue).not.toHaveClass('ids-combobox-input--placeholder');
  });

  test("It should not put the option label in the header after it's clicked if the option is disabled", () => {
    const options = [{ label: '1', value: 1, disabled: true }];

    setup({ isOpen: true }, options);
    const combobox = screen.getByTestId('combobox1');
    const comboboxOptions = combobox.querySelectorAll('.ids-list-item');
    fireEvent.click(comboboxOptions[0]);
    const comboboxValue = combobox.querySelector('.ids-combobox-input');

    expect(comboboxValue).toHaveClass('ids-combobox-input--placeholder');
  });

  test('It should render a checkbox if set to multiple', () => {
    setup({ isOpen: true, multiple: true });
    const combobox = screen.getByTestId('combobox1');
    const comboboxCheckbox = combobox.querySelector('.ids-list-item__checkbox');

    expect(comboboxCheckbox).toBeInTheDocument();
  });

  test('It should render a search icon by default', () => {
    setup({ isOpen: true, search: true });
    const combobox = screen.getByTestId('combobox1');
    const comboboxCheckbox = combobox.querySelector('.ids-combobox-input__search-icon');

    expect(comboboxCheckbox).toBeInTheDocument();
  });

  test('It should render a search icon', () => {
    setup({ isOpen: true, search: true, showSearchIcon: true });
    const combobox = screen.getByTestId('combobox1');
    const comboboxCheckbox = combobox.querySelector('.ids-combobox-input__search-icon');

    expect(comboboxCheckbox).toBeInTheDocument();
  });

  test('It should not render a search icon', () => {
    setup({ isOpen: true, search: true, showSearchIcon: false });
    const combobox = screen.getByTestId('combobox1');
    const comboboxCheckbox = combobox.querySelector('.ids-combobox-input__search-icon');

    expect(comboboxCheckbox).not.toBeInTheDocument();
  });
});
