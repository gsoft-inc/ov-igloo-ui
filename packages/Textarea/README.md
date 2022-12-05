# Textarea

The textarea component defines a multi-line text input control.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/textarea` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/textarea
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/textarea
```

## Usage

Then to use the component in your code just import it!

```jsx
import Textarea from '@igloo-ui/textarea';

<Textarea
  placeholder="The character count will count down to show how many characters are left. MaxLength is required"
  maxLength={1000}
  showCharactersIndicator
/>;
```
