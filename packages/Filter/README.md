# Filter

The filter component is a button that is used to filter the items of a list or table.

<Example is="custom" />
<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/filter` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/filter
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/filter
```

## Usage

Then to use the component in your code just import it!

```jsx
import Filter from '@igloo-ui/filter';

<Filter
  onClick={() => {
    setSelected(!selected);
    alert('Filter was clicked');
  }}
  selected={selected}
>
  Assigned to me (5)
</Filter>;
```
