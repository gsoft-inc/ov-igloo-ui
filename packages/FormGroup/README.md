# FormGroup

The FormGroup is a component that displays a label and an error message for a form input.

<Example />

<ReferenceLinks />

## Installation

To install `@igloo-ui/form-group` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/form-group
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/form-group
```

## Usage

Then to use the component in your code just import it!

```jsx
import FormGroup from '@igloo-ui/form-group';
import Input from '@igloo-ui/input';

<FormGroup label="Name" errorMsg="Name is required" showError={true}>
  <Input type="text" placeholder="John Doe" error={true} />
</FormGroup>;
```
