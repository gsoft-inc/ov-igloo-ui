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

Then to use the component in your code just import it!

```jsx
import Pager from '@igloo-ui/pager';

const [currentPage, setCurrentPage] = React.useState(1);
<Pager
  pageSize={5}
  totalCount={200}
  currentPage={currentPage}
  onPageChange={(page) => setCurrentPage(page)}
/>;
```
