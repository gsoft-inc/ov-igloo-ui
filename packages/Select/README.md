# Select

Select inputs let users choose one option from an options menu.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/select` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/select
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/select
```

## Usage

Then to use the component in your code just import it!

```jsx
import Select from '@igloo-ui/select';

<Select
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
>
  Place holder
</Select>;
```
