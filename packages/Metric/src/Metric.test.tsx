/**
  * @jest-environment jsdom
  */
 import React from 'react';
 import { fireEvent, render, screen } from '@testing-library/react';
 import MockTooltip from '@igloo-ui/tooltip/src/__mocks__/Tooltip.mock';

 import Metric, {MetricProps} from './Metric';

 jest.mock('@igloo-ui/tooltip', () => ({
  __esModule: true,
  default: jest.fn(MockTooltip),
}));

const mockPropsEmpty: MetricProps = {
  className: 'test-class',
  label: 'Test Metric',
  tooltip: 'Tooltip text',
  type: 'score',
};

const mockPropsEmptyFluctuate: MetricProps = {
  className: 'test-class',
  label: 'Test Metric',
  tooltip: 'Tooltip text',
  type: 'fluctuate',
};

 const mockPropsPositive: MetricProps = {
  appearance: 'positive',
  className: 'test-class',
  icon: <div>Icon</div>,
  label: 'Test Metric',
  tooltip: 'Tooltip text',
  type: 'score',
  value: 10,
  variation: 1,
};

const mockPropsNegative: MetricProps = {
  appearance: 'negative',
  className: 'test-class',
  icon: <div>Icon</div>,
  label: 'Test Metric',
  tooltip: 'Tooltip text',
  type: 'score',
  value: 10,
  variation: -6,
};

const mockPropsSelected: MetricProps = {
  appearance: 'selected',
  className: 'test-class',
  icon: <div>Icon</div>,
  label: 'Test Metric',
  tooltip: 'Tooltip text',
  type: 'score',
  value: 10,
  variation: -5,
};

const mockPropsSubMetric: MetricProps = {
  className: 'test-class',
  label: 'Test Metric',
  tooltip: 'Tooltip text',
  type: 'subMetric',
  value: 10,
  variation: 5,
};

 const setup = (props: MetricProps = mockPropsPositive) => {
  return render(
    <Metric dataTest="ids-metric" {...props} />
  );
};

 describe('Metric', () => {
   test('should render without errors', () => {
    setup();
     const wrapper = screen.getByTestId('ids-metric');
     expect(wrapper).toBeInTheDocument();
     expect(wrapper).toHaveClass('ids-metric');
   });

   test('should render a snapshot', () => {
     const {asFragment} = setup();
     expect(asFragment()).toMatchSnapshot();
   });

   test('should render the label', () => {
    setup();
    
    const labelElement = screen.getByText('Test Metric');
    expect(labelElement).toBeInTheDocument();
  });

  test('should render the custom label', () => {
    setup({ ...mockPropsPositive, label: 'Custom Label' });
    
    const labelElement = screen.getByText('Custom Label');
    expect(labelElement).toBeInTheDocument();
  });

  test('should render the tooltip', () => {
    const {container} = setup();
    
    const trigger = container.querySelector('.ids-metric__status--tooltip .ids-tooltip__container');
    expect(trigger).toBeInTheDocument();
    if (trigger) {
      fireEvent.click(trigger);
    }
    const tooltipElement = screen.getByText('Tooltip text');
    expect(tooltipElement).toBeInTheDocument();
  });

  /* Score */

  test('should render the value', () => {
    setup();
    
    const valueElement = screen.getByText('10.0');
    expect(valueElement).toBeInTheDocument();
    expect(valueElement).toHaveClass('ids-metric__score');
  });

  /* Variation */

  test('should render the variation', () => {
    setup();
    
    const variationElement = screen.getByText('1');
    const postfix = variationElement.querySelector('.ids-score__postfix');
    expect(postfix).toHaveTextContent('pt');
    expect(variationElement).toBeInTheDocument();
    expect(variationElement).toHaveClass('ids-score--variation');
    expect(variationElement).toContainElement(variationElement.querySelector('.ids-score__arrow--positive'));
  });

  test('should render a negative variation', () => {
    setup(mockPropsNegative);
    
    const variationElement = screen.getByText('6');
    expect(variationElement).toBeInTheDocument();
    expect(variationElement).toHaveClass('ids-score--variation');
    expect(variationElement).toHaveClass('ids-score--negative');
    expect(variationElement).toContainElement(variationElement.querySelector('.ids-score__arrow--negative'));
  });

  /* Empty */

  test('should not render a variation when empty', () => {
    const { container } = setup(mockPropsEmpty);
    
    const variationElement = screen.getByText('0.0');
    expect(variationElement).toBeInTheDocument();
    const variationContainer = container.querySelector('.ids-score--variation');
    expect(variationContainer).not.toBeInTheDocument();
  });
  
  test('when type fluctuate, it should render the variation with a decimal and pts', () => {
    setup(mockPropsEmptyFluctuate);
    
    const variationElement = screen.getByText('0.0');
    expect(variationElement).toBeInTheDocument();
    expect(variationElement).toHaveClass('ids-score--variation');
    const arrow = variationElement.querySelector('.ids-score__arrow');
    expect(arrow).not.toBeInTheDocument();
    const postfix = screen.getByText('pts');
    expect(postfix).toBeInTheDocument();
  });

  /* Selected */

  test('should render the selected appearance', () => {
    setup(mockPropsSelected);
    
    const wrapper = screen.getByTestId('ids-metric');
    expect(wrapper).toHaveClass('ids-metric--selected');
    const status = wrapper.querySelector('.ids-metric__status');
    expect(status).toBeInTheDocument();
    expect(status).not.toHaveClass('ids-metric__status--tooltip');
    expect(status).toContainElement(wrapper.querySelector('.ids-metric__checkmark'));
  });

  /* Sub Metric */

  test('should render the subMetric type', () => {
    setup(mockPropsSubMetric);
    
    const wrapper = screen.getByTestId('ids-metric');
    expect(wrapper).toHaveClass('ids-metric--subMetric');
  });

});
