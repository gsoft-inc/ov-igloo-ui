/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';
import MockDropdown from '@igloo-ui/dropdown/src/__mocks__/Dropdown.mock';

import Datepicker from './Datepicker';

jest.mock('@igloo-ui/dropdown', () => ({
  __esModule: true,
  default: jest.fn(MockDropdown),
}));

jest.mock('@react-aria/ssr/dist/main', () => ({
  ...jest.requireActual('@react-aria/ssr/dist/main'),
  useSSRSafeId: () => 'react-aria-generated-id',
}));

function replaceAriaLabels(container: HTMLElement) {
  const selector = 'aria-label';
  const staticLabel = 'date-label';

  container.querySelectorAll(`tbody [${selector}]`).forEach((el, index) => {
    const newAttr = `${staticLabel}`;

    el.setAttribute(selector, newAttr);
  });
}

const DATE = DateTime.fromISO('2023-03-13');

const setup = (props = {}) => {
  return render(<Datepicker dataTest="datepicker1" {...props} />);
};

describe('Datapicker', () => {
  test('It should render without errors', () => {
    setup({ isOpen: true });
    const wrapper = screen.getByTestId('datepicker1');
    expect(wrapper).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { container } = setup({
      isOpen: true,
      selectedDay: DATE.toString(),
      highlightToday: false,
    });
    replaceAriaLabels(container);
    expect(container).toMatchSnapshot();
  });

  test('It should render a disabled state', () => {
    setup({ disabled: true });
    const input = screen.getByRole('textbox');
    expect(input).toHaveProperty('readOnly', true);
  });

  test('It should render an error state', () => {
    setup({ error: true });
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('ids-input--error');
  });

  test("It should select today's date", () => {
    let updatedDate = '';

    const handleChange = (date: { utc: string } | null) => {
      if (date) {
        updatedDate = DateTime.fromISO(date.utc).toLocaleString();
      }
    };
    const { container } = setup({ isOpen: true, onChange: handleChange });
    const todayCell = container.querySelector(
      '.ids-datepicker__content--today'
    );

    if (todayCell) {
      fireEvent.click(todayCell);
    }

    expect(updatedDate).toEqual(DateTime.now().toLocaleString());
  });

  test('It should clear the date', () => {
    let updatedDate = '';

    const handleChange = (date: { utc: string } | null) => {
      if (date) {
        updatedDate = DateTime.fromISO(date.utc).toLocaleString();
      } else {
        updatedDate = '';
      }
    };
    const { container } = setup({
      isOpen: true,
      onChange: handleChange,
      clearLabel: 'Clear',
      isClearable: true,
    });

    const todayCell = container.querySelector(
      '.ids-datepicker__content--today'
    );

    if (todayCell) {
      fireEvent.click(todayCell);
    }

    expect(updatedDate).toEqual(DateTime.now().toLocaleString());

    const clearButton = screen.getByText('Clear');

    if (clearButton) {
      fireEvent.click(clearButton);
    }

    expect(updatedDate).toEqual('');
  });
});
