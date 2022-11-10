import * as React from 'react';
import ChevronLeft from '@igloo-ui/icons/dist/ChevronLeft';
import ChevronRight from '@igloo-ui/icons/dist/ChevronRight';

import { useCalendar, useLocale } from 'react-aria';
import { useCalendarState } from 'react-stately';
import {
  GregorianCalendar,
  Calendar as CustomCalendar,
} from '@internationalized/date';
import {
  CalendarProps as ReactCalendarProps,
  DateValue,
} from '@react-types/calendar';

import CalendarButton from './CalendarButton';
import CalendarGrid from './CalendarGrid';

function createCalendar(identifier: string): CustomCalendar {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

interface CalendarProps extends ReactCalendarProps<DateValue> {
  className?: string;
  dataTest?: string;
}

const Calendar: React.FunctionComponent<CalendarProps> = (
  props: CalendarProps
) => {
  const { className, dataTest } = props;
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = React.useRef<HTMLDivElement>(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  return (
    <div
      {...calendarProps}
      ref={ref}
      className={className}
      data-test={dataTest}
    >
      <div className="ids-datepicker__header">
        <h2 className="ids-datepicker__title">{title}</h2>
        <CalendarButton {...prevButtonProps} className="ids-datepicker__prev">
          <ChevronLeft size="medium" />
        </CalendarButton>
        <CalendarButton {...nextButtonProps} className="ids-datepicker__next">
          <ChevronRight size="medium" />
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
};

export default Calendar;
