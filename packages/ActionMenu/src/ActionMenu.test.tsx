/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import MockDropdown from '@igloo-ui/dropdown/src/__mocks__/Dropdown.mock';
import ActionMenu, { ActionMenuOption } from './ActionMenu';

const textOnlyList: ActionMenuOption[] = [
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

const setup = (props = { options: textOnlyList }) => {
  return render(
    <ActionMenu dataTest="ids-action-menu" {...props}>
      Hello world
    </ActionMenu>
  );
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
});
