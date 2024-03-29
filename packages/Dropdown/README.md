# Dropdown

Displays a sub-element overlaid and renders the content

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/dropdown` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/dropdown
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/dropdown
```

## Usage

Then to use the component in your code just import it!

```jsx
import Dropdown from '@igloo-ui/dropdown';
import Button from '@igloo-ui/button';

const [show, setShow] = React.useState(false);

function List() {
  const listItem = items.map((item, key) => (
    <li key={`list-item_${key}`}>{item}</li>
  ));
  return <ul>{listItem}</ul>;
}

<Dropdown isOpen={show} onClose={() => setShow(false)} content={<List />}>
  <Button appearance="secondary" size="small" onClick={() => setShow(!show)}>
    Settings
  </Button>
</Dropdown>;
```
