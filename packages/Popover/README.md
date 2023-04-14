# Popover

Popovers are small overlays that open on demand. They let users access additional content and actions without cluttering the page.

  <Example is="custom" />

  <ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/popover` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/popover
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/popover
```

## Usage

Then to use the component in your code just import it!

```jsx
import Popover from '@igloo-ui/popover';
import Hyperlink from '@igloo-ui/hyperlink';

<Popover
  title="Date"
  content="Popover copy"
  action={
    <Hyperlink>
      <a href="#">Tell me more</a>
    </Hyperlink>
  }
>
  Trigger content
</Popover>;
```
