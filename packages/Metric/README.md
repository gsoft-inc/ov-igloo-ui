# Metric

A metric component is a button that visually represents a specific metric or measurement. It provides a concise and interactive way for users to access important information or track key performance indicators.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/metric` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/metric
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/metric
```

## Usage

Then to use the component in your code just import it!

```jsx
import Metric from '@igloo-ui/metric';
import Wellness from '@igloo-ui/icons/dist/Wellness';

const [selected, setSelected] = React.useState(false);
const handleOnPress = () => {
  setSelected(!selected);
};

<Metric
  value={20}
  variation={3}
  label="Metric Name"
  icon={<Wellness size="medium" />}
  onPress={handleOnPress}
  appearance={selected ? 'selected' : 'positive'}
/>;
```
