# Toaster

The Toaster component is a non-disruptive message that appears at the top of the viewport to provide quick, at-a-glance feedback on the outcome of an action.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/toaster` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/toaster
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/toaster
```

## Usage

### Displaying a toast

Then to use the component in your code just import it!

```jsx
import Toaster, { toast } from '@igloo-ui/toaster';
import Button from '@igloo-ui/button';

const App = () => {
  return (
    <div>
      <Button onClick={() => toast.success('Successfully toasted!')}>
        Success
      </Button>

      <Toaster />
    </div>
  );
};
```

### Displaying multiple toasts

Then to use the component in your code just import it!

```jsx
import Toaster, { toast } from '@igloo-ui/toaster';
import Button from '@igloo-ui/button';

const App = () => {
  return (
    <div>
      <Button onClick={() => toast.success('Successfully toasted!')}>
        Success
      </Button>
      <Button
        appearance="secondary"
        onClick={() => toast.error("This didn't work!")}
      >
        Error
      </Button>

      <Toaster />
    </div>
  );
};
```
