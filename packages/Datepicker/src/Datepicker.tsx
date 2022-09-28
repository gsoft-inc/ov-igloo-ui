import * as React from 'react';
import cx from 'classnames';
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
  /** Callback function that will be called when the user types something. */
  onChange?: (date: Date) => void;
  /** Selected value for the date picker. */
  selectedDay?: string;
  /** True if the date picker should be disabled. */
  disabled?: boolean;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
}

const Datepicker: React.FunctionComponent<DatepickerProps> = (
  props: DatepickerProps
) => {
  const { selectedDay, onChange, disabled = false, dataTest } = props;

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

  const classes = cx('ids-datepicker', {
    'ids-datepicker--disabled': disabled,
  });

  return (
    <>
      <Calendar
        dataTest={dataTest}
        aria-label="Event date"
        className={classes}
        value={formattedDate}
        onChange={handleChange}
        isDisabled={disabled}
      />
    </>
  );
};

export default Datepicker;
