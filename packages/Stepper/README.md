# Stepper

The Stepper component provides a visual representation of a multi-step process.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/stepper` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/stepper
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/stepper
```

## Usage

Then to use the component in your code just import it!

```jsx
import Button from '@igloo-ui/button';
import Stepper from '@igloo-ui/stepper';

const [currentStep, setCurrentStep] = React.useState(0);
const exampleSteps = [
  { title: 'Step 1', onClick: (index) => setCurrentStep(index) },
  { title: 'Step 2', onClick: (index) => setCurrentStep(index) },
  { title: 'Step 3', onClick: (index) => setCurrentStep(index) },
];

<Stepper
  currentStep={currentStep}
  style={{ flex: '1 1 auto' }}
  steps={exampleSteps}
/>
<Button
  onClick={() => setCurrentStep((prevCurrentStep) => prevCurrentStep + 1)}
  disabled={currentStep === exampleSteps.length - 1}
>
  Continue
</Button>;
```
