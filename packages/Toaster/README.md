# @igloo-ui/Toaster

Welcome to my `Toaster` component.

## Installation

```sh
npm i @igloo-ui/Toaster
# or with yarn
yarn add @igloo-ui/Toaster
```

Then to use the component in your code just import it!

```js
import Toaster, { toaster } from '@igloo-ui/Toaster';
// and with css-modules
import '@igloo-ui/Toaster/dist/toaster.css';
```

### Getting Started

The Toaster component is a non-disruptive message that appears at the top of the interface to provide quick, at-a-glance feedback on the outcome of an action.

```jsx
import Toaster, { toaster } from '@igloo-ui/Toaster';

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
