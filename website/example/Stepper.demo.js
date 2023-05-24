import React from 'react';
import Button from '@igloo-ui/button';
import Stepper from '@igloo-ui/stepper';

const Example = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
const exampleSteps = [
  { title: 'Step 1', onClick: (index) => setCurrentStep(index) },
  { title: 'Step 2', onClick: (index) => setCurrentStep(index) },
  { title: 'Step 3', onClick: (index) => setCurrentStep(index) },
];

  return (
    <div className="example ex-stepper-wrapper">
      <Stepper
        currentStep={currentStep}
        style={{ flex: '1 1 auto' }}
        steps={exampleSteps}
        className="ex-stepper"
      />
      <Button
        onClick={() => setCurrentStep((prevCurrentStep) => prevCurrentStep + 1)}
        disabled={currentStep === exampleSteps.length - 1}
        className="ex-stepper-button"
      >
        Continue
      </Button>
    </div>
  );
};

export default Example;
