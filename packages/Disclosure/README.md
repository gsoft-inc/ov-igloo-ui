# Disclosure

A disclosure is a widget that toggles the visibility of content by clicking a button.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/disclosure` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/disclosure
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/disclosure
```

## Usage

Then to use the component in your code just import it!

```jsx
import Substract from '@igloo-ui/icons/dist/Substract';

import Disclosure from '@igloo-ui/disclosure';

<Disclosure
  title="Diversity"
  icon={<Substract size="large" />}
  description="0.8pt in the last 30 days"
>
  <div style={{ background: '#F7F9FA', padding: '2.4rem' }}>
    Our organization values diversity.
  </div>
</Disclosure>;
```
