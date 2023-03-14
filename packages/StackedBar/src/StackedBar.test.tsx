/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ResponsiveContainerProps } from 'recharts';
import MockTooltip from '@igloo-ui/tooltip/src/__mocks__/Tooltip.mock';

import StackedBar from './StackedBar';

const label = 'Strongly Unfavorable';
const dataSet = [
  {
    key: 'stronglyUnfavorable',
    label: label,
    value: 30,
    strength: -2,
  },
];

const setup = (props = {}) => {
  return render(<StackedBar dataTest="ids-stacked-bar" {...props} />);
};

jest.mock('@igloo-ui/tooltip', () => ({
  __esModule: true,
  default: jest.fn(MockTooltip),
}));

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');

  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: ResponsiveContainerProps) => (
      <OriginalModule.ResponsiveContainer width={600} aspect={1}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe('StackedBar', () => {
  test('It should render without errors', () => {
    setup();
    const wrapper = screen.getByTestId('ids-stacked-bar');
    const chart = screen.getByRole('region');
    expect(wrapper).toBeInTheDocument();
    expect(chart).toBeInTheDocument();
  });

  test('It should render a snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a medium size by default', () => {
    setup();
    const wrapper = screen.getByTestId('ids-stacked-bar');
    expect(wrapper).toHaveClass('ids-stacked-bar--medium');
  });

  test('It should render a medium size', () => {
    setup({ size: 'medium' });
    const wrapper = screen.getByTestId('ids-stacked-bar');
    expect(wrapper).toHaveClass('ids-stacked-bar--medium');
  });

  test('It should render a small size', () => {
    setup({ size: 'small' });
    const wrapper = screen.getByTestId('ids-stacked-bar');
    expect(wrapper).toHaveClass('ids-stacked-bar--small');
  });

  test('It should render a no data tooltip', () => {
    const message = 'No data';
    const { container } = setup({ noDataMessage: message });
    const tooltip = container.querySelector(
      '.ids-stacked-bar-tooltip__container'
    );
    if (tooltip) {
      fireEvent.click(tooltip);
    }
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test('It should render a tooltip with data', () => {
    const { container } = setup({ dataSet: dataSet });
    const tooltip = container.querySelector(
      '.ids-stacked-bar-tooltip__container'
    );
    if (tooltip) {
      fireEvent.click(tooltip);
    }
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('It should render a tooltip with a custom format', () => {
    const { container } = setup({
      dataSet: dataSet,
      formatValue: (value: number) => {
        return `${value} units`;
      },
    });
    const tooltip = container.querySelector(
      '.ids-stacked-bar-tooltip__container'
    );
    if (tooltip) {
      fireEvent.click(tooltip);
    }
    expect(screen.getByText('30 units')).toBeInTheDocument();
  });

  test('It should add a class for strength', () => {
    const { container } = setup({
      dataSet: dataSet,
      formatValue: (value: number) => {
        return `${value} units`;
      },
    });
    const bar = container.querySelector('.ids-stacked-bar__bar');

    expect(bar).toHaveClass('ids-stacked-bar__bar--strength--2');
  });
});
