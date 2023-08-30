/**
  * @jest-environment jsdom
*/
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import MockDropdown from '@igloo-ui/dropdown/src/__mocks__/Dropdown.mock';

import ColorPicker, { ColorName, ColorPickerProps, colorNames } from './ColorPicker';

jest.mock('@igloo-ui/dropdown', () => ({
  __esModule: true,
  default: jest.fn(MockDropdown),
}));

const setup = (props: Partial<ColorPickerProps> = {}) => {
  const defaultProps: ColorPickerProps = {
    dataTest: 'ids-color-picker',
  };
  return render(<ColorPicker {...defaultProps} {...props} />);
};

describe('ColorPicker', () => {
  test('It should render without errors', () => {
  setup();
    const wrapper = screen.getByTestId('ids-color-picker');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const {asFragment} = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should show the color picker options when clicked', () => {
    setup();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(colorNames.length);
  });

  test('It should call the onSelect callback and update the selected item when a color is selected', async () => {
    let selectedColor = 'dandelion200' as ColorName;
    const onSelect = jest.fn((color: ColorName) => {
      selectedColor = color;
    });
    const {rerender} = setup({ selectedColor: selectedColor, onSelect });
    const button = screen.getByRole('button');
    await userEvent.click(button);
    const option = screen.getAllByRole('option')[2];

    await userEvent.click(option);
    expect(onSelect).toHaveBeenCalledWith("creamsicle150");
    rerender(<ColorPicker onSelect={onSelect} selectedColor={selectedColor} />);
    expect(button).toHaveAttribute("data-color", "creamsicle150");
  });

  test('It should not show the color picker options when disabled', () => {
    setup({ disabled: true });
    const button = screen.getByRole('button');
    userEvent.click(button);
    const options = screen.queryAllByRole('option');
    expect(options.length).toBe(0);
  });
});
