# Datepicker

Date pickers let users choose dates from a visual calendar that’s consistently applied wherever dates need to be selected across Officevibe.

<ReferenceLinks />

## Installation

To install `@igloo-ui/datepicker` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/datepicker
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/datepicker
```

## Usage

Then to use the component in your code just import it!

```jsx
import Datepicker from '@igloo-ui/datepicker';
const [date, setDate] = useState('2022-09-30T00:00:00Z');

const handleChange = (date) => {
  setDate(date.utc);
};

<Datepicker selectedDay={date} onChange={handleChange} />;
```
