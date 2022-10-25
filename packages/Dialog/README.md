# Dialog

The Dialog is much like the Modal component, except it is simpler. It contains a title, sub title, dismiss action and a validate action.

<Example />

<ReferenceLinks />

## Installation

To install `@igloo-ui/dialog` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/dialog
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/dialog
```

## Usage

Then to use the component in your code just import it!

```jsx
import Dialog from '@igloo-ui/dialog';
import Button from '@igloo-ui/button';

const [open, setOpen] = React.useState(false);
const handleValidate = () => {
    alert("You said yes");
    setOpen(false);
};

<Button appearance="secondary" onClick={() => setOpen(true)}>
    open
</Button>
<Dialog
    title="Dialog title"
    subTitle="This is a sub title"
    dismissText="Cancel"
    validateText="Confirm"
    isOpen={open}
    onDismiss={() => setOpen(false)}
    onValidate={handleValidate}
/>
```
