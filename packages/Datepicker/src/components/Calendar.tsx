import * as React from 'react';

import {
  useCalendar,
  useLocale,
  DateValue,
  AriaCalendarProps,
} from 'react-aria';
import { useCalendarState } from 'react-stately';
import {
  GregorianCalendar,
  Calendar as CustomCalendar,
} from '@internationalized/date';
import ChevronRight from '@igloo-ui/icons/dist/ChevronRight';
import ChevronLeft from '@igloo-ui/icons/dist/ChevronLeft';

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

interface CalendarProps extends AriaCalendarProps<DateValue> {
  className?: string;
  dataTest?: string;
  highlightToday?: boolean;
}

const Calendar: React.FunctionComponent<CalendarProps> = (
  props: CalendarProps,
) => {
  const { className, dataTest, highlightToday } = props;
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
      <CalendarGrid state={state} highlightToday={highlightToday} />
    </div>
  );
};

export default Calendar;
