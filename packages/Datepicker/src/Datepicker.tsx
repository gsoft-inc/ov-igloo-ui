import * as React from 'react';
import cx from 'classnames';

import Dropdown from '@igloo-ui/dropdown';
import Input from '@igloo-ui/input';
import Button from '@igloo-ui/button';
import IconCalendar from '@igloo-ui/icons/dist/Calendar';

import {
  getLocalTimeZone,
  isWeekend,
  now,
  parseAbsoluteToLocal,
  ZonedDateTime,
} from '@internationalized/date';
import { DateValue } from '@react-types/calendar';

import Calendar from './components/Calendar';

import './datepicker.scss';

type Date = { utc: string; local: string };

export interface DatepickerProps {
  /** Selected value for the date picker.
   * These props represent the local date of the user
   * */
  selectedDay?: string;
  /** Specifies the value inside the input. */
  value?: string;
  /** Text that appears in the form control when it has no value set. */
  placeholder?: string;
  /** Defines a string value that labels the current element. */
  ariaLabel?: string;
  /** True if the date picker should be disabled. */
  disabled?: boolean;
  /** Form.ValidatedField state. True if it has an error. */
  error?: boolean;
  /** True if the Dropdown list is displayed. */
  isOpen?: boolean;
  /** Callback function that will be called when the user types something. */
  onChange?: (date: Date | null) => void;
  /** Callback when the user clicks outside the Dropdown. */
  onClose?: () => void;
  /** Function called when the element receives focus. */
  onFocus?: () => void;
  /** Callback when they clear the date */
  onClear?: () => void;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** True if the control's value can be cleared. */
  isClearable?: boolean;
  /** Label for the clear button. Required if clearable is set to True */
  clearLabel?: string;
  /** Highlights today's date if true */
  highlightToday?: boolean;
  /** Disabled weekend date */
  weekendUnavailable?: boolean;
  /** The minimum allowed date that a user may select */
  minDate?: string;
  /** The maximum allowed date that a user may select */
  maxDate?: string;
}

const Datepicker: React.FunctionComponent<DatepickerProps> = ({
  selectedDay,
  value,
  minDate,
  maxDate,
  placeholder,
  ariaLabel,
  disabled = false,
  isOpen = false,
  error = false,
  isClearable = false,
  clearLabel,
  onChange,
  onClose,
  onClear,
  onFocus,
  dataTest,
  highlightToday = true,
  weekendUnavailable = false,
  ...rest
}: DatepickerProps) => {
  const [locale, setLocale] = React.useState<null | string>(null);

  const formatDate = (date: string | undefined) => {
    if (date) {
      return parseAbsoluteToLocal(date);
    }

    return undefined;
  };

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

  const handleClear = () => {
    if (onClear) {
      onClear();
    }

    if (onChange) {
      onChange(null);
    }
  };

  const isDateUnavailable = (date: DateValue) => {
    if (weekendUnavailable && locale) {
      return isWeekend(date, locale);
    }

    return false;
  };

  const getLocale = (locale: string) => {
    setLocale(locale);
  };

  const classes = cx('ids-datepicker', {
    'ids-datepicker--disabled': disabled,
  });

  const calendar = (
    <>
      <Calendar
        aria-label={ariaLabel}
        className={classes}
        value={formatDate(selectedDay)}
        onChange={handleChange}
        isDisabled={disabled}
        highlightToday={highlightToday}
        isDateUnavailable={isDateUnavailable}
        getLocale={getLocale}
        minValue={formatDate(minDate)}
        maxValue={formatDate(maxDate)}
      />
      {isClearable && clearLabel && (
        <Button
          onClick={handleClear}
          className="ids-datepicker__action"
          appearance={{ type: 'ghost', variant: 'danger' }}
        >
          {clearLabel}
        </Button>
      )}
    </>
  );

  return (
    <Dropdown
      isOpen={!disabled && isOpen}
      onClose={onClose}
      content={calendar}
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
        onFocus={onFocus}
      />
    </Dropdown>
  );
};

export default Datepicker;
