# Carousel

A carousel allows users to see and navigate the steps within a flow.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/carousel` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/carousel
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/carousel
```

## Usage

Then to use the component in your code just import it!

```jsx
import Button from '@igloo-ui/button';
import Carousel from '@igloo-ui/carousel';

const SLIDE_NUM = 3;
const [selected, setSelected] = React.useState(0);
const [secondaryActionText, setSecondaryActionText] = React.useState('Cancel');
const [primaryActionText, setPrimaryActionText] = React.useState('Next');

const handlePageChange = (index) => {
  if (index < SLIDE_NUM - 1) {
    setPrimaryActionText('Next');
  } else {
    setPrimaryActionText('Done');
  }
  if (index > 0) {
    setSecondaryActionText('Prev');
  } else {
    setSecondaryActionText('Cancel');
  }
  setSelected(index);
};

const handlePrimaryActionClick = () => {
  if (selected < SLIDE_NUM - 1) {
    handlePageChange(selected + 1);
  }
};

const handleSecondaryActionClick = () => {
  if (selected > 0) {
    handlePageChange(selected - 1);
  }
};

<Carousel
  onPageChange={handlePageChange}
  currentSlide={selected}
  primaryAction={
    <Button appearance={'primary'} onClick={handlePrimaryActionClick}>
      {primaryActionText}
    </Button>
  }
  secondaryAction={
    <Button appearance={'ghost'} onClick={handleSecondaryActionClick}>
      {secondaryActionText}
    </Button>
  }
>
  <div style={{ background: 'pink', padding: '4rem' }}>Slide 1</div>
  <div style={{ background: 'lightBlue', padding: '4rem' }}>Slide 2</div>
  <div style={{ background: 'lightGreen', padding: '4rem' }}>Slide 3</div>
</Carousel>;
```
