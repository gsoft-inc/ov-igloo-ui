/**
  * @jest-environment jsdom
  */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import MockTooltip from '@igloo-ui/tooltip/src/__mocks__/Tooltip.mock';

import Stepper, {StepperProps} from './Stepper';

jest.mock('@igloo-ui/tooltip', () => ({
  __esModule: true,
  default: jest.fn(MockTooltip),
}));

const steps = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Step 3' },
];

const setup = (props: StepperProps = {
  steps: steps
 }) => {
  return render(
    <Stepper dataTest="ids-stepper" {...props} />
  );
};

describe('Stepper', () => {
   test('It should render without errors', () => {
    setup();
     const wrapper = screen.getByTestId('ids-stepper');
     expect(wrapper).toBeInTheDocument();
   });

   test('It should render a snapshot', () => {
     const {asFragment} = setup();
     expect(asFragment()).toMatchSnapshot();
   });

   test('Renders the correct number of steps', () => {
    const {container} = setup();
    const stepElements = container.querySelectorAll('.ids-step');
    expect(stepElements.length).toBe(steps.length);
  });

  test('Marks the current step as active', () => {
    const currentStep = 1;
    setup({steps: steps, currentStep: currentStep});
    const activeStep = screen.getByLabelText(steps[currentStep].title);
    expect(activeStep).toHaveClass('ids-step--current');
  });

  test('Calls the step onClick callback when a step is clicked', () => {
    const onStepChange = jest.fn();
    const stepsWithClicks = [
      { title: 'Step 1', onClick: onStepChange },
      { title: 'Step 2', onClick: onStepChange },
      { title: 'Step 3', onClick: onStepChange },
    ];
    const {container} = setup({steps: stepsWithClicks, currentStep: 2});
    const stepElements = container.querySelectorAll('.ids-step');
    fireEvent.click(stepElements[0]);
    expect(onStepChange).toHaveBeenCalledWith(0);
  });

  test('Disables steps after the current step if clickableNextSteps is false', () => {
    const currentStep = 1;
    const {container} = setup({steps: steps, currentStep: currentStep, clickableNextSteps: false});
    const stepElements = container.querySelectorAll('.ids-step');
    for (let i = currentStep + 1; i < stepElements.length; i++) {
      expect(stepElements[i]).toBeDisabled();
    }
  });

  test('Enables steps after the current step if clickableNextSteps is true', () => {
    const currentStep = 1;

    const {container} = setup({steps: steps, currentStep: currentStep, clickableNextSteps: true});
    const stepElements = container.querySelectorAll('.ids-step');
    for (let i = currentStep + 1; i < stepElements.length; i++) {
      expect(stepElements[i]).not.toBeDisabled();
    }
  });
});
