/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MockDropdown from '@igloo-ui/dropdown/src/__mocks__/Dropdown.mock';
import Button from '@igloo-ui/button';
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
  isOpen: true,
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
    const { asFragment } = setup();
    const wrapper = screen.getByTestId('ids-action-menu');
    expect(wrapper).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It renders an option', () => {
    setup();
    const listItem = screen.getByText('Add Item');
    expect(listItem).toBeInTheDocument();
  });

  test('It calls the onClick of the option', () => {
    let selected = false;
    setup({
      ...actionMenuProps, options: [
        {
          label: 'Add Item',
          value: 'add',
          onClick: () => {
            selected = true;
          }
        },
      ]
    });
    const listItem = screen.getByText('Add Item');
    if (listItem) {
      fireEvent.click(listItem);
    }
    expect(selected).toBeTruthy();
  });
});
