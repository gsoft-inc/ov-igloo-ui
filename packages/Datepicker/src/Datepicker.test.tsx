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

/** 
  * This function searches for the every react-aria SSR ids in a given HTMLElement node and replaces every attribute value with a static id 
  * 
  * This can be useful when you're trying to generate a snapshot of components using react-aria under the hood 
  */ 
function replaceReactAriaIds(container: HTMLElement) { 
  const selectors = ['id', 'for', 'aria-labelledby']; 
  const ariaSelector = (el: string) => `[${el}^="react-aria"]`; 
  const regexp = /react-aria.*/g;
  const staticId = 'react-aria-generated-id'; 
 
  /** 
   * keep a map of the replaceIds to keep the matching between input "id" and label "for" attributes 
   */ 
  const attributesMap: Record<string, string> = {}; 
 
  container.querySelectorAll(selectors.map(ariaSelector).join(', ')).forEach((el, index) => { 
    selectors.forEach((selector) => { 
      const attr = el.getAttribute(selector); 
 
      if (attr?.match(regexp)) { 
        const newAttr = `${staticId}-${index}`; 
 
        el.setAttribute(selector, attributesMap[attr] || newAttr); 
 
        attributesMap[attr] = newAttr; 
      } 
    }); 
  }); 
} 

function replaceAriaLabels(container: HTMLElement) {
  const selector = 'aria-label';
  const staticLabel = 'date-label';

  container.querySelectorAll(`tbody [${selector}]`).forEach((el) => {
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
    replaceReactAriaIds(container);
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
