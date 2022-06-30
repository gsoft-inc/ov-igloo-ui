# Toaster

The Toaster component is a non-disruptive message that appears at the top of the viewport to provide quick, at-a-glance feedback on the outcome of an action.

<Example />

<ReferenceLinks />

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

Then to use the component in your code just import it!

```jsx
import Toaster, { toaster } from '@igloo-ui/toaster';

const notify = () => toaster.success('Here is your toast.');

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
```
