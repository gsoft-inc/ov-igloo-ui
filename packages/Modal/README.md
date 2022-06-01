# Modal

The Modal is an interface component positioned over the page content to put emphasis on new elements. It blocks standard navigation, and requires an interaction from the user to be dismissed.

<ReferenceLinks />

## Installation

To install `@igloo-ui/modal` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/modal
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/modal
```

## Usage

Then to use the component in your code just import it!

```jsx
import Modal from '@igloo-ui/modal';
import Button from '@igloo-ui/button';

const [show, setShow] = useState(false);

<Button appearance="secondary" onClick={() => setShow(true)}>
  open modal
</Button>;

{
  show && (
    <Modal
      title={`Modal title`}
      isDismissable
      isClosable
      isOpen={show}
      closeBtnAriaLabel={`Close`}
      onClose={() => setShow(false)}
    >
      Modal content
    </Modal>
  );
}
```
