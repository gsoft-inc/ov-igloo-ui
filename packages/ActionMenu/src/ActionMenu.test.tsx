/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MockDropdown from '@igloo-ui/dropdown/src/__mocks__/Dropdown.mock';
import Button from '@igloo-ui/button';
import { OptionType } from '@igloo-ui/list';
import ActionMenu, { ActionMenuOption, ActionMenuProps } from './ActionMenu';

const actionMenuList: ActionMenuOption[] = [
  {
    label: 'Add Item',
    value: 'add',
  },
  {
    label: 'Delete Item',
    value: 'delete',
    disabled: true,
  },
  {
    label: 'Copy Item',
    value: 'copy',
  },
];

const actionMenuProps: ActionMenuProps = {
  dataTest: 'ids-action-menu',
  options: actionMenuList,
  renderReference: (refProps: any) => {
    return (
      <Button appearance="secondary" {...refProps}>
        Button
      </Button>
    );
  },
};

const setup = (props = actionMenuProps) => {
  return render(<ActionMenu {...props} />);
};

jest.mock('@igloo-ui/dropdown', () => ({
  __esModule: true,
  default: jest.fn(MockDropdown),
}));

describe('ActionMenu', () => {
  test('It should render without errors and a snapshot', () => {
    const { baseElement } = setup();
    const wrapper = screen.getByTestId('ids-action-menu');
    expect(wrapper).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('It renders an option', () => {
    setup();
    const listItem = screen.getByText('Add Item');
    expect(listItem).toBeInTheDocument();
  });

  test('It calls onOptionSelect', () => {
    let selected = false;
    setup({
      onOptionSelect: (option: OptionType) => {
        if (option.value === 'add') {
          selected = true;
        }
      },
      ...actionMenuProps,
    });
    const listItem = screen.getByText('Add Item');
    if (listItem) {
      fireEvent.click(listItem);
    }
    expect(selected).toBeTruthy();
  });
});
