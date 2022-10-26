# Datepicker

Date pickers let users choose dates from a visual calendar that’s consistently applied wherever dates need to be selected.

<Example />

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

const [showDatepicker, setShowDatepicker] = useState(false);
const [date, setDate] = useState('2022-09-30T00:00:00Z');

useEffect(() => {
  setShowDatepicker(false);
}, [date]);

const formatedDate = new Date('2022-09-30T00:00:00Z').toLocaleDateString();

<Datepicker
  ariaLabel="Event date"
  placeholder="Select date"
  selectedDay={date}
  value={formatedDate}
  isOpen={showDatepicker}
  onClose={() => setShowDatepicker(false)}
  onChange={(date) => setDate(date.utc)}
  onFocus={() => setShowDatepicker(!showDatepicker)}
/>;
```
