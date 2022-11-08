import * as React from 'react';
import cx from 'classnames';

import Dropdown from '@igloo-ui/dropdown';
import Input from '@igloo-ui/input';
import IconCalendar from '@igloo-ui/icons/dist/Calendar';

import {
  getLocalTimeZone,
  now,
  parseAbsoluteToLocal,
  ZonedDateTime,
} from '@internationalized/date';

import Calendar from './components/Calendar';

import './datepicker.scss';

type Date = { utc: string; local: string };

export interface DatepickerProps {
  /** Selected value for the date picker. */
  selectedDay?: string;
  /** Specifies the value inside the input. */
  value?: string;
  /** Text that appears in the form control when it has no value set. */
  placeholder?: string;
  /** Defines a string value that labels the current element. */
  ariaLabel?: string;
  /** True if the date picker should be disabled. */
  disabled?: boolean;
  /** Form.ValidatedField state. True if it as an error. */
  error?: boolean;
  /** True if the Dropdown list is displayed. */
  isOpen?: boolean;
  /** Callback function that will be called when the user types something. */
  onChange?: (date: Date | null) => void;
  /** Callback when the user clicks outside the Dropdown. */
  onClose?: () => void;
  /** Function called when the element receives focus. */
  onFocus?: () => void;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
}

const Datepicker: React.FunctionComponent<DatepickerProps> = (
  props: DatepickerProps
) => {
  const {
    selectedDay,
    value,
    placeholder,
    ariaLabel,
    disabled = false,
    isOpen = false,
    error = false,
    onChange,
    onClose,
    onFocus,
    dataTest,
    ...rest
  } = props;

  // const [inputValue, setInputValue] = React.useState(value);
  //
  // React.useEffect(() => {
  //   setInputValue(value);
  // }, [value]);

  // the calendar receives an utc date and formats it locally
  const formattedDate = selectedDay
    ? parseAbsoluteToLocal(selectedDay)
    : undefined;

  const dateTimeOfDay = now(getLocalTimeZone());

  const handleChange = (date: { year: number; month: number; day: number }) => {
    const { year, month, day } = date;
    const { hour, minute, second, millisecond, offset, timeZone } =
      dateTimeOfDay;

    const local = new ZonedDateTime(
      year,
      month,
      day,
      timeZone,
      offset,
      minute,
      hour,
      second,
      millisecond
    );

    // the calendar return an object with utc and local
    if (onChange) {
      onChange({
        utc: local.toAbsoluteString(),
        local: local.toString(),
      });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '' && onChange) {
      onChange(null);
    }
  };

  const classes = cx('ids-datepicker', {
    'ids-datepicker--disabled': disabled,
  });

  const calendar = (
    <Calendar
      aria-label={ariaLabel}
      className={classes}
      value={formattedDate}
      onChange={handleChange}
      isDisabled={disabled}
    />
  );

  return (
    <Dropdown
      isOpen={!disabled && isOpen}
      onClose={onClose}
      content={calendar}
      position="bottom"
      size="medium"
      dataTest={dataTest}
      {...rest}
    >
      <Input
        type="text"
        disabled={disabled}
        error={error}
        value={value}
        placeholder={placeholder}
        prefixIcon={<IconCalendar />}
        onChange={handleInputChange}
        onFocus={onFocus}
      />
    </Dropdown>
  );
};

export default Datepicker;
