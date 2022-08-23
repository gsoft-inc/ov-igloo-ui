# Tabs

Use to alternate among related views within the same context.

<Example />

<ReferenceLinks />

## Installation

To install `@igloo-ui/tabs` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/tabs
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/tabs
```

## Usage

Then to use the component in your code just import it!

```jsx
import Tabs, { TabPane } from '@igloo-ui/tabs';

<Tabs
  defaultIndex={1}
  tabs={[
    {
      label: 'Premium Tab',
      premium: true,
      children: 'Content of premium tab',
    },
    {
      label: 'Notification Tab',
      notification: true,
      children: 'Content of notification tab',
    },
    {
      label: 'Premium Notification Tab',
      notification: true,
      premium: true,
      children: 'Content of premium notification tab',
    },
  ]}
/>;
```
