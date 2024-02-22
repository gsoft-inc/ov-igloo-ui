# Pager

Pagers allow users to navigate through items of the same table or list.

<Example is="custom" />
<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/pager` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/pager
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/pager
```

## Usage

Then to use the component in your code, import it.
It also requires the Provider package from Igloo to receive the correct locale.
This should be wrapped around the entire application.

```jsx
import Pager from '@igloo-ui/pager';

const [currentPage, setCurrentPage] = React.useState(1);

  <Pager
    pageSize={5}
    totalCount={200}
    currentPage={currentPage}
    onPageChange={(page) => setCurrentPage(page)}
  />
```


## Internationalization

The Pager component uses the [`@igloo-ui/provider`](https://igloo.officevibe.design/component/Provider) package to receive the correct locale. This should be wrapped around the entire application.

```jsx
import IglooProvider from '@igloo-ui/provider';

<IglooProvider locale="fr-CA">
  <Pager
    pageSize={5}
    totalCount={200}
    currentPage={currentPage}
    onPageChange={(page) => setCurrentPage(page)}
  />
</IglooProvider>
```
