# Provider

Provider allows you to set the locale for all Igloo components that need it. This should be done by wrapping the entire application in the provider. There are also hooks available such as useLocale and useLocalizedStringFormatter.

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/provider` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/provider
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/provider
```

## Usage

Then to use the component in your code just import it!

```jsx
import IglooProvider from '@igloo-ui/provider';

<IglooProvider locale="en-US">
    const { locale } = useLocale();

    <div>Here is the current locale: {locale}</div>;
</IglooProvider>
```
