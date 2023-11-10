import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import Button from '@igloo-ui/button';

import readme from '../README.md';

import Stepper, {Step} from './Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    }
  }
} as Meta<typeof Stepper>;

type Story = StoryObj<typeof Stepper>;

const Template: StoryFn<typeof Stepper> = (args) => {
  const [currentStep, setCurrentStep] = React.useState(args.currentStep || 0);
  const exampleSteps: Step[] = [
    {title: 'Step 1', onClick: (index) => setCurrentStep(index)},
    {title: 'Step 2', onClick: (index) => setCurrentStep(index)},
    {title: 'Step 3', onClick: (index) => setCurrentStep(index)},
  ];

  return (<>
    Current Step: {exampleSteps[currentStep].title}
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Stepper
        {...args}
        currentStep={currentStep}
        style={{flex: '1 1 auto'}}
        steps={exampleSteps}
      />
      <Button onClick={() => setCurrentStep(prevCurrentStep => prevCurrentStep+1)} disabled={currentStep === exampleSteps.length-1}>Continue</Button>
    </div>
  </>);
};

export const Overview: Story = {
  render: Template
};

export const ClickableNextSteps: Story = {
  render: Template,
  args: {
    clickableNextSteps: true,
    currentStep: 1
  },
};