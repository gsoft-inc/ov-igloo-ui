# Breadcrumb

Breadcrumbs allow users to orient themselves in the hierarchy of the app. It also provides a way to navigate to the parent page.

<Example />

<ReferenceLinks />

## Installation

To install `@igloo-ui/breadcrumb` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/breadcrumb
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/breadcrumb
```

## Usage

Then to use the component in your code just import it!

```jsx
import Breadcrumb from '@igloo-ui/breadcrumb';

<Breadcrumb
  items={[
    {
      label: 'Home',
      link: '#',
    },
    {
      label: 'Career',
      link: '#',
    },
    {
      label: 'Developer',
    },
  ]}
/>;
```
